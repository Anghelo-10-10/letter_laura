"use client";

import { motion } from "framer-motion";

export default function TimelineSection() {
  // ✏️ TUS DATOS
  const events = [
    {
      date: "El Inicio",
      title: "Coincidir",
      desc: "El momento exacto donde el destino decidió que tú y yo teníamos que conocernos. Bendita tecnología.",
      icon: "❤️" 
    },
    {
      date: "Enero 2026",
      title: "Juntos en Cali",
      desc: "Esos días contigo fueron magia. Pasear de la mano, sentirte cerca y confirmar que eres el amor de mi vida.",
      icon: "✈️"
    },
    {
      date: "15 de Enero",
      title: "La Despedida (Por ahora)",
      desc: "Regresar a Ecuador dolió, pero me traje la maleta llena de recuerdos y la certeza de que volveré.",
      icon: "🥺"
    },
    {
      date: "Futuro ~ 2027",
      title: "El Plan Maestro",
      desc: "La meta final: Mudarme a Cali. Porque la distancia es solo una prueba y nosotros vamos a ganarla.",
      icon: "🏡"
    },
  ];

  return (
    <section className="min-h-screen py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="font-dancing text-5xl md:text-6xl text-[#D81B60] drop-shadow-sm">
                Nuestro Viaje
            </h2>
            <p className="font-caveat text-xl text-gray-500 mt-2">
                (Cada paso nos acerca más)
            </p>
        </motion.div>

        <div className="relative">
          {/* Línea Central */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-red-400 to-pink-300 transform md:-translate-x-1/2 rounded-full"></div>

          {/* Eventos */}
          <div className="space-y-12 md:space-y-24">
            {events.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2" />

                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white border-4 border-pink-300 rounded-full z-10 shadow-lg">
                    <span className="text-xl">{item.icon}</span>
                </div>

                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                }`}>
                  <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-white/50 group">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold font-sans mb-3">
                      {item.date}
                    </span>
                    <h3 className="font-dancing text-3xl text-gray-800 mb-2">
                        {item.title}
                    </h3>
                    <p className="font-caveat text-xl text-gray-600 leading-relaxed">
                        {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}