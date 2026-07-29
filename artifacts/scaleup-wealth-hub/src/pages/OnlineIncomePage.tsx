import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertCircle, Target, Briefcase, PenTool, MonitorPlay, ShoppingBag, Globe, Headphones, Smartphone } from "lucide-react";

export default function OnlineIncomePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 reveal text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
            Explore Digital Income Opportunities
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            The digital economy is borderless. By developing high-income skills, you can create value and tap into global and local opportunities right from where you are.
          </p>
          
          {/* Important Disclaimer - Front and Center */}
          <div className="bg-[#17121A]/60 border border-accent/40 rounded-xl p-5 md:p-6 inline-block text-left max-w-3xl backdrop-blur-sm shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="bg-accent text-white rounded-full p-2 shrink-0 mt-1">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-accent font-bold text-lg mb-1 font-heading">Important Disclaimer</h4>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Results vary. Learning a skill does not guarantee income. Your success depends entirely on your effort, strategy, consistency, market demand, and execution. We provide education, not a get-rich-quick scheme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content: Paths */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              Understanding Digital Income Paths
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              There is no single "best" way to make money online. The right path depends on the skills you choose to learn, your personality, and the time you have to invest. Here are the most common proven paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Briefcase, title: "Freelancing", desc: "Offer your skills (writing, design, marketing) as services to clients on platforms like Upwork or Fiverr, or through direct outreach." },
              { icon: Target, title: "Digital Marketing Services", desc: "Help local or international businesses manage their social media, run ads, or improve their SEO for a monthly retainer." },
              { icon: MonitorPlay, title: "Content Creation", desc: "Build an audience on YouTube, TikTok, or a blog, and monetize through sponsorships, ads, and brand deals." },
              { icon: ShoppingBag, title: "Affiliate Marketing", desc: "Promote other people's products and earn a commission for every sale made through your unique referral link." },
              { icon: Globe, title: "Online Businesses", desc: "Start an e-commerce store, dropshipping business, or a service-based agency serving a specific niche." },
              { icon: Headphones, title: "Consulting", desc: "Once you master a skill, charge for your advice. Help others solve specific problems based on your expertise." },
              { icon: Smartphone, title: "Digital Products", desc: "Create once, sell infinitely. E-books, courses, templates, and software fall into this highly scalable category." },
              { icon: PenTool, title: "Remote Work", desc: "Get hired full-time or part-time by international companies looking for global talent in tech, support, or marketing." },
            ].map((path, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 hover-lift reveal transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <path.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">{path.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content: Formula */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-12">
            The Value Creation Formula
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            <div className="bg-muted w-full md:w-auto px-8 py-6 rounded-2xl border border-border font-heading font-bold text-xl text-primary">
              Valuable Skill
            </div>
            <div className="text-3xl font-bold text-accent">+</div>
            <div className="bg-muted w-full md:w-auto px-8 py-6 rounded-2xl border border-border font-heading font-bold text-xl text-primary">
              Real Problem
            </div>
            <div className="text-3xl font-bold text-accent">+</div>
            <div className="bg-muted w-full md:w-auto px-8 py-6 rounded-2xl border border-border font-heading font-bold text-xl text-primary">
              Visibility
            </div>
            <div className="text-3xl font-bold text-accent">=</div>
            <div className="bg-primary text-white w-full md:w-auto px-8 py-6 rounded-2xl shadow-lg font-heading font-bold text-xl">
              Opportunity
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Income is simply a byproduct of creating value. When you learn a digital skill, you learn how to solve problems (getting attention, writing copy, building sites). When you solve those problems for people who have money, you create an income opportunity.
          </p>
        </div>
      </section>

      <CTASection 
        headline="Ready To Build Your First Skill?"
        subtext="Don't get overwhelmed by the options. Pick one skill, focus on the fundamentals, and start practicing today."
        primaryBtnText="START LEARNING DIGITAL SKILLS"
        primaryBtnLink="/digital-marketing"
      />

      <Footer />
    </div>
  );
}
