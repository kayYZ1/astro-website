import type { Site, Metadata, Socials } from './types.ts';

export const SITE: Site = {
  NAME: 'Home',
  EMAIL: 'kacper.manczyk@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Welcome to my personal website!',
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
};

export const WORK: Metadata = {
  TITLE: 'Work expierience (actually more like internships as of 2025)',
  DESCRIPTION: 'Where I have worked and what I have done.',
};

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'A collection of my projects, with links to repositories and demos.',
};

export const SOCIALS: Socials = [
  {
    NAME: 'bsky',
    HREF: 'https://bsky.app/profile/kayzv1.bsky.social',
  },
  {
    NAME: 'github',
    HREF: 'https://github.com/kayYZ1',
  },
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/kacper-manczyk',
  },
];
