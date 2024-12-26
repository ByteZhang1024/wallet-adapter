/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/wallet-adapter' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/wallet-adapter/' : '',
};
