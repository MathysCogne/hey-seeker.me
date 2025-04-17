import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image 
              src="/logo.webp" 
              alt="Hey Seeker Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="text-2xl font-bold">
            Hey <span className="text-[#68d5e3]">Seeker!</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <Link href="#" className="hover:text-[#68d5e3] transition">About</Link>
          <Link href="#" className="hover:text-[#68d5e3] transition">Features</Link>
          <Link href="#" className="hover:text-[#68d5e3] transition">Solana Phone</Link>
          <Link href="#" className="hover:text-[#68d5e3] transition">Contact Us</Link>
        </div>
      </div>
      
      {/* Social Media Section */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-6">Follow us</h3>
        <div className="flex gap-6 mb-10">
          <Link 
            href="https://x.com/hey_seekr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/40 p-4 rounded-full hover:bg-[#68d5e3]/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link 
            href="https://www.linkedin.com/company/hey-seeker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/40 p-4 rounded-full hover:bg-[#68d5e3]/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="mb-4">Hey Seeker! Team | Coliseum Hackathon 2025</div>
        <div>&copy; 2025 Hey Seeker! All rights reserved.</div>
      </div>
    </footer>
  );
} 