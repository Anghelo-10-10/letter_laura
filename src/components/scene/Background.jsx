"use client";

import { motion } from "framer-motion";
import { Heart, Star, Music, Cloud, Sparkles } from "lucide-react";

export default function Background() {
  // Definimos los elementos que van a flotar
  const elements = [
    { Icon: Heart, color: "text-red-300", top: "10%", left: "10%", delay: 0, duration: 4 },
    { Icon: Star, color: "text-yellow-400", top: "20%", left: "85%", delay: 1, duration: 5 },
    { Icon: Music, color: "text-purple-300", top: "75%", left: "15%", delay: 2, duration: 6 },
    { Icon: Cloud, color: "text-blue-200", top: "15%", left: "45%", delay: 0.5, duration: 8 },
    { Icon: Sparkles, color: "text-pink-400", top: "80%", left: "80%", delay: 3, duration: 4.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-teal-pop">
      {/* Capa de textura de papel suave (opcional) */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'url("/textures/paper-grain.png")' }}></div>

      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.color}`}
          style={{ top: el.top, left: el.left }}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: [0, -20, 0], 
            rotate: [0, 5, -5, 0], 
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: el.delay,
          }}
        >
          {/* AQUÍ ESTABA EL ERROR, ESTA ES LA LÍNEA CORREGIDA: */}
          <el.Icon size={48} fill="currentColor" className="opacity-60" />
        </motion.div>
      ))}
    </div>
  );
}