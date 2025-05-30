import Image from 'next/image';
import Link from 'next/link';

export default function Tokenomics() {
  return (
    <main className="min-h-screen bg-[#06B6D4] relative p-8">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto mb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            $DOLF Tokenomics
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the economic model behind $DOLF, designed for sustainable growth and community rewards
          </p>
        </div>

        {/* Token Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Token Distribution</h2>
            <div className="space-y-6">
              {[
                { label: 'Presale', value: '40%', color: 'bg-blue-500' },
                { label: 'Liquidity', value: '30%', color: 'bg-green-500' },
                { label: 'Marketing', value: '20%', color: 'bg-purple-500' },
                { label: 'Team', value: '10%', color: 'bg-yellow-500' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-lg">{item.label}</span>
                    <span className="text-white font-bold text-lg">{item.value}</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color}`} 
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'No Team Tokens',
                  description: 'All team tokens are locked for 6 months to ensure long-term commitment'
                },
                {
                  title: 'Liquidity Locked',
                  description: 'Initial liquidity locked for 6 months to provide stability'
                },
                {
                  title: 'Verified Contract',
                  description: 'Smart contract verified on Cardano Explorer for transparency'
                },
                {
                  title: 'Anti-Whale Mechanism',
                  description: 'Transaction limits to prevent market manipulation'
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Now Section */}
        <div className="text-center">
          <a
            href="https://www.snek.fun/token/738080f4674c1484b2ed566629d70ead7065a64872927297775f8eef444f4c46"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F84444] text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-[#E03434] transition-colors shadow-lg transform hover:scale-105"
          >
            Buy $DOLF Now
          </a>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </main>
  );
} 