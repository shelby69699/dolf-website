import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06B6D4] relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/dolf-character.png"
            alt="$DOLF Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-white text-2xl font-bold">$DOLF</span>
        </div>
        <Link 
          href="/learn-more"
          className="bg-[#F84444] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E03434] transition-colors"
        >
          Learn More
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-8 px-4 relative z-10">
        {/* Main Character */}
        <div className="relative w-[300px] h-[300px] mb-8">
          <Image
            src="/dolf-character.png"
            alt="$DOLF Character"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-8 drop-shadow-lg">
          $DOLF - The King of<br />Cardano Ocean
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href="https://x.com/DOLF_CARDANO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/x-logo.svg"
              alt="X Logo"
              width={20}
              height={20}
            />
            Follow on X
          </a>
          <a
            href="#"
            className="bg-[#F84444] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E03434] transition-colors"
          >
            BUY NOW
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* Bubbles */}
        <div className="absolute inset-0">
          <div className="bubble w-4 h-4 bg-white/20 rounded-full absolute" style={{ left: '10%', bottom: '60%' }} />
          <div className="bubble w-6 h-6 bg-white/20 rounded-full absolute" style={{ left: '85%', bottom: '40%' }} />
          <div className="bubble w-5 h-5 bg-white/20 rounded-full absolute" style={{ left: '25%', bottom: '50%' }} />
          <div className="bubble w-4 h-4 bg-white/20 rounded-full absolute" style={{ left: '70%', bottom: '70%' }} />
        </div>

        {/* Seaweed and Rocks */}
        <div className="relative h-32">
          {/* Left Rocks */}
          <div className="absolute bottom-0 left-0">
            <div className="w-48 h-24 bg-gray-400 rounded-tr-[100px]" />
            <div className="absolute bottom-0 left-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="seaweed absolute bottom-0 w-6 h-24 bg-[#22C55E]"
                  style={{ left: `${i * 30}px` }}
                />
              ))}
            </div>
          </div>

          {/* Right Rocks */}
          <div className="absolute bottom-0 right-0">
            <div className="w-48 h-24 bg-gray-400 rounded-tl-[100px]" />
            <div className="absolute bottom-0 right-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="seaweed absolute bottom-0 w-6 h-24 bg-[#22C55E]"
                  style={{ right: `${i * 30}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
