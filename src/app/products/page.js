// /app/products/page.js
import Link from "next/link";

export const revalidate = 60; // ✅ Enables caching for 60 seconds

export default async function ProductsPage() {
  // Fetch products with caching
  const res = await fetch("https://dummyjson.com/products", { next: { revalidate: 60 } });
  const data = await res.json();
  const products = data.products || [];

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🛒 Products Page</h2>
      <p>Browse our latest products below:</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            <Link href={`/products/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
