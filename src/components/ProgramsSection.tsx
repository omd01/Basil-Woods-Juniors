import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import WaveDivider from "@/components/ui/wave-divider";
import { Sunrise, MessageCircle, BookOpen, Drama, Bus, Footprints, Palette, Leaf } from "lucide-react";

const ProgramsSection = () => {
  const playgroundActivities = [
    { title: "Activity Period",      description: "Our little ones transition smoothly from home to school, setting the mood for all the learning and excitement ahead!", icon: Sunrise, gradient: "gradient-swing" },
    { title: "Circle Time",          description: "Confidence blooms through speaking, listening, and social skills with fun-filled morning discussions.",                    icon: MessageCircle, gradient: "gradient-slide" },
    { title: "Phonics & Language",   description: "Children learn letter sounds, reading, and writing the fun 'Jolly Phonics' way!",                                      icon: BookOpen, gradient: "gradient-seesaw" },
    { title: "Puppets & Story Time", description: "Stories come alive with friendly puppets, building vocabulary and sparking imagination.",                                icon: Drama, gradient: "gradient-swing" },
    { title: "Field Trips",          description: "Hands-on learning through carefully planned trips, creating lasting memories.",                                         icon: Bus, gradient: "gradient-slide" },
    { title: "Outdoor Play",         description: "30 minutes of sunshine, sand play, and structured games to keep kids active and happy.",                                icon: Footprints, gradient: "gradient-seesaw" },
    { title: "Theme Time",           description: "A fresh theme each month keeps children engaged across diverse topics.",                                                 icon: Palette, gradient: "gradient-swing" },
    { title: "Art, Craft & Gardening", description: "From creative crafts to planting seeds — learning by doing in joyful ways.",                                          icon: Leaf, gradient: "gradient-slide" },
  ];

  // Map gradient keys to your utilities
  const gradientClass = (g) =>
    g === "gradient-swing" ? "bg-gradient-primary"
    : g === "gradient-slide" ? "bg-gradient-secondary"
    : "bg-gradient-accent";

  return (
    <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
      <WaveDivider position="top" fill="#e9f2ef" variant={3} />

      {/* subtle shapes with floating animations */}
      <motion.div
        className="absolute top-20 right-8 w-12 h-12 rounded-2xl opacity-25"
        style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25"
        style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-8 w-6 h-6 rounded-2xl opacity-20"
        style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }}
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-4 py-2 rounded-full inline-block mb-4 text-white"
               style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}>
            🌟 A Day at Basil Woods Juniors
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            Every Day is Filled with
            <span className="block" style={{ color: "hsl(var(--premium-pink))" }}>Joy, Learning & Discovery</span>
          </h2>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            From circle time to outdoor play — each moment is designed to make learning rich, real, and relevant.
          </p>
        </motion.div>

        {/* Activities Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 max-w-7xl mx-auto">
          {playgroundActivities.map((activity, index) => (
            <motion.div
              key={index}
              className={`${index % 2 === 1 ? "lg:mt-6" : ""} group`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card className="p-6 md:p-7 text-center h-full rounded-2xl border border-[hsl(var(--neutral-100))] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <motion.div
                  className={`${gradientClass(activity.gradient)} w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-sm`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {React.createElement(activity.icon, { className: "w-8 h-8 md:w-10 md:h-10 text-white", strokeWidth: 2 })}
                </motion.div>

                <h3 className="font-bold text-lg md:text-xl text-neutral-800 mb-3 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  {activity.description}
                </p>

                {/* underline indicator */}
                <div className="mt-5 pt-4 border-t border-[hsl(var(--neutral-100))]">
                  <div className="w-full h-[2px] bg-[hsl(var(--neutral-100))] rounded-full overflow-hidden">
                    <div className="h-[2px] rounded-full w-0 transition-all duration-500 ease-out group-hover:w-full"
                         style={{ backgroundColor: "hsl(var(--premium-orange))" }} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider position="bottom" fill="#e9f2ef" variant={4} />
    </section>
  );
};

export default ProgramsSection;
