import { withAuth } from "next-auth/middleware"; // Note: NextAuth may update this export name in future versions
import { NextResponse } from "next/server";

// 1. Rename 'middleware' to 'proxy'
export function proxy(req) {
    const token = req.nextauth.token;
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

    if (isAdminPage && !token?.isAdmin) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

// 2. Wrap and export as default using the new convention
export default withAuth(proxy, {
    callbacks: {
        authorized: ({ token }) => !!token,
    },
});

export const config = { matcher: ["/admin/:path*", "/profile"] };