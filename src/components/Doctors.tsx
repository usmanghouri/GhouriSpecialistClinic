"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, MessageCircle, Award, CalendarCheck, ChevronDown } from "lucide-react";

const doctors = [
  {
    name: "Dr. Raza Gulzar Ghouri",
    specialty: "Medicine Specialist",
    experience: "8+ Years Experience",
    availability: "Mon – Sat",
    initials: "RG",
    description:
      "With over 8 years of clinical expertise, Dr. Raza provides comprehensive medical care for both adults and children. He has a particular focus on kidney (renal) and liver (hepatic) diseases, offering thorough diagnostic workups and long-term management plans tailored to each patient.",
    tags: ["General Medicine", "Nephrology", "Hepatology", "Pediatrics"],
    icon: <Stethoscope className="w-6 h-6" />,
    accent: "teal",
    accentClasses: {
      section: "bg-teal-50 border-teal-100",
      avatar: "bg-teal-100 text-teal-800",
      icon: "text-teal-600",
      specialty: "text-teal-700",
      tag: "bg-teal-50 text-teal-700 border-teal-200",
      bar: "bg-teal-500",
      button: "border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white",
      dot: "bg-teal-500",
    },
  },
  {
    name: "Dr. Shermin Raza",
    specialty: "Dermatologist & Skin Specialist",
    experience: "5+ Years Experience",
    availability: "Mon – Fri",
    initials: "SR",
    description:
      "Dr. Shermin is a skilled dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. From acne and eczema to advanced cosmetic concerns, she brings a careful, evidence-based approach to every patient's skin health and confidence.",
    tags: ["Skin Conditions", "Hair & Nails", "Cosmetic Care", "Acne & Eczema"],
    icon: <Sparkles className="w-6 h-6" />,
    accent: "rose",
    accentClasses: {
      section: "bg-rose-50 border-rose-100",
      avatar: "bg-rose-100 text-rose-800",
      icon: "text-rose-500",
      specialty: "text-rose-600",
      tag: "bg-rose-50 text-rose-700 border-rose-200",
      bar: "bg-rose-500",
      button: "border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white",
      dot: "bg-rose-500",
    },
  },
  {
    name: "Dr. Mahlaqa Ahsan",
    specialty: "Speech & Language Therapist",
    experience: "3+ Years Experience",
    availability: "Thurs – Sat",
    initials: "MA",
    description:
      "Dr. Mahlaqa specializes in supporting children with speech delays, late talking, and developmental language difficulties including slow brain development. Through engaging, play-based therapy, she helps children find their voice and build clear, confident communication skills.",
    tags: ["Speech Delay", "Language Development", "Child Therapy", "Developmental Support"],
    icon: <MessageCircle className="w-6 h-6" />,
    accent: "blue",
    accentClasses: {
      section: "bg-blue-50 border-blue-100",
      avatar: "bg-blue-100 text-blue-800",
      icon: "text-blue-500",
      specialty: "text-blue-600",
      tag: "bg-blue-50 text-blue-700 border-blue-200",
      bar: "bg-blue-500",
      button: "border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white",
      dot: "bg-blue-500",
    },
  },
];

const stats = [
  { value: "16+", label: "Years combined experience" },
  { value: "3", label: "Specialist disciplines" },
  { value: "500+", label: "Patients treated" },
  { value: "All ages", label: "Adults & children" },
];

export default function Doctors() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const renderDoctorCard = (doctor: typeof doctors[0], index: number) => {
    const isOpen = expanded === index;
    const c = doctor.accentClasses;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg w-full ${c.section}`}
      >
        {/* Accent bar */}
        <div className={`h-1 w-full ${c.bar}`} />

        <div className="p-7">
          {/* Avatar + Icon */}
          <div className="flex items-start justify-between mb-5">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${c.avatar}`}>
              {doctor.initials}
            </div>
            <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ${c.icon}`}>
              {doctor.icon}
            </div>
          </div>

          {/* Name & specialty */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">{doctor.name}</h3>
          <p className={`text-sm font-semibold mb-3 ${c.specialty}`}>{doctor.specialty}</p>

          {/* Experience & availability */}
          <div className="flex items-center gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Award className="w-3.5 h-3.5" />
              {doctor.experience}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <CalendarCheck className="w-3.5 h-3.5" />
              {doctor.availability}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${c.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expandable description */}
          <div>
            <button
              onClick={() => setExpanded(isOpen ? null : index)}
              className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors mb-2"
              aria-expanded={isOpen}
            >
              {isOpen ? "Show less" : "Read more"}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  key="desc"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-gray-600 leading-relaxed overflow-hidden"
                >
                  {doctor.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 pb-6 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-gray-400">
            <span className={`w-2 h-2 rounded-full ${c.dot}`} />
            Accepting patients
          </span>
          <a
            href="#contact"
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 inline-block ${c.button}`}
          >
            Book visit
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3"
          >
            Our Medical Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            A dedicated team of experienced physicians and therapists committed to your health and well-being.
          </motion.p>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-8 items-center">
          {/* Senior/Lead Doctor (First item) */}
          <div className="w-full max-w-2xl">
            {renderDoctorCard(doctors[0], 0)}
          </div>

          {/* Other Specialists */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {doctors.slice(1).map((doctor, index) => renderDoctorCard(doctor, index + 1))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 text-center"
            >
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
