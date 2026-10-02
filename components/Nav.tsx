'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { s } from '@/lib/style';
import { getAuthToken, onAuthChange } from '@/lib/auth';
import logo from '@/public/logo.png';

const LINKS = [
  { href: '/#tools', label: 'Tools', key: '/tools' },
  { href: '/docs', label: 'Docs', key: '/docs' },
  { href: '/pricing', label: 'Pricing', key: '/pricing' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const active = usePathname();

  // Reads the auth cookie client-side only — the server-rendered pass always assumes logged
  // out, then this corrects it right after mount (matches middleware's own restrictive default).
  // Also listens for same-page login (the post-checkout dashboard flow sets the cookie without
  // changing the URL, so `active` alone wouldn't trigger a re-check).
  useEffect(() => {
    setLoggedIn(!!getAuthToken());
    return onAuthChange(() => setLoggedIn(!!getAuthToken()));
  }, [active]);

  return (
    <div
      style={s(
        'display: flex; align-items: center; justify-content: space-between; padding: 22px var(--pad-x); border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--bg); z-index: 10;'
      )}
    >
      <Link href="/" style={s('display: flex; align-items: center;')}>
        <Image src={logo} alt="AnyConvert" style={s('height: 30px; width: auto; display: block;')} priority />
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="nav-burger"
        style={s('display: none; cursor: pointer; padding: 6px; background: none; border: none; align-items: center; justify-content: center;')}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      <div className={`nav-links${open ? ' nav-links-open' : ''}`} style={s('display: flex; align-items: center; gap: 36px;')}>
        {LINKS.map((link) =>
          active === link.key ? (
            <span key={link.key} style={s('font-size: 15px; font-weight: 600; color: var(--accent);')}>
              {link.label}
            </span>
          ) : (
            <Link key={link.key} href={link.href} style={s('font-size: 15px; font-weight: 500; color: var(--ink);')}>
              {link.label}
            </Link>
          )
        )}
        {loggedIn ? (
          active === '/dashboard' ? (
            <span style={s('font-size: 15px; font-weight: 600; color: var(--accent);')}>Dashboard</span>
          ) : (
            <Link href="/dashboard" style={s('font-size: 15px; font-weight: 500; color: var(--ink);')}>
              Dashboard
            </Link>
          )
        ) : active === '/login' ? (
          <span style={s('font-size: 15px; font-weight: 600; color: var(--accent);')}>Log in</span>
        ) : (
          <Link href="/login" style={s('font-size: 15px; font-weight: 500; color: var(--ink);')}>
            Log in
          </Link>
        )}
        {!loggedIn && (
          <Link
            href="/pricing"
            style={s('background: var(--accent); color: var(--accent-ink); padding: 10px 20px; border-radius: 8px; font-size: 15px; font-weight: 600;')}
          >
            Get your API key
          </Link>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 720px) {
          .nav-burger {
            display: flex !important;
          }
          .nav-links {
            display: none !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg);
            padding: 16px 20px !important;
            border-bottom: 1px solid var(--line);
            gap: 16px !important;
            box-shadow: 0 12px 24px -12px rgba(28, 31, 34, 0.15);
          }
          .nav-links-open {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
