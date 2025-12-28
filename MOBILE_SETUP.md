# 📱 Guía para Ver la App en Móvil

## 🚀 Opción 1: Red Local (Más Rápido)

### Requisitos:
- Tu PC y móvil en la **misma red WiFi**

### Pasos:

1. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

2. **Encuentra tu IP local:**
   
   **Windows:**
   ```bash
   ipconfig
   ```
   Busca "IPv4 Address" (ejemplo: 192.168.1.100)
   
   **Mac/Linux:**
   ```bash
   ifconfig | grep "inet "
   ```

3. **En tu móvil:**
   - Abre el navegador (Chrome, Safari, etc.)
   - Ve a: `http://TU_IP:5173`
   - Ejemplo: `http://192.168.1.100:5173`

✅ **Listo!** Verás la app funcionando en tu móvil.

---

## 🌐 Opción 2: Túnel Público con ngrok (Sin red local)

### Instalación:

1. **Instala ngrok:**
   ```bash
   npm install -g ngrok
   ```

2. **Inicia tu servidor:**
   ```bash
   npm run dev
   ```

3. **En otra terminal, crea el túnel:**
   ```bash
   ngrok http 5173
   ```

4. **Copia la URL pública** (ejemplo: `https://abc123.ngrok.io`)

5. **Ábrela en tu móvil** desde cualquier lugar!

---

## 🔧 Opción 3: Alternativas a ngrok

### **LocalTunnel:**
```bash
npx localtunnel --port 5173
```

### **Cloudflare Tunnel:**
```bash
npx cloudflared tunnel --url http://localhost:5173
```

---

## 📲 Opción 4: Instalar como PWA (Progressive Web App)

1. Abre la app en el navegador móvil
2. En Chrome: Menu → "Agregar a pantalla de inicio"
3. En Safari (iOS): Compartir → "Añadir a pantalla de inicio"

✅ **La app se instalará como si fuera una app nativa!**

---

## 🐛 Solución de Problemas

### No puedo acceder desde el móvil:
- ✅ Verifica que estés en la misma red WiFi
- ✅ Desactiva temporalmente el firewall de Windows
- ✅ Asegúrate que el puerto 5173 no esté bloqueado

### Error de conexión:
```bash
# Verifica que el servidor esté corriendo
npm run dev
```

### Necesitas HTTPS:
- Usa ngrok (automáticamente proporciona HTTPS)
- O configura certificados SSL en Vite

---

## 🎯 Recomendación

Para desarrollo rápido: **Opción 1 (Red Local)**

Para compartir con otros o probar desde cualquier lugar: **Opción 2 (ngrok)**

Para una experiencia tipo app nativa: **Opción 4 (PWA)**

