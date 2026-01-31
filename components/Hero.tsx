import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Play, X, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SHOWREEL_EMBED_URL } from '../constants';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl shadow-blue-500/5 p-2 sm:p-3 rounded-xl w-16 sm:w-20 md:w-24 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
    {/* Decorative gradient blob */}
    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 rounded-full -mr-4 -mt-4 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="relative h-6 sm:h-8 w-full overflow-hidden flex justify-center items-center mb-1">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: "0%", opacity: 1, scale: 1 }}
          exit={{ y: "-50%", opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tabular-nums"
        >
          {value < 10 ? `0${value}` : value}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
  </div>
);

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                    <X size={24} />
                </button>
                <div className="w-full h-full flex items-center justify-center text-white">
                     <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                        title="Bharat Lead Summit 2026 Showreel" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-04-10T09:00:00').getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsEventStarted(false);
      } else {
        setIsEventStarted(true);
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 md:pt-32">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-slate-600 text-sm font-semibold tracking-wide uppercase">LEADS NEXT GEN CENTRE | RUAS</span>
        </motion.div>

        {/* Main Heading optimized for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          BHARAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">LEAD</span><br/>
          SUMMIT 2026
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          The stage for <span className="font-semibold text-slate-900">Sustainable Leadership</span>.<br />
          Transforming vision towards <br className="sm:hidden" /> <span className="text-orange-500 font-bold decoration-orange-200 underline decoration-4 underline-offset-4">Viksit Bharat 2047</span>.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
           {!isEventStarted ? (
               <>
                <CountdownUnit value={timeLeft.days} label="Days" />
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
               </>
           ) : (
               <div className="px-8 py-4 bg-red-50 text-red-600 rounded-2xl font-bold text-xl border border-red-100 animate-pulse">
                   Event is Live Now!
               </div>
           )}
        </motion.div>

        {/* Details Cards */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
        >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Calendar size={18} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Event Date</p>
                    <p className="text-slate-800 font-semibold text-sm">10-11 April, 2026</p>
                </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                    <MapPin size={18} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Official Venue</p>
                    <p className="text-slate-800 font-semibold text-sm">Ramaiah University of Applied Sciences</p>
                </div>
            </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-6 pb-12"
        >
           {/* Blinker Status Pill */}
           <Link to="/register" className="cursor-pointer">
             <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full shadow-sm hover:bg-amber-100 transition-colors"
              >
                  <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 tracking-wide uppercase">Registrations Opening Soon</span>
              </motion.div>
           </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:bg-blue-500 hover:-translate-y-1 transition-all">
                 <span className="relative z-10 flex items-center gap-2">
                    <UserPlus className="w-5 h-5" /> Delegate Registration
                 </span>
              </Link>

              <Link to="/sponsorship" className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  View Sponsorship Plans <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="group px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Watch Showreel
              </button>
            </div>
        </motion.div>
      </div>
    </header>
    </>
  );
};

export default Hero;
