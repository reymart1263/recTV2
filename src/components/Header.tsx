import React, { useState, useEffect } from "react";
import { Phone, Clock, Menu, X, Wrench, ShieldCheck, Facebook, Youtube } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopStatus, setShopStatus] = useState({ open: true, message: "Open Now" });

  useEffect(() => {
    // Standard shop hours: 8:00 AM - 7:00 PM (8:00 - 19:00)
    const updateShopStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 8 && hours < 19) {
        setShopStatus({ open: true, message: "Open Now • Closes at 7:00 PM" });
      } else {
        setShopStatus({ open: false, message: "Closed Now • Opens at 8:00 AM" });
      }
    };

    updateShopStatus();
    const interval = setInterval(updateShopStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-amber-500 bg-slate-900 text-white">
      {/* Upper Announcement Bar */}
      <div className="bg-slate-950 text-white py-2 px-4 text-xs font-medium tracking-wide border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center justify-center gap-4">
            <a href="tel:+639123456789" className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-mono font-medium">
              <Phone className="h-3 w-3" />
              +63 (912) 345-6789
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center gap-2.5 text-left group"
          id="nav-logo"
        >
          <div className="rounded bg-amber-500 p-2 text-slate-900 shadow-md group-hover:bg-amber-400 transition-all duration-300">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-white leading-none">recTV</span>
            <span className="block text-[10px] font-bold tracking-widest text-amber-400 uppercase mt-0.5">Repair & Videoke Services</span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7">
          <button onClick={() => scrollToSection("services")} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer" id="link-services">Services</button>
          <button onClick={() => scrollToSection("calculator")} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer" id="link-calculator">Price Estimator</button>
          <button onClick={() => scrollToSection("owner")} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer" id="link-owner">About the Owner</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer" id="link-contact">Where to Find Us</button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer" id="link-faq">FAQ</button>
        </nav>

        {/* Action & Social Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-slate-800 p-2.5 text-slate-300 hover:text-white hover:bg-blue-600 transition-all shadow-sm cursor-pointer"
            title="Facebook Page"
            id="header-facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-slate-800 p-2.5 text-slate-300 hover:text-white hover:bg-rose-600 transition-all shadow-sm cursor-pointer"
            title="YouTube Channel"
            id="header-youtube"
          >
            <Youtube className="h-4 w-4" />
          </a>
          <button 
            onClick={() => scrollToSection("contact")}
            className="rounded bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-amber-400 transition-all duration-300 cursor-pointer"
            id="nav-cta-book"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800 md:hidden transition-colors"
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 py-4 px-6 md:hidden shadow-lg animate-fadeIn text-white">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection("services")} className="flex items-center text-left py-2 text-base font-semibold text-slate-200 border-b border-slate-800" id="m-link-services">Our Services</button>
            <button onClick={() => scrollToSection("calculator")} className="flex items-center text-left py-2 text-base font-semibold text-slate-200 border-b border-slate-800" id="m-link-calculator">Price Estimator</button>
            <button onClick={() => scrollToSection("owner")} className="flex items-center text-left py-2 text-base font-semibold text-slate-200 border-b border-slate-800" id="m-link-owner">Meet Renato (The Owner)</button>
            <button onClick={() => scrollToSection("contact")} className="flex items-center text-left py-2 text-base font-semibold text-slate-200 border-b border-slate-800" id="m-link-contact">Location & Contact</button>
            <button onClick={() => scrollToSection("faq")} className="flex items-center text-left py-2 text-base font-semibold text-slate-200 border-b border-slate-800" id="m-link-faq">Frequently Asked Questions</button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full rounded bg-amber-500 py-3 text-center text-sm font-bold text-slate-900 hover:bg-amber-400 transition-colors cursor-pointer"
              id="m-nav-cta"
            >
              Contact Us
            </button>
            <div className="flex items-center justify-center gap-4 mt-2 pt-4 border-t border-slate-800">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                id="m-header-facebook"
              >
                <Facebook className="h-4 w-4 text-blue-500" />
                Facebook
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                id="m-header-youtube"
              >
                <Youtube className="h-4 w-4 text-rose-500" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
