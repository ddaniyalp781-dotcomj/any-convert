import type { Metadata } from 'next';
import Link from 'next/link';
import { s } from '@/lib/style';
import PricingCards from '@/components/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, credit-based pricing for the AnyConvert API. Starter and Growth plans, billed monthly.',
};

export default function PricingPage() {
  return (
    <div style={s('padding: 88px var(--pad-x);')}>
      <PricingCards />
      <div style={s('max-width: 920px; margin: 40px auto 0; text-align: center;')}>
        <p style={s('font-size: 14px; color: var(--ink-muted);')}>
          Questions before you subscribe? Email{' '}
          <a href="mailto:support@anyconvert.app">support@anyconvert.app</a> or read the{' '}
          <Link href="/docs">API docs</Link>.
        </p>
      </div>
    </div>
  );
}
