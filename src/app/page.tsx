import { auth, signIn, signOut } from "@/features/auth";

export default async function Home() {
  const session = await auth();

  let userDetails;
  if (session?.user !== undefined) {
    const token = session.user.accessToken;

    const response = await fetch("https://q.trap.jp/api/v3/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    userDetails = await response.json();
  }

  return (
    <main className="h-full mb-auto">
      <h1 className="text-4xl text-center">traQ Auth.js example</h1>
      <p>
        {session?.user !== undefined ? (
          <>
            Hello {session.user.name} <img src={session.user.image || ""} />
          </>
        ) : (
          <>Not signed in</>
        )}
      </p>
      <form
        action={async () => {
          "use server";

          if (session?.user !== undefined) {
            await signOut();
          } else {
            await signIn("traq");
          }
        }}
      >
        <button type="submit" className="border-2 border-black p-2">
          {session?.user !== undefined ? "Sign out" : "Sign in"}
        </button>
      </form>

      {userDetails !== undefined && (
        <>
          <h2>User Details</h2>
          <code>
            <pre>{JSON.stringify(userDetails, null, 2)}</pre>
          </code>
        </>
      )}
    </main>
  );
}
