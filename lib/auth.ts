export const AUTH_COOKIE_NAME = 'anyconvert_token';

/** Non-httpOnly by necessity: client fetches read it to build the Authorization header, and
 * middleware reads it to gate /dashboard server-side. Never holds anything beyond the JWT itself. */
export function setAuthToken(token: string) {
  const maxAge = 60 * 60 * 24 * 30; // 30 days, matches the backend's ACCESS_TOKEN_EXPIRATION_TIME default
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function getAuthToken(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${AUTH_COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function clearAuthToken() {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
}

export const API_BASE = 'https://api.anyconvert.app';

export async function authedFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getAuthToken();
  return fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      ...(init.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}
