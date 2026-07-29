import { Link } from "wouter";
import { Zap } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#17121A] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                ScaleUp Wealth Hub
              </span>
            </Link>
            <p className="text-white/70 font-medium mt-2">
              Digital Skills. Smart Strategies. More Income.
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Helping Nigerians learn practical digital skills to create additional income opportunities in the modern economy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Learn</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              <li><Link href="/digital-marketing" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
              <li><Link href="/ai-skills" className="hover:text-accent transition-colors">AI & Skills</Link></li>
              <li><Link href="/online-income" className="hover:text-accent transition-colors">Online Income</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-white/5 hover:bg-accent p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-accent p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-accent p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <SiTiktok size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#25D366] p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <SiWhatsapp size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-accent p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <SiYoutube size={20} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#0077b5] p-3 rounded-full transition-colors text-white/90 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2026 ScaleUp Wealth Hub. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
