const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/hirusha/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
};
