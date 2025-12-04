import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Star, Sun, Cloud, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

/* Import images */
import picture1 from "../assets/Images/Picture1.webp";
import picture2 from "../assets/Images/Picture2.webp";
import picture3 from "../assets/Images/Picture3.webp";

const phoneNumber = "918056179108";
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const HeroSection = () => {
  const images = [picture1, picture2, picture3];
  const [active, setActive] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[hsl(var(--light-orange))] overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-[hsl(var(--premium-yellow))]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sun className="w-16 h-16 opacity-40" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-[hsl(var(--premium-teal))]"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cloud className="w-20 h-20 opacity-30" />
        </motion.div>

        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(var(--premium-pink)/0.1)] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[hsl(var(--premium-teal)/0.1)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white text-[hsl(var(--premium-orange))] px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-orange-100 mb-6 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Admissions Open for 2025-26
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[hsl(var(--brand-dark-green))] leading-[1.1] tracking-tight mb-4">
                Where Little <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--premium-orange))] to-[hsl(var(--premium-pink))]">
                  Minds Bloom
                </span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A magical place where learning meets play. We nurture curiosity, creativity, and confidence in every child.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-[hsl(var(--premium-orange))] hover:bg-[hsl(var(--premium-orange)/0.9)] text-white text-lg font-bold shadow-lg shadow-orange-500/20 transition-transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Book a Visit
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl border-2 border-[hsl(var(--brand-dark-green))] text-[hsl(var(--brand-dark-green))] hover:bg-[hsl(var(--brand-dark-green)/0.05)] text-lg font-bold"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Video
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-4 flex items-center justify-center lg:justify-start gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-[hsl(var(--brand-dark-green))]">15+</div>
                <div className="text-sm text-neutral-500 font-medium">Years of Joy</div>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-[hsl(var(--brand-dark-green))]">500+</div>
                <div className="text-sm text-neutral-500 font-medium">Happy Families</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              {/* Organic Blob Shape Mask */}
              <div className="absolute inset-0 bg-[hsl(var(--premium-teal))] rounded-[3rem] rotate-3 opacity-10 scale-105" />
              <div className="absolute inset-0 bg-[hsl(var(--premium-orange))] rounded-[3rem] -rotate-2 opacity-10 scale-105" />

              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-0 hover:rotate-1 transition-transform duration-500">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3 max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-[hsl(var(--premium-pink)/0.1)] p-2 rounded-full">
                  <Heart className="w-6 h-6 text-[hsl(var(--premium-pink))] fill-current" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Rated</div>
                  <div className="text-sm font-bold text-neutral-800">Best Preschool</div>
                </div>
              </motion.div>

              {/* Decorative Star */}
              <motion.div
                className="absolute -top-8 -right-8 text-[hsl(var(--premium-yellow))]"
                animate={{ rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Star className="w-16 h-16 fill-current" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
