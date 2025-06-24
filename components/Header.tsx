import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gray-900 shadow-md">
      <h1 className="text-white text-2xl font-bold">Garima Printers</h1>
      <nav className="hidden sm:flex space-x-6 text-gray-300 font-medium">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
      <a
        href="tel:9414010177"
        className="ml-4 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg transition"
      >
        📞Contact Us
      </a>
    </header>
  );
}
