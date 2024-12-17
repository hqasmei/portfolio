import { DiscordIcon } from '@/components/icons/discord';
import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { TwitchIcon } from '@/components/icons/twitch';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';





export const CONFIG = {
  name: 'Hosna Qasmei',
  headshot: '/headshot.png',
  title: 'Developer & Creator',
  description: `Hi, I'm Hosna. I'm based in Los Angeles, California. In addition to coding, I also make YouTube videos, sharing my knowledge 
and experience on web & mobile development.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/hqasmei', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/hqasmei',
      icon: <GithubIcon />,
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@hqasmei',
      icon: <YouTubeIcon />,
    },
    {
      platform: 'Twitch',
      link: 'https://www.twitch.tv/hqasmei',
      icon: <TwitchIcon />,
    },
    {
      platform: 'Discord',
      link: 'https://discord.com/invite/agzuPEVxhT',
      icon: <DiscordIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/hosnaqasmei/',
      icon: <LinkedInIcon />,
    },
  ],
  projects: [
    {
      featured: true,
      name: 'ProjectPlannerAI',
      slug: 'project-planner-ai',
      description: 'Manage your side projects in one place.',
      image: '/icons/project-planner-ai.png',
      link: 'https://projectplannerai.com/',
    },
    {
      featured: true,
      name: 'TechStackFinder',
      slug: 'tech-stack-finder',
      description: 'Top stacks for building projects and SaaS.',
      image: '/icons/tech-stack-finder.png',
      link: 'https://techstackfinder.com/',
    },
    {
      featured: true,
      name: 'PortfoliosHub',
      slug: 'portfolioshub',
      description: 'Find the best portfolios and showcase your work.',
      image: '/icons/portfolioshub.png',
      link: 'https://www.portfolioshub.com/',
    },
    {
      featured: false,
      name: 'GuessParty',
      slug: 'guessparty',
      description: 'A game where you guess who the displayed items belongs to.',
      image: '/icons/guessparty.png',
      link: 'https://www.guessparty.com/',
    },
    {
      featured: false,
      name: 'RepoMapper',
      slug: 'repo-mapper',
      description: 'Visualize Your GitHub Repos in ASCII.',
      image: '/icons/repo-mapper.png',
      link: 'https://repo-mapper.vercel.app/',
    },
    {
      featured: false,
      name: 'Open Graph Vault',
      slug: 'open-graph-vault',
      description: 'Where all your open graph images live.',
      image: '/icons/open-graph-vault.png',
      link: 'https://opengraphvault.com/',
    },
    {
      featured: false,
      name: 'CustomGradient',
      slug: 'custom-gradient',
      description: 'A gradient generator and editor.',
      image: '/icons/custom-gradient.png',
      link: 'https://customgradient.com/',
    },
  ],
};