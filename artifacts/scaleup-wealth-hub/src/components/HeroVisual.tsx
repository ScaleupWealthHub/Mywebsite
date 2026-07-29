import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Rocket, Zap, Star } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-primary/30 rounded-full blur-[80px]" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[20%] bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
      >
        <TrendingUp className="text-accent w-5 h-5" />
        <span className="text-white font-semibold text-sm">Digital Marketing</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[5%] bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
      >
        <Zap className="text-accent w-5 h-5" />
        <span className="text-white font-semibold text-sm">AI Tools</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[5%] md:left-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
      >
        <Star className="text-accent w-5 h-5" />
        <span className="text-white font-semibold text-sm">Content Creation</span>
      </motion.div>

      {/* Center abstract shape */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative w-48 h-48 md:w-64 md:h-64"
      >
        <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-primary/40" />
        <div className="absolute inset-0 rounded-[70%_30%_30%_70%/70%_70%_30%_30%] border border-accent/40 rotate-45" />
        <div className="absolute inset-0 rounded-[50%] border border-white/20 rotate-90" />
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] left-[40%] w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      <Rocket className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
    </div>
  );
}
