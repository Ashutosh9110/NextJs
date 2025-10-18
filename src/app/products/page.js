// /src/app/products/page.js
import Link from "next/link";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse the complete list of products available in our store.",
};

export const revalidate = 60;

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", { next: { revalidate: 60 } });
  const data = await res.json();
  const products = data.products || [];

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🛍️ Products List</h2>
      <p>This page uses <strong>static metadata</strong>.</p>

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
