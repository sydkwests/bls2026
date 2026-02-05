
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PAST_INITIATIVES, ADDITIONAL_INITIATIVES } from '../constants';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const PastInitiativesContent: React.FC = () => {
  return (
    <div id="past-initiatives" className="bg-white py-24 relative overflow-hidden scroll-mt-24">
      {/* Background Tech Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50 rounded-full blur-[100px] opacity-60 pointer-events-none translate-y-1/2 -translate-x-1/4" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none" />

      <SectionWrapper>
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Past <span className="text-blue-600">Initiatives</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                A legacy of impactful events shaping the discourse on innovation and leadership.
            </p>
        </div>

        {/* Featured Gallery Grid Layout - Centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {PAST_INITIATIVES.map((initiative, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f1f5f9/94a3b8?text=Image+Unavailable';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm">
                      <Calendar size={12} /> {initiative.year}
                   </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {initiative.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {initiative.description}
                </p>
                
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Featured Event</span>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Initiatives List */}
        <div className="relative z-10">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-4">
                    <span className="w-12 h-px bg-slate-300"></span>
                    And More Impactful Events
                    <span className="w-12 h-px bg-slate-300"></span>
                </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {ADDITIONAL_INITIATIVES.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center font-semibold text-slate-600 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:text-blue-600 transition-all duration-300 cursor-default flex items-center justify-center gap-2 group"
                 >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-sm md:text-base">{item}</span>
                 </motion.div>
              ))}
            </div>
        </div>

      </SectionWrapper>
    </div>
  );
};

export default PastInitiativesContent;
