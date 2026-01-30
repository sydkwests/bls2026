import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ArrowUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAboutTeaser: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20">
        <SectionWrapper>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase mb-6">
                        <Zap size={14} /> About The Summit
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Shaping the Future of <span className="text-blue-600">Indian Leadership</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        The BharatLead Summit 2026 is a strategic platform where experience meets ambition. Hosted by the LEADS Next-Gen Centre at RUAS, we are uniting changemakers to reshape a future where business success and planetary stewardship are inseparable.
                    </p>
                    <Link to="/about" className="group inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors pb-1">
                        Read Our Full Vision <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="md:w-1/2 relative">
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img 
                            src="/images/core/home-about.jpg" 
                            alt="Summit Atmosphere" 
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                     </div>
                </div>
            </div>
        </SectionWrapper>
    </div>
  );
};

export default HomeAboutTeaser;