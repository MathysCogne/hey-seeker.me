import Link from "next/link";

export default function SocialSection() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 mb-8 sm:mb-16 bg-[#080f14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Connect with <span className="text-gradient">Hey Seeker!</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto px-2">
            Join the Seekers community and follow our journey into the future of Web3
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
          <Link 
            href="https://x.com/hey_seekr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/60 border border-white/10 rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col items-center hover:bg-[#68d5e3]/10 hover:border-[#68d5e3]/30 transition-all transform hover:scale-105"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#68d5e3]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#68d5e3]">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Twitter/X</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 text-center">For the latest updates</p>
            <div className="flex items-center text-[#68d5e3] text-sm sm:text-base">
              <span className="mr-2">@hey_seekr</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </Link>
          
          <Link 
            href="https://www.linkedin.com/company/hey-seeker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/60 border border-white/10 rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col items-center hover:bg-[#68d5e3]/10 hover:border-[#68d5e3]/30 transition-all transform hover:scale-105"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#68d5e3]/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#68d5e3]">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">LinkedIn</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 text-center">For our team updates</p>
            <div className="flex items-center text-[#68d5e3] text-sm sm:text-base">
              <span className="mr-2">Hey Seeker</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl text-gray-300 animate-float">
            Seek and you shall receive
          </p>
        </div>
      </div>
    </section>
  );
} 