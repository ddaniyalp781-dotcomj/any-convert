'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { s } from '@/lib/style';
import { API_BASE, authedFetch, clearAuthToken, getAuthToken, setAuthToken } from '@/lib/auth';

interface AccountStatus {
  id: string;
  keyPrefix?: string;
  plan?: string;
  remainingUses?: number;
  expiresAt?: string;
  webhookUrl?: string;
  revoked: boolean;
}

const PLAN_LABELS: Record<string, string> = { uses_100: 'Starter', uses_200: 'Growth' };

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function DashboardClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transaction');

  const [phase, setPhase] = useState<'loading' | 'polling' | 'ready' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [reveal, setReveal] = useState<{ apiKey?: string; password?: string } | null>(null);
  const [account, setAccount] = useState<AccountStatus | null>(null);

  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSaving, setWebhookSaving] = useState(false);
  const [webhookSaved, setWebhookSaved] = useState(false);
  const [webhookError, setWebhookError] = useState('');

  const [regenerated, setRegenerated] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const webhookSavedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Runs once at mount to decide how to bootstrap the page. Deliberately not re-run when
  // `transactionId` changes: the success path below clears it via `router.replace('/dashboard')`,
  // which would otherwise re-trigger this effect and call `loadAccount()` a second time.
  useEffect(() => {
    if (transactionId && !getAuthToken()) {
      pollForCredentials(transactionId);
    } else if (getAuthToken()) {
      loadAccount();
    } else {
      router.replace('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clears any in-flight timer on unmount so a navigation away mid-poll/mid-save can't
  // set state on an unmounted component.
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      if (webhookSavedTimeoutRef.current) clearTimeout(webhookSavedTimeoutRef.current);
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
    };
  }, []);

  function pollForCredentials(txId: string) {
    setPhase('polling');
    let attempts = 0;
    const maxAttempts = 15;
    const interval = setInterval(async () => {
      attempts++;
      try {
        const res = await fetch(`${API_BASE}/billing/transactions/${txId}`);
        const data = await res.json();
        if (data.ready) {
          clearInterval(interval);
          if (data.access_token) {
            setAuthToken(data.access_token);
            setReveal({ apiKey: data.apiKey, password: data.password });
            router.replace('/dashboard');
            loadAccount();
          } else {
            setErrorMessage('This purchase was already set up. Log in with the email and password you were given.');
            setPhase('error');
          }
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          setErrorMessage('This is taking longer than expected. Email support@anyconvert.app with your payment receipt.');
          setPhase('error');
        }
      } catch {
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          setErrorMessage('Something went wrong. Email support@anyconvert.app with your payment receipt.');
          setPhase('error');
        }
      }
    }, 2000);
    pollIntervalRef.current = interval;
  }

  async function loadAccount() {
    try {
      const res = await authedFetch('/account/api-key');
      if (res.status === 401) {
        clearAuthToken();
        router.replace('/login');
        return;
      }
      if (!res.ok) {
        setErrorMessage('Could not load your account. Please try again.');
        setPhase('error');
        return;
      }
      const data: AccountStatus = await res.json();
      setAccount(data);
      setWebhookUrl(data.webhookUrl ?? '');
      setPhase('ready');
    } catch {
      setErrorMessage('Could not reach the server. Please try again.');
      setPhase('error');
    }
  }

  async function saveWebhook() {
    if (!isValidUrl(webhookUrl)) {
      setWebhookError('Enter a valid http(s) URL.');
      return;
    }
    setWebhookError('');
    setWebhookSaving(true);
    try {
      const res = await authedFetch('/account/api-key/webhook', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhookUrl }),
      });
      if (!res.ok) {
        setWebhookError('Could not save that URL. Please try again.');
      } else {
        setWebhookSaved(true);
        if (webhookSavedTimeoutRef.current) clearTimeout(webhookSavedTimeoutRef.current);
        webhookSavedTimeoutRef.current = setTimeout(() => setWebhookSaved(false), 2000);
      }
    } catch {
      setWebhookError('Could not reach the server. Please try again.');
    } finally {
      setWebhookSaving(false);
    }
  }

  async function regenerateKey() {
    if (!confirm('This invalidates your current API key immediately. Continue?')) return;
    try {
      const res = await authedFetch('/account/api-key/regenerate', { method: 'POST' });
      if (!res.ok) return;
      const data = await res.json();
      setRegenerated(data.key);
      loadAccount();
    } catch {
      // no-op: the button staying as-is is enough feedback that it failed
    }
  }

  function copyValue(value: string | undefined, field: string) {
    if (!value) return;
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(field);
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = setTimeout(() => setCopied(null), 1500);
    });
  }

  function logout() {
    clearAuthToken();
    router.push('/login');
  }

  if (phase === 'loading' || phase === 'polling') {
    return (
      <div style={s('max-width: 480px; margin: 0 auto; padding: 120px 32px; text-align: center;')}>
        <div style={s('font-size: 16px; font-weight: 600;')}>{phase === 'polling' ? 'Finishing setup…' : 'Loading your dashboard…'}</div>
        <div style={s('font-size: 14px; color: var(--ink-muted); margin-top: 8px;')}>This takes a few seconds.</div>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div style={s('max-width: 480px; margin: 0 auto; padding: 120px 32px; text-align: center;')}>
        <div style={s('font-size: 16px; font-weight: 600;')}>Something went wrong</div>
        <div style={s('font-size: 14px; color: var(--ink-muted); margin-top: 8px;')}>{errorMessage}</div>
        <a
          href="/login"
          style={s('display: inline-block; margin-top: 20px; background: var(--accent); color: var(--accent-ink); padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600;')}
        >
          Go to login
        </a>
      </div>
    );
  }

  return (
    <div style={s('max-width: 720px; margin: 0 auto; padding: 56px 32px 100px; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 32px;')}>
      <div style={s('display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;')}>
        <div>
          <h1 style={s('margin: 0 0 6px; font-family: var(--font-display); font-weight: 600; font-size: 36px;')}>Dashboard</h1>
          <p style={s('margin: 0; font-size: 15.5px; color: var(--ink-muted);')}>Manage your API key and webhook.</p>
        </div>
        <button
          onClick={logout}
          style={s('border: 1px solid var(--line); background: var(--surface); color: var(--ink); padding: 8px 16px; border-radius: 8px; font-size: 13.5px; font-weight: 600; cursor: pointer;')}
        >
          Log out
        </button>
      </div>

      {reveal?.apiKey && (
        <div style={s('background: var(--accent-soft); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 12px;')}>
          <div style={s('font-size: 16px; font-weight: 700;')}>You&apos;re all set — save these now</div>
          <div style={s('font-size: 13.5px; color: var(--ink-muted);')}>We can&apos;t show your API key or password again after you leave this page.</div>
          <CredentialRow label="API key" value={reveal.apiKey} field="revealKey" copied={copied} onCopy={copyValue} />
          {reveal.password && <CredentialRow label="Password (for logging in later)" value={reveal.password} field="revealPassword" copied={copied} onCopy={copyValue} />}
        </div>
      )}

      {regenerated && (
        <div style={s('background: var(--accent-soft); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 12px;')}>
          <div style={s('font-size: 16px; font-weight: 700;')}>New API key — save it now</div>
          <CredentialRow label="API key" value={regenerated} field="newKey" copied={copied} onCopy={copyValue} />
        </div>
      )}

      {/* SUMMARY */}
      <div style={s('display: flex; flex-direction: var(--stack, row); gap: 24px;')}>
        <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 26px; display: flex; flex-direction: column; gap: 10px;')}>
          <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>Plan</div>
          <div style={s('font-family: var(--font-display); font-size: 28px; font-weight: 600;')}>{account?.plan ? PLAN_LABELS[account.plan] ?? account.plan : '—'}</div>
        </div>
        <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 26px; display: flex; flex-direction: column; gap: 10px;')}>
          <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>Credits remaining</div>
          <div style={s('font-family: var(--font-display); font-size: 28px; font-weight: 600;')}>{account?.remainingUses ?? '—'}</div>
        </div>
        <div style={s('flex: 1; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 26px; display: flex; flex-direction: column; gap: 10px;')}>
          <div style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.04em;')}>Renews</div>
          <div style={s('font-family: var(--font-display); font-size: 20px; font-weight: 600;')}>
            {account?.expiresAt ? new Date(account.expiresAt).toLocaleDateString() : '—'}
          </div>
        </div>
      </div>

      {/* API KEY */}
      <div style={s('background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 16px;')}>
        <div style={s('font-size: 17px; font-weight: 600;')}>API key</div>
        <div style={s('display: flex; align-items: center; gap: 12px; flex-wrap: wrap;')}>
          <code style={s('background: var(--surface-2); padding: 10px 14px; border-radius: 8px; font-family: var(--font-mono); font-size: 14.5px; flex: 1; min-width: 200px;')}>
            {account?.keyPrefix ? `${account.keyPrefix}••••••••••••••••••••••••` : '—'}
          </code>
          <button
            onClick={regenerateKey}
            style={s('border: 1px solid var(--danger); background: var(--danger-soft); color: var(--danger); padding: 10px 16px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer;')}
          >
            Regenerate
          </button>
        </div>
        <div style={s('font-size: 13px; color: var(--ink-muted);')}>Regenerating invalidates your current key immediately, so update any running integrations first.</div>
      </div>

      {/* WEBHOOK */}
      <div style={s('background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 16px;')}>
        <div style={s('font-size: 17px; font-weight: 600;')}>Webhook URL</div>
        <div style={s('font-size: 14px; color: var(--ink-muted); margin-top: -8px;')}>We POST the finished PDF here for every conversion.</div>
        <div style={s('display: flex; gap: 12px; align-items: flex-start; flex-wrap: wrap;')}>
          <div style={s('flex: 1; min-width: 220px; display: flex; flex-direction: column; gap: 6px;')}>
            <input
              id="webhook-url"
              type="url"
              placeholder="https://yourapp.com/webhooks/anyconvert"
              value={webhookUrl}
              onChange={(e) => {
                setWebhookUrl(e.target.value);
                setWebhookError('');
              }}
              style={s(
                `padding: 11px 14px; border: 1px solid ${webhookError ? 'var(--danger)' : 'var(--line)'}; border-radius: 8px; font-size: 14.5px; color: var(--ink); box-sizing: border-box; width: 100%;`
              )}
            />
            {webhookError && <div style={s('font-size: 13px; color: var(--danger);')}>{webhookError}</div>}
          </div>
          <button
            onClick={saveWebhook}
            disabled={webhookSaving}
            style={s(
              `background: var(--accent); color: var(--accent-ink); border: none; padding: 12px 22px; border-radius: 8px; font-size: 14.5px; font-weight: 600; cursor: pointer; opacity: ${webhookSaving ? '0.7' : '1'};`
            )}
          >
            {webhookSaved ? 'Saved' : webhookSaving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

function CredentialRow({
  label,
  value,
  field,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  field: string;
  copied: string | null;
  onCopy: (value: string | undefined, field: string) => void;
}) {
  return (
    <div style={s('display: flex; flex-direction: column; gap: 6px;')}>
      <div style={s('font-size: 12.5px; font-weight: 600; color: var(--ink-muted);')}>{label}</div>
      <div style={s('display: flex; align-items: center; gap: 8px; background: var(--surface); border-radius: 8px; padding: 12px 14px;')}>
        <div style={s('flex: 1; font-family: var(--font-mono); font-size: 13px; word-break: break-all;')}>{value}</div>
        <button
          onClick={() => onCopy(value, field)}
          aria-label={`Copy ${label}`}
          style={s('flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); border-radius: 6px; cursor: pointer; padding: 0;')}
        >
          {copied === field ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
