const services = [
  { num: "01", title: "Sitio informativo", desc: "Presencia digital que comunica quién eres y qué ofreces, con claridad." },
  { num: "02", title: "Catálogo digital", desc: "Muestra tu trabajo o productos con una navegación intuitiva y limpia." },
  { num: "03", title: "Tienda en línea", desc: "E-commerce completo con pagos, inventario y panel de administración." },
  { num: "04", title: "Sistema de citas", desc: "Agenda online para negocios de servicios con notificaciones automáticas." },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 fade-up fade-up-d2">
          {services.map((service) => (
            <div key={service.num} className="flex flex-col">
              <span className="text-[13px] text-muted dark:text-[#666] font-medium mb-4">
                {service.num}
              </span>
              <h3 className="text-2xl font-bold text-ink dark:text-white mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[15px] text-muted dark:text-[#888] font-medium leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
