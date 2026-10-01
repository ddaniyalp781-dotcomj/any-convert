import type { CSSProperties } from 'react';

/** Parses a plain CSS declaration string (as used throughout the ported markup) into a React style object. */
export function s(css: string): CSSProperties {
  const style: Record<string, string> = {};
  css.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) return;
    const camel = prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    style[camel] = value;
  });
  return style as CSSProperties;
}
