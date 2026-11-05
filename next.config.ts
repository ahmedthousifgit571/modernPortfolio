import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // A stray lockfile higher up the disk confuses root detection — pin it here
    turbopack: { root: path.join(__dirname) },
    images: {
        // Serve AVIF where supported, WebP otherwise
        formats: ["image/avif", "image/webp"],
        // Cache optimised images for 31 days
        minimumCacheTTL: 2678400,
    },
};

export default nextConfig;
