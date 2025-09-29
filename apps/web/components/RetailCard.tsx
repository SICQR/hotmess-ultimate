import Image from "next/image";
import LuxButton from "./LuxButton";

interface Product {
  title: string;
  image: string;
  price: string;
  partner: string;
  partnerLogo?: string;
  externalUrl: string;
  description: string;
  isAffiliate?: boolean;
}

interface RetailCardProps {
  product: Product;
}

export default function RetailCard({ product }: RetailCardProps) {
  const handlePurchase = () => {
    // Open external link in new tab for retail partner
    window.open(product.externalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-orange-glow p-6 flex flex-col items-center group hover:scale-105 transition-all duration-300 border border-orange-500/20">
      {/* Product Image */}
      <div className="relative mb-4 w-full">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={320} 
          height={320} 
          className="rounded-xl drop-shadow-lg w-full h-64 object-cover" 
        />
        
        {/* Partner Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-orange-400 text-xs font-bold">via {product.partner}</span>
        </div>
        
        {/* Affiliate Disclosure */}
        {product.isAffiliate && (
          <div className="absolute bottom-3 left-3 bg-orange-500/90 rounded-full px-2 py-1">
            <span className="text-white text-xs font-medium">Affiliate</span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {product.title}
        </h2>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-black text-orange-500">{product.price}</span>
          {product.partnerLogo && (
            <Image
              src={product.partnerLogo}
              alt={product.partner}
              width={60}
              height={30}
              className="opacity-70"
            />
          )}
        </div>
        
        {/* Purchase Button */}
        <LuxButton 
          onClick={handlePurchase}
          className="w-full mb-3 relative overflow-hidden group"
        >
          <span className="flex items-center justify-center gap-2">
            Shop on {product.partner}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </LuxButton>
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Trusted Partner</span>
        </div>
        
        {product.isAffiliate && (
          <p className="text-xs text-gray-500 mt-2">
            We may earn a commission from purchases made through this link.
          </p>
        )}
      </div>
    </div>
  );
}