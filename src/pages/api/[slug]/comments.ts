import { APIRoute } from "astro";

interface Params {
  slug: string;
}

export const post: APIRoute = async ({ request, params }) => {
  const { slug } = params;
  return {
    body: "hello",
    slug,
  };
};

export async function getStaticPaths() {
  const posts = await import.meta.glob("../posts/**/*.md");
  console.log(posts);
}
