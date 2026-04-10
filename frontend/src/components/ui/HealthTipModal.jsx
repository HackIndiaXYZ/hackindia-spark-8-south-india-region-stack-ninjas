import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './index';
import { useLanguage } from '../../context/LanguageContext';

export const HealthTipModal = ({ tip, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {tip && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-full max-w-md bg-surface-container-lowest rounded-[40px] p-8 shadow-3xl border border-white/20 z-[100000]"
          >
             <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-surface-container rounded-full transition-colors">
                <X className="w-5 h-5 text-on-surface-variant" />
             </button>

             <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                  <span className={`p-3 rounded-2xl ${tip.color}`}>
                    {tip.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{tip.category}</span>
               </div>
               <h2 className="text-3xl font-black font-headline text-on-surface tracking-tight">{tip.title}</h2>
             </div>

             <div className="space-y-6 mb-8">
                <div className="p-5 bg-surface-container rounded-3xl border border-outline-variant/20 italic text-on-surface-variant font-medium">
                  "{tip.desc}"
                </div>
                
                <div className="space-y-3">
                   <h4 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <CheckCircle2 size={14} /> {t('Instructions & Benefits', 'வழிமுறைகள் மற்றும் நன்மைகள்')}
                   </h4>
                   <p className="text-sm text-on-surface font-medium leading-[1.8] opacity-80">
                     {tip.details}
                   </p>
                </div>
             </div>

             <Button className="w-full h-14 rounded-2xl shadow-2xl" onClick={onClose}>
               {t('Understood', 'புரிந்துகொண்டேன்')}
             </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
