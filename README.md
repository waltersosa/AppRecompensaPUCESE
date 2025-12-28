
# PUCESE Incentivos App

Sistema de incentivos universitarios con moneda virtual para la Pontificia Universidad Católica del Ecuador Sede Esmeraldas (PUCESE).

## Descripción

Aplicación web diseñada para incentivar la participación estudiantil en actividades académicas, culturales y deportivas mediante un sistema de monedas virtuales que pueden ser canjeadas por recompensas como becas, beneficios y descuentos.

## Características Principales

- 💰 Sistema de moneda virtual
- 🎯 Gamificación con niveles y progreso
- 📚 Catálogo de actividades (académicas, culturales, deportivas)
- 🎁 Sistema de recompensas canjeables
- 📊 Historial detallado de transacciones
- 👤 Perfiles de estudiante y administrador
- 📱 Diseño responsive optimizado para móviles

## Instalación

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

## Tecnologías

- React 18 con TypeScript
- Vite 6
- Tailwind CSS 4
- React Router DOM
- Radix UI Components
- Lucide React Icons

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/        # Componentes de la aplicación
│   │   ├── ui/           # Componentes UI reutilizables
│   │   ├── Login.tsx
│   │   ├── Inicio.tsx
│   │   ├── Actividades.tsx
│   │   ├── Monedas.tsx
│   │   ├── Recompensas.tsx
│   │   └── Perfil.tsx
│   ├── data/             # Datos mock
│   └── types/            # Tipos TypeScript
└── styles/               # Estilos globales
```

## Diseño Original

El diseño está basado en el proyecto de Figma: [PUCESE Incentivos App Design](https://www.figma.com/design/tW7uiJWesOBf7znNlN07k8/PUCESE-Incentivos-App-Design)
  