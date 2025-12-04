import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X, Calendar, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/BWJ Logos.png";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Parent Corner", path: "/partners" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "Other Campuses", path: "/campuses" },
  ];

  const phoneNumber = "918056179108";
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };



  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Chalkboard Style */}
      <div className="bg-[hsl(var(--brand-dark-green))] text-white py-2 hidden md:block relative z-50 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-bold tracking-wide font-handwriting">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+91 8056179108</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
              Admissions Open 2025-26
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b-2 border-neutral-100"
          : "bg-white py-4 border-b-2 border-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* Logo - Sticker Style */}
            <Link to="/" className="relative z-50 group">
              <motion.div
                className="bg-white rounded-full p-2 border-2 border-dashed border-neutral-300 shadow-sm group-hover:border-orange-400 transition-colors"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt="Basil Woods Juniors"
                  className={`transition-all duration-300 object-contain ${scrolled ? "w-12 h-12" : "w-16 h-16 md:w-20 md:h-20"}`}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Tab Style */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${isActive
                        ? "bg-yellow-100 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        : "border-transparent text-neutral-600 hover:bg-neutral-50 hover:border-neutral-200"
                        }`}
                      whileHover={!isActive ? { y: -2 } : {}}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleWhatsAppRedirect}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex bg-green-500 text-white rounded-full p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-green-400 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="hidden md:flex bg-white text-[hsl(var(--premium-orange))] font-bold rounded-xl px-5 py-2.5 border-2 border-[hsl(var(--premium-orange))] shadow-[4px_4px_0px_0px_hsl(var(--premium-orange))] hover:shadow-[6px_6px_0px_0px_hsl(var(--premium-orange))] transition-all items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <a href="/contact"><span>Book a Visit</span></a>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg bg-yellow-100 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Notebook Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#fffdf5] pt-28 px-6 lg:hidden overflow-y-auto"
            style={{
              backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px)`,
              backgroundSize: '100% 40px'
            }}
          >
            {/* Red Margin Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-300/50" />

            <div className="flex flex-col gap-6 pl-8 translate-y-1  relative z-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl font-handwriting font-bold transition-colors ${location.pathname === item.path
                      ? "text-[hsl(var(--premium-orange))]"
                      : "text-neutral-700 hover:text-black"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-500 text-white font-bold py-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-lg"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Chat on WhatsApp
                </Button>

                <Button
                  className="w-full bg-white text-[hsl(var(--premium-orange))] font-bold py-6 rounded-xl border-2 border-[hsl(var(--premium-orange))] shadow-[4px_4px_0px_0px_hsl(var(--premium-orange))] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-lg"
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Book a Visit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;