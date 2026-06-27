import React from "react";
import { MapPin, Phone, MessageSquare, Clock, Landmark, Facebook, Youtube } from "lucide-react";
import { motion } from "motion/react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 lg:px-6"
      >
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-800 uppercase bg-amber-50 px-3.5 py-1.5 rounded border border-amber-200">
            Visit or Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Where to Find Renato's Workshop
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Drop by our fully equipped local workshop in General Trias, Cavite, or connect with us on Viber, phone, or social media. We are always happy to answer questions and look forward to serving you!
          </p>
        </div>

        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Contact Details & Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="rounded border border-slate-200 bg-white p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  Workshop Address & Contact Info
                </h3>
                
                <div className="space-y-6">
                  {/* Physical Location */}
                  <div className="flex items-start gap-4">
                    <div className="rounded bg-amber-500/10 p-2.5 text-amber-600 shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Physical Address</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        Shop 4, Ground Floor, REY-REPAIR Audio & Sound, General Trias-Dasmariñas Road, Barangay San Francisco, General Trias, 4107 Cavite, Philippines.
                      </p>
                    </div>
                  </div>

                  {/* Landmarks */}
                  <div className="flex items-start gap-4">
                    <div className="rounded bg-amber-500/10 p-2.5 text-amber-600 shrink-0 mt-0.5">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Visual Landmarks</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        Directly across from the San Francisco Barangay Hall. 50 meters past the Shell Service Station. Look for the bright blue LED banner reading <strong className="text-slate-950 font-bold">recTV</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Open Hours */}
                  <div className="flex items-start gap-4">
                    <div className="rounded bg-amber-500/10 p-2.5 text-amber-600 shrink-0 mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Workshop Hours</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-normal font-mono font-semibold">
                        Monday to Saturday: 8:00 AM – 7:00 PM<br />
                        Sunday: 9:00 AM – 5:00 PM (By Reservation Only)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Links & Social Icons */}
              <div className="space-y-6 pt-6 border-t border-slate-100 mt-8">
                {/* Communication buttons */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">Direct Support</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="tel:+639123456789"
                      className="flex items-center justify-center gap-2 rounded bg-slate-900 py-3 text-xs font-bold text-white hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 shadow-sm text-center"
                      id="direct-call"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call Renato Direct
                    </a>
                    <a
                      href="viber://chat?number=%2B639123456789"
                      className="flex items-center justify-center gap-2 rounded border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all duration-300 text-center"
                      id="viber-chat"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-amber-600" />
                      Viber Chat
                    </a>
                  </div>
                </div>

                {/* Social media connections */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">Connect With Us</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 transition-all shadow-sm cursor-pointer"
                      id="social-facebook"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook Page
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 transition-all shadow-sm cursor-pointer"
                      id="social-youtube"
                    >
                      <Youtube className="h-4 w-4 text-rose-600" />
                      YouTube Channel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Simulated Interactive Map */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="rounded border border-slate-200 bg-slate-950 overflow-hidden shadow-sm relative h-full min-h-[400px] flex flex-col justify-end p-6 group">
              {/* Custom High-Quality SVG Map Drawing for aesthetic styling */}
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center pointer-events-none p-4">
                {/* Simulated Grid Road Lines */}
                <svg className="w-full h-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="10" y1="0" x2="10" y2="100" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#334155" strokeWidth="2.5" />
                  <line x1="85" y1="0" x2="85" y2="100" stroke="#334155" strokeWidth="1" />
                  <line x1="0" y1="35" x2="100" y2="35" stroke="#334155" strokeWidth="3" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="#334155" strokeWidth="1" />
                  {/* Landmark nodes */}
                  <rect x="15" y="10" width="18" height="12" rx="2" fill="#1e293b" />
                  <rect x="58" y="10" width="22" height="12" rx="2" fill="#1e293b" />
                  <circle cx="24" cy="16" r="2" fill="#f59e0b" />
                  <circle cx="69" cy="16" r="2" fill="#e2e8f0" />
                  {/* Shop Indicator Ping */}
                  <circle cx="50" cy="35" r="4" className="fill-amber-500 animate-ping" />
                  <circle cx="50" cy="35" r="2.5" className="fill-amber-400" />
                </svg>

                {/* Map Labels */}
                <div className="absolute top-[28%] left-[24%] text-[10px] font-bold text-slate-400 font-mono tracking-wider text-center">
                  GEN. TRIAS-DASMARIÑAS HIGHWAY
                </div>
                <div className="absolute top-[4%] left-[68%] text-[9px] font-bold text-slate-500 font-mono">
                  BARANGAY HALL
                </div>
                <div className="absolute top-[4%] left-[24%] text-[9px] font-bold text-slate-500 font-mono">
                  SHELL STATION
                </div>

                {/* Pulsing Target Overlay */}
                <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-amber-400/80 rounded px-4 py-2 text-center flex flex-col items-center shadow-lg">
                  <span className="text-[11px] font-extrabold text-white leading-none tracking-wider">recTV SHOP</span>
                  <span className="text-[9px] font-semibold text-amber-400 mt-1 uppercase">Shop Location</span>
                </div>
              </div>

              {/* Bottom bar of map mock */}
              <div className="relative z-10 w-full rounded bg-slate-900/95 border border-slate-800 p-4 flex items-center justify-between text-xs backdrop-blur-sm">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  Open in Google Maps
                </span>
                <a
                  href="https://maps.google.com/?q=General+Trias+Cavite+Barangay+San+Francisco"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded bg-amber-500 px-4 py-2 font-bold text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                  id="maps-link"
                >
                  Navigate
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
