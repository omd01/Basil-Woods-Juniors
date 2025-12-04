import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, Award, Star, Sparkles, Leaf, BookOpen, Palette, Heart } from "lucide-react";

/* Import exactly 3 images from src/assets */
import picture1 from "../assets/Images/Picture1.webp";
import picture2 from "../assets/Images/Picture2.webp";
import picture3 from "../assets/Images/Picture3.webp";
import { FaWhatsapp } from 'react-icons/fa';


const phoneNumber = "918056179108"; // ✅ Use full number with country code
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};


/* Site-standard waves */
const WaveTop = ({ fill = "#f2ede6" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#f6eee7" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const HeroSection = () => {
  // Carousel state
  const images = [picture1, picture2, picture3];
  const [active, setActive] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section
      className="
        relative bg-section-1 overflow-hidden flex items-center
        min-h-[calc(100vh-var(--header-h))] pt-[max(env(safe-area-inset-top),0px)]
      "
    >
      {/* Subtle decorative shapes */}
      <div className="absolute top-12 left-4 w-8 h-8 bg-gradient-primary rounded-2xl opacity-25" />
      <div className="absolute bottom-16 right-6 w-7 h-7 bg-gradient-secondary rounded-full opacity-25" />
      <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-accent rounded-xl opacity-20" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content (unchanged) */}
          <div className="space-y-4">
            <Badge className="bg-gradient-primary text-white px-4 py-2 rounded-full border-none font-medium inline-block text-xs lg:text-sm">
              <Sparkles className="w-4 h-4 inline-block mr-1.5" />
              Welcome to Basil Woods Juniors Chennai
            </Badge>

            <h1 className="text-[30px] leading-[1.15] lg:text-[55px] font-bold text-[#0F854D]">
              Where Little Minds
              <span className="block text-gradient">Bloom & Grow</span>
            </h1>

            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-md">
              Nurturing young learners in Chennai through play-based education, cultural values, and endless possibilities.
            </p>

            {/* CTA Buttons — standardized */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                onClick={handleWhatsAppRedirect}
              >
                <FaWhatsapp className="w-5 h-5" />
                Contact Us
              </Button>
              <a
                href="https://www.youtube.com/watch?v=w4WyoDOi460"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                  style={{ borderColor: "hsl(var(--premium-orange))", color: "hsl(var(--premium-orange))" }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Story
                </Button>
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2.5">
              <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full text-[12px] border border-[hsl(var(--neutral-100))]">
                <Star className="w-4 h-4" style={{ color: "hsl(var(--premium-yellow))" }} />
                <span className="text-neutral-700 font-medium">15+ Years</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full text-[12px] border border-[hsl(var(--neutral-100))]">
                <Users className="w-4 h-4" style={{ color: "hsl(var(--premium-teal))" }} />
                <span className="text-neutral-700 font-medium">500+ Families</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full text-[12px] border border-[hsl(var(--neutral-100))]">
                <Award className="w-4 h-4" style={{ color: "hsl(var(--premium-pink))" }} />
                <span className="text-neutral-700 font-medium">Award Winning</span>
              </div>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-4 gap-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-[hsl(var(--neutral-100))] shadow-sm max-w-lg">
              {[
                { icon: Palette, label: "Culture", chip: "hsl(var(--premium-orange))" },
                { icon: Leaf, label: "Nature", chip: "hsl(var(--premium-teal))" },
                { icon: BookOpen, label: "Learning", chip: "hsl(var(--premium-purple))" },
                { icon: Sparkles, label: "Arts", chip: "hsl(var(--premium-pink))" },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <div
                      className="w-11 h-11 mx-auto mb-1.5 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform hover:-translate-y-[1px]"
                      style={{ backgroundColor: item.chip }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-700">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image Carousel */}
          <div className="relative w-full">
            <div className="relative z-10 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-20" />
              {/* Slides */}
              <div className="relative h-[300px] sm:h-[360px] md:h-[380px] lg:h-[440px] xl:h-[460px]">
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Basil Woods slide ${idx + 1}`}
                    className={`
                      absolute inset-0 w-full h-full object-cover rounded-2xl border-4 border-white
                      transition-opacity duration-700 ease-in-out
                      ${active === idx ? "opacity-100" : "opacity-0"}
                    `}
                  />
                ))}
              </div>

              {/* Floating badge */}
              <div
                className="absolute bottom-3 right-3 rounded-lg px-3 py-1.5 shadow-sm"
                style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
              >
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-white fill-white" />
                  <span className="text-white text-[12px] font-semibold">Rooted in Values</span>
                </div>
              </div>
            </div>

            {/* Soft background tints */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-primary rounded-full opacity-15 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-secondary rounded-full opacity-15 -z-10" />

            {/* Dots indicator (subtle, theme-consistent) */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className="block w-2 h-2 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      active === idx ? "hsl(var(--premium-orange))" : "hsl(var(--neutral-100))",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator wave to next section */}
      <WaveBottom fill="#f6eee7" />
    </section>
  );
};

export default HeroSection;
