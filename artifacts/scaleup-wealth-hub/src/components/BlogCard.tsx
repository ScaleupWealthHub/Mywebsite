import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  href?: string;
  date?: string;
}

export function BlogCard({ 
  category, 
  title, 
  description, 
  href = "/resources",
  date = "Just now" 
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden hover-lift group reveal flex flex-col h-full">
      {/* Image Placeholder */}
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
        <span className="text-primary/20 font-heading font-bold text-xl select-none">ScaleUp</span>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <Link href={href} className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all mt-auto">
          Read More <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </Link>
      </div>
    </div>
  );
}
