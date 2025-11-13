import { Link, useLoaderData } from 'react-router';

import PostCard from '@/components/post-card';
import config from '@/config';

export function meta() {
  return [
    { title: `Posts | ${config.name}` },
    {
      name: 'description',
      content: 'Here are my posts about what I have learned.',
    },
  ];
}

export function loader() {
  const posts = import.meta.glob('../../content/*.mdx', { eager: true });

  const postsList = Object.keys(posts)
    .map((path) => ({
      slug: path.replace('../../content/', '').replace('.mdx', ''),
      // @ts-ignore
      title: posts[path].frontmatter?.title,
      // @ts-ignore
      date: posts[path].frontmatter?.date,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts: postsList };
}

export default function Home() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Posts</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {posts.map((post) => {
          return (
            <Link key={post.slug} to={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
