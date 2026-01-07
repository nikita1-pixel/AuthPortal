import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
      if (user.email && adminEmails.includes(user.email)) {
        return true;
      }
      return true;
    },
    async session({ session }) {
      const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];

      if (session.user && session.user.email) {

        (session.user as any).isAdmin = adminEmails.includes(session.user.email);
      }

      return session;
    }
  },
  // Optional: Add secret for production security
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };