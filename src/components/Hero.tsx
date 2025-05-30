'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">$DOLF</span>
          <Link href="/learn-more" className="text-white hover:text-blue-200 transition-colors">
            Learn More
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
          $DOLF - The King of Cardano Ocean
        </h1>

        {/* Social Links */}
        <div className="mb-8">
          <a
            href="https://x.com/DOLF_CARDANO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-blue-200 transition-colors"
          >
            Follow on X NOW
          </a>
        </div>

        {/* Description */}
        <div className="max-w-3xl text-center space-y-4 mb-8">
          <p className="text-lg">
            $DOLF is the ultimate meme coin in the Cardano ecosystem, bringing fun and prosperity to the Cardano Ocean.
          </p>
          <p className="text-lg">
            Fish and water, have always been a part of human culture and civilization. $DOLF is not just a movement but a revolution in the Cardano&apos;s infrastructure.
          </p>
          <p className="text-lg">
            Unpredictable and mischievous, $DOLF stirs up waves of excitement and brings people together. Just like the creatures that share its name—in aquariums, rivers, and oceans around the world—$DOLF aims to create the Cardano Ocean and bring prosperity to all.
          </p>
        </div>

        {/* Main Character Image */}
        <div className="relative w-full max-w-2xl">
          <Image
            src="/dolf-character.png"
            alt="Muscular DOLF character"
            width={800}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Animated Seaweed */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="seaweed absolute bottom-0 left-[10%] w-8 h-24 bg-green-400"></div>
          <div className="seaweed absolute bottom-0 left-[20%] w-8 h-32 bg-green-400"></div>
          <div className="seaweed absolute bottom-0 left-[30%] w-8 h-28 bg-green-400"></div>
          <div className="seaweed absolute bottom-0 left-[70%] w-8 h-24 bg-green-400"></div>
          <div className="seaweed absolute bottom-0 left-[80%] w-8 h-32 bg-green-400"></div>
          <div className="seaweed absolute bottom-0 left-[90%] w-8 h-28 bg-green-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 