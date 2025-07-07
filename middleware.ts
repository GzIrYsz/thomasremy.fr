import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/((?!_next|favicon.ico|api).*)',
};

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === '1';
  const { pathname } = request.nextUrl;

  if (maintenanceMode && pathname !== '/maintenance') {
    const maintenanceUrl = new URL('/maintenance', request.url);
    return NextResponse.redirect(maintenanceUrl);
  }

  if (!maintenanceMode && pathname === '/maintenance') {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}
