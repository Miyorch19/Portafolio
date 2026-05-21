"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{
        background: "radial-gradient(circle at 50% -20%, rgba(253, 224, 71, 0.35) 0%, #FFFFFF 70%)",
      }}
      aria-label="Presentación"
    >
      {/* Dark mode overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% -20%, rgba(253, 224, 71, 0.1) 0%, #0A0A0A 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 w-full px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-48 pb-2 sm:pb-4 min-h-screen">
        
        {/* Centered wrapper that tightly hugs the massive text width */}
        {/* On mobile: perfectly centered vertically. On desktop: pushed to the bottom */}
        <div className="flex flex-col w-full max-w-max mx-auto flex-1 justify-center md:justify-end">
          
          {/* Top left description - Centered on mobile, aligned left on desktop */}
          <div className="fade-up fade-up-d1 self-center md:self-start ml-0 md:ml-2 text-center md:text-left">
            <p className="text-[15px] sm:text-[20px] md:text-[26px] text-ink dark:text-[#E0E0E0] md:text-muted md:dark:text-[#888] font-medium leading-[1.3] tracking-tight">
              Hola! Soy Jorge, tu desarrollador web <br className="hidden md:block" />
              de confianza para negocios modernos.
            </p>
          </div>

          {/* Reduced gap between text and title */}
          <div className="h-6 sm:h-8 md:h-12" />

          {/* Bottom giant text - Horizontal everywhere, but sizes change at md breakpoint */}
          <div className="fade-up fade-up-d3 w-full flex justify-center pb-0 sm:pb-2">
            <h1
              className="font-bold leading-[0.8] tracking-tighter flex items-center justify-center gap-1 sm:gap-3 md:gap-6 w-full whitespace-nowrap"
            >
              <span className="text-ink dark:text-white uppercase tracking-tighter text-[clamp(34px,12.5vw,100px)] md:text-[clamp(42px,15vw,350px)]">JORGE</span>
              <span
                className="text-ink dark:text-white font-bold translate-y-[0.12em] leading-[0.5] text-[clamp(48px,16.5vw,120px)] md:text-[clamp(56px,19vw,450px)]"
              >
                *
              </span>
              <span className="text-[#B0B0B0] dark:text-[#555555] uppercase tracking-tighter text-[clamp(34px,12.5vw,100px)] md:text-[clamp(42px,15vw,350px)]">DEV</span>
            </h1>
          </div>
          
        </div>
      </div>
    </section>
  );
}
