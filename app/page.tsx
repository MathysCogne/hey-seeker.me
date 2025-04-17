import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import SeedVaultSection from "./components/SeedVaultSection";
import DappSection from "./components/DappSection";
import ChatbotSection from "./components/ChatbotSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <HeroSection />
      {/* <AiSection /> */}
      <SeedVaultSection />
      <ChatbotSection />
      <SocialSection />
      <DappSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
