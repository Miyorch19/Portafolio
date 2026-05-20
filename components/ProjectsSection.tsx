const projects = [
  { num: "01", name: "Casa Verde", type: "Bienes Raíces", year: "2024" },
  { num: "02", name: "Studio Bravo", type: "Estudio Creativo", year: "2024" },
  { num: "03", name: "Farmacia Nova", type: "Salud & Bienestar", year: "2024" },
  { num: "04", name: "Moda District", type: "Tienda en Línea", year: "2023" },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 sm:py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">
        <div className="fade-up fade-up-d2">
          {projects.map((project) => (
            <div
              key={project.num}
              className="group py-6 sm:py-8 border-b border-[#F0F0F0] dark:border-[#1E1E1E] first:border-t"
            >
              {/* Mobile: stacked. Desktop: single row */}
              <div className="flex items-baseline gap-3 sm:gap-8">
                <span className="text-[12px] sm:text-[13px] text-muted dark:text-[#666] font-medium w-6 sm:w-8 shrink-0">
                  {project.num}
                </span>
                <h3 className="flex-1 text-2xl sm:text-4xl md:text-5xl font-bold text-ink dark:text-white tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                  {project.name}
                </h3>
              </div>
              {/* Meta row — always below on mobile, hidden type+year inline on md */}
              <div className="flex gap-6 mt-2 sm:mt-3 pl-9 sm:pl-14">
                <span className="text-[13px] sm:text-[15px] text-muted dark:text-[#666] font-medium">
                  {project.type}
                </span>
                <span className="text-[13px] sm:text-[15px] text-muted dark:text-[#666] font-medium">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
