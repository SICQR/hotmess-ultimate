/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['1e0297-a4.myshopify.com', 'cdn.shopify.com'],
  },
  env: {
    NEXT_PUBLIC_SHOPIFY_DOMAIN: '1e0297-a4.myshopify.com',
    NEXT_PUBLIC_RADIO_STREAM: 'https://listen.radioking.com/radio/736103/stream/802454',
  },
}

module.exports = nextConfig
