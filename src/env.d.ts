/// <reference types="astro/client" />

interface FrontMatter {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  sub_tags?: string[];
  file: string;
  url: string;
  draft?: boolean;
  minutesRead?: number;
}

interface MarkdownPropsLayout {
  frontmatter: FrontMatter;
  [key: string]: any;
}

interface MarkdownPropsGlob {
  frontmatter: FrontMatter;
  Content: any;
  [key: string]: any;
}
