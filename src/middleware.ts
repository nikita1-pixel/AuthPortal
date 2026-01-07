import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const isTargetingAdmin = req.nextUrl.pathname.startsWith("/admin");

        // If the user is logged in but NOT an admin, kick them to home
        // This relies on 'isAdmin' being present in the JWT token
        if (isTargetingAdmin && token?.isAdmin !== true) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            // authorized: returns true if the user is authenticated
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/:path*"]
};