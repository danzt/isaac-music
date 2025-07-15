import { motion } from 'framer-motion'
import { FiMusic, FiMic, FiHeadphones, FiAward, FiGlobe, FiUsers } from 'react-icons/fi'

const About = () => {
  const skills = [
    { icon: FiMic, title: "Producción Musical", description: "Creación integral de identidades sonoras únicas" },
    { icon: FiHeadphones, title: "Mezcla & Masterización", description: "Ingeniería de audio con máxima calidad técnica" },
    { icon: FiMusic, title: "Instrumentación", description: "Ejecución personal de todos los instrumentos" },
    { icon: FiAward, title: "Dirección Artística", description: "Control integral del carácter sonoro" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Productor musical e ingeniero de mezcla con más de seis años de experiencia en la industria, 
            creando identidades sonoras desde Venezuela para artistas de todo el mundo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Historia personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Biografía</h3>
            <div className="space-y-4 text-gray-300 text-justify">
              <p>
                Productor musical e ingeniero de mezcla con más de seis años de experiencia en la industria. 
                Resido en Venezuela, donde he desarrollado mi carrera desde mi home studio, un espacio técnico 
                y creativo que me ha permitido consolidar una identidad sonora propia.
              </p>
              <p>
                Mi enfoque combina una comprensión profunda del sonido con una sensibilidad artística refinada 
                y un compromiso riguroso con la calidad en cada etapa del proceso musical.
              </p>
              <p>
                A lo largo de mi trayectoria he trabajado en más de 300 proyectos musicales para más de 20 
                artistas de distintas partes del mundo, abarcando una amplia variedad de géneros y estilos. 
                Ejecuto personalmente todos los instrumentos necesarios en mis producciones, lo que me permite 
                mantener un control integral sobre el carácter sonoro de cada obra.
              </p>
              <p>
                Apasionado por la música y el arte, mi trabajo se distingue por la atención al detalle, 
                el respeto por la visión del artista y una búsqueda constante de evolución técnica y creativa.
              </p>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "6+", label: "Años de Experiencia", icon: FiAward },
              { number: "300+", label: "Proyectos Completados", icon: FiMusic },
              { number: "20+", label: "Artistas Internacionales", icon: FiGlobe },
              { number: "100%", label: "Control Creativo", icon: FiUsers }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all"
              >
                <stat.icon className="text-3xl text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Mis Especialidades</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg border border-yellow-400/20 hover:shadow-2xl hover:border-yellow-400/50 transition-all"
              >
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="text-2xl text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 