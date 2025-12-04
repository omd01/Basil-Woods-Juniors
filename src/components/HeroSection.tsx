import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Star, Sun, Cloud, Heart, ArrowRight, Bird, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

/* Import images */
import picture1 from "../assets/Images/Hero1.png";
import picture2 from "../assets/Images/Hero2.png";
import picture3 from "../assets/Images/Hero3.png";

const phoneNumber = "918056179108";
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const HeroSection = () => {
  const navigate = useNavigate();
  const images = [picture1, picture2, picture3];
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[hsl(var(--light-orange))] overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-[hsl(var(--premium-yellow))]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ y: y2 }}
        >
          <Sun className="w-20 h-20 fill-current stroke-black stroke-2" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-white"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: y1 }}
        >
          <Cloud className="w-24 h-24 fill-white stroke-black stroke-2" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/3 text-blue-400"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bird className="w-10 h-10 stroke-black stroke-2" />
        </motion.div>

        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(var(--premium-pink)/0.1)] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[hsl(var(--premium-teal)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-block"
            >
              <div className="bg-white text-[hsl(var(--premium-orange))] px-6 py-2 rounded-full text-sm font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black mb-6 inline-flex items-center gap-2 transform -rotate-2">
                <Sparkles className="w-4 h-4" />
                ADMISSIONS OPEN 2025-26
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[hsl(var(--brand-dark-green))] leading-[1] tracking-tight mb-6 font-handwriting">
                Where Little <br className="hidden lg:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white px-2" style={{ textShadow: '4px 4px 0px black' }}>
                    Minds Bloom
                  </span>
                  <span className="absolute inset-0 bg-[hsl(var(--premium-pink))] transform -rotate-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 font-handwriting">
                A magical place where learning meets play. We nurture curiosity, creativity, and confidence in every child.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="w-full sm:w-auto bg-[hsl(var(--premium-orange))] text-white text-xl font-black px-8 py-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <Calendar className="w-6 h-6" />
                Book a Visit
              </motion.button>

              <motion.button
                onClick={() => window.open("https://www.youtube.com/watch?v=w4WyoDOi460", "_blank")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="w-full sm:w-auto bg-white text-[hsl(var(--brand-dark-green))] text-xl font-black px-8 py-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <Play className="w-6 h-6 fill-current" />
                Watch Video
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 flex items-center justify-center lg:justify-start gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting">15+</div>
                <div className="text-sm text-neutral-600 font-bold uppercase tracking-wide">Years of Joy</div>
              </div>
              <div className="w-0.5 h-12 bg-black/10 rotate-12" />
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting">500+</div>
                <div className="text-sm text-neutral-600 font-bold uppercase tracking-wide">Happy Families</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals - Cloud Frame */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ scale: 0.8, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              {/* Cloud Frame Background */}
              <div className="absolute inset-0 bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-2 z-0" />

              {/* Image Container */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden border-2 border-black z-10 bg-neutral-100">
                {images.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`Basil Woods slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active === idx ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 max-w-[220px] z-20 transform -rotate-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-pink-100 p-3 rounded-full border-2 border-black">
                  <Heart className="w-6 h-6 text-pink-500 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-black uppercase tracking-wider">Rated #1</div>
                  <div className="text-lg font-black text-neutral-900 leading-tight">Best Preschool</div>
                </div>
              </motion.div>

              {/* Decorative Star */}
              <motion.div
                className="absolute -top-10 -right-10 text-yellow-400 z-20"
                animate={{ rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Star className="w-20 h-20 fill-current stroke-black stroke-2" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
