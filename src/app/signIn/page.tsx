import { signIn } from "@/features/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("traq");
      }}
    >
      <button type="submit">SignIn with traQ</button>
    </form>
  );
}
