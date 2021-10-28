const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./pages/*.js",
      "./pages/**/*.js",
      "./components/*.js",
      "./components/**/*.js",
      "./styles/*.css",
    ],
    safelist: {
      standard: [/^notion/, /^notion-/, /notion-.+/, /gt-.+/],
      deep: ["notion", "gt-container"],
      greedy: [],
      keyframes: [],
      variables: [],
    },
    whitelistPatterns: [/^slick-/, /^notion/, /^notion-/, /notion-.+/, /gt-.+/],
    // defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    // ...(process.env.NODE_ENV !== "production" ? [purgecss] : []),
  ],
};
