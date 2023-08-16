/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                port: "",
                pathname: "/hpapi/**",
            },
        ],
    },
}

module.exports = nextConfig
