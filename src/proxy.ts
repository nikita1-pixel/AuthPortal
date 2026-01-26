import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Adding the type 'NextRequestWithAuth' to req fixes the error
export function proxy(req: NextRequestWithAuth) {
    const token = req.nextauth.token;
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

    if (isAdminPage && !token?.isAdmin) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export default withAuth(proxy, {
    callbacks: {
        authorized: ({ token }) => !!token,
    },
});

export const config = { matcher: ["/admin/:path*", "/profile"] };