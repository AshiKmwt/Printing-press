"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gray-800 py-16 px-4 text-center text-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-6 text-teal-600"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Garima Printers is your trusted partner for all printing needs. We pride ourselves on delivering high-quality, custom printing services...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Based in Beawar, Rajasthan, we help businesses bring ideas to life through superior printing, with timely delivery and great pricing.
        </motion.p>
      </div>
    </section>
  );
}
