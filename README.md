# El Portal del Inversor – Gobierno de Posadas

Sitio web institucional de una sola página (landing page) desarrollado con React + Vite + TailwindCSS.

## Características

- ✅ Diseño minimalista orientado a real estate/inversión inmobiliaria
- ✅ 100% responsive y optimizado para mobile
- ✅ Navbar sticky con efecto blur y transición al hacer scroll
- ✅ Scroll suave entre secciones
- ✅ 5 módulos de contenido: Tecnología, Turismo, Inversiones, Universidades, Otros Sectores
- ✅ Componentes modulares y reutilizables
- ✅ Archivo `data.js` para fácil edición de contenidos

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build para producción

```bash
npm run build
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx      # Barra de navegación sticky
│   ├── Hero.jsx        # Sección hero con imagen de fondo
│   ├── Section.jsx     # Componente reutilizable para módulos
│   └── Footer.jsx      # Pie de página
├── data.js             # Contenidos y rutas de imágenes
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos base con TailwindCSS
```

## Personalización

Edita el archivo `src/data.js` para modificar:
- Textos del sitio
- Rutas de imágenes
- Contenidos de las secciones

## Tecnologías

- React 18
- Vite 5
- TailwindCSS 3
- JavaScript (ES6+)

