import React, { useState, useEffect } from "react";
import { Sliders, Wrench, Clock, DollarSign, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface DeviceOption {
  id: string;
  name: string;
  category: "tv-board" | "sound-system" | "videoke";
  basePrice: number;
}

interface BrandOption {
  name: string;
  multiplier: number;
}

interface SymptomOption {
  name: string;
  addedCost: number;
  complexity: "Low" | "Medium" | "High";
  duration: string;
}

const DEVICES: DeviceOption[] = [
  { id: "led-tv", name: "LED / LCD Smart TV", category: "tv-board", basePrice: 800 },
  { id: "power-board", name: "Custom Circuit Board / PCB", category: "tv-board", basePrice: 600 },
  { id: "stereo-amp", name: "Stereo Amplifier / Receiver", category: "sound-system", basePrice: 1200 },
  { id: "pa-mixer", name: "Sound Mixer / Audio Console", category: "sound-system", basePrice: 1400 },
  { id: "active-speaker", name: "Active Powered Speaker", category: "sound-system", basePrice: 900 },
  { id: "videoke-box", name: "Commercial Videoke Cabinet", category: "videoke", basePrice: 1500 },
  { id: "home-karaoke", name: "Home Karaoke Setup", category: "videoke", basePrice: 1000 }
];

const BRANDS: BrandOption[] = [
  { name: "Samsung", multiplier: 1.2 },
  { name: "LG", multiplier: 1.15 },
  { name: "Sony", multiplier: 1.25 },
  { name: "Sharp", multiplier: 1.1 },
  { name: "Pioneer", multiplier: 1.3 },
  { name: "Yamaha", multiplier: 1.3 },
  { name: "Xenon / Kevler", multiplier: 1.05 },
  { name: "Sakura / Crown", multiplier: 1.0 },
  { name: "Generic / Unbranded", multiplier: 0.95 }
];

const SYMPTOMS: SymptomOption[] = [
  { name: "No Power / Completely Dead (Blown Fuse/Power Board)", addedCost: 350, complexity: "Medium", duration: "1-2 Days" },
  { name: "Sound Works, But Black Screen (Backlight LED Burnout)", addedCost: 950, complexity: "High", duration: "1-3 Days" },
  { name: "Audio Distortion, Hum, Buzz, or Static Noise", addedCost: 400, complexity: "Medium", duration: "2 Days" },
  { name: "Mic Feedback / Squealing & Poor Volume Tuning", addedCost: 200, complexity: "Low", duration: "1 Day" },
  { name: "Outdated Songbook / Song List Update Required", addedCost: 300, complexity: "Low", duration: "1 Day" },
  { name: "Jammed Coin Slot or Credit System Not Registering", addedCost: 250, complexity: "Low", duration: "1 Day" },
  { name: "Burnt Main IC Chip or Corroded Circuit Board Lines", addedCost: 1200, complexity: "High", duration: "2-4 Days" }
];

export default function QuoteCalculator() {
  const [selectedDevice, setSelectedDevice] = useState<string>(DEVICES[0].id);
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].name);
  const [selectedSymptom, setSelectedSymptom] = useState<string>(SYMPTOMS[0].name);

  const [estimate, setEstimate] = useState({ minPrice: 0, maxPrice: 0, duration: "1-2 Days", complexity: "Medium" });

  useEffect(() => {
    const dev = DEVICES.find(d => d.id === selectedDevice) || DEVICES[0];
    const brand = BRANDS.find(b => b.name === selectedBrand) || BRANDS[0];
    const sym = SYMPTOMS.find(s => s.name === selectedSymptom) || SYMPTOMS[0];

    const rawCost = (dev.basePrice * brand.multiplier) + sym.addedCost;
    
    // Create a realistic range (e.g., +/- 10% of computed estimate)
    const minPrice = Math.round((rawCost * 0.9) / 50) * 50;
    const maxPrice = Math.round((rawCost * 1.1) / 50) * 50;

    setEstimate({
      minPrice,
      maxPrice,
      duration: sym.duration,
      complexity: sym.complexity
    });
  }, [selectedDevice, selectedBrand, selectedSymptom]);

  const handleBook = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual neon grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 lg:px-6"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informational Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950 border border-amber-800 px-3 py-1.5 rounded">
              Interactive Estimator
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Calculate Your Approximate Repair Cost
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              We believe in 100% honesty. Use this smart tool to get a transparent ballpark price calculation. Select your equipment type, choose your manufacturer brand, and pick the symptom you're experiencing.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="rounded bg-emerald-500/10 p-1.5 text-emerald-400 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">No Surprise Fees</h4>
                  <p className="text-xs text-slate-400 mt-0.5">All repair quotations include parts and labor. We never do extra work without your direct confirmation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded bg-amber-500/10 p-1.5 text-amber-400 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">Genuine Parts Guaranteed</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We source only high-grade premium components and original brand replacements to ensure longevity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Card Column */}
          <div className="lg:col-span-7">
            <div className="rounded border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 rounded bg-amber-500 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-950 uppercase">
                Free Diagnostics
              </div>
              
              <div className="flex items-center gap-3 border-b border-slate-800 pb-5 mb-6">
                <Sliders className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-bold">Interactive Cost Estimator</h3>
              </div>

              <div className="space-y-5">
                {/* Device type selection */}
                <div>
                  <label htmlFor="device-select" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    1. Select Equipment / Appliance
                  </label>
                  <select
                    id="device-select"
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="w-full rounded border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {DEVICES.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>

                {/* Brand Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="brand-select" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      2. Manufacturer / Brand
                    </label>
                    <select
                      id="brand-select"
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full rounded border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {BRANDS.map((b) => (
                        <option key={b.name} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Complexity indicator */}
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Diagnostic Difficulty
                    </span>
                    <div className="w-full rounded border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-slate-300 flex items-center justify-between">
                      <span>{estimate.complexity} Level Diagnostic</span>
                      <span className={`h-2.5 w-2.5 rounded-full ${
                        estimate.complexity === "Low" ? "bg-emerald-400" :
                        estimate.complexity === "Medium" ? "bg-amber-400" : "bg-rose-500"
                      }`}></span>
                    </div>
                  </div>
                </div>

                {/* Symptom Selection */}
                <div>
                  <label htmlFor="symptom-select" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    3. Primary Fault / Symptom Experienced
                  </label>
                  <select
                    id="symptom-select"
                    value={selectedSymptom}
                    onChange={(e) => setSelectedSymptom(e.target.value)}
                    className="w-full rounded border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {SYMPTOMS.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Live Estimator Output Panel */}
                <div className="mt-8 rounded bg-slate-950 border border-slate-800 p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="block text-[10px] font-bold tracking-widest text-amber-400 uppercase">Estimated Repair Cost</span>
                      <div className="flex items-baseline mt-1 gap-1">
                        <span className="text-3xl font-extrabold text-white font-sans">
                          ₱{estimate.minPrice.toLocaleString()} - ₱{estimate.maxPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">ballpark</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <Clock className="h-4 w-4 text-amber-400" />
                        <span>Timeline: <strong>{estimate.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <Wrench className="h-4 w-4 text-amber-400" />
                        <span>Diagnostics: <strong>Free</strong></span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic leading-normal border-t border-slate-800 pt-3">
                    * This is a simulated baseline estimate for components and labor. Bringing the unit to the shop for inspection ensures 100% exact pricing.
                  </p>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full group flex items-center justify-center gap-2 rounded bg-amber-500 py-4 text-sm font-bold text-slate-900 hover:bg-amber-400 shadow-md transition-all duration-300 cursor-pointer"
                  id="calc-cta-book"
                >
                  Contact Renato for this Estimate
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
