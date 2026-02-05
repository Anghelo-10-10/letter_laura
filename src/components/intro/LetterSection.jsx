"use client";
import { motion } from "framer-motion";

export default function LetterSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative z-20 overflow-hidden">
      
      {/* 1. LA CARTA CENTRAL */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-30 max-w-2xl w-full bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/60 text-center mx-auto"
      >
        {/* Decoración: Cinta adhesiva arriba */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/60 rotate-1 shadow-sm rounded-sm"></div>

        <h3 className="font-dancing text-5xl md:text-6xl text-[#D81B60] mb-6 drop-shadow-sm">
          Nuestra Historia...
        </h3>

        <div className="font-caveat text-xl md:text-2xl text-gray-700 space-y-4 leading-relaxed">
          <p>
            Hola mi amor. Quería crear este espacio para guardar todo lo que somos, porque una carta de papel se puede perder, pero esto quedará aquí para siempre.
          </p>
          <p>
            Desde que nos conocimos, mi mundo cambió. Aunque estemos lejos (tú en Cali, yo en Ecuador), siento que estamos construyendo algo increíble.
          </p>
          <p>
            Aquí he recopilado nuestros mejores momentos, nuestra música y todo lo que sueño contigo.
          </p>
          <p className="font-bold text-pink-600 text-3xl mt-4 inline-block transform -rotate-2">
            Bienvenida a tu regalo. ❤️
          </p>
        </div>
      </motion.div>

      {/* 2. LAS POLAROIDS FLOTANTES (Vuelven a estar aquí) */}
      
      {/* Arriba Izquierda */}
      <Polaroid 
        className="hidden md:block absolute top-20 left-10 lg:left-20 -rotate-6" 
        src="/fotos/foto5.jpg" 
        delay={0.2} 
      />
      
      {/* Arriba Derecha */}
      <Polaroid 
        className="hidden md:block absolute top-32 right-10 lg:right-20 rotate-12" 
        src="/fotos/foto9.jpg" 
        delay={0.4} 
      />

      {/* Abajo Izquierda */}
      <Polaroid 
        className="hidden md:block absolute bottom-20 left-12 lg:left-24 rotate-6" 
        src="/fotos/foto16.jpg" 
        delay={0.6} 
      />

      {/* Abajo Derecha */}
      <Polaroid 
        className="hidden md:block absolute bottom-32 right-12 lg:right-24 -rotate-12" 
        src="/fotos/foto17.jpg" 
        delay={0.8} 
      />

    </section>
  );
}

// --- Componente Auxiliar Polaroid ---
function Polaroid({ className, src, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
      className={`bg-white p-3 pb-8 shadow-xl rounded-sm w-48 lg:w-56 z-10 cursor-pointer transform transition-all hover:shadow-2xl ${className}`}
    >
      <div className="aspect-square bg-gray-200 overflow-hidden relative border border-gray-100">
         {/* INTENTA CARGAR LA IMAGEN, SI FALLA MUESTRA UN COLOR */}
         <img 
            src={src} 
            alt="Foto" 
            className="object-cover w-full h-full"
            onError={(e) => {
                e.target.style.display = 'none'; // Si falla, oculta la img rota
                e.target.parentElement.style.backgroundColor = '#FBCFE8'; // Pone fondo rosa
            }} 
         />
         {/* Texto fallback si no hay foto */}
         <div className="absolute inset-0 flex items-center justify-center -z-10">
            <span className="text-3xl">📸</span>
         </div>
      </div>
    </motion.div>
  );
}