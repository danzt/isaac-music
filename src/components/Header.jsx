import { motion } from 'framer-motion'
import { FiMusic, FiUser, FiMail, FiMenu, FiX, FiHeadphones } from 'react-icons/fi'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#hero', icon: FiMusic },
    { label: 'Sobre mí', href: '#about', icon: FiUser },
    { label: 'Mi música', href: '#music', icon: FiHeadphones },
    { label: 'Contacto', href: '#contact', icon: FiMail }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <FiMusic className="text-2xl text-yellow-400" />
            <span className="text-xl font-bold text-white">Isaac Bonalde</span>
            <span className="text-sm text-yellow-400">Productor Musical</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-sm" />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-yellow-400/20"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 