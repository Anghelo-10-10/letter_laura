"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MouseTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        emoji: Math.random() > 0.7 ? "💖" : "✨",
      };
      
      setTrails((prev) => [...prev.slice(-15), newTrail]); // Mantiene solo los últimos 15
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 1, scale: 0.5, x: trail.x, y: trail.y }}
            animate={{ opacity: 0, scale: 1.5, y: trail.y + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-sm"
            style={{ left: 0, top: 0 }} // Reset para usar coordenadas x/y
          >
            {trail.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}