'use client';

import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { tokens } from '../../styles/tokens';
import { clipBR, CHAMFER } from '../../styles/cyberpunk';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – Button
   Variants: primary, secondary, ghost, dark
   Supports both <a> and <Link> via `href` prop
   ───────────────────────────────────────────── */

const baseStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  font-family: ${tokens.fonts.body};
  font-weight: ${tokens.fontWeights.semi};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  border: none;
  transition: all ${tokens.transitions.fast};

  svg { width: 16px; height: 16px; transition: transform ${tokens.transitions.fast}; }
  &:hover svg { transform: translateX(3px); }
`;

const sizeStyles = {
  sm: css`
    padding: 8px 16px;
    font-size: ${tokens.fontSizes.xs};
  `,
  md: css`
    padding: 12px 24px;
    font-size: ${tokens.fontSizes.sm};
  `,
  lg: css`
    padding: 14px 28px;
    font-size: ${tokens.fontSizes.base};
  `,
};

const variantStyles = {
  primary: css`
    color: #fff;
    background: ${tokens.colors.primary};
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: ${tokens.colors.primaryHover};
      transform: translate(-2px, -2px);
      color: #fff;
    }
  `,
  secondary: css`
    color: ${tokens.colors.textSoft};
    background: ${tokens.colors.surface};
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: ${tokens.colors.surfaceAlt};
      color: ${tokens.colors.text};
      border-color: ${tokens.colors.primary};
    }
  `,
  ghost: css`
    color: ${tokens.colors.primary};
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    &:hover { color: ${tokens.colors.primaryDark}; }
  `,
  dark: css`
    color: #fff;
    background: ${tokens.colors.primary};
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: ${tokens.colors.primaryHover};
      color: #fff;
    }
  `,
  mint: css`
    color: #fff;
    background: ${tokens.colors.mint};
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: #047857;
      transform: translateY(-1px);
      color: #fff;
    }
  `,
  navy: css`
    color: #fff;
    background: ${tokens.colors.navy};
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: #1d4ed8;
      transform: translateY(-1px);
      color: #fff;
    }
  `,
  orange: css`
    color: #fff;
    background: ${tokens.colors.orange};
    ${clipBR(CHAMFER.sm)}
    &:hover {
      background: #c2410c;
      transform: translateY(-1px);
      color: #fff;
    }
  `,
};

const StyledButton = styled.button`
  ${baseStyles}
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%; justify-content: center;`}
`;

const StyledLink = styled(Link)`
  ${baseStyles}
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%; justify-content: center;`}
`;

const StyledAnchor = styled.a`
  ${baseStyles}
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%; justify-content: center;`}
`;

/* Offset layer for the "window layering" cyberpunk effect */
const OffsetWrap = styled.div`
  position: relative;
  display: inline-flex;
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
`;

const Offset = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $color }) => $color || tokens.colors.primary};
  opacity: 0.2;
  ${clipBR(CHAMFER.sm)}
  transform: translate(4px, 4px);
  transition: transform ${tokens.transitions.fast};
  z-index: 0;

  ${OffsetWrap}:hover & {
    transform: translate(6px, 6px);
  }
`;

export const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M3 8h8.5m0 0L8 4.5m3.5 3.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  offset = false,
  fullWidth = false,
  arrow = false,
  ...props
}) {
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );

  let element;

  if (href && href.startsWith('/')) {
    element = (
      <StyledLink href={href} $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
        {content}
      </StyledLink>
    );
  } else if (href) {
    element = (
      <StyledAnchor href={href} $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
        {content}
      </StyledAnchor>
    );
  } else {
    element = (
      <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
        {content}
      </StyledButton>
    );
  }

  if (offset) {
    return (
      <OffsetWrap $fullWidth={fullWidth}>
        <Offset $color={variant === 'mint' ? tokens.colors.mint : variant === 'navy' ? tokens.colors.navy : variant === 'orange' ? tokens.colors.orange : tokens.colors.primary} aria-hidden="true" />
        {element}
      </OffsetWrap>
    );
  }

  return element;
}
