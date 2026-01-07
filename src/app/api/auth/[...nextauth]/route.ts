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
        // 1. Debugging: Log exactly what is arriving
        console.log("--- Login Attempt Received ---");
        console.log("Email from user:", credentials?.email);

        const enteredEmail = credentials?.email?.toLowerCase().trim();
        const developerEmail = "nikkitachoudhary306@gmail.com".toLowerCase().trim();

        // 2. Load and clean Environment emails
        const envEmails = process.env.ADMIN_EMAILS || "";
        const adminEmails = envEmails.split(',').map(e => e.trim().toLowerCase());

        const isDeveloper = enteredEmail === developerEmail;
        const isInEnvList = adminEmails.includes(enteredEmail || "");

        // 3. Validation Logic
        if (isDeveloper || isInEnvList) {
          console.log("AUTH STATUS: Success (User verified)");
          return {
            id: "admin-master",
            name: "Nikkita",
            email: enteredEmail,
            isAdmin: true
          };
        }

        console.log("AUTH STATUS: Failed - Access Denied for", enteredEmail);
        return null;
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