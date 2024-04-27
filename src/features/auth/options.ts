import type { NextAuthConfig } from "next-auth";
import { traqProvider } from "./traqProvider";

export const options = {
  providers: [traqProvider],
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
        },
      };
    },
    async jwt({ token, account }) {
      if (account !== null && account !== undefined) {
        return {
          ...token,
          accessToken: account.access_token,
        };
      }

      return token;
    },
  },
} satisfies NextAuthConfig;
