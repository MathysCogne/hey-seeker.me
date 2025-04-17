import { PhoneFrameLoader } from './PhoneFrameLoader';

export default function AiSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden" id="ai-assistant">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI-Powered</span> Assistant for Web3 Navigation
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our advanced AI assistant makes interacting with blockchain apps 
              intuitive and effortless. Just ask whatever you need in natural language.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#68d5e3] to-[#42b9a8] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Natural Language Queries</h3>
                  <p className="text-gray-400">
                    Ask complex questions in plain English and get accurate, helpful responses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#68d5e3] to-[#42b9a8] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Secure Seed Vault Integration</h3>
                  <p className="text-gray-400">
                    Seamlessly communicate with your Seed Vault on Solana Phone with enhanced security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#68d5e3] to-[#42b9a8] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                  <p className="text-gray-400">
                    Get personalized suggestions for dApps, NFTs, and DeFi opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="order-1 md:order-2 flex justify-center">
            <PhoneFrameLoader 
              imageUrl="/ai-assistant-screen.webp"
              altText="AI Assistant Interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 