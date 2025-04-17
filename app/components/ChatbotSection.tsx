import React from 'react';
import Image from 'next/image';

export default function ChatbotSection() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 mb-12 sm:mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Interact <span className="text-[#68d5e3]">naturally</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto px-2">
            Hey Seeker! understands your intentions and executes your crypto commands in natural language
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/10 max-w-3xl mx-auto overflow-hidden shadow-xl shadow-black/40">
          {/* Chat Header */}
          <div className="bg-[#0f1419] p-3 sm:p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden rounded-full">
                <Image 
                  src="/logo.webp" 
                  alt="Hey Seeker Logo" 
                  width={40} 
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Hey Seeker!</h3>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                  Online
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-400 hidden sm:block">Secured by Solana</div>
          </div>

          {/* Chat Messages */}
          <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 max-h-[60vh] overflow-y-auto">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full">
                <Image 
                  src="/logo.webp" 
                  alt="Hey Seeker Logo" 
                  width={32} 
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="bg-[#1a1e24] p-2 sm:p-4 rounded-xl rounded-tl-none max-w-[75%] sm:max-w-xs md:max-w-md text-sm sm:text-base">
                <p>Hello! I&apos;m Hey Seeker, your AI assistant for Solana. How can I help you today?</p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-4 justify-end">
              <div className="bg-[#68d5e3]/10 p-2 sm:p-4 rounded-xl rounded-tr-none max-w-[75%] sm:max-w-xs md:max-w-md text-sm sm:text-base">
                <p>Can you show me my SOL balance and transfer 0.5 SOL to my friend Alex?</p>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">U</span>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full">
                <Image 
                  src="/logo.webp" 
                  alt="Hey Seeker Logo" 
                  width={32} 
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="bg-[#1a1e24] p-2 sm:p-4 rounded-xl rounded-tl-none max-w-[75%] sm:max-w-xs md:max-w-md text-sm sm:text-base">
                <p className="mb-2 sm:mb-3">Sure! Here&apos;s your current balance:</p>
                <div className="bg-black/40 p-2 sm:p-3 rounded-lg mb-2 sm:mb-3">
                  <div className="flex justify-between mb-1 text-xs sm:text-sm">
                    <span>Solana (SOL):</span>
                    <span className="font-bold">12.45 SOL</span>
                  </div>
                  <div className="text-xs text-gray-400">≈ $1,245.00 USD</div>
                </div>
                <p>Would you like to confirm the transfer of 0.5 SOL to Alex? I&apos;ll prepare a Seed Vault transaction for you to approve.</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-white/10 p-2 sm:p-4">
            <div className="bg-[#1a1e24] rounded-full flex items-center p-1 sm:p-1 pl-3 sm:pl-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="bg-transparent border-none outline-none w-full text-white text-sm sm:text-base"
              />
              <button className="bg-[#68d5e3] text-black font-semibold p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 