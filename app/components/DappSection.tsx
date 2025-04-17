export default function DappSection() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 mb-16 sm:mb-24 md:mb-32">
      <div className="text-center max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Hey Seeker! <span className="text-[#68d5e3]">+ dApps</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl px-2">
            Navigate the Solana ecosystem with voice commands and discover a new universe of possibilities
          </p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 mt-8 sm:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="text-left w-full md:w-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Your ecosystem assistant</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-xl">
                Hey Seeker! understands your needs and guides you through the best dApps in the Solana ecosystem
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">NFT Marketplaces</span>
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">DeFi</span>
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">Staking</span>
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">Gaming</span>
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">Social</span>
                <span className="bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">+ More</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <div className="bg-[#0f1419] p-3 sm:p-4 rounded-lg sm:rounded-xl inline-block">
                <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Voice command:</div>
                <div className="text-[#68d5e3] font-mono text-sm sm:text-base md:text-lg">&quot;Hey Seeker, show me the best NFT dApps&quot;</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-[#1a1a1a] transition">
            <div className="text-[#68d5e3] text-2xl sm:text-3xl mb-2 sm:mb-4">01</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Intelligent Discovery</h3>
            <p className="text-sm sm:text-base text-gray-300">Personalized recommendations based on your preferences and activities</p>
          </div>
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-[#1a1a1a] transition">
            <div className="text-[#68d5e3] text-2xl sm:text-3xl mb-2 sm:mb-4">02</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Voice Navigation</h3>
            <p className="text-sm sm:text-base text-gray-300">Explore and interact with dApps through simple voice commands</p>
          </div>
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-[#1a1a1a] transition sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-md md:max-w-none">
            <div className="text-[#68d5e3] text-2xl sm:text-3xl mb-2 sm:mb-4">03</div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Seamless Integration</h3>
            <p className="text-sm sm:text-base text-gray-300">Hey Seeker! automatically connects to dApps with your permission</p>
          </div>
        </div>
      </div>
    </section>
  );
} 