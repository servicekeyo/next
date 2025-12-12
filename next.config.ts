import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "keyobarbecue.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.keyfirebbq.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "packoi.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "keyfirebbq.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // SEO配置
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/sitemap_post.xml',
        destination: '/api/sitemap/post',
      },
      {
        source: '/sitemap_page.xml',
        destination: '/api/sitemap/page',
      },
    ]
  },
};

export default nextConfig;
