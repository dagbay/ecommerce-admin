import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <main>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button
              className="bg-white p-2 px-4 rounded-sm"
              onClick={() => signIn("google")}
            >
              Login with Google
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <p>Signed in as {session.user.email}</p>
          <button
            className="bg-white p-2 px-4 rounded-sm"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
