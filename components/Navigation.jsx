'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { tokens, media } from '../styles/tokens';
import { clipBR, CHAMFER, CyberCorners } from '../styles/cyberpunk';

const LOGO_URL = 'https://res.cloudinary.com/startplatz/image/upload/v1735664652/ai-hub/Logos/Logos%20-%20Regular/Logo-Black.png';

const NAV_LINKS = [
  {
    label: 'Weiterbildungen',
    href: '/arbeitssuchende',
    children: [
      { label: 'Für Arbeitssuchende', href: '/arbeitssuchende' },
      { label: 'Für Berufstätige', href: '/berufstaetige' },
    ],
  },
  { label: 'Für Unternehmen', href: '/unternehmen' },
  { label: 'Experten', href: '/experten' },
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/#events' },
  { label: 'FAQ', href: '/#faq' },
];

const Header = styled.header`
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: ${tokens.zIndex.nav};
  transition: background ${tokens.transitions.base}, box-shadow ${tokens.transitions.base};
  padding: 0 ${tokens.spacing.lg};

  ${({ $scrolled }) => $scrolled && css`
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
    box-shadow: 0 1px 0 rgba(0,0,0,0.06);
  `}
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const LogoWrap = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 2;
  padding: 4px;
  cursor: pointer;

  img { height: 34px; width: auto; }
`;

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 2;
  padding: 4px;

  img { height: 34px; width: auto; }
`;

const LogoCorner = styled.span`
  position: absolute;
  bottom: -3px; right: -5px;
  width: 8px; height: 8px;
  border-right: 2px solid ${tokens.colors.mint};
  border-bottom: 2px solid ${tokens.colors.mint};
  pointer-events: none;
`;

const DesktopNav = styled.nav`
  display: none;
  ${media.lg} { display: flex; align-items: center; gap: ${tokens.spacing.xl}; }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin: -20px 0;
`;

const NavLink = styled.a`
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.medium};
  color: ${tokens.colors.textMuted};
  text-decoration: none;
  position: relative;
  padding: ${tokens.spacing.xs} 0;
  transition: color ${tokens.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.xs};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 2px;
    background: ${tokens.colors.primary};
    transition: width ${tokens.transitions.base};
  }

  &:hover {
    color: ${tokens.colors.text};
    &::after { width: 100%; }
  }
`;

const DropdownTrigger = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${tokens.fontSizes.xs};
  margin-left: ${tokens.spacing.xs};
  transition: transform ${tokens.transitions.base};
  transform: rotate(0deg);

  ${NavItem}:hover & {
    transform: rotate(180deg);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: -${tokens.spacing.md};
  padding-top: 4px;
  background: transparent;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  z-index: ${tokens.zIndex.overlay};

  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const DropdownInner = styled.div`
  background: ${tokens.colors.surface};
  border: 1px solid ${tokens.colors.glassBorder};
  box-shadow: ${tokens.shadows.lg};
  border-radius: ${tokens.radii.md};
  overflow: hidden;
`;

const DropdownLink = styled.a`
  display: block;
  padding: ${tokens.spacing.md} ${tokens.spacing.lg};
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.medium};
  color: ${tokens.colors.textMuted};
  text-decoration: none;
  transition: background ${tokens.transitions.fast}, color ${tokens.transitions.fast};

  &:hover {
    background: ${tokens.colors.primaryLighter};
    color: ${tokens.colors.primary};
  }
`;

const CTABtnWrap = styled.div`
  position: relative;
  display: none;
  ${media.lg} { display: inline-flex; }
`;

const CTAButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  font-family: ${tokens.fonts.body};
  font-size: ${tokens.fontSizes.sm};
  font-weight: ${tokens.fontWeights.semi};
  color: #fff;
  background: ${tokens.colors.primary};
  ${clipBR(CHAMFER.xs)}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: background ${tokens.transitions.fast}, transform ${tokens.transitions.fast};
  z-index: 1;

  &:hover {
    background: ${tokens.colors.primaryHover};
    transform: translate(-1px, -1px);
    color: #fff;
  }
`;

const CTAOffset = styled.div`
  position: absolute;
  inset: 0;
  background: ${tokens.colors.primary};
  opacity: 0.2;
  ${clipBR(CHAMFER.xs)}
  transform: translate(3px, 3px);
  transition: transform ${tokens.transitions.fast};
  z-index: 0;

  ${CTABtnWrap}:hover & {
    transform: translate(4px, 4px);
  }
`;

const Burger = styled.button`
  display: flex; flex-direction: column; gap: 5px;
  padding: ${tokens.spacing.sm}; z-index: 2;
  ${media.lg} { display: none; }

  span {
    display: block; width: 22px; height: 2px;
    background: ${tokens.colors.text};
    transition: transform ${tokens.transitions.base}, opacity ${tokens.transitions.fast};
  }

  ${({ $open }) => $open && css`
    span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `}
`;

const MobileOverlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(30px);
  z-index: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: ${tokens.spacing['2xl']};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity ${tokens.transitions.slow}, visibility ${tokens.transitions.slow};
  ${media.lg} { display: none; }
`;

const MobileLink = styled.a`
  font-family: ${tokens.fonts.display};
  font-size: ${tokens.fontSizes['3xl']};
  font-weight: ${tokens.fontWeights.bold};
  color: ${tokens.colors.text};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  &:hover { color: ${tokens.colors.primary}; }
`;

const MobileCTA = styled.a`
  position: relative;
  margin-top: ${tokens.spacing.lg};
  padding: 14px 32px;
  font-size: ${tokens.fontSizes.base};
  font-weight: ${tokens.fontWeights.semi};
  color: #fff;
  background: ${tokens.colors.primary};
  ${clipBR(CHAMFER.sm)}
  text-decoration: none;
  text-transform: uppercase;
  &:hover { background: ${tokens.colors.primaryHover}; color: #fff; }
`;

function handleHashNavigation(href) {
  if (href.startsWith('/#')) {
    const hash = href.slice(1);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => { setScrolled(window.scrollY > 40); }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape' && mobileOpen) setMobileOpen(false); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileOpen]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <Header $scrolled={scrolled} role="banner">
        <Inner>
          <LogoLink href="/" aria-label="STARTPLATZ AI Hub">
            <img src={LOGO_URL} alt="STARTPLATZ AI Hub Logo" width="200" height="34" loading="eager" />
            <LogoCorner aria-hidden="true" />
          </LogoLink>
          <DesktopNav aria-label="Hauptnavigation">
            {NAV_LINKS.map((l) => (
              <NavItem key={l.href}>
                {l.children ? (
                  <>
                    <NavLink as="span">
                      {l.label}
                      <DropdownTrigger>▼</DropdownTrigger>
                    </NavLink>
                    <Dropdown>
                      <DropdownInner>
                        {l.children.map((child) => (
                          <Link key={child.href} href={child.href} passHref legacyBehavior>
                            <DropdownLink>{child.label}</DropdownLink>
                          </Link>
                        ))}
                      </DropdownInner>
                    </Dropdown>
                  </>
                ) : l.href.startsWith('/#') ? (
                  <NavLink
                    as="button"
                    onClick={() => handleHashNavigation(l.href)}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', font: 'inherit' }}
                  >
                    {l.label}
                  </NavLink>
                ) : (
                  <Link href={l.href} passHref legacyBehavior>
                    <NavLink>{l.label}</NavLink>
                  </Link>
                )}
              </NavItem>
            ))}
          </DesktopNav>
          <CTABtnWrap>
            <CTAOffset aria-hidden="true" />
            <CTAButton
              as="button"
              onClick={() => handleHashNavigation('/#newsletter')}
              style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              Beratung buchen
            </CTAButton>
          </CTABtnWrap>
          <Burger $open={mobileOpen} onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={mobileOpen}>
            <span /><span /><span />
          </Burger>
        </Inner>
      </Header>
      <MobileOverlay $open={mobileOpen} aria-hidden={!mobileOpen} role="dialog" aria-label="Navigation">
        <nav aria-label="Mobile Navigation">
          {NAV_LINKS.map((l) => {
            if (l.children) {
              return (
                <React.Fragment key={l.href}>
                  {l.children.map((child) => (
                    <Link key={child.href} href={child.href} passHref legacyBehavior>
                      <MobileLink onClick={closeMobile} tabIndex={mobileOpen ? 0 : -1}>{child.label}</MobileLink>
                    </Link>
                  ))}
                </React.Fragment>
              );
            }
            if (l.href.startsWith('/#')) {
              return (
                <MobileLink
                  key={l.href}
                  as="button"
                  onClick={() => { handleHashNavigation(l.href); closeMobile(); }}
                  tabIndex={mobileOpen ? 0 : -1}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', font: 'inherit' }}
                >
                  {l.label}
                </MobileLink>
              );
            }
            return (
              <Link key={l.href} href={l.href} passHref legacyBehavior>
                <MobileLink onClick={closeMobile} tabIndex={mobileOpen ? 0 : -1}>{l.label}</MobileLink>
              </Link>
            );
          })}
          <MobileCTA
            as="button"
            onClick={() => { handleHashNavigation('/#newsletter'); closeMobile(); }}
            tabIndex={mobileOpen ? 0 : -1}
            style={{ border: 'none', background: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Beratung buchen
          </MobileCTA>
        </nav>
      </MobileOverlay>
    </>
  );
}
