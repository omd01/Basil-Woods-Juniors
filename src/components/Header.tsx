import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X, Calendar } from "lucide-react";
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
      {/* Top Bar - Dark & Premium */}
      <div className="bg-[hsl(var(--brand-dark-green))] text-white py-2 hidden md:block relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-[hsl(var(--premium-orange))]" />
              <span>+91 8056179108</span>
            </div>
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
              <MapPin className="w-3.5 h-3.5 text-[hsl(var(--premium-teal))]" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white/10 px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
              Admissions Open 2025-26
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md border-neutral-200/50 py-2"
            : "bg-white border-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="relative z-50 group">
              <motion.img
                src={logo}
                alt="Basil Woods Juniors"
                className={`transition-all duration-300 ${scrolled ? "w-14 h-14" : "w-16 h-16 md:w-20 md:h-20"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/50 p-1.5 rounded-full border border-neutral-200/50">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-neutral-200/50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-[hsl(var(--brand-dark-green))]" : "text-neutral-600 hover:text-neutral-900"}`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                onClick={handleWhatsAppRedirect}
                className="hidden md:flex bg-[hsl(var(--premium-green))] hover:bg-[hsl(var(--brand-dark-green))] text-white rounded-full px-5 shadow-lg shadow-green-500/20 transition-all hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Chat with Us
              </Button>

              <Button
                variant="outline"
                className="hidden md:flex border-[hsl(var(--premium-orange))] text-[hsl(var(--premium-orange))] hover:bg-[hsl(var(--premium-orange))] hover:text-white rounded-full px-5 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Visit
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-4 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
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
                    className={`block p-4 rounded-xl text-lg font-medium transition-colors ${location.pathname === item.path
                        ? "bg-[hsl(var(--premium-orange))/10] text-[hsl(var(--premium-orange))]"
                        : "text-neutral-600 hover:bg-neutral-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-[hsl(var(--premium-green))] text-white py-6 rounded-xl text-lg"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
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