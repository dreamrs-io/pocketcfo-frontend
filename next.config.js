/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images:{
        domains:['secure.gravatar.com','api.cforesource.org']
    }
}

module.exports = nextConfig
