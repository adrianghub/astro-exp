import { z } from 'astro:content';

export const journalSchema = z.object({
  author: z.string().optional(),
  publishedAt: z.date(),
  title: z.string(),
  path: z.string(),
  featured: z.boolean().optional(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(['other']),
  description: z.string()
});

export type JournalFrontmatter = z.infer<typeof journalSchema>;
