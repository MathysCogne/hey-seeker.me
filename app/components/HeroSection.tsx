import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-[#68d5e3]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-[#42b9a8]/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl">
        <div className="mb-4 sm:mb-8">
          <Image 
            src="/logo.webp" 
            alt="Hey Seeker Logo" 
            width={80} 
            height={80}
            className="rounded-full animate-float"
          />
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center">
          <span className="text-white">Hey</span>
          <span className="text-gradient mt-2 sm:mt-0 sm:ml-4 md:ml-6">Seeker!</span>
        </h1>
        
        <div className="w-full max-w-xl sm:max-w-2xl mb-8 sm:mb-10 px-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-5 leading-tight">AI Assistant for Solana Phone&apos;s Seed Vault</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Interact seamlessly with your Seed Vault through our innovative AI assistant,
            specially designed for the Solana Phone.
          </p>
        </div>
        
        {/* Scroll indicator - Hidden on smaller screens */}
        <div className="bottom-6 sm:bottom-10 flex flex-col items-center animate-pulse">
          <span className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#68d5e3]">
            <path d="M7 13l5 5 5-5"></path>
            <path d="M7 7l5 5 5-5"></path>
          </svg>
        </div>
      </div>
    </section>
  );
} 