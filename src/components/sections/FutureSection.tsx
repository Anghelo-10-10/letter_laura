"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Heart } from "lucide-react";

export default function FutureSection() {
  // 🗓️ CONFIGURA TU FECHA OBJETIVO AQUÍ (Año, Mes-1, Día)
  // Nota: Los meses en JS van de 0 (Enero) a 11 (Diciembre)
  // Ejemplo: 14 de Febrero de 2027 -> new Date(2027, 1, 14)
  const targetDate = new Date(2027, 0, 15); // Puse 15 Enero 2027 como ejemplo
  const title = "Nuestro Reencuentro Definitivo";
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer); // Si ya pasó la fecha, paramos
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl w-full"
      >
        <div className="inline-block p-4 rounded-full bg-white/50 backdrop-blur-md mb-6 shadow-sm border border-white/60 animate-bounce">
            <Clock className="text-[#D81B60]" size={32} />
        </div>

        <h2 className="font-dancing text-5xl md:text-6xl text-[#D81B60] mb-4 drop-shadow-sm">
          {title}
        </h2>
        <p className="font-caveat text-2xl text-gray-500 mb-12">
          (Cada segundo cuenta para estar juntos en Cali)
        </p>

        {/* --- EL CONTADOR --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="Días" />
            <TimeUnit value={timeLeft.hours} label="Horas" />
            <TimeUnit value={timeLeft.minutes} label="Minutos" />
            <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>

        {/* Mensaje Final */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 inline-block max-w-lg"
        >
            <p className="font-caveat text-xl text-gray-700 leading-relaxed">
                "La distancia es solo una prueba para ver qué tan lejos puede viajar el amor. Y el mío viaja de Ecuador a Colombia en milisegundos." <Heart className="inline text-red-500 w-4 h-4 ml-1 fill-red-500"/>
            </p>
        </motion.div>

      </motion.div>
    </section>
  );
}

// Componente para cada cajita de tiempo
function TimeUnit({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(216,27,96,0.15)] border border-white flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-100 opacity-50"></div>
                <span className="font-sans text-4xl md:text-5xl font-bold text-gray-800 z-10 tabular-nums">
                    {value < 10 ? `0${value}` : value}
                </span>
            </div>
            <span className="font-caveat text-2xl text-pink-500 mt-3 font-bold">{label}</span>
        </div>
    )
}