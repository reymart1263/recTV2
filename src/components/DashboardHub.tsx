import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Wrench, User, MapPin, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import circuitBoardImg from "../assets/images/circuit_board_left_1789989491697.jpg";

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
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setHoverCoords({
          x: clientX - rect.left,
          y: clientY - rect.top,
        });
        setIsCardHovered(true);
      }
      rafRef.current = null;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onNavigate(panel.id);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-label={`${panel.title} – ${panel.cta}`}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => {
        setIsCardHovered(false);
        if (rafRef.current) {
          window.cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      onClick={() => onNavigate(panel.id)}
      className="group relative flex flex-col justify-between rounded border border-slate-200 bg-white p-6 hover:border-blue-500 hover:bg-slate-50/50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md min-h-[220px]"
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
  const containerRafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (containerRafRef.current) return;
    containerRafRef.current = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCoords({
          x: clientX - rect.left,
          y: clientY - rect.top,
        });
        setIsHovered(true);
      }
      containerRafRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (containerRafRef.current) {
      window.cancelAnimationFrame(containerRafRef.current);
      containerRafRef.current = null;
    }
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
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white text-slate-800 py-16 sm:py-24 relative overflow-hidden transition-colors duration-300 backdrop-blur-md"
    >
      {/* Decorative blurred background aura spheres */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-indigo-300/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-slate-300/20 blur-2xl pointer-events-none" />

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

      {/* Left-side circuit board ambient integration */}
      <div className="absolute left-0 top-0 bottom-0 w-80 lg:w-[460px] pointer-events-none select-none overflow-hidden z-0 hidden md:block">
        <img
          src={circuitBoardImg}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-left opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Ambient static glow backup */}
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-blue-600/[0.02] blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Core welcoming block */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-6">
          <div className="space-y-2">
            <span className="inline-block text-xs font-bold tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded uppercase font-mono">
              Pasig City • Electronics Specialist
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
              Electronics Service Center
            </h1>
            <p className="text-blue-600 font-serif italic text-xl sm:text-2xl font-semibold tracking-wide">
              "D' Name You Can Trust"
            </p>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We specialize in LCD, LED, and Smart TV Repair, as well as Sound Systems and Videoke maintenance. Fast, reliable, and professional service with free bench diagnostics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-600 pt-2">
            <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
              15+ Years Bench Experience
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
              <Wrench className="h-4 w-4 text-blue-600 shrink-0" />
              Free Diagnostic Checking
            </span>
          </div>
        </div>

        {/* Simplified Grid List */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
