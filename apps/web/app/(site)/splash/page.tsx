"use client";
import Image from "next/image";
import { useState } from "react";
import LuxButton from "../../../components/LuxButton";
import CustomCursor from "../../../components/CustomCursor";
import { Metadata } from "next";

export default function Splash() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleAgeVerification = (isAdult: boolean) => {
    if (isAdult) {
      setAgeVerified(true);
      setShowModal(false);
      // Redirect to main site after verification
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } else {
      alert("You must be 18+ to access HOTMESS.");
    }
  };

  return (
    <>
      <CustomCursor />
      
      {/* Age Gate Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8">
          <div className="bg-black border-2 border-orange-500 rounded-2xl p-8 max-w-md mx-auto text-center shadow-orange-glow animate-fade-in">
            <div className="mb-6">
              <Image
                src="/logo-kinetic.svg"
                alt="HOTMESS Logo"
                width={180}
                height={64}
                className="mx-auto"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Age Verification Required</h2>
            <p className="text-gray-300 mb-6">
              HOTMESS is an adult-oriented platform. You must be 18 years or older to continue.
            </p>
            
            <div className="flex gap-4 justify-center">
              <LuxButton onClick={() => handleAgeVerification(true)}>
                I am 18+
              </LuxButton>
              <button
                onClick={() => handleAgeVerification(false)}
                className="px-6 py-3 border-2 border-gray-600 text-gray-400 rounded-full hover:border-gray-400 transition-colors"
              >
                Under 18
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              By continuing, you confirm you are of legal age and accept our terms.
            </p>
          </div>
        </div>
      )}

      {/* Main Splash Content */}
      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/15 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
          {/* Animated Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/logo-kinetic.svg"
              alt="HOTMESS Kinetic Logo"
              width={360}
              height={128}
              className="mx-auto drop-shadow-glow"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-black text-white mb-6 drop-shadow-glow animate-slide-up">
            LUXURY
            <span className="block text-orange-500 animate-pulse">RADIO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl animate-slide-up-delay font-light">
            Men-only queer ecosystem — radio, records, apparel and care-first community.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl animate-slide-up-delay-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange-glow">
                <span className="text-2xl">📻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Radio</h3>
              <p className="text-gray-400">Curated shows by queer voices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange-glow">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Retail</h3>
              <p className="text-gray-400">Exclusive apparel & lifestyle</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange-glow">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">Care-first ecosystem</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up-delay-3">
            <LuxButton className="text-2xl px-16 py-8" onClick={() => setShowModal(false)}>
              Enter HOTMESS
            </LuxButton>
            <LuxButton className="text-2xl px-16 py-8 bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Learn More
            </LuxButton>
          </div>
          
          {/* Live Indicator */}
          <div className="mt-16 flex items-center gap-3 animate-fade-in-delay">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <span className="text-red-400 font-bold text-lg">LIVE NOW: Late Night Vibes</span>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </main>
    </>
  );
}