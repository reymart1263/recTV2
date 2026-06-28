import React from "react";
import { MapPin, Clock, Landmark, Facebook, Youtube } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded border border-blue-200">
            Visit or Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Where to Find Renato's Workshop
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Drop by our fully equipped local workshop in Nagpayong, Pasig City, or connect with us on Viber, phone, or social media. We are always happy to answer questions and look forward to serving you!
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
                    <div className="rounded bg-blue-500/10 p-2.5 text-blue-600 shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Physical Address</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        Nagpayong, Barangay Pinagbuhatan, Pasig City, 1603 Metro Manila, Philippines.
                      </p>
                    </div>
                  </div>

                  {/* Landmarks */}
                  <div className="flex items-start gap-4">
                    <div className="rounded bg-blue-500/10 p-2.5 text-blue-600 shrink-0 mt-0.5">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Visual Landmarks</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        Located near the Nagpayong High School and local Pinagbuhatan markers. Look for the prominent bright blue LED banner reading <strong className="text-slate-950 font-bold">recTV</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Open Hours */}
                  <div className="flex items-start gap-4">
                    <div className="rounded bg-blue-500/10 p-2.5 text-blue-600 shrink-0 mt-0.5">
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
                {/* Social media connections */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">Connect With Us</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.facebook.com/renato.custodio2"
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

          {/* Column 2: Interactive Google Map */}
          <div className="lg:col-span-6 flex flex-col h-full min-h-[450px]">
            <div className="rounded border border-slate-200 bg-slate-100 overflow-hidden shadow-md flex-1 flex flex-col">
              {/* Live Interactive Google Map Embed */}
              <div className="relative w-full flex-1 min-h-[350px] bg-slate-200">
                <iframe
                  title="Renato's Repair Shop Location Map"
                  src="https://maps.google.com/maps?q=Nagpayong,%20Pinagbuhatan,%20Pasig%20City&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Action bar below the map */}
              <div className="w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="text-slate-300 font-semibold flex items-center gap-1.5 text-center sm:text-left">
                  <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Located in Nagpayong, Pinagbuhatan, Pasig City</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Nagpayong,+Pinagbuhatan,+Pasig+City"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center rounded bg-blue-600 px-5 py-2.5 font-bold text-white hover:bg-blue-500 transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
                  id="maps-link"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
