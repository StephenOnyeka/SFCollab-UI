import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 pb-24 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8">
          {/* Review Badge */}
          <div className="inline-flex items-center gap-3 bg-[#F8F9FA] px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
            <span className="text-[12px] font-medium text-[#6B7280] uppercase tracking-wider">1,500+ Reviews</span>
            <div className="flex -space-x-1.5">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src="https://i.pravatar.cc/100?u=1" alt="Reviewer" width={28} height={28} />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                <Image src="https://i.pravatar.cc/100?u=2" alt="Reviewer" width={28} height={28} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight">
            We help ambitious brands grow faster
          </h1>

          {/* Description */}
          <p className="text-base text-gray-600 max-w-xl font-medium">
            Data-driven digital marketing that blends creativity with strategy helping you attract, engage, and convert customers across every channel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#136A66] text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 group transition-all hover:bg-[#0E524F] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
              Book A Free Call
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
            <button className="bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-medium border border-gray-200 hover:border-black transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              See Our Work
            </button>
          </div>

          {/* Feature Pillars */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-2">
            <div className="flex items-center gap-2 text-[15px] font-medium text-[#1A1A1A]/70 uppercase tracking-tight">
              <div className="w-1.5 h-1.5 rounded-full bg-[#136A66]"></div>
              Pay per report
            </div>
            <div className="flex items-center gap-2 text-[15px] font-medium text-[#1A1A1A]/70 uppercase tracking-tight">
              <div className="w-1.5 h-1.5 rounded-full bg-[#136A66]"></div>
              Insurance-ready
            </div>
            <div className="flex items-center gap-2 text-[15px] font-medium text-[#1A1A1A]/70 uppercase tracking-tight">
              <div className="w-1.5 h-1.5 rounded-full bg-[#136A66]"></div>
              Start Free
            </div>
          </div>
        </div>

        {/* Right Column - Image & Overlays */}
        <div className="relative">
          <div className="relative aspect-[16/17] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/hero-image.png" 
              alt="Marketing experts collaborating" 
              fill
              className="object-cover"
              priority
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl flex items-center gap-4 text-black shadow-2xl transition-all transform hover:scale-110 active:scale-95 group">
                <div className="w-11 h-11 bg-[#1A1A1A] rounded-xl flex items-center justify-center shadow-inner group-hover:bg-[#136A66] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M5 3L19 12L5 21V3Z" />
                  </svg>
                </div>
                <span className="text-[17px] font-medium tracking-tight text-[#1A1A1A]">Watch Video</span>
              </button>
            </div>
          </div>

          {/* Floating Template Card */}
          <div className="absolute -bottom-6 -right-4 lg:right-6 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-1 border border-gray-50 min-w-[260px] transform transition-transform hover:-translate-y-2">
            <h4 className="text-[17px] font-medium text-[#1A1A1A]">Customise this template?</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[14px] font-medium text-gray-400">View our process</span>
              <div className="text-gray-400 group-hover:text-black">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
