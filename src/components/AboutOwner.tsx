import React, { useState } from "react";
import { OWNER_MILESTONES } from "../data";
import { Award, ShieldCheck, Cpu, HardDrive, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";

export default function AboutOwner() {
  const ownerImage = "/src/assets/images/repair_owner_portrait_1782542498043.jpg";
  const [activeMilestone, setActiveMilestone] = useState<number>(OWNER_MILESTONES.length - 1);

  const tools = [
    { name: "Digital Storage Oscilloscope", desc: "For precision signal tracing in motherboard repair and audio wave analysis." },
    { name: "Hot Air SMD Rework Station", desc: "For micro-soldering tiny surface-mount chips and IC microprocessors." },
    { name: "Capacitor ESR Tester", desc: "Identifies faulty motherboard filters before they cause complete TV board failure." },
    { name: "Audio System Distortion Analyzer", desc: "Used for fine-tuning active speakers and eliminating squealing videoke feedback." }
  ];

  return (
    <section id="owner" className="py-20 bg-white relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 lg:px-6"
      >
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-800 uppercase bg-amber-50 px-3.5 py-1.5 rounded border border-amber-200">
            Meet the Specialist
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet Renato E. Custodio — Your Lead Technician
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            With 15+ years of practical experience at the workbench, Renato combines expert theoretical knowledge with high-precision diagnostic tools to solve issues other shops dismiss as unfixable.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait & Core Bio column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Decorative design board background */}
              <div className="absolute -inset-2 rounded bg-gradient-to-tr from-amber-500 to-amber-600 opacity-20 blur-lg"></div>
              
              <div className="relative overflow-hidden rounded border-4 border-slate-900 bg-slate-100 shadow-xl aspect-square">
                <img
                  src={ownerImage}
                  alt="Renato E. Custodio - Senior Electronics Repair Expert"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Years badge */}
                <div className="absolute top-4 left-4 rounded bg-slate-900/95 border border-slate-700 px-3 py-1.5 text-white backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="font-mono text-xs font-bold">15+ Years Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="rounded border border-slate-200 bg-slate-50 p-5 relative">
              <span className="absolute -top-3 left-4 text-3xl text-amber-500 font-serif leading-none">“</span>
              <p className="text-sm text-slate-600 italic leading-relaxed pt-2">
                My workshop philosophy is simple: diagnose, locate the exact micro-component that failed, and repair it. Throwing away entire mainboards is lazy and expensive for families. We repair at the chip level to keep service affordable and sustainable.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 w-6 rounded-full bg-amber-500"></div>
                <span className="text-xs font-extrabold text-slate-800 tracking-wider uppercase font-mono">Renato E. Custodio, Founder & Tech Specialist</span>
              </div>
            </div>
          </div>

          {/* Interactive Timeline & Tools column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Timeline Segment */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
                Renato's Professional Milestones
              </h3>
              
              <div className="rounded border border-slate-200 bg-slate-50/50 p-5 sm:p-6 space-y-5">
                {/* Interactive Milestone Indicator Buttons */}
                <div className="flex justify-between items-center relative border-b border-slate-200 pb-4">
                  <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300" style={{
                    width: `${((activeMilestone) / (OWNER_MILESTONES.length - 1)) * 100}%`
                  }}></div>
                  {OWNER_MILESTONES.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMilestone(idx)}
                      className={`relative z-10 font-mono text-xs font-bold px-3 py-1.5 rounded transition-all duration-300 cursor-pointer ${
                        activeMilestone === idx
                          ? "bg-amber-500 text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                      id={`milestone-year-${m.year}`}
                    >
                      {m.year}
                    </button>
                  ))}
                </div>

                {/* Milestone Detail Text */}
                <div className="min-h-[100px] space-y-2 animate-fadeIn">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    {OWNER_MILESTONES[activeMilestone].title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {OWNER_MILESTONES[activeMilestone].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Work Bench & Tools Segment */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-amber-600" />
                Equipped with Precision Diagnostic Gear
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tools.map((t, i) => (
                  <div key={i} className="rounded border border-slate-200 p-4 hover:border-amber-400 hover:bg-slate-50/50 transition-all duration-300">
                    <h4 className="text-xs font-extrabold text-slate-900 tracking-wide uppercase font-sans">
                      {t.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
