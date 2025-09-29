'use client'
import Image from "next/image";
import { useRef } from "react";

interface Show {
  title: string;
  image: string;
  description: string;
  stinger?: string;
  href?: string;
}

interface RadioCardProps {
  show: Show;
}

export default function RadioCard({ show }: RadioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playStinger = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.log("Audio play failed:", err);
      });
    }
  };

  const handleClick = () => {
    playStinger();
    // Optional: navigate to show page after stinger
    if (show.href) {
      setTimeout(() => {
        window.location.href = show.href!;
      }, 800); // Let stinger play for 800ms before navigation
    }
  };

  return (
    <div
      className="group relative bg-black rounded-2xl p-6 shadow-xl border border-orange-500 hover:shadow-orange-glow transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Play stinger for ${show.title}`}
      onKeyDown={e => { 
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Show image */}
      <div className="relative">
        <Image 
          src={show.image} 
          alt={show.title} 
          width={340} 
          height={160} 
          className="rounded-lg w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Stinger badge */}
        <span className="absolute top-3 right-3 text-orange-500 bg-black bg-opacity-70 px-3 py-1 rounded-xl font-bold shadow-lg group-hover:animate-bounce text-sm backdrop-blur-sm">
          🔊 STINGER
        </span>
      </div>
      
      {/* Show details */}
      <div className="relative z-10 mt-4">
        <h2 className="font-extrabold text-2xl text-white drop-shadow-glow group-hover:text-orange-100 transition-colors">
          {show.title}
        </h2>
        <p className="text-orange-400 font-medium mt-2 group-hover:text-orange-300 transition-colors">
          {show.description}
        </p>
      </div>
      
      {/* Audio element */}
      <audio 
        ref={audioRef} 
        src={show.stinger || "/sounds/default-stinger.mp3"} 
        preload="auto" 
      />
      
      {/* Subtle pulse animation on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 opacity-0 group-hover:opacity-30 animate-pulse"></div>
    </div>
  );
}