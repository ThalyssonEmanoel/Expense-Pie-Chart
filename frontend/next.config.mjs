/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3004',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;