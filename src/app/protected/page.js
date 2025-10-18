"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied </h2>
        <p>You need to log in to access this page.</p>
        <Link href="/login">Go to Login</Link>
      </main>
    );
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {session.user.name}! 🎉</h2>
      <img
        src={session.user.image}
        alt="User Avatar"
        style={{ borderRadius: "50%", width: "80px", height: "80px" }}
      />
      <p>Email: {session.user.email}</p>
      <button
        onClick={() => signOut()}
        style={{
          marginTop: "20px",
          backgroundColor: "#e74c3c",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign Out
      </button>
    </main>
  );
}
