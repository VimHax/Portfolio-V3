import mdx from "@mdx-js/rollup";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeMermaid from "rehype-mermaid";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import type { HLJSApi } from "highlight.js";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ts from "highlight.js/lib/languages/typescript";
import llvm from "highlight.js/lib/languages/llvm";
import c from "highlight.js/lib/languages/c";
import dart from "highlight.js/lib/languages/dart";

function ares(hljs: HLJSApi) {
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
      hljs.C_LINE_COMMENT_MODE,
      {
        className: "number",
        begin: /\d+(\.\d+)?/,
      },
      {
        className: "operator",
        begin:
          /\s>\s|\s<\s|\+\+|\+|->|--|-|\/|\*|\^|mod|and|not|or|==|!=|>=|<=|=|:|\./,
      },
      {
        className: "punctuation",
        begin: />|<|\(|\)|\[|\]|\{|\}|;|,/,
      },
      {
        className: "type",
        begin: /\b(Int|Float|Boolean|String|Array)\b/,
      },
      {
        className: "keyword",
        begin: /\b(fn|let|mut|if|else|loop|return|break)\b/,
      },
      {
        className: "literal",
        begin: /\b(false|true)\b/,
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
        begin: /(\d+(\.\d+)?)|(\.\d+)/,
      },
      {
        className: "punctuation",
        begin: /,|\(|\)|\[|\]|((?<=<-\s*)\|)|(\|(?=\s*->))/,
      },
      {
        className: "operator",
        begin:
          /:|\.|<-|->|=>|\+|-|\*|\/|\^|%|&|(?<!<-\s*)\|(?!\s*->)|!|=|!=|<|>|<=|>=/,
      },
      {
        className: "type",
        begin: /\b(String|Number|Boolean|Instruction|Array<[a-zA-Z<>]+>)\b/,
      },
      {
        className: "keyword",
        begin: /\b(print|eval|if|then|else|while|do)\b/,
      },
      {
        className: "built_in",
        begin:
          /\b(len|input|toString|toNumber|toBoolean|isNumber|isBoolean|exec)\b/,
      },
      {
        className: "literal",
        begin: /\b(false|true)\b/,
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

function shell(hljs: HLJSApi) {
  return {
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        className: "keyword",
        begin: /\$/,
      },
      {
        className: "title.function.invoke",
        begin: /(-\w+\b)|(--[\w=]+\b)/,
      },
    ],
  };
}

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkMath],
        rehypePlugins: [
          rehypeMdxImportMedia,
          rehypeKatex,
          [
            rehypeHighlight,
            { languages: { ares, eelios, ts, llvm, c, shell, dart } },
          ],
          [rehypeHighlightCodeLines, { showLineNumbers: true }],
          [
            rehypeMermaid,
            {
              strategy: "inline-svg",
              css: "file://" + __dirname + "/mermaid.css",
              mermaidConfig: {
                flowchart: { diagramPadding: 0 },
                theme: "base",
                themeVariables: {
                  fontFamily: '"jetbrains-mono", sans-serif',
                  primaryColor: "#b8ddf9",
                  primaryTextColor: "#00001f",
                  primaryBorderColor: "#00000000",
                  secondaryColor: "#d6e8fc",
                  lineColor: "#005180",
                  textColor: "#f5f5ff",
                  clusterBkg: "#e9f0fe",
                  clusterBorder: "#00000000",
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
