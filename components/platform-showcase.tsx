'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Smartphone, Tablet, Play, Star, Users, BookOpen, Award } from 'lucide-react'

const platformFeatures = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Acceso Web Completo",
    description: "Plataforma optimizada para escritorio con todas las funcionalidades"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Para móviles",
    description: "Completamente adaptado para dispositivos móviles"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Contenido Estructurado",
    description: "Cursos organizados por niveles y especialidades"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Comunidad en línea",
    description: "Comparte tu aprendizaje y conecta con otros barberos"
  }
]

const screenshots = [
  {
    title: "Dashboard Principal",
    description: "Vista general de tu progreso y cursos disponibles",
    image: "/images/dashboard.png",
    features: ["Progreso en tiempo real", "Cursos recomendados"]
  },
  {
    title: "Reproductor de Video",
    description: "Experiencia de aprendizaje inmersiva con videos HD",
    image: "/images/videoplayer.png",
    features: ["Calidad 4K", "Subtítulos", "Velocidad ajustable"]
  },
]

export default function PlatformShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-color3bs/20 to-purple-600/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-color3bs to-purple-500">Plataforma</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre la experiencia de aprendizaje más avanzada en barbería. Accede a contenido exclusivo, 
            técnicas profesionales y herramientas que transformarán tu carrera.
          </p>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-color3bs/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-color3bs to-color3bsdarker rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Screenshots Showcase */}
        <div className="space-y-20">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{screenshot.title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    {screenshot.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {screenshot.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-color3bs to-purple-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Screenshot Mockup */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700"
                >
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-lg px-3 py-1 ml-4">
                      <div className="text-xs text-gray-400">academia.andresmullen.com</div>
                    </div>
                  </div>
                  
                  {/* Screenshots with real images */}
                  {index === 0 ? (
                    /* Dashboard Screenshot */
                    <Image
                      src="/images/dashboard.png"
                      alt={screenshot.title}
                      width={2940}
                      height={1676}
                      className="w-full aspect-video rounded-lg object-cover"
                      quality={100}
                      priority
                    />
                  ) : index === 1 ? (
                    /* Video Player Screenshot */
                    <Image
                      src="/images/videoplayer.png"
                      alt={screenshot.title}
                      width={2940}
                      height={1630}
                      className="w-full aspect-video rounded-lg object-cover"
                      quality={100}
                    />
                  ) : (
                    /* Placeholder for third screenshot */
                    <div className="aspect-video bg-gradient-to-br from-color3bs/20 to-purple-600/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50" />
                      <div className="relative z-10 text-center">
                        <Play className="w-16 h-16 text-white/70 mx-auto mb-4" />
                        <div className="text-white/70 font-medium">{screenshot.title}</div>
                        <div className="text-white/50 text-sm mt-2">Vista previa de la plataforma</div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 left-4 w-20 h-3 bg-white/20 rounded" />
                      <div className="absolute top-8 left-4 w-32 h-2 bg-white/10 rounded" />
                      <div className="absolute bottom-4 right-4 w-24 h-8 bg-color3bs/30 rounded" />
                    </div>
                  )}
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-color3bs to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  ✨ Nuevo
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para explorar la plataforma?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a miles de barberos que ya están transformando su carrera con nuestra plataforma de aprendizaje.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-color3bs to-color3bsdarker hover:from-color3bsdarker hover:to-color3bs text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              🚀 Acceder a la Plataforma
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}