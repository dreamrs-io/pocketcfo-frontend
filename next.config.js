/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        domains: ['secure.gravatar.com', 'api.cforesource.org']
    },
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap', // The actual API route
            },
        ];
    },
}

module.exports = nextConfig
