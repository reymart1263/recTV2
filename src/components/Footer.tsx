import React from "react";
import { Wrench, Phone, MapPin, Clock, ShieldCheck, Award, Heart, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* Upper Footer: Core Trust Badges */}
      <div className="border-b border-slate-900 py-10 bg-slate-900/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded bg-amber-500/10 p-3 text-amber-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Reliable Repair Guarantee</h4>
              <p className="text-xs text-slate-500 mt-1">We stand behind our work to guarantee a highly reliable, precise repair.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded bg-amber-500/10 p-3 text-amber-500">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Certified Electronics Specialist</h4>
              <p className="text-xs text-slate-500 mt-1">Lead tech Renato holds advanced certification in micro-soldering and acoustics.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded bg-amber-500/10 p-3 text-amber-500">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free Diagnostics at Workshop</h4>
              <p className="text-xs text-slate-500 mt-1">No surprise fees. We test and diagnose your equipment for free before any repair.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer: Links & Info */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-left">
            <div className="rounded bg-amber-500 p-2 text-slate-950">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-base font-bold tracking-tight text-white leading-none">recTV</span>
              <span className="block text-[9px] font-bold tracking-widest text-amber-400 uppercase mt-0.5">Repair & Videoke Services</span>
            </div>
          </div>
          
          <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
            Professional chip-level repairs for LED TVs, active sound system calibration, custom audio cabinet setups, and commercial party videoke machine rentals. Serving Cavite since 2015.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-2 text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all cursor-pointer"
              title="Facebook"
              id="footer-facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 p-2 text-slate-400 hover:text-rose-500 hover:bg-slate-800 transition-all cursor-pointer"
              title="YouTube"
              id="footer-youtube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Quick Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-amber-400 transition-colors cursor-pointer" id="footer-link-services">Our Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("calculator")} className="hover:text-amber-400 transition-colors cursor-pointer" id="footer-link-calc">Price Estimator</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("owner")} className="hover:text-amber-400 transition-colors cursor-pointer" id="footer-link-owner">Meet Renato (Owner)</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors cursor-pointer" id="footer-link-contact">Shop Location & Contact</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} className="hover:text-amber-400 transition-colors cursor-pointer" id="footer-link-faq">FAQ</button>
            </li>
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Contact Details</h4>
          <ul className="space-y-3.5 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-slate-500">Shop 4, Gen. Trias-Dasmariñas Rd, Brgy. San Francisco, General Trias, Cavite, Philippines</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="text-slate-300 font-mono font-semibold">+63 (912) 345-6789</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="text-slate-500">Mon - Sat: 8:00 AM - 7:00 PM | Sun: Reserve</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyrights bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[10px] text-slate-600 font-medium">
          <p>© {new Date().getFullYear()} recTV & Videoke Services. All Rights Reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Crafted with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> in General Trias, Cavite
          </p>
        </div>
      </div>

    </footer>
  );
}
