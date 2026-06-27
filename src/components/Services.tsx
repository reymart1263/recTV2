import React, { useState } from "react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import { Tv, Volume2, Mic, CheckCircle2, AlertTriangle, Sparkles, ChevronDown, ChevronUp, Clock, DollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "tv-board" | "sound-system" | "videoke">("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Tv":
        return <Tv className="h-6 w-6" />;
      case "Volume2":
        return <Volume2 className="h-6 w-6" />;
      case "Mic":
        return <Mic className="h-6 w-6" />;
      default:
        return <Tv className="h-6 w-6" />;
    }
  };

  const filteredServices = SERVICES.filter(
    (service) => activeTab === "all" || service.category === activeTab
  );

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="bg-slate-50 py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 lg:px-6"
      >
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-800 uppercase bg-amber-50 px-3.5 py-1.5 rounded border border-amber-200">
            Professional Solutions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Specialist Repair Services
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We offer specialized, component-level micro-repairs and rentals with transparent 
            upfront pricing. Why replace expensive gear when Renato can fix it like brand new?
          </p>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => { setActiveTab("all"); setExpandedCard(null); }}
            className={`rounded px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "bg-amber-500 text-slate-900 shadow-md shadow-amber-500/15"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
            id="tab-all"
          >
            All Services
          </button>
          <button
            onClick={() => { setActiveTab("tv-board"); setExpandedCard(null); }}
            className={`flex items-center gap-2 rounded px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "tv-board"
                ? "bg-amber-500 text-slate-900 shadow-md shadow-amber-500/15"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
            id="tab-tv"
          >
            <Tv className="h-4 w-4" />
            TV & Board Repair
          </button>
          <button
            onClick={() => { setActiveTab("sound-system"); setExpandedCard(null); }}
            className={`flex items-center gap-2 rounded px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "sound-system"
                ? "bg-amber-500 text-slate-900 shadow-md shadow-amber-500/15"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
            id="tab-sound"
          >
            <Volume2 className="h-4 w-4" />
            Sound Systems
          </button>
          <button
            onClick={() => { setActiveTab("videoke"); setExpandedCard(null); }}
            className={`flex items-center gap-2 rounded px-5 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "videoke"
                ? "bg-amber-500 text-slate-900 shadow-md shadow-amber-500/15"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
            id="tab-videoke"
          >
            <Mic className="h-4 w-4" />
            Videoke Services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedCard === service.id;
            
            const badgeStyles = "bg-amber-50 text-amber-800 border-amber-200";
            const iconBgStyles = "bg-slate-900 text-amber-500";
            const accentBorderStyles = "hover:border-amber-300";

            return (
              <div
                key={service.id}
                className={`flex flex-col rounded border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${accentBorderStyles} ${
                  isExpanded ? "ring-2 ring-amber-500/20" : ""
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Visual Top Highlight Bar */}
                <div className="h-1.5 w-full bg-amber-500"></div>

                {/* Card Header & Intro */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`rounded p-3 shadow-sm ${iconBgStyles}`}>
                        {getIcon(service.iconName)}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${badgeStyles}`}>
                        {service.category === "tv-board" ? "Electronics" :
                         service.category === "sound-system" ? "Audio Tech" : "Entertainment"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Pricing and Turnaround indicators */}
                  <div className="grid grid-cols-2 gap-3 mt-6 border-t border-slate-100 pt-5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-slate-400">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase font-mono">Rates From</span>
                      </div>
                      <span className="text-base font-bold text-slate-800 font-sans">{service.startingPrice}</span>
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase font-mono">Turnaround</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-tight">{service.turnaround}</span>
                    </div>
                  </div>
                </div>

                {/* Expand Toggle Button */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer ${
                    isExpanded ? "bg-slate-50/50" : ""
                  }`}
                  id={`btn-expand-${service.id}`}
                >
                  <span>{isExpanded ? "Hide Detailed Capabilities" : "View Symptoms & Capabilities"}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="bg-slate-50/50 px-6 pb-6 pt-1 border-t border-slate-100/50 space-y-5 animate-slideDown">
                    <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-slate-300 pl-3">
                      {service.fullDesc}
                    </p>

                    {/* Common Malfunctions/Symptoms List */}
                    <div>
                      <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-800 mb-2">
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                        Common Symptoms We Fix:
                      </h4>
                      <ul className="space-y-1.5 pl-5 list-disc text-xs text-slate-600 leading-relaxed">
                        {service.symptoms.map((symptom, i) => (
                          <li key={i}>{symptom}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Feature Inclusions list */}
                    <div>
                      <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-900 mb-2">
                        <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                        Our Diagnostic & Service Inclusions:
                      </h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        const contactForm = document.getElementById("contact");
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: "smooth" });
                          const serviceSelect = document.getElementById("booking-service") as HTMLSelectElement;
                          if (serviceSelect) serviceSelect.value = service.id;
                        }
                      }}
                      className="w-full text-center rounded bg-slate-900 py-3 text-xs font-bold text-white hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-sm uppercase tracking-wider cursor-pointer"
                      id={`btn-book-${service.id}`}
                    >
                      Inquire About This Service
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Diagnostic Banner */}
        <div className="mt-16 rounded border-t-4 border-amber-500 bg-slate-900 text-white p-8 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 h-44 w-44 rounded-full bg-white/5 blur-xl"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold">Unsure of the issue? Get a Free Workshop Diagnostic!</h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Bring your television, amplifier, or electronic board to our shop. We'll diagnose the fault and give you an exact price quote for free. Absolutely zero obligations!
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-amber-400 hover:scale-105 transition-all duration-300 cursor-pointer text-center shrink-0"
              id="services-cta-visit"
            >
              Get Directions & Location
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
