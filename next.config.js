// next.config.js

// The main configuration object for Next.js
const nextConfig = {
  // Enforces a trailing slash at the end of URLs. This can help with consistency in URL structures.
  trailingSlash: true,

  // Configuration for handling images from external domains
  images: {
    // Updated to use remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'brandslogos.com',
      },
      {
        protocol: 'https',
        hostname: 'brandlogos.net',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'd1yjjnpx0p53s8.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'swissemporium.com.au',
      },
      {
        protocol: 'https',
        hostname: 'swisswatches-magazine.com',
      },
      {
        protocol: 'https',
        hostname: 'img.alange-soehne.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'en.worldtempus.com',
      },
      {
        protocol: 'https',
        hostname: 'vintagenewsdaily.com',
      },
    ],
  },
};

module.exports = nextConfig;

/*
  Documentation:

  - trailingSlash: This option ensures that URLs end with a slash (e.g., /about/ instead of /about).
    This can be useful for SEO and maintaining consistent URL structures.

  - images.remotePatterns: This option specifies the allowed external domains for images. It's necessary
    if you want to use images from a domain that is not the same as your Next.js application. 
    You can add more patterns to the array or remove this setting if not needed.

  - redirects: The redirects function allows you to specify redirect rules. This example is commented
    out to simplify the boilerplate. You can uncomment and modify it to add your own redirect logic.
    Each redirect rule must have a source (pattern to match), destination (where to redirect to),
    and a permanent flag (true for 301 redirects, false for 302).

  For more information, visit the Next.js documentation: https://nextjs.org/docs
*/
