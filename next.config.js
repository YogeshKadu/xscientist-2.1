/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['picsum.photos','xsgames.co']
  },  
};
// '/about': { page: '/about' },
// '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
// '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
// '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
module.exports = nextConfig
