'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, TrendingUp, Users, Award, CheckCircle } from 'lucide-react'

const courses = [
  {
    id: 1,
    category: "Aprende todo sobre barbería",
    title: "Fundamentos de Corte",
    description: "Curso de fundamentos de corte para que te inicies en el mundo de la Barbería.",
    features: ["Teoría completa", "Práctica guiada", "Elementos esenciales"],
    icon: <BookOpen className="w-6 h-6" />,
    placeholder: "Imagen del curso 1"
  },
  
]

export default function Zigzag() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-color3bs/20 to-purple-600/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-color3bs/20 to-purple-600/20 backdrop-blur-sm border border-color3bs/30 rounded-full px-6 py-3 mb-6">
            <Play className="w-4 h-4 text-color3bs" />
            <span className="text-sm font-semibold text-color3bs">Programas Formativos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-color3bs to-purple-500">Cursos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Del corte al negocio, de la marca personal a crear tu propio camino profesional.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="space-y-24">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-color3bs to-color3bsdarker rounded-xl">
                    <div className="text-white">{course.icon}</div>
                  </div>
                  <span className="text-color3bs font-semibold text-lg">{course.category}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {course.description}
                </p>
                
                <div className="space-y-4">
                  {course.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-lg leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-color3bs to-color3bsdarker hover:from-color3bsdarker hover:to-color3bs text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
                >
                  <Play className="w-4 h-4" />
                  <span>Ver Curso</span>
                </motion.button>
              </div>

              {/* Image Placeholder */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700 group hover:border-color3bs/50 transition-all duration-300"
                >
                  {/* Course Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-color3bs to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {course.id}
                  </div>
                  
                  {/* Course Image */}
                   <img 
                     src="/images/course1.JPG" 
                     alt={course.title} 
                     className="w-full aspect-video rounded-2xl object-cover shadow-lg"
                   />
                  
                 
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
