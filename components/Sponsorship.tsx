

import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SPONSORSHIP_MATRIX, STALLS } from '../constants';
import { Check, ShieldCheck, Zap, Info, Star, LayoutGrid, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SponsorshipCardProps {
    name: string;
    price: string;
    features: string[];
    isPremium: boolean;
    badgeText?: string;
    onSelect: () => void;
    colorTheme?: 'blue' | 'purple';
    description?: string;
    className?: string;
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ 
    name, 
    price, 
    features, 
    isPremium, 
    badgeText,
    onSelect,
    colorTheme = 'blue',
    description,
    className = ""
}) => {
    const themeStyles = {
        blue: {
            badge: 'bg-blue-50 text-blue-700 border-blue-100',
            button: 'bg-slate-900 text-white hover:bg-blue-600',
            check: 'text-blue-500',
            border: isPremium ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-white/50 hover:border-blue-200',
            highlight: 'bg-gradient-to-r from-blue-600 to-cyan-500',
            glow: 'from-blue-500/10 to-transparent'
        },
        purple: {
            badge: 'bg-purple-50 text-purple-700 border-purple-100',
            button: 'bg-slate-900 text-white hover:bg-purple-600',
            check: 'text-purple-500',
            border: isPremium ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/50 hover:border-purple-200',
            highlight: 'bg-gradient-to-r from-purple-600 to-indigo-500',
            glow: 'from-purple-500/10 to-transparent'
        }
    }[colorTheme];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`
                relative rounded-3xl p-1 overflow-hidden transition-all duration-300 h-full flex flex-col
                ${isPremium ? 'shadow-2xl' : 'shadow-xl'}
                ${className}
            `}
        >
             {/* Gradient Border for Premium cards */}
             {isPremium && (
                 <div className={`absolute inset-0 bg-gradient-to-br ${themeStyles.highlight} opacity-20 pointer-events-none`} />
             )}

            <div className={`
                relative h-full flex flex-col bg-white rounded-[1.3rem] p-8 border
                ${themeStyles.border}
            `}>
                
                {/* Badge */}
                {(isPremium || badgeText) && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1 z-20 text-white ${themeStyles.highlight}`}>
                        <Star size={10} fill="white" /> {badgeText || "Most Popular"}
                    </div>
                )}

                <div className="mb-8 pb-6 border-b border-dashed border-slate-200 relative z-10 text-center">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 border ${themeStyles.badge}`}>
                        {name}
                    </span>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-4xl font-black tracking-tight text-slate-900">{price}</span>
                    </div>
                    {description && (
                        <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="space-y-3 mb-8 flex-grow relative z-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                            <div className={`mt-0.5 shrink-0 transition-transform group-hover:scale-110 ${themeStyles.check}`}>
                                <Check size={16} strokeWidth={2.5} />
                            </div>
                            <span className="text-sm text-slate-600 font-medium leading-snug group-hover:text-slate-900 transition-colors">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={onSelect}
                    className={`
                        w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg relative overflow-hidden group
                        ${themeStyles.button}
                    `}
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Choose Plan
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </div>
        </motion.div>
    );
};

const Sponsorship: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate('/contact', { state: { waitlist: `Waitlist: ${planName}` } });
  };

  // Helper to transform matrix data into card data
  const getCardData = (matrixData: {
      title: string;
      tiers: { name: string; price: string }[];
      features: { name: string; values: (boolean | string)[] }[];
  }) => {
    return matrixData.tiers.map((tier, tierIdx) => {
        const features = matrixData.features
            .map(f => {
                const val = f.values[tierIdx];
                if (val === false) return null;
                if (val === true) return f.name;
                return `${f.name}: ${val}`;
            })
            .filter((f): f is string => f !== null);

        // Descriptions based on tier keywords
        let description = "";
        if (tier.name.includes("Platinum")) description = "The ultimate partnership with prestigious awards and maximum visibility.";
        else if (tier.name.includes("Gold")) description = "Premium branding with exclusive panel speaker opportunities.";
        else if (tier.name.includes("Title")) description = "Maximum brand visibility and top-tier recognition.";
        else if (tier.name.includes("Co-Sponsor") || tier.name.includes("Academic")) description = "High-impact branding and strategic engagement.";
        else if (tier.name.includes("Event") || tier.name.includes("Co-Host")) description = "Excellent visibility and engagement with the delegate audience.";

        return {
            ...tier,
            features,
            description
        };
    });
  };

  const corporateCards = getCardData(SPONSORSHIP_MATRIX.corporate);
  const educationalCards = getCardData(SPONSORSHIP_MATRIX.educational);

  return (
    <div className="bg-slate-50 relative py-20 overflow-hidden">
      {/* Dynamic Background with Tech Elements - Kept for section background only, removed from cards */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.04] pointer-events-none" />

      <SectionWrapper id="sponsorship" className="scroll-mt-24 relative z-10">
        <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-2xl bg-white border border-slate-200 text-blue-600 mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Opportunities</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Unlock exclusive access to India's top sustainability leaders. Choose the tier that aligns with your brand's vision.
            </p>
        </div>

        {/* Waitlist Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-20 relative z-20"
        >
            <div className="bg-white/60 backdrop-blur-md border border-amber-200/60 rounded-2xl p-6 flex items-start gap-4 shadow-lg shadow-amber-500/5">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl shrink-0">
                    <Info size={24} />
                </div>
                <div>
                    <div className="inline-block px-3 py-1 mb-2 rounded-lg border border-amber-300/50 shadow-sm bg-[linear-gradient(110deg,#fef3c7,45%,#ffffff,55%,#fef3c7)] bg-[length:200%_100%] animate-shimmer overflow-hidden">
                        <span className="text-xs font-extrabold text-amber-900 uppercase tracking-widest">Registrations Opening Soon</span>
                    </div>
                    <p className="text-amber-800/80 mt-1 leading-relaxed text-sm font-medium">
                        Our payment gateway is currently being set up. You can join the <strong>Priority Waitlist</strong> below to secure your spot.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* Corporate Section */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10 justify-center">
                 <div className="h-px bg-slate-300 w-12 md:w-24 opacity-50"></div>
                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Zap className="text-blue-500 fill-current" size={20} />
                    {SPONSORSHIP_MATRIX.corporate.title}
                 </h3>
                 <div className="h-px bg-slate-300 w-12 md:w-24 opacity-50"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {corporateCards.map((card, idx) => {
                    const isPremium = idx >= 3; // Gold & Platinum
                    let badgeText = undefined;
                    if (idx === 4) badgeText = "Exclusive";
                    else if (idx === 3) badgeText = "Recommended";

                    // Dynamic Width Logic:
                    // First 3 items (Indices 0,1,2): 33% width on LG screens (3 per row)
                    // Last 2 items (Indices 3,4): 50% width on LG screens (2 per row)
                    // This ensures the 5 items form a neat 3-top, 2-bottom grid that fills the width evenly.
                    const widthClass = idx < 3 
                        ? "lg:w-[calc(33.333%-16px)]" 
                        : "lg:w-[calc(50%-12px)]";

                    return (
                        <div 
                            key={idx}
                            className={`w-full md:w-[calc(50%-12px)] ${widthClass}`}
                        >
                            <SponsorshipCard 
                                name={card.name}
                                price={card.price}
                                features={card.features}
                                description={card.description}
                                isPremium={isPremium}
                                badgeText={badgeText}
                                onSelect={() => handleSelectPlan(card.name)}
                                colorTheme="blue"
                                className="h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Educational Section */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10 justify-center">
                 <div className="h-px bg-slate-300 w-12 md:w-24 opacity-50"></div>
                 <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <div className="bg-purple-100 p-1 rounded">
                         <ShieldCheck className="text-purple-600" size={16} />
                    </div>
                    {SPONSORSHIP_MATRIX.educational.title}
                 </h3>
                 <div className="h-px bg-slate-300 w-12 md:w-24 opacity-50"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {educationalCards.map((card, idx) => (
                    <div key={idx} className="w-full md:w-[calc(50%-12px)]">
                        <SponsorshipCard 
                            name={card.name}
                            price={card.price}
                            features={card.features}
                            description={card.description}
                            isPremium={idx === educationalCards.length - 1} 
                            onSelect={() => handleSelectPlan(card.name)}
                            colorTheme="purple"
                            className="h-full"
                        />
                    </div>
                ))}
            </div>
        </div>

        {/* Stalls Section */}
        <div id="stalls" className="mt-20 scroll-mt-24 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-10 w-1 bg-slate-900 rounded-full"></div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">Exhibition Stalls</h3>
                    <p className="text-slate-500 text-sm">Showcase your innovations to 1500+ delegates</p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {STALLS.map((stall, idx) => (
                    <motion.div 
                        key={idx} 
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group relative overflow-hidden flex flex-col"
                    >
                        {/* Abstract blob decoration */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500" />
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 border border-slate-200">{stall.name}</span>
                                <div className="flex items-center gap-2 mb-2">
                                     <LayoutGrid size={16} className="text-blue-500" />
                                     <span className="font-bold text-slate-700">Size: {stall.size}</span>
                                </div>
                            </div>
                            
                            <div className="mb-8 border-b border-dashed border-slate-200 pb-6">
                                <motion.span 
                                    variants={{
                                        rest: { scale: 1, originX: 0 },
                                        hover: { scale: 1.1, originX: 0, color: "#2563eb" }
                                    }}
                                    className="text-3xl font-black text-slate-900 block"
                                >
                                    {stall.price}
                                </motion.span>
                            </div>
                            
                            <div className="flex-grow mb-8 space-y-3">
                                {stall.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                            <Check size={10} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-slate-600 font-medium leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => handleSelectPlan(stall.name)}
                                className="w-full py-4 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 mt-auto"
                            >
                                Reserve Stall
                            </button>
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
