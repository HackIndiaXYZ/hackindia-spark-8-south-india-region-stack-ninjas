import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Dumbbell, Leaf, Zap, ChevronRight, Sparkles } from 'lucide-react';
import { Card } from '../ui';
import { useLanguage } from '../../context/LanguageContext';
import { HEALTH_TIPS } from '../../data/healthTips';

const IconMap = {
  Droplets: Droplets,
  Dumbbell: Dumbbell,
  Leaf: Leaf,
  Zap: Zap
};

export const HealthTips = ({ onSelectTip }) => {
  const { t, lang } = useLanguage();

  return (
    <aside className="hidden xl:flex flex-col w-80 shrink-0 border-l border-outline-variant/30 h-[calc(100vh-64px)] sticky top-16 bg-surface-container-low/30 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-headline font-black text-on-surface uppercase tracking-widest text-sm">
            {t('Daily Health Tips', 'தினசரி ஆரோக்கியம்')}
          </h2>
        </div>

        <div className="space-y-6">
          {HEALTH_TIPS.map((tip, idx) => {
            const Icon = IconMap[tip.icon] || Zap;
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card 
                  className="p-5 hover:border-primary/20 transition-all group overflow-hidden relative cursor-pointer"
                  onClick={() => onSelectTip({
                    ...tip,
                    title: lang === 'en' ? tip.title : tip.titleTa,
                    desc: lang === 'en' ? tip.desc : tip.descTa,
                    details: lang === 'en' ? tip.details : tip.detailsTa,
                    icon: <Icon className={tip.iconColor} />
                  })}
                >
                  <div className={`absolute top-0 right-0 w-16 h-16 ${tip.color} rounded-bl-[40px] -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="p-2 rounded-xl bg-white dark:bg-surface-container-high shadow-sm">
                        <Icon className={tip.iconColor} size={18} />
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50">
                        {t(tip.category, tip.category)}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {lang === 'en' ? tip.title : tip.titleTa}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed opacity-70 line-clamp-2">
                      {lang === 'en' ? tip.desc : tip.descTa}
                    </p>
                    
                    <button className="flex items-center gap-1 text-[10px] font-bold text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('Read more', 'மேலும் படிக்க')} <ChevronRight size={10} />
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Card className="mt-10 p-6 bg-primary text-white border-0 overflow-hidden relative shadow-2xl shadow-primary/20">
           <div className="absolute top-0 right-0 opacity-10 blur-xl w-32 h-32 bg-white rounded-full -mr-10 -mt-10" />
           <h4 className="font-headline font-bold text-sm mb-2">{t('Stay Hydrated!', 'நீர் அருந்துங்கள்!')}</h4>
           <div className="text-2xl font-black mb-4">2.4L / 3.0L</div>
           <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                className="bg-white h-full"
              />
           </div>
           <p className="text-[10px] mt-4 opacity-70 font-medium">
             {t('You are 80% to your daily goal.', 'இன்றைய இலக்கில் 80% முடித்துவிட்டீர்கள்.')}
           </p>
        </Card>
      </div>
    </aside>
  );
};
