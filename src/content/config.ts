// 1. Import your utilities and schemas
import { z, defineCollection } from "astro:content";

// 2. Define your collections
const albumsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      cover: image().refine((img) => img.width >= 400, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
    }),
});

const videosCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    url: z.string(),
  }),
});

const stagebandCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      flyer: image().refine((img) => img.width >= 400, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
      url: z.string(),
    }),
});

// 3. Export multiple collections to register them
export const collections = {
  albums: albumsCollection,
  videos: videosCollection,
  stageband: stagebandCollection,
};
