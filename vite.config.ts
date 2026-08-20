import mdx from "@mdx-js/rollup";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeMermaid from "rehype-mermaid";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import type { HLJSApi } from "highlight.js";

function eelios(hljs: HLJSApi) {
  return {
    contains: [
      {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /"/,
            end: /"/,
          },
        ],
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: "number",
        begin: /(([0-9]+)(\.[0-9]+)?)|(\.[0-9]+)/,
      },
      {
        className: "punctuation",
        begin: /:|,|\.|\(|\)|\[|\]|((?<=<-\s*)\|)|(\|(?=\s*->))|<-|->|=>/,
      },
      {
        className: "operator",
        begin: /\+|-|\*|\/|\^|%|&|(?<!<-\s*)\|(?!\s*->)|!|=|!=|<|>|<=|>=/,
      },
      {
        className: "type",
        begin: /\b(String|Number|Boolean|Instruction|Array<[a-zA-Z<>]+>)/,
      },
      {
        className: "keyword",
        begin:
          /\b(print|len|input|toString|toNumber|toBoolean|isNumber|isBoolean|eval|exec|if|then|else|while|do)/,
      },
      {
        className: "literal",
        begin: /\b(false|true)/,
      },
      {
        className: "title.function.invoke",
        begin: /[a-zA-Z_][a-zA-Z0-9_]*(?=\()/,
      },
      {
        className: "variable",
        begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
      },
    ],
  };
}

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [
          rehypeMdxImportMedia,
          [rehypeHighlight, { languages: { eelios } }],
          rehypeHighlightCodeLines,
          [
            rehypeMermaid,
            {
              strategy: "inline-svg",
              css: "file://" + __dirname + "/mermaid.css",
              mermaidConfig: {
                theme: "base",
                themeVariables: {
                  fontFamily: '"jetbrains-mono", sans-serif',
                  primaryColor: "#f5f5ff",
                  primaryTextColor: "#00001f",
                  primaryBorderColor: "#f5f5ff",
                  secondaryColor: "#b8b8e6",
                  lineColor: "#5a5a80",
                  textColor: "#f5f5ff",
                },
              },
            },
          ],
        ],
        providerImportSource: __dirname + "/app/mdx-components.tsx",
      }),
    },
    tailwindcss(),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
