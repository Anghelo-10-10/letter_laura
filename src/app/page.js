"use client";

import { motion } from "framer-motion";

// 1. IMPORTAMOS LOS COMPONENTES MODULARES
import FloatingElements from "@/components/ui/FloatingElements";
import MouseTrail from "@/components/ui/MouseTrail";
import FooterSection from "@/components/sections/FooterSection"; // (Si no lo tienes, créalo o quítalo por ahora)

// Secciones Principales
import HeroSection from "@/components/intro/HeroSection";
import LetterSection from "@/components/intro/LetterSection";
import TimelineSection from "@/components/sections/TimelineSection";
import MusicSection from "@/components/sections/MusicSection"; // <--- AQUÍ ESTÁ EL REPRODUCTOR
import CouponsSection from "@/components/sections/CouponsSection";
import FutureSection from "@/components/sections/FutureSection";
import NotesSection from "@/components/sections/NotesSection";
import FakeHeroSection from "@/components/sections/FakeHeroSection";
import DedicationSection from "@/components/sections/DedicationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fff0f5] overflow-x-hidden font-sans selection:bg-pink-200 cursor-default">
      
      {/* --- FONDO GLOBAL (Aurora) --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/2 w-[150vw] h-[150vw] bg-pink-300/30 rounded-full blur-[150px] mix-blend-multiply" 
        />
        <motion.div 
            animate={{ scale: [1, 1.5, 1], x: [0, 100, 0] }}
            transition={{ duration: 30, repeat: Infinity, delay: 2 }}
            className="absolute top-0 right-0 w-[100vw] h-[100vw] bg-red-200/40 rounded-full blur-[180px] mix-blend-multiply" 
        />
      </div>

      {/* --- UI GLOBAL --- */}
      <FloatingElements />
      <MouseTrail />

      {/* --- CONTENIDO ORGANIZADO --- */}
      <div className="relative z-10">
        
        {/* 1. Inicio */}
        <HeroSection />

        {/* 2. Introducción */}
        <LetterSection />

        {/* 3. Historia */}
        <TimelineSection />

        <NotesSection />

        <DedicationSection />

        {/* 4. Música (Debe verse ahora) */}
        <MusicSection />

        {/* 5. Regalos */}
        <CouponsSection />

        <FutureSection />

        {/* 6. Cierre */}
        <footer className="py-20 text-center">
            <p className="font-caveat text-xl text-gray-400">Hecho con ❤️ por Anghelo</p>
        </footer>

      </div>
      
    </main>
  );
}