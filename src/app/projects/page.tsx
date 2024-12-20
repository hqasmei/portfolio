import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CONFIG } from '@/lib/config';
import { ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Projects',
  description: 'Here are all the projects I have built.',
};

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4 animate-slide-from-down-and-fade-1"
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
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4 animate-slide-from-down-and-fade-2">
          All Projects
        </span>
        <div>
          <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2 animate-slide-from-down-and-fade-3">
            {CONFIG.projects.map((project, idx) => {
              return (
                <Link
                  key={idx}
                  href={project.link}
                  target="_blank"
                  className="flex group flex-row justify-between space-x-8 md:space-x-0 items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                >
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={project.image}
                      alt=""
                      width={40}
                      height={40}
                      className="w-9 h-9"
                    />
                    <div className="flex flex-col">
                      <span className="text-secondaryDark">{project.name}</span>
                      <span className="text-secondaryDarker text-sm">
                        {project.description}
                      </span>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="transform md:scale-0 md:group-hover:scale-100 transition-transform duration-300 text-secondaryDarker"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
