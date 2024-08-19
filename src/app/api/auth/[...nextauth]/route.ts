import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, compareSync } from "bcrypt";
import { db } from "@/lib/db";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt({ token, account, profile, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },
    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log({ credentials });
        if (!credentials?.email || !credentials.password) {
          throw new Error("invalid credentials");
        }
        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("user does not exists");
        }

        const isCorrectPassword = compareSync(
          credentials.password,
          user.hashedPassword
        );
        console.log({ isCorrectPassword });

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }
        console.log({ user });

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
