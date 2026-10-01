import Link from 'next/link';
import { s } from '@/lib/style';

export default function NotFound() {
  return (
    <div
      style={s(
        'flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 18px; padding: 88px var(--pad-x);'
      )}
    >
      <div style={s('font-family: var(--font-display); font-weight: 600; font-size: 88px; color: var(--accent); line-height: 1;')}>404</div>
      <h1 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 28px;')}>Page not found</h1>
      <p style={s('margin: 0; font-size: 15.5px; color: var(--ink-muted); max-width: 42ch;')}>
        The page you&apos;re looking for doesn&apos;t exist, or the link may be out of date.
      </p>
      <Link
        href="/"
        style={s(
          'display: inline-block; margin-top: 8px; background: var(--accent); color: var(--accent-ink); padding: 12px 22px; border-radius: 8px; font-size: 15px; font-weight: 600;'
        )}
      >
        Back to home
      </Link>
    </div>
  );
}
