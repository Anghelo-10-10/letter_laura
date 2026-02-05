"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "@/components/scene/Background";
import Envelope from "@/components/letter/Envelope";
import LetterPaper from "@/components/letter/LetterPaper"; // <--- Importante: Importamos la carta

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* 1. El Fondo (que ya funciona) */}
      <Background />
      
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* 2. El Sobre Cerrado */
          <Envelope key="envelope" onOpen={() => setIsOpen(true)} />
        ) : (
          /* 3. LO QUE APARECE AL ABRIR (Aquí estaba el error antes) */
          <>
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-50 flex justify-center items-center w-full"
            >
                {/* La Hoja de Papel */}
                <LetterPaper onClose={() => setIsOpen(false)} />
            </motion.div>

            {/* Las Polaroids Flotantes (Decoración) */}
            <Polaroid 
                className="absolute -top-10 -left-4 md:top-10 md:left-10 -rotate-12 z-50"
                delay={0.5}
                text="Tú y yo"
                imageSrc="/fotos/foto2.jpg"
            />

            {/* FOTO 2: Abajo a la derecha */}
            <Polaroid 
                className="absolute -bottom-10 -right-4 md:bottom-10 md:right-10 rotate-6 z-50"
                delay={0.8}
                text="Cali 2026"
                imageSrc="/fotos/foto3.jpg"
            />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

// Componente pequeño para las fotos (puedes dejarlo aquí o moverlo después)
// Componente Polaroid actualizado para recibir imágenes
function Polaroid({ className, delay, text, imageSrc }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: delay, type: "spring", stiffness: 50 }}
            className={`bg-white p-3 shadow-2xl w-48 z-40 transform hover:scale-110 transition-transform duration-300 ${className}`}
        >
            {/* Contenedor de la imagen */}
            <div className="bg-gray-200 h-40 w-full mb-3 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                {imageSrc ? (
                    // Si hay imagen, la mostramos
                    <img 
                        src={imageSrc} 
                        alt={text} 
                        className="object-cover w-full h-full" 
                    />
                ) : (
                    // Si no, mostramos el gris de antes
                    <span className="text-gray-400 font-caveat text-xl">Sin foto</span>
                )}
            </div>
            <p className="text-center font-caveat text-gray-600 text-xl">{text}</p>
        </motion.div>
    )
}