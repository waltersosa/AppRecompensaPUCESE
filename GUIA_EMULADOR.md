# 📱 Guía: Usar Solo el Emulador (Sin Android Studio)

## 🎯 Ver tu app SOLO en el emulador, sin abrir Android Studio

---

## ⚡ Inicio Super Rápido (2 comandos)

### 1️⃣ Construye el APK (solo primera vez o cuando hagas cambios):
```bash
npm run build:apk
```

### 2️⃣ Abre el emulador con tu app:
```bash
npm run emulator
```

**¡Listo!** 🎉 Se abrirá solo el emulador (el celular) con tu app instalada.

---

## 📋 Requisitos (Solo Primera Vez)

### 1️⃣ Instalar Android Studio
Necesitas instalarlo UNA VEZ para obtener:
- Android SDK
- Emulador
- Herramientas de compilación

**Descarga:** https://developer.android.com/studio

### 2️⃣ Crear un Emulador (Solo Primera Vez)

1. Abre Android Studio
2. Ve a: **Tools** → **Device Manager**
3. Clic en **Create Device**
4. Selecciona **Pixel 6** (o cualquier dispositivo)
5. Descarga una imagen del sistema (recomendado: **Android 13**)
6. Clic en **Finish**
7. **¡Ya puedes cerrar Android Studio!** 

Nunca más lo necesitarás abrir (solo el emulador).

### 3️⃣ Configurar variables de entorno (Windows):

**Variable de sistema:**
- **Nombre:** `ANDROID_HOME`
- **Valor:** `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`

**Agregar al Path:**
- `%ANDROID_HOME%\platform-tools`
- `%ANDROID_HOME%\emulator`
- `%ANDROID_HOME%\tools`

**Verificar:**
```bash
adb --version
emulator -version
```

### 4️⃣ Agregar plataforma Android a tu proyecto:
```bash
npm run add:android
```

---

## 🚀 Flujo de Trabajo Diario

### Primera vez del día:
```bash
# 1. Construir APK
npm run build:apk

# 2. Abrir emulador con la app
npm run emulator
```

### Después de hacer cambios:
```bash
# 1. Reconstruir APK
npm run build:apk

# 2. El emulador actualiza automáticamente
npm run emulator
```

---

## 💻 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run build:apk` | Construye el APK (automático, sin Android Studio) |
| `npm run emulator` | Abre SOLO el emulador con tu app |
| `npm run install:device` | Instala APK en móvil físico conectado |

---

## 🎨 Lo que verás

### Al ejecutar `npm run build:apk`:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📦  Construyendo APK para Android
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Paso 1/3: Construyendo app web...
✓ App web construida

🔄 Paso 2/3: Sincronizando con Android...
✓ Sincronización completada

🔨 Paso 3/3: Construyendo APK...
   (Esto puede tardar 1-2 minutos)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✨ ¡APK construido exitosamente!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  📍 Tu APK está en:
     android/app/build/outputs/apk/debug/app-debug.apk

  🚀 Próximos pasos:
     npm run emulator  → Ver en emulador
```

### Al ejecutar `npm run emulator`:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📱  PUCESE Incentivos - Emulador Android
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 Buscando emuladores disponibles...
✓ Encontrados 1 emulador(es)

📱 Usando emulador: Pixel_6_API_33

🚀 Iniciando emulador...
   (Esto puede tardar 30-60 segundos)

⏳ Esperando que el emulador esté listo...
✓ Emulador listo!

📦 Instalando la app en el emulador...
✓ App instalada correctamente

🚀 Abriendo la app...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✨ ¡Listo! Tu app está corriendo en el emulador
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  El emulador quedará abierto.
  Para cerrarlo, cierra la ventana del emulador.
```

**Se abrirá una ventana con SOLO el celular**, sin el IDE de Android Studio. 📱

---

## 🔧 Solución de Problemas

### "No se encontraron emuladores"
**Solución:**
1. Abre Android Studio
2. Tools → Device Manager
3. Crea un Virtual Device
4. Cierra Android Studio
5. Vuelve a ejecutar `npm run emulator`

### "Android SDK not found"
**Solución:** Configura la variable `ANDROID_HOME`:
```bash
# Windows
ANDROID_HOME=C:\Users\TU_USUARIO\AppData\Local\Android\Sdk
```

### "emulator: command not found"
**Solución:** Agrega al Path:
```
%ANDROID_HOME%\emulator
```

### El emulador es muy lento
**Solución:** En Device Manager, asegúrate de:
- Usar un dispositivo con menos RAM (ej: Pixel 4 en vez de Pixel 6)
- Activar "Hardware - GLES 2.0"
- Asignar más RAM al emulador (4GB recomendado)

### Error al construir APK
**Solución:**
```bash
# Limpia y reconstruye
cd android
./gradlew clean
cd ..
npm run build:apk
```

---

## 📱 Instalar en Móvil Físico

Si prefieres tu móvil real en lugar del emulador:

### 1️⃣ En tu móvil:
- Activa "Modo Desarrollador":
  - Ajustes → Acerca del teléfono
  - Toca 7 veces en "Número de compilación"
- Activa "Depuración USB"
- Conecta por cable USB

### 2️⃣ En tu PC:
```bash
# Construir APK
npm run build:apk

# Instalar en el móvil
npm run install:device
```

---

## 💡 Tips Pro

### Mantener el emulador abierto
El emulador puede quedarse abierto. La próxima vez que ejecutes:
```bash
npm run emulator
```
Detectará que ya está abierto y solo actualizará la app.

### Ver logs en tiempo real
```bash
adb logcat | grep -i "chromium"
```

### Tomar screenshot del emulador
```bash
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png
```

### Grabar video del emulador
```bash
adb shell screenrecord /sdcard/video.mp4
# Presiona Ctrl+C para detener
adb pull /sdcard/video.mp4
```

---

## ✨ Ventajas vs Android Studio

| Característica | Solo Emulador | Android Studio |
|----------------|---------------|----------------|
| **Velocidad** | ⚡ Rápido | 🐌 Lento |
| **Uso de RAM** | 💚 2-4GB | 🔴 8-16GB |
| **Tiempo inicio** | 🚀 30 seg | ⏰ 2-3 min |
| **Complejidad** | ✅ Simple | 😰 Complejo |
| **Solo desarrollo** | ✅ Perfecto | ❌ Overkill |

---

## 🎯 Resumen

**Todo lo que necesitas:**
```bash
# Primera vez
npm run add:android
npm run build:apk

# Día a día
npm run emulator
```

**¡Solo verás el celular, nada más!** 📱✨

---

## 🆘 ¿Necesitas Android Studio?

**Solo para:**
- ✅ Crear el emulador (primera vez)
- ✅ Configuración inicial (primera vez)

**NO lo necesitas para:**
- ❌ Desarrollar día a día
- ❌ Construir APK
- ❌ Ver la app en el emulador
- ❌ Actualizar la app

---

**¡Ahora puedes desarrollar viendo solo tu app en el celular! 🎉**

