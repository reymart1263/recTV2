/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import DashboardHub from "./components/DashboardHub";
import Services from "./components/Services";
import QuoteCalculator from "./components/QuoteCalculator";
import AboutOwner from "./components/AboutOwner";
import LocationContact from "./components/LocationContact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white antialiased flex flex-col justify-between">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <DashboardHub onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Services onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === "calculator" && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <QuoteCalculator onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === "owner" && (
            <motion.div
              key="owner"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <AboutOwner />
            </motion.div>
          )}

          {activePage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <LocationContact />
            </motion.div>
          )}

          {activePage === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <FAQ />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer activePage={activePage} onNavigate={handleNavigate} />
    </div>
  );
}

