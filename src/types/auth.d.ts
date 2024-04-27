import type { DefaultSession } from "next-auth";

module "next-auth" {
  export interface Session extends DefaultSession {
    user: {
      accessToken: string;
    } & DefaultSession["user"];
  }
}
