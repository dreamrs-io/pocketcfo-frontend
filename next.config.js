/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images:{
        domains:['secure.gravatar.com']
    }
}

module.exports = nextConfig
