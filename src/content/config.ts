import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.number(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().nullable().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
