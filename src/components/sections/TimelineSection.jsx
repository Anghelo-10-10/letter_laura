"use client";

import { motion } from "framer-motion";

export default function TimelineSection() {
  // 📸 LISTA DE EVENTOS
  // He agregado la propiedad "image" a tus eventos.
  // Asegúrate de que los nombres de archivo en /public/fotos/ coincidan con estos,
  // o cambia las rutas aquí abajo.
  const events = [
    {
      date: "27 de Septiembre, 2025",
      title: "El Inicio, el Inicio de Todo",
      desc: "Ese día ninguno de los dos buscaba nada, pero el destino tenía otros planes. Casi no cruzamos palabras, sin embargo, te miraba de reojo sin saber que, en ese preciso instante, mi vida estaba cambiando para siempre. No imaginaba la magnitud de todo lo que íbamos a construir, no buscaba nada, y termine encontrandolo todo.",
      icon: "✨",
      image: "/fotos/foto10.jpg"
    },
    {
      date: "13 de Octubre, 2025",
      title: "Nuestro Primer Acercamiento",
      desc: "Ese día yo estava nervioso, y tú tan hermosa, los planes no salieron de acuerdo a lo planeado, pero ese día aunque no muy fuerte senti la quimica de los dos, vi tu sonrisa, y dude entre si pretenderte o no, comimos y caminamos, ese día fue especial, el inicio de nuestra relación, el inicio de todo, el inicio de todo lo que hemos llegado a ser.",
      icon: "❤️",
      image: "/fotos/foto14.jpg"
    },
    {
      date: "1 de Noviembre, 2025",
      title: "El Día Perfecto",
      desc: "Ya sabíamos que había interés, pero ese sábado todo explotó. Fue el día de nuestro primer beso, el día que nos entregamos. Tu aroma, con ese perfume que te regalé, se quedó grabado en mi memoria para siempre. Al mirarte a los ojos y recostarme a tu lado, supe que no quería estar en ningún otro lugar.",
      icon: "💋",
      image: "/fotos/foto18.jpg"
    },
    {
      date: "6 de Noviembre, 2025",
      title: "Nuestra Primera Semana",
      desc: "Decidí irme contigo y tu mamá después del trabajo, y se convirtió en una semana mágica. Disfruté cada segundo de esa convivencia. Fue espléndido darme cuenta de lo rápido que te llegué a querer. En esos días te entregué mi corazón por completo y confirmé que mi lugar favorito en el mundo es a tu lado.",
      icon: "🏠",
      image: "/fotos/foto13.jpg"
    },
    {
      date: "11 de Noviembre, 2025",
      title: "Nuestro Aniversario",
      desc: "El día oficial. El día del 'sí'. Fui el hombre más feliz del mundo cuando me aceptaste. Sentí cómo mi amor por ti se multiplicaba en un segundo, una intensidad tan fuerte que sentía que casi moría de amor. Ahí empezó oficialmente nuestra aventura juntos.",
      icon: "💑",
      image: "/fotos/foto12.jpg"
    },
    {
      date: "7 de Diciembre, 2025",
      title: "Nuestras Primeras Velitas",
      desc: "Fue mi primera vez en esta tradición y hacerlo contigo lo hizo sagrado. Aunque gran parte del día estuve solo, nuestro momento juntos fue fugaz pero hermoso. Esa noche, entre luces pequeñas y mucha fe, encendí mis velitas pidiendo por ti, por mí y por este amor que nos une. Simplemente especial.",
      icon: "🕯️",
      image: "/fotos/foto19.jpg"
    },
    {
      date: "15 de Diciembre, 2025",
      title: "Cine y Locura de Amor",
      desc: "Fui inmensamente feliz ese día. Estaba viendo una película que me gusta, pero lo mejor era tener a mi mundo, a la niña que más he amado, sentada a mi lado. Parecíamos dos locos enamorados: besándonos, riéndonos y tomados de la mano en la oscuridad del cine. Solo existíamos nosotros dos.",
      icon: "🎬",
      image: "/fotos/foto8.jpg"
    },
    {
      date: "24 de Diciembre, 2025",
      title: "Una Navidad Agridulce",
      desc: "Fue un día de felicidad absoluta y tristeza profunda a la vez. Estaba feliz de estar contigo, amor, pero sentía que te me escapabas entre los dedos. Faltaba tan poco para la despedida que comencé a extrañarte sin que te hayas ido aún. Fue especial, intenso y un recordatorio de cuánto me costaría dejarte.",
      icon: "🎄",
      image: "/fotos/foto20.jpg"
    },
    {
      date: "26 de Diciembre, 2025",
      title: "De la Despedida a la Aventura",
      desc: "Era el día del adiós, pero sorpresivamente decidimos que viajaría a Cali con ustedes. ¡Dios, qué nervios y qué felicidad! Nervioso por caerle bien a tu familia, pero con el corazón ilusionado por robarle más tiempo al destino. Totalmente enamorado de ti, emprendí ese viaje sin dudarlo.",
      icon: "🚌",
      image: "/fotos/foto21.jpg"
    },
    {
      date: "27 de Diciembre, 2025",
      title: "Llegada a Cali",
      desc: "Pisamos tierra caleña. Ese día conocí a parte de tu familia y, no te miento, estaba muy nervioso. Pero por encima de los nervios, ganaba la felicidad inmensa de estar a tu lado, de no haberme ido y poder seguir cerquita de ti en tu propio mundo.",
      icon: "📍",
      image: "/fotos/foto22.jpg"
    },
    {
      date: "31 de Diciembre, 2025",
      title: "Promesa de Año Nuevo",
      desc: "Un día súper especial. Aunque no empezó bien, terminó de la manera más perfecta posible. Bajo el cielo caleño, las estrellas y los fuegos artificiales, juré en nombre de Dios amarte hasta donde me lo permitas y hasta donde aguantemos. Fue una noche hermosa que jamás olvidaré.",
      icon: "🎆",
      image: "/fotos/foto4.jpg"
    },
    {
      date: "7 de Enero, 2026",
      title: "Tu Cumpleaños",
      desc: "La verdadera razón de nuestro viaje a Cali. No hay palabras para expresar lo mucho que te amo, y poder celebrar tu vida a tu lado fue mi mayor regalo. Aunque fue un día tranquilo, fue inmensamente lindo simplemente porque lo pasé contigo. Te amo mucho.",
      icon: "🎂",
      image: "/fotos/foto23.jpg"
    },
    {
      date: "15 de Enero, 2026",
      title: "La Dolorosa Despedida",
      desc: "El maldito día que jamás quise que llegara. Tener que soltarte y subir a ese bus me destrozó por completo, y es un dolor que siento hasta hoy. La distancia nos separó físicamente, dejándome extrañándote como un demente. Regresé a Ecuador, pero mi corazón se quedó contigo en Cali.",
      icon: "✈️",
      image: "/fotos/foto24.jpg"
    },
  ];

  return (
    <section className="min-h-screen py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Título de la sección */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 relative z-10"
        >
            <h2 className="font-dancing text-6xl text-[#D81B60] drop-shadow-sm">
                Nuestro Viaje
            </h2>
            <p className="font-caveat text-2xl text-gray-500 mt-2">
                (Cada foto cuenta un pedacito de nuestra historia)
            </p>
        </motion.div>

        <div className="relative">
          {/* LÍNEA CENTRAL (Solo visible en PC) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-red-400 to-pink-300 transform -translate-x-1/2 rounded-full hidden md:block"></div>

          {/* LISTA DE EVENTOS */}
          <div className="space-y-24">
            {events.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                // AQUÍ OCURRE LA MAGIA DEL ZIG-ZAG:
                // Si es par, flex-row (Foto Izq | Texto Der)
                // Si es impar, flex-row-reverse (Texto Izq | Foto Der)
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* --- BLOQUE 1: LA FOTO --- */}
                {/* Ocupa el 50% del ancho y tiene el marco estilo scrapbook */}
                <div className="w-full md:w-1/2 px-4 md:px-12 flex justify-center">
                    <div className="relative group perspective-1000">
                        {/* El Marco Blanco Rotado */}
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                            className={`p-3 bg-white shadow-xl rounded-sm border border-gray-100 transform transition-all duration-300 ${
                                index % 2 === 0 ? "rotate-2" : "-rotate-2"
                            }`}
                        >
                            {/* La imagen en sí */}
                            <div className="w-64 h-48 md:w-80 md:h-60 bg-gray-200 overflow-hidden relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Si no encuentra la foto, muestra un placeholder bonito
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full w-full bg-pink-50 text-pink-300 font-caveat text-2xl p-4 text-center">📸 Foto pendiente</div>`;
                                    }}
                                />
                            </div>
                            {/* Cinta adhesiva amarilla decorativa (Tape) */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 shadow-sm transform -rotate-1 opacity-90"></div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BLOQUE CENTRAL: ICONO --- */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-white border-4 border-pink-400 rounded-full z-10 shadow-lg hidden md:flex">
                    <span className="text-2xl">{item.icon}</span>
                </div>

                {/* --- BLOQUE 2: EL TEXTO --- */}
                {/* Ocupa el otro 50% */}
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <div className={`bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/60 relative ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {/* Flechita decorativa apuntando al centro */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 ${
                        index % 2 === 0 ? "-left-2" : "-right-2"
                    }`}></div>

                    {/* Fecha */}
                    <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold tracking-wider mb-4 font-sans">
                      {item.date}
                    </span>
                    
                    {/* Título */}
                    <h3 className="font-dancing text-4xl text-[#D81B60] mb-3">
                        {item.title}
                    </h3>
                    
                    {/* Descripción */}
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