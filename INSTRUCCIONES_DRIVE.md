# 🎵 Instrucciones para Integrar Tracks de Google Drive

## 📋 Cómo obtener los IDs de tus archivos de Drive:

### Paso 1: Obtener enlaces de Google Drive
1. Ve a tu carpeta: https://drive.google.com/drive/u/2/folders/102DSmWD2Nut0H8FLy_TX7PxyqVYWbEZ2
2. Para cada archivo de audio (ej: "Demo - Reggaeton.mp3"):
   - Haz clic derecho → "Obtener enlace"
   - Configura: "Cualquier persona con el enlace puede ver"
   - Copia el enlace

### Paso 2: Extraer el ID del enlace
Del enlace:
```
https://drive.google.com/file/d/1BcD3FgH5JkL7MnO9PqR2SuT8VwX4YzA1/view?usp=sharing
```

El ID es: `1BcD3FgH5JkL7MnO9PqR2SuT8VwX4YzA1`

### Paso 3: Actualizar el código
En `src/components/MusicPortfolio.jsx`, busca este array y reemplaza los IDs:

```javascript
const tracks = [
  {
    id: 1,
    title: "Demo - Reggaeton",
    genre: "Reggaeton",
    duration: "3:32",
    image: "bg-gradient-to-br from-yellow-800 to-black",
    description: "Reggaeton moderno con elementos urbanos y producción contemporánea",
    driveId: "TU_ID_REAL_AQUI", // ← Reemplaza esto
    year: "2023"
  },
  // ... resto de tracks
]
```

## 📝 Lista de tus archivos de Drive para mapear:

Basado en tu Drive, estos son los archivos que puedes usar:

1. **Demo - Reggaeton.mp3** (7.1 MB, Oct 2023)
2. **Demo - Trap.mp3** (2.6 MB, Apr 2024)
3. **Demo - Pop 1.mp3** (2.3 MB, Sep 2023)
4. **Demo - Urbano 1.mp3** (2.3 MB, Dec 2022)
5. **Demo - Rock Balada 2.mp3** (2.3 MB, Dec 2022)
6. **Demo - Worship.mp3** (2.5 MB, Sep 2023)
7. **Demo - Bachata 1.mp3** (2.3 MB, Sep 2023)
8. **Mix electro - 1.mp3** (129.6 MB, Oct 2024)
9. **Demo - Regional Mexicano.mp3** (2.3 MB, Oct 2024)

## 🎯 Ejemplo de reemplazo:

Si el ID de "Demo - Reggaeton.mp3" es `1ABC123DEF456`, entonces:

```javascript
{
  id: 1,
  title: "Demo - Reggaeton",
  genre: "Reggaeton",
  duration: "3:32",
  image: "bg-gradient-to-br from-yellow-800 to-black",
  description: "Reggaeton moderno con elementos urbanos y producción contemporánea",
  driveId: "1ABC123DEF456", // ← ID real
  year: "2023"
}
```

## ✅ Resultado:
- **Botón Play**: Abre Google Drive en nueva ventana para reproducir
- **Botón Descargar**: Descarga directa del archivo
- **Experiencia profesional**: Los visitantes pueden escuchar tu música fácilmente 