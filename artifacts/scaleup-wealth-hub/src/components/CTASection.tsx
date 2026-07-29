import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline: string;
  subtext: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export function CTASection({
  headline,
  subtext,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl reveal">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href={primaryBtnLink}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg h-14 px-8 rounded-full w-full sm:w-auto">
              {primaryBtnText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {secondaryBtnText && secondaryBtnLink && (
            <Link href={secondaryBtnLink}>
              <Button variant="outline" size="lg" className="border-white/20 text-foreground hover:bg-white/10 hover:text-white font-semibold text-lg h-14 px-8 rounded-full w-full sm:w-auto">
                {secondaryBtnText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
