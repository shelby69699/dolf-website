import Image from 'next/image'
import Link from 'next/link'

export default function Page3() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Background with gradient similar to main page */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-600 -z-10" />
      
      {/* Navigation */}
      <nav className="w-full p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
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
            href="/page2" 
            className="text-white font-semibold px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            Back to Success Story
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 text-center text-white">
        <h1 className="text-5xl font-bold mb-8">$DOLF Tokenomics</h1>
        
        {/* Token Distribution */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Token Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
              <p className="text-2xl font-bold">1,000,000,000 $DOLF</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Initial Price</h3>
              <p className="text-2xl font-bold">TBA</p>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Token Utility</h2>
          <ul className="text-left space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-300">•</span>
              <span>Governance rights in the DOLF ecosystem</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-300">•</span>
              <span>Access to exclusive DOLF community events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-300">•</span>
              <span>Staking rewards and benefits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-300">•</span>
              <span>Trading fee discounts on partner platforms</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="mb-12">
        <Link 
          href="https://www.snek.fun/token/8e8d10d2f1d8f0370f38f7a4aadf2501e8616a43d253a938297a01b2444f4c46" 
          target="_blank"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all"
        >
          BUY NOW
        </Link>
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