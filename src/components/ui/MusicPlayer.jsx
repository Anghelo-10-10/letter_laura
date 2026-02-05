"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Iniciar con volumen bajo y subirlo suavemente
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2"
    >
      <audio ref={audioRef} src="/music/song.mp3" loop />
      
      {/* Botón de Play/Pause estilo Vinilo o CD */}
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center shadow-lg transition-all duration-500 ${isPlaying ? "bg-love-red animate-spin-slow" : "bg-gray-800"}`}
        style={{ animationDuration: '3s' }}
      >
        <Music size={20} className={`text-white ${isPlaying ? "" : "opacity-50"}`} />
      </button>

      {/* Control de Volumen pequeño al lado */}
      {isPlaying && (
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow-sm"
        >
            <span className="text-xs font-caveat text-gray-600 animate-pulse">
                Escuchando nuestra canción...
            </span>
            <button onClick={toggleMute}>
                {isMuted ? <VolumeX size={14} color="#666"/> : <Volume2 size={14} color="#D81B60"/>}
            </button>
        </motion.div>
      )}
    </motion.div>
  );
}