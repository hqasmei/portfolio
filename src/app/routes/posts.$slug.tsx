import React from 'react';

import { Link, useLoaderData } from 'react-router';

import { getMDXComponent } from 'mdx-bundler/client';

import { CopyButton } from '@/components/copy-button';
import { getPostBySlug } from '@/lib/mdx.server';
import { formatDate, formatReadingTime } from '@/utils';

export async function loader({ params }: { params: { slug: string } }) {
  const note = await getPostBySlug(params.slug);
  if (!note) {
    throw new Response('Note not found', { status: 404 });
  }
  if (!note.code) {
    throw new Response('Note content is missing', { status: 500 });
  }

  return {
    code: note.code,
    frontmatter: note.frontmatter,
  };
}

export function meta({ data }: { data: any }) {
  const { frontmatter } = data;
  const tags = frontmatter?.tags?.join(', ') || '';

  return [
    { title: `${frontmatter?.title} | Hosna Qasmei` },
    {
      name: 'description',
      content: frontmatter?.summary || frontmatter?.description,
    },
    { name: 'keywords', content: tags },
    { name: 'author', content: frontmatter?.author || 'Hosna Qasmei' },
    { property: 'article:published_time', content: frontmatter?.date },
    {
      property: 'article:author',
      content: frontmatter?.author || 'Hosna Qasmei',
    },
    { property: 'article:tag', content: tags },
    { property: 'og:title', content: frontmatter?.title },
    {
      property: 'og:description',
      content: frontmatter?.summary || frontmatter?.description,
    },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: frontmatter?.title },
    {
      name: 'twitter:description',
      content: frontmatter?.summary || frontmatter?.description,
    },
  ];
}

function CodeBlock({ children, ...props }: { children: any; title: string }) {
  const rawCode = children?.props?.raw || '';

  return (
    <>
      <div className="text-muted-foreground flex flex-row items-center justify-between rounded-t-md border-x-[1px] border-t-[1px] border-neutral-300 px-4 py-2 text-xs dark:border-neutral-600">
        <div>{props.title}</div>
        <CopyButton text={rawCode} />
      </div>
      {children}
    </>
  );
}

export default function Post() {
  const { code, frontmatter } = useLoaderData<typeof loader>();

  // Create the component without passing components yet
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  // Estimate reading time from the code content
  const readingTime = React.useMemo(() => formatReadingTime(code), [code]);

  return (
    <main className="flex flex-col gap-8 p-4">
      <Link
        to="/posts"
        className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="rotate-180 transition-transform group-hover:-translate-x-0.5"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
            clipRule="evenodd"
          />
        </svg>
        Back to posts
      </Link>
      <section>
        {/* Title */}
        <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight">
          {frontmatter.title}
        </h1>

        {/* Metadata - author, date, reading time */}
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          {frontmatter.date && (
            <time dateTime={frontmatter.date}>
              {formatDate(frontmatter.date)}
            </time>
          )}
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
      </section>

      <article className="prose dark:prose-invert max-w-none">
        <Component components={{ CodeBlock }} />
      </article>
    </main>
  );
}
