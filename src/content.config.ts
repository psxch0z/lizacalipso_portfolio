import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    project: z.string(),
    format: z.string(),
    task: z.string(),
    role: z.string(),
    concept: z.string().optional(),
    mood: z.enum(['warm', 'bw', 'promo']),
    group: z.enum(['commercial', 'personal']),
    section: z.string(),
    hasMedia: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { cases };
