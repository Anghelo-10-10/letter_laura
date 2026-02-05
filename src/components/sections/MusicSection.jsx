"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Music } from "lucide-react";

export default function MusicSection() {
  // CONFIGURA TUS CANCIONES AQUÍ
  const playlist = [
    {
      id: 1,
      title: "Iris",
      artist: "Goo Goo Dolls",
      cover: "/fotos/cover1.jpg", 
      audioSrc: "/music/The Goo Goo Dolls - Iris.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 2,
      title: "Car's Outside",
      artist: "James Arthur",
      cover: "/fotos/cover2.jpg", 
      audioSrc: "/music/YOU CD 1 TRACK 5 (320).mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 3,
      title: "Do I Wanna Know?",
      artist: "Arctic Monkeys",
      cover: "/fotos/cover3.jpg", 
      audioSrc: "/music/Arctic Monkeys - Do I Wanna Know.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },
    
    {
      id: 4,
      title: "Imagínate",
      artist: "Danny Ocean",
      cover: "/fotos/cover4.jpg", 
      audioSrc: "/music/Danny Ocean - Imagínate.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 5,
      title: "Priti",
      artist: "Danny Ocean",
      cover: "/fotos/cover4.jpg", 
      audioSrc: "/music/Danny Ocean - Priti.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 6,
      title: "Corazón",
      artist: "Danny Ocean",
      cover: "/fotos/cover4.jpg", 
      audioSrc: "/music/Danny Ocean - Corazón.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 7,
      title: "Vitamina",
      artist: "Danny Ocean",
      cover: "/fotos/cover4.jpg", 
      audioSrc: "/music/Danny Ocean - Vitamina.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 8,
      title: "Volare",
      artist: "Danny Ocean",
      cover: "/fotos/cover5.jpg", 
      audioSrc: "/music/Danny Ocean - Volare.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 9,
      title: "Heaven",
      artist: "Bryan Adams",
      cover: "/fotos/cover6.jpg", 
      audioSrc: "/music/Bryan Adams - Heaven.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 10,
      title: "Dembow",
      artist: "Danny Ocean",
      cover: "/fotos/cover7.jpg", 
      audioSrc: "/music/Danny Ocean - Dembow.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 11,
      title: "Una Noche Más",
      artist: "Gunda Merced Y Su Salsa Fever",
      cover: "/fotos/cover8.jpg", 
      audioSrc: "/music/Gunda Merced Y Su Salsa Fever - Una Noche Más.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 12,
      title: "De Los Besos Que Te Di",
      artist: "Christian Nodal",
      cover: "/fotos/cover9.jpg", 
      audioSrc: "/music/Christian Nodal - De Los Besos Que Te Di.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 13,
      title: "Stand By Me",
      artist: "Oasis",
      cover: "/fotos/cover10.jpg", 
      audioSrc: "/music/Oasis - Stand By Me.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

     {
      id: 14,
      title: "TQM",
      artist: "Rawayana",
      cover: "/fotos/cover11.jpg", 
      audioSrc: "/music/Rawayana - TQM.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

    {
      id: 15,
      title: "Lejos De Aqui",
      artist: "Farruko",
      cover: "/fotos/cover12.jpg", 
      audioSrc: "/music/Farruko - Lejos de Aquí.mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },

     {
      id: 16,
      title: "Cositas Que Haciamos",
      artist: "Farruko",
      cover: "/fotos/cover13.jpg", 
      audioSrc: "/music/Cositas Que Haciamos CD 1 TRACK 1 (320).mp3", 
      color: "bg-yellow-200", 
      quote: "Look at the stars, look how they shine for you..."
    },
    
  ];

  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying, currentSong]);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <section className="min-h-screen py-24 px-4 flex flex-col items-center justify-center relative z-20">
      <audio ref={audioRef} src={currentSong.audioSrc} onEnded={() => setIsPlaying(false)} />
      
      {/* Fondo ambiental dinámico */}
      <motion.div 
        animate={{ backgroundColor: currentSong.color.replace("bg-", "") }} 
        className={`absolute inset-0 opacity-30 transition-colors duration-1000 ${currentSong.color} -z-10`} 
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* PLAYER VISUAL (VINILO) */}
        <div className="flex flex-col items-center order-1">
             <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full shadow-2xl border-8 border-gray-900 bg-gray-950 flex items-center justify-center overflow-hidden"
                >
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-800 relative z-10">
                         <img src={currentSong.cover} className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'}/>
                    </div>
                </motion.div>
             </div>
             {/* BOTONES */}
             <div className="mt-8 flex items-center gap-6 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/50">
                <button onClick={() => setIsPlaying(!isPlaying)} className="w-14 h-14 bg-[#D81B60] rounded-full flex items-center justify-center text-white hover:scale-105 transition">
                    {isPlaying ? <Pause size={28} fill="white"/> : <Play size={28} fill="white" className="ml-1"/>}
                </button>
             </div>
        </div>

        {/* LISTA DE CANCIONES */}
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/60 shadow-xl h-[500px] flex flex-col order-2">
            <h2 className="font-dancing text-4xl text-gray-800 mb-4">Nuestras Canciones 🎵</h2>
            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {playlist.map((song) => (
                    <div 
                        key={song.id}
                        onClick={() => handleSelectSong(song)}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/50 transition ${currentSong.id === song.id ? "bg-white shadow ring-1 ring-pink-200" : ""}`}
                    >
                        <div className="w-10 h-10 rounded bg-gray-300 overflow-hidden"><img src={song.cover} className="object-cover w-full h-full"/></div>
                        <div>
                            <h4 className="font-bold text-sm text-gray-800">{song.title}</h4>
                            <p className="text-xs text-gray-500">{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}