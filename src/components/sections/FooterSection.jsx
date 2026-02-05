// --- FOOTER (CIERRE) ---
function FooterSection() {
  return (
    <footer className="py-24 text-center relative overflow-hidden bg-gradient-to-t from-pink-100 to-transparent">
      <div className="relative z-10">
        <h2 className="font-dancing text-4xl text-gray-600 mb-4">
            Nos vemos pronto en Cali ✈️
        </h2>
        <div className="flex items-center justify-center gap-2 text-pink-400 font-caveat text-2xl">
            <span>Ecuador</span>
            <Heart size={16} className="fill-pink-400 animate-pulse" />
            <span>Colombia</span>
        </div>
        <p className="text-gray-400 text-sm mt-8 font-light">
            Hecho con muuuucho café y amor por tu Developer. &copy; 2026
        </p>
      </div>
    </footer>
  );
}