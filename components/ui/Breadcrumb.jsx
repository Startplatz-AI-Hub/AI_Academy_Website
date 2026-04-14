'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

/* ─────────────────────────────────────────────
   DESIGN SYSTEM – Breadcrumb
   ───────────────────────────────────────────── */

const Nav = styled.nav`
  margin-bottom: ${tokens.spacing.xl};
`;

const List = styled.ol`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  list-style: none;
  font-family: ${tokens.fonts.mono};
  font-size: ${tokens.fontSizes.xs};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.sm};
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkMuted : tokens.colors.textDim};
`;

const BreadLink = styled(Link)`
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkMuted : tokens.colors.textDim};
  text-decoration: none;
  transition: color ${tokens.transitions.fast};
  &:hover { color: ${tokens.colors.primary}; }
`;

const Current = styled.span`
  color: ${({ $variant }) => $variant === 'dark' ? tokens.colors.darkText : tokens.colors.text};
  font-weight: ${tokens.fontWeights.medium};
`;

const Separator = styled.span`
  color: ${({ $variant }) => $variant === 'dark' ? 'rgba(255,255,255,0.2)' : tokens.colors.textDim};
  font-size: 10px;
`;

export default function Breadcrumb({ items = [], variant = 'light' }) {
  return (
    <Nav aria-label="Breadcrumb">
      <List>
        <Item $variant={variant}>
          <BreadLink href="/" $variant={variant}>Home</BreadLink>
        </Item>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Item key={item.label} $variant={variant}>
              <Separator $variant={variant}>/</Separator>
              {isLast ? (
                <Current $variant={variant} aria-current="page">{item.label}</Current>
              ) : (
                <BreadLink href={item.href} $variant={variant}>{item.label}</BreadLink>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
}
