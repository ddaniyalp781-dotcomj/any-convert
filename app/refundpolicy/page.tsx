import type { Metadata } from 'next';
import { s } from '@/lib/style';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: "When you're entitled to a refund on AnyConvert subscription charges.",
};

export default function RefundPolicyPage() {
  return (
  <div style={s("max-width: 780px; margin: 0 auto; padding: 72px 32px 120px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px;")}>

    <div style={s("display: flex; flex-direction: column; gap: 10px;")}>
      <h1 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 40px;")}>Refund Policy</h1>
      <p style={s("margin: 0; font-size: 14.5px; color: var(--ink-muted);")}>This describes when you're entitled to a refund on AnyConvert credit purchases.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>1. How Credits Work</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Your subscription (Starter or Growth) renews automatically every month and grants a fixed number of credits for that billing period. Unused credits do not carry over to the next period. One credit is charged for every conversion request we accept and queue for processing. This section explains exactly when that charge happens and what your options are afterward.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>2. When a Credit Is Charged</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>A credit is charged as soon as we accept your request and queue it for processing, not when the conversion finishes. This means a credit is used whether the conversion later succeeds or fails, for example if the file could not be read or the conversion tool encountered an error. We recommend confirming your file is a valid, supported format before submitting it, since a failed conversion still uses a credit. A request is not charged if we never accept it in the first place, such as when your account has no credits remaining or the request is rejected before it's queued.</p>
      <table style={s("margin-top: 4px;")}>
        <tbody>
          <tr style={s("border-bottom: 1px solid var(--line);")}>
            <td style={s("padding: 10px 0; font-size: 14px; font-weight: 600; width: 55%;")}>When this happens</td>
            <td style={s("padding: 10px 0; font-size: 14px; font-weight: 600;")}>Credit charged?</td>
          </tr>
          <tr style={s("border-bottom: 1px solid var(--line);")}>
            <td style={s("padding: 10px 0; font-size: 14px;")}>Request accepted and queued, conversion completes and is delivered</td>
            <td style={s("padding: 10px 0; font-size: 14px; color: var(--success); font-weight: 600;")}>Yes, 1 credit</td>
          </tr>
          <tr style={s("border-bottom: 1px solid var(--line);")}>
            <td style={s("padding: 10px 0; font-size: 14px;")}>Request accepted and queued, conversion later fails (invalid file, conversion error, timeout)</td>
            <td style={s("padding: 10px 0; font-size: 14px; color: var(--success); font-weight: 600;")}>Yes, 1 credit</td>
          </tr>
          <tr>
            <td style={s("padding: 10px 0; font-size: 14px;")}>Request never accepted (no credits remaining, invalid request)</td>
            <td style={s("padding: 10px 0; font-size: 14px; color: var(--ink-muted); font-weight: 600;")}>No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>3. Refunds on Unused Credits</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>If you haven't used any credit from your current billing period yet, you can request a full refund of that period's charge within 3 days of the charge by contacting support@anyconvert.app. Once even one credit from that period has been used, the charge for that period is no longer eligible for a refund.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>4. Renewal Refunds and Cancellation</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>If your subscription renews and you didn't intend to continue, contact support@anyconvert.app within 3 days of the renewal charge and we'll refund it in full, provided none of that period's credits have been used yet. You can cancel anytime to stop future renewals using the subscription management link in the payment confirmation email our payment processor, Paddle, sends after each charge.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>5. What's Not Refundable</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Credits already charged for an accepted conversion request are not refundable, whether that conversion succeeded or failed, because the request was processed as submitted. This policy doesn't limit any refund right you have under applicable consumer protection law.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>6. How to Request a Refund</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Email support@anyconvert.app with your account email and the purchase you're asking about. Approved refunds are returned to your original payment method within 7 days.</p>
    </div>

  </div>
  );
}
