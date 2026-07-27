import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, shown under the title on the index card. */
      description: z.string(),
      /** Shown top-right on the card, e.g. "2025". */
      year: z.string(),
      /** Lower numbers sort first on the index. */
      order: z.number().default(99),
      /**
       * Live site. Cards link straight here for now — make this optional again
       * when the detail pages come back (see src/pages/_work-detail.astro.disabled).
       */
      url: z.string().url(),
      /** Card image. Put the file in `src/assets/` and reference it here. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Detail-page metadata. Omit any you don't want shown. */
      role: z.string().optional(),
      timeframe: z.string().optional(),
      stack: z.array(z.string()).optional(),
    }),
});

export const collections = { work };
