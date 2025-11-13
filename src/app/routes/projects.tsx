import { Link } from 'react-router';

import ProjectCard from '@/components/project-card';
import config from '@/config';

import type { Route } from './+types/projects';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Projects | ${config.name}` },
    {
      name: 'description',
      content: `Here is my portfolio of projects I have worked on.`,
    },
  ];
}

export default function Projects() {
  return (
    <main className="flex flex-col gap-2 md:py-4">
      <h2 className="mx-4 text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-4 md:gap-1">
        {config.projects.map((project, idx) => {
          return (
            <Link key={idx} to={project.link} target="_blank">
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
