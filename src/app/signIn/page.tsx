import { signIn } from "@/features/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("traq");
      }}
    >
      <button type="submit" className="border-black border p-2 m-2">
        SignIn with traQ
      </button>
    </form>
  );
}
