import Link from 'next/link';
import { s } from '@/lib/style';

interface ComingSoonToolProps {
  headline: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export default function ComingSoonTool({ headline, description, icon, iconBg }: ComingSoonToolProps) {
  return (
    <div style={s('padding: 96px var(--pad-x) 88px; max-width: 720px; margin: 0 auto; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px;')}>
      <div style={s(`width: 56px; height: 56px; border-radius: 14px; background: ${iconBg}; color: #fff; display: flex; align-items: center; justify-content: center;`)}>
        {icon}
      </div>
      <div
        style={s(
          'display: inline-flex; align-items: center; gap: 8px; background: var(--surface-2); color: var(--ink-muted); padding: 6px 12px; border-radius: 100px; font-size: 13px; font-weight: 600;'
        )}
      >
        Coming soon
      </div>
      <h1 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 44px; line-height: 1.1; letter-spacing: -0.02em;')}>{headline}</h1>
      <p style={s('margin: 0; font-size: 17px; line-height: 1.6; color: var(--ink-muted); max-width: 46ch;')}>{description}</p>
      <p style={s('margin: 0; font-size: 15px; line-height: 1.6; color: var(--ink-muted); max-width: 46ch;')}>
        This tool isn&apos;t live yet. Once it is, it&apos;ll use the same AnyConvert plan and credits as{' '}
        <Link href="/dwg-to-pdf">DWG to PDF</Link> — no separate purchase. See <Link href="/pricing">pricing</Link>.
      </p>
      <a
        href="mailto:support@anyconvert.app"
        style={s(
          'background: var(--accent); color: var(--accent-ink); padding: 12px 22px; border-radius: 8px; font-size: 15px; font-weight: 600; margin-top: 8px;'
        )}
      >
        Let us know you need this
      </a>
    </div>
  );
}
