'use client';

import { createGlobalStyle } from 'styled-components';
import { tokens, media } from './tokens';

const GlobalStyles = createGlobalStyle`
  /* ── Reset ───────────────────────────────── */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${tokens.fonts.body};
    background: ${tokens.colors.pageBg};
    color: ${tokens.colors.text};
    line-height: ${tokens.lineHeights.normal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ── Accessibility ───────────────────────── */
  :focus-visible {
    outline: 2px solid ${tokens.colors.primary};
    outline-offset: 2px;
    border-radius: ${tokens.radii.sm};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Skip-to-content link */
  .skip-to-content {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    padding: 12px 24px;
    font-family: ${tokens.fonts.body};
    font-size: ${tokens.fontSizes.sm};
    font-weight: ${tokens.fontWeights.semi};
    color: #fff;
    background: ${tokens.colors.primary};
    text-decoration: none;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
    transition: top 0.2s ease;

    &:focus {
      top: ${tokens.spacing.sm};
      outline: 2px solid #fff;
      outline-offset: 2px;
    }
  }

  /* ── Reduced motion ──────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ── Typography ──────────────────────────── */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${tokens.fonts.display};
    font-weight: ${tokens.fontWeights.bold};
    line-height: ${tokens.lineHeights.tight};
    color: ${tokens.colors.text};
  }

  p {
    line-height: ${tokens.lineHeights.relaxed};
    color: ${tokens.colors.textSoft};
  }

  a {
    color: ${tokens.colors.primary};
    text-decoration: none;
    transition: color ${tokens.transitions.fast};

    &:hover {
      color: ${tokens.colors.primaryDark};
    }
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* ── Selection ───────────────────────────── */
  ::selection {
    background: ${tokens.colors.primaryLighter};
    color: ${tokens.colors.primaryDark};
  }

  /* ── Scrollbar ───────────────────────────── */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${tokens.colors.pageBg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${tokens.colors.textDim};
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${tokens.colors.primary};
  }

  /* ── Cyberpunk Global Utilities ─────────── */
  @keyframes cyber-scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(300%); }
  }
  @keyframes cyber-pulse {
    0%, 100% { opacity: 0.03; }
    50% { opacity: 0.08; }
  }
  @keyframes cyber-glow {
    0%, 100% { box-shadow: 0 0 0 rgba(5, 150, 105, 0); }
    50% { box-shadow: 0 0 8px rgba(5, 150, 105, 0.15); }
  }

  /* ── Utility ─────────────────────────────── */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${tokens.spacing.lg};

    ${media.xl} {
      padding: 0 ${tokens.spacing['2xl']};
    }
  }
`;

export default GlobalStyles;
