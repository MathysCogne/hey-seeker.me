'use client';

import HeySeeker from "../components/HeySeeker";

export default function MarketPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black text-white py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gradient">HeySeeker Voice Animation</h1>
      <p className="text-lg mb-12 max-w-2xl text-center">
        Enter text below to see HeySeeker speak with synchronized animations and subtitles.
        The AI assistant for Solana Seed Vault will visualize your input in real-time.
      </p>
      
      <HeySeeker />
      
      <div className="mt-16 max-w-2xl text-center text-gray-400">
        <p className="mb-2">
          This demo visualizes voice patterns similar to voice assistants like Siri or OpenAI.
        </p>
        <p>
          Built for the Solana Colosseum Hackathon on Solana Seed Phone.
        </p>
      </div>
    </div>
  );
} 