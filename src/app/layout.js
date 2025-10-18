// /app/layout.js
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Products Store",
  description: "Next.js Auth Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <header
            style={{
              backgroundColor: "#333",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 2rem",
            }}
          >
            <nav>
              <Link href="/" style={{ color: "white", margin: "0 15px" }}>
                Home
              </Link>
              <Link href="/protected" style={{ color: "white", margin: "0 15px" }}>
                Protected
              </Link>
              <Link href="/login" style={{ color: "white", margin: "0 15px" }}>
                Login
              </Link>
            </nav>
          </header>

          <main style={{ padding: "1rem" }}>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
