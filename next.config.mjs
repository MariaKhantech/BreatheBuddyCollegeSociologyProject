/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // <-- Added YouTube Thumbnails
        pathname: "**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
