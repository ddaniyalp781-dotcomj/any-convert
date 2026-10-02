import { s } from '@/lib/style';
import PricingCards from '@/components/PricingCards';

interface ToolPageProps {
  headline: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  price: string;
  trustBullet: string;
}

export default function ToolPage({ headline, description, icon, iconBg, price, trustBullet }: ToolPageProps) {
  return (
    <>
      {/* HERO */}
      <div className="tool-hero" style={s('display: flex; gap: 56px; align-items: center; padding: 96px var(--pad-x) 88px; max-width: 1312px; margin: 0 auto; box-sizing: border-box;')}>
        <div style={s('flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 24px;')}>
          <div style={s(`width: 56px; height: 56px; border-radius: 14px; background: ${iconBg}; color: #fff; display: flex; align-items: center; justify-content: center;`)}>
            {icon}
          </div>
          <h1 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 46px; line-height: 1.1; letter-spacing: -0.02em;')}>{headline}</h1>
          <p style={s('margin: 0; font-size: 17px; line-height: 1.6; color: var(--ink-muted); max-width: 46ch;')}>{description}</p>
          <div style={s('display: flex; align-items: center; gap: 14px; margin-top: 4px;')}>
            <a href="/pricing" style={s('background: var(--accent); color: var(--accent-ink); padding: 14px 24px; border-radius: 8px; font-size: 16px; font-weight: 600;')}>Get your API key</a>
            <a href="/docs" style={s('border: 1px solid var(--line); color: var(--ink); padding: 14px 24px; border-radius: 8px; font-size: 16px; font-weight: 600;')}>Read the docs</a>
          </div>
          <div style={s('font-size: 14.5px; color: var(--ink-muted);')}>{price} — on the same plan and credits as every other tool, no separate purchase.</div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={s('background: var(--surface-2); padding: 80px var(--pad-x);')}>
        <div style={s('max-width: 1120px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px;')}>
          <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 34px; text-align: center;')}>How it works</h2>
          <div className="tool-steps" style={s('display: flex; gap: 32px;')}>
            <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 12px;')}>
              <div style={s('font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--accent);')}>01</div>
              <div style={s('font-size: 18px; font-weight: 600;')}>POST your file</div>
              <div style={s('font-size: 15px; line-height: 1.6; color: var(--ink-muted);')}>Send it and your webhook URL to a single endpoint with your API key.</div>
            </div>
            <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 12px;')}>
              <div style={s('font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--accent);')}>02</div>
              <div style={s('font-size: 18px; font-weight: 600;')}>We process it</div>
              <div style={s('font-size: 15px; line-height: 1.6; color: var(--ink-muted);')}>Handled automatically on our infrastructure.</div>
            </div>
            <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 12px;')}>
              <div style={s('font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--accent);')}>03</div>
              <div style={s('font-size: 18px; font-weight: 600;')}>We call your webhook</div>
              <div style={s('font-size: 15px; line-height: 1.6; color: var(--ink-muted);')}>The result is delivered straight to your endpoint. No polling required.</div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST ROW */}
      <div style={s('padding: 72px var(--pad-x);')}>
        <div className="tool-trust" style={s('max-width: 1120px; margin: 0 auto; display: flex; gap: 40px;')}>
          <div style={s('flex: 1; display: flex; gap: 14px; align-items: flex-start;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2452B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s('flex-shrink: 0; margin-top: 2px;')}><path d="M12 2 4 5v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V5z"/><path d="m9 12 2 2 4-4"/></svg>
            <div style={s('font-size: 14.5px; line-height: 1.5; color: var(--ink-muted);')}>Files removed from our servers immediately after delivery.</div>
          </div>
          <div style={s('flex: 1; display: flex; gap: 14px; align-items: flex-start;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2452B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s('flex-shrink: 0; margin-top: 2px;')}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
            <div style={s('font-size: 14.5px; line-height: 1.5; color: var(--ink-muted);')}>API-key authentication on every request.</div>
          </div>
          <div style={s('flex: 1; display: flex; gap: 14px; align-items: flex-start;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2452B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s('flex-shrink: 0; margin-top: 2px;')}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v3M16 4v3"/></svg>
            <div style={s('font-size: 14.5px; line-height: 1.5; color: var(--ink-muted);')}>{trustBullet}</div>
          </div>
          <div style={s('flex: 1; display: flex; gap: 14px; align-items: flex-start;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2452B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s('flex-shrink: 0; margin-top: 2px;')}><path d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/></svg>
            <div style={s('font-size: 14.5px; line-height: 1.5; color: var(--ink-muted);')}>Built for automated pipelines. Webhook delivery, not a manual download page.</div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={s('padding: 88px var(--pad-x);')}>
        <PricingCards heading={false} />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .tool-hero { flex-direction: column; }
          .tool-steps { flex-direction: column; }
          .tool-trust { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
