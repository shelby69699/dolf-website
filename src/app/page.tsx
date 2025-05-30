"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen bg-[#06B6D4] relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center gap-3">
          <Image
            src="/dolf-character.png"
            alt="$DOLF Logo"
            width={56}
            height={56}
            className="object-contain"
            unoptimized
          />
          <span className="text-yellow-200 text-3xl font-bold">$DOLF</span>
        </div>
        <Link 
          href="/yellow"
          className="bg-[#F84444] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E03434] transition-colors"
        >
          Learn More
        </Link>
      </header>

      {/* Main Content - Centered */}
      <div className="h-full flex flex-col items-center justify-center px-4 relative z-10">
        {/* Main Character - Interactive */}
        <div 
          className="relative w-[350px] h-[350px] mb-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:drop-shadow-2xl group dolf-character"
          onClick={(e) => {
            // Add click animation class temporarily
            const element = e.currentTarget;
            element.classList.add('animate-bounce');
            setTimeout(() => {
              element.classList.remove('animate-bounce');
            }, 1000);
          }}
        >
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <Image
            src="/dolf-character.png"
            alt="$DOLF Character"
            fill
            className="object-contain transition-all duration-300 group-hover:brightness-110 group-active:scale-95 group-active:rotate-1 pointer-events-none"
            priority
            unoptimized
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 drop-shadow-lg">
          <span className="text-yellow-200">$DOLF</span> - The King of<br />Cardano Ocean
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <a
            href="https://x.com/DOLF_CARDANO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 transition-colors text-xl font-semibold"
          >
            <Image
              src="/x-logo.svg"
              alt="X Logo"
              width={28}
              height={28}
              unoptimized
            />
            Follow on X
          </a>
          <a
            href="https://www.snek.fun/token/738080f4674c1484b2ed566629d70ead7065a64872927297775f8eef444f4c46"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F84444] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#E03434] transition-colors"
          >
            Buy $DOLF
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] z-0">
        {/* Bubbles Above Left Rock */}
        <div className="absolute inset-0">
          {/* Left Rock Bubbles - More clustered together */}
          <div className="w-6 h-6 bg-white/40 rounded-full absolute animate-bubble-rise-1 shadow-lg" style={{ left: '5%', bottom: '0px' }} />
          <div className="w-8 h-8 bg-white/35 rounded-full absolute animate-bubble-rise-2 shadow-lg" style={{ left: '8%', bottom: '0px' }} />
          <div className="w-5 h-5 bg-white/45 rounded-full absolute animate-bubble-rise-3 shadow-lg" style={{ left: '11%', bottom: '0px' }} />
          <div className="w-7 h-7 bg-white/30 rounded-full absolute animate-bubble-rise-4 shadow-lg" style={{ left: '14%', bottom: '0px' }} />
          <div className="w-4 h-4 bg-white/50 rounded-full absolute animate-bubble-rise-5 shadow-lg" style={{ left: '17%', bottom: '0px' }} />
          <div className="w-9 h-9 bg-white/25 rounded-full absolute animate-bubble-rise-6 shadow-lg" style={{ left: '20%', bottom: '0px' }} />
          <div className="w-6 h-6 bg-white/40 rounded-full absolute animate-bubble-rise-1 shadow-lg" style={{ left: '23%', bottom: '0px' }} />
          <div className="w-5 h-5 bg-white/35 rounded-full absolute animate-bubble-rise-3 shadow-lg" style={{ left: '26%', bottom: '0px' }} />
          <div className="w-8 h-8 bg-white/45 rounded-full absolute animate-bubble-rise-2 shadow-lg" style={{ left: '29%', bottom: '0px' }} />
          <div className="w-4 h-4 bg-white/50 rounded-full absolute animate-bubble-rise-4 shadow-lg" style={{ left: '32%', bottom: '0px' }} />
          
          {/* Right Rock Bubbles - More clustered together */}
          <div className="w-6 h-6 bg-white/40 rounded-full absolute animate-bubble-rise-1 shadow-lg" style={{ right: '5%', bottom: '0px' }} />
          <div className="w-8 h-8 bg-white/35 rounded-full absolute animate-bubble-rise-2 shadow-lg" style={{ right: '8%', bottom: '0px' }} />
          <div className="w-5 h-5 bg-white/45 rounded-full absolute animate-bubble-rise-3 shadow-lg" style={{ right: '11%', bottom: '0px' }} />
          <div className="w-7 h-7 bg-white/30 rounded-full absolute animate-bubble-rise-4 shadow-lg" style={{ right: '14%', bottom: '0px' }} />
          <div className="w-4 h-4 bg-white/50 rounded-full absolute animate-bubble-rise-5 shadow-lg" style={{ right: '17%', bottom: '0px' }} />
          <div className="w-9 h-9 bg-white/25 rounded-full absolute animate-bubble-rise-6 shadow-lg" style={{ right: '20%', bottom: '0px' }} />
          <div className="w-6 h-6 bg-white/40 rounded-full absolute animate-bubble-rise-1 shadow-lg" style={{ right: '23%', bottom: '0px' }} />
          <div className="w-5 h-5 bg-white/35 rounded-full absolute animate-bubble-rise-3 shadow-lg" style={{ right: '26%', bottom: '0px' }} />
          <div className="w-8 h-8 bg-white/45 rounded-full absolute animate-bubble-rise-2 shadow-lg" style={{ right: '29%', bottom: '0px' }} />
          <div className="w-4 h-4 bg-white/50 rounded-full absolute animate-bubble-rise-4 shadow-lg" style={{ right: '32%', bottom: '0px' }} />
        </div>

        {/* BIGGER Left Corner Rock */}
        <div className="absolute bottom-16 left-0 w-[500px] h-[250px]">
          <Image
            src="/rocks-bg.png"
            alt="Underwater rocks with seaweed"
            width={500}
            height={250}
            className="object-cover"
            unoptimized
          />
        </div>

        {/* BIGGER Right Corner Rock (Reversed) */}
        <div className="absolute bottom-16 right-0 w-[500px] h-[250px]">
          <Image
            src="/rocks-bg.png"
            alt="Underwater rocks with seaweed"
            width={500}
            height={250}
            className="object-cover scale-x-[-1]"
            unoptimized
          />
        </div>
      </div>
    </main>
  );
}
