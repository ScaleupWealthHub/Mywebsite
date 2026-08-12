import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroVisual } from "@/components/HeroVisual";
import { FeatureCard } from "@/components/FeatureCard";
import { SkillCard } from "@/components/SkillCard";
import { CTASection } from "@/components/CTASection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Edit3, TrendingUp, Presentation, Sparkles, 
  Video, Globe, Smartphone, UserPlus, PenTool, Lightbulb,
  Search, Zap, Target, Settings, Briefcase, Users, Hammer, MapPin, Bot, Star,
  Gift, Rocket, Award, Crown
} from "lucide-react";

export default function HomePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-left reveal">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-muted text-sm font-medium mb-6">
                Built for Nigerians ready to grow
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
                Turn Digital Skills Into New Opportunities.
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Learn digital marketing, AI tools, content creation and practical online business skills designed to help you build valuable skills for today's digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/digital-marketing">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-full w-full sm:w-auto">
                    START LEARNING
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg h-14 px-8 rounded-full w-full sm:w-auto">
                    EXPLORE DIGITAL SKILLS
                  </Button>
                </Link>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE PROBLEM */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              Your Phone Can Be More Than a Scrolling Device.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every day, millions of people spend hours online. The difference is learning how to use that same digital world to develop skills, create value and discover new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-l-4 border-primary rounded-r-2xl p-8 shadow-sm hover-lift reveal">
              <BookOpen className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">LEARN</h3>
              <p className="text-muted-foreground">Develop practical digital skills that are relevant in today's economy.</p>
            </div>
            
            <div className="bg-white border-l-4 border-accent rounded-r-2xl p-8 shadow-sm hover-lift reveal" style={{ transitionDelay: '0.1s' }}>
              <Edit3 className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">CREATE</h3>
              <p className="text-muted-foreground">Turn knowledge into useful content and solutions that people want.</p>
            </div>
            
            <div className="bg-white border-l-4 border-primary rounded-r-2xl p-8 shadow-sm hover-lift reveal" style={{ transitionDelay: '0.2s' }}>
              <TrendingUp className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">GROW</h3>
              <p className="text-muted-foreground">Build opportunities around the skills you develop and apply consistently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE TEACH */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              Skills That Matter In The Digital Economy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <SkillCard 
              icon={Presentation}
              title="Digital Marketing"
              description="Learn how businesses attract, engage and convert customers online."
              linkHref="/digital-marketing"
            />
            <SkillCard 
              icon={Bot}
              title="AI Tools"
              description="Learn how modern AI tools can improve productivity, content creation and workflows."
              linkHref="/ai-skills"
            />
            <SkillCard 
              icon={Video}
              title="Content Creation"
              description="Learn how to create useful and engaging content for social platforms."
              linkHref="/resources"
            />
            <SkillCard 
              icon={Globe}
              title="Online Business"
              description="Understand the foundations of building and growing an online business."
              linkHref="/online-income"
            />
            <SkillCard 
              icon={Smartphone}
              title="Social Media Marketing"
              description="Learn how to use social platforms strategically for growth."
              linkHref="/digital-marketing"
            />
            <SkillCard 
              icon={UserPlus}
              title="Personal Branding"
              description="Learn how to position your skills and knowledge online effectively."
              linkHref="/resources"
            />
          </div>
        </div>
      </section>

      {/* SECTION: DIGITAL MARKETING */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
                Digital Marketing Is A Skill. Learn How To Use It.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Digital marketing connects businesses with people online. Learning the fundamentals can help you understand content, social media, advertising, customer journeys, lead generation and conversion.
              </p>
              <Link href="/digital-marketing">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full">
                  LEARN DIGITAL MARKETING
                </Button>
              </Link>
            </div>
            
            <div className="reveal flex justify-center lg:justify-end">
              <div className="flex flex-col gap-4 relative">
                <div className="absolute left-8 top-8 bottom-8 w-1 border-l-2 border-dashed border-accent/50 z-0 hidden sm:block"></div>
                
                {[
                  { title: "CONTENT", icon: PenTool },
                  { title: "AUDIENCE", icon: Users },
                  { title: "ENGAGEMENT", icon: Zap },
                  { title: "LEADS", icon: Target },
                  { title: "CUSTOMERS", icon: Briefcase }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white border border-border shadow-sm rounded-xl p-4 pr-12 relative z-10 w-full sm:w-80 ml-auto transform transition-transform hover:-translate-x-2">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <step.icon className="text-accent w-6 h-6" />
                    </div>
                    <span className="font-heading font-bold text-lg text-foreground tracking-wide">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AI & TOOLS */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              AI Is Changing How We Work.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI is becoming part of modern business, marketing and content creation. The advantage isn't simply having access to AI — it's knowing how to use the tools effectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { title: "AI Content Creation", icon: Sparkles },
              { title: "Research", icon: Search },
              { title: "Productivity", icon: Zap },
              { title: "Marketing", icon: Target },
              { title: "Idea Generation", icon: Lightbulb },
              { title: "Automation", icon: Settings },
            ].map((tool, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6 hover-lift group reveal transition-all hover:border-primary/50">
                <tool.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:text-primary transition-colors" />
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{tool.title}</h3>
              </div>
            ))}
          </div>

          <Link href="/ai-skills" className="reveal inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full">
              EXPLORE AI TOOLS
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION: ONLINE INCOME */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-8 leading-tight">
              Build Skills. Create Value.<br />Explore New Income Opportunities.
            </h2>
            
            <div className="bg-black/30 border border-white/20 rounded-xl p-4 inline-block text-left max-w-2xl">
              <div className="flex gap-3 items-start">
                <div className="bg-accent text-white rounded-full p-1 mt-0.5 shrink-0">
                  <span className="font-bold text-sm px-2">!</span>
                </div>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  <strong>Important:</strong> Results vary. Learning a skill does not guarantee income. Your results depend on your skills, effort, strategy, consistency, market demand and other factors.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {[
              "Freelancing", "Digital Marketing", "Content Creation", "Affiliate Marketing", 
              "Online Businesses", "Consulting", "Remote Work", "Digital Products"
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/10 rounded-xl p-5 text-center hover:bg-white/20 transition-colors reveal">
                <Target className="w-6 h-6 text-accent mx-auto mb-3" />
                <h4 className="text-white font-semibold text-sm md:text-base">{item}</h4>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/online-income">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full">
                START YOUR JOURNEY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: WHY SCALEUP WEALTH HUB? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              Why ScaleUp Wealth Hub?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={Hammer}
              title="Practical Learning"
              description="Focus on skills you can actually apply. Less theory, more actionable strategies."
            />
            <FeatureCard 
              icon={Star}
              title="Beginner Friendly"
              description="Complex digital concepts explained simply so anyone can start learning."
            />
            <FeatureCard 
              icon={Bot}
              title="AI-Powered"
              description="Understand and leverage the modern AI tools shaping the digital economy."
            />
            <FeatureCard 
              icon={MapPin}
              title="Nigeria Focused"
              description="Content, strategies and examples tailored to be relevant to Nigerians."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Growth Mindset"
              description="Build enduring digital skills with a long-term perspective on value creation."
            />
            <FeatureCard 
              icon={Users}
              title="Community Focus"
              description="Learn, connect and grow with other individuals pursuing similar goals."
            />
          </div>
        </div>
      </section>

      {/* SECTION: FEATURED PRODUCT - 360 MILLIONAIRE AFFILIATE FORMULA */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-y-2 border-amber-200/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4 reveal">
              <span className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg">
                ⭐ HOT PROMOTION
              </span>
            </div>

            <div className="text-center reveal">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
                360 Millionaire Affiliate Formula
              </h2>
              <p className="text-xl md:text-2xl font-bold text-amber-600 mb-4">
                🚀 Your ₦15,000 Ticket to Financial Freedom
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                <span className="font-bold text-amber-700">FINALLY REVEALED!</span> The 360° side of affiliate marketing no one explains. A complete, step-by-step system showing beginners how to earn online using just their smartphone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all reveal">
                <Gift className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm mb-1">Affiliate & Sales Mastery</h4>
                <p className="text-xs text-muted-foreground">From scratch to your first $100</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all reveal" style={{ transitionDelay: '0.1s' }}>
                <Rocket className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm mb-1">Mindset Reprogramming</h4>
                <p className="text-xs text-muted-foreground">Kill fear & build consistency</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all reveal" style={{ transitionDelay: '0.2s' }}>
                <Crown className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm mb-1">Copywriting & Closing</h4>
                <p className="text-xs text-muted-foreground">High-converting sales messages</p>
              </div>
            </div>

            <div className="text-center bg-white/90 backdrop-blur-sm border-2 border-amber-300 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl reveal">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">₦35,000</p>
                  <p className="text-4xl font-bold text-accent">₦15,000</p>
                  <p className="text-xs text-amber-600 font-semibold">🔥 57% DISCOUNT</p>
                </div>
                <div className="border-l-2 border-amber-200 h-12 hidden sm:block"></div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-sm">Plus FREE Bonuses:</p>
                  <ul className="text-xs text-muted-foreground">
                    <li>✓ Club 360 Millionaires Mentorship</li>
                    <li>✓ Promotional Samples & Scripts</li>
                    <li>✓ WhatsApp DM Scripts</li>
                  </ul>
                </div>
              </div>

              <a 
                href="https://nestuge.com/rv4uz-tfq?affiliate=Ufi4xM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold h-16 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all w-full">
                  🚀 GET 360 MAF NOW — ₦15,000 ONLY
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                ⚡ Price increases soon! Secure your spot today.
              </p>
              <p className="text-xs text-amber-600 mt-2 font-medium">
                🔗 Affiliate Link: I earn a commission if you purchase
              </p>
            </div>

            <div className="text-center mt-6 reveal">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
                "Make your first $100 – $500 in as little as 7–30 days, even if you've never made $1 online before."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-white/10 z-0"></div>
            
            {[
              { step: "01", title: "CHOOSE A SKILL", desc: "Find the digital skill that interests you." },
              { step: "02", title: "LEARN", desc: "Understand the fundamentals and strategies." },
              { step: "03", title: "PRACTICE", desc: "Apply what you learn through real projects." },
              { step: "04", title: "GROW", desc: "Continue improving and explore ways to create value." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center reveal">
                <div className="w-12 h-12 bg-accent text-white font-bold font-heading rounded-full flex items-center justify-center mx-auto mb-6 text-xl shadow-lg border-4 border-secondary">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
              What Our Learners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* SECTION: NEWSLETTER */}
      <section className="py-20 bg-gradient-to-r from-accent to-[#F79B72]">
        <div className="container mx-auto px-4 text-center max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Get Digital Growth Tips
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Receive practical insights on digital marketing, AI tools and online business directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Preview mode: subscription disabled."); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow h-14 px-6 rounded-full border-none focus:ring-2 focus:ring-primary shadow-sm outline-none text-foreground"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full sm:w-auto w-full shrink-0 shadow-sm">
              JOIN THE HUB
            </Button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection 
        headline="Your Next Skill Could Change Your Next Chapter."
        subtext="Start learning today and begin building the digital skills that can help you navigate the opportunities of tomorrow."
        primaryBtnText="START LEARNING"
        primaryBtnLink="/digital-marketing"
        secondaryBtnText="FOLLOW SCALEUP WEALTH HUB"
        secondaryBtnLink="/contact"
      />

      <Footer />
    </div>
  );
}