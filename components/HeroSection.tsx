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

      <div className="relative z-10 flex flex-col flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-48 pb-8 sm:pb-12 min-h-screen">
        {/* Top left description */}
        <div className="fade-up fade-up-d1 max-w-[480px]">
          <p className="text-[16px] sm:text-[20px] md:text-[26px] text-muted dark:text-[#888] font-medium leading-[1.3] tracking-tight">
            Hola! Soy Jorge, tu desarrollador web de confianza para negocios modernos.
          </p>
        </div>

        {/* Gap between text and title */}
        <div className="h-12 sm:h-20 md:h-32" />

        {/* Bottom giant text */}
        <div className="fade-up fade-up-d3 w-full flex justify-center pb-4 sm:pb-8">
          <h1
            className="font-bold leading-[0.8] tracking-tighter flex items-center justify-center gap-1 sm:gap-3 md:gap-6 w-full whitespace-nowrap"
            style={{ fontSize: "clamp(42px, 14vw, 300px)" }}
          >
            <span className="text-ink dark:text-white uppercase">JORGE</span>
            <span
              className="text-ink dark:text-white font-bold translate-y-[0.12em]"
              style={{ fontSize: "clamp(56px, 18vw, 400px)", lineHeight: "0.5" }}
            >
              *
            </span>
            <span className="text-[#B0B0B0] dark:text-[#555555] uppercase">DEV</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
