"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes kinetic-logo {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(1deg); }
          50% { transform: scale(1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.5); }
          50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.8); }
        }
        
        .kinetic-logo { animation: kinetic-logo 4s ease-in-out infinite; }
        .fade-in { animation: fade-in 1s ease-out forwards; }
        .slide-up { animation: slide-up 0.8s ease-out forwards; }
        .glow-box { animation: glow-pulse 3s ease-in-out infinite; }
      `}</style>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-orange-500 text-3xl"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            <Link href="/" className="text-white text-2xl font-bold">Home</Link>
            <Link href="/hosts" className="text-white text-2xl font-bold">Hosts</Link>
            <Link href="/shop" className="text-white text-2xl font-bold">Shop</Link>
            <Link href="/radio" className="text-white text-2xl font-bold">Radio</Link>
            <Link href="/community" className="text-white text-2xl font-bold">Community</Link>
          </nav>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-6 right-6 z-40 md:hidden bg-orange-500 p-3 rounded-lg"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Animated Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-orange-900/30">
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <div className="kinetic-logo">
            <h1 className="text-8xl md:text-[12rem] font-black text-white mb-8 drop-shadow-2xl">
              HOTMESS
            </h1>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.5s', opacity: 0}}>
            <span className="block text-orange-500 text-6xl md:text-8xl font-black mb-8">
              ULTIMATE
            </span>
          </div>
          
          <div className="fade-in" style={{animationDelay: '1s', opacity: 0}}>
            <p className="text-2xl md:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Premium men-only queer ecosystem with luxury radio, 
              e-commerce automation, and business intelligence
            </p>
          </div>
          
          <div className="fade-in" style={{animationDelay: '1.5s', opacity: 0}}>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 glow-box"
            >
              � JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* Glowing Feature Sections */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Shop & Affiliate */}
          <div className="slide-up glow-box bg-gradient-to-br from-orange-900/50 to-orange-600/30 rounded-2xl p-8 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-300" style={{animationDelay: '0.2s', opacity: 0}}>
            <div className="text-6xl mb-6 text-center">�️</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Shop & Affiliate</h3>
            <p className="text-gray-300 mb-6 text-center">
              Premium merchandise, affiliate tracking, commission payouts
            </p>
            <Link href="/shop" className="block bg-orange-500 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
              Explore Shop
            </Link>
          </div>

          {/* 24/7 Radio */}
          <div className="slide-up glow-box bg-gradient-to-br from-red-900/50 to-red-600/30 rounded-2xl p-8 border-2 border-red-500/50 hover:border-red-400 transition-all duration-300" style={{animationDelay: '0.4s', opacity: 0}}>
            <div className="text-6xl mb-6 text-center">�</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">24/7 Radio</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-red-400 font-bold">LIVE NOW</span>
            </div>
            <p className="text-gray-300 mb-6 text-center">
              Luxury queer radio with exclusive DJ sets
            </p>
            <Link href="/radio" className="block bg-red-500 text-white text-center py-3 rounded-lg font-bold hover:bg-red-600 transition-colors">
              Listen Live
            </Link>
          </div>

          {/* Hosts */}
          <div className="slide-up glow-box bg-gradient-to-br from-purple-900/50 to-purple-600/30 rounded-2xl p-8 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300" style={{animationDelay: '0.6s', opacity: 0}}>
            <div className="text-6xl mb-6 text-center">�</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Elite Hosts</h3>
            
            {/* Host Avatars */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform cursor-pointer">PK</div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform cursor-pointer">SW</div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform cursor-pointer">ND</div>
            </div>
            
            <p className="text-gray-300 mb-6 text-center">
              Exclusive content from premium hosts
            </p>
            <Link href="/hosts" className="block bg-purple-500 text-white text-center py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors">
              Meet Hosts
            </Link>
          </div>

          {/* Exclusive Community */}
          <div className="slide-up glow-box bg-gradient-to-br from-pink-900/50 to-pink-600/30 rounded-2xl p-8 border-2 border-pink-500/50 hover:border-pink-400 transition-all duration-300" style={{animationDelay: '0.8s', opacity: 0}}>
            <div className="text-6xl mb-6 text-center">�</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Exclusive Community</h3>
            <p className="text-gray-300 mb-6 text-center">
              VIP access to luxury queer ecosystem
            </p>
            <Link href="/community" className="block bg-pink-500 text-white text-center py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-orange-500/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Join HOTMESS Ultimate</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-orange-500 text-2xl hover:text-orange-400"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full p-4 bg-black border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Username"
                className="w-full p-4 bg-black border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                🚀 Create Account
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4 text-center">
              Exclusive access to premium queer content & business automation tools
            </p>
          </div>
        </div>
      )}

      {/* Legal Footer */}
      <footer className="bg-gray-900 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/legal/terms" className="block text-gray-400 hover:text-orange-500">Terms of Service</Link>
                <Link href="/legal/privacy" className="block text-gray-400 hover:text-orange-500">Privacy Policy</Link>
                <Link href="/legal/accessibility" className="block text-gray-400 hover:text-orange-500">Accessibility</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <div className="space-y-2">
                <Link href="/api" className="block text-gray-400 hover:text-orange-500">API Access</Link>
                <Link href="/analytics" className="block text-gray-400 hover:text-orange-500">Analytics</Link>
                <Link href="/affiliate" className="block text-gray-400 hover:text-orange-500">Affiliate Program</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/legal/caredisclaimer" className="block text-gray-400 hover:text-orange-500">Care Disclaimer</Link>
                <Link href="/legal/data-privacy" className="block text-gray-400 hover:text-orange-500">Data & Privacy</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-orange-500">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">© 2025 HOTMESS Ultimate. Premium men-only queer ecosystem.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
