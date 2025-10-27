"use client";

import { Check, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const monthlyFeatures = [
  'Aprende barbería paso a paso con acceso exclusivo a formación profesional',
  'Contenido progresivo: Un nuevo módulo cada mes',
  'Método estructurado: Desde fundamentos hasta técnicas avanzadas',
  'Material exclusivo: Vídeos, teoría y comunidad privada',
];

const yearlyFeatures = [
  'La formación más completa en barbería, de principiante a experto',
  'Acceso total inmediato: Todo el contenido desbloqueado desde el primer día',
  'Aprendizaje estructurado: Domina cada técnica a tu ritmo',
  'Material exclusivo: Vídeos detallados, teoría avanzada y comunidad privada',
  'Pago único: Sin suscripciones, paga una vez y accede para siempre',
  'Corrección de los trabajos',
  'Reuniones mensuales por ZOOM'
];

export default function NewPricing() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center pb-8 md:pb-12"
        >
          <div className="inline-flex text-sm font-semibold py-1 px-3 text-color3bs bg-color3bs bg-opacity-10 rounded-full mb-3">
            Plan de Formación
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color3bs to-purple-500">
              ÚNETE AHORA
            </span>
          </h2>
        </motion.div>

        {/* Pricing Card - Single Plan */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-purple-900 via-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-color3bs group transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-color3bs to-purple-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                <Star className="w-5 h-5" />
                <span>PLAN EXCLUSIVO</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center pt-4">
              {/* Left: Icon and Title */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-color3bs to-color3bsdarker rounded-full mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">SUSCRIPCIÓN ACADEMIA</h3>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-color3bs to-purple-500 mb-1">
                  $30 USD
                </div>
                <div className="text-lg text-gray-300 font-medium">AL MES</div>
              </div>
              
              {/* Center: Features */}
              <div className="lg:col-span-1">
                <div className="space-y-3">
                  {monthlyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Right: CTA */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://academia.andresmullen.com', '_blank')}
                  className="w-full bg-gradient-to-r from-color3bs to-color3bsdarker hover:from-color3bsdarker hover:to-color3bs text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-base mb-4 cursor-pointer"
                >
                  🚀 Empezar Ahora
                </motion.button>
                <p className="text-xs text-gray-400 font-medium">💥 Transforma tu carrera en barbería hoy mismo 💥</p>
              </div>
            </div>
          </motion.div>
        </div>
        
      
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-color3bs rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
    </section>
  );
}