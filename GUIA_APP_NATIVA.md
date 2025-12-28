# 📱 Guía Completa: Construir App Móvil Nativa

Tu aplicación web ahora se puede convertir en una **app nativa real** para Android e iOS usando **Capacitor**.

---

## 🎯 ¿Qué es Capacitor?

Capacitor convierte tu app React en una **app nativa** que puedes:
- ✅ Subir a **Google Play Store** (Android)
- ✅ Subir a **Apple App Store** (iOS)
- ✅ Instalar directamente en dispositivos
- ✅ Usar funciones nativas (cámara, GPS, etc.)

**NO necesitas reescribir el código** - ¡usa el mismo que ya tienes!

---

## 📋 Requisitos Previos

### Para Android (APK):
- ✅ **Android Studio** instalado
- ✅ **JDK 11 o superior**
- ✅ Windows, Mac o Linux

### Para iOS (IPA):
- ✅ **Mac** con **Xcode** instalado
- ✅ Cuenta de desarrollador de Apple ($99/año)
- ❌ NO funciona en Windows

---

## 🚀 Construir App Android (APK)

### 1️⃣ Instalar Android Studio

**Descarga:** https://developer.android.com/studio

**Durante la instalación, asegúrate de incluir:**
- ✅ Android SDK
- ✅ Android SDK Platform
- ✅ Android Virtual Device

### 2️⃣ Configurar Variables de Entorno

Agrega a tus variables de entorno:

```bash
# Windows
ANDROID_HOME = C:\Users\TU_USUARIO\AppData\Local\Android\Sdk
Path += %ANDROID_HOME%\platform-tools
Path += %ANDROID_HOME%\tools
```

**Verifica la instalación:**
```bash
adb --version
```

### 3️⃣ Construir la App

```bash
# 1. Construye la versión web optimizada
npm run build

# 2. Agrega la plataforma Android (solo primera vez)
npm run add:android

# 3. Sincroniza los cambios
npm run build:mobile

# 4. Abre en Android Studio
npm run android
```

### 4️⃣ Generar APK desde Android Studio

1. En Android Studio, ve a: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
2. Espera a que compile (puede tardar varios minutos)
3. Cuando termine, haz clic en **locate** para encontrar tu APK
4. ¡Tu APK está listo! 📦

**Ubicación del APK:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### 5️⃣ Instalar APK en tu Móvil

**Opción A: Cable USB**
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Opción B: Compartir archivo**
- Envía el archivo `.apk` a tu móvil (WhatsApp, email, etc.)
- Abre el archivo en tu móvil
- Permite "instalar desde fuentes desconocidas"
- ¡Instala! 🎉

---

## 🍎 Construir App iOS (IPA)

⚠️ **Solo funciona en Mac**

### 1️⃣ Instalar Xcode

Descarga desde App Store: **Xcode**

### 2️⃣ Construir la App

```bash
# 1. Construye la versión web
npm run build

# 2. Agrega la plataforma iOS (solo primera vez)
npm run add:ios

# 3. Sincroniza
npm run build:mobile

# 4. Abre en Xcode
npm run ios
```

### 3️⃣ Configurar en Xcode

1. Selecciona tu equipo de desarrollo
2. Cambia el Bundle Identifier si es necesario
3. Conecta tu iPhone
4. Presiona ▶️ Run

---

## 🔧 Personalización de la App

### Cambiar Nombre de la App

Edita `capacitor.config.ts`:
```typescript
appName: 'Tu Nombre Aquí'
```

### Cambiar ID de la App

```typescript
appId: 'com.tuempresa.tuapp'
```

### Cambiar Íconos

1. Genera íconos para todas las resoluciones en: https://icon.kitchen/
2. Descarga el paquete de íconos
3. Reemplaza en:
   - `android/app/src/main/res/` (Android)
   - `ios/App/App/Assets.xcassets/` (iOS)

### Splash Screen (Pantalla de Carga)

Edita en `capacitor.config.ts`:
```typescript
plugins: {
  SplashScreen: {
    launchShowDuration: 2000,
    backgroundColor: "#003DA5",
    showSpinner: true,
    spinnerColor: "#FCD34D"
  }
}
```

---

## 📦 Generar APK para Producción (Release)

### 1️⃣ Crear Keystore (solo primera vez)

```bash
cd android
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

### 2️⃣ Configurar firma

Edita `android/app/build.gradle`:

```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file("my-release-key.keystore")
            storePassword "tu-password"
            keyAlias "my-key-alias"
            keyPassword "tu-password"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 3️⃣ Construir APK Release

En Android Studio:
1. **Build → Generate Signed Bundle / APK**
2. Selecciona **APK**
3. Elige tu keystore
4. Ingresa las contraseñas
5. ¡Listo! APK firmado generado

---

## 📲 Subir a Play Store

### Requisitos:
- Cuenta de desarrollador de Google Play ($25 única vez)
- APK firmado (release)
- Descripción, capturas de pantalla, íconos

### Pasos:
1. Ve a: https://play.google.com/console
2. Crea una nueva aplicación
3. Completa la información
4. Sube tu APK firmado
5. Envía para revisión

---

## 🔄 Actualizar la App

Cada vez que hagas cambios:

```bash
# 1. Reconstruye
npm run build

# 2. Sincroniza cambios con las plataformas
npm run build:mobile

# 3. Abre y ejecuta en Android Studio
npm run android
```

---

## 💡 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run build` | Construye la app web |
| `npm run build:mobile` | Construye y sincroniza con móvil |
| `npm run add:android` | Agrega plataforma Android |
| `npm run add:ios` | Agrega plataforma iOS |
| `npm run android` | Abre en Android Studio |
| `npm run ios` | Abre en Xcode |

---

## 🐛 Solución de Problemas

### Error: "Android SDK not found"
**Solución:** Instala Android Studio y configura ANDROID_HOME

### Error: "Gradle build failed"
**Solución:** 
```bash
cd android
./gradlew clean
cd ..
npm run build:mobile
```

### La app no actualiza los cambios
**Solución:**
```bash
npm run build
npx cap sync
```

### Error de permisos en Android
Edita `android/app/src/main/AndroidManifest.xml` y agrega:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---

## 🎯 Resumen Rápido

### Primera vez:
```bash
# 1. Instala Android Studio
# 2. Construye
npm run build
npm run add:android
npm run build:mobile
npm run android

# 3. En Android Studio: Build → Build APK
# 4. Instala el APK en tu móvil
```

### Actualizaciones:
```bash
npm run build
npm run build:mobile
npm run android
# Build → Build APK
```

---

## 🆘 Necesitas Ayuda?

- **Android Studio:** https://developer.android.com/studio/intro
- **Capacitor:** https://capacitorjs.com/docs
- **Firmar APK:** https://developer.android.com/studio/publish/app-signing

---

**¡Ahora tienes una app móvil nativa real! 🎉**

