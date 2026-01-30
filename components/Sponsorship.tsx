import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SPONSORSHIP_TIERS, STALLS } from '../constants';
import { Check, Star, ShieldCheck, Zap, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Sponsorship: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate('/contact', { state: { waitlist: `Waitlist: ${planName}` } });
  };

  return (
    <div className="bg-white relative py-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-orange-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <SectionWrapper id="sponsorship" className="scroll-mt-24">
        <div className="text-center mb-12 relative z-10">
            <div className="inline-block p-3 rounded-2xl bg-blue-50 text-blue-600 mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Partnership <span className="text-blue-600">Matrix</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Unlock exclusive access to India's top sustainability leaders and innovators. Choose your level of impact.
            </p>
        </div>

        {/* Waitlist Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-16 relative z-20"
        >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-4 shadow-sm">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg shrink-0">
                    <Info size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-amber-900">Registrations Opening Soon</h4>
                    <p className="text-amber-700 text-sm mt-1">
                        Our payment gateway is currently being set up. You can join the <strong>Priority Waitlist</strong> below to secure your spot and be notified immediately when payments go live.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 items-center relative z-10">
            {SPONSORSHIP_TIERS.map((tier, idx) => (
            <motion.div 
                key={idx}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`
                    relative rounded-3xl flex flex-col transition-all duration-300
                    ${tier.featured 
                    ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 p-8 min-h-[600px] ring-4 ring-blue-500/20' 
                    : 'bg-white text-slate-900 border border-slate-200 hover:shadow-xl hover:-translate-y-1 p-8 min-h-[500px]'
                    }
                `}
            >
                {tier.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest shadow-lg flex items-center gap-1 uppercase">
                        <Star size={12} fill="white" /> Most Popular
                    </div>
                )}
                
                <div className="mb-8 border-b border-dashed pb-8 border-current opacity-80">
                    <h3 className={`text-xl font-bold mb-2`}>{tier.name}</h3>
                    <div className="flex items-baseline gap-1 h-12">
                        <motion.span 
                            variants={{
                                rest: { scale: 1, originX: 0 },
                                hover: { scale: 1.15, originX: 0, textShadow: tier.featured ? "0px 0px 8px rgba(96, 165, 250, 0.5)" : "0px 0px 8px rgba(37, 99, 235, 0.3)" }
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-4xl font-black tracking-tight ${tier.featured ? 'text-blue-400' : 'text-slate-900'}`}
                        >
                            {tier.price}
                        </motion.span>
                    </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                    {tier.benefits.map((benefit, bIdx) => (
                        <motion.div 
                            key={bIdx} 
                            variants={{
                                rest: { x: 0, opacity: tier.featured ? 0.9 : 0.7 },
                                hover: { x: 5, opacity: 1 }
                            }}
                            className="flex items-start gap-3"
                        >
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tier.featured ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                <Check className="w-3 h-3" />
                            </div>
                            <span className={`text-sm ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>{benefit}</span>
                        </motion.div>
                    ))}
                </div>

                <button 
                    onClick={() => handleSelectPlan(tier.name)}
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                    tier.featured 
                    ? 'bg-white text-slate-900 hover:bg-blue-50' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'
                }`}>
                    Join Waitlist <Zap className={`w-4 h-4 ${tier.featured ? 'text-orange-500 fill-current' : 'text-yellow-400'}`} />
                </button>
            </motion.div>
            ))}
        </div>

        {/* Stalls Section */}
        <div id="stalls" className="mt-20 relative z-10 scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span> Exhibition Stalls
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
                {STALLS.map((stall, idx) => (
                    <motion.div 
                        key={idx} 
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{stall.name}</h4>
                                    <p className="text-xs text-slate-500 mt-1 font-bold uppercase bg-slate-100 inline-block px-2 py-1 rounded">{stall.size}</p>
                                </div>
                                <motion.span 
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1, color: "#2563eb" }
                                    }}
                                    className="text-xl font-bold text-blue-600 origin-right block"
                                >
                                    {stall.price}
                                </motion.span>
                            </div>
                            <div className="h-px w-full bg-slate-100 my-4"></div>
                            <motion.p 
                                variants={{
                                    rest: { color: "#475569" }, // slate-600
                                    hover: { color: "#1e293b" } // slate-800
                                }}
                                className="text-sm leading-relaxed"
                            >
                                {stall.features}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </SectionWrapper>
    </div>
  );
};

export default Sponsorship;