import Image from "next/image";
import LuxButton from "@/components/LuxButton";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: 'HOTMESS — Landing',
};

export default function Landing() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl animate-bounce"></div>
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
              className="mx-auto"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-glow animate-slide-up">
            LUXURY
            <span className="block text-orange-500 animate-pulse">RADIO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-slide-up-delay">
            Men-only queer ecosystem — radio, records, apparel and care-first community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
            <LuxButton className="text-xl px-12 py-6">
              Enter Radio
            </LuxButton>
            <LuxButton className="text-xl px-12 py-6 bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Join Community
            </LuxButton>
          </div>
          
          {/* Live Indicator */}
          <div className="mt-12 flex items-center gap-3 animate-fade-in-delay">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <span className="text-red-400 font-medium">LIVE NOW: Late Night Vibes</span>
          </div>
        </div>
      </main>
    </>
  );
}