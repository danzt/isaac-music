import { motion } from 'framer-motion'
import { FiPlay, FiMusic, FiDownload, FiHeadphones, FiMic } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido del texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">Daniel Zurita</span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">Productor Musical</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ingeniero de mezcla con más de 6 años de experiencia, especializado en crear identidades sonoras únicas desde mi home studio en Venezuela. +300 proyectos, +20 artistas internacionales.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 btn-gold text-black px-8 py-3 rounded-full shadow-lg font-semibold"
              >
                <FiPlay />
                <span>Escuchar mi música</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <FiDownload />
                <span>Descargar Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Imagen del estudio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden border border-yellow-400/20">
              {/* Simulación del estudio */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Setup de estudio central */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3, repeat: Infinity
                    }}
                    className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center backdrop-blur-sm relative"
                  >
                    <FiHeadphones className="text-6xl text-black" />
                    
                    {/* Ondas de audio animadas */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-yellow-400/50 rounded-full"
                    />
                  </motion.div>
                  
                  {/* Elementos del estudio */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute -top-8 -right-8 w-6 h-6 bg-yellow-400/70 rounded-full flex items-center justify-center"
                  >
                    <FiMic className="text-xs text-black" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-8 -left-8 w-6 h-6 bg-yellow-400/70 rounded-full flex items-center justify-center"
                  >
                    <FiMusic className="text-xs text-black" />
                  </motion.div>
                </div>
              </div>
              
              {/* Efectos visuales tipo estudio */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-10 left-10 w-4 h-4 bg-yellow-400/50 rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.8, 0.3, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 right-10 w-6 h-6 bg-yellow-400/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 right-6 w-3 h-3 bg-yellow-400/60 rounded-full"
              />
            </div>

            {/* Ondas sonoras animadas */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-yellow-400/50 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-yellow-400/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 