import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: sessionData } = useSession();

  return (
    <button
      className="rounded-full bg-white/10 px-5 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? "Sign out" : "Sign in"}
    </button>
  );
};

export default Auth;
