import Image from 'next/image';
import Link from 'next/link';

export default function Yellow() {
  return (
    <main className="min-h-screen bg-yellow-400 relative p-4">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto mb-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors text-base font-bold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            $DOLF Yellow Paper
          </h1>
          <p className="text-lg text-gray-800 max-w-xl mx-auto">
            The comprehensive guide to $DOLF - The King of Cardano Ocean
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Tokenomics */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tokenomics</h2>
            <div className="space-y-4">
              {[
                { label: 'Public', value: '75%', color: 'bg-blue-500' },
                { label: 'Vest', value: '20%', color: 'bg-green-500' },
                { label: 'Marketing', value: '2%', color: 'bg-purple-500' },
                { label: 'Team', value: '3%', color: 'bg-yellow-500' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 text-base">{item.label}</span>
                    <span className="text-gray-900 font-bold text-base">{item.value}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color}`} 
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Community First',
                  description: 'Built by the community, for the community'
                },
                {
                  title: 'Fair Launch',
                  description: (
                    <div>
                      Equal opportunity for everyone to participate
                      <br />
                      <a 
                        href="https://www.snek.fun/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        snek.fun
                      </a>
                    </div>
                  )
                },
                {
                  title: 'Vested Supply',
                  description: '20% Initial Vesting for 1 Month'
                },
                {
                  title: 'Anti-Bot',
                  description: 'Protection against automated trading manipulation'
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <div className="text-gray-700 text-sm">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  phase: 'Phase 1',
                  items: ['Website Launch', 'Community Building', 'Fair Launch', 'Supply Vest']
                },
                {
                  phase: 'Phase 2',
                  items: ['Bond', 'Marketing Push', 'Partnerships', 'Staking Platform']
                },
                {
                  phase: 'Phase 3',
                  items: ['NFT Collection', 'DAO Governance', 'Cross-chain Bridge', 'Ecosystem Expansion']
                }
              ].map((phase, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-xl font-bold text-yellow-600">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Now Section */}
        <div className="text-center">
          <a
            href="https://minswap.org/swap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F84444] text-white px-16 py-6 rounded-full text-2xl font-bold hover:bg-[#E03434] transition-colors shadow-2xl transform hover:scale-105"
          >
            Buy $DOLF Now
          </a>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </main>
  );
} 