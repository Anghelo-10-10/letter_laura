"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function Envelope({ onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer z-10 group"
      initial={{ scale: 0, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CUERPO DEL SOBRE */}
      <div className="w-80 h-52 sm:w-96 sm:h-64 bg-gradient-to-b from-[#FF9EAA] to-[#FF8FA3] rounded-b-xl shadow-2xl relative overflow-hidden border-2 border-white/20">
        
        {/* Decoración Borde Aéreo (Abajo) */}
        <div className="absolute bottom-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#ff6b6b,#ff6b6b_10px,#fff_10px,#fff_20px,#54a0ff_20px,#54a0ff_30px,#fff_30px,#fff_40px)] opacity-60"></div>

        {/* TEXTO: Lo he bajado (bottom-8) para que el corazón de arriba no lo tape */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white z-10">
            <h2 className="font-dancing text-5xl drop-shadow-md tracking-wider">Para Laura</h2>
            <p className="font-caveat text-xl opacity-90 mt-1">(Tócame para abrir)</p>
        </div>
      </div>

      {/* SOLAPA SUPERIOR (Triángulo) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 origin-top z-20"
        style={{ 
          clipPath: "polygon(0 0, 100% 0, 50% 100%)", 
          backgroundColor: '#FF7089', // Color base
        }} 
        animate={{ 
            rotateX: isHovered ? 180 : 0, 
            zIndex: isHovered ? 0 : 20,
            filter: isHovered ? 'brightness(0.9)' : 'brightness(1)' // Efecto de sombra al abrirse
        }}
        transition={{ duration: 0.5, type: "spring" }}
      >
          {/* Sombra interna para dar volumen al triángulo */}
          <div className="w-full h-full bg-gradient-to-b from-black/5 to-transparent"></div>
      </motion.div>

      {/* CORAZÓN (SELLO) */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2 z-30"
        animate={{ 
            opacity: isHovered ? 0 : 1, // Desaparece al abrir
            scale: isHovered ? 0 : 1 
        }}
      >
        <div className="bg-[#D81B60] p-3 rounded-full shadow-lg border-2 border-white/40">
            <Heart size={24} className="text-white fill-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}