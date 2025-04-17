export default function QuoteSection() {
  return (
    <section className="flex justify-center mb-32 px-6 py-32 bg-[#080d10]">
      <div className="max-w-4xl text-center">
        <div className="text-[#68d5e3] mb-6 text-xl">OUR PHILOSOPHY</div>
        <blockquote className="text-3xl font-light leading-relaxed mb-8">
          &ldquo;<span className="text-[#68d5e3]">Hey Seeker!</span> is designed for those who understand 
          there is more than what meets the eye, for those who aren&apos;t afraid 
          to explore the unknown and choose to embrace
          the infinite possibilities of blockchain.&rdquo;
        </blockquote>
        <cite className="text-xl">The Hey Seeker! Team</cite>
      </div>
    </section>
  );
} 