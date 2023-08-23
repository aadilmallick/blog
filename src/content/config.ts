import { defineCollection, z } from "astro:content";

const commentsCollection = defineCollection({
  // data for JSON, content for md and mdx
  type: "data",
  schema: z.array(
    z.object({
      postSlug: z.string(),
      comments: z.array(
        z.object({
          name: z.string().optional(),
          email: z.string().email().optional(),
          comment: z.string(),
        })
      ),
    })
  ),
});

export const collections = {
  comments: commentsCollection,
};
