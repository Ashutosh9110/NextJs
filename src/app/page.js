// /src/app/page.js
export const metadata = {
  title: "Products Store - Home",
  description: "Welcome to the Products Store homepage. Explore our products and categories!",
};

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏠 Welcome to Products Store</h1>
      <p>This page uses <strong>static metadata</strong> with a fixed title and description.</p>
    </main>
  );
}
