// /app/products/page.js
import Link from "next/link";

export default function ProductsPage() {
  const productIds = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Products Page</h2>
      <p>Browse our products below:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productIds.map((id) => (
          <li key={id} style={{ margin: "10px 0" }}>
            <Link href={`/products/${id}`}>View Product {id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
