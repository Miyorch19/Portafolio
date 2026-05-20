const projects = [
  { num: "01", name: "Casa Verde", type: "Bienes Raíces", year: "2024" },
  { num: "02", name: "Studio Bravo", type: "Estudio Creativo", year: "2024" },
  { num: "03", name: "Farmacia Nova", type: "Salud & Bienestar", year: "2024" },
  { num: "04", name: "Moda District", type: "Tienda en Línea", year: "2023" },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <div className="fade-up fade-up-d2">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 py-8 border-b border-[#F0F0F0] dark:border-[#1E1E1E] first:border-t"
            >
              <span className="text-[13px] text-muted dark:text-[#666] font-medium w-8 shrink-0">
                {project.num}
              </span>

              <h3 className="flex-1 text-3xl md:text-5xl font-bold text-ink dark:text-white tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                {project.name}
              </h3>

              <div className="flex justify-between md:justify-end gap-12 md:w-48 shrink-0 mt-4 md:mt-0">
                <span className="text-[15px] text-muted dark:text-[#666] font-medium">
                  {project.type}
                </span>
                <span className="text-[15px] text-muted dark:text-[#666] font-medium">
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
