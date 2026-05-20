# Jorge Dev — Portafolio

Portafolio personal de desarrollo web. Diseño minimalista y elegante, enfocado en mostrar proyectos, servicios y precios de forma clara y profesional.

## Stack tecnológico

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Fuente:** Montserrat (Google Fonts)
- **Package manager:** pnpm

## Características

- Diseño minimalista inspirado en Linear.app
- Modo claro / oscuro con persistencia en `localStorage`
- Hero con degradado radial sutil
- Sección de proyectos seleccionados con animación en hover
- Grid de servicios limpio sin elementos decorativos
- Tarjetas de precios con mucho espacio en blanco
- Footer con llamada a la acción
- Animaciones suaves de entrada (`fade-up`)
- Totalmente responsivo

## Instalación y desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del proyecto

```
portfolio/
├── app/
│   ├── globals.css       # Estilos globales y animaciones
│   ├── layout.tsx        # Layout raíz con fuente y ThemeProvider
│   └── page.tsx          # Página principal
├── components/
│   ├── ThemeProvider.tsx # Contexto para modo claro/oscuro
│   ├── Navbar.tsx        # Navbar tipo píldora flotante
│   ├── HeroSection.tsx   # Hero con degradado y tipografía masiva
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── PricingSection.tsx
│   └── Footer.tsx
└── public/
```

## Despliegue

La forma más sencilla de desplegar este proyecto es usando [Vercel](https://vercel.com). Solo conecta tu repositorio y Vercel detectará automáticamente que es un proyecto de Next.js.

## Contacto

**Jorge Dev** — [hola@jorgedev.mx](mailto:hola@jorgedev.mx)
