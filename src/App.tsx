/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import QuoteCalculator from "./components/QuoteCalculator";
import AboutOwner from "./components/AboutOwner";
import InteractiveSandbox from "./components/InteractiveSandbox";
import LocationContact from "./components/LocationContact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <QuoteCalculator />
        <AboutOwner />
        <InteractiveSandbox />
        <LocationContact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

