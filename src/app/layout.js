// /app/layout.js
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Products Store",
  description: "A simple Next.js products app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
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
          {/* Logo + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Logo */}
            <Image
              src="/logo.png" // ✅ Comes from /public/logo.png
              alt="Products Store Logo"
              width={50}
              height={50}
              style={{ borderRadius: "8px" }}
              priority
            />
            <h1 style={{ margin: 0 }}>🛍️ Products Store</h1>
          </div>

          {/* Navigation Links */}
          <nav>
            <Link href="/" style={{ color: "white", margin: "0 15px" }}>
              Home
            </Link>
            <Link href="/products" style={{ color: "white", margin: "0 15px" }}>
              Products
            </Link>
          </nav>
        </header>

        {/* Page Content */}
        <main style={{ flex: "1", padding: "1rem" }}>{children}</main>

        {/* Footer Section */}
        <footer
          style={{
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            padding: "1rem",
            marginTop: "auto",
          }}
        >
          <p>© {new Date().getFullYear()} Products Store — All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
