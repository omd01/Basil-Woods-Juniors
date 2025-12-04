import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Navigation, Heart, Star, Stamp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";

/* -------- Google Forms -> Google Sheets -------- */
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeX0qEU5GusE3dA1hLL2D6ESzldibOLqzkQxcc1E4GEl7sUtg/formResponse";

const FIELDS = {
  parentName: "entry.30303845",
  phone: "entry.1553866235",
  email: "entry.10415235",
  childName: "entry.976590721",
  childAge: "entry.1030209812",
  program: "entry.1175709318",
  message: "entry.349457783",
};

const ContactUsPage: React.FC = () => {
  useSEO({
    title: "Contact Us - Schedule a Visit to Our Preschool",
    description: "Get in touch with Basil Woods Juniors Chennai. Call +91-8056179108, visit us in Chennai, Tamil Nadu, or schedule a campus tour. We're here to answer your questions about admissions, programs, and facilities.",
    keywords: "contact preschool Chennai, preschool admission enquiry, school visit Chennai, Basil Woods contact, preschool phone number Chennai, schedule school tour",
    canonical: "https://www.basilwoodschennai.in/contact"
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    const formEl = e.currentTarget as HTMLFormElement;
    const fd = new FormData(formEl);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
      setSubmitStatus("success");
      if (formEl && typeof formEl.reset === "function") {
        formEl.reset();
      }
      window.alert("Submitted Successfully");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      window.alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const contactInfo = [
    {
      title: "Visit Us",
      desc: "No. 10, Vinod Illam, 2nd St, RBI Colony, Thiruvanmiyur, Chennai",
      icon: MapPin,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      rotate: "rotate-1"
    },
    {
      title: "Call Us",
      desc: "+91 8056179108",
      icon: Phone,
      color: "bg-green-100",
      textColor: "text-green-600",
      rotate: "-rotate-1"
    },
    {
      title: "Email Us",
      desc: "Info.chennai@basilwoods.in",
      icon: Mail,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      rotate: "rotate-2"
    },
    {
      title: "Hours",
      desc: "Mon - Fri: 8:30 AM - 3:30 PM",
      icon: Clock,
      color: "bg-orange-100",
      textColor: "text-orange-600",
      rotate: "-rotate-2"
    },
  ];

  const faqs = [
    { q: "What curriculum?", a: "We follow the Cambridge curriculum." },
    { q: "Safety measures?", a: "CCTV, secure entry, and trained staff." },
    { q: "Outdoor play?", a: "Daily outdoor activities and motor skills." },
    { q: "Parent updates?", a: "Regular meetings and digital updates." },
    { q: "Meals provided?", a: "Breakfast & snacks provided. Lunch optional." },
    { q: "Age groups?", a: "2 years to 6 years." },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO - "The Welcome Desk" */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-pink-50">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        {/* Floating Elements */}
        <motion.div className="absolute top-20 right-10 text-pink-400 opacity-60" animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <MessageCircle className="w-16 h-16 fill-current" />
        </motion.div>
        <motion.div className="absolute bottom-20 left-10 text-orange-400 opacity-60" animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Mail className="w-16 h-16 fill-current" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-pink-600 border-2 border-pink-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Heart className="w-4 h-4 mr-2 inline fill-current" />
            We'd Love to Hear From You
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Say <span className="text-[hsl(var(--premium-orange))]">Hello!</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Whether you have a question or want to schedule a visit, our doors are always open.
          </p>
        </div>
      </section>

      {/* CONTACT INFO - "Signposts" */}
      <section className="py-20 bg-white border-b-8 border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, rotate: 0 }}
                  className={`bg-white p-6 rounded-xl shadow-md border-2 border-neutral-100 transform ${info.rotate} transition-all text-center group`}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${info.textColor}`} />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-2">{info.title}</h3>
                  <p className="text-sm text-neutral-600 font-medium">{info.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM & MAP - "Postcard & Treasure Map" */}
      <section className="py-20 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* FORM - "The Postcard" */}
            <div className="relative bg-white p-8 md:p-10 rounded-sm shadow-xl border border-neutral-200 transform -rotate-1">
              {/* Stamp */}
              <div className="absolute top-6 right-6 w-20 h-24 bg-neutral-50 border-4 border-dotted border-neutral-300 flex flex-col items-center justify-center transform rotate-3 opacity-80">
                <Stamp className="w-8 h-8 text-neutral-400 mb-1" />
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Postage</span>
              </div>

              <h2 className="text-3xl font-black text-neutral-800 font-handwriting mb-6">Drop Us a Line</h2>

              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Parent's Name</label>
                    <Input name={FIELDS.parentName} required className="border-0 border-b-2 border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phone</label>
                    <Input name={FIELDS.phone} required className="border-0 border-b-2 border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email</label>
                  <Input type="email" name={FIELDS.email} required className="border-0 border-b-2 border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent" placeholder="john@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Child's Name</label>
                    <Input name={FIELDS.childName} className="border-0 border-b-2 border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent" placeholder="Junior Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Child's Age</label>
                    <Input name={FIELDS.childAge} className="border-0 border-b-2 border-neutral-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent" placeholder="3 Years" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Program</label>
                  <select name={FIELDS.program} className="w-full border-0 border-b-2 border-neutral-200 rounded-none px-0 py-2 focus:ring-0 focus:border-[hsl(var(--premium-orange))] bg-transparent text-sm">
                    <option value="" disabled selected>Select a program</option>
                    <option>Toddlers (2 - 3 years)</option>
                    <option>Mont 1 (3 - 4 years)</option>
                    <option>Mont 2 (4 - 5 years)</option>
                    <option>Mont 3 (5 - 6 years)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Message</label>
                  <Textarea name={FIELDS.message} className="border-0 border-b-2 border-neutral-200 rounded-none px-0 min-h-[100px] focus-visible:ring-0 focus-visible:border-[hsl(var(--premium-orange))] bg-transparent resize-none" placeholder="How can we help?" />
                </div>

                <Button className="w-full bg-[hsl(var(--premium-orange))] hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-md mt-4" type="submit" disabled={submitting}>
                  <Send className="w-5 h-5 mr-2" />
                  {submitting ? "Sending..." : "Send Postcard"}
                </Button>
              </form>
            </div>

            {/* MAP - "Treasure Map" */}
            <div className="space-y-8">
              <div className="relative bg-[#fff9e6] p-4 rounded-2xl border-4 border-dashed border-orange-300 shadow-lg transform rotate-1">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-sm z-10">
                  <MapPin />
                </div>
                <div className="rounded-xl overflow-hidden h-80 border-2 border-orange-200">
                  <iframe
                    title="Basil Woods Juniors - Thiruvanmiyur, Chennai"
                    src="https://www.google.com/maps?q=Basil%20Woods%20Juniors%20Thiruvanmiyur%20Chennai&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-handwriting text-xl text-orange-800 font-bold">X Marks the Spot!</p>
                  <p className="text-sm text-orange-700">Come visit our learning paradise.</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Schedule Tour", icon: Calendar, color: "bg-blue-500" },
                  { title: "Download Brochure", icon: Navigation, color: "bg-green-500" },
                  { title: "WhatsApp Us", icon: MessageCircle, color: "bg-green-600" },
                  { title: "Get Directions", icon: MapPin, color: "bg-blue-500" },
                ].map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <Button key={i} className={`${action.color} hover:opacity-90 text-white h-auto py-4 rounded-xl flex flex-col items-center gap-2 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                      <span className="text-xs font-bold">{action.title}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ - "Info Kiosk" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-2">Info Kiosk</h2>
            <p className="text-neutral-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-50 p-6 rounded-xl border-l-4 border-[hsl(var(--premium-orange))] shadow-sm"
              >
                <h3 className="font-bold text-lg text-neutral-800 mb-2 flex items-start gap-2">
                  <span className="text-[hsl(var(--premium-orange))]">Q.</span> {f.q}
                </h3>
                <p className="text-neutral-600 text-sm pl-6">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
