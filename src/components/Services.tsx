"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  Brain,
  TestTube,
  Wind,
  Heart,
  Syringe,
  Thermometer,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "General & Internal Medicine",
    description:
      "Comprehensive diagnosis and long-term management of adult illnesses — including hypertension, diabetes, thyroid disorders, and complex multi-system conditions — by an internist with 8+ years of clinical experience.",
    icon: <Stethoscope className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  {
    title: "Kidney (Renal) Disease",
    description:
      "Evaluation and management of chronic kidney disease, renal function decline, proteinuria, kidney infections, and kidney stone-related conditions — with close monitoring and tailored treatment plans.",
    icon: <Heart className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  {
    title: "Liver (Hepatic) Disease",
    description:
      "Diagnosis and ongoing care of hepatitis B & C, fatty liver disease (NAFLD), elevated liver enzymes, jaundice, and early cirrhosis — with lifestyle guidance and medical management.",
    icon: <Activity className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  {
    title: "Fever & Acute Infections",
    description:
      "Rapid assessment and treatment of high fevers, typhoid, dengue, malaria, chest infections, UTIs, and other bacterial or viral illnesses — with same-day in-house lab support.",
    icon: <Thermometer className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  {
    title: "Respiratory Conditions",
    description:
      "Management of asthma, chronic cough, bronchitis, COPD, and breathlessness — including nebulisation therapy available on-site for acute episodes.",
    icon: <Wind className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  {
    title: "Vaccination & Preventive Care",
    description:
      "Routine immunisations for children and adults, including flu, hepatitis B, and typhoid vaccines — alongside health screenings and preventive counselling for at-risk patients.",
    icon: <Syringe className="w-7 h-7 text-teal-600" />,
    iconBg: "bg-teal-50",
  },
  // {
  //   title: "Dermatology & Skin Care",
  //   description:
  //     "Expert treatment of skin, hair, and nail conditions — from acne, eczema, and psoriasis to cosmetic concerns — by a dedicated dermatologist and skin specialist.",
  //   icon: <Sparkles className="w-7 h-7 text-rose-500" />,
  //   iconBg: "bg-rose-50",
  // },
  {
    title: "Speech & Language Therapy",
    description:
      "Play-based therapy for children with speech delay, late talking, slow language development, and related developmental challenges — delivered by a qualified speech and language therapist.",
    icon: <Brain className="w-7 h-7 text-blue-500" />,
    iconBg: "bg-blue-50",
  },
  {
    title: "Diagnostic Laboratory",
    description:
      "Fully equipped in-house lab for blood tests, urine analysis, liver and kidney function panels, sugar profiles, and cultures — with fast, accurate results for timely clinical decisions.",
    icon: <TestTube className="w-7 h-7 text-purple-500" />,
    iconBg: "bg-purple-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3"
          >
            What We Treat
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Medical Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Led by an internal medicine specialist with over 8 years of experience, our clinic offers focused, expert-led care across the conditions we treat best.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-12"
        >
          For conditions outside our scope, we provide referrals to trusted specialists.
        </motion.p>

      </div>
    </section>
  );
}
