import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for optimizing cache headers and performance
 * 
 * Handles:
 * - Cache-Control headers for static assets
 * - Security headers
 * - Redirect optimization
 */

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Static assets - cache for 1 year (immutable)
  if (
    request.nextUrl.pathname.startsWith('/_next/static') ||
    request.nextUrl.pathname.startsWith('/public')
  ) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Images - cache for 1 year
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // HTML pages - no cache (always fresh)
  if (request.nextUrl.pathname.endsWith('.html') || !request.nextUrl.pathname.includes('.')) {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  // API routes - cache for 5 minutes
  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
  }

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy (formerly Feature Policy)
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
