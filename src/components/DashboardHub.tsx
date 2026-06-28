import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Wrench, Sliders, User, MapPin, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface DashboardHubProps {
  onNavigate: (page: string) => void;
}

interface InteractiveCardProps {
  panel: {
    id: string;
    title: string;
    description: string;
    icon: any;
    cta: string;
    color: string;
  };
  idx: number;
  onNavigate: (page: string) => void;
  Icon: any;
  key?: React.Key;
}

function InteractiveCard({ panel, idx, onNavigate, Icon }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverCoords, setHoverCoords] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHoverCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsCardHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      onClick={() => onNavigate(panel.id)}
      className="group relative flex flex-col justify-between rounded border border-slate-200 bg-white p-6 hover:border-blue-500 hover:bg-slate-50/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md min-h-[220px]"
      id={`hub-panel-${panel.id}`}
      whileHover={{ y: -4 }}
    >
      {/* Spotlight overlay effect following the cursor inside the card */}
      {isCardHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded transition duration-300"
          style={{
            background: `radial-gradient(160px circle at ${hoverCoords.x}px ${hoverCoords.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* A subtle colored dot that glides inside the card border */}
      {isCardHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded border border-blue-500/10 transition duration-300"
          style={{
            maskImage: `radial-gradient(100px circle at ${hoverCoords.x}px ${hoverCoords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(100px circle at ${hoverCoords.x}px ${hoverCoords.y}px, black, transparent)`,
          }}
        />
      )}

      <div className="relative z-10 space-y-4">
        <div className="inline-flex rounded bg-blue-50 border border-blue-100 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5.5 w-5.5" />
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {panel.title}
          </h3>
          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
            {panel.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-500 transition-colors uppercase tracking-wider">
        <span>{panel.cta}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

export default function DashboardHub({ onNavigate }: DashboardHubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const panels = [
    {
      id: "services",
      title: "Repair Services",
      description: "Smart TVs, stereos, amplifiers, mixing consoles, and professional karaoke machines.",
      icon: Wrench,
      cta: "Explore Services",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "calculator",
      title: "Cost Estimator",
      description: "Interactive tool to estimate transparent component-level repair cost ranges instantly.",
      icon: Sliders,
      cta: "Estimate Cost",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "owner",
      title: "About the Owner",
      description: "Renato's 15+ years of active bench experience, story, and micro-repair philosophy.",
      icon: User,
      cta: "Meet Renato",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "contact",
      title: "Workshop Location",
      description: "Precise workshop address, map, visual landmarks, and direct contact options in Pasig City.",
      icon: MapPin,
      cta: "Find Workshop",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "faq",
      title: "FAQ Help Center",
      description: "Direct answers to common questions about warranties, diagnostic times, and home service.",
      icon: HelpCircle,
      cta: "View FAQs",
      color: "from-blue-500 to-blue-600",
    },
  ];

  // Calculate coordinates in percentage for key spots
  const xPercent = isHovered && containerRef.current ? (coords.x / containerRef.current.clientWidth) * 100 : 50;
  const yPercent = isHovered && containerRef.current ? (coords.y / containerRef.current.clientHeight) * 100 : 35;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white text-slate-800 py-16 sm:py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Interactive moving background grid */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"
        animate={{
          x: isHovered && containerRef.current ? (coords.x - containerRef.current.clientWidth / 2) * 0.04 : 0,
          y: isHovered && containerRef.current ? (coords.y - containerRef.current.clientHeight / 2) * 0.04 : 0,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 80 }}
      />

      {/* Primary dynamic radial follow-spotlight */}
      <motion.div 
        className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none"
        animate={{
          left: `${xPercent}%`,
          top: `${yPercent}%`,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ type: "spring", damping: 35, stiffness: 75 }}
      />

      {/* Ambient static glow backup */}
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-blue-600/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Core welcoming block (Replacing the redundant massive Hero) */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-6">
          
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
              Electronics Service Center
            </h1>
            <p className="text-blue-600 font-serif italic text-xl sm:text-2xl font-semibold tracking-wide">
              "D' Name You Can Trust"
            </p>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We specialize in LCD, LED, and Smart TV Repair, as well as Sound Systems and Videoke maintenance. Fast, reliable, and professional service.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-2">
            <span className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              15+ Years Bench Experience
            </span>
          </div>
        </div>

        {/* Simplified Grid List */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panels.map((panel, idx) => (
              <InteractiveCard
                key={panel.id}
                panel={panel}
                idx={idx}
                onNavigate={onNavigate}
                Icon={panel.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
