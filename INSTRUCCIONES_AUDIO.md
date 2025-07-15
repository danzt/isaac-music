# 🎵 Instrucciones para Subir Archivos de Audio

## 📁 **Estructura del Proyecto**

Tu portafolio ahora tiene dos tipos de tracks:

### ✅ **Tracks Destacados (Reproducción Instantánea)**
- 🎵 **Demo - Reggaeton** → `/public/audio/demo-reggaeton.mp3`
- 🎵 **Demo - Trap** → `/public/audio/demo-trap.mp3` 
- 🎵 **Demo - Pop** → `/public/audio/demo-pop.mp3`
- 🎵 **Demo - Worship** → `/public/audio/demo-worship.mp3`

### 🔗 **Tracks Adicionales (Vista Previa en Drive)**
- Demo - Urbano, Rock Balada, etc.

---

## 📋 **Pasos para Subir tus Tracks:**

### **Paso 1: Preparar Archivos**
1. **Descarga 3-4 de tus mejores tracks** desde Google Drive
2. **Renómbralos exactamente así:**
   - `demo-reggaeton.mp3` (ya tienes el ID de este)
   - `demo-trap.mp3`
   - `demo-pop.mp3` 
   - `demo-worship.mp3`

### **Paso 2: Optimizar Archivos**
- **Formato**: MP3
- **Calidad**: 128-320 kbps (recomendado: 192 kbps)
- **Tamaño**: Máximo 10MB por archivo
- **Duración**: 30-60 segundos para demos o tracks completos

### **Paso 3: Subir al Proyecto**
1. Ve a la carpeta `public/audio/` en tu proyecto
2. Arrastra y suelta los archivos MP3
3. La estructura debe quedar así:

```
public/
└── audio/
    ├── demo-reggaeton.mp3
    ├── demo-trap.mp3
    ├── demo-pop.mp3
    └── demo-worship.mp3
```

### **Paso 4: Verificar**
1. Reinicia el servidor (`npm run dev`)
2. Ve a la sección "Mi Música"
3. Los tracks con el badge "▶ Destacado" deberían reproducirse instantáneamente

---

## 🎯 **Ventajas de esta Estrategia:**

### ✅ **Tracks Destacados (Local)**
- ⚡ **Reproducción instantánea**
- 🎛️ **Controles completos** (pause, seek, volumen)
- 📱 **Funciona en móviles**
- 🔒 **No depende de Drive**

### ✅ **Portfolio Completo (Drive)**
- 📂 **Todos tus tracks** disponibles
- 💾 **Sin límites de espacio**
- 📤 **Descargas directas**
- 🔄 **Fácil actualización**

---

## 🔧 **Comandos Útiles:**

```bash
# Reiniciar servidor después de subir archivos
npm run dev

# Verificar que los archivos están en su lugar
ls public/audio/

# Optimizar archivos MP3 (opcional)
# Usa software como Audacity, Adobe Audition, etc.
```

---

## 🚀 **Resultado Final:**

Tu portafolio tendrá:
- **4 tracks destacados** con reproducción profesional
- **Portfolio completo** enlazado a Google Drive
- **Experiencia tipo Spotify/SoundCloud**
- **Carga rápida** y **funcionalidad completa**

---

## ❓ **¿Problemas?**

### **Track no reproduce:**
- Verifica que el archivo esté en `public/audio/`
- Asegúrate que el nombre sea exacto
- Confirma que sea formato MP3

### **Archivo muy grande:**
- Usa un compresor de MP3
- Reduce la calidad a 128-192 kbps
- Considera hacer un preview de 30-60 segundos

### **No se escucha en móviles:**
- Algunos navegadores móviles requieren interacción del usuario
- El primer click debería activar el audio

---

**¡Con esto tendrás un reproductor profesional funcionando al 100%! 🎵✨** 