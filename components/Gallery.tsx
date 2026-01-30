import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { GALLERY_IMAGES } from '../constants';
import { Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <div className="bg-slate-900 py-24 relative overflow-hidden scroll-mt-24" id="gallery">
      
      {/* Lightbox Modal */}
      <AnimatePresence>
          {selectedImage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
              >
                  <button className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50">
                      <X size={24} />
                  </button>
                  <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage.url} 
                        alt={selectedImage.title} 
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
                    />
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="absolute bottom-6 left-0 right-0 text-center pointer-events-none"
                    >
                         <span className="inline-block px-6 py-3 bg-black/60 backdrop-blur-md text-white font-bold text-lg rounded-full border border-white/10 shadow-xl">
                            {selectedImage.title}
                         </span>
                    </motion.div>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>

      <SectionWrapper>
        <div className="flex items-center gap-4 mb-12">
             <div className="p-3 bg-white/10 rounded-xl text-white">
                <Camera size={24} />
             </div>
             <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white">Glimpses of <span className="text-blue-400">Activities</span></h2>
                 <p className="text-slate-400">We Lead the Leaders</p>
             </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {GALLERY_IMAGES.map((item, idx) => (
                <div 
                    key={idx} 
                    className={`
                        relative rounded-2xl overflow-hidden group cursor-zoom-in border border-white/5
                        ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}
                        ${idx === 2 ? 'md:row-span-2' : ''}
                    `}
                    onClick={() => setSelectedImage(item)}
                >
                    <img 
                        src={item.url} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-bold text-sm truncate mr-4">
                            {item.title}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Gallery;