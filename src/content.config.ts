import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

/**
 * Things I built. These get the full card treatment on the index — cover
 * image, title, one-line description — so keep the list short and strong.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, shown under the title on the index card. */
      description: z.string(),
      /** Shown next to the title on the card, e.g. "2025". */
      year: z.string(),
      /** Lower numbers sort first on the index. */
      order: z.number().default(99),
      /**
       * `card` gets a cover image and full-width treatment; `list` gets a
       * compact row further down. Smaller builds belong in `list` — a cover
       * image is a claim, and not everything needs to make one.
       */
      display: z.enum(['card', 'list']).default('card'),
      /**
       * Live site. Cards link straight here for now — make this optional again
       * when the detail pages come back (see src/pages/_project-detail.astro.disabled).
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

export const collections = { projects };
