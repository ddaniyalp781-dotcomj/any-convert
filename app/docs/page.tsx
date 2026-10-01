import type { Metadata } from 'next';
import Link from 'next/link';
import { s } from '@/lib/style';

export const metadata: Metadata = {
  title: 'API Docs',
  description: 'API reference for the AnyConvert conversion API. Send a file, get the result delivered to your webhook.',
};

export default function DocsPage() {
  return (
    <div style={s('max-width: 820px; margin: 0 auto; padding: 72px 32px 120px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 56px;')}>
      <div style={s('display: flex; flex-direction: column; gap: 12px;')}>
        <h1 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 42px;')}>API Reference</h1>
        <p style={s('margin: 0; font-size: 17px; color: var(--ink-muted); line-height: 1.6;')}>
          Send a file, get the result delivered to the webhook URL on your account. Every AnyConvert tool shares this same endpoint,
          API key, and integration pattern.
        </p>
      </div>

      {/* AUTH */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>Authentication</h2>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink); max-width: 68ch;')}>
          Every request needs your API key in an <code>x-api-key</code> header.
        </p>
        <pre style={s('margin: 0; background: #14181D; color: #E9E6DF; padding: 18px 20px; border-radius: 10px; font-family: var(--font-mono); font-size: 13.5px; overflow-x: auto;')}>
          x-api-key: your_api_key_here
        </pre>
      </div>

      {/* CONVERT ENDPOINT */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>Convert a file</h2>
        <div style={s('display: flex; align-items: center; gap: 10px;')}>
          <span style={s('background: var(--success-soft); color: var(--success); font-family: var(--font-mono); font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 5px;')}>POST</span>
          <code style={s('background: none; padding: 0; font-size: 15px;')}>/webhooks/trigger</code>
        </div>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink); max-width: 68ch;')}>
          The request returns as soon as the file is accepted and queued. The result is delivered separately to your webhook, not in
          this response.
        </p>

        <div style={s('margin-top: 6px; font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
          Request: multipart/form-data
        </div>
        <table className="settings-table">
          <tbody>
            <tr style={s('border-bottom: 1px solid var(--line);')}>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 600; width: 26%;')}>file</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted); width: 20%;')}>binary, required</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>The file to convert.</td>
            </tr>
            <tr style={s('border-bottom: 1px solid var(--line);')}>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 600;')}>drawingFileId</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>string, required</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>
                An id you choose to identify this file (letters, numbers, <code>_</code> and <code>-</code>, up to 64 characters).
                Re-using an id for a new upload supersedes any in-progress job for it.
              </td>
            </tr>
            <tr style={s('border-bottom: 1px solid var(--line);')}>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 600;')}>extractionId</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>string, required</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>An id you choose for your own tracking, same format as drawingFileId. Echoed back on delivery.</td>
            </tr>
            <tr>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 600;')}>language</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>string, optional</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>
                One of <code>en</code>, <code>pt</code>, <code>ja</code>, <code>de</code>, <code>es</code>, <code>zh</code>. Controls the
                language of error messages. Defaults to <code>en</code>.
              </td>
            </tr>
          </tbody>
        </table>

        <div style={s('margin-top: 6px; font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
          curl
        </div>
        <pre style={s('margin: 0; background: #14181D; color: #E9E6DF; padding: 18px 20px; border-radius: 10px; font-family: var(--font-mono); font-size: 13.5px; overflow-x: auto; white-space: pre-wrap;')}>
          {'curl -X POST https://api.anyconvert.app/webhooks/trigger \\\n  -H "x-api-key: your_api_key_here" \\\n  -F "file=@document.pdf" \\\n  -F "drawingFileId=file-001" \\\n  -F "extractionId=extraction-001"'}
        </pre>

        <div style={s('margin-top: 6px; font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
          Response: 202 Accepted
        </div>
        <pre style={s('margin: 0; background: #14181D; color: #E9E6DF; padding: 18px 20px; border-radius: 10px; font-family: var(--font-mono); font-size: 13.5px; overflow-x: auto;')}>
          {'{\n  "drawingFileId": "file-001",\n  "status": "accepted"\n}'}
        </pre>
        <p style={s('margin: 0; font-size: 14px; color: var(--ink-muted);')}>
          <code>status</code> is <code>&quot;already_accepted&quot;</code> instead if a job for the same <code>drawingFileId</code> is already in progress.
        </p>
      </div>

      {/* CANCEL ENDPOINT */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>Cancel a conversion</h2>
        <div style={s('display: flex; align-items: center; gap: 10px;')}>
          <span style={s('background: var(--success-soft); color: var(--success); font-family: var(--font-mono); font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 5px;')}>POST</span>
          <code style={s('background: none; padding: 0; font-size: 15px;')}>/webhooks/cancel</code>
        </div>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink); max-width: 68ch;')}>
          Stops a conversion that hasn&apos;t produced an outcome yet. Sends no webhook. Takes <code>drawingFileId</code> as JSON and
          returns <code>{'{ "drawingFileId", "result": "cancelled" | "not_active" }'}</code> — <code>not_active</code> covers a job
          that&apos;s already delivering, finished, or unknown.
        </p>
      </div>

      {/* WEBHOOK */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>
          Webhook delivery
        </h2>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink); max-width: 68ch;')}>
          Set your webhook URL from your dashboard. Note that a file is accepted and a credit charged the moment we queue it — before
          we know whether the conversion will actually succeed, so both outcomes below are billed the same way. See the{' '}
          <Link href="/refundpolicy">Refund Policy</Link> for the full explanation.
        </p>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink); max-width: 68ch;')}>
          Both outcomes below arrive the same way: one <code>multipart/form-data</code> POST to your webhook URL, carrying{' '}
          <code>drawingFileId</code>, <code>extractionId</code>, and <code>outcome</code> on every delivery.
        </p>

        <div style={s('margin-top: 6px; font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
          On success: multipart/form-data POST
        </div>
        <pre style={s('margin: 0; background: #14181D; color: #E9E6DF; padding: 18px 20px; border-radius: 10px; font-family: var(--font-mono); font-size: 13.5px; overflow-x: auto;')}>
          {'POST https://yourapp.com/your-webhook-path\nx-webhook-secret: <your webhook secret>\n\ndrawingFileId=file-001\nextractionId=extraction-001\noutcome=success\nfile=<the converted file, binary>'}
        </pre>

        <div style={s('margin-top: 6px; font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>
          On failure: multipart/form-data POST
        </div>
        <pre style={s('margin: 0; background: #14181D; color: #E9E6DF; padding: 18px 20px; border-radius: 10px; font-family: var(--font-mono); font-size: 13.5px; overflow-x: auto;')}>
          {'POST https://yourapp.com/your-webhook-path\nx-webhook-secret: <your webhook secret>\n\ndrawingFileId=file-001\nextractionId=extraction-001\noutcome=failure\nreason=invalid_file\nmessage=The file could not be read\ndetail=...'}
        </pre>
        <p style={s('margin: 0; font-size: 14px; color: var(--ink-muted);')}>
          <code>reason</code> is one of <code>invalid_file</code>, <code>dwg_conversion_failed</code>, <code>render_failed</code>,{' '}
          <code>empty_modelspace</code>, <code>timeout</code>, or <code>internal_error</code>. <code>detail</code> is only present on
          some failures.
        </p>

        <div style={s('margin-top: 10px; padding: 18px 20px; background: var(--surface-2); border-radius: 10px; display: flex; flex-direction: column; gap: 8px;')}>
          <div style={s('font-size: 14.5px; font-weight: 600;')}>Verifying a delivery</div>
          <p style={s('margin: 0; font-size: 14.5px; line-height: 1.7; color: var(--ink-muted);')}>
            The <code>x-webhook-secret</code> header carries the webhook secret you were given once, at signup. Compare it to the value you stored before trusting a payload. Respond <code>200</code> quickly, and do any slow work after acknowledging receipt.
          </p>
        </div>
        <p style={s('margin: 0; font-size: 14px; color: var(--ink-muted);')}>
          Retry policy: delivery is attempted immediately, then retried twice more (after 30 seconds, then 2 minutes) if your endpoint
          doesn&apos;t answer with a 2xx. After 3 failed attempts, delivery stops — email support@anyconvert.app with your{' '}
          <code>drawingFileId</code> to recover it.
        </p>
      </div>

      {/* ERRORS */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>Errors</h2>
        <p style={s('margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--ink);')}>
          A malformed or unreadable file is still <em>accepted</em> (202) and charged, then fails asynchronously via the webhook above with reason <code>invalid_file</code> — the API does not inspect the file before queuing it, so there is no separate synchronous validation error for that case.
        </p>
        <table>
          <tbody>
            <tr style={s('border-bottom: 1px solid var(--line);')}>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 700; font-family: var(--font-mono); width: 18%;')}>400</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>No file included in the request</td>
            </tr>
            <tr style={s('border-bottom: 1px solid var(--line);')}>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 700; font-family: var(--font-mono);')}>401</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>Invalid or missing API key, or no credits remaining</td>
            </tr>
            <tr>
              <td style={s('padding: 10px 0; font-size: 14px; font-weight: 700; font-family: var(--font-mono);')}>413</td>
              <td style={s('padding: 10px 0; font-size: 14px; color: var(--ink-muted);')}>File exceeds the upload size limit</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* LIMITS */}
      <div style={s('display: flex; flex-direction: column; gap: 14px;')}>
        <h2 style={s('margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 24px; padding-top: 8px; border-top: 1px solid var(--line);')}>Limits</h2>
        <ul style={s('margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: var(--ink); line-height: 1.6;')}>
          <li>Maximum file size: 100 MB</li>
          <li>Currently supported input format: DWG. More formats are added as new tools go live — see our tools page.</li>
        </ul>
      </div>

      <div style={s('padding: 20px 24px; background: var(--accent-soft); border-radius: 10px;')}>
        <p style={s('margin: 0; font-size: 14.5px; line-height: 1.7; color: var(--ink);')}>
          Not yet available: a sandbox/test API key, a job-status lookup endpoint, and a public changelog. If you need any of these for your integration, email{' '}
          <a href="mailto:support@anyconvert.app">support@anyconvert.app</a>.
        </p>
      </div>
    </div>
  );
}
