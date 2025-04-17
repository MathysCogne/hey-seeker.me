import Image from "next/image";

export default function SeedVaultSection() {
  return (
    <section className="px-6 py-20 mb-16 bg-[#080d10]">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <div className="lg:w-1/2">
          <div className="flex flex-col mb-6">
            <h2 className="text-5xl font-bold mb-2">Hey Seeker! + Seed Vault</h2>
            <span className="text-3xl font-bold text-[#68d5e3]">The perfect integration</span>
          </div>
          <p className="text-gray-300 mb-8">
            Our AI assistant seamlessly integrates with the Solana Phone&apos;s Seed Vault
            to provide a secure and smooth transaction experience.
          </p>
          <div className="space-y-8 mt-12">
            <div>
              <div className="text-gray-400 text-sm mb-1">SECURITY</div>
              <div className="text-xl">Secure access through biometric authentication</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">SIMPLICITY</div>
              <div className="text-xl">Transactions via voice command with tactile confirmation</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">EXCLUSIVITY</div>
              <div className="text-xl">Specifically designed for the Solana ecosystem</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#68d5e3]/20 to-[#42b9a8]/20 blur-lg rounded-full"></div>
            <Image 
              src="/seeker-device.png" 
              alt="Solana Seeker Device" 
              width={500} 
              height={600}
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 