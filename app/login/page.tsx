'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { s } from '@/lib/style';
import { API_BASE, setAuthToken } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setError('Incorrect email or password.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      if (!data.access_token) {
        setError('Something went wrong. Please try again.');
        setLoading(false);
        return;
      }
      setAuthToken(data.access_token);
      router.push('/dashboard');
    } catch {
      setError('Could not reach the server. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div style={s('max-width: 400px; margin: 0 auto; padding: 96px 32px 120px; width: 100%; box-sizing: border-box;')}>
      <h1 style={s('margin: 0 0 8px; font-family: var(--font-display); font-weight: 600; font-size: 32px;')}>Log in</h1>
      <p style={s('margin: 0 0 32px; font-size: 15px; color: var(--ink-muted);')}>
        Use the email and password you were given after subscribing.
      </p>

      <form onSubmit={handleSubmit} style={s('display: flex; flex-direction: column; gap: 16px;')}>
        <div style={s('display: flex; flex-direction: column; gap: 6px;')}>
          <label htmlFor="email" style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted);')}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={s('padding: 11px 14px; border: 1px solid var(--line); border-radius: 8px; font-size: 15px; color: var(--ink); box-sizing: border-box;')}
          />
        </div>
        <div style={s('display: flex; flex-direction: column; gap: 6px;')}>
          <label htmlFor="password" style={s('font-size: 13px; font-weight: 600; color: var(--ink-muted);')}>
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={s('padding: 11px 14px; border: 1px solid var(--line); border-radius: 8px; font-size: 15px; color: var(--ink); box-sizing: border-box;')}
          />
        </div>

        {error && <div style={s('font-size: 13.5px; color: var(--danger);')}>{error}</div>}

        <button
          type="submit"
          disabled={loading}
          style={s(
            `background: var(--accent); color: var(--accent-ink); padding: 12px 20px; border-radius: 8px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; margin-top: 8px; opacity: ${loading ? '0.7' : '1'};`
          )}
        >
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>

      <p style={s('margin: 24px 0 0; font-size: 13.5px; color: var(--ink-muted);')}>
        Don&apos;t have an account? <a href="/pricing">Subscribe to get one</a>.
      </p>
    </div>
  );
}
