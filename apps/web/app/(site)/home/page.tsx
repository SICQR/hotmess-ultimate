'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showOnboard, setShowOnboard] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hosts = [
    { name: "GRACE", image: "/img/press/grace-hero-3000x2000.jpg" },
    { name: "PAUL KING", image: "/img/press/paul-king-hero-3000x2000.jpg" },
    { name: "NIK DENTON", image: "/img/press/nik-denton-hero-3000x2000.jpg" },
    { name: "JON HEMMING", image: "/img/press/jon-hemming-hero-3000x2000.jpg" },
    { name: "TONY ENGLISH", image: "/img/press/tony-english-hero-3000x2000.jpg" }
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-red-900/20"></div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/img/hero-home-2400x1350.jpg"
            alt="HOTMESS Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Kinetic Logo */}
        <div className="absolute top-8 left-8 z-20">
          <Image
            src="/logo-kinetic.svg"
            alt="HOTMESS Logo"
            width={120}
            height={60}
            className="animate-pulse"
          />
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="absolute top-8 right-8 z-20 md:hidden bg-orange-500/20 p-3 rounded-full border border-orange-500/50"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="h-0.5 bg-orange-500 transform transition"></div>
            <div className="h-0.5 bg-orange-500 transform transition"></div>
            <div className="h-0.5 bg-orange-500 transform transition"></div>
          </div>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-8 drop-shadow-glow animate-fade-in">
            HOTMESS
            <span className="block text-orange-500 text-6xl md:text-8xl mt-4 animate-slide-up">ULTIMATE</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-delay">
            Premium men-only queer ecosystem with luxury radio, e-commerce automation, and business intelligence
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-up-delay">
            <button
              onClick={() => setShowOnboard(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105 animate-pulse"
            >
              Join Now
            </button>
            <Link
              href="/radio"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-red-glow hover:shadow-lg transform hover:scale-105"
            >
              🔴 Listen Live
            </Link>
          </div>
        </div>
      </section>

      {/* Shop/Affiliate Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-orange-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/50 rounded-2xl p-12 border border-orange-500/30 shadow-orange-glow hover:shadow-orange-glow/80 transition-all duration-500">
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              Shop & <span className="text-orange-500">Affiliate</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6">🛍️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium Shop</h3>
                <p className="text-gray-300 mb-6">Luxury apparel, exclusive releases, and premium accessories</p>
                <Link href="/shop" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Browse Shop
                </Link>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Affiliate Network</h3>
                <p className="text-gray-300 mb-6">QR codes, commissions, automated payouts, and leaderboards</p>
                <Link href="/affiliate" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full border border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                  Join Network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Section */}
      <section className="py-20 px-8 bg-gradient-to-l from-red-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/50 rounded-2xl p-12 border border-red-500/30 shadow-red-glow hover:shadow-red-glow/80 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-red-400 font-bold text-2xl">LIVE NOW</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              24/7 <span className="text-red-500">Radio</span>
            </h2>
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 h-32 rounded-lg mb-8 flex items-center justify-center">
                <span className="text-white text-xl">🎵 Live Radio Stream Active</span>
              </div>
              <Link href="/radio" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-red-glow hover:shadow-lg transform hover:scale-105">
                Listen Live Stream
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-gray-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/50 rounded-2xl p-12 border border-gray-500/30 shadow-gray-glow hover:shadow-gray-glow/80 transition-all duration-500">
            <h2 className="text-5xl font-black text-white mb-12 text-center">
              Our <span className="text-orange-500">Hosts</span>
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              {hosts.map((host, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500/50 group-hover:border-orange-500 transition-all duration-300">
                    <Image
                      src={host.image}
                      alt={host.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-white font-bold group-hover:text-orange-500 transition-colors duration-300">{host.name}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/hosts" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full border border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                Meet All Hosts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-8 bg-gradient-to-l from-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/50 rounded-2xl p-12 border border-purple-500/30 shadow-purple-glow hover:shadow-purple-glow/80 transition-all duration-500">
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              Exclusive <span className="text-purple-500">Community</span>
            </h2>
            <div className="text-center">
              <div className="text-6xl mb-6">👥</div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our men-only queer ecosystem. Connect with hosts, access premium content, and be part of something exclusive.
              </p>
              <Link href="/community" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-purple-glow hover:shadow-lg transform hover:scale-105">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-black border-t border-orange-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/legal/terms" className="block text-gray-400 hover:text-orange-500 transition-colors">Terms</Link>
                <Link href="/legal/privacy" className="block text-gray-400 hover:text-orange-500 transition-colors">Privacy</Link>
                <Link href="/legal/dmca" className="block text-gray-400 hover:text-orange-500 transition-colors">DMCA</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <div className="space-y-2">
                <Link href="/admin" className="block text-gray-400 hover:text-orange-500 transition-colors">Analytics</Link>
                <Link href="/api" className="block text-gray-400 hover:text-orange-500 transition-colors">API</Link>
                <Link href="/press" className="block text-gray-400 hover:text-orange-500 transition-colors">Press</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <Link href="/auth" className="block text-gray-400 hover:text-orange-500 transition-colors">Sign In</Link>
                <Link href="/community" className="block text-gray-400 hover:text-orange-500 transition-colors">Telegram</Link>
                <Link href="/affiliate" className="block text-gray-400 hover:text-orange-500 transition-colors">Affiliates</Link>
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 HOTMESS Ultimate. Premium men-only queer ecosystem.
          </div>
        </div>
      </footer>

      {/* Mobile Nav Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setMobileNavOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl"
            >
              ×
            </button>
            <Link href="/radio" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Radio</Link>
            <Link href="/shop" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Shop</Link>
            <Link href="/affiliate" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Affiliate</Link>
            <Link href="/community" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Community</Link>
            <Link href="/hosts" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Hosts</Link>
            <Link href="/auth" className="text-2xl text-white hover:text-orange-500" onClick={() => setMobileNavOpen(false)}>Sign In</Link>
          </div>
        </div>
      )}

      {/* Onboarding Modal */}
      {showOnboard && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-orange-500/50 shadow-orange-glow">
            <h3 className="text-2xl font-bold text-white mb-4">Join HOTMESS Ultimate</h3>
            <p className="text-gray-300 mb-6">
              Access exclusive content, premium radio shows, affiliate opportunities, and our men-only queer community.
            </p>
            <div className="space-y-4">
              <Link href="/auth" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300">
                Sign Up Now
              </Link>
              <button
                onClick={() => setShowOnboard(false)}
                className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.5s both;
        }
        .shadow-orange-glow {
          box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
        }
        .shadow-red-glow {
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        }
        .shadow-purple-glow {
          box-shadow: 0 0 20px rgba(128, 0, 128, 0.3);
        }
        .shadow-gray-glow {
          box-shadow: 0 0 20px rgba(128, 128, 128, 0.2);
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5));
        }
      `}</style>
    </main>
  );
}