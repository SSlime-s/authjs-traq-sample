import { auth, signIn } from "@/features/auth";

export default async function LatestMessage() {
  const session = await auth();
  const accessToken = session?.user?.accessToken;

  if (accessToken === undefined) {
    await signIn("traq");
    return null;
  }

  const res = await fetch("https://q.trap.jp/api/v3/activity/timeline", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const timeline = await res.json();

  return (
    <div>
      <h1>Latest Message</h1>
      <p>{timeline[0].content}</p>
      <p>by {timeline[0].userId}</p>
    </div>
  );
}
