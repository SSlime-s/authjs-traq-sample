import type { OAuth2Config } from "next-auth/providers";

interface User {
  id: string;
  name: string;
}

export const traqProvider = {
  id: "traq",
  name: "traQ",
  type: "oauth",
  authorization: {
    url: "https://q.trap.jp/api/v3/oauth2/authorize",
    params: {
      scope: "read",
    },
  },
  token: "https://q.trap.jp/api/v3/oauth2/token",
  userinfo: "https://q.trap.jp/api/v3/users/me",
  profile(profile) {
    return {
      id: profile.id,
      name: profile.name,
      image: `https://q.trap.jp/api/v3/public/icon/${profile.name}`,
    };
  },
} as const satisfies OAuth2Config<User>;
