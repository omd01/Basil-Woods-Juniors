import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Car, Shield, Heart, Calendar, School, Trees, Drama, BookOpen, Palette, ShieldCheck } from "lucide-react";
import picture1 from "@/assets/Images/Picture5.webp";
import picture2 from "@/assets/Images/Picture3.webp";

const WaveTop = ({ fill = "#e9eefc" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#e3e9fb" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    </svg>
  </div>
);

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: School,
      title: "Inspiring Learning Spaces",
      desc: "Spacious, airy classrooms with child-friendly furniture and a vibrant environment that inspires curiosity.",
      features: ["Bright natural lighting", "Child-safe furniture & materials", "Ergonomic learning corners"],
    },
    {
      icon: Trees,
      title: "Outdoor Exploration Zones",
      desc: "Green play areas with safe equipment and sensory corners for exploration and movement.",
      features: ["Safe climbing structures", "Shady garden spots", "Butterfly & sensory gardens"],
    },
    {
      icon: Drama,
      title: "Performance & Expression Stage",
      desc: "A simple stage for music, dance, role-play, and storytelling to build confidence.",
      features: ["Mini stage", "Audio & music setup", "Costume & props"],
    },
    {
      icon: BookOpen,
      title: "Engaging Reading Corners",
      desc: "Cozy library spaces with picture books and early readers for quiet discovery.",
      features: ["Age-appropriate storybooks", "Interactive kits", "Comfortable nooks"],
    },
    {
      icon: Palette,
      title: "Creative Arts Studio",
      desc: "A tidy art space to explore colors, textures, and expression.",
      features: ["Child-safe supplies", "Display walls", "Easy-clean stations"],
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure Campus",
      desc: "Comprehensive safety measures for peace of mind.",
      features: ["24/7 CCTV", "Secure entry", "On-site medical kit"],
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
      <WaveTop fill="#e9eefc" />

      {/* very soft shapes */}
      <div className="absolute top-16 right-8 w-10 h-10 rounded-2xl opacity-15" style={{ backgroundColor: "hsl(var(--premium-yellow))" }} />
      <div className="absolute bottom-16 left-12 w-8 h-8 rounded-full opacity-15" style={{ backgroundColor: "hsl(var(--premium-teal))" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <Badge className="px-4 py-2 rounded-full font-medium mb-3 text-white inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}>
            <School className="w-4 h-4" />
            Our Chennai Campus
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-2">
            Thoughtfully Designed Learning Spaces
          </h2>
          <p className="text-neutral-700 text-base md:text-lg">
            Where culture meets modern safety—calm, organized, and child-centered.
          </p>
        </div>

        {/* Photos — reduced effects */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* First Card */}
          <div className="relative group">
            <img
              src={picture1}
              alt="Child engaging in creative activity"
              className="w-full h-[300px] object-cover rounded-2xl shadow-sm border border-[hsl(var(--neutral-100))] transition-all hover:shadow-md"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <h4
                className="font-semibold mb-1"
                style={{ color: "hsl(var(--premium-teal))" }}
              >
                Creative Exploration
              </h4>
              <p className="text-neutral-700 text-sm">
                Hands-on activities that encourage curiosity, focus, and imaginative
                learning.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative group">
            <img
              src={picture2}
              alt="Teacher with children in group learning"
              className="w-full h-[300px] object-cover rounded-2xl shadow-sm border border-[hsl(var(--neutral-100))] transition-all hover:shadow-md"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <h4
                className="font-semibold mb-1"
                style={{ color: "hsl(var(--premium-purple))" }}
              >
                Collaborative Learning
              </h4>
              <p className="text-neutral-700 text-sm">
                Children learn together in guided group sessions, building teamwork and
                communication.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities — toned down */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {facilities.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <Card key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-[hsl(var(--neutral-100))] transition-all hover:shadow-md hover:-translate-y-[2px]">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "hsl(var(--neutral-50))" }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: "hsl(var(--premium-orange))" }} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-neutral-800 text-center mb-2">{f.title}</h3>
                <p className="text-neutral-700 text-center mb-4 leading-relaxed text-sm">{f.desc}</p>

                <ul className="space-y-2">
                  {f.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "hsl(var(--premium-orange))" }} />
                      <span className="text-sm text-neutral-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>

      <WaveBottom fill="#e3e9fb" />
    </section>
  );
};

export default FacilitiesSection;
