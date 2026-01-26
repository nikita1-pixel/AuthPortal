import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs"; 
import { prisma } from "@/lib/prisma"; 

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        const enteredEmail = credentials.email.toLowerCase().trim();
        const enteredPassword = credentials.password;

       //lookoutforemail
        const user = await prisma.user.findUnique({
          where: { email: enteredEmail }
        });

        //validating with password
        if (!user || !user.password) {
          throw new Error("No user found with this email");
        }

        // 3. COMPARE: Use bcrypt to check if the entered password matches the hashed one
        const isCorrectPassword = await compare(enteredPassword, user.password);

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        //This data goes into the JWT token
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.email === "nikkitachoudhary306@gmail.com", 
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = (user as any).isAdmin;
        token.id = user.id; // Store ID for database queries later
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).isAdmin = token.isAdmin;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };