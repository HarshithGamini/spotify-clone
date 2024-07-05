/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bcngbzopwkeoslxqpecl.supabase.co',
                port: '',
            },
        ]
    }
};

export default nextConfig;
