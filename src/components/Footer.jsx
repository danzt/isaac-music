import { motion } from 'framer-motion'
import { FiMusic, FiHeart, FiHeadphones } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400/20 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
              <FiHeadphones className="text-xl text-black" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Isaac Bonalde</span>
              <p className="text-sm text-yellow-400">Productor Musical</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-center md:text-left">
            <span>© 2025 Isaac Bonalde. Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiHeart className="text-red-500" />
            </motion.div>
            <span>y mucha</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiMusic className="text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 