/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: {
      // Enabled by default in development, disabled
      // setting this will override the default for
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: [],
      // Defaults to ["index"].
      meaninglessFileNames: ["index"],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: "",
      minify: false,
      transpileTemplateLiterals: false,
      pure: false,
    },
  },
};

module.exports = nextConfig;
