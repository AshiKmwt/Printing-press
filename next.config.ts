// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** 
//  @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   distDir: 'docs',
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;

const repoName = 'Printing-press';

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

