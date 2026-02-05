import React from 'react';
import SectionWrapper from './SectionWrapper';
import { COMPETITIONS_LIST } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Competitions: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (title: string) => {
    navigate('/contact', { state: { waitlist: `Waitlist: ${title}` } });
  };

  return (
    <div className="bg-slate-50 py-24" id="events">
      <SectionWrapper>
        <div className="text-center mb-16">
            <span className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-2 block">Participate & Win</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Competitions & <span className="text-purple-600">Events</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Showcase your talent on a national stage. From AI prompting to sustainable business modeling.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPETITIONS_LIST.map((comp, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-1 overflow-hidden shadow-xl shadow-slate-200/50 group border border-slate-100"
                >
                    <div className="bg-slate-50 rounded-[1.3rem] p-8 h-full flex flex-col relative overflow-hidden">
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

                        <button 
                            onClick={() => handleRegister(comp.title)}
                            className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors mt-auto"
                        >
                            Join Waitlist <ArrowUpRight size={16} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Competitions;