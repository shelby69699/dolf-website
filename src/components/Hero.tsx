'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 overflow-hidden">
      {/* Bottom Rocks */}
      <div className="absolute bottom-0 left-0 -ml-24">
        <div className="relative w-[700px] h-[400px]">
          <Image
            src="/rocks-bg.png"
            alt="Ocean rocks with seaweed"
            fill
            className="object-contain object-bottom"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 -mr-24">
        <div className="relative w-[700px] h-[400px]">
          <Image
            src="/rocks-bg.png"
            alt="Ocean rocks with seaweed"
            fill
            className="object-contain object-bottom scale-x-[-1]"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute top-0 w-full flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 transform hover:scale-105 transition-transform duration-300">
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
          prefetch={true}
        >
          Learn More
        </Link>
      </div>

      {/* Animated Jellyfish Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="jellyfish-container absolute w-full h-full">
          <div className="jellyfish absolute w-16 h-16 opacity-30" style={{ top: '10%', left: '10%' }} />
          <div className="jellyfish absolute w-16 h-16 opacity-30" style={{ top: '30%', left: '80%' }} />
          <div className="jellyfish absolute w-16 h-16 opacity-30" style={{ top: '70%', left: '20%' }} />
          <div className="jellyfish absolute w-16 h-16 opacity-30" style={{ top: '50%', left: '90%' }} />
          <div className="jellyfish absolute w-12 h-12 opacity-20" style={{ top: '25%', left: '45%' }} />
          <div className="jellyfish absolute w-12 h-12 opacity-20" style={{ top: '65%', left: '75%' }} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* Character Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-2 transform hover:scale-105 transition-transform duration-300">
            {/* Character image */}
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
        <div className="text-white text-center max-w-2xl -mt-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            $DOLF - The King of Cardano Ocean
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://x.com/DOLF_CARDANO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 rounded-full font-bold text-xl transition-all duration-200 transform hover:scale-105 group"
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/x-logo.svg"
                  alt="X (Twitter) Logo"
                  width={32}
                  height={32}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-white">Follow on X</span>
            </a>
            <a
              href="https://www.snek.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-xl transition-colors duration-200 transform hover:scale-105"
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