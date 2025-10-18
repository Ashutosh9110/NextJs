  // /app/products/[id]/page.js
export default function ProductDetailsPage({ params }) {
  const { id } = params;

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
      <h3>Product {id} details page — content coming soon!</h3>
    </main>
  );
}
