import React, { useState, useEffect } from "react";
import { Sliders, Clock, Wrench, ChevronRight, CheckCircle2 } from "lucide-react";

interface OptionGroup {
  id: string;
  name: string;
  baseMinPrice: number;
  baseMaxPrice: number;
  timeline: string;
  symptoms: { name: string; addMin: number; addMax: number }[];
}

const PRICE_DATABASE: OptionGroup[] = [
  {
    id: "tv",
    name: "Smart TV or Display Monitor",
    baseMinPrice: 800,
    baseMaxPrice: 1200,
    timeline: "1 - 3 Days",
    symptoms: [
      { name: "Standby light is on, but screen won't boot", addMin: 0, addMax: 200 },
      { name: "Black screen but audio works (Backlight Burnout)", addMin: 400, addMax: 800 },
      { name: "Faulty ports, HDMI, or Wi-Fi connectivity errors", addMin: 200, addMax: 400 }
    ]
  },
  {
    id: "audio",
    name: "Stereo Amplifier, Mixer, or Speakers",
    baseMinPrice: 1200,
    baseMaxPrice: 1800,
    timeline: "2 - 4 Days",
    symptoms: [
      { name: "Loud humming, buzzing, or speaker static noise", addMin: 0, addMax: 300 },
      { name: "One audio channel is weaker or completely dead", addMin: 300, addMax: 600 },
      { name: "No power / dead unit (Blown supply capacitor/fuse)", addMin: 200, addMax: 400 }
    ]
  },
  {
    id: "videoke",
    name: "Videoke Cabinet or Karaoke System",
    baseMinPrice: 900,
    baseMaxPrice: 1500,
    timeline: "1 - 2 Days",
    symptoms: [
      { name: "High microphone squealing / feedback issues", addMin: 0, addMax: 200 },
      { name: "Outdated songs / hard drive update requested", addMin: 300, addMax: 500 },
      { name: "Coin acceptor slot is jammed or not registering", addMin: 150, addMax: 300 }
    ]
  }
];

interface QuoteCalculatorProps {
  onNavigate: (page: string) => void;
}

export default function QuoteCalculator({ onNavigate }: QuoteCalculatorProps) {
  const [selectedEquip, setSelectedEquip] = useState<string>(PRICE_DATABASE[0].id);
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState<number>(0);
  
  const [minPrice, setMinPrice] = useState<number>(1200);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [timeline, setTimeline] = useState<string>("1-3 Days");

  // Automatically recalculate estimate based on simple choices
  useEffect(() => {
    const equip = PRICE_DATABASE.find(e => e.id === selectedEquip) || PRICE_DATABASE[0];
    const symptom = equip.symptoms[selectedSymptomIdx] || equip.symptoms[0];

    const finalMin = equip.baseMinPrice + symptom.addMin;
    const finalMax = equip.baseMaxPrice + symptom.addMax;

    setMinPrice(Math.round(finalMin / 50) * 50);
    setMaxPrice(Math.round(finalMax / 50) * 50);
    setTimeline(equip.timeline);
  }, [selectedEquip, selectedSymptomIdx]);

  // Handle equipment change to reset symptom index
  const handleEquipChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEquip(e.target.value);
    setSelectedSymptomIdx(0);
  };

  const activeEquip = PRICE_DATABASE.find(e => e.id === selectedEquip) || PRICE_DATABASE[0];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Descriptive Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1.5 rounded">
              Interactive Estimator
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Instant Repair Cost Estimator
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              We value transparent pricing. Select your appliance type and primary symptom below to get an instant, component-level repair cost estimation.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-bold block">No surprise fees</strong>
                  All cost estimates are ballpark ranges covering both parts and precision labor.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-bold block">100% Free diagnostics</strong>
                  If you bring your unit to our shop, checking and tracing the fault is completely free.
                </div>
              </div>
            </div>
          </div>

          {/* Clean Calculator Card Column */}
          <div className="lg:col-span-7">
            <div className="rounded border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-xl relative">
              <div className="absolute -top-3 -right-3 rounded bg-blue-600 px-3 py-1 text-[9px] font-mono font-bold tracking-wider text-white uppercase">
                Free Diagnostics
              </div>
              
              <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4 mb-6">
                <Sliders className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold uppercase tracking-wider text-white">Select Your Options</h3>
              </div>

              <div className="space-y-6">
                {/* Step 1: Equipment */}
                <div>
                  <label htmlFor="equip-select" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    1. Select Equipment Type
                  </label>
                  <select
                    id="equip-select"
                    value={selectedEquip}
                    onChange={handleEquipChange}
                    className="w-full rounded border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {PRICE_DATABASE.map((equip) => (
                      <option key={equip.id} value={equip.id}>{equip.name}</option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Symptom */}
                <div>
                  <label htmlFor="symptom-select" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    2. Select Symptom / Fault
                  </label>
                  <select
                    id="symptom-select"
                    value={selectedSymptomIdx}
                    onChange={(e) => setSelectedSymptomIdx(parseInt(e.target.value))}
                    className="w-full rounded border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {activeEquip.symptoms.map((symptom, idx) => (
                      <option key={idx} value={idx}>{symptom.name}</option>
                    ))}
                  </select>
                </div>

                {/* Streamlined Live Result Output */}
                <div className="rounded bg-slate-950 border border-slate-800 p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="block text-[9px] font-mono font-bold tracking-widest text-blue-400 uppercase">Estimated Range</span>
                      <span className="block text-3xl font-extrabold text-white mt-1 font-sans">
                        ₱{minPrice.toLocaleString()} - ₱{maxPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span>Timeline: <strong>{timeline}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wrench className="h-4 w-4 text-blue-400" />
                        <span>Diagnostic Fee: <strong>₱0 (Free)</strong></span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 italic border-t border-slate-850 pt-3 leading-normal">
                    * This is a baseline price estimation. Tracing circuit level faults requires physically bringing the unit to our shop.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate("contact")}
                  className="w-full group flex items-center justify-center gap-2 rounded bg-blue-600 py-3.5 text-xs font-bold text-white hover:bg-blue-500 transition-all duration-300 cursor-pointer uppercase tracking-wider"
                  id="calc-cta-book"
                >
                  Contact Renato / Get Quote
                  <ChevronRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
