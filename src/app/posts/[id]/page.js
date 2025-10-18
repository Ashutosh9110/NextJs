// /src/app/posts/[id]/page.js

// Dynamic Metadata Function
export async function generateMetadata({ params }) {
  const { id } = params;

  // Optionally fetch data for the post
  // const post = await fetch(`https://dummyjson.com/posts/${id}`).then((res) => res.json());

  return {
    title: `Post ${id} - My Blog`,
    description: `This is the detailed page for Post ${id}.`,
  };
}

export default function PostPage({ params }) {
  const { id } = params;

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Post {id}</h1>
      <p>This page uses <strong>dynamic metadata</strong> — title and description depend on the post ID.</p>
    </main>
  );
}
