"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-16 px-4 text-center text-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-6 text-teal-600"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-6"
        >
          Have a question or want to start a project? Get in touch with us!
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto grid gap-4"
        >
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg" />
          <textarea placeholder="Your Message" rows={4} className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg" />
          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
