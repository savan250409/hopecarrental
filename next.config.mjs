/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep `next dev` assets separate from production builds so one cannot
  // overwrite the other while the local server is running.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
