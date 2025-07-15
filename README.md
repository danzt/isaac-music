# 🎵 Isaac Bonalde - Portfolio Musical

Portafolio profesional de Isaac Bonalde, productor musical e ingeniero de mezcla con más de 6 años de experiencia en la industria.

## ✨ Características

- **Diseño moderno** inspirado en el estudio musical con paleta negro/dorado
- **Biografía profesional** completa con experiencia real
- **Galería de música** interactiva con reproductores
- **Formulario de contacto** funcional
- **Totalmente responsivo** para todos los dispositivos
- **Animaciones fluidas** con Framer Motion

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎧 Personalizar Tracks de Música

Para añadir tus tracks reales del Google Drive, edita el archivo `src/components/MusicPortfolio.jsx`:

### Paso 1: Obtener enlaces de Google Drive

1. Ve a tu carpeta de Google Drive: https://drive.google.com/drive/u/2/folders/102DSmWD2Nut0H8FLy_TX7PzyqVYWbEZ2
2. Para cada track, haz clic derecho → "Obtener enlace"
3. Cambia la configuración a "Cualquiera con el enlace puede ver"
4. Copia el enlace

### Paso 2: Formato del enlace para reproducción

Convierte el enlace de Google Drive de este formato:
```
https://drive.google.com/file/d/1ABC123DEF456/view?usp=sharing
```

A este formato para reproducir:
```
https://drive.google.com/file/d/1ABC123DEF456/preview
```

### Paso 3: Actualizar el código

En `src/components/MusicPortfolio.jsx`, actualiza el array `tracks`:

```javascript
const tracks = [
  {
    id: 1,
    title: "Nombre Real del Track",
    genre: "Género Real",
    duration: "3:45",
    image: "bg-gradient-to-br from-gray-800 to-black",
    description: "Descripción real del track",
    driveUrl: "https://drive.google.com/file/d/TU_ID_REAL/preview"
  },
  // ... más tracks
]
```

## 🔧 Personalización Adicional

### Información de Contacto
Edita `src/components/Contact.jsx` para actualizar:
- Email personal
- Número de WhatsApp
- Enlaces de redes sociales

### Información Personal
Edita `src/components/About.jsx` para:
- Actualizar biografía
- Modificar estadísticas
- Cambiar especialidades

### Colores del Tema
Los colores están definidos en `src/index.css`:
```css
:root {
  --primary-black: #1a1a1a;
  --accent-gold: #d4af37;
  --warm-gold: #b8941f;
  --light-gold: #f4e6a1;
  --cream-white: #faf8f3;
  --soft-gray: #2a2a2a;
}
```

## 📱 Redes Sociales

Actualiza los enlaces en `src/components/Contact.jsx`:

```javascript
const socialLinks = [
  { icon: FiInstagram, label: "Instagram", href: "TU_INSTAGRAM" },
  { icon: FiYoutube, label: "YouTube", href: "TU_YOUTUBE" },
  { icon: FiLinkedin, label: "LinkedIn", href: "TU_LINKEDIN" },
  { icon: FiTwitter, label: "Twitter", href: "TU_TWITTER" }
]
```

## 🎨 Tecnologías Utilizadas

- **React 19** - Framework de interfaz
- **Vite** - Herramienta de desarrollo
- **TailwindCSS** - Estilos y diseño responsivo
- **Framer Motion** - Animaciones fluidas
- **React Icons** - Iconografía moderna

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── Hero.jsx           # Sección de presentación
│   ├── About.jsx          # Biografía y especialidades
│   ├── MusicPortfolio.jsx # Galería de música
│   ├── Contact.jsx        # Formulario y contacto
│   └── Footer.jsx         # Pie de página
├── index.css              # Estilos globales y tema
└── App.jsx               # Componente principal
```

## 🚀 Deploy

Para subir tu portafolio a internet:

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

---

**¡Tu portafolio está listo para impresionar! 🎵✨**

Para cualquier consulta sobre personalización, revisa los comentarios en el código o contacta al desarrollador.
