'use client';

import React from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { calculateReadingTime, reformatDate } from '@/lib/utils';

export default function Posts({
  allPosts,
  views,
}: {
  allPosts: any;
  views: any;
}) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const filteredPosts = tag
    ? allPosts.filter((post: any) => post.metadata.tag.includes(tag))
    : allPosts;

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center group cursor-pointer mb-4 animate-slide-from-down-and-fade-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <span className="text-4xl font-bold mb-6 md:mb-4 animate-slide-from-down-and-fade-2">
          All Posts
        </span>

        <div>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:-px-2 animate-slide-from-down-and-fade-3">
            {filteredPosts
              .sort((a: any, b: any) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post: any) => {
                return (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="flex flex-row space-x-2 justify-between items-start duration-300 md:hover:bg-hoverBackground -mx-4 p-4 rounded-lg cursor-pointer"
                  >
                    <span className="text-secondaryDark">
                      {post.metadata.title}
                    </span>

                    <div className="flex flex-row space-x-2 items-center text-secondaryDarker whitespace-nowrap">
                      <span>{reformatDate(post.metadata.publishedAt)}</span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
