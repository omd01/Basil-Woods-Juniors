import React from "react";
import { motion } from "framer-motion";
import logo from "/BWJ Logos.png";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Heart,
  ArrowRight
} from "lucide-react";
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/building" },
    { name: "Gallery", href: "/gallery" },
    // { name: "Parent Resources", href: "/partners" },
    { name: "Contact", href: "/contact" }
  ];

  const programs = [
    { name: "Toddlers (2-3 years)", href: "/programs" },
    { name: "Mont 1 (3-4 years)", href: "/programs" },
    { name: "Mont 2 (4-5 years)", href: "/programs" },
    { name: "Mont 3 (5-6 years)", href: "/programs" }
  ];

  const resources = [
    { name: "Admission Process", href: "/building" },
    { name: "Fee Structure", href: "/building" },
    { name: "School Calendar", href: "/building" },
    { name: "Parent Portal", href: "/building" }
  ];

  return (
    <footer className="bg-[hsl(var(--brand-dark-green))] text-white relative overflow-hidden pt-20 pb-10">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-white transform -rotate-12">
          <Star className="w-12 h-12" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-20 right-10 text-white transform rotate-12">
          <Heart className="w-16 h-16" strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-white p-4 rounded-full border-4 border-dashed border-neutral-300 shadow-[0px_0px_0px_4px_rgba(255,255,255,0.2)]"
            >
              <img
                src={logo}
                alt="Basil Woods Juniors Logo"
                className="w-20 h-20 object-contain"
              />
            </motion.div>

            <div>
              <h3 className="text-2xl font-black font-handwriting text-yellow-400 mb-2">BASIL WOODS</h3>
              <p className="text-sm font-bold tracking-widest uppercase text-white/80">Juniors Chennai</p>
            </div>

            <p className="text-white/80 text-sm leading-relaxed font-medium">
              "You really can change the world if you care enough."
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/90 leading-tight pt-1">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-green-400 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/90">+91 8056179108</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-pink-400 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/90">Info.chennai@basilwoods.in</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: "Quick Links", links: quickLinks, color: "text-yellow-400" },
            { title: "Programs", links: programs, color: "text-pink-400" },
            { title: "Resources", links: resources, color: "text-teal-400" }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className={`font-black text-xl mb-6 font-handwriting ${section.color} border-b-2 border-white/10 pb-2 inline-block`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <ArrowRight className={`w-4 h-4 ${section.color} transform group-hover:translate-x-1 transition-transform`} />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Socials & Bottom Bar */}
        <div className="border-t-2 border-dashed border-white/20 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Social Buttons */}
            <div className="flex gap-4">
              {[
                { icon: RiFacebookCircleFill, href: "https://www.facebook.com/people/Basil-Woods-Juniors-International-Pre-School-Day-Care-Chennai/61576063646448/?checkpoint_src=any", color: "text-blue-600" },
                { icon: RiInstagramFill, href: "https://www.instagram.com/basilwoodsjuniors_chennai", color: "text-red-500" },
                { icon: RiYoutubeFill, href: "https://www.youtube.com/@BWJChennai", color: "text-red-600" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all border-2 border-transparent hover:border-white/50"
                >
                  <social.icon className={`w-6 h-6 ${social.color}`} />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm mb-1">
                © 2024 Basil Woods Juniors Chennai.
              </p>
              <a href="https://www.talentronaut.in/" target="_blank" rel="noopener noreferrer"><p className="text-white/40 text-xs flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="w-3 h-3 fill-red-500 text-red-500" /> by Talentronaut Technologies Pvt Ltd
              </p></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
