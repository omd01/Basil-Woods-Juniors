import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import WaveDivider from "@/components/ui/wave-divider";
import { Palette, Leaf, BookOpen, Sparkles, Star, Heart, Award } from "lucide-react";
import mainImage from "../assets/Images/tulsi.webp";

const AboutSection = () => {
  const features = [
    { name: "Culture Connect", icon: Palette, color: "bg-orange-100 text-orange-600" },
    { name: "Nature Learning", icon: Leaf, color: "bg-green-100 text-green-600" },
    { name: "Holistic Curriculum", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
    { name: "Creative Adventures", icon: Sparkles, color: "bg-pink-100 text-pink-600" },
  ];

  return (
    <section className="py-20 md:py-24 bg-[hsl(var(--section-3))] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Visuals - Mobile First: Shows second on mobile if we want text first, but let's keep image top for visual impact */}
          <motion.div
            className="relative order-first lg:order-first"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Organic Blob Shape */}
            <div className="relative">
              <div className="absolute inset-0 bg-[hsl(var(--premium-orange))] rounded-[3rem] rotate-3 opacity-20 scale-105" />
              <div className="absolute inset-0 bg-[hsl(var(--premium-teal))] rounded-[3rem] -rotate-2 opacity-20 scale-105" />

              <img
                src={mainImage}
                alt="Happy children learning"
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500"
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 z-10 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Award Winning</div>
                  <div className="text-sm font-bold text-neutral-800">Preschool</div>
                </div>
              </motion.div>

              {/* Decorative Icon */}
              <motion.div
                className="absolute -top-8 -left-8 z-20 text-[hsl(var(--premium-pink))]"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 fill-current opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-6">
                <Star className="w-4 h-4 fill-current" />
                About Basil Woods Juniors
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[hsl(var(--brand-dark-green))] leading-tight mb-6">
                India’s Top Preschool <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--premium-orange))] to-[hsl(var(--premium-pink))]">
                  in the Heart of Chennai
                </span>
              </h2>

              <p className="text-lg text-neutral-600 leading-relaxed">
                A perfect parenting partner offering a transformative early learning experience — blending world-class infrastructure, expert facilitators, and innovative curriculum with foundational Indian values.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`p-3 rounded-xl ${f.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-neutral-800">{f.name}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-[hsl(var(--section-2))] border-l-4 border-[hsl(var(--premium-teal))]">
              <p className="text-neutral-700 italic font-medium">
                "Our unique Culture Connect program brings India’s rich cultural heritage to life in a fun and engaging way."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
