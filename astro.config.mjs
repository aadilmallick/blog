import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  rehypeGithubAlerts,
  IOptions as rehypeGithubAlertsOptionsType,
} from "rehype-github-alerts";
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), sitemap()],
  site: "https://aadilmallickblog.tech/",
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeGithubAlerts],
  },
});
