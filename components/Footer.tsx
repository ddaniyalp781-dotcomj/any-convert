import Link from 'next/link';
import { s } from '@/lib/style';

const TOOLS = [
  { href: '/pdf-to-word', label: 'PDF to Word' },
  { href: '/merge-pdf', label: 'Merge PDF' },
  { href: '/jpg-to-pdf', label: 'JPG to PDF' },
  { href: '/sign-pdf', label: 'Sign PDF' },
  { href: '/edit-pdf', label: 'Edit PDF' },
  { href: '/compress-pdf', label: 'Compress PDF' },
  { href: '/dwg-to-pdf', label: 'DWG to PDF' },
];

export default function Footer() {
  return (
    <div style={s('padding: 56px var(--pad-x) 40px; margin-top: auto; background: var(--surface-2); border-top: 1px solid var(--line);')}>
      <div
        style={s(
          'max-width: 1120px; margin: 0 auto; display: flex; flex-direction: var(--stack, row); justify-content: space-between; gap: 40px; padding-bottom: 32px; border-bottom: 1px solid var(--line);'
        )}
      >
        <div style={s('max-width: 260px;')}>
          <div style={s('font-family: var(--font-display); font-weight: 600; font-size: 19px; margin-bottom: 10px;')}>AnyConvert</div>
          <div style={s('font-size: 14px; color: var(--ink-muted); line-height: 1.6;')}>
            A simple conversion API for teams that need documents turned into the right format, automatically.
          </div>
        </div>
        <div style={s('display: flex; flex-direction: var(--stack, row); gap: 32px 56px; flex-wrap: wrap;')}>
          <div style={s('display: flex; flex-direction: column; gap: 10px;')}>
            <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;')}>
              Tools
            </div>
            {TOOLS.map((t) => (
              <Link key={t.href} href={t.href} style={s('font-size: 14.5px; color: var(--ink);')}>
                {t.label}
              </Link>
            ))}
          </div>
          <div style={s('display: flex; flex-direction: column; gap: 10px;')}>
            <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;')}>
              Product
            </div>
            <Link href="/docs" style={s('font-size: 14.5px; color: var(--ink);')}>
              Docs
            </Link>
            <Link href="/pricing" style={s('font-size: 14.5px; color: var(--ink);')}>
              Pricing
            </Link>
          </div>
          <div style={s('display: flex; flex-direction: column; gap: 10px;')}>
            <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;')}>
              Legal
            </div>
            <Link href="/terms" style={s('font-size: 14.5px; color: var(--ink);')}>
              Terms of Service
            </Link>
            <Link href="/privacy" style={s('font-size: 14.5px; color: var(--ink);')}>
              Privacy Policy
            </Link>
            <Link href="/refundpolicy" style={s('font-size: 14.5px; color: var(--ink);')}>
              Refund Policy
            </Link>
          </div>
          <div style={s('display: flex; flex-direction: column; gap: 10px;')}>
            <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 4px;')}>
              Support
            </div>
            <a href="mailto:support@anyconvert.app" style={s('font-size: 14.5px; color: var(--ink);')}>
              support@anyconvert.app
            </a>
          </div>
        </div>
      </div>
      <div style={s('max-width: 1120px; margin: 24px auto 0; font-size: 13px; color: var(--ink-muted);')}>
        © 2026 AnyConvert. All rights reserved.
      </div>
    </div>
  );
}
