# 📱 Guía Rápida: Ver la App en tu Móvil con QR

## 🚀 Inicio Rápido (3 pasos)

### 1️⃣ Instala las dependencias (solo la primera vez):
```bash
npm install
```

### 2️⃣ Inicia el servidor móvil:
```bash
npm run dev:mobile
```

### 3️⃣ Escanea el QR:
- Abre la **cámara** de tu móvil 📸
- Apunta al **QR** que aparece en la terminal
- Toca la notificación que aparece
- ¡Listo! 🎉

---

## 📋 Requisitos

✅ Tu **PC** y **móvil** deben estar en la **misma red WiFi**

✅ El puerto **5173** debe estar disponible

---

## 🎨 Ejemplo de lo que verás:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📱  PUCESE Incentivos - Modo Móvil
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Servidor iniciando...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📲  Escanea este QR con tu móvil:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  [CÓDIGO QR AQUÍ]

  O abre manualmente en tu navegador móvil:
  http://192.168.1.100:5173

  Local:    http://localhost:5173
  Network:  http://192.168.1.100:5173

  ⚠️  Asegúrate de estar conectado a la misma red WiFi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✨ ¡Listo! Abre la cámara de tu móvil y escanea
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔧 Solución de Problemas

### ❌ "No puedo escanear el QR"
**Solución:** Copia manualmente la URL que aparece debajo del QR
- Ejemplo: `http://192.168.1.100:5173`

### ❌ "El QR no funciona"
**Verificar:**
1. ¿Estás en la misma WiFi? 
2. ¿El servidor está corriendo? (debe decir "Servidor iniciando...")
3. ¿Tu firewall está bloqueando el puerto?

**En Windows, permite el acceso:**
```bash
# Ejecuta como administrador si el firewall bloquea
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173
```

### ❌ "Error al instalar dependencias"
```bash
# Limpia e instala de nuevo
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 📲 Instalar como App Nativa

Una vez que abras la app en tu móvil:

### Android (Chrome):
1. Toca el menú (⋮) 
2. Selecciona **"Agregar a pantalla de inicio"**
3. ¡Tendrás un ícono en tu móvil! 🎯

### iPhone (Safari):
1. Toca el botón **Compartir** (⬆️)
2. Selecciona **"Añadir a pantalla de inicio"**
3. ¡Listo! 🎯

---

## 💡 Tips Pro

### Mantener el móvil siempre conectado:
```bash
# El servidor se recargará automáticamente cuando hagas cambios
npm run dev:mobile
```

### Si necesitas compartir con alguien fuera de tu red:
```bash
# Crea un túnel público (no necesita QR)
npm run tunnel
```

### Ver en múltiples dispositivos:
- ✅ Todos pueden escanear el **mismo QR**
- ✅ Se actualizarán automáticamente al hacer cambios

---

## 🎯 Diferencia vs Expo Go

| Característica | Tu App (Web) | Expo Go (Nativo) |
|----------------|--------------|------------------|
| **QR Code** | ✅ Sí | ✅ Sí |
| **Necesita app especial** | ❌ No (solo navegador) | ✅ Sí (Expo Go) |
| **Instalar como PWA** | ✅ Sí | ❌ No |
| **Funciona offline** | ✅ Sí (con PWA) | ✅ Sí |
| **Actualización** | 🚀 Instantánea | ⏱️ Requiere reload |
| **Tamaño** | 📦 Ligero | 📦 Más pesado |

---

## 🆘 Ayuda Adicional

¿Problemas? Revisa `MOBILE_SETUP.md` para opciones alternativas:
- Túneles públicos (ngrok, localtunnel)
- Configuración de firewall
- Solución de problemas de red

---

**¡Disfruta tu app en móvil! 🎉**

