"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Pamphlets & Flyers", description: "Custom-designed pamphlets and flyers..." },
  { title: "Banners & Hoardings", description: "Durable and vibrant banners..." },
  { title: "Bill Books & Receipts", description: "Tailored bill books and receipts..." },
  { title: "Hospital Stationery", description: "Custom files, forms, letterheads..." },
];

export default function Services() {
  return (
    <section className="bg-gray-900 py-16 px-4 text-center text-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12 text-teal-600"
        >
          Our Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-teal-500">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
