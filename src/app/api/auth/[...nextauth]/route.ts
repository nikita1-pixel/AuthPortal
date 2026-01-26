import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const enteredEmail = credentials?.email?.toLowerCase().trim();
        const enteredPassword = credentials?.password;

        // 1. Define your master password (or pull from process.env.ADMIN_PASSWORD)
        const MASTER_PASSWORD = "1234567";

        const isDeveloper = enteredEmail === "nikkitachoudhary306@gmail.com";
        const isCorrectPassword = enteredPassword === MASTER_PASSWORD;

        // 2. Both email AND password must be correct
        if (isDeveloper && isCorrectPassword) {
          return {
            id: "admin-master",
            name: "Nikkita",
            email: enteredEmail,
            isAdmin: true
          };
        }

        return null; // Access Denied
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = (user as any).isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).isAdmin = token.isAdmin;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login", // Redirect back to login on error
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // If your .env.local isn't loading, we provide a fallback secret here for testing
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only",
});

export { handler as GET, handler as POST };