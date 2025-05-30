'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-600 z-0" />

      {/* Bottom Rocks */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-[300px]">
          <Image
            src="/rocks-bg.png"
            alt="Ocean rocks with seaweed"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute top-0 w-full flex justify-between items-center p-6 z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src="/dolf-character.png"
              alt="$DOLF Character"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
          <span className="text-white text-2xl font-bold">$DOLF</span>
        </div>
        <Link 
          href="/page2" 
          className="text-white font-semibold px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Character Section */}
        <div className="mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/dolf-character.png"
              alt="$DOLF Character"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg">
            $DOLF - The King of Cardano Ocean
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://x.com/DOLF_CARDANO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 rounded-full font-bold text-lg transition-all"
            >
              <Image
                src="/x-logo.svg"
                alt="X (Twitter) Logo"
                width={24}
                height={24}
                className="transition-transform group-hover:scale-110"
              />
              <span>Follow on X</span>
            </a>
            <a
              href="https://www.snek.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 