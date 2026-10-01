import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME } from '@/lib/auth';

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has(AUTH_COOKIE_NAME);
  const hasTransaction = request.nextUrl.searchParams.has('transaction');
  if (!hasToken && !hasTransaction) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard',
};
