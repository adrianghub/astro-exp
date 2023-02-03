export type SocialObjects = {
  name: SocialMedia;
  href: string;
  linkTitle: string;
  hidden?: boolean;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | 'Github'
  | 'Instagram'
  | 'LinkedIn'
  | 'Mail'
  | 'Twitter'
  | 'Facebook';
