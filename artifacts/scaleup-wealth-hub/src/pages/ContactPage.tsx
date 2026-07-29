import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted text-center border-b border-border">
        <div className="container mx-auto px-4 reveal max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1] mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have a question, need guidance, or want to connect? We'd love to hear from you. Reach out using any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Left: Form */}
            <div className="lg:col-span-3 reveal">
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-2 flex flex-col gap-8 reveal">
              
              <div className="bg-secondary text-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold font-heading mb-6">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/60 font-semibold uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:hello@scaleupwealthhub.com" className="text-lg font-medium hover:text-accent transition-colors">
                        hello@scaleupwealthhub.com
                      </a>
                      <p className="text-xs text-white/40 mt-1">(Placeholder email)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/60 font-semibold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-lg font-medium">Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-heading font-bold mb-4">Fastest Response</h4>
                  <a 
                    href="https://wa.me/[YOUR-WHATSAPP-NUMBER]" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 rounded-xl transition-colors shadow-lg"
                  >
                    <SiWhatsapp size={24} />
                    CHAT ON WHATSAPP
                  </a>
                  <p className="text-xs text-center text-white/40 mt-3">Link placeholder - update with real number</p>
                </div>
              </div>

              <div className="bg-muted border border-border rounded-2xl p-8 text-center">
                <h3 className="font-heading font-bold text-foreground mb-6">Connect On Social Media</h3>
                <div className="flex justify-center flex-wrap gap-4">
                  {[
                    { icon: SiFacebook, color: "hover:bg-[#1877F2]", name: "Facebook" },
                    { icon: SiInstagram, color: "hover:bg-[#E4405F]", name: "Instagram" },
                    { icon: SiTiktok, color: "hover:bg-[#000000]", name: "TikTok" },
                    { icon: SiYoutube, color: "hover:bg-[#FF0000]", name: "YouTube" },
                    { icon: FaLinkedin, color: "hover:bg-[#0A66C2]", name: "LinkedIn" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className={`bg-white border border-border w-12 h-12 rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:text-white hover:border-transparent ${social.color} hover:-translate-y-1`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
