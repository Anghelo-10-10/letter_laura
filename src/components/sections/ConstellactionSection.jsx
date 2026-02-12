"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- COORDENADAS AJUSTADAS PARA QUE FORMEN DIBUJOS CLAROS ---
const levels = [
  {
    id: 1,
    title: "Nivel 1: El Inicio",
    instruction: "Une los puntos en orden (1, 2, 3...) para ver la chispa.",
    // Forma: Un Rayo (Z)
    points: [
      { x: 30, y: 20 }, // 1. Arriba Izq
      { x: 70, y: 20 }, // 2. Arriba Der
      { x: 30, y: 80 }, // 3. Abajo Izq (Cruzado)
      { x: 70, y: 80 }, // 4. Abajo Der
    ],
    successMessage: "✨ 27 de Septiembre ✨",
    successSubtext: "Una conexión electrizante e inesperada.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Nivel 2: La Aventura",
    instruction: "Dibuja la ruta hacia ti...",
    // Forma: Avión de papel simplificado
    points: [
      { x: 20, y: 80 }, // 1. Cola
      { x: 50, y: 20 }, // 2. Punta Nariz
      { x: 80, y: 80 }, // 3. Ala derecha
      { x: 50, y: 60 }, // 4. Centro (cierre)
      { x: 20, y: 80 }, // 5. Vuelta a cola
    ],
    successMessage: "✈️ El Viaje a Cali ✈️",
    successSubtext: "Rompimos la distancia por primera vez.",
    icon: "🛫"
  },
  {
    id: 3,
    title: "Nivel 3: El Hogar",
    instruction: "Construye nuestro refugio...",
    // Forma: Casa
    points: [
      { x: 20, y: 80 }, // 1. Base Izq
      { x: 20, y: 40 }, // 2. Pared Izq
      { x: 50, y: 10 }, // 3. Techo
      { x: 80, y: 40 }, // 4. Pared Der
      { x: 80, y: 80 }, // 5. Base Der
      { x: 20, y: 80 }, // 6. Cerrar suelo
    ],
    successMessage: "🏠 Nuestra Semana",
    successSubtext: "Mi lugar favorito en el mundo eres tú.",
    icon: "🏡"
  },
  {
    id: 4,
    title: "Nivel 4: La Promesa",
    instruction: "El símbolo de lo eterno...",
    // Forma: Infinito (Simplificado como moño/reloj de arena acostado)
    points: [
      { x: 50, y: 50 }, // 1. Centro
      { x: 20, y: 30 }, // 2. Arriba Izq
      { x: 20, y: 70 }, // 3. Abajo Izq
      { x: 50, y: 50 }, // 4. Centro
      { x: 80, y: 30 }, // 5. Arriba Der
      { x: 80, y: 70 }, // 6. Abajo Der
      { x: 50, y: 50 }, // 7. Centro (Fin)
    ],
    successMessage: "∞ Amor Eterno ∞",
    successSubtext: "Hasta donde aguantemos, mi amor.",
    icon: "💍"
  }
];

export default function ConstellationSection() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [connectedPoints, setConnectedPoints] = useState([0]); // Índices de puntos conectados
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const levelData = levels[currentLevel];

  // Manejar click en estrella
  const handlePointClick = (index) => {
    const nextIndex = connectedPoints.length; // El índice que esperamos que toque
    
    // Si toca el punto correcto (el siguiente en la lista)
    if (index === nextIndex) {
      setConnectedPoints((prev) => [...prev, index]);
      
      // Sonido de "Ding" (Opcional, visual por ahora)
      
      // Checar victoria
      if (index === levelData.points.length - 1) {
        setIsLevelComplete(true);
      }
    }
  };

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel((prev) => prev + 1);
      setConnectedPoints([0]); // Reset puntos
      setIsLevelComplete(false);
    } else {
      // Fin del juego
      alert("¡Te amo Laura! Gracias por completar nuestra historia.");
      setShowGame(false);
      setCurrentLevel(0);
      setConnectedPoints([0]);
      setIsLevelComplete(false);
    }
  };

  // --- PANTALLA DE INICIO (INVITACIÓN) ---
  if (!showGame) {
    return (
      <section className="py-32 px-4 bg-[#0a0a1a] relative overflow-hidden flex flex-col items-center text-center">
        {/* Estrellas decorativas */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute bg-white rounded-full opacity-70 animate-pulse"
                     style={{
                         top: `${Math.random() * 100}%`,
                         left: `${Math.random() * 100}%`,
                         width: `${Math.random() * 3}px`,
                         height: `${Math.random() * 3}px`,
                         animationDuration: `${Math.random() * 3 + 1}s`
                     }}
                />
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="z-10 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl max-w-lg"
        >
            <span className="text-6xl mb-6 block">🌌</span>
            <h2 className="font-dancing text-5xl text-blue-200 mb-4">Nuestras Constelaciones</h2>
            <p className="font-caveat text-2xl text-gray-300 mb-8">
                Hay momentos que brillan más que otros...<br/>
                ¿Me ayudas a conectarlos?
            </p>
            <button 
                onClick={() => setShowGame(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105"
            >
                Comenzar ✨
            </button>
        </motion.div>
      </section>
    );
  }

  // --- PANTALLA DE JUEGO ---
  return (
    <section className="fixed inset-0 z-50 bg-[#050510] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Botón Salir */}
        <button 
            onClick={() => setShowGame(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white z-50 font-mono text-sm"
        >
            [SALIR]
        </button>

        {/* Info Nivel */}
        <div className="text-center mb-8 z-10 px-4">
            <h3 className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-2">Nivel {currentLevel + 1}</h3>
            <h2 className="text-4xl font-dancing text-white drop-shadow-md">{levelData.title}</h2>
            <p className="text-gray-400 font-caveat text-xl mt-2 animate-pulse">{levelData.instruction}</p>
        </div>

        {/* --- ÁREA DE JUEGO (CONTENEDOR CUADRADO) --- */}
        {/* 'aspect-square' es la CLAVE para que el SVG coincida con los puntos HTML */}
        <div className="relative w-full max-w-sm md:max-w-md aspect-square bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] mx-6">
            
            {/* 1. CAPA SVG (LÍNEAS) */}
            {/* viewBox="0 0 100 100" permite usar coordenadas de 0 a 100 igual que los porcentajes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Definimos el efecto de brillo (Glow) */}
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Línea conectada */}
                <motion.polyline
                    points={connectedPoints.map(i => `${levelData.points[i].x},${levelData.points[i].y}`).join(" ")}
                    fill="none"
                    stroke="#60A5FA" // Azul claro
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)" // Aplicamos el brillo
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </svg>

            {/* 2. CAPA PUNTOS (BOTONES) */}
            {levelData.points.map((point, index) => {
                // Estados del punto
                const isConnected = connectedPoints.includes(index);
                const isNext = index === connectedPoints.length; // Es el siguiente a tocar
                const isFuture = index > connectedPoints.length;

                return (
                    <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                        style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    >
                        {/* El botón interactivo */}
                        <motion.button
                            onClick={() => handlePointClick(index)}
                            disabled={!isNext} // Solo se puede clickear el siguiente
                            whileTap={{ scale: 0.8 }}
                            animate={isNext ? { scale: [1, 1.2, 1], boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)" } : {}}
                            transition={isNext ? { repeat: Infinity, duration: 1.5 } : {}}
                            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 z-10 flex items-center justify-center
                                ${isConnected ? 'bg-blue-500 border-blue-300 shadow-[0_0_15px_#3B82F6]' : ''}
                                ${isNext ? 'bg-white border-white cursor-pointer' : ''}
                                ${isFuture ? 'bg-gray-800 border-gray-600 opacity-50' : ''}
                            `}
                        >
                            {/* Número o Estrella */}
                            <span className={`text-xs font-bold ${isConnected ? 'text-white' : 'text-black'}`}>
                                {isConnected ? '★' : index + 1}
                            </span>
                        </motion.button>
                        
                        {/* Etiqueta flotante para el siguiente punto (Ayuda visual) */}
                        {isNext && (
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: -20 }}
                                className="absolute text-blue-200 text-xs font-bold whitespace-nowrap pointer-events-none"
                            >
                                ¡Tócame!
                            </motion.span>
                        )}
                    </div>
                );
            })}
        </div>

        {/* --- MODAL DE ÉXITO --- */}
        <AnimatePresence>
            {isLevelComplete && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
                >
                    <motion.div 
                        initial={{ scale: 0.5, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-gray-900 border border-blue-500/50 p-8 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.4)] max-w-sm w-full"
                    >
                        <div className="text-7xl mb-4 animate-bounce">{levelData.icon}</div>
                        <h2 className="text-3xl font-dancing text-blue-300 mb-2">{levelData.successMessage}</h2>
                        <p className="text-gray-300 font-caveat text-2xl mb-8 leading-snug">
                            "{levelData.successSubtext}"
                        </p>
                        <button 
                            onClick={nextLevel}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold shadow-lg transform active:scale-95 transition-transform"
                        >
                            {currentLevel === levels.length - 1 ? "Finalizar ❤️" : "Siguiente Nivel ➡️"}
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  );
}