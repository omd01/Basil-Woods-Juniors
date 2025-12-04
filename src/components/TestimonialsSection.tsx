import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const playgroundTestimonials = [
  {
    text: "Our programs focus on each child's development in social-emotional growth, gross and fine motor skills, language and literacy, mathematics",
    name: "JANE COOPER",
    rating: 5
  },
  {
    text: "Our programs focus on each child's development in social-emotional growth, gross and fine motor skills, language and literacy, mathematics",
    name: "MEWE THOMAS",
    rating: 5
  },
  {
    text: "Our programs focus on each child's development in social-emotional growth, gross and fine motor skills, language and literacy, mathematics",
    name: "ALEXANDER SMITH",
    rating: 5
  },
  {
    text: "Our programs focus on each child's development in social-emotional growth, gross and fine motor skills, language and literacy, mathematics",
    name: "SARAH JOHNSON",
    rating: 5
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Grid Pattern (Optional, based on image hint) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center md:text-left mb-12 md:mb-16 ml-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-handwriting text-[hsl(var(--brand-dark-green))] mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#1A5D1A' }}>
            Parents Feedback
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight leading-none">
            WHAT DO PARENTS <br className="hidden md:block" /> SAY ABOUT US?
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {playgroundTestimonials.map((t, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="h-full rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: index % 2 === 0 ? '#FFE4D6' : '#D6F5E8' // Peach and Mint
                }}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-neutral-800 font-medium italic leading-relaxed mb-8">
                    “{t.text}”
                  </p>
                </div>

                <div className="font-black text-lg md:text-xl uppercase tracking-wide text-black">
                  {t.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
