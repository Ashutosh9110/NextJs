// /app/products/[id]/page.js
import Link from "next/link";

export const revalidate = 60; // Cache each product page for 60 seconds

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  // Fetch specific product by ID
  const res = await fetch(`https://dummyjson.com/products/${id}`, { next: { revalidate: 60 } });
  const product = await res.json();

  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "20px",
        width: "60%",
        margin: "50px auto",
      }}
    >
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p style={{ maxWidth: "400px", margin: "20px auto" }}>{product.description}</p>
      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
        height="200"
        style={{ borderRadius: "10px", marginTop: "10px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <Link href="/products">← Back to Products</Link>
      </div>
    </main>
  );
}
