import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  appDirectory: './src/app',
  async prerender() {
    const notes = await import.meta.glob('./src/content/*.mdx');

    // get all the dynamic slugs explicitly listed here
    const noteSlugs = Object.keys(notes).map((path: string) => {
      // Extract filename without extension
      const filename = path.split('/').pop()?.replace('.mdx', '');
      // Create clean path
      return `/posts/${filename}`;
    });

    return ['/', '/posts'].concat(noteSlugs);
  },
} satisfies Config;
