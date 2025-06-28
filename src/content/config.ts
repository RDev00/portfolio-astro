import { defineCollection, z } from "astro:content";

const webs = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url(),
		img: z.string(),
		framework: z.string(),
	})
});

export const collections = { webs };