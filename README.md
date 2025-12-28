
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

### Desarrollo Normal (PC):

```bash
npm run dev
```

### 📱 Desarrollo Móvil (con QR Code):

```bash
# Inicia el servidor con QR para probar en navegador móvil
npm run dev:mobile
```

**¡Escanea el QR con la cámara de tu móvil y listo!** 📲

### 📦 Construir App Móvil Nativa (APK/IPA):

#### Opción A: Solo Emulador (Recomendado - Sin Android Studio) ⭐

```bash
# 1. Agregar plataforma Android (solo primera vez)
npm run add:android

# 2. Construir APK automáticamente
npm run build:apk

# 3. Ver en emulador (solo el celular, sin IDE)
npm run emulator
```

**📖 Lee `GUIA_EMULADOR.md` para ver solo el celular**

#### Opción B: Con Android Studio

```bash
# 1. Construir y sincronizar
npm run build:mobile

# 2. Abrir en Android Studio
npm run android

# 3. En Android Studio: Build → Build APK
```

**📖 Lee `GUIA_APP_NATIVA.md` para instrucciones completas**

### Compilar para producción web:

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
  