# ⚡ INICIO RÁPIDO: Solo Ver el Emulador

## 🎯 Solo 3 pasos para ver tu app en el celular (sin Android Studio)

---

## 📱 PRIMERA VEZ (Configuración inicial)

### Paso 1: Instala Android Studio
- **Descarga:** https://developer.android.com/studio
- **Instala** (incluye emulador)

### Paso 2: Crea un emulador
1. Abre **Android Studio**
2. Ve a: **Tools** → **Device Manager**
3. Clic en **Create Device**
4. Selecciona **Pixel 6**
5. Descarga imagen del sistema (**Android 13**)
6. Clic en **Finish**
7. **Cierra Android Studio** (ya no lo necesitas)

### Paso 3: Configura tu proyecto
```bash
npm run add:android
```

---

## 🚀 USO DIARIO (Solo 2 comandos)

### 1️⃣ Construir APK:
```bash
npm run build:apk
```
⏱️ Tarda ~1-2 minutos

### 2️⃣ Ver en emulador:
```bash
npm run emulator
```
⏱️ Tarda ~30-60 segundos

**¡Listo!** 🎉 Se abre SOLO el celular con tu app.

---

## 🔄 Después de hacer cambios

```bash
# 1. Reconstruir
npm run build:apk

# 2. Ver cambios
npm run emulator
```

---

## 💡 Lo que verás

### Ventana del emulador:
```
┌─────────────────┐
│   📱 Pixel 6    │  ← Solo esto, nada más
│                 │
│   [Tu App]      │
│                 │
│   🏠 ⬅️ ⬜       │
└─────────────────┘
```

**NO verás:**
- ❌ Android Studio
- ❌ Editor de código
- ❌ Logs complicados
- ❌ Nada técnico

**SOLO verás:**
- ✅ El celular
- ✅ Tu app corriendo

---

## 🎮 Usar el Emulador

El emulador funciona como un celular real:
- 👆 **Clic = Tocar**
- 🖱️ **Scroll = Deslizar**
- ⌨️ **Teclas = Tu teclado**

---

## 📱 ¿Prefieres tu móvil real?

```bash
# 1. Activa "Depuración USB" en tu móvil
# 2. Conéctalo por USB
# 3. Ejecuta:
npm run build:apk
npm run install:device
```

---

## 🐛 Problemas

### "No se encontraron emuladores"
→ Crea uno en Android Studio (Device Manager)

### "Android SDK not found"
→ Configura variable `ANDROID_HOME`:
```
C:\Users\TU_USUARIO\AppData\Local\Android\Sdk
```

### El emulador es lento
→ En Device Manager, usa Pixel 4 en vez de Pixel 6

---

## 🎯 Comandos Clave

| Comando | Qué hace |
|---------|----------|
| `npm run build:apk` | Construye APK (hazlo después de cada cambio) |
| `npm run emulator` | Abre emulador con tu app |
| `npm run install:device` | Instala en móvil físico |

---

## ✨ Ventajas

✅ **Rápido** - Solo 30 seg vs 2-3 min  
✅ **Simple** - Solo 2 comandos  
✅ **Ligero** - Usa 2-4GB RAM vs 16GB  
✅ **Claro** - Solo ves tu app  

---

## 📚 Más Info

- **Guía Completa:** `GUIA_EMULADOR.md`
- **Solución de problemas:** `GUIA_EMULADOR.md`
- **Android Studio:** Solo para crear emulador

---

## 🎉 Resumen Ultra Corto

```bash
# Primera vez (solo una vez):
1. Instala Android Studio
2. Crea un emulador (Device Manager)
3. npm run add:android

# Día a día:
npm run build:apk
npm run emulator
```

**¡Solo verás el celular! 📱✨**

