import React from "react";
import { Tv, Volume2, Mic, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: "tv-board",
      title: "Smart TV & Board Repair",
      category: "Electronics",
      description: "Expert board-level micro-soldering and restoration. We replace failed chips and transistors to save you from buying a brand new panel.",
      icon: Tv,
      price: "₱800",
      turnaround: "1 - 3 Days",
      solutions: [
        "Backlight LED burnout (sound working but screen black)",
        "Power board failure (standby light is on but TV won't boot)",
        "HDMI, USB, or Wi-Fi ports not registering signal"
      ]
    },
    {
      id: "sound-system",
      title: "Professional Sound Systems",
      category: "Audio Tech",
      description: "Precision tuning and component restoration for stereo receivers, vintage amplifiers, active mixing consoles, and subwoofers.",
      icon: Volume2,
      price: "₱1,200",
      turnaround: "2 - 4 Days",
      solutions: [
        "Loud humming, buzzing, static, or audio feedback distortion",
        "Dead speaker channels or weak volume output levels",
        "Blown power transistors and faulty filter capacitors"
      ]
    },
    {
      id: "videoke-services",
      title: "Videoke Rental & Upgrades",
      category: "Entertainment",
      description: "Heavy-duty Videoke machine rentals for local parties and events, plus custom cabinet wiring and digital songbook updates.",
      icon: Mic,
      price: "₱1,500",
      turnaround: "Same Day / Daily",
      solutions: [
        "Microphone tuning & acoustic feedback elimination",
        "Digital songbook updates with the latest pop & local hits",
        "Coin slot calibration and wiring for commercial units"
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Simplified Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded border border-blue-200">
            Professional Solutions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Specialty Repair Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We provide upfront, component-level micro-repairs in Pasig City. Why replace expensive equipment when Renato can diagnose and fix it for a fraction of the cost?
          </p>
        </div>

        {/* Clean, Non-collapsible Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded border border-slate-200/80 bg-white shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Visual Accent Top Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-sky-500"></div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="rounded bg-slate-900 p-3 text-blue-400 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border bg-blue-50 text-blue-800 border-blue-200">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Solutions List */}
                    <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                      <h4 className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider font-sans">
                        Common Issues We Fix:
                      </h4>
                      <ul className="space-y-2">
                        {service.solutions.map((sol, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Horizontal Meta Info & Action */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-4 mb-5 text-center bg-slate-50 rounded p-3">
                      <div>
                        <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Rates From</span>
                        <span className="text-base font-extrabold text-slate-800">{service.price}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Timeline</span>
                        <span className="text-sm font-bold text-slate-700">{service.turnaround}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate("contact")}
                      className="w-full text-center rounded bg-slate-900 py-3 text-xs font-bold text-white hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase tracking-wider cursor-pointer"
                      id={`btn-book-${service.id}`}
                    >
                      Inquire / Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Diagnostic Notice Banner */}
        <div className="mt-14 rounded border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">Unsure of the issue? Get a Free Workshop Diagnostic!</h3>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Bring your unit directly to our shop in Nagpayong, Pasig City. Renato will trace the circuit fault and give you an exact, transparent quote with zero diagnosis fees and absolutely no obligation.
            </p>
          </div>
          <button
            onClick={() => onNavigate("contact")}
            className="rounded bg-blue-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-blue-500 transition-all duration-300 cursor-pointer text-center shrink-0 uppercase tracking-wider"
            id="services-cta-visit"
          >
            Find Our Workshop Address
          </button>
        </div>

      </div>
    </section>
  );
}
