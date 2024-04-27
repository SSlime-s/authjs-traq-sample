import NextAuth from "next-auth";
import { traqProvider } from "./traqProvider";

export const { handlers, signIn, auth, signOut } = NextAuth({
  providers: [traqProvider],
});
