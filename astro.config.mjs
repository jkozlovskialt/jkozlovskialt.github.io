import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // Po podpięciu domeny warto ustawić: site: 'https://twoja-domena.pl',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
