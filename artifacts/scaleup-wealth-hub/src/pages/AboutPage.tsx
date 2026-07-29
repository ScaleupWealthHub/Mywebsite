import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, MapPin, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white text-center relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 relative z-10 reveal max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1] mb-6">
            Welcome To <span className="text-gradient">ScaleUp Wealth Hub.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We help Nigerians understand the opportunities available in today's digital economy and develop practical skills that can open new doors.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-border reveal">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-8">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                The digital economy has fundamentally changed how we work, learn, and create wealth. Yet, many people still view their smartphones and laptops merely as entertainment devices, unaware of the immense potential right at their fingertips.
              </p>
              <p>
                <strong>ScaleUp Wealth Hub</strong> was created to bridge this gap. We believe that with the right guidance, practical skills, and consistent effort, anyone can tap into the borderless opportunities of the internet.
              </p>
              <p>
                We focus on high-leverage digital skills—like digital marketing, AI utilization, and content creation—because these are the engines driving modern businesses. Whether you are a student looking for side income, a professional seeking to pivot, or an entrepreneur aiming to scale, understanding the digital landscape is your competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Placeholder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center reveal">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Meet The Founder</h2>
            <p className="text-muted-foreground">The vision behind ScaleUp Wealth Hub.</p>
          </div>

          <div className="flex flex-col items-center">
            {/* Founder Photo Placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-secondary/10 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center p-6 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4D2D8C_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <Users className="w-12 h-12 text-primary/40 mb-4" />
              <span className="font-heading font-bold text-primary/60 text-lg">
                [ Founder Photo ]
              </span>
              <span className="text-sm text-primary/40 mt-2">Replace this box with your photo</span>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                [ Founder Name Placeholder ]
              </h3>
              <p className="text-accent font-semibold mb-6">Founder & Digital Educator</p>
              <div className="p-6 bg-muted rounded-2xl border border-border border-dashed text-left">
                <p className="text-muted-foreground italic">
                  "This is a placeholder for the founder's bio. You can add a brief paragraph here explaining your background, why you started ScaleUp Wealth Hub, and your passion for digital education in Nigeria."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Our Mission</h2>
            <p className="text-3xl md:text-5xl font-bold font-heading leading-tight">
              Learn. Apply. Grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, title: "Practical Education", desc: "We focus on actionable skills over unnecessary theory." },
              { icon: Target, title: "Results-Oriented", desc: "We teach strategies designed to help you create actual value." },
              { icon: MapPin, title: "Local Context", desc: "Global strategies adapted for the Nigerian reality." },
              { icon: Users, title: "Community Driven", desc: "We believe in the power of learning and growing together." }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors reveal">
                <value.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="text-xl font-bold font-heading text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Join Us On The Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you are starting from scratch or looking to upgrade your existing knowledge, there is a place for you here.
          </p>
          <Link href="/digital-marketing">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 rounded-full text-lg">
              Start Your Learning Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
