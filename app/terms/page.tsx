import type { Metadata } from 'next';
import { s } from '@/lib/style';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of the AnyConvert API and website.',
};

export default function TermsPage() {
  return (
  <div style={s("max-width: 780px; margin: 0 auto; padding: 72px 32px 120px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 40px;")}>

    <div style={s("display: flex; flex-direction: column; gap: 6px;")}>
      <h1 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 40px;")}>Terms of Service</h1>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>1. Agreement to Terms</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>By accessing or using the AnyConvert API, dashboard, or website (together, "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms apply to anyone who creates an account, requests an API key, or sends a request to the Service, operated by AnyConvert ("we," "our," "us").</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>2. Service Description</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>AnyConvert is an API that converts documents from one format into another. Our services include:</p>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li>Converting DWG drawings to PDF</li>
        <li>Converting between common document and image formats, as listed on our <a href="/#tools">tools page</a></li>
        <li>Delivering the result of a conversion to a webhook URL you provide, rather than requiring you to poll or download it manually</li>
      </ul>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We may add, change, or retire individual conversion tools at any time, and will make reasonable efforts to give notice before retiring a tool you actively use.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>3. Accounts and API Keys</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>You are responsible for:</p>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li>Keeping your API key confidential, and regenerating it immediately from your dashboard if you believe it has been exposed (a regenerated key invalidates the old one right away)</li>
        <li>All activity that occurs under your API key, whether or not you authorized it</li>
        <li>Providing accurate account and billing information</li>
      </ul>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We may suspend or revoke a key we reasonably believe is being used fraudulently, abusively, or in violation of these Terms.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>4. Credits and Billing</h2>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li>Access to the Service is paid for through a monthly subscription plan (Starter or Growth), which grants a fixed number of credits for each billing period, at the prices shown on our <a href="/pricing">Pricing</a> page</li>
        <li>One credit is charged for every conversion request we accept and queue for processing, whether that conversion later succeeds or fails; see our <a href="/refundpolicy">Refund Policy</a> for the full explanation</li>
        <li>Credits reset to your plan's monthly allowance on each renewal; unused credits do not carry over to the next billing period</li>
        <li>Your subscription renews automatically each month until you cancel it. You can cancel anytime using the subscription management link in the payment confirmation email our payment processor, Paddle, sends after each charge</li>
        <li>All payments are processed by Paddle, our third-party payment processor. We do not store your full card details</li>
        <li>Prices may change; a price change takes effect from your next renewal, not your current billing period</li>
      </ul>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>5. Acceptable Use</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>You agree not to:</p>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li>Submit files you don't have the right to process</li>
        <li>Use the Service to convert unlawful content</li>
        <li>Attempt to bypass rate limits, credit accounting, or authentication</li>
        <li>Reverse engineer or attempt to extract the underlying conversion tools</li>
        <li>Resell or sublicense access to the API without our prior written agreement</li>
      </ul>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We may suspend accounts that violate this section.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>6. Your Content</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>You retain all ownership rights to the files you submit and the results we return to you. We don't claim any ownership over your content, and we don't use your files to train models, for analytics, or for any purpose beyond performing the conversion you requested.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>7. Data Privacy and Security</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>All requests to the API are encrypted in transit, and API keys are stored as a one-way hash, never in plaintext. Exactly what data we collect, how long we keep it, and when your files are deleted is described in full in our <a href="/privacy">Privacy Policy</a>, which forms part of these Terms.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>8. Service Limitations</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>While we aim to provide a fast and reliable service:</p>
      <ul style={s("margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 15px; line-height: 1.7; color: var(--ink);")}>
        <li>The Service is provided on an "as is" and "as available" basis, with no guarantee of uninterrupted or error-free operation</li>
        <li>Conversion quality and success depend on the input file you provide; a malformed, corrupt, or unsupported file may fail to convert</li>
        <li>We are not liable for delays or failures caused by circumstances outside our reasonable control</li>
        <li>We may perform maintenance that temporarily affects availability, and will try to do so with minimal disruption</li>
      </ul>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>9. Fees and Refunds</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Purchases of credit packs are governed by our <a href="/refundpolicy">Refund Policy</a>, which is part of these Terms.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>10. Limitation of Liability</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>To the fullest extent permitted by law, AnyConvert will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability for any claim relating to the Service is limited to the amount you paid us in the 3 months preceding the claim. Nothing in these Terms limits liability that cannot be limited under applicable law.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>11. Termination</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>You may stop using the Service at any time. We may suspend or terminate your access if you violate these Terms, or with reasonable notice for any other reason. Termination does not entitle you to a refund of already-charged credits; unused credits are handled under our <a href="/refundpolicy">Refund Policy</a>.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>12. Changes to These Terms</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>We may update these Terms from time to time. If we make a material change, we will notify account holders by email or through the dashboard before it takes effect. Continued use of the Service after a change takes effect means you accept the updated Terms.</p>
    </div>

    <div style={s("display: flex; flex-direction: column; gap: 14px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22px; padding-top: 8px; border-top: 1px solid var(--line);")}>13. Contact Information</h2>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>If you have any questions about these Terms, please contact us at:</p>
      <p style={s("margin: 0; font-size: 15px; line-height: 1.7; color: var(--ink);")}>Email: <a href="mailto:support@anyconvert.app">support@anyconvert.app</a></p>
    </div>

  </div>
  );
}
