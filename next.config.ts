// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const repoName = 'Printing-press'; // <-- change this to your exact GitHub repo name

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;



