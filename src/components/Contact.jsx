import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiSend } from 'react-icons/fi'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
  }

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "ibonalde@gmail.com" },
    { icon: FiPhone, label: "WhatsApp", value: "+58 424 621 2466" },
    { icon: FiMapPin, label: "Ubicación", value: "Venezuela" }
  ]

  const socialLinks = [
    { icon: FiInstagram, label: "Instagram", href: "https://instagram.com/ibonalde" },
    { icon: FiYoutube, label: "YouTube", href: "https://youtube.com/@ibonalde" },
    { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/ibonalde" },
    { icon: FiTwitter, label: "Twitter", href: "https://twitter.com/ibonalde" }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto musical en mente? Me encantaría colaborar contigo 
            para crear una identidad sonora única que conecte con tu audiencia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de proyecto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white"
                  required
                >
                  <option value="">Selecciona un tipo de proyecto</option>
                  <option value="produccion">Producción Musical</option>
                  <option value="mezcla">Mezcla y Masterización</option>
                  <option value="composicion">Composición e Instrumentación</option>
                  <option value="colaboracion">Colaboración Artística</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-gold text-black py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <FiSend />
                <span>Enviar Mensaje</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
                      <info.icon className="text-black text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Sígueme en redes</h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-colors border border-gray-700 hover:border-yellow-400"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to action adicional */}
            <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-yellow-400/20">
              <h4 className="text-lg font-bold text-white mb-2">¿Necesitas algo urgente?</h4>
              <p className="text-gray-300 mb-4">
                Para proyectos urgentes o consultas específicas, no dudes en contactarme directamente por WhatsApp.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold text-black px-6 py-2 rounded-lg font-semibold"
                onClick={() => window.open('https://wa.me/+584246212466', '_blank')}
              >
                WhatsApp Directo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 