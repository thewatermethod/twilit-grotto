import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const product = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    author: z.string(),
    collaborators: z.array(z.string()),
    pdfPrice: z.string(),
    heroImage: z.string(),

    // option fields
    driveThruLink: z.string().optional(),
    itchLink: z.string().optional(),
    cthulhuDiceLink: z.string().optional(),
    printPrice: z.string().optional(),
    printStock: z.number().optional(),
    tags: z.array(z.string()).optional(),
    system: z.string().optional(),
  }),
});

export const collections = { blog, product };
