import { Dancing_Script, Caveat, Outfit } from "next/font/google"; // Outfit es una fuente moderna sans-serif
import "./globals.css";

// Títulos elegantes
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
// Texto estilo carta a mano
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
// Texto normal moderno (para que no todo sea cursiva)
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Para Laura ❤️",
  description: "Feliz San Valentín",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${dancing.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}