import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import WaveDivider from "@/components/ui/wave-divider";
import { Palette, Leaf, BookOpen, Sparkles, Smile, Star } from "lucide-react";
import mainImage from "../assets/Images/tulsi.webp";

const AboutSection = () => {
  const features = [
    { name: "Culture Connect", icon: Palette },
    { name: "Nature Learning", icon: Leaf },
    { name: "Holistic Curriculum", icon: BookOpen },
    { name: "Creative Adventures", icon: Sparkles },
  ];

  return (
    <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
      {/* waves */}
      <WaveDivider position="top" fill="#f6eee7" variant={1} />

      {/* subtle shapes with animation */}
      <motion.div
        className="absolute top-16 left-8 w-10 h-10 rounded-xl opacity-25"
        style={{ backgroundColor: "hsl(var(--light-orange))" }}
        animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-8 h-8 rounded-full opacity-25"
        style={{ backgroundColor: "hsl(var(--light-teal))" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-6 h-6 rounded-xl opacity-20"
        style={{ backgroundColor: "hsl(var(--light-pink))" }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl rotate-2 scale-105 opacity-20" />
            <Card className="relative z-10 rounded-3xl p-5 md:p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
              {/* Main imported image */}
              <img
                src={mainImage}
                alt="Happy children learning at Basil Woods Juniors"
                className="w-full h-[320px] md:h-[380px] object-cover rounded-2xl"
              />

              {/* Circular inset with icon */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full p-1.5 shadow-sm border border-[hsl(var(--neutral-100))] flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smile className="w-10 h-10" style={{ color: "hsl(var(--premium-orange))" }} strokeWidth={2} />
              </motion.div>
            </Card>
            {/* small decorative chip */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm text-white"
              style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="px-4 py-2 rounded-full inline-flex items-center gap-2 font-medium text-white"
              style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
            >
              <Star className="w-4 h-4 fill-white" />
              About Basil Woods Juniors
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight">
                India’s Top Preschool & Daycare
                <span className="block" style={{ color: "hsl(var(--premium-orange))" }}>
                  in the Heart of Chennai
                </span>
              </h2>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                A perfect parenting partner offering a transformative early learning experience — blending world-class infrastructure, expert facilitators, and innovative curriculum with foundational Indian values and universal ethics.
              </p>
            </div>

            <Card className="rounded-2xl p-5 shadow-sm border-l-4 bg-white" style={{ borderColor: "hsl(var(--premium-orange))", borderRightColor: "transparent", borderTopColor: "transparent", borderBottomColor: "transparent" }}>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                Basil Woods Juniors is an initiative of the <strong>National Institute of Value Education (NIVE)</strong>, selected among India’s top preschool-cum-daycare centres by <strong>Education Today</strong> for two consecutive years, and a nominee at the <strong>International School Awards, Dubai</strong>. Our unique <strong>Culture Connect</strong> program brings India’s rich cultural heritage to life in a fun and engaging way — while nurturing physical, cognitive, and emotional growth.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-[hsl(var(--neutral-100))] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "hsl(var(--premium-orange))" }}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-neutral-800 text-sm md:text-base">{f.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* wave to next (section-3) */}
      <WaveDivider position="bottom" fill="#e9f2ef" variant={2} />
    </section>
  );
};

export default AboutSection;
