const plans = [
  {
    name: "Básico",
    price: "$3,000",
    monthly: "+ $350 / mes",
    features: ["Hasta 5 páginas", "Diseño responsivo", "Formulario de contacto", "Hosting incluido"],
  },
  {
    name: "Estándar",
    price: "$5,500",
    monthly: "+ $500 / mes",
    features: ["Hasta 10 páginas", "Diseño a medida", "Blog integrado", "SEO avanzado", "Soporte prioritario"],
  },
  {
    name: "Con citas",
    price: "$8,000",
    monthly: "+ $600 / mes",
    features: ["Todo del Estándar", "Sistema de reservas", "Calendario integrado", "Notificaciones email"],
  },
  {
    name: "Tienda",
    price: "$14,000",
    monthly: "+ $800 / mes",
    features: ["Productos ilimitados", "Pasarela de pagos", "Gestión de inventario", "Panel de pedidos"],
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="py-16 sm:py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">
        {/* 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 fade-up fade-up-d2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group flex flex-col p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 border border-transparent hover:border-[#F0F0F0] dark:hover:border-[#222] bg-[#FAFAFA] dark:bg-[#111]"
            >
              <h3 className="text-[15px] sm:text-[16px] font-bold text-ink dark:text-white mb-6 sm:mb-8 tracking-tight">
                {plan.name}
              </h3>

              <div className="mb-6 sm:mb-8">
                <p className="text-2xl sm:text-3xl font-bold text-ink dark:text-white tracking-tighter leading-none mb-2">
                  {plan.price}
                </p>
                <p className="text-[13px] sm:text-[14px] text-muted dark:text-[#888] font-medium">
                  {plan.monthly}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 sm:gap-3 mt-auto">
                {plan.features.map((f) => (
                  <li key={f} className="text-[12px] sm:text-[13px] text-muted dark:text-[#666] font-medium">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
