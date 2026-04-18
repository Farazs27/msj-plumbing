'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/testimonials', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const overDark = pathname === '/' || pathname === '/about' || pathname === '/services' || pathname === '/areas' || pathname === '/testimonials' || pathname === '/contact';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${overDark ? 'header--over-dark' : ''}`}>
      <Link href="/" className="logo">
        <span>MSJ</span>
        <span className="logo-dot" />
        <span className="logo-sub">Plumbing · est. a decade</span>
      </Link>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
      </nav>
      <a href="tel:01202080151" className="header-cta">
        <span className="pulse-dot" />
        24/7 · 01202 080 151
      </a>
      <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
        <span />
        <span />
      </button>
    </header>
  );
}
