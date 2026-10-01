import { s } from '@/lib/style';
import PricingCards from '@/components/PricingCards';

interface ToolPageProps {
  headline: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  price: string;
}

export default function ToolPage({ headline, description, icon, iconBg, price }: ToolPageProps) {
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

      {/* PRICING */}
      <div id="pricing" style={s('padding: 88px var(--pad-x);')}>
        <PricingCards heading={false} />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .tool-hero { flex-direction: column; }
          .tool-steps { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
