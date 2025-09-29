"use client";

import RetailCard from "../../../components/RetailCard";
import Image from "next/image";

const products = [
  {
    title: "The Luxe Tee",
    image: "/img/hotmess-essentials-hoodie.png",
    price: "£49",
    partner: "ASOS",
    partnerLogo: "/logos/asos-logo.png",
    externalUrl: "https://www.asos.com/search/?q=luxury+tee",
    description: "Premium cotton blend with signature HOTMESS branding. Comfort meets luxury.",
    isAffiliate: true
  },
  {
    title: "Essential Hoodie",
    image: "/img/hotmess-essentials-hoodie.png",
    price: "£89", 
    partner: "END.",
    partnerLogo: "/logos/end-logo.png",
    externalUrl: "https://www.endclothing.com/",
    description: "Heavyweight fleece hoodie with embroidered logo. Urban luxury redefined.",
    isAffiliate: true
  },
  {
    title: "Signature Briefs",
    image: "/img/hotmess-essentials-hoodie.png",
    price: "£35",
    partner: "SSENSE",
    partnerLogo: "/logos/ssense-logo.png", 
    externalUrl: "https://www.ssense.com/",
    description: "Premium underwear collection. Comfort and style for the modern man.",
    isAffiliate: false
  },
  {
    title: "Limited Edition Vinyl",
    image: "/img/radio-neon-logo.png",
    price: "£25",
    partner: "Rough Trade",
    partnerLogo: "/logos/roughtrade-logo.png",
    externalUrl: "https://www.roughtrade.com/",
    description: "Exclusive HOTMESS compilation. Limited pressing of 500 copies.",
    isAffiliate: true
  },
  {
    title: "Radio Merch Bundle",
    image: "/img/wake-the-mess-radio.png", 
    price: "£120",
    partner: "Official Store",
    externalUrl: "https://hotmess-store.com/bundles",
    description: "Complete merchandise package. Tee, hoodie, and exclusive stickers.",
    isAffiliate: false
  },
  {
    title: "Pride Collection Cap",
    image: "/img/radio-neon-logo.png",
    price: "£29",
    partner: "Urban Outfitters",
    partnerLogo: "/logos/uo-logo.png",
    externalUrl: "https://www.urbanoutfitters.com/",
    description: "Embroidered pride cap with subtle HOTMESS branding. Perfect for summer.",
    isAffiliate: true
  }
];

const featuredPartners = [
  { name: "ASOS", logo: "/logos/asos-logo.png", url: "https://www.asos.com/" },
  { name: "END.", logo: "/logos/end-logo.png", url: "https://www.endclothing.com/" },
  { name: "SSENSE", logo: "/logos/ssense-logo.png", url: "https://www.ssense.com/" },
  { name: "Urban Outfitters", logo: "/logos/uo-logo.png", url: "https://www.urbanoutfitters.com/" },
  { name: "Rough Trade", logo: "/logos/roughtrade-logo.png", url: "https://www.roughtrade.com/" }
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-black py-16 px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-6">
          LUXURY <span className="text-orange-500">SHOP</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Curated premium lifestyle products from trusted retail partners. 
          Shop exclusive HOTMESS merchandise and luxury essentials.
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-green-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Trusted Partners</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2 text-orange-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="font-medium">Curated Selection</span>
          </div>
        </div>
      </div>

      {/* Featured Partners */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Our Retail Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {featuredPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-white/70 group-hover:text-white transition-colors font-bold">
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product, index) => (
          <RetailCard key={index} product={product} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-12 border border-orange-500/30">
          <h2 className="text-4xl font-bold text-white mb-4">
            Become a <span className="text-orange-500">Member</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get exclusive access to limited drops, member-only pricing, 
            and early access to new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">
              Join Membership
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-400 text-sm">
            <strong>Affiliate Disclosure:</strong> Some of our product links are affiliate links. 
            We may earn a commission when you make a purchase through these links, at no additional cost to you. 
            This helps support HOTMESS and allows us to continue providing quality content and curation.
          </p>
        </div>
      </div>
    </main>
  );
}