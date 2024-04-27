import { auth } from "@/features/auth";

export default async function Whoami() {
  const session = await auth();

  return (
    <div>
      <h1>Whoami</h1>
      {session ? (
        <p>Logged in as {session.user?.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
