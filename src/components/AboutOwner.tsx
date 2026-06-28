import React from "react";
import { Award, ShieldCheck, Heart, Sparkles, Star, User } from "lucide-react";
import ownerImage from "../assets/images/owner_portrait_1782656889601.jpg";

export default function AboutOwner() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Simplified Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded border border-blue-200">
            Meet the Specialist
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet Renato E. Custodio
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            A lead motherboard technician with over 15 years of workbench experience, Renato has spent his career bringing broken electronics back to life.
          </p>
        </div>

        {/* Unified Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="absolute -inset-2 rounded bg-gradient-to-tr from-blue-500 to-blue-600 opacity-20 blur-lg"></div>
              
              <div className="relative overflow-hidden rounded border-4 border-slate-900 bg-slate-100 shadow-xl aspect-square">
                {!imageError ? (
                  <img
                    src={ownerImage}
                    alt="Renato E. Custodio - Repair Specialist"
                    className="h-full w-full object-cover animate-fade-in"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-300 p-6 text-center">
                    <div className="rounded-full bg-slate-900 p-6 border border-slate-800 shadow-inner">
                      <User className="h-16 w-16 text-blue-400" />
                    </div>
                    <span className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-slate-300">Renato E. Custodio</span>
                    <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Lead Repair Specialist</span>
                  </div>
                )}
                
                <div className="absolute top-4 left-4 rounded bg-slate-900/95 border border-slate-700 px-3 py-1.5 text-white backdrop-blur-sm z-10">
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="font-mono text-xs font-bold">15+ Years Bench Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core philosophy quote */}
            <div className="rounded border border-slate-200 bg-slate-50 p-5 relative">
              <span className="absolute -top-3 left-4 text-3xl text-blue-500 font-serif leading-none">“</span>
              <p className="text-xs text-slate-600 italic leading-relaxed pt-1">
                My philosophy is simple: identify the exact micro-component that failed, replace it, and keep the repair affordable. Replacing entire mainboards is expensive and wasteful. We repair at the chip level to respect your hard-earned budget.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1 w-4 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider font-mono">Renato E. Custodio</span>
              </div>
            </div>
          </div>

          {/* Clean Bio & Core Principles Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                His Story &amp; Dedication
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                With nearly three decades of experience in electrical, mechanical, and electronics systems, I have worked in major establishments including Solaire Resort & Casino, Makati Medical Center, Grand Hyatt Manila, Philamlife Tower, and the Mauban Thermal Power Plant. Throughout my career, I have specialized in power generation systems, HVSG/LVSG operations, motor controls, industrial instrumentation, troubleshooting, preventive maintenance, and the repair of various electronic devices and computer systems. My extensive hands-on experience has equipped me with the skills to diagnose, repair, and maintain complex electrical and electronic systems efficiently and reliably.
              </p>
            </div>

            {/* Simplified Values Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                The Values of Renato's Workshop
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded border border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <ShieldCheck className="h-4.5 w-4.5" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Honesty First</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    If an appliance is not worth repairing or is simple to fix, we tell you upfront. Diagnostics are always 100% free.
                  </p>
                </div>

                <div className="rounded border border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Heart className="h-4.5 w-4.5" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase">True Precision</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    We repair at the component level—swapping out damaged capacitors and resistors rather than whole circuit boards.
                  </p>
                </div>

                <div className="rounded border border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Star className="h-4.5 w-4.5" />
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Reliable Guarantee</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    All completed repairs come with our solid local workshop warranty, giving you complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
