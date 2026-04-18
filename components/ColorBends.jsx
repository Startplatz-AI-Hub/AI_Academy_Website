'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

/* ─────────────────────────────────────────────
   COLOR BENDS BACKGROUND
   Port of ReactBits ColorBends (Three.js → raw WebGL)
   Original shader kept 1:1 from reactbits.dev
   ───────────────────────────────────────────── */

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
`;

/* ── Shaders (original ReactBits) ────────────── */

const MAX_COLORS = 8;

const VERT = `
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
#define MAX_COLORS ${MAX_COLORS}

uniform vec2  uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2  uRot;
uniform int   uColorCount;
uniform vec3  uColors[MAX_COLORS];
uniform int   uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2  uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int   uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2  vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;

  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;

  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
  }

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  col *= uIntensity;

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`;

/* ── WebGL helpers ───────────────────────────── */

function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('[ColorBends] Shader compile error:', gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function linkProgram(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error('[ColorBends] Program link error:', gl.getProgramInfoLog(p));
    gl.deleteProgram(p);
    return null;
  }
  return p;
}

function hexToVec3(hex) {
  const h = hex.replace('#', '').trim();
  const v =
    h.length === 3
      ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
      : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  return [v[0] / 255, v[1] / 255, v[2] / 255];
}

/* ── Component ───────────────────────────────── */

export default function ColorBends({
  rotation = 90,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.15,
  iterations = 1,
  intensity = 1.5,
  bandWidth = 6,
}) {
  const canvasRef = useRef(null);

  /* mutable refs so render loop always sees latest values */
  const propsRef = useRef({
    rotation, speed, colors, transparent, autoRotate,
    scale, frequency, warpStrength, mouseInfluence,
    parallax, noise, iterations, intensity, bandWidth,
  });
  useEffect(() => {
    propsRef.current = {
      rotation, speed, colors, transparent, autoRotate,
      scale, frequency, warpStrength, mouseInfluence,
      parallax, noise, iterations, intensity, bandWidth,
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    if (!gl) {
      console.warn('[ColorBends] WebGL not supported');
      return;
    }

    /* ── Compile & link ── */
    const vs = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = linkProgram(gl, vs, fs);
    if (!prog) return;

    /* ── Full-screen quad ── */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1,  -1, 1,
      -1,  1,  1, -1,   1, 1,
    ]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    /* ── Uniform locations ── */
    const u = {};
    [
      'uCanvas', 'uTime', 'uSpeed', 'uRot', 'uColorCount',
      'uTransparent', 'uScale', 'uFrequency', 'uWarpStrength',
      'uPointer', 'uMouseInfluence', 'uParallax', 'uNoise',
      'uIterations', 'uIntensity', 'uBandWidth',
    ].forEach(n => { u[n] = gl.getUniformLocation(prog, n); });

    /* color array uniforms */
    const uColorsLocs = [];
    for (let i = 0; i < MAX_COLORS; i++) {
      uColorsLocs.push(gl.getUniformLocation(prog, `uColors[${i}]`));
    }

    /* ── State ── */
    const pointerTarget = [0, 0];
    const pointerCurrent = [0, 0];
    const SMOOTH = 8;
    let startTime = performance.now() / 1000;
    let lastTime = startTime;
    let raf;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    /* Listen on window since canvas has pointer-events: none */
    const onPointerMove = (e) => {
      const x = (e.clientX / w) * 2 - 1;
      const y = -((e.clientY / h) * 2 - 1);
      pointerTarget[0] = x;
      pointerTarget[1] = y;
    };

    const render = () => {
      const now = performance.now() / 1000;
      const dt = now - lastTime;
      lastTime = now;
      const elapsed = now - startTime;

      const P = propsRef.current;

      /* pointer smooth lerp */
      const amt = Math.min(1, dt * SMOOTH);
      pointerCurrent[0] += (pointerTarget[0] - pointerCurrent[0]) * amt;
      pointerCurrent[1] += (pointerTarget[1] - pointerCurrent[1]) * amt;

      /* rotation */
      const deg = (P.rotation % 360) + P.autoRotate * elapsed;
      const rad = (deg * Math.PI) / 180;

      gl.clearColor(0, 0, 0, P.transparent ? 0 : 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(prog);

      gl.uniform2f(u.uCanvas, w, h);
      gl.uniform1f(u.uTime, elapsed);
      gl.uniform1f(u.uSpeed, P.speed);
      gl.uniform2f(u.uRot, Math.cos(rad), Math.sin(rad));
      gl.uniform1i(u.uTransparent, P.transparent ? 1 : 0);
      gl.uniform1f(u.uScale, P.scale);
      gl.uniform1f(u.uFrequency, P.frequency);
      gl.uniform1f(u.uWarpStrength, P.warpStrength);
      gl.uniform2f(u.uPointer, pointerCurrent[0], pointerCurrent[1]);
      gl.uniform1f(u.uMouseInfluence, P.mouseInfluence);
      gl.uniform1f(u.uParallax, P.parallax);
      gl.uniform1f(u.uNoise, P.noise);
      gl.uniform1i(u.uIterations, P.iterations);
      gl.uniform1f(u.uIntensity, P.intensity);
      gl.uniform1f(u.uBandWidth, P.bandWidth);

      /* colors */
      const cols = (P.colors || []).filter(Boolean).slice(0, MAX_COLORS);
      gl.uniform1i(u.uColorCount, cols.length);
      for (let i = 0; i < MAX_COLORS; i++) {
        if (i < cols.length) {
          const rgb = hexToVec3(cols[i]);
          gl.uniform3f(uColorsLocs[i], rgb[0], rgb[1], rgb[2]);
        } else {
          gl.uniform3f(uColorsLocs[i], 0, 0, 0);
        }
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    raf = requestAnimationFrame(render);

    console.log('[ColorBends] WebGL initialized, canvas:', w, 'x', h);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
}
