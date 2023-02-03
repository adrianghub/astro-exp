import type { SocialObjects } from './types';

export const SITE = {
  website: 'https://adrianzinko.com',
  author: 'Adrian Zinko',
  desc: 'Portfolio of Adrian Zinko',
  title: 'Adrian Zinko',
  lightAndDarkMode: true,
  postPerPage: 3
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: '',
    linkTitle: ` ${SITE.title} on Github`
  },
  {
    name: 'Instagram',
    href: '',
    linkTitle: `${SITE.title} on Instagram`
  },
  {
    name: 'LinkedIn',
    href: '',
    linkTitle: `${SITE.title} on LinkedIn`
  },
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`
  },
  {
    name: 'Twitter',
    href: '',
    linkTitle: `${SITE.title} on Twitter`
  },
  {
    name: 'Facebook',
    href: '',
    linkTitle: `${SITE.title} on Facebook`,
    hidden: true
  }
];
