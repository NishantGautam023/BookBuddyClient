/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       remotePatterns: [{
           protocol: 'https',
           // hostname: 'res.cloudinary.com'
           hostname: 'picsum.photos',
       }]
    }
};

export default nextConfig;
