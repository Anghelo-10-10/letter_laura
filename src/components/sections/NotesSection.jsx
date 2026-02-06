"use client";

import { motion } from "framer-motion";

export default function NotesSection() {
  // 📝 TUS PENSAMIENTOS (Configurados para el caos visual)
  const notes = [
    {
      id: 1,
      title: "Lo que más extraño",
      text: "Extraño tu risa resonando en la misma habitación que yo. Extraño esa paz que sentí cuando dormimos juntos esa semana en Cali. Extraño simplemente voltear y que estés ahí.",
      color: "bg-[#fff9c4]", // Amarillo Post-it clásico
      rotate: "-rotate-6",    // Muy inclinado a la izquierda
      offset: "md:translate-y-4" // Un poco más abajo
    },
    {
      id: 2,
      title: "Por qué te amo",
      text: "Te amo porque contigo no tengo que fingir. Te amo porque te aventuraste a quererme a pesar de la distancia. Te amo porque haces que mis días grises en Ecuador tengan color.",
      color: "bg-[#ffcdd2]", // Rosita suave
      rotate: "rotate-3",     // Ligeramente a la derecha
      offset: "md:-translate-y-8" // ¡Más arriba que los demás!
    },
    {
      id: 3,
      title: "Mi deseo urgente",
      text: "Me muero por verla. Cuento los días, las horas y los segundos para volver a abrazarte en el aeropuerto y no soltarte por un buen rato.",
      color: "bg-[#bbdefb]", // Azul cielo
      rotate: "-rotate-3",
      offset: "md:translate-y-12" // Muy abajo
    },
    {
      id: 4,
      title: "Promesa",
      text: "Aunque estemos lejos, mi corazón duerme en Cali todas las noches. Te prometo que esta distancia es temporal, pero lo nuestro es para siempre.",
      color: "bg-[#e1bee7]", // Lila
      rotate: "rotate-6",     // Muy inclinado a la derecha
      offset: "md:-translate-y-2"
    },
    {
      id: 5,
      title: "Un Secreto",
      text: "A veces me quedo mirando tus fotos y sonrío como tonto en medio del trabajo. Mis compañeros deben pensar que estoy loco, y sí... loco por ti.",
      color: "bg-[#c8e6c9]", // Verde menta
      rotate: "-rotate-2",
      offset: "md:translate-y-6"
    },
    {
      id: 6,
      title: "Futuro",
      text: "No veo la hora de que 'adiós' desaparezca de nuestro vocabulario y solo exista 'hasta mañana' o 'buenas noches' en la misma cama.",
      color: "bg-[#ffccbc]", // Naranja suave
      rotate: "rotate-4",
      offset: "md:-translate-y-6"
    },
  ];

  return (
    <section className="min-h-screen py-32 px-4 relative bg-[#fff0f5] overflow-hidden">
      
      {/* Elementos decorativos de fondo (opcionales, para dar textura) */}
      <div className="absolute top-20 left-10 text-pink-200/50 text-9xl font-caveat rotate-12 select-none z-0">Love</div>
      <div className="absolute bottom-20 right-10 text-pink-200/50 text-9xl font-caveat -rotate-12 select-none z-0">You</div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-28"
        >
            <h2 className="font-dancing text-6xl text-gray-800 drop-shadow-sm transform -rotate-2">
                Notas de mi Corazón 📝
            </h2>
            <p className="font-caveat text-2xl text-gray-500 mt-2">
                (Cositas que pienso cuando no estás)
            </p>
        </motion.div>

        {/* EL MURO DESORDENADO */}
        {/* Usamos gap grande (gap-10) para dar espacio a las inclinaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 p-4">
            {notes.map((note, index) => (
                <motion.div
                    key={note.id}
                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: note.rotate.includes('-') ? -5 : 5 }} // Entra girando
                    viewport={{ once: true }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15, 
                        delay: index * 0.1 
                    }}
                    // Aquí aplicamos el "offset" para romper la línea horizontal
                    className={`relative ${note.offset}`} 
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
                        className={`relative p-8 shadow-lg ${note.color} ${note.rotate} cursor-pointer min-h-[280px] flex flex-col justify-between transform transition-shadow hover:shadow-2xl`}
                        style={{ boxShadow: "5px 5px 15px rgba(0,0,0,0.15)" }} // Sombra realista
                    >
                        {/* CINTA ADHESIVA (Tape) Mal puesta */}
                        <div className={`absolute -top-5 left-1/2 w-32 h-10 bg-white/30 backdrop-blur-sm shadow-sm ${index % 2 === 0 ? '-rotate-3 -translate-x-1/2' : 'rotate-2 -translate-x-2/3'}`}></div>

                        {/* Contenido */}
                        <div>
                            <h3 className="font-dancing text-4xl text-gray-800 mb-4 opacity-90 border-b border-gray-400/20 pb-2 inline-block">
                                {note.title}
                            </h3>
                            <p className="font-caveat text-3xl text-gray-700 leading-tight">
                                {note.text}
                            </p>
                        </div>

                        {/* Firma / Decoración */}
                        <div className="flex justify-end mt-4">
                            <span className="text-2xl opacity-60">❤️</span>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>

        {/* Botón final (opcional) */}
        <div className="text-center mt-32">
            <p className="font-caveat text-xl text-gray-400">Y tengo mil notas más guardadas en el pecho...</p>
        </div>

      </div>
    </section>
  );
}