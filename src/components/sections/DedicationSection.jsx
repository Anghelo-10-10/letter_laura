"use client";

import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

export default function DedicationSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-4">
      
      {/* --- FONDO ANIMADO SUAVE --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-200 to-rose-100 animate-gradient-slow"></div>
      
      {/* --- LLUVIA DE PÉTALOS/CORAZONES (Decoración de Fondo) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 1000, opacity: 0, rotate: 0 }}
            animate={{ 
              y: 1000, 
              opacity: [0, 1, 0], 
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, // Caída lenta (10-20s)
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-pink-400/30 text-2xl"
          >
            {i % 2 === 0 ? "🌸" : "❤️"}
          </motion.div>
        ))}
      </div>

      {/* --- LA TARJETA DE CRISTAL (Dedicatoria) --- */}
      <div className="relative z-10 max-w-3xl w-full">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center"
        >
            {/* Icono de Comillas Decorativo */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-rose-400">
                <Quote size={32} fill="currentColor" />
            </div>

            {/* Título */}
            <h2 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-8 mt-4">
                Para mi Laura
            </h2>

            {/* Texto de la Dedicatoria */}
            <div className="font-caveat text-2xl md:text-3xl text-gray-700 leading-relaxed space-y-6">
                <p>
                    A veces me pregunto qué hice para merecer coincidir contigo. 
                    Entre tantos lugares, tantos tiempos y tantas personas, 
                    el destino decidió que fueras tú.
                </p>
                <p>
                    Esta página no es solo código y fotos; es un pequeño intento 
                    de capturar lo inmenso que siento por ti. Aunque estemos lejos, 
                    cada línea de código lleva un "te extraño" y cada píxel un "te amo".
                </p>
                <p className="font-semibold text-rose-600">
                    Gracias por ser mi paz, mi inspiración y mi futuro.
                </p>
            </div>

            {/* Firma y Decoración Final */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-50"></div>
                
                <p className="font-dancing text-3xl text-gray-500">
                    Con todo mi amor,
                </p>
                
                <div className="relative">
                    {/* Aquí puedes poner tu nombre o firma */}
                    <span className="font-dancing text-4xl text-rose-600 font-bold block mb-2">
                        Anghelo
                    </span>
                    
                    {/* Corazón latiendo */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -right-8 top-0 text-rose-500"
                    >
                        <Heart size={24} fill="currentColor" />
                    </motion.div>
                </div>
            </div>

        </motion.div>
      </div>

    </section>
  );
}