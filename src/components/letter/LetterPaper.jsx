"use client";
import { motion } from "framer-motion";

export default function LetterPaper({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: 5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: 100, rotate: 5 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="relative z-50 w-full max-w-lg mx-auto"
    >
      {/* CINTA ADHESIVA (Washi Tape) decorativa arriba */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#FFD1DC] opacity-90 rotate-2 shadow-sm z-10"></div>

      {/* EL PAPEL */}
      <div className="bg-[#FFFDF0] p-8 md:p-12 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
        
        {/* Líneas de cuaderno (CSS puro) */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
             style={{ backgroundImage: 'linear-gradient(#999 1px, transparent 1px)', backgroundSize: '100% 2rem', marginTop: '4rem' }}>
        </div>

        {/* CONTENIDO REAL */}
        <div className="relative z-10 space-y-6">
            <h1 className="font-dancing text-4xl md:text-5xl text-[#D81B60] mb-8 text-center rotate-1">
                Hola mi niña...
            </h1>
            
            <div className="font-caveat text-2xl text-gray-700 leading-loose space-y-4">
                <p>
                    Si estás leyendo esto, es porque logré hacer que el código funcionara... casi tan difícil como explicarte cuánto te extraño.
                </p>
                <p>
                    Este 14 de febrero no estamos cerca, pero quería construirte un pequeño rincón en internet que sea solo nuestro.
                </p>
                <p>
                    Abre bien los ojos, porque esto no es todo.
                </p>
                <p className="text-right mt-8 font-bold text-[#D81B60] text-3xl">
                    - Tu Developer
                </p>
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full font-caveat text-xl text-gray-600 hover:bg-white hover:text-[#D81B60] transition-colors shadow-sm"
        >
            Guardar en el bolsillo
        </button>
      </div>

    </motion.div>
  );
}