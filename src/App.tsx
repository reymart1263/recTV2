/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DashboardHub from "./components/DashboardHub";
import Services from "./components/Services";
import AboutOwner from "./components/AboutOwner";
import LocationContact from "./components/LocationContact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const SECTION_IDS = ["home", "services", "owner", "contact", "faq"];

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");

  const handleNavigate = (sectionId: string) => {
    setActivePage(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const headerOffset = 120;

          // If near top, activate "home"
          if (scrollY < 200) {
            setActivePage((prev) => (prev !== "home" ? "home" : prev));
            ticking = false;
            return;
          }

          // Check sections in reverse to find which one is currently in view
          for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
            const id = SECTION_IDS[i];
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop - headerOffset;
              if (scrollY >= top) {
                setActivePage((prev) => (prev !== id ? id : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased flex flex-col justify-between">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        <DashboardHub onNavigate={handleNavigate} />
        <Services onNavigate={handleNavigate} />
        <AboutOwner />
        <LocationContact />
        <FAQ />
      </main>
      <Footer activePage={activePage} onNavigate={handleNavigate} />
    </div>
  );
}

