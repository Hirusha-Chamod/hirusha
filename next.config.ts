const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/hirusha/" : "",
  basePath: isProd ? "/hirusha" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "out", // Explicitly set output directory
};
