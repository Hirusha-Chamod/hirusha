const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/hirusha" : "",
  assetPrefix: isProd ? "/hirusha/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};
