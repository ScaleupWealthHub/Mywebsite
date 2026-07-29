import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, PenTool, Share2, Mail, BarChart3, Target } from "lucide-react";

export default function DigitalMarketingPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary z-0"></div>
        <div className="container mx-auto px-4 relative z-10 reveal max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
            Digital Marketing: The Skill That Connects Businesses With People
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Learn the foundational principles of online marketing. Discover how to attract audiences, engage customers, and drive growth in the digital economy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl prose-p:text-muted-foreground prose-headings:font-heading prose-headings:text-foreground mx-auto mb-20 reveal">
            <h2>What is Digital Marketing?</h2>
            <p>
              At its core, digital marketing is simply marketing that happens online. It's how modern businesses connect with potential customers where they spend most of their time: on their phones, social media, and search engines.
            </p>
            <p>
              Whether you want to grow your own business, offer services as a freelancer, or build a career, understanding digital marketing is one of the highest-leverage skills you can develop today.
            </p>
          </div>

          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12 reveal">
            The Core Pillars of Digital Marketing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              { icon: Search, title: "Search Engine Optimization (SEO)", desc: "Understanding how to make websites and content show up on Google when people search for relevant topics." },
              { icon: PenTool, title: "Content Marketing", desc: "Creating valuable, relevant content (articles, videos, graphics) to attract and retain a clearly defined audience." },
              { icon: Share2, title: "Social Media Marketing", desc: "Using platforms like Instagram, TikTok, LinkedIn, and Facebook to build brand awareness and drive engagement." },
              { icon: Mail, title: "Email Marketing", desc: "Building a list of subscribers and communicating with them directly to nurture relationships and drive sales." },
              { icon: Target, title: "Paid Advertising", desc: "Using platforms like Facebook Ads and Google Ads to reach specific audiences quickly for a fee." },
              { icon: BarChart3, title: "Analytics & Data", desc: "Measuring what works and what doesn't to improve strategies over time." },
            ].map((pillar, i) => (
              <div key={i} className="bg-muted p-8 rounded-2xl border border-border hover-lift reveal">
                <pillar.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 reveal">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-6">
              Why Learn Digital Marketing?
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>High Demand:</strong> Every business needs customers, which means every business needs marketing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>Low Barrier to Entry:</strong> You can learn the fundamentals with just a smartphone and internet connection.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>Scalable Income Potential:</strong> Skills can be applied to freelance clients, a full-time job, or your own products.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span><strong>Transferable:</strong> Marketing principles apply to almost any industry or niche.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Start Your Learning Journey"
        subtext="Dive into our resources and start mastering the digital marketing skills that businesses are looking for."
        primaryBtnText="VIEW RESOURCES"
        primaryBtnLink="/resources"
      />

      <Footer />
    </div>
  );
}
