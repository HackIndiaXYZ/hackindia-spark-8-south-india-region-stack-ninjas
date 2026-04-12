import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Droplets, Dumbbell, Leaf, Zap, 
  Eye, Moon, Shield, Sun, Wind, Heart, 
  Coffee, Brain, Utensils, Footprints
} from 'lucide-react';
import { Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { HEALTH_TIPS } from '../data/healthTips';
import { cn } from '../utils/cn';

const IconMap = {
  Droplets, Dumbbell, Leaf, Zap, Eye, Moon, Shield, Sun, Wind, Coffee, Brain, Utensils, Footprints
};

export const HealthTips = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="pb-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-primary">Wellness Guide</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-6 leading-[1.1]">
          {t('Health & Wellness Tips', 'ஆரோக்கியம் மற்றும் நல்வாழ்வு குறிப்புகள்')}
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl font-medium opacity-80 leading-relaxed">
          {t('Discover a vast collection of health tips to improve your daily lifestyle and long-term well-being.', 'உங்கள் அன்றாட வாழ்க்கை முறை மற்றும் நீண்டகால நல்வாழ்வை மேம்படுத்த ஆரோக்கியக் குறிப்புகள் இங்கே.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HEALTH_TIPS.map((tip, idx) => {
          const Icon = IconMap[tip.icon] || Zap;
          return (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card className="h-full p-8 group relative overflow-hidden bg-white/40 backdrop-blur-xl border-white/40 shadow-2xl hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 card-futuristic">
                {/* Animated Background Decor */}
                <div className={cn("absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity", tip.color.replace('bg-', 'bg-').split('/')[0])} />
                <div className={cn("absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity", tip.iconColor.replace('text-', 'bg-'))} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className={cn("p-4 rounded-[2rem] shadow-xl group-hover:scale-110 transition-transform", tip.color)}>
                      <Icon className={tip.iconColor} size={28} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50 px-4 py-2 bg-surface-container rounded-full">
                      {t(tip.category, tip.category)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-headline font-black text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {lang === 'en' ? tip.title : tip.titleTa}
                  </h3>
                  
                  <p className="text-on-surface-variant font-medium leading-relaxed mb-8 flex-grow">
                    {lang === 'en' ? tip.desc : tip.descTa}
                  </p>

                  <div className="pt-6 border-t border-outline-variant/10">
                    <p className="text-sm text-on-surface-variant opacity-70 leading-relaxed italic">
                      {lang === 'en' ? tip.details : tip.detailsTa}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
