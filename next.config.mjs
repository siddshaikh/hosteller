/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "plus.unsplash.com",
    ],
  },
};

export default nextConfig;
