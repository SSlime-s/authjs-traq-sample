import NextAuth from "next-auth";
import { options } from "./options";

export const { handlers, signIn, auth, signOut } = NextAuth(options);
