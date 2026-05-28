"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold text-sm mb-2">
              About Our Clinic
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Dedicated to Your Health & Well-being
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong className="text-teal-700 font-semibold">Ghouri Specialist Clinic</strong>, we are committed to providing patient-focused, high-quality healthcare for individuals and families. Led by Dr. Raza Gulzar Ghouri, we combine compassionate care with modern medical expertise.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our multidisciplinary team specializes in diagnosing and managing a wide range of adult and chronic conditions, alongside specialized dermatological and speech therapy services tailored to each patient’s unique needs.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Board-certified physicians with diverse specializations",
                  "Comprehensive General Medicine & preventive care",
                  "Modern diagnostics & dedicated specialist consultations",
                  "Friendly, supportive, and highly trained staff",
                  "Convenient appointment scheduling & online consultation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop"
                alt="Medical Professional Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
