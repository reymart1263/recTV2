import React from "react";
import { Tv, Volume2, Mic, CheckCircle2 } from "lucide-react";
import tvBoardRepairImg from "../assets/images/tv_board_repair_1789963891768.jpg";
import soundSystemRepairImg from "../assets/images/sound_system_repair_1789963904556.jpg";
import videokeSetupImg from "../assets/images/videoke_service_setup_1789963918892.jpg";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: "tv-board",
      title: "Smart TV & Board Repair",
      category: "Electronics",
      image: tvBoardRepairImg,
      alt: "Technician repairing Smart TV circuit board on workshop bench",
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
      image: soundSystemRepairImg,
      alt: "Sound system amplifier and receiver circuit repair",
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
      image: videokeSetupImg,
      alt: "Videoke party sound machine rental and karaoke setup",
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
    <section id="services" className="bg-slate-50 py-16 sm:py-20 relative overflow-hidden backdrop-blur-md">
      {/* Decorative blurred background aura spheres */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-indigo-500/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-blue-400/[0.05] blur-2xl pointer-events-none" />

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
                className="group flex flex-col justify-between rounded-none border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:border-blue-600 transition-all duration-300 overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Square Edge Photo Showcase with Industrial Rough/Chiseled Frame */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-950 border-b-2 border-slate-900 rounded-none">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover rounded-none transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 rounded-none pointer-events-none" />

                  {/* Technical Square Corner Marks / Rough Edges Accents */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-400 rounded-none pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-400 rounded-none pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-400 rounded-none pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-400 rounded-none pointer-events-none" />

                  {/* Overlay Badge & Icon with Square Cut */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="rounded-none bg-slate-900/95 text-blue-300 border border-slate-700 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="rounded-none bg-blue-600 p-2 text-white shadow-md border border-blue-400/40">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between rounded-none">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Solutions List */}
                    <div className="mt-5 space-y-2.5 border-t border-slate-150 pt-5">
                      <h4 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                        Common Issues We Fix:
                      </h4>
                      <ul className="space-y-2">
                        {service.solutions.map((sol, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Horizontal Meta Info & Action */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="mb-5 flex items-center justify-between bg-slate-100/80 rounded-none border border-slate-200 p-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Turnaround</span>
                      <span className="text-xs font-bold text-slate-800 font-mono">{service.turnaround}</span>
                    </div>

                    <button
                      onClick={() => onNavigate("contact")}
                      className="w-full text-center rounded-none bg-slate-900 py-3 text-xs font-bold text-white hover:bg-blue-600 transition-all duration-300 uppercase tracking-wider cursor-pointer shadow-sm active:translate-y-0.5"
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
