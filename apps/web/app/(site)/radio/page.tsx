import { Metadata } from "next";import RadioCard from "@/components/RadioCard";import RadioCard from "../../../components/RadioCard";import RadioCard from "../../../components/RadioCard";import RadioCard from "@/components/RadioCard";import RadioCard from '../../../components/RadioCard'import RadioCard from '@/components/RadioCard'



export const metadata: Metadata = {import RadioVisualizer from "@/components/RadioVisualizer";

  title: 'HOTMESS — Radio',

};import { Metadata } from "next";import RadioVisualizer from "../../../components/RadioVisualizer";



const shows = [

  {

    title: "GRACE — Morning Sessions",export const metadata: Metadata = {import { Metadata } from "next";import RadioVisualizer from "../../../components/RadioVisualizer";

    image: "/img/press/grace-hero-3000x2000.jpg",

    description: "Soul-leaning selections. Wake up with Grace's warm, deep vibes.",  title: 'HOTMESS — Radio',

    stinger: "/sounds/grace-stinger.mp3",

    href: "/shows/grace"};

  },

  {

    title: "STEWART WHO — Conversations",

    image: "/img/wake-the-mess-radio.png",const shows = [export const metadata: Metadata = {import { Metadata } from "next";import RadioVisualizer from "@/components/RadioVisualizer";

    description: "Alternative rock deep cuts. Real talk, real music.",

    stinger: "/sounds/stewart-stinger.mp3",   {

    href: "/shows/stewart-who"

  },    title: "GRACE — Morning Sessions",  title: 'HOTMESS — Radio',

  {

    title: "NIK DENTON — Club Systems",    image: "/img/press/grace-hero-3000x2000.jpg",

    image: "/img/radio-neon-logo.png",

    description: "Electronic nights. Progressive house and techno journeys.",    description: "Soul-leaning selections. Wake up with Grace's warm, deep vibes.",};

    stinger: "/sounds/nik-stinger.mp3",

    href: "/shows/nik-denton"    stinger: "/sounds/grace-stinger.mp3",

  },

  {    href: "/shows/grace"

    title: "JON HEMMING — Late Night",

    image: "/img/press/jon-hemming-hero-3000x2000.jpg",   },

    description: "After midnight sessions. Underground sounds for night owls.",

    stinger: "/sounds/jon-stinger.mp3",  {const shows = [export const metadata: Metadata = {import { Metadata } from "next";

    href: "/shows/jon-hemming"

  },    title: "STEWART WHO — Conversations",

  {

    title: "PAUL KING — Raw Convict Sessions",    image: "/img/wake-the-mess-radio.png",  {

    image: "/img/press/paul-king-hero-3000x2000.jpg",

    description: "Hard-hitting sessions. Raw, unfiltered music selection.",    description: "Alternative rock deep cuts. Real talk, real music.",

    stinger: "/sounds/paul-stinger.mp3", 

    href: "/shows/paul-king"    stinger: "/sounds/stewart-stinger.mp3",     title: "Late Night Vibes",  title: 'HOTMESS — Radio',

  },

  {    href: "/shows/stewart-who"

    title: "TONY ENGLISH — Underground",

    image: "/img/press/tony-english-hero-3000x2000.jpg",  },    image: "/img/radio-neon-logo.png",

    description: "Deep underground vibes. Curated for the connoisseurs.",

    stinger: "/sounds/tony-stinger.mp3",  {

    href: "/shows/tony-english"

  }    title: "NIK DENTON — Club Systems",    description: "Deep house and ambient sounds for the after hours",};

];

    image: "/img/radio-neon-logo.png",

export default function Radio() {

  return (    description: "Electronic nights. Progressive house and techno journeys.",    stinger: "/sounds/late-night-stinger.mp3"

    <main className="min-h-screen bg-black py-16 px-8">

      {/* Header */}    stinger: "/sounds/nik-stinger.mp3",

      <div className="text-center mb-12">

        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">    href: "/shows/nik-denton"  },

          HOTMESS <span className="text-orange-500">RADIO</span>

        </h1>  },

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

          Premium men-only queer radio programming. Click any show to hear its signature stinger.  {  {

        </p>

      </div>    title: "JON HEMMING — Late Night",



      {/* Live Status */}    image: "/img/press/jon-hemming-hero-3000x2000.jpg",     title: "Wake the Mess",const shows = [export const metadata: Metadata = {export const metadata = { title:'HOTMESS — Radio' }import RadioCard from '../../../components/RadioCard'

      <div className="max-w-4xl mx-auto mb-12">

        <div className="text-center mb-6">    description: "After midnight sessions. Underground sounds for night owls.",

          <div className="flex items-center justify-center gap-3 mb-4">

            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>    stinger: "/sounds/jon-stinger.mp3",    image: "/img/wake-the-mess-radio.png", 

            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>

          </div>    href: "/shows/jon-hemming"

        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 h-32 rounded-lg flex items-center justify-center">  },    description: "Morning energy with curated electronic beats",  {

          <span className="text-white text-lg">🎵 Live Radio Stream Active</span>

        </div>  {

      </div>

    title: "PAUL KING — Raw Convict Sessions",    stinger: "/sounds/wake-stinger.mp3"

      {/* Show Cards Grid */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">    image: "/img/press/paul-king-hero-3000x2000.jpg",

        {shows.map((show, index) => (

          <div key={index} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">    description: "Hard-hitting sessions. Raw, unfiltered music selection.",  },    title: "Late Night Vibes",  title: 'HOTMESS — Radio',

            <img src={show.image} alt={show.title} className="w-full h-48 object-cover" />

            <div className="p-6">    stinger: "/sounds/paul-stinger.mp3", 

              <h3 className="text-xl font-bold text-white mb-2">{show.title}</h3>

              <p className="text-gray-300 mb-4">{show.description}</p>    href: "/shows/paul-king"  {

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">

                Play Stinger  },

              </button>

            </div>  {    title: "Dial-a-Daddy",    image: "/img/radio-neon-logo.png",

          </div>

        ))}    title: "TONY ENGLISH — Underground",

      </div>

    image: "/img/press/tony-english-hero-3000x2000.jpg",    image: "/img/dial-a-daddy-photo.png",

      {/* Additional Info */}

      <div className="max-w-4xl mx-auto mt-16 text-center">    description: "Deep underground vibes. Curated for the connoisseurs.",

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">

          <h2 className="text-3xl font-bold text-white mb-4">    stinger: "/sounds/tony-stinger.mp3",    description: "Conversations and connections with community voices",    description: "Deep house and ambient sounds for the after hours",};

            Join the <span className="text-orange-500">Community</span>

          </h2>    href: "/shows/tony-english"

          <p className="text-gray-300 mb-6">

            Become part of our exclusive men-only queer ecosystem. Access premium shows,   }    stinger: "/sounds/daddy-stinger.mp3"

            connect with hosts, and discover new music.

          </p>];

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">

            Join HOTMESS  }    stinger: "/sounds/late-night-stinger.mp3"

          </button>

        </div>export default function Radio() {

      </div>

    </main>  return (];

  );

}    <main className="min-h-screen bg-black py-16 px-8">

      {/* Header */}  },

      <div className="text-center mb-12">

        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">export default function Radio() {

          HOTMESS <span className="text-orange-500">RADIO</span>

        </h1>  return (  {

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

          Premium men-only queer radio programming. Click any show to hear its signature stinger.    <main className="min-h-screen bg-black py-16 px-8">

        </p>

      </div>      {/* Header */}    title: "Wake the Mess",const shows = [const shows = [export const metadata = { title:'HOTMESS — Radio' }



      {/* Live Visualizer */}      <div className="text-center mb-12">

      <div className="max-w-4xl mx-auto mb-12">

        <div className="text-center mb-6">        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">    image: "/img/wake-the-mess-radio.png", 

          <div className="flex items-center justify-center gap-3 mb-4">

            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>          HOTMESS <span className="text-orange-500">RADIO</span>

            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>

          </div>        </h1>    description: "Morning energy with curated electronic beats",  {

        </div>

        <RadioVisualizer isPlaying={true} height={150} />        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

      </div>

          Premium men-only queer radio programming. Click any show to hear its signature stinger.    stinger: "/sounds/wake-stinger.mp3"

      {/* Show Cards Grid */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">        </p>

        {shows.map((show, index) => (

          <RadioCard key={index} show={show} />      </div>  },    title: "Late Night Vibes",  {

        ))}

      </div>



      {/* Additional Info */}      {/* Live Visualizer */}  {

      <div className="max-w-4xl mx-auto mt-16 text-center">

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">      <div className="max-w-4xl mx-auto mb-12">

          <h2 className="text-3xl font-bold text-white mb-4">

            Join the <span className="text-orange-500">Community</span>        <div className="text-center mb-6">    title: "Dial-a-Daddy",    image: "/img/radio-neon-logo.png",

          </h2>

          <p className="text-gray-300 mb-6">          <div className="flex items-center justify-center gap-3 mb-4">

            Become part of our exclusive men-only queer ecosystem. Access premium shows, 

            connect with hosts, and discover new music.            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>    image: "/img/dial-a-daddy-photo.png",

          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>

            Join HOTMESS

          </button>          </div>    description: "Conversations and connections with community voices",    description: "Deep house and ambient sounds for the after hours",    title: "GRACE — Morning Sessions",const shows = [

        </div>

      </div>        </div>

    </main>

  );        <RadioVisualizer isPlaying={true} height={150} />    stinger: "/sounds/daddy-stinger.mp3"

}
      </div>

  }    stinger: "/sounds/late-night-stinger.mp3"

      {/* Show Cards Grid */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">];

        {shows.map((show, index) => (

          <RadioCard key={index} show={show} />  },    image: "/img/press/grace-hero-3000x2000.jpg",  {

        ))}

      </div>export default function Radio() {



      {/* Additional Info */}  return (  {

      <div className="max-w-4xl mx-auto mt-16 text-center">

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">    <main className="min-h-screen bg-black py-16 px-8">

          <h2 className="text-3xl font-bold text-white mb-4">

            Join the <span className="text-orange-500">Community</span>      {/* Header */}    title: "Wake the Mess",    description: "Soul-leaning selections. Wake up with Grace's warm, deep vibes.",    title: "GRACE — Morning Sessions",

          </h2>

          <p className="text-gray-300 mb-6">      <div className="text-center mb-12">

            Become part of our exclusive men-only queer ecosystem. Access premium shows, 

            connect with hosts, and discover new music.        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">    image: "/img/wake-the-mess-radio.png", 

          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">          HOTMESS <span className="text-orange-500">RADIO</span>

            Join HOTMESS

          </button>        </h1>    description: "Morning energy with curated electronic beats",    stinger: "/sounds/grace-stinger.mp3",    image: "/img/press/grace-hero-3000x2000.jpg",

        </div>

      </div>        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

    </main>

  );          Premium men-only queer radio programming. Click any show to hear its signature stinger.    stinger: "/sounds/wake-stinger.mp3"

}
        </p>

      </div>  },    href: "/shows/grace"    description: "Soul-leaning selections. Wake up with Grace's warm, deep vibes.",



      {/* Live Visualizer */}  {

      <div className="max-w-4xl mx-auto mb-12">

        <div className="text-center mb-6">    title: "Dial-a-Daddy",  },    stinger: "/sounds/grace-stinger.mp3",

          <div className="flex items-center justify-center gap-3 mb-4">

            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>    image: "/img/dial-a-daddy-photo.png",

            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>

          </div>    description: "Conversations and connections with community voices",  {    href: "/shows/grace"

        </div>

        <RadioVisualizer isPlaying={true} height={150} />    stinger: "/sounds/daddy-stinger.mp3"

      </div>

  }    title: "STEWART WHO — Conversations",  },

      {/* Show Cards Grid */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">];

        {shows.map((show, index) => (

          <RadioCard key={index} show={show} />    image: "/img/wake-the-mess-radio.png",  {

        ))}

      </div>export default function Radio() {



      {/* Additional Info */}  return (    description: "Alternative rock deep cuts. Real talk, real music.",    title: "STEWART WHO — Conversations",

      <div className="max-w-4xl mx-auto mt-16 text-center">

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">    <main className="min-h-screen bg-black py-16 px-8">

          <h2 className="text-3xl font-bold text-white mb-4">

            Join the <span className="text-orange-500">Community</span>      {/* Header */}    stinger: "/sounds/stewart-stinger.mp3",     image: "/img/wake-the-mess-radio.png",

          </h2>

          <p className="text-gray-300 mb-6">      <div className="text-center mb-12">

            Become part of our exclusive men-only queer ecosystem. Access premium shows, 

            connect with hosts, and discover new music.        <h1 className="text-6xl font-black text-white drop-shadow-glow mb-4">    href: "/shows/stewart-who"    description: "Alternative rock deep cuts. Real talk, real music.",

          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">          HOTMESS <span className="text-orange-500">RADIO</span>

            Join HOTMESS

          </button>        </h1>  },    stinger: "/sounds/stewart-stinger.mp3", 

        </div>

      </div>        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

    </main>

  );          Premium men-only queer radio programming. Click any show to hear its signature stinger.  {    href: "/shows/stewart-who"

}
        </p>

      </div>    title: "NIK DENTON — Club Systems",  },



      {/* Live Visualizer */}    image: "/img/radio-neon-logo.png",  {

      <div className="max-w-4xl mx-auto mb-12">

        <div className="text-center mb-6">    description: "Electronic nights. Progressive house and techno journeys.",    title: "NIK DENTON — Club Systems",

          <div className="flex items-center justify-center gap-3 mb-4">

            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>    stinger: "/sounds/nik-stinger.mp3",    image: "/img/radio-neon-logo.png",

            <span className="text-red-400 font-bold text-lg">LIVE NOW</span>

          </div>    href: "/shows/nik-denton"    description: "Electronic nights. Progressive house and techno journeys.",

        </div>

        <RadioVisualizer isPlaying={true} height={150} />  },    stinger: "/sounds/nik-stinger.mp3",

      </div>

  {    href: "/shows/nik-denton"

      {/* Show Cards Grid */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">    title: "JON HEMMING — Late Night",  },

        {shows.map((show, index) => (

          <RadioCard key={index} show={show} />    image: "/img/press/jon-hemming-hero-3000x2000.jpg",   {

        ))}

      </div>    description: "After midnight sessions. Underground sounds for night owls.",    title: "JON HEMMING — Late Night",



      {/* Additional Info */}    stinger: "/sounds/jon-stinger.mp3",    image: "/img/press/jon-hemming-hero-3000x2000.jpg", 

      <div className="max-w-4xl mx-auto mt-16 text-center">

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-orange-500/30">    href: "/shows/jon-hemming"    description: "After midnight sessions. Underground sounds for night owls.",

          <h2 className="text-3xl font-bold text-white mb-4">

            Join the <span className="text-orange-500">Community</span>  },    stinger: "/sounds/jon-stinger.mp3",

          </h2>

          <p className="text-gray-300 mb-6">  {    href: "/shows/jon-hemming"

            Become part of our exclusive men-only queer ecosystem. Access premium shows, 

            connect with hosts, and discover new music.    title: "PAUL KING — Raw Convict Sessions",  },

          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-orange-glow hover:shadow-lg transform hover:scale-105">    image: "/img/press/paul-king-hero-3000x2000.jpg",  {

            Join HOTMESS

          </button>    description: "Hard-hitting sessions. Raw, unfiltered music selection.",    title: "PAUL KING — Raw Convict Sessions",

        </div>

      </div>    stinger: "/sounds/paul-stinger.mp3",     image: "/img/press/paul-king-hero-3000x2000.jpg",

    </main>

  );    href: "/shows/paul-king"    description: "Hard-hitting sessions. Raw, unfiltered music selection.",

}
  },    stinger: "/sounds/paul-stinger.mp3", 

  {    href: "/shows/paul-king"

    title: "TONY ENGLISH — Underground",  },

    image: "/img/press/tony-english-hero-3000x2000.jpg",  {

    description: "Deep underground vibes. Curated for the connoisseurs.",    title: "TONY ENGLISH — Underground",

    stinger: "/sounds/tony-stinger.mp3",    image: "/img/press/tony-english-hero-3000x2000.jpg",

    href: "/shows/tony-english"    description: "Deep underground vibes. Curated for the connoisseurs.",

  }    stinger: "/sounds/tony-stinger.mp3",

];    href: "/shows/tony-english"

  }

export default function Radio(){];

  return (

    <main className="container">export default function Radio(){

      {/* Hero section */}  return (

      <div className="hero">    <main className="container">

        <img src="/img/radio-neon-logo.png" alt="Radio hero"/>      {/* Hero section */}

        <div className="overlay">      <div className="hero">

          <h1>Live Radio Shows</h1>        <img src="/img/radio-neon-logo.png" alt="Radio hero"/>

          <p>Click any show card to hear their signature stinger</p>        <div className="overlay">

          <a className="cta" href={process.env.NEXT_PUBLIC_RADIO_STREAM || '#'}>          <h1>Live Radio Shows</h1>

            🔴 Listen Live Stream          <p>Click any show card to hear their signature stinger</p>

          </a>          <a className="cta" href={process.env.NEXT_PUBLIC_RADIO_STREAM || '#'}>

        </div>            🔴 Listen Live Stream

      </div>          </a>

        </div>

      {/* Radio cards grid */}      </div>

      <section style={{marginTop: 32}}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">      {/* Radio cards grid */}

          {shows.map((show, index) => (      <section style={{marginTop: 32}}>

            <RadioCard key={index} show={show} />        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          ))}          {shows.map((show, index) => (

        </div>            <RadioCard key={index} show={show} />

      </section>          ))}

        </div>

      {/* Additional info */}      </section>

      <div style={{marginTop: 32, textAlign: 'center'}}>

        <p style={{color: '#ff5a00', fontSize: '14px'}}>      {/* Additional info */}

          💡 Each show has its own signature stinger. Click to preview!      <div style={{marginTop: 32, textAlign: 'center'}}>

        </p>        <p style={{color: '#ff5a00', fontSize: '14px'}}>

        <p style={{marginTop: 16}}>          💡 Each show has its own signature stinger. Click to preview!

          Check the <a className="cta" href="/timetable">timetable</a> for live show times.        </p>

        </p>        <p style={{marginTop: 16}}>

      </div>          Check the <a className="cta" href="/timetable">timetable</a> for live show times.

    </main>        </p>

  )      </div>

}    </main>
  )
}export default function Radio(){
  return (
    <main className="container">
      {/* Hero section */}
      <div className="hero">
        <img src="/img/radio-neon-logo.png" alt="Radio hero"/>
        <div className="overlay">
          <h1>Live Radio Shows</h1>
          <p>Click any show card to hear their signature stinger</p>
          <a className="cta" href={process.env.NEXT_PUBLIC_RADIO_STREAM || '#'}>
            🔴 Listen Live Stream
          </a>
        </div>
      </div>

      {/* Radio cards grid */}
      <section style={{marginTop: 32}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <RadioCard key={index} show={show} />
          ))}
        </div>
      </section>

      {/* Additional info */}
      <div style={{marginTop: 32, textAlign: 'center'}}>
        <p style={{color: '#ff5a00', fontSize: '14px'}}>
          💡 Each show has its own signature stinger. Click to preview!
        </p>
        <p style={{marginTop: 16}}>
          Check the <a className="cta" href="/timetable">timetable</a> for live show times.
        </p>
      </div>
    </main>
  )
}const metadata = { title:'HOTMESS — Radio' }
export default function Radio(){
  return (<main className="container">
    <div className="hero">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/radio-neon-logo.png" alt="Radio hero"/><div className="overlay"><h1>Listen Live</h1><a className="cta" href={process.env.NEXT_PUBLIC_RADIO_STREAM || '#'}>Play Stream</a></div></div>
    <p style={{marginTop:16}}>Use the header “Now Playing” to jump in, or browse <a className="cta" href="/timetable">timetable</a>.</p>
  </main>)
}
