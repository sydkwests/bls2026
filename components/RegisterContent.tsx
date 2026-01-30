import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { REGISTRATION_CATEGORIES, WHATSAPP_NUMBER, GOOGLE_SCRIPT_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Loader2, Send } from 'lucide-react';

const RegisterContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    // Smooth scroll to form
    setTimeout(() => {
        document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;

    setIsSubmitting(true);
    const categoryName = REGISTRATION_CATEGORIES.find(c => c.id === selectedCategory)?.title;

    try {
        // 1. Send to Google Sheets (if configured)
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ ...formData, category: categoryName, subject: 'Delegate Waitlist' }),
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Redirect to WhatsApp
        const message = `*Priority Waitlist Request* %0A%0A*Category:* ${categoryName}%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Organization:* ${formData.organization}%0A%0AI would like to secure my spot on the waitlist.`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(whatsappUrl, '_blank');

        // Reset
        setFormData({ name: '', email: '', phone: '', organization: '' });
        setSelectedCategory(null);
    } catch (error) {
        console.error("Submission error", error);
        alert("Redirecting to WhatsApp for manual registration.");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 relative overflow-hidden py-24 min-h-screen">
       {/* Background Tech Effects */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/2" />
       
       <div className="relative z-10">
           <SectionWrapper>
              <div className="text-center mb-16">
                  <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-600 font-bold text-xs uppercase tracking-widest mb-4 border border-amber-200">
                      <span className="w-2 h-2 inline-block rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                      Opening Soon
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                      Choose Your <span className="text-blue-600">Delegate Profile</span>
                  </h2>
                  <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                      Select your category to join the priority waitlist. Be the first to know when official registrations go live.
                  </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                  {REGISTRATION_CATEGORIES.map((cat, idx) => {
                      const isSelected = selectedCategory === cat.id;
                      return (
                          <motion.div
                              key={cat.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              onClick={() => handleCategorySelect(cat.id)}
                              className={`
                                relative cursor-pointer group rounded-3xl p-8 border-2 transition-all duration-300 overflow-hidden
                                ${isSelected 
                                    ? 'bg-white border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.15)] scale-105 z-10' 
                                    : 'bg-white/60 border-white hover:border-blue-200 hover:shadow-xl hover:-translate-y-1'
                                }
                              `}
                          >
                              {/* Hover Gradient */}
                              <div className={`absolute inset-0 bg-gradient-to-br from-${cat.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                              
                              <div className="relative z-10">
                                  <div className={`w-16 h-16 rounded-2xl bg-${cat.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                      <cat.icon className={`w-8 h-8 text-${cat.color}-600`} />
                                  </div>

                                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                                  <p className="text-sm text-slate-500 mb-6 font-medium">{cat.description}</p>
                                  
                                  <ul className="space-y-3 mb-8">
                                      {cat.features.map((feature, fIdx) => (
                                          <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                              <Check size={16} className={`mt-0.5 text-${cat.color}-500 flex-shrink-0`} />
                                              {feature}
                                          </li>
                                      ))}
                                  </ul>

                                  <div className={`
                                      w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors
                                      ${isSelected ? `bg-${cat.color}-600 text-white` : 'bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white'}
                                  `}>
                                      {isSelected ? 'Selected' : 'Select Category'}
                                  </div>
                              </div>
                          </motion.div>
                      );
                  })}
              </div>

              {/* Registration Form */}
              <AnimatePresence>
                  {selectedCategory && (
                      <motion.div 
                        id="register-form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="max-w-2xl mx-auto"
                      >
                          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
                              
                              <h3 className="text-2xl font-bold text-slate-900 mb-2">Join Priority Waitlist</h3>
                              <p className="text-slate-500 mb-8 text-sm">
                                  You are registering interest for: <span className="font-bold text-blue-600">{REGISTRATION_CATEGORIES.find(c => c.id === selectedCategory)?.title}</span>
                              </p>

                              <form onSubmit={handleSubmit} className="space-y-5">
                                  <div className="grid md:grid-cols-2 gap-5">
                                      <div className="space-y-2">
                                          <label className="text-sm font-bold text-slate-700">Full Name</label>
                                          <input 
                                              required 
                                              name="name"
                                              value={formData.name}
                                              onChange={handleChange}
                                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                              placeholder="Jane Doe"
                                          />
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                          <input 
                                              required 
                                              name="phone"
                                              type="tel"
                                              value={formData.phone}
                                              onChange={handleChange}
                                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                              placeholder="+91 98765 43210"
                                          />
                                      </div>
                                  </div>

                                  <div className="space-y-2">
                                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                                      <input 
                                          required 
                                          name="email"
                                          type="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                          placeholder="jane@university.edu"
                                      />
                                  </div>

                                  <div className="space-y-2">
                                      <label className="text-sm font-bold text-slate-700">Institution / Organization</label>
                                      <input 
                                          required 
                                          name="organization"
                                          value={formData.organization}
                                          onChange={handleChange}
                                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                          placeholder="Ramaiah University / Tech Corp"
                                      />
                                  </div>

                                  <button 
                                      type="submit" 
                                      disabled={isSubmitting}
                                      className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 mt-4"
                                  >
                                      {isSubmitting ? (
                                          <>Processing <Loader2 className="animate-spin" /></>
                                      ) : (
                                          <>Secure My Spot <ChevronRight /></>
                                      )}
                                  </button>
                                  <p className="text-xs text-center text-slate-400 mt-4">
                                      This will open WhatsApp to confirm your waitlist request. No payment required yet.
                                  </p>
                              </form>
                          </div>
                      </motion.div>
                  )}
              </AnimatePresence>
           </SectionWrapper>
       </div>
    </div>
  );
};

export default RegisterContent;