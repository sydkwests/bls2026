import React from 'react';
import { PARTNERS } from '../constants';

interface PartnersProps {
    showCollaborators?: boolean;
    className?: string;
    id?: string;
}

const Partners: React.FC<PartnersProps> = ({ showCollaborators = true, className = "", id }) => {
  // Quadruple the list to ensure no gaps on wide screens during animation loop
  const marqueeList = [...PARTNERS.industry, ...PARTNERS.industry, ...PARTNERS.industry, ...PARTNERS.industry];

  return (
    <div id={id} className={`bg-white border-b border-slate-100 py-10 overflow-hidden scroll-mt-24 ${className}`}>
      
      {showCollaborators && (
        <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                In Collaboration With
            </div>
            <div className="flex gap-6 items-center flex-wrap justify-center md:justify-end">
                {PARTNERS.collaborators.map((c, i) => (
                    <span key={i} className="text-slate-800 font-bold text-sm md:text-base">{c}</span>
                ))}
                <span className="hidden md:block h-4 w-px bg-slate-300"></span>
                <span className="text-slate-500 text-xs font-bold uppercase">Media: <span className="text-red-700 text-sm">{PARTNERS.media}</span></span>
            </div>
        </div>
      )}

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {marqueeList.map((partner, idx) => (
            <span 
                key={idx} 
                className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-slate-800 transition-colors uppercase font-mono tracking-tighter"
            >
                {partner}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
          {marqueeList.map((partner, idx) => (
             <span 
                key={idx} 
                className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-slate-800 transition-colors uppercase font-mono tracking-tighter"
            >
                {partner}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default Partners;