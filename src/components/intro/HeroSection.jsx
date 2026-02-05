"use client";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleHeartClick = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 text-center z-20">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleHeartClick}
            className="mb-8 bg-white/30 backdrop-blur-lg p-8 rounded-full border border-white/50 shadow-lg cursor-pointer"
        >
            <Heart size={80} className="text-[#D81B60] fill-[#D81B60]/20" />
        </motion.button>
        <h1 className="font-dancing text-7xl md:text-9xl text-[#D81B60]">Feliz San Valentín</h1>
        <h2 className="font-caveat text-4xl md:text-5xl text-gray-600 mt-4">Para mi Laura ❤️</h2>
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-pink-400">
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
}