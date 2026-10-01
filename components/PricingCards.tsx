'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { s } from '@/lib/style';

declare global {
  interface Window {
    Paddle?: {
      Environment: { set: (env: string) => void };
      Initialize: (opts: { token: string; eventCallback: (event: { name: string; data?: { transaction_id?: string } }) => void }) => void;
      Checkout: { open: (opts: { items: { priceId: string; quantity: number }[]; customData: Record<string, string> }) => void };
    };
  }
}

const PADDLE_CONFIG = {
  environment: 'sandbox',
  clientToken: 'test_e14d7bd157c47cabc427c33cb1d',
  // Values are converter-app's EApiKeyPlan enum strings, not arbitrary labels.
  priceIds: { uses_100: 'pri_01m3p1vv0fr6kapq0mt9zwrgs4', uses_200: 'pri_01m3p1tby8yfyegpqqfd2pt1sm' },
};

type Plan = 'uses_100' | 'uses_200';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function PricingCards({ heading = true }: { heading?: boolean }) {
  const router = useRouter();
  const [paddleReady, setPaddleReady] = useState(false);
  const [pendingPlan, setPendingPlan] = useState<Plan | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!paddleReady || !window.Paddle) return;
    window.Paddle.Environment.set(PADDLE_CONFIG.environment);
    window.Paddle.Initialize({
      token: PADDLE_CONFIG.clientToken,
      eventCallback: (event) => {
        if (event.name === 'checkout.completed' && event.data?.transaction_id) {
          router.push(`/dashboard?transaction=${event.data.transaction_id}`);
        }
      },
    });
  }, [paddleReady, router]);

  function startCheckout(plan: Plan) {
    setPendingPlan(plan);
    setFormError(null);
  }

  function submitDetails() {
    if (!pendingPlan) return;
    if (!name.trim()) {
      setFormError('Enter your name.');
      return;
    }
    if (!isValidEmail(email)) {
      setFormError('Enter a valid email address.');
      return;
    }
    window.Paddle?.Checkout.open({
      items: [{ priceId: PADDLE_CONFIG.priceIds[pendingPlan], quantity: 1 }],
      customData: { plan: pendingPlan, name: name.trim(), email: email.trim() },
    });
    setPendingPlan(null);
  }

  return (
    <>
      <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" onLoad={() => setPaddleReady(true)} />

      <div style={s('max-width: 920px; margin: 0 auto; display: flex; flex-direction: column; gap: 44px; align-items: center; width: 100%;')}>
        {heading && (
          <div style={s('text-align: center; display: flex; flex-direction: column; gap: 14px;')}>
            <h1 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 44px;')}>Simple, credit-based pricing</h1>
            <p style={s('margin: 0; font-size: 16px; color: var(--ink-muted); max-width: 52ch;')}>
              Subscribe monthly and get a fresh batch of credits with every renewal. Each credit converts one document; unused credits do not
              carry over to the next month. Prices below are for DWG to PDF; other tools are priced lower per document, see each tool&apos;s
              page for its rate.
            </p>
          </div>
        )}

        <div id="plans" className="plans-row" style={s('display: flex; gap: 28px; width: 100%;')}>
          <div
            className="plan-card-starter"
            style={s(
              'flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 32px; display: flex; flex-direction: column; gap: 20px;'
            )}
          >
            <div>
              <div style={s('font-size: 15px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
                Starter
              </div>
              <div style={s('display: flex; align-items: baseline; gap: 8px; margin-top: 10px;')}>
                <span style={s('font-family: var(--font-display); font-size: 44px; font-weight: 600;')}>$100</span>
                <span style={s('font-size: 15px; color: var(--ink-muted);')}>/ 100 documents</span>
              </div>
              <div style={s('font-size: 14px; color: var(--ink-muted); margin-top: 4px;')}>$1.00 per document</div>
            </div>
            <div style={s('height: 1px; background: var(--line);')} />
            <ul style={s('margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14.5px; color: var(--ink);')}>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Full API access
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Webhook delivery
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Renews automatically every month
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Email support
              </li>
            </ul>
            <button
              onClick={() => startCheckout('uses_100')}
              style={s(
                'text-align: center; border: 1px solid var(--ink); color: var(--ink); padding: 12px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; margin-top: 8px; background: none; cursor: pointer; width: 100%;'
              )}
            >
              Buy Starter
            </button>
          </div>

          <div
            className="plan-card-growth"
            style={s(
              'flex: 1; background: var(--surface); border: 2px solid var(--accent); border-radius: 14px; padding: 32px; display: flex; flex-direction: column; gap: 20px; position: relative;'
            )}
          >
            <div
              style={s(
                'position: absolute; top: -13px; right: 28px; background: var(--accent); color: var(--accent-ink); font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.02em;'
              )}
            >
              BEST VALUE
            </div>
            <div>
              <div style={s('font-size: 15px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
                Growth
              </div>
              <div style={s('display: flex; align-items: baseline; gap: 8px; margin-top: 10px;')}>
                <span style={s('font-family: var(--font-display); font-size: 44px; font-weight: 600;')}>$180</span>
                <span style={s('font-size: 15px; color: var(--ink-muted);')}>/ 200 documents</span>
              </div>
              <div style={s('font-size: 14px; color: var(--ink-muted); margin-top: 4px;')}>$0.90 per document</div>
            </div>
            <div style={s('height: 1px; background: var(--line);')} />
            <ul style={s('margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14.5px; color: var(--ink);')}>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Everything in Starter
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> 10% lower per-document rate
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Priority processing
              </li>
              <li style={s('display: flex; gap: 10px;')}>
                <span style={s('color: var(--success); font-weight: 700;')}>✓</span> Priority support
              </li>
            </ul>
            <button
              onClick={() => startCheckout('uses_200')}
              style={s(
                'text-align: center; background: var(--accent); color: var(--accent-ink); padding: 12px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; margin-top: 8px; border: none; cursor: pointer; width: 100%;'
              )}
            >
              Buy Growth
            </button>
          </div>
        </div>

        <p style={s('margin: 0; font-size: 14px; color: var(--ink-muted); text-align: center;')}>
          Your plan renews automatically every month, and your credit balance resets to your plan&apos;s monthly allowance; unused credits do
          not carry over. You can cancel anytime from the confirmation email we send after checkout. See the full breakdown in our{' '}
          <Link href="/refundpolicy">Refund Policy</Link>.
        </p>
      </div>

      {pendingPlan && (
        <div
          style={s(
            'position: fixed; inset: 0; background: rgba(28,31,34,0.55); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px;'
          )}
        >
          <div style={s('background: var(--surface); border-radius: 14px; padding: 32px; max-width: 400px; width: 100%; position: relative;')}>
            <button
              onClick={() => setPendingPlan(null)}
              aria-label="Close"
              style={s('position: absolute; top: 12px; right: 12px; background: none; border: none; cursor: pointer; font-size: 18px; color: var(--ink-muted); line-height: 1;')}
            >
              ×
            </button>

            <div style={s('font-size: 18px; font-weight: 700; font-family: var(--font-display); margin-bottom: 6px;')}>
              A couple of details first
            </div>
            <div style={s('font-size: 14px; color: var(--ink-muted); margin-bottom: 20px;')}>
              We&apos;ll use these to set up your account before payment.
            </div>

            <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
              <div style={s('display: flex; flex-direction: column; gap: 6px;')}>
                <label htmlFor="checkout-name" style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted);')}>
                  Name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={s('padding: 10px 14px; border: 1px solid var(--line); border-radius: 8px; font-size: 14.5px; color: var(--ink); box-sizing: border-box;')}
                />
              </div>
              <div style={s('display: flex; flex-direction: column; gap: 6px;')}>
                <label htmlFor="checkout-email" style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted);')}>
                  Email
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={s('padding: 10px 14px; border: 1px solid var(--line); border-radius: 8px; font-size: 14.5px; color: var(--ink); box-sizing: border-box;')}
                />
              </div>
              {formError && <div style={s('font-size: 13px; color: var(--danger);')}>{formError}</div>}
              <button
                onClick={submitDetails}
                style={s(
                  'background: var(--accent); color: var(--accent-ink); padding: 12px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; margin-top: 6px;'
                )}
              >
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 720px) {
          .plans-row {
            flex-direction: column !important;
          }
          .plan-card-growth {
            order: -1;
          }
        }
      `}</style>
    </>
  );
}
