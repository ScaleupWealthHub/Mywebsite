import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, Search, Zap, Target, Lightbulb, Settings, Bot, Laptop, Smartphone } from "lucide-react";

export default function AISkillsPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#17121A] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 reveal max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
            <Bot size={16} /> The Future of Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
            AI Tools: Work Smarter In The Digital Economy
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Artificial Intelligence isn't here to replace you — it's here to empower you. Learn how to leverage modern AI tools to accelerate your digital growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              Why AI Skills Matter Now
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The gap in the modern workforce isn't between those who use AI and those who don't. It's between those who know <em>how to prompt and guide</em> AI effectively, and those who expect it to do everything perfectly on the first try. AI is a powerful assistant that amplifies your existing skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { icon: Sparkles, title: "Content Creation", desc: "Use AI to draft blog posts, social media captions, email newsletters, and video scripts faster than ever before." },
              { icon: Search, title: "Deep Research", desc: "Synthesize large amounts of information quickly. Use AI to understand complex topics, analyze trends, and summarize data." },
              { icon: Zap, title: "Productivity", desc: "Automate repetitive tasks, organize your schedule, and get more done in less time with AI assistants." },
              { icon: Target, title: "Marketing Strategy", desc: "Generate campaign ideas, analyze competitor strategies, and refine your marketing approach using AI insights." },
              { icon: Lightbulb, title: "Idea Generation", desc: "Overcome creative block. Use AI as a brainstorming partner to generate hundreds of angles for your next project." },
              { icon: Settings, title: "Workflow Automation", desc: "Connect AI tools with your existing apps to build systems that work for you while you sleep." },
            ].map((tool, i) => (
              <div key={i} className="bg-muted border border-border p-8 rounded-2xl hover-lift reveal transition-colors hover:bg-white hover:border-primary/30">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{tool.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                Getting Started With AI
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                You don't need to be a programmer to use AI effectively. The most important skill is <strong>prompt engineering</strong> — the ability to ask the right questions and provide clear context.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg h-fit">
                    <Laptop className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-lg mb-1">Start Small</h4>
                    <p className="text-white/60 text-sm">Pick one task you do regularly (like writing emails) and use an AI tool to help you draft them for a week.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg h-fit">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-lg mb-1">Provide Context</h4>
                    <p className="text-white/60 text-sm">Don't just ask "write a post." Tell the AI your audience, your tone, your goal, and give it examples of what you like.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg h-fit">
                    <Smartphone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-lg mb-1">Iterate and Refine</h4>
                    <p className="text-white/60 text-sm">The first output is rarely perfect. Tell the AI what to change, what to keep, and how to improve the result.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md reveal">
              <h3 className="text-xl font-bold font-heading text-white mb-6">Anatomy of a Good Prompt</h3>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">Role</span>
                  <p className="text-white/90 font-mono text-sm">"Act as an expert digital marketer for a Nigerian audience..."</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">Task</span>
                  <p className="text-white/90 font-mono text-sm">"Write 3 engaging Instagram captions about learning AI skills..."</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">Context</span>
                  <p className="text-white/90 font-mono text-sm">"The target audience is young professionals looking for side income..."</p>
                </div>
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">Format</span>
                  <p className="text-white/90 font-mono text-sm">"Keep it under 150 words, include relevant emojis, and end with a question."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Ready to supercharge your skills?"
        subtext="Check out our resources to find practical guides on using the latest AI tools for business and marketing."
        primaryBtnText="BROWSE AI RESOURCES"
        primaryBtnLink="/resources"
      />

      <Footer />
    </div>
  );
}
