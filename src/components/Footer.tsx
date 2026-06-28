import React from "react";
import { ShieldCheck, Award } from "lucide-react";

interface FooterProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Footer({ activePage, onNavigate }: FooterProps) {

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* Upper Footer: Core Trust Badges */}
      <div className="border-b border-slate-900 py-10 bg-slate-900/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded bg-blue-500/10 p-3 text-blue-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Reliable Repair Guarantee</h4>
              <p className="text-xs text-slate-500 mt-1">We stand behind our work to guarantee a highly reliable, precise repair.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded bg-blue-500/10 p-3 text-blue-500">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Certified Electronics Specialist</h4>
              <p className="text-xs text-slate-500 mt-1">Lead tech Renato holds advanced certification in micro-soldering and acoustics.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyrights bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-[10px] text-slate-600 font-medium">
          <p>© {new Date().getFullYear()} recTV & Videoke Services. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}
