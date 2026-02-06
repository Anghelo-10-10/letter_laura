"use client";

import { motion } from "framer-motion";
import { Rocket, Gamepad2 } from "lucide-react";

export default function FakeHeroSection() {
  // Animación para las estrellas de fondo
  const starVariants = {
    animate: {
      y: [0, -1000],
      opacity: [0, 1, 0],
      transition: {
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 text-center z-20 overflow-hidden bg-gray-900">
      
      {/* --- FONDO DE ESPACIO RETRO --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black"></div>
      
      {/* Estrellas flotantes (Efecto visual) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          variants={starVariants}
          animate="animate"
          initial={{ opacity: 0, y: Math.random() * 500, x: Math.random() * window.innerWidth - window.innerWidth/2 }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        />
      ))}

      {/* --- CONTENIDO DEL "JUEGO" --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-4 border-blue-500/50 p-10 rounded-xl bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.5)]"
      >
        {/* Icono animado */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
            <Rocket size={64} className="text-blue-400 rotate-45" />
        </motion.div>

        {/* Título del Juego Falso */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight font-mono">
          COSMIC CRUSADER
        </h1>
        
        <p className="text-blue-300 mt-4 font-mono text-xl">
          DEV BUILD v0.1.4 - ALPHA STAGE
        </p>

        {/* Puntuación Falsa */}
        <div className="mt-8 flex justify-center gap-8 font-mono text-sm">
            <div className="text-gray-400">HIGH SCORE: <span className="text-yellow-400">999,999</span></div>
            <div className="text-gray-400">CREDITS: <span className="text-yellow-400">02</span></div>
        </div>

        {/* Botón Parpadeante "Press Start" */}
        <motion.div 
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="mt-12"
        >
            <button className="bg-blue-600 text-white px-8 py-3 rounded font-bold font-mono flex items-center gap-2 mx-auto hover:bg-blue-500 transition shadow-lg shadow-blue-500/50">
                <Gamepad2 size={24} />
                PRESS START
            </button>
        </motion.div>
      </motion.div>

      {/* Texto técnico abajo para que parezca más "de desarrollador" */}
      <div className="absolute bottom-4 left-4 text-left font-mono text-xs text-gray-500">
        <p>Rendering Engine: WebGL 2.0</p>
        <p>FPS: 60 | Ping: 24ms</p>
      </div>
    </section>
  );
}