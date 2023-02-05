import type { JournalFrontmatter } from '@content/_schemas';
import { slug as slugger } from 'github-slugger';

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: JournalFrontmatter) => (post.path ? slugger(post.path) : slugger(post.title));

export const slufigyAll = (arr: string[]) => arr.map((str) => slugifyStr(str));

export default slugify;
