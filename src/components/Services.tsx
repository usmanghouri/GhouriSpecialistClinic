"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, HeartPulse, Brain, Eye, TestTube } from "lucide-react";

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive medical care for all age groups, focusing on prevention, diagnosis, and treatment of adult diseases.",
    icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Dermatology",
    description: "Advanced skin care solutions treating conditions ranging from acne to severe skin diseases and aesthetic treatments.",
    icon: <Activity className="w-8 h-8 text-rose-500" />,
  },
  {
    title: "Speech Therapy",
    description: "Tailored therapy programs for children and adults experiencing communication or swallowing difficulties.",
    icon: <Brain className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Cardiology Consultations",
    description: "Expert evaluation of heart health, preventive cardiology, and management of cardiovascular conditions.",
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Diagnostic Lab",
    description: "Fully equipped in-house laboratory providing quick and accurate test results for timely diagnosis.",
    icon: <TestTube className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Eye Care",
    description: "Routine eye exams, vision correction, and treatment for various ocular conditions.",
    icon: <Eye className="w-8 h-8 text-amber-500" />,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Medical Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive healthcare services provided by specialized professionals under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
