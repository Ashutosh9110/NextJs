// /src/app/products/[id]/page.js

export async function generateMetadata({ params }) {
  const { id } = params;

  // Fetch the product data
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
    description: `Learn more about ${product.title} — ${product.description}`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        width={200}
        style={{ borderRadius: "10px", margin: "20px 0" }}
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </main>
  );
}
