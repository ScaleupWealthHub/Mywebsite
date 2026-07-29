import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-border/60 rounded-2xl p-8 hover-lift group reveal transition-all duration-300 hover:bg-primary">
      <div className="bg-muted w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors">
        {description}
      </p>
    </div>
  );
}
