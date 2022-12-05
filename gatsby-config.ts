import type { GatsbyConfig } from "gatsby";
const path = require("path")
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Anbuko`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: "gatsby-plugin-eslint",
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // Default settings that may be omitted or customized
      stages: ["develop"],
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: ["node_modules", "bower_components", ".cache", "public"],
      // Any additional eslint-webpack-plugin options below
      // ...
    },
  },]
};

export default config;
