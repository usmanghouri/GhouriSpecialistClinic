"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, X } from "lucide-react";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    
    // Trigger the custom toast notification
    setShowToast(true);
    
    // Optional: Reset the form fields after submission
    const target = e.target as HTMLFormElement;
    target.reset();

    // Automatically hide the toast after 6 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 9000);
  }

  return (
    <section id="contact" className="py-24 bg-teal-50 relative">
      
      {/* --- CUSTOM TOAST NOTIFICATION CORNER --- */}
      <div className="fixed bottom-5 right-5 z-50 max-w-md w-full px-4 sm:px-0">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white border border-teal-100 rounded-2xl p-5 shadow-2xl flex items-start gap-4 ring-1 ring-teal-900/5"
            >
              <div className="p-2 bg-teal-100 text-teal-600 rounded-xl shrink-0">
                <CheckCircle2 size={24} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-base mb-1">Request Submitted!</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thank you for reaching out. For an **immediate response** or rapid booking, please contact us directly on our given numbers or tap the WhatsApp button below.
                </p>
              </div>

              <button 
                onClick={() => setShowToast(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* ---------------------------------------- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-teal-900 mb-4"
          >
            Get In Touch & Book Consultation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-teal-700/80"
          >
            Schedule your appointment today or reach out for online consultation. We are here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="tel:+923364008086" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us (Appointment)</p>
                    <p className="text-lg font-semibold text-gray-900">+92 336 4008086</p>
                  </div>
                </a>

                <a href="https://wa.me/923364008086" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">WhatsApp (Online Consultation)</p>
                    <p className="text-lg font-semibold text-gray-900">+92 336 4008086</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Clinic Address</p>
                    <p className="text-lg font-semibold text-gray-900 leading-snug">
                      Main College Road, <br/>Al Hamad Chowk, Silver Estate, PCSIR Staff Colony, Lahore
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl text-white">
                <p className="font-medium text-lg mb-2">Need Immediate Assistance?</p>
                <p className="text-teal-50 mb-4 text-sm">Our medical staff is available on WhatsApp for quick responses and online booking.</p>
                <a 
                  href="https://wa.me/923364008086" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-white text-teal-700 rounded-xl font-bold hover:bg-teal-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-teal-900/5 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={submitForm} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Muhammad Zoraiz"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Submit Request</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}