// /app/protected/page.js
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import Link from "next/link";

export default async function ProtectedPage() {
  const token = cookies().get("token")?.value;
  const user = token ? await verifyJWT(token) : null;

  if (!user) {
    return (
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied 🚫</h2>
        <p>You must log in to view this page.</p>
        <Link href="/login">Go to Login</Link>
      </main>
    );
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user.username}! 🎉</h2>
      <p>This is a protected page that only logged-in users can access.</p>
      <form action="/api/logout" method="POST">
        <button
          type="submit"
          style={{
            backgroundColor: "#e74c3c",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </form>
    </main>
  );
}
