# 🚀 Inicio Rápido: Construir APK para Android

## ⚡ Versión Corta (5 pasos)

### 1️⃣ Instala Android Studio
**Descarga:** https://developer.android.com/studio

Durante la instalación, marca:
- ✅ Android SDK
- ✅ Android SDK Platform
- ✅ Android Virtual Device

### 2️⃣ Construye tu app web
```bash
npm run build
```

### 3️⃣ Agrega Android (solo primera vez)
```bash
npm run add:android
```

### 4️⃣ Sincroniza y abre Android Studio
```bash
npm run build:mobile
npm run android
```

### 5️⃣ Genera el APK
En Android Studio:
1. Ve a **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Espera que compile (3-5 minutos)
3. Clic en **locate** para encontrar tu APK
4. ¡Listo! 🎉

**Tu APK está en:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📱 Instalar en tu Móvil

### Opción A: Por Cable USB
1. Activa "Depuración USB" en tu móvil
2. Conecta el cable
3. Ejecuta:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Opción B: Compartir archivo
1. Envía el archivo `.apk` a tu móvil (WhatsApp, Telegram, etc.)
2. Ábrelo en tu móvil
3. Permite "Instalar desde fuentes desconocidas"
4. ¡Instala! 🎉

---

## 🔄 Actualizar la App

Cada vez que hagas cambios al código:

```bash
# 1. Reconstruye
npm run build

# 2. Sincroniza
npm run build:mobile

# 3. Abre Android Studio
npm run android

# 4. Build → Build APK
```

---

## ⚙️ Configurar Android Studio (Primera vez)

### Configurar Variables de Entorno (Windows):

1. Busca "Variables de entorno" en el menú de Windows
2. Agrega una nueva variable:
   - **Nombre:** `ANDROID_HOME`
   - **Valor:** `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`

3. Edita la variable `Path` y agrega:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`

4. Verifica en una nueva terminal:
```bash
adb --version
```

---

## 🐛 Problemas Comunes

### "Android SDK not found"
**Solución:** Instala Android Studio y configura `ANDROID_HOME`

### "Gradle build failed"
**Solución:**
```bash
cd android
./gradlew clean
cd ..
npm run build:mobile
```

### La app crashea al abrir
**Solución:** Revisa que el build web se haya generado correctamente:
```bash
npm run build
```
Verifica que la carpeta `dist/` tenga archivos

### Error de permisos
Agrega permisos en `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 📦 Generar APK Firmado (para Play Store)

Para subir a Google Play Store necesitas un APK firmado:

```bash
cd android
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Luego en Android Studio:
1. **Build** → **Generate Signed Bundle / APK**
2. Selecciona **APK**
3. Crea o selecciona tu keystore
4. ¡Listo!

---

## 🎯 Checklist Completo

- [ ] Android Studio instalado
- [ ] ANDROID_HOME configurado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Build generado (`npm run build`)
- [ ] Plataforma Android agregada (`npm run add:android`)
- [ ] Proyecto abierto en Android Studio (`npm run android`)
- [ ] APK generado (Build → Build APK)
- [ ] APK instalado en móvil

---

## 🆘 Más Ayuda

Para guía completa, lee: **`GUIA_APP_NATIVA.md`**

Para soporte de Capacitor: https://capacitorjs.com/docs

---

**¡Felicidades! Ya tienes tu primera app móvil nativa! 🎉**

