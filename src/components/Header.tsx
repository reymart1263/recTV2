import React, { useState, useEffect } from "react";
import { Phone, Clock, Menu, X, Wrench, ShieldCheck, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "services", label: "Services" },
  { id: "owner", label: "About the Owner" },
  { id: "contact", label: "Where to Find Us" },
  { id: "faq", label: "FAQ" },
];

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleNavClick = (page: string) => {
    setIsOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md text-slate-900 border-b border-slate-200/40 transition-colors duration-200">
      {/* Upper Announcement Bar */}
      <div className="bg-transparent text-slate-600 py-2 px-4 text-xs font-medium tracking-wide border-b border-slate-200/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center justify-center gap-4">
            <a href="tel:+639499442851" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-mono font-medium">
              <Phone className="h-3 w-3" />
              +63 (949) 944-2851
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4" onMouseLeave={() => setHoveredTab(null)}>
        <motion.button 
          onClick={() => handleNavClick("home")} 
          className="flex items-center gap-1.5 text-left group"
          id="nav-logo"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div>
            <span className="block text-lg font-bold tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">recTV</span>
            <span className="block text-[10px] font-bold tracking-widest text-blue-600 uppercase mt-0.5 group-hover:text-blue-700 transition-colors">Repair & Videoke Services</span>
          </div>
        </motion.button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredTab(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}
                id={`link-${item.id}`}
              >
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Floating Hover Background Capsule */}
                {hoveredTab === item.id && (
                  <motion.div
                    layoutId="hover-nav-capsule"
                    className="absolute inset-0 bg-slate-100 rounded -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action & Social Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://www.facebook.com/renato.custodio2"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-slate-100 border border-slate-200 p-2.5 text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm cursor-pointer"
            title="Facebook Page"
            id="header-facebook"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-slate-100 border border-slate-200 p-2.5 text-slate-600 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition-all shadow-sm cursor-pointer"
            title="YouTube Channel"
            id="header-youtube"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-slate-200"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-nav-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-slate-200/50 bg-white/95 backdrop-blur-md overflow-hidden md:hidden shadow-lg text-slate-900"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center text-left py-2 text-base font-semibold border-b border-slate-100 ${
                    activePage === item.id ? "text-blue-600 font-bold" : "text-slate-700 hover:text-blue-600"
                  }`}
                  id={`m-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center gap-4 mt-2 pt-4 border-t border-slate-200">
                <a
                  href="https://www.facebook.com/renato.custodio2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                  id="m-header-facebook"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  Facebook
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded bg-slate-100 border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all cursor-pointer"
                  id="m-header-youtube"
                >
                  <Youtube className="h-4 w-4 text-rose-600" />
                  YouTube
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

