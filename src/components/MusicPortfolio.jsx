import { motion } from 'framer-motion'
import { FiPlay, FiPause, FiDownload, FiSkipForward, FiSkipBack, FiVolume2, FiVolumeX, FiExternalLink } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

const MusicPortfolio = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  // Tracks destacados con archivos locales para reproducción
  const tracks = [
    {
      id: 1,
      title: "Demo - Reggaeton",
      genre: "Reggaeton",
      duration: "3:32",
      image: "bg-gradient-to-br from-yellow-800 to-black",
      description: "Reggaeton moderno con elementos urbanos y producción contemporánea",
      audioFile: "/audio/demo-reggaeton.mp3", // Archivo local
      driveId: "1oL-kIwgBhwl_LsNVKzhy-L9PoNPeoUiE", // Para descarga
      year: "2023",
      featured: true
    },
    {
      id: 2,
      title: "Demo - Trap",
      genre: "Trap",
      duration: "4:01",
      image: "bg-gradient-to-br from-gray-800 to-black",
      description: "Producción de trap con sonidos pesados y ambiente underground",
      audioFile: "/audio/demo-trap.mp3", // Archivo local cuando lo subas
      driveId: "1example_trap", // Para descarga
      year: "2024",
      featured: true
    },
    {
      id: 3,
      title: "Demo - Pop Ballad",
      genre: "Pop",
      duration: "3:45",
      image: "bg-gradient-to-br from-gray-700 to-yellow-900",
      description: "Balada pop con arreglos orquestales y producción emocional",
      audioFile: "/audio/demo-pop.mp3", // Archivo local cuando lo subas
      driveId: "1example_pop", // Para descarga
      year: "2024",
      featured: true
    },
    {
      id: 4,
      title: "Demo - Worship",
      genre: "Worship",
      duration: "4:25",
      image: "bg-gradient-to-br from-gray-900 to-yellow-900",
      description: "Música cristiana contemporánea con arreglos emotivos",
      audioFile: "/audio/demo-worship.mp3", // Archivo local cuando lo subas
      driveId: "1example_worship", // Para descarga
      year: "2023",
      featured: true
    },
    // Tracks adicionales solo para mostrar (sin reproducción local)
    {
      id: 5,
      title: "Demo - Urbano",
      genre: "Urbano",
      duration: "3:18",
      image: "bg-gradient-to-br from-yellow-900 to-black",
      description: "Sonidos urbanos contemporáneos con influencias latinas",
      driveId: "1example_urbano",
      year: "2022",
      featured: false
    },
    {
      id: 6,
      title: "Demo - Rock Balada",
      genre: "Rock",
      duration: "4:12",
      image: "bg-gradient-to-br from-black to-gray-800",
      description: "Rock alternativo con guitarras expresivas y producción poderosa",
      driveId: "1example_rock",
      year: "2022",
      featured: false
    }
  ]

  // Función para reproducir/pausar
  const handlePlayPause = (track) => {
    if (!track.featured || !track.audioFile) {
      // Si no es un track destacado, abrir en Drive
      const driveUrl = `https://drive.google.com/file/d/${track.driveId}/preview`
      window.open(driveUrl, '_blank', 'width=800,height=600')
      return
    }

    if (currentPlaying === track.id && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else if (currentPlaying === track.id && !isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      setCurrentPlaying(track.id)
      audioRef.current.src = track.audioFile
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  // Control de tiempo del audio
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentPlaying])

  // Formatear tiempo
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Buscar en la canción
  const handleSeek = (e) => {
    const progressBar = e.currentTarget
    const clickX = e.nativeEvent.offsetX
    const width = progressBar.offsetWidth
    const newTime = (clickX / width) * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  // Control de volumen
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  const currentTrack = tracks.find(track => track.id === currentPlaying)

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Mi Música
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Una selección de mis trabajos más recientes que demuestran la diversidad 
            y calidad de mi producción musical a través de diferentes géneros.
          </p>
          
          {/* Información sobre los tipos de tracks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center space-x-6 text-sm text-gray-400 mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Reproducción instantánea</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>Vista previa en Drive</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Reproductor Global */}
        {currentPlaying && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-yellow-400/20 p-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4">
                {/* Info del track actual */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <FiVolume2 className="text-black" />
                  </div>
                </div>
                
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-semibold truncate">{currentTrack?.title}</h4>
                  <p className="text-gray-400 text-sm">{currentTrack?.genre}</p>
                </div>

                {/* Controles */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlayPause(currentTrack)}
                    className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-300 transition-colors"
                  >
                    {isPlaying ? <FiPause /> : <FiPlay className="ml-0.5" />}
                  </button>

                  {/* Tiempo y barra de progreso */}
                  <div className="flex items-center space-x-2 min-w-0 flex-grow max-w-md">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatTime(currentTime)}
                    </span>
                    
                    <div 
                      className="flex-grow h-2 bg-gray-700 rounded-full cursor-pointer relative"
                      onClick={handleSeek}
                    >
                      <div 
                        className="h-full bg-yellow-400 rounded-full relative"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                    
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatTime(duration)}
                    </span>
                  </div>

                  {/* Control de volumen */}
                  <div className="flex items-center space-x-2">
                    <button onClick={toggleMute} className="text-gray-400 hover:text-yellow-400">
                      {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-700 rounded-lg appearance-none slider"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid de tracks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border ${
                currentPlaying === track.id 
                  ? 'border-yellow-400 shadow-yellow-400/20' 
                  : track.featured 
                    ? 'border-yellow-400/20 hover:border-yellow-400/50'
                    : 'border-gray-600/20 hover:border-gray-500/50'
              }`}
            >
              {/* Imagen del track */}
              <div className={`relative h-48 ${track.image} flex items-center justify-center`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePlayPause(track)}
                  className={`w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors border ${
                    track.featured 
                      ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 border-yellow-400/50'
                      : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 border-gray-500/50'
                  }`}
                >
                  {currentPlaying === track.id && isPlaying ? (
                    <FiPause className="text-2xl" />
                  ) : (
                    <FiPlay className="text-2xl ml-1" />
                  )}
                </motion.button>
                
                {/* Badge del año y tipo */}
                <div className="absolute top-4 right-4 flex flex-col space-y-1">
                  <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-yellow-400">
                    {track.year}
                  </div>
                  {track.featured && (
                    <div className="bg-yellow-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-yellow-400 border border-yellow-400/50">
                      ▶ Destacado
                    </div>
                  )}
                </div>
                
                {/* Indicador de audio cuando está reproduciendo */}
                {currentPlaying === track.id && isPlaying && (
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <motion.div
                        key={bar}
                        animate={{ height: [10, 20, 10] }}
                        transition={{ 
                          duration: 0.5, 
                          repeat: Infinity, 
                          delay: bar * 0.1 
                        }}
                        className="w-1 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Información del track */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{track.title}</h3>
                  <span className="text-sm text-gray-400">{track.duration}</span>
                </div>
                
                <p className={`font-medium text-sm mb-3 ${track.featured ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {track.genre}
                </p>
                
                <p className="text-gray-300 text-sm mb-4">
                  {track.description}
                </p>

                {/* Acciones */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const downloadUrl = `https://drive.google.com/uc?export=download&id=${track.driveId}`
                      window.open(downloadUrl, '_blank')
                    }}
                    className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <FiDownload className="text-sm" />
                    <span className="text-sm">Descargar</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePlayPause(track)}
                    className={`flex items-center space-x-1 transition-colors ${
                      track.featured 
                        ? 'text-gray-400 hover:text-yellow-400' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {currentPlaying === track.id && isPlaying ? <FiPause className="text-sm" /> : 
                     track.featured ? <FiPlay className="text-sm" /> : <FiExternalLink className="text-sm" />}
                    <span className="text-sm">
                      {track.featured 
                        ? (currentPlaying === track.id && isPlaying ? 'Pausar' : 'Reproducir')
                        : 'Vista Previa'
                      }
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold text-black px-8 py-3 rounded-full shadow-lg font-semibold mr-4"
            onClick={() => window.open('https://drive.google.com/drive/u/2/folders/102DSmWD2Nut0H8FLy_TX7PzyqVYWbEZ2', '_blank')}
          >
            Ver Portfolio Completo en Drive
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Demo Personalizado
          </motion.button>
        </motion.div>

        {/* Audio element (hidden) */}
        <audio
          ref={audioRef}
          onError={(e) => {
            console.error('Error loading audio:', e)
            setIsPlaying(false)
            setCurrentPlaying(null)
          }}
        />
      </div>
    </section>
  )
}

export default MusicPortfolio 