import Hero from '@/components/Hero';
import Tokenomics from '@/components/Tokenomics';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-600 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Tokenomics />
      </div>
    </main>
  );
}
