import { Link, useLoaderData } from 'react-router';

import { ArrowRight } from 'lucide-react';

import PostCard from '@/components/post-card';
import ProjectCard from '@/components/project-card';
import config from '@/config';

import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${config.name} | ${config.title}` },
    { name: 'description', content: `${config.description}` },
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
    <div className="mt-4 flex flex-col gap-10">
      <div className="mx-4 flex flex-col gap-2">
        <span className="font-medium">About me</span>
        <span>{config.description}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="mx-4 font-medium">Featured Projects</span>
        <div className="flex flex-col gap-4 md:gap-1">
          {config.projects.map((project, idx) => {
            if (project.featured) {
              return (
                <Link key={idx} to={project.link} target="_blank">
                  <ProjectCard project={project} />
                </Link>
              );
            }
          })}
        </div>
        <div className="mx-4 flex justify-end">
          <Link
            to="/projects"
            className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
          >
            <p className="group-hover:text-foreground transition-all duration-200">
              View all projects
            </p>
            <ArrowRight
              size={18}
              className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-1">
        <span className="mx-4 font-medium">Latest Posts</span>
        {posts.map((post) => {
          return (
            <Link key={post.slug} to={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          );
        })}
        <div className="mx-4 flex justify-end">
          <Link
            to="/projects"
            className="group text-muted-foreground flex items-center justify-center gap-1 text-sm transition-colors"
          >
            <p className="group-hover:text-foreground transition-all duration-200">
              View all posts
            </p>
            <ArrowRight
              size={18}
              className="group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
