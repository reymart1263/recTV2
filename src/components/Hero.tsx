import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, Tv, Volume2, Mic, ChevronRight } from "lucide-react";
import InteractiveParticles from "./InteractiveParticles";

export default function Hero() {
  const heroImage = "/src/assets/images/electronics_repair_hero_1782542482324.jpg";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 lg:py-24">
      {/* Interactive mouse-hover particle system background */}
      <InteractiveParticles color="245, 158, 11" quantity={80} className="absolute inset-0 opacity-40" />

      {/* Background radial gradients for ambient glow */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded border border-amber-500/30 bg-amber-950/40 px-3.5 py-1.5 text-xs font-semibold text-amber-400 tracking-wide backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Premium Tech & Sound Restoration</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1]"
              >
                Fast, Reliable <br className="hidden sm:inline" />
                <span className="text-amber-500">
                  Electronics Repair
                </span> & <br />
                <span className="text-white font-light">
                  Videoke Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg lg:mx-0 leading-relaxed"
              >
                Is your TV flashing a black screen? Speaker buzzing? Planning a videoke party? 
                <strong> Renato E. Custodio</strong> provides honest component-level micro-soldering repairs 
                and high-power sound setups with top-tier reliability.
              </motion.p>
            </div>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded bg-amber-500 px-7 py-4 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all duration-300 cursor-pointer animate-pulse"
                id="hero-cta-book"
              >
                Get Free Diagnostics
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection("calculator")}
                className="w-full sm:w-auto rounded border border-slate-700 bg-slate-900/80 px-7 py-4 text-base font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer"
                id="hero-cta-calc"
              >
                Check Repair Estimate
              </button>
            </motion.div>

            {/* Three Pillar Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              <div 
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-3.5 rounded border border-slate-800 bg-slate-900/40 p-3.5 hover:border-amber-500/30 hover:bg-slate-800/40 transition-all duration-300 cursor-pointer text-left group"
                id="hero-card-tv"
              >
                <div className="rounded bg-amber-500/10 p-2.5 text-amber-500 group-hover:scale-110 transition-transform">
                  <Tv className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">TV & Boards</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Smart TVs, Main Boards</p>
                </div>
              </div>

              <div 
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-3.5 rounded border border-slate-800 bg-slate-900/40 p-3.5 hover:border-amber-500/30 hover:bg-slate-800/40 transition-all duration-300 cursor-pointer text-left group"
                id="hero-card-audio"
              >
                <div className="rounded bg-amber-500/10 p-2.5 text-amber-500 group-hover:scale-110 transition-transform">
                  <Volume2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Sound Systems</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Amps, Speakers, Mixers</p>
                </div>
              </div>

              <div 
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-3.5 rounded border border-slate-800 bg-slate-900/40 p-3.5 hover:border-amber-500/30 hover:bg-slate-800/40 transition-all duration-300 cursor-pointer text-left group"
                id="hero-card-videoke"
              >
                <div className="rounded bg-amber-500/10 p-2.5 text-amber-500 group-hover:scale-110 transition-transform">
                  <Mic className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Videoke Setups</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Rentals & Custom Builds</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Hero Image Banner */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Frame with professional amber border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 opacity-20 blur-md"></div>
              
              <div className="relative overflow-hidden rounded-xl border-4 border-slate-800 bg-slate-950 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Renato's expert electronics repair workshop with boards and oscilloscope"
                  className="h-[300px] w-full object-cover opacity-85 sm:h-[380px] hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded border border-white/10 bg-slate-900/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-bold tracking-widest text-amber-400 uppercase">Trusted Local Service</span>
                      <span className="block mt-0.5 text-sm font-bold text-white">Located in Cavite, Philippines</span>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-950/80 border border-amber-800 px-2 py-1 rounded">
                      <Shield className="h-4 w-4 text-amber-400" />
                      <span className="font-mono text-xs font-bold text-amber-400">Expert Repair</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
