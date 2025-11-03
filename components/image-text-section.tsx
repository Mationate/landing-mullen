"use client";

import { motion } from 'framer-motion';

export default function ImageTextSection() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Sección de imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0"
          >
            {/* Columna izquierda: dos imágenes apiladas */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-64 bg-gray-200 rounded-2xl shadow-2xl overflow-hidden"
              >
                <img
                  src="/images/1.jpeg"
                  alt="Corte Clásico"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full h-64 bg-gray-200 rounded-2xl shadow-2xl overflow-hidden"
              >
                <img
                  src="/images/2.jpeg"
                  alt="Corte Clásico"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Columna derecha: imagen grande */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full h-[540px] sm:h-full bg-gray-200 rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="/images/3.jpg"
                alt="Corte Clásico"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Sección de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-color3bs bg-color3bs bg-opacity-10 rounded-full mb-4">
              Experiencia Visual
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Transforma tu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-color3bs to-purple-500">
                {" "}visión creativa
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Descubre técnicas avanzadas que te permitirán crear cortes únicos y memorables. 
              Nuestro enfoque combina tradición y modernidad para llevarte al siguiente nivel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-color3bs rounded-full"></div>
                <span className="text-gray-300">Técnicas profesionales paso a paso</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-color3bs rounded-full"></div>
                <span className="text-gray-300">Herramientas y productos recomendados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-color3bs rounded-full"></div>
                <span className="text-gray-300">Comunidad de barberos profesionales</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="pt-4"
            >
              <button className="bg-gradient-to-r from-color3bs to-color3bsdarker hover:from-color3bsdarker hover:to-color3bs text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explorar Más
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
