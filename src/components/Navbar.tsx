"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-teal-800 tracking-tight">
              Ghouri<span className="text-teal-600 font-light"> Specialist Clinic</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Specialists</a>
            {/* <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">About Us</a> */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-lg font-medium"
            >
              <PhoneCall size={18} />
              <span>Book Appointment</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Services</a>
            <a href="#doctors" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Specialists</a>
            {/* <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">About Us</a> */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-md hover:bg-teal-700 font-medium shadow-sm"
            >
              <PhoneCall size={18} />
              <span>Book Appointment</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
