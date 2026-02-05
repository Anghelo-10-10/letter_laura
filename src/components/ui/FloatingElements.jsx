"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ELEMENTS = ["❤️", "💖", "✨", "🌸", "💘", "🧸", "love"];

export default function FloatingElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Creamos 25 elementos aleatorios
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      emoji: ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)],
      x: Math.random() * 100, // Posición horizontal %
      delay: Math.random() * 15, // Retraso inicial
      duration: 15 + Math.random() * 20, // Duración de la caída (muy lenta)
      size: 10 + Math.random() * 25, // Tamaño variado
      rotation: Math.random() > 0.5 ? 360 : -360, // Rotación hacia un lado u otro
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.emoji === '✨' ? 'text-yellow-200' : 'text-pink-300/60'} drop-shadow-sm font-caveat`}
          style={{ 
            left: `${el.x}%`,
            fontSize: el.size,
            top: '105vh' // Empiezan justo debajo de la pantalla
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "-120vh", // Suben hasta salir por arriba
            opacity: [0, 1, 1, 0], // Aparecen y desaparecen suavemente
            rotate: el.rotation // Giran lentamente mientras suben
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}