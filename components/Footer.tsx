export default function Footer() {
  return (
    <footer id="contacto" className="py-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 text-center fade-up fade-up-d2">
        <h2 
          className="font-bold text-ink dark:text-white tracking-tighter leading-none mb-6"
          style={{ fontSize: "clamp(48px, 12vw, 160px)" }}
        >
          ¿Hablamos?
        </h2>
        <a 
          href="mailto:hola@jorgedev.mx" 
          className="text-xl md:text-3xl font-medium text-muted dark:text-[#888] hover:text-ink dark:hover:text-white transition-colors"
        >
          hola@jorgedev.mx
        </a>
      </div>
    </footer>
  );
}
