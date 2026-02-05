"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "@/components/scene/Background";
import Envelope from "@/components/letter/Envelope";
import LetterPaper from "@/components/letter/LetterPaper";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <Background />
      
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Envelope key="envelope" onOpen={() => setIsOpen(true)} />
        ) : (
          <>
            {/* COMPONENTE DE LA CARTA */}
            <LetterPaper key="letter" onClose={() => setIsOpen(false)} />

            {/* FOTOS FLOTANTES (Decoración extra) */}
            {/* Foto 1: Izquierda */}
            <Polaroid 
                className="absolute top-20 left-10 md:left-1/4 -rotate-12 hidden lg:block"
                delay={0.5}
            />
            {/* Foto 2: Derecha */}
            <Polaroid 
                className="absolute bottom-20 right-10 md:right-1/4 rotate-6 hidden lg:block"
                delay={0.8}
            />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

// Componente pequeño para las fotos (puedes moverlo a su propio archivo luego)
function Polaroid({ className, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: delay, type: "spring" }}
            className={`bg-white p-3 shadow-xl w-48 z-40 ${className}`}
        >
            <div className="bg-gray-200 h-40 w-full mb-3 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400 font-caveat text-xl">Aquí va tu foto</span>
                {<img src="/foto1.jpg" className="object-cover w-full h-full" /> }
            </div>
            <p className="text-center font-caveat text-gray-600 text-xl">Nosotros ❤️</p>
        </motion.div>
    )
}