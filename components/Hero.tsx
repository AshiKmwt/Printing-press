"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-gray-100 px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold mb-6 text-white"
      >
        Garima Printers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl font-medium text-gray-300 mb-6 max-w-2xl mx-auto"
      >
        Customize your designs & wedding cards with us — powered by AI, designed to perfection.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg max-w-3xl text-gray-200 mb-8 px-6 py-4 rounded-lg shadow-lg bg-gray-800 mx-auto"
      >
        We specialize in high-quality printing for pamphlets, banners, bill books, and hospital stationery. With a focus on precision and timely delivery, we offer bulk discounts and digital delivery options.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        href="#contact"
        className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-all"
      >
        Request a Quote
      </motion.a>
    </section>
  );
}
