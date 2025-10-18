"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/protected");
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <button
        onClick={() => signIn("github")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign in with GitHub
      </button>
    </main>
  );
}
