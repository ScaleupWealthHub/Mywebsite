import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search } from "lucide-react";

export default function ResourcesPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      category: "Digital Skills",
      title: "5 Digital Skills Nigerians Can Learn In 2026",
      description: "Discover five practical digital skills that are in demand and accessible for anyone with a smartphone or laptop and internet access.",
      date: "Jan 12, 2026"
    },
    {
      category: "Digital Marketing",
      title: "How To Start Learning Digital Marketing",
      description: "A beginner's guide to understanding digital marketing, avoiding overwhelm, and taking your first steps toward mastery.",
      date: "Jan 18, 2026"
    },
    {
      category: "AI Tools",
      title: "How AI Is Changing Digital Marketing",
      description: "Explore how artificial intelligence is reshaping the way businesses market themselves online, and how you can adapt.",
      date: "Feb 02, 2026"
    },
    {
      category: "Mobile Learning",
      title: "How To Use Your Smartphone To Learn A Digital Skill",
      description: "Your smartphone is a powerful learning tool. Here's how to make the most of it when you don't have access to a laptop.",
      date: "Feb 15, 2026"
    },
    {
      category: "Marketing",
      title: "Digital Marketing vs Traditional Marketing",
      description: "Understanding the key differences and why digital marketing matters so much in today's fast-paced world.",
      date: "Mar 04, 2026"
    },
    {
      category: "Personal Branding",
      title: "How To Build An Online Personal Brand",
      description: "Step-by-step guidance on positioning your skills, sharing your knowledge online, and attracting the right opportunities.",
      date: "Mar 22, 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted text-center border-b border-border">
        <div className="container mx-auto px-4 reveal max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1] mb-6">
            Digital Growth Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Practical guides, articles, and insights for Nigerians building digital skills and exploring online business.
          </p>
          
          {/* Search Bar UI */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="w-full h-14 pl-12 pr-4 rounded-full border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground transition-all"
              placeholder="Search articles, guides, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard 
                key={index}
                category={article.category}
                title={article.title}
                description={article.description}
                date={article.date}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center reveal">
            <p className="text-muted-foreground italic">More resources coming soon...</p>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Never Miss An Update"
        subtext="Join our community to get the latest digital skills tips and strategies sent straight to your inbox."
        primaryBtnText="SUBSCRIBE TO NEWSLETTER"
        primaryBtnLink="/contact"
      />

      <Footer />
    </div>
  );
}
