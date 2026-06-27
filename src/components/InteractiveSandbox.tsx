import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Activity, ShieldCheck, Zap, Sliders, Cpu } from "lucide-react";
import InteractiveParticles from "./InteractiveParticles";

type SignalType = {
  id: string;
  name: string;
  color: string; // RGB string
  desc: string;
  accentClass: string;
  textClass: string;
};

const SIGNALS: SignalType[] = [
  {
    id: "copper",
    name: "Copper Circuit Board",
    color: "245, 158, 11", // Amber
    desc: "Restores logic board trace connections and electrical currents.",
    accentClass: "bg-amber-500",
    textClass: "text-amber-400",
  },
  {
    id: "audio",
    name: "Audio Sine Frequency",
    color: "34, 197, 94", // Green
    desc: "Calibrates sound decibel balance and harmonic signal waves.",
    accentClass: "bg-green-500",
    textClass: "text-green-400",
  },
  {
    id: "led",
    name: "LED Backlight Driver",
    color: "14, 165, 233", // Sky blue
    desc: "Powers up smart display pixels and active light-emitting diodes.",
    accentClass: "bg-sky-500",
    textClass: "text-sky-400",
  },
];

export default function InteractiveSandbox() {
  const [selectedSignal, setSelectedSignal] = useState<SignalType>(SIGNALS[0]);
  const [particleDensity, setParticleDensity] = useState<number>(80);
  const [interactionHint, setInteractionHint] = useState<string>("Hover and move your mouse inside the field to inject power sparks.");
  const boardRef = useRef<HTMLDivElement | null>(null);

  const handleBoardMouseMove = (e: React.MouseEvent) => {
    // Generate simple mouse coordinate feedback for mock screen
    if (!boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    // Dynamically update diagnostic feedback messages
    if (x % 5 === 0) {
      setInteractionHint(`SIGNAL FLOW DETECTED at X: ${x}px, Y: ${y}px - Voltage Stabilized`);
    }
  };

  const handleBoardMouseLeave = () => {
    setInteractionHint("Diagnostics standby. Hover to resume signal tracing.");
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Absolute grid background element */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Decorative ambient lighting */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full filter blur-[120px] opacity-10 transition-colors duration-750 pointer-events-none ${
        selectedSignal.id === "copper" ? "bg-amber-500/80" : selectedSignal.id === "audio" ? "bg-green-500/80" : "bg-sky-500/80"
      }`}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 lg:px-6"
      >
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950/80 px-3.5 py-1.5 rounded border border-amber-500/30">
            Interactive Experience
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Interactive Signal Diagnostics Lab
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Experience Renato's restoration process firsthand! Hover and guide your cursor over our live signal generator board to patch connections, trace voltage streams, and calibrate delicate electronic frequencies.
          </p>
        </div>

        {/* Sandbox Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Control Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="rounded border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="rounded bg-amber-500/10 p-2 text-amber-400">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Diagnostics Controls
                  </h3>
                </div>

                {/* Signal Selection */}
                <div className="space-y-4">
                  <span className="block text-xs font-mono tracking-wider uppercase text-slate-400">
                    1. Select Active Circuit
                  </span>
                  
                  <div className="space-y-3">
                    {SIGNALS.map((signal) => (
                      <button
                        key={signal.id}
                        onClick={() => setSelectedSignal(signal)}
                        className={`w-full text-left p-4 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          selectedSignal.id === signal.id
                            ? "border-amber-500/50 bg-amber-950/20 shadow-md"
                            : "border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700"
                        }`}
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">{signal.name}</h4>
                          <p className="text-xs text-slate-400 mt-1 leading-normal">{signal.desc}</p>
                        </div>
                        <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${signal.accentClass} ${
                          selectedSignal.id === signal.id ? "animate-pulse" : ""
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter Adjustments */}
                <div className="space-y-4 mt-8">
                  <div className="flex justify-between items-center">
                    <span className="block text-xs font-mono tracking-wider uppercase text-slate-400">
                      2. Signal Density
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400">{particleDensity} Nodes</span>
                  </div>

                  <input
                    type="range"
                    min="30"
                    max="150"
                    value={particleDensity}
                    onChange={(e) => setParticleDensity(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                  />
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Adjusts the raw count of electron particles tracing the board concurrently.
                  </p>
                </div>
              </div>

              {/* Status Display Area */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="rounded bg-slate-900/80 border border-slate-800 p-4 font-mono">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Cpu className="h-3.5 w-3.5 text-amber-500 animate-spin" />
                    <span>SYSTEM HARMONIZER: ACTIVE</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-300 h-8 flex items-center">
                    {interactionHint}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Interactive Signal Playground */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div
              ref={boardRef}
              onMouseMove={handleBoardMouseMove}
              onMouseLeave={handleBoardMouseLeave}
              className="rounded border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl relative h-full min-h-[450px] flex flex-col justify-between p-6 group cursor-crosshair"
            >
              
              {/* Active Particle Canvas Backdrop */}
              <InteractiveParticles
                key={`${selectedSignal.id}-${particleDensity}`}
                color={selectedSignal.color}
                quantity={particleDensity}
                className="absolute inset-0"
              />

              {/* Decorative Tech Overlay HUD */}
              <div className="relative z-10 flex justify-between items-start pointer-events-none select-none">
                {/* HUD Top Left */}
                <div className="bg-slate-900/95 border border-slate-800 px-3 py-1.5 rounded backdrop-blur-md flex items-center gap-2">
                  <Activity className={`h-4 w-4 ${selectedSignal.textClass} animate-pulse`} />
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase leading-none">Diagnostic Channel</span>
                    <span className="block text-xs font-bold text-white uppercase mt-0.5">{selectedSignal.name}</span>
                  </div>
                </div>

                {/* HUD Top Right */}
                <div className="bg-slate-900/95 border border-slate-800 px-3 py-1.5 rounded backdrop-blur-md flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-mono text-[9px] font-semibold text-emerald-400 tracking-wider">CALIBRATION ONLINE</span>
                </div>
              </div>

              {/* Decorative Mock Electronic Grid Labels */}
              <div className="absolute top-[40%] left-[5%] text-[9px] font-mono text-slate-800 pointer-events-none select-none">
                SYS_FREQ // 192.168.1.10
              </div>
              <div className="absolute bottom-[35%] right-[5%] text-[9px] font-mono text-slate-800 pointer-events-none select-none text-right">
                CH_BIAS // +12V_REGULATED
              </div>

              {/* Bottom bar explaining controls */}
              <div className="relative z-10 w-full rounded bg-slate-900/95 border border-slate-800/80 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs backdrop-blur-sm pointer-events-auto">
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <Zap className={`h-4 w-4 ${selectedSignal.textClass} animate-pulse`} />
                  Hover to calibrate circuits and trigger dynamic particle waves.
                </span>
                <button
                  onClick={() => {
                    // Reset or trigger a flare of sparks
                    setSelectedSignal({ ...selectedSignal });
                  }}
                  className="w-full sm:w-auto rounded bg-slate-800 hover:bg-slate-700 px-4 py-2 font-mono text-[10px] text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  RE-ALIGN WAVEFORM
                </button>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
