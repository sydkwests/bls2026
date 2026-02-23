

import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { COMPETITIONS_LIST } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Scroll, X, Check, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RulesModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    title: string; 
    rules: string[] 
}> = ({ isOpen, onClose, title, rules }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[80vh]"
                >
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                           <Scroll className="text-blue-600" size={20} /> Guidelines
                        </h3>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto">
                        <h4 className="font-bold text-lg text-slate-800 mb-4">{title}</h4>
                        <div className="space-y-3">
                            {rules && rules.length > 0 ? (
                                rules.map((rule, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <Check className="text-green-500 mt-0.5 shrink-0" size={16} />
                                        <span>{rule}</span>
                                    </div>
                                ))
                            ) : (
                                <p className="text-slate-500 italic">No specific rules available at this moment.</p>
                            )}
                        </div>
                    </div>

                    <div className="p-6 border-t border-slate-100 bg-slate-50">
                        <button 
                            onClick={onClose}
                            className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

const Competitions: React.FC = () => {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState<{ isOpen: boolean, title: string, rules: string[] }>({
      isOpen: false,
      title: '',
      rules: []
  });

  const handleRegister = (title: string, externalLink?: string) => {
    if (externalLink) {
        window.open(externalLink, '_blank');
    } else {
        navigate('/contact', { state: { waitlist: `Waitlist: ${title}` } });
    }
  };

  const openRules = (title: string, rules?: string[]) => {
      setModalData({
          isOpen: true,
          title,
          rules: rules || []
      });
  };

  return (
    <div className="bg-slate-50 py-24 relative" id="events">
      <RulesModal 
        isOpen={modalData.isOpen} 
        onClose={() => setModalData(prev => ({ ...prev, isOpen: false }))}
        title={modalData.title}
        rules={modalData.rules}
      />

      <SectionWrapper>
        <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-2 block">Participate & Win</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Competitions & <span className="text-purple-600">Events</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Showcase your talent on a national stage. From AI prompting to sustainable business modeling.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPETITIONS_LIST.map((comp, idx) => {
                // @ts-ignore - checking for property that might exist
                const isLive = comp.isLive === true;
                // @ts-ignore
                const registrationLink = comp.registrationLink;
                
                return (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={!isLive ? { y: -5 } : {}}
                    className={`
                        relative rounded-3xl p-1 overflow-hidden transition-all duration-300
                        ${isLive 
                            ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)] scale-[1.02] z-10' 
                            : 'bg-white shadow-xl shadow-slate-200/50 group border border-slate-100'
                        }
                    `}
                >
                    {isLive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 animate-gradient-xy opacity-100" />
                    )}

                    <div className={`
                        relative bg-slate-50 rounded-[1.3rem] p-8 h-full flex flex-col overflow-hidden
                        ${isLive ? 'm-[2px] bg-white' : ''}
                    `}>
                         {/* Live Badge */}
                         {isLive && (
                             <div className="absolute top-4 right-4 z-20">
                                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full border border-red-100 shadow-sm animate-pulse">
                                     <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                     </span>
                                     <span className="text-[10px] font-black uppercase tracking-widest">Registrations Open</span>
                                 </div>
                             </div>
                         )}

                        <div className={`absolute top-0 right-0 w-32 h-32 ${comp.color} rounded-bl-[100%] opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                        
                        <div className={`w-14 h-14 rounded-2xl ${comp.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                            <comp.icon size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 pr-4 leading-tight">
                            {comp.title}
                        </h3>
                        
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                            {comp.description}
                        </p>

                        <div className="space-y-3 mt-auto">
                            {/* @ts-ignore */}
                            {isLive && comp.rules && (
                                <button
                                    // @ts-ignore
                                    onClick={() => openRules(comp.title, comp.rules)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-slate-100 text-slate-600 font-bold text-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                                >
                                    <Scroll size={16} /> View Rules & Guidelines
                                </button>
                            )}

                            <button 
                                onClick={() => handleRegister(comp.title, registrationLink)}
                                className={`
                                    w-full flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl transition-all shadow-lg
                                    ${isLive 
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/25 hover:scale-[1.02]' 
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }
                                `}
                            >
                                {isLive ? 'Register Now' : 'Join Waitlist'} <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )})}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Competitions;
