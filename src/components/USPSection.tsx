import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, Building, MapPin, BookOpen, Trophy, GraduationCap, Sprout, Star } from "lucide-react";
import { motion } from "framer-motion";

/*
USPSection — aligned with site standard
- Section bg: bg-section-3 (after Programs section-2)
- WaveTop: #e9f2ef (from previous)
- WaveBottom: #eee7fa (into next section-4)
- Clean cards, neutral typography, subtle brand tints
*/

const WaveTop = ({ fill = "#e9f2ef" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#eee7fa" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

// Gradient mapper -> your existing utilities
const gradientClass = (g) =>
  g === "gradient-swing" ? "bg-gradient-primary"
    : g === "gradient-slide" ? "bg-gradient-secondary"
      : g === "gradient-seesaw" ? "bg-gradient-accent"
        : "bg-gradient-primary";

const USPSection = () => {
  const stats = [
    { number: "11", label: "Preschools", icon: Building2, gradient: "gradient-slide" },
    { number: "6", label: "Cities", icon: Building, gradient: "gradient-swing" },
    { number: "4", label: "States", icon: MapPin, gradient: "gradient-seesaw" },
  ];

  const advantages = [
    {
      title: "Well-Researched Curriculum",
      description: "An engaging, scientifically designed curriculum by reputed academicians, blending innovation with foundational values.",
      icon: BookOpen,
      gradient: "gradient-slide",
    },
    {
      title: "Award-Winning Preschool Program",
      description: "Selected among India's top preschool-cum-daycare centres by Education Today for two consecutive years.",
      icon: Trophy,
      gradient: "gradient-swing",
    },
    {
      title: "Experienced Academicians",
      description: "Teachers and facilitators specializing in early childhood education with decades of combined experience.",
      icon: GraduationCap,
      gradient: "gradient-seesaw",
    },
    {
      title: "Holistic Development",
      description: "A comprehensive approach nurturing physical, emotional, intellectual, and cultural growth through the 4Q model.",
      icon: Sprout,
      gradient: "gradient-sandbox",
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
      <WaveTop fill="#e9f2ef" />

      {/* soft shapes */}
      <div className="absolute top-20 right-8 w-10 h-10 rounded-2xl opacity-25" style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }} />
      <div className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25" style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }} />
      <div className="absolute top-1/2 left-8 w-6 h-6 rounded-2xl opacity-20" style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="px-5 py-2.5 rounded-full inline-flex items-center gap-2 mb-6 text-white shadow-lg shadow-orange-500/20"
            style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 fill-white" />
            <span className="font-bold tracking-wide text-sm uppercase">Our Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-800 leading-tight mb-6 tracking-tight">
            Where Vision Meets <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--premium-orange))] to-[hsl(var(--premium-pink))]">
              Experience
            </span>
          </h2>

          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Spreading our wings across India to enable a <span className="font-bold text-[hsl(var(--premium-teal))]">smarter generation</span> of children.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <Card key={i} className="text-center rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]">
                <div className={`${gradientClass(stat.gradient)} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-1.5 text-neutral-800">{stat.number}</div>
                <div className="text-base md:text-lg font-semibold" style={{ color: "hsl(var(--premium-purple))" }}>
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "hsl(var(--premium-teal))" }}>
            The Basil Woods Advantage
          </h3>
          <p className="text-neutral-700 text-base md:text-lg">
            Delivering excellence in early childhood education for over 15 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advantages.map((adv, i) => {
            const IconComponent = adv.icon;
            return (
              <Card
                key={i}
                className="flex gap-4 rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <div className={`${gradientClass(adv.gradient)} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white`}>
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-neutral-800 mb-2">{adv.title}</h4>
                  <p className="text-neutral-700 leading-relaxed text-sm md:text-base">{adv.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <WaveBottom fill="#eee7fa" />
    </section>
  );
};

export default USPSection;
