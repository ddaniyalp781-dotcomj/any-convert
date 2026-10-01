import type { Metadata } from 'next';
import { s } from '@/lib/style';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What data AnyConvert collects, why, and how long it is kept.',
};

export default function PrivacyPage() {
  return (
  <div style={s("max-width: 780px; margin: 0 auto; padding: 72px 32px 120px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px;")}>

    <div style={s("display: flex; flex-direction: column; gap: 10px;")}>
      <h1 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 40px;")}>Privacy Policy</h1>
      <p style={s("margin: 0; font-size: 14.5px; color: var(--ink-muted);")}>This explains what data AnyConvert ("we," "us") collects when you use our API and dashboard, why we collect it, and how long we keep it.</p>
    </div>

    <div style={s("background: var(--accent-soft); border-radius: 10px; padding: 20px 24px; display: flex; gap: 14px; align-items: flex-start;")}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><path d="M12 2 4 5v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V5z"/><path d="m9 12 2 2 4-4"/></svg>
      <div style={s("font-size: 14.5px; line-height: 1.6; color: var(--ink);")}><strong>The short version:</strong> the files you submit for conversion are used only to produce your result, and are deleted from our servers immediately after successful delivery to your webhook. We don't read, retain, inspect, or train on your files.</div>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>1. Information We Collect</h2>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li><strong>Account information:</strong> the email address you sign up with, and your API key (we store only a hash of it, never the plaintext).</li>
        <li><strong>Payment information:</strong> handled entirely by our payment processor(s). We receive confirmation that a payment succeeded and the amount, but we never see or store your full card number.</li>
        <li><strong>The files you submit:</strong> processed to produce your conversion result, then deleted. See Section 2.</li>
        <li><strong>Usage and log data:</strong> API request timestamps, which endpoint and strategy were used, job status, and error codes, kept for billing accuracy and troubleshooting.</li>
      </ul>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>2. How We Handle Your Files</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>A file you submit is stored only long enough to convert it and deliver the result to your webhook. Once delivery is confirmed, both the original file and the converted result are deleted. If delivery to your webhook fails, we retry up to 3 times; after 3 failed attempts, the file is deleted. We do not use your files for analytics, model training, or any purpose other than fulfilling your request, and we do not share them with any third party except as strictly necessary to perform the conversion itself.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>3. How We Use Information</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We use account and usage information to operate the Service: authenticating your requests, metering credits, billing you, sending account or service notifications, responding to support requests, and diagnosing failures. We don't sell your information, and we don't use it for advertising.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>4. Third Parties We Work With</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We rely on a small number of service providers to run AnyConvert, including a payment processor (for billing) and a cloud hosting provider (for compute and storage). Each only receives the data it needs to do its job. For example, our payment processor sees your billing details, not your uploaded files. A current list of providers is available on request to support@anyconvert.app.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>5. Data Retention</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Account and billing records are kept for as long as your account is active and for a period afterward as required for accounting and legal purposes. Uploaded files and conversion results are not retained beyond what's described in Section 2. You can request deletion of your account and associated records at any time. See Section 6.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>6. Your Rights</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Depending on where you're located, you may have the right to access, correct, or request deletion of your personal data, or to object to certain processing. To exercise any of these rights, contact us at support@anyconvert.app.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>7. Security</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>All requests to the API are encrypted in transit. API keys are stored as a one-way hash, not in plaintext, so we can't recover your key even if we wanted to. If it's lost, it has to be regenerated. Access to production systems is limited to those who need it to operate the Service.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>8. International Transfers</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Your data may be processed on servers located in a different country than your own. Where required by law, we take appropriate steps to ensure your data receives an adequate level of protection wherever it's processed.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>9. Children's Privacy</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>The Service is intended for business and developer use and is not directed at children. We don't knowingly collect personal information from anyone under 16.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>10. Changes to This Policy</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>If we make a material change to this policy, we'll notify account holders by email or through the dashboard before it takes effect.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>11. Contact</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Questions about this policy, or requests regarding your data, can be sent to support@anyconvert.app.</p>
    </div>

  </div>
  );
}
