import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Tag, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { GUIDE_ARTICLES } from '../data/guide';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

export const Guide = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: t('All', 'அனைத்தும்') },
    { id: 'seasonal', label: t('Seasonal', 'பருவகாலம்') },
    { id: 'traditional', label: t('Traditional', 'பாரம்பரியமானது') },
    { id: 'diet', label: t('Diet & Nutrition', 'உணவு & ஊட்டச்சத்து') },
    { id: 'mental', label: t('Mental Wellness', 'மனநலம்') },
  ];

  const filteredArticles = activeTab === 'all' 
    ? GUIDE_ARTICLES 
    : GUIDE_ARTICLES.filter(a => a.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-24">
      <div className="mb-12">
        <motion.button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-6 font-bold uppercase tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft className="w-4 h-4" /> {t("Back", "பின்னே")}
        </motion.button>
        <div className="flex items-center gap-3 mb-4">
           <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">{t("Tamil Nadu Focused", "தமிழகம் சார்ந்தது")}</span>
        </div>
        <motion.h1 
          className="text-4xl md:text-6xl font-black font-headline text-on-surface mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("Health Guide", "ஆரோக்கிய வழிகாட்டி")}
        </motion.h1>
        <motion.p 
          className="text-on-surface-variant text-xl font-medium max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {t("Curated wellness articles tailored for Tamil Nadu's unique lifestyle, climate, and heritage.", "தமிழ்நாட்டின் வாழ்க்கை முறை, காலநிலைக்காக தயாரிக்கப்பட்ட ஆரோக்கிய குறிப்புகள்.")}
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 bg-surface-container/30 p-2 rounded-[32px] w-fit border border-outline-variant/10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
              activeTab === tab.id 
                ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                : "text-on-surface-variant hover:bg-white hover:text-primary"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col p-8 group cursor-pointer hover:border-primary/30">
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110" style={{ background: `${article.color}15`, color: article.color }}>
                    <BookOpen className="w-7 h-7" />
                 </div>
                 
                 <div className="flex items-center gap-3 mb-4">
                   <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-current" style={{ color: article.color }}>
                      {article.tag}
                   </span>
                   <div className="flex items-center gap-1.5 text-on-surface-variant/50 text-[10px] font-black uppercase tracking-tighter">
                      <Clock className="w-3 h-3" />
                      {article.mins} min read
                   </div>
                 </div>

                 <h3 className="text-2xl font-black font-headline text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                 </h3>
                 
                 <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 flex-grow opacity-80">
                    {article.desc}
                 </p>

                 <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:underline">{t("Read Full Article", "முழுக்கட்டுரை")}</span>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                 </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};
