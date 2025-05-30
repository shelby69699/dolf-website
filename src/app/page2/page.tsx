import Image from 'next/image'
import Link from 'next/link'

export default function SecondPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Background with gradient similar to main page but with orange tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-amber-500 -z-10" />
      
      {/* Navigation */}
      <nav className="w-full p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/dolf-character.png"
            alt="DOLF Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white font-bold text-xl">$DOLF</span>
        </Link>
        <Link 
          href="/page3" 
          className="text-white font-semibold px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 transition-all"
        >
          View Tokenomics
        </Link>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-12 drop-shadow-lg">Why is $DOLF a success?</h1>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* First paragraph */}
          <div className="bg-amber-600/30 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              $DOLF is the universal sound that flows through the waters, an essence that transcends nature to 
              become the lifeblood of the Cardano Network. It bridges worlds, connecting all aquatic life while 
              pulsing through every transaction in the digital ocean.
            </p>
          </div>

          {/* Second paragraph */}
          <div className="bg-amber-600/30 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              Fish and water, hand in glove—a perfect marriage with the Cardano Network. $DOLF is a viral and 
              audacious fish, the beloved mascot and protagonist of a movement that&apos;s unfolding right in front of 
              you. Thanks to Cardano&apos;s infrastructure, $DOLF is not just a movement but is poised to become the 
              first memecoin to reach billions of people, powered by vision, culture, and an unstoppable idea.
            </p>
          </div>

          {/* Third paragraph */}
          <div className="bg-amber-600/30 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              Unpredictable and mischievous, $DOLF stirs up the corals, leaving behind humor and chaos wherever 
              it swims. But don&apos;t let its playful antics fool you—it carries a single, unwavering mission: to dominate 
              the Cardano Ocean and bring prosperity to its people. Millions of fish already claim its name—in 
              aquariums, rivers, and oceans alike—driving a tidal wave of change and setting a new standard for 
              memecoins.
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <Link 
            href="/" 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
          >
            Back to Home
          </Link>
          <Link 
            href="/page3" 
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all"
          >
            View Tokenomics
          </Link>
        </div>
      </div>

      {/* Rock decorations */}
      <Image
        src="/rocks-bg.png"
        alt="Rock decoration left"
        width={700}
        height={400}
        className="absolute bottom-0 left-0 -ml-24"
        quality={100}
      />
      <Image
        src="/rocks-bg.png"
        alt="Rock decoration right"
        width={700}
        height={400}
        className="absolute bottom-0 right-0 -mr-24 scale-x-[-1]"
        quality={100}
      />
    </main>
  )
} 