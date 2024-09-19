// 1. Import your utilities and schemas
import { z, defineCollection } from "astro:content";

// 2. Define your collections
const albumsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const videosCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// 3. Export multiple collections to register them
export const collections = {
  albums: albumsCollection,
  videos: videosCollection,
};
