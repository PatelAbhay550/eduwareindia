import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { CATEGORIES } from './consts';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		category: z.enum(CATEGORIES).optional(),
		tags: z.array(z.string()).optional(),
		featured: z.boolean().optional(),
		readingTime: z.number().optional(),
		slug: z.string().optional(),
	}),
});

const questions = defineCollection({
	loader: glob({ base: './src/content/questions', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(CATEGORIES).optional(),
		tags: z.array(z.string()).optional(),
		difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
		readingTime: z.number().optional(),
		author: z.string().optional(),
		featured: z.boolean().optional(),
		heroImage: image().optional(),
		slug: z.string().optional(),
	}),
});

export const collections = { blog, questions };
