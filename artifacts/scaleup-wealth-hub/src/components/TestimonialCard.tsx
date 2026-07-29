import React from "react";
import { Star } from "lucide-react";

export function TestimonialCard() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover-lift reveal">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
          {/* Avatar Placeholder */}
          <svg className="w-8 h-8 text-primary/40 mt-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold font-heading text-foreground">Your success story could be here.</h4>
          <p className="text-sm text-muted-foreground">ScaleUp Learner — Nigeria</p>
        </div>
      </div>
      
      <div className="flex text-accent mb-4">
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
        <Star className="w-4 h-4 fill-current" />
      </div>
      
      <div className="p-4 border-2 border-dashed border-border rounded-xl bg-muted/30">
        <p className="text-muted-foreground italic text-sm">
          "This testimonial will be replaced with real learner feedback once you start applying your skills."
        </p>
      </div>
    </div>
  );
}
