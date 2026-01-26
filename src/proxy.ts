import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rename from 'middleware' to 'proxy'
export function proxy(request: NextRequest) {
    // Your existing logic here
    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};