"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CouponsSection() {
  const coupons = [
    { emoji: "🍕", title: "Cena Romántica", desc: "Vale por una pizza y peli." },
    { emoji: "💆‍♂️", title: "Masaje", desc: "Vale por un masaje de espalda." },
    { emoji: "🎬", title: "Cine VIP", desc: "Tú eliges la película." },
    { emoji: "✈️", title: "Escapada", desc: "Vale por un fin de semana juntos." },
  ];

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative">
      <h2 className="font-dancing text-5xl text-[#D81B60] mb-12 text-center">
        Tus Regalos 🎁
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl z-10">
        {coupons.map((coupon, index) => (
          <CouponCard key={index} data={coupon} />
        ))}
      </div>
    </section>
  );
}

// Componente interno (No necesita export default porque está dentro del mismo archivo)
function CouponCard({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-64 h-80 perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* FRENTE */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-white border-4 border-white/20">
          <div className="text-6xl mb-4 animate-bounce">🎁</div>
          <p className="font-caveat text-2xl">Clic para abrir</p>
        </div>

        {/* REVERSO */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-pink-100" style={{ transform: "rotateY(180deg)" }}>
          <div className="text-6xl mb-4">{data.emoji}</div>
          <h3 className="font-dancing text-2xl text-[#D81B60] text-center">{data.title}</h3>
          <p className="font-caveat text-lg text-gray-600 text-center mt-2">{data.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}