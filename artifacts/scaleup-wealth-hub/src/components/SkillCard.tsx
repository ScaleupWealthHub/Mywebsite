import React from "react";
import { Link } from "wouter";
import { LucideIcon, ArrowRight } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  theme?: "light" | "dark";
}

export function SkillCard({
  icon: Icon,
  title,
  description,
  linkText = "Learn More",
  linkHref = "/digital-marketing",
  theme = "dark"
}: SkillCardProps) {
  
  if (theme === "dark") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover-lift reveal group">
        <div className="mb-6">
          <Icon className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-xl font-bold font-heading text-white mb-3">
          {title}
        </h3>
        <p className="text-white/60 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        <Link href={linkHref} className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
          {linkText} <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-8 shadow-sm hover-lift reveal group">
      <div className="mb-6 bg-orange-50 w-14 h-14 flex items-center justify-center rounded-xl">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      {linkHref && (
        <Link href={linkHref} className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
          {linkText} <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </Link>
      )}
    </div>
  );
}
