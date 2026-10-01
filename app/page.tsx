import type { Metadata } from 'next';
import { s } from '@/lib/style';

export const metadata: Metadata = {
  title: 'Home',
  description: 'A document conversion API. Send a file, get the result delivered to your webhook, with one API key across every tool.',
};

export default function HomePage() {
  return (
    <>
  {/* HERO */}
  <div style={s("padding: 100px var(--pad-x) 80px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 26px;")}>
    <h1 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 54px; line-height: 1.08; letter-spacing: -0.02em; max-width: 16ch;")}>Every document conversion, one API.</h1>
    <p style={s("margin: 0; font-size: 18px; line-height: 1.6; color: var(--ink-muted); max-width: 52ch;")}>Send a file, get the result delivered to your webhook. One key and one integration pattern, across every conversion tool we offer.</p>
    <div className="hero-buttons" style={s("display: flex; gap: 14px; margin-top: 6px;")}>
      <a href="/pricing" style={s("background: var(--accent); color: var(--accent-ink); padding: 14px 24px; border-radius: 8px; font-size: 16px; font-weight: 600;")}>Get your API key</a>
      <a href="#tools" style={s("border: 1px solid var(--line); color: var(--ink); padding: 14px 24px; border-radius: 8px; font-size: 16px; font-weight: 600;")}>Explore all tools</a>
    </div>
    <div className="hero-code" style={s("margin-top: 28px; width: 100%; max-width: 680px; background: #14181D; border-radius: 14px; padding: 26px 30px; box-shadow: 0 20px 48px -20px rgba(28,31,34,0.35); text-align: left; box-sizing: border-box;")}>
      <div style={s("display: flex; gap: 8px; margin-bottom: 16px;")}>
        <div style={s("width: 11px; height: 11px; border-radius: 50%; background: #4B5157;")}></div>
        <div style={s("width: 11px; height: 11px; border-radius: 50%; background: #4B5157;")}></div>
        <div style={s("width: 11px; height: 11px; border-radius: 50%; background: #4B5157;")}></div>
      </div>
      <pre style={s("margin: 0; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.7; color: #E9E6DF; white-space: pre-wrap; overflow-wrap: break-word;")}><span style={s("color:#8B92A0;")}># Example request</span>{'\n'}
{'curl -X POST https://api.anyconvert.app/webhooks/trigger \\\n  -H "x-api-key: <your key>" \\\n  -F "file=@document.pdf" \\\n  -F "fileId=file-001" \\\n  -F "referenceId=reference-001"\n\n'}<span style={s("color:#8FB18A;")}>→ 202 Accepted</span>{'  {"fileId": "file-001", "status": "accepted"}'}</pre>
    </div>
  </div>

  {/* TOOLS GRID */}
  <div id="tools" style={s("background: var(--surface-2); padding: 84px var(--pad-x);")}>
    <div style={s("max-width: 1180px; margin: 0 auto; display: flex; flex-direction: column; gap: 44px;")}>
      <div style={s("text-align: center; display: flex; flex-direction: column; gap: 12px;")}>
        <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 34px;")}>Most popular tools</h2>
        <p style={s("margin: 0; font-size: 16px; color: var(--ink-muted);")}>One API key and one plan, across every tool below.</p>
      </div>

      <div style={s("display: grid; grid-template-columns: repeat(var(--grid-cols, 3), minmax(0, 1fr)); gap: 20px;")}>

        {/* PDF TO WORD */}
        <a href="/pdf-to-word" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #2F6FE4; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 13h8M8 17h5"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>PDF to Word</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Convert PDFs to editable .docx documents.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.27 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* MERGE PDF */}
        <a href="/merge-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #6D4FC4; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="12" height="12" rx="2"/><path d="M9 15v3a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>Merge PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Combine multiple PDFs into one document.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.18 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* JPG TO PDF */}
        <a href="/jpg-to-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #D98B1F; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 16-5-5L5 20"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>JPG to PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Turn JPG, PNG, and TIFF images into PDF.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.14 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* SIGN PDF */}
        <a href="/sign-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #C64FA0; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17c2-3 3-1 4-3s1-3 3-2 1 3 3 1 2-4 4-2 1 3 3 1"/><path d="M3 20h18"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>Sign PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Apply a signature field to a PDF programmatically.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.32 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* EDIT PDF */}
        <a href="/edit-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #2E9B8F; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>Edit PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Add text, shapes, and annotations to a PDF.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.27 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* COMPRESS PDF */}
        <a href="/compress-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: #C24A3A; color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m8-5h3a2 2 0 0 1 2 2v3"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>Compress PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Shrink file size without losing print quality.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>From $0.14 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* DWG TO PDF */}
        <a href="/dwg-to-pdf" style={s("background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--ink);")}>
          <div style={s("display: flex; align-items: flex-start; justify-content: space-between;")}>
            <div style={s("width: 44px; height: 44px; border-radius: 10px; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/></svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("margin-top: 8px;")}><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div>
            <div style={s("font-size: 17px; font-weight: 600;")}>DWG to PDF</div>
            <div style={s("font-size: 14px; color: var(--ink-muted); margin-top: 4px; line-height: 1.5;")}>Convert DWG drawings to print-ready PDF via webhook.</div>
          </div>
          <div style={s("margin-top: auto; padding-top: 10px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;")}>
            <span style={s("font-size: 13.5px; font-weight: 600; color: var(--ink);")}>$1.00 / doc</span>
            <span style={s("font-size: 12.5px; font-weight: 600; color: var(--success); background: var(--success-soft); padding: 3px 9px; border-radius: 100px;")}>Get API key</span>
          </div>
        </a>

        {/* MORE COMING */}
        <a href="mailto:support@anyconvert.app" style={s("border: 1px dashed var(--line); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px; text-align: center; color: var(--ink-muted);")}>
          <div style={s("font-size: 15px; font-weight: 600; color: var(--ink);")}>More tools on the way</div>
          <div style={s("font-size: 13.5px; line-height: 1.5;")}>Tell us which conversion you need next.</div>
        </a>

      </div>
    </div>
  </div>

  {/* FEATURE HIGHLIGHTS */}
  <div style={s("padding: 96px var(--pad-x); display: flex; flex-direction: column; gap: 96px; max-width: 1120px; margin: 0 auto; width: 100%; box-sizing: border-box;")}>

    <div className="feature-row" style={s("display: flex; align-items: center; gap: 64px;")}>
      <div style={s("flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 16px;")}>
        <h3 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 30px;")}>Built for automated pipelines</h3>
        <p style={s("margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-muted);")}>No dashboards to babysit, no download links to click. Submit a file and we call your webhook the moment the result is ready. It&apos;s designed to sit inside a script or service, not a browser tab.</p>
        <a href="/docs" style={s("font-size: 15px; font-weight: 600;")}>Read the docs →</a>
      </div>
      <div style={s("flex: 1; min-width: 0; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 28px; display: flex; flex-direction: column; gap: 18px;")}>
        <div style={s("display: flex; align-items: center; gap: 14px;")}>
          <div style={s("width: 32px; height: 32px; border-radius: 8px; background: var(--accent-soft); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; font-family: var(--font-mono);")}>1</div>
          <div style={s("font-size: 14.5px; font-weight: 600;")}>Your app POSTs a file</div>
        </div>
        <div style={s("width: 1px; height: 20px; background: var(--line); margin-left: 15px;")}></div>
        <div style={s("display: flex; align-items: center; gap: 14px;")}>
          <div style={s("width: 32px; height: 32px; border-radius: 8px; background: var(--accent-soft); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; font-family: var(--font-mono);")}>2</div>
          <div style={s("font-size: 14.5px; font-weight: 600;")}>We process and convert it</div>
        </div>
        <div style={s("width: 1px; height: 20px; background: var(--line); margin-left: 15px;")}></div>
        <div style={s("display: flex; align-items: center; gap: 14px;")}>
          <div style={s("width: 32px; height: 32px; border-radius: 8px; background: var(--success-soft); color: var(--success); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; font-family: var(--font-mono);")}>3</div>
          <div style={s("font-size: 14.5px; font-weight: 600;")}>Your webhook receives the result</div>
        </div>
      </div>
    </div>

    <div className="feature-row feature-row-reverse" style={s("display: flex; align-items: center; gap: 64px;")}>
      <div style={s("flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 16px;")}>
        <h3 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 30px;")}>One key, one endpoint</h3>
        <p style={s("margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-muted);")}>Every tool runs through the same single endpoint, with the same API key and the same integration pattern.</p>
        <a href="/docs" style={s("font-size: 15px; font-weight: 600;")}>Read the docs →</a>
      </div>
      <div style={s("flex: 1; min-width: 0; background: #14181D; border-radius: 14px; padding: 26px 28px;")}>
        <pre style={s("margin: 0; font-family: var(--font-mono); font-size: 13px; line-height: 1.9; color: #E9E6DF; overflow-x: auto;")}>POST <span style={s("color:#8FB18A;")}>/webhooks/trigger</span>{'\nx-api-key: <your key>\n\nfile='}<span style={s("color:#8B92A0;")}>@document.pdf</span>{'\nfileId='}<span style={s("color:#8B92A0;")}>file-001</span>{'\nreferenceId='}<span style={s("color:#8B92A0;")}>reference-001</span></pre>
      </div>
    </div>

    <div className="feature-row" style={s("display: flex; align-items: center; gap: 64px;")}>
      <div style={s("flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 16px;")}>
        <h3 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 30px;")}>Files deleted automatically</h3>
        <p style={s("margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-muted);")}>Your documents often carry sensitive or proprietary information. We remove uploaded files and results from our servers immediately after delivery, and nothing is retained.</p>
      </div>
      <div style={s("flex: 1; min-width: 0; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 32px; display: flex; flex-direction: column; gap: 14px;")}>
        <div style={s("display: flex; align-items: center; gap: 12px; font-size: 13.5px; color: var(--ink-muted);")}><span style={s("color: var(--success);")}>●</span> Uploaded</div>
        <div style={s("display: flex; align-items: center; gap: 12px; font-size: 13.5px; color: var(--ink-muted);")}><span style={s("color: var(--success);")}>●</span> Converted</div>
        <div style={s("display: flex; align-items: center; gap: 12px; font-size: 13.5px; color: var(--ink-muted);")}><span style={s("color: var(--success);")}>●</span> Delivered to your webhook</div>
        <div style={s("display: flex; align-items: center; gap: 12px; font-size: 13.5px; font-weight: 600; color: var(--ink);")}><span style={s("color: var(--danger);")}>●</span> Deleted from our servers</div>
      </div>
    </div>

  </div>

  {/* TRUST GRID */}
  <div style={s("background: var(--surface-2); padding: 88px var(--pad-x);")}>
    <div style={s("max-width: 1120px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px;")}>
      <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 34px; text-align: center;")}>Why teams use us</h2>
      <div style={s("display: grid; grid-template-columns: repeat(var(--grid-cols, 3), minmax(0, 1fr)); gap: 32px;")}>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><path d="M12 2 4 5v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V5z"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>Files deleted after delivery</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>Nothing is retained once your webhook has the result.</div></div>
        </div>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>Verified webhook deliveries</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>Every delivery carries a secret header only you and we know.</div></div>
        </div>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><path d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>One key, every tool</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>The same API key and integration pattern across our full tool lineup.</div></div>
        </div>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>Built for pipelines</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>Webhook delivery by default, with no manual downloads to script around.</div></div>
        </div>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>Transparent, credit-based pricing</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>Pay per document, no hidden fees. See <a href="/pricing">pricing</a>.</div></div>
        </div>
        <div style={s("display: flex; gap: 14px; align-items: flex-start;")}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={s("flex-shrink: 0; margin-top: 2px;")}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <div><div style={s("font-size: 15px; font-weight: 600; margin-bottom: 4px;")}>Direct support</div><div style={s("font-size: 14px; color: var(--ink-muted); line-height: 1.5;")}>Reach a real person at support@anyconvert.app when something needs a human.</div></div>
        </div>
      </div>
    </div>
  </div>

  {/* FINAL CTA */}
  <div style={s("padding: 88px var(--pad-x); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 22px;")}>
    <h2 style={s("margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 36px; max-width: 20ch;")}>Ready to integrate?</h2>
    <p style={s("margin: 0; font-size: 16.5px; color: var(--ink-muted); max-width: 46ch;")}>Get your API key and start converting documents in minutes.</p>
    <a href="/pricing" style={s("background: var(--accent); color: var(--accent-ink); padding: 15px 28px; border-radius: 8px; font-size: 16px; font-weight: 600;")}>Get your API key</a>
  </div>

      <style>{`
        @media (max-width: 720px) {
          .hero-buttons { flex-direction: column; width: 100%; }
          .hero-buttons a { width: 100%; box-sizing: border-box; text-align: center; }
          .hero-code { min-width: 0; }
          .hero-code pre { overflow-x: auto; }
          .feature-row, .feature-row-reverse { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
