import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Wrench, 
  User, 
  MapPin, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Tv, 
  Volume2, 
  Mic2, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Clock, 
  Phone,
  Search,
  Activity
} from "lucide-react";
import neomorphicFluidBg from "../assets/images/neomorphic_fluid_bg_1790077798882.jpg";

interface DashboardHubProps {
  onNavigate: (page: string) => void;
}

interface InteractiveCardProps {
  key?: React.Key;
  panel: {
    id: string;
    title: string;
    description: string;
    icon: any;
    cta: string;
    category: string;
    accentColor: string;
  };
  idx: number;
  onNavigate: (page: string) => void;
}

function NeomorphicCard({ panel, idx, onNavigate }: InteractiveCardProps) {
  const Icon = panel.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`${panel.title} – ${panel.cta}`}
      onClick={() => onNavigate(panel.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onNavigate(panel.id);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl bg-white/95 p-7 border border-white/80 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md"
      style={{
        boxShadow: isHovered
          ? "14px 14px 30px rgba(100, 116, 139, 0.2), -14px -14px 30px rgba(255, 255, 255, 1), inset 0 1px 2px rgba(255, 255, 255, 0.9)"
          : "8px 8px 22px rgba(100, 116, 139, 0.12), -8px -8px 22px rgba(255, 255, 255, 0.95), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      id={`hub-panel-${panel.id}`}
    >
      <div className="relative z-10 space-y-5">
        {/* Header with Inset Debossed Neomorphic Icon Medallion */}
        <div className="flex items-center justify-between">
          <div 
            className="inline-flex items-center justify-center rounded-2xl p-3.5 transition-all duration-300"
            style={{
              background: "#f8fafc",
              boxShadow: "inset 3px 3px 7px rgba(148, 163, 184, 0.25), inset -3px -3px 7px rgba(255, 255, 255, 0.9)",
            }}
          >
            <Icon className={`h-6 w-6 ${panel.accentColor} transition-transform duration-300 group-hover:scale-110`} />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-full">
            {panel.category}
          </span>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {panel.title}
          </h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            {panel.description}
          </p>
        </div>
      </div>

      {/* Neomorphic Action Pill Button */}
      <div className="relative z-10 mt-6 pt-2">
        <div 
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-all duration-200"
          style={{
            background: "#ffffff",
            boxShadow: isHovered
              ? "inset 2px 2px 4px rgba(148, 163, 184, 0.25), inset -2px -2px 4px rgba(255, 255, 255, 0.9)"
              : "3px 3px 8px rgba(148, 163, 184, 0.2), -3px -3px 8px rgba(255, 255, 255, 0.95)",
          }}
        >
          <span>{panel.cta}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardHub({ onNavigate }: DashboardHubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePill, setActivePill] = useState<string>("neumorphism");
  const [selectedDevice, setSelectedDevice] = useState<"tv" | "audio" | "videoke" | "board">("tv");

  const diagnosticPresets = {
    tv: {
      title: "Smart / LED / LCD Television Bench",
      symptoms: ["No Picture, Sound OK (Backlight failure)", "Dead / No Power (Power board caps)", "Blinking LED Code (Mainboard logic)", "Distorted Screen Lines (T-CON / Ribbon)"],
      repairTime: "24 – 48 Hours",
      guarantee: "Bench Tested & Parts Warranty",
      action: "Book TV Diagnostic",
    },
    audio: {
      title: "Sound System, Stereo & Power Amp Bench",
      symptoms: ["Channel Distortion / Static Noise", "Blown Output Transistors (STK / Sanken)", "Dead Power Supply / Transformer Issue", "Faulty Potentiometers & Volume Faders"],
      repairTime: "24 – 36 Hours",
      guarantee: "Acoustic Load Tested",
      action: "Book Audio Diagnostic",
    },
    videoke: {
      title: "Videoke & Commercial Karaoke Systems",
      symptoms: ["No Scoring / Player Song Error", "Microphone Feedback / Preamp Failure", "Hard Drive / Song Card Updating", "Cabinet Speaker Re-coning & Crossover"],
      repairTime: "Same Day / 24 Hours",
      guarantee: "Commercial Grade Tested",
      action: "Book Videoke Diagnostic",
    },
    board: {
      title: "Micro-Soldering & Component-Level SMT",
      symptoms: ["SMD Resistor / Capacitor Burnout", "Burnt PCB Copper Circuit Traces", "Firmware EEPROM SPI Flashing", "Voltage Regulator Step-Down Fix"],
      repairTime: "12 – 24 Hours",
      guarantee: "Microscope Inspection Proof",
      action: "Inquire Component Repair",
    },
  };

  const panels = [
    {
      id: "services",
      title: "Repair Services",
      description: "Smart TVs, amplifiers, stereos, mixing consoles, and professional videoke machines.",
      icon: Wrench,
      cta: "Explore Services",
      category: "Bench Catalog",
      accentColor: "text-blue-600",
    },
    {
      id: "owner",
      title: "Meet the Specialist",
      description: "Renato's 15+ years of active bench experience, precision micro-soldering, and repair philosophy.",
      icon: User,
      cta: "Meet Renato",
      category: "Master Tech",
      accentColor: "text-purple-600",
    },
    {
      id: "contact",
      title: "Workshop & Map",
      description: "Precise workshop address, map, visual landmarks, and direct contact options in Pasig City.",
      icon: MapPin,
      cta: "Find Workshop",
      category: "Pasig City",
      accentColor: "text-orange-600",
    },
    {
      id: "faq",
      title: "FAQ Help Center",
      description: "Direct answers to common questions regarding warranties, diagnostic timelines, and walk-ins.",
      icon: HelpCircle,
      cta: "View FAQs",
      category: "Support",
      accentColor: "text-emerald-600",
    },
  ];

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative overflow-hidden min-h-[92vh] flex flex-col justify-between py-12 lg:py-20"
    >
      {/* 3D Iridescent Fluid Ribbons Background - Directly inspired by the reference design */}
      <div className="absolute inset-0 z-0">
        <img
          src={neomorphicFluidBg}
          alt="3D Iridescent fluid ribbons backdrop"
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Smooth optical gradient overlay ensuring high contrast for text and neomorphic elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/15 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/25 via-transparent to-sky-950/25" />
      </div>

      {/* Floating subtle ambient blurred orbs for neomorphic depth */}
      <div className="absolute top-1/4 right-10 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero Header directly mirroring the reference design composition */}
        <div className="max-w-4xl pt-4 sm:pt-8 lg:pt-12 mb-12 sm:mb-16">
          
          {/* Badge / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-md bg-white/20 border border-white/40 text-white shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase font-mono">
              Pasig City's Master Electronics Bench
            </span>
          </motion.div>

          {/* Large display title styled after the reference screenshot */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] leading-[1.12]"
          >
            Electronics Service Center - UI & Precision Diagnostics.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-white/95 font-medium max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] leading-relaxed"
          >
            <span className="italic font-serif font-semibold text-amber-200">"D' Name You Can Trust"</span> — Specializing in Smart TV panel & backlight restoration, high-fidelity sound systems, and heavy-duty videoke machines.
          </motion.p>

          {/* Signature Neomorphic Pill Bar - Replicating the user's uploaded design */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Pill 1: Minimal UI (Orange / Coral text) */}
            <button
              onClick={() => {
                setActivePill("minimal");
                setSelectedDevice("tv");
              }}
              className={`neumorph-pill rounded-full px-6 py-3 text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activePill === "minimal" ? "active ring-2 ring-orange-400" : ""
              }`}
              style={{
                color: "#ea580c", // Vibrant coral orange from reference
              }}
              id="pill-minimal-ui"
            >
              Minimal UI
            </button>

            {/* Pill 2: Neumorphism (Purple text) */}
            <button
              onClick={() => {
                setActivePill("neumorphism");
                setSelectedDevice("audio");
              }}
              className={`neumorph-pill rounded-full px-6 py-3 text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activePill === "neumorphism" ? "active ring-2 ring-purple-500" : ""
              }`}
              style={{
                color: "#9333ea", // Vibrant purple from reference
              }}
              id="pill-neumorphism"
            >
              Neumorphism
            </button>

            {/* Pill 3: AI-Driven Design (Cyan / Sky Blue text) */}
            <button
              onClick={() => {
                setActivePill("ai");
                setSelectedDevice("board");
              }}
              className={`neumorph-pill rounded-full px-6 py-3 text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activePill === "ai" ? "active ring-2 ring-sky-400" : ""
              }`}
              style={{
                color: "#0284c7", // Vibrant cyan blue from reference
              }}
              id="pill-ai-driven"
            >
              AI-Driven Design
            </button>

            {/* Pill 4: Interactive Quick Search / Diagnosis Pill */}
            <button
              onClick={() => {
                setActivePill("videoke");
                setSelectedDevice("videoke");
              }}
              className={`neumorph-pill rounded-full px-5 py-3 text-sm sm:text-base font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activePill === "videoke" ? "active ring-2 ring-emerald-400" : ""
              }`}
              style={{
                color: "#059669",
              }}
              id="pill-videoke"
            >
              <Activity className="h-4 w-4 text-emerald-600" />
              <span>Instant Diagnostic</span>
            </button>
          </motion.div>

          <div className="mt-3 text-xs font-mono text-white/80 drop-shadow-sm flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Neomorphic Touchpoints • Click any pill to switch diagnosis engine</span>
          </div>
        </div>

        {/* Interactive Neomorphic Diagnostics Workbench */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-14 rounded-3xl bg-white/90 p-6 sm:p-8 border border-white/80 backdrop-blur-xl"
          style={{
            boxShadow: "12px 12px 30px rgba(100, 116, 139, 0.16), -12px -12px 30px rgba(255, 255, 255, 0.95)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-purple-700 uppercase">
                <Cpu className="h-4 w-4 text-purple-600" />
                <span>Neomorphic Diagnostic Bench</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Select Your Device For Real-Time Troubleshooting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Get an instant bench assessment of common failure modes, repair times, and component-level solutions.
              </p>
            </div>

            {/* Device Selector Neomorphic Tabs */}
            <div 
              className="inline-flex p-1.5 rounded-full"
              style={{
                background: "#f1f5f9",
                boxShadow: "inset 3px 3px 6px rgba(148, 163, 184, 0.25), inset -3px -3px 6px rgba(255, 255, 255, 0.9)",
              }}
            >
              {[
                { id: "tv", label: "Smart TV", icon: Tv },
                { id: "audio", label: "Sound System", icon: Volume2 },
                { id: "videoke", label: "Videoke Unit", icon: Mic2 },
                { id: "board", label: "Circuit PCB", icon: Cpu },
              ].map((tab) => {
                const isSelected = selectedDevice === tab.id;
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedDevice(tab.id as any)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-white text-blue-600 shadow-[3px_3px_8px_rgba(148,163,184,0.3),-3px_-3px_8px_rgba(255,255,255,0.9)]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    id={`device-tab-${tab.id}`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inset Screen Display for the selected device */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <div className="lg:col-span-8">
              <div 
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: "#f8fafc",
                  boxShadow: "inset 4px 4px 10px rgba(148, 163, 184, 0.2), inset -4px -4px 10px rgba(255, 255, 255, 0.9)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wide">
                    Active Diagnostic Profile
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    Turnaround: <strong className="text-slate-700">{diagnosticPresets[selectedDevice].repairTime}</strong>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {diagnosticPresets[selectedDevice].title}
                </h3>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {diagnosticPresets[selectedDevice].symptoms.map((symptom, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-white shadow-[2px_2px_6px_rgba(148,163,184,0.1)] text-xs text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Inset Box */}
            <div className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Free Bench Check</span>
                </div>
                <h4 className="text-lg font-bold text-white">Need Renato's Assessment?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bring your unit directly to our Pasig workshop or message with photos for instant preliminary assessment.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => onNavigate("services")}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 hover:bg-slate-100 py-2.5 px-4 text-xs font-bold shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                  id="btn-book-diagnostic"
                >
                  <span>{diagnosticPresets[selectedDevice].action}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                </button>
                <a
                  href="tel:+639499442851"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-white border border-blue-400/30 py-2 px-4 text-xs font-bold transition-all"
                  id="btn-call-specialist"
                >
                  <Phone className="h-3.5 w-3.5 text-blue-400" />
                  <span>+63 (949) 944-2851</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Neomorphic Hub Cards (Services, Owner, Location, FAQ) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {panels.map((panel, idx) => (
            <NeomorphicCard
              key={panel.id}
              panel={panel}
              idx={idx}
              onNavigate={onNavigate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
