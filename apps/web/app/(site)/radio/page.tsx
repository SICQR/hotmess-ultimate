import { Metadata } from "next";
import RadioCard from "@/components/RadioCard";

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
    <main className="container">
      <div className="hero">
        <img src="/img/radio-neon-logo.png" alt="Radio hero"/>
        <div className="overlay">
          <h1>Live Radio Shows</h1>
          <p>Click any show card to hear their signature stinger</p>
          <a className="cta" href={process.env.NEXT_PUBLIC_RADIO_STREAM || '#'}>
            Listen Live Stream
          </a>
        </div>
      </div>

      <section style={{marginTop: 32}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <RadioCard key={index} show={show} />
          ))}
        </div>
      </section>

      <div style={{marginTop: 32, textAlign: 'center'}}>
        <p style={{color: '#ff5a00', fontSize: '14px'}}>
          Each show has its own signature stinger. Click to preview!
        </p>
        <p style={{marginTop: 16}}>
          Check the <a className="cta" href="/timetable">timetable</a> for live show times.
        </p>
      </div>
    </main>
  );
}
