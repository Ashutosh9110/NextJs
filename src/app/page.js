// /src/app/page.js
export const metadata = {
  title: "This is Homepage",
  description: "Welcome to the homepage of our Next.js app. Explore posts and products!",
};

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏠 Welcome to the Homepage</h1>
      <p>This page uses <strong>static metadata</strong>.</p>
    </main>
  );
}
