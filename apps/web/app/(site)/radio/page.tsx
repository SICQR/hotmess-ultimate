import { Metadata } from "next";
import RadioCard from "@/components/RadioCard";
import RadioVisualizer from "@/components/RadioVisualizer";

export const metadata: Metadata = {
  title: 'HOTMESS — Radio',
};

const shows = [
  {
    title: "GRACE — Morning Sessions",
    image: "/img/press/grace-hero-3000x2000.jpg",
    description: "Soul-leaning selections. Wake up with Grace's warm, deep vibes.",
    stinger: "/sounds/grace-stinger.mp3",
    href: "/shows/grace"
  },
  {
    title: "STEWART WHO — Conversations",
    image: "/img/wake-the-mess-radio.png",
    description: "Alternative rock deep cuts. Real talk, real music.",
    stinger: "/sounds/stewart-stinger.mp3",
    href: "/shows/stewart-who"
  },
  {
    title: "NIK DENTON — Club Systems",
    image: "/img/radio-neon-logo.png",
    description: "Electronic nights. Progressive house and techno journeys.",
    stinger: "/sounds/nik-stinger.mp3",
    href: "/shows/nik-denton"
  },
  {
    title: "JON HEMMING — Late Night",
    image: "/img/press/jon-hemming-hero-3000x2000.jpg",
    description: "After midnight sessions. Underground sounds for night owls.",
    stinger: "/sounds/jon-stinger.mp3",
    href: "/shows/jon-hemming"
  },
  {
    title: "PAUL KING — Raw Convict Sessions",
    image: "/img/press/paul-king-hero-3000x2000.jpg",
    description: "Hard-hitting sessions. Raw, unfiltered music selection.",
    stinger: "/sounds/paul-stinger.mp3",
    href: "/shows/paul-king"
  },
  {
    title: "TONY ENGLISH — Underground",
    image: "/img/press/tony-english-hero-3000x2000.jpg",
    description: "Deep underground vibes. Curated for the connoisseurs.",
    stinger: "/sounds/tony-stinger.mp3",
    href: "/shows/tony-english"
  }
];

export default function Radio() {
  return (
    <main className="min-h-screen bg-black py-16 px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">
          HOTMESS <span className="text-orange-500">RADIO</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Premium men-only queer radio programming. Click any show to hear its signature stinger.
        </p>
      </div>

      {/* Live Visualizer */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>
          </div>
        </div>
        <RadioVisualizer isPlaying={true} height={150} />
      </div>

      {/* Show Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show, index) => (
          <RadioCard key={index} show={show} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the <span className="text-orange-500">Community</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Become part of our exclusive men-only queer ecosystem. Access premium shows, 
            connect with hosts, and discover new music.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">
            Join HOTMESS
          </button>
        </div>
      </div>
    </main>
  );
}
