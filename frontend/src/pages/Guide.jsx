import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Tag, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { getGuideArticles } from '../data/guide';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

export const Guide = () => {
  const { t } = useLanguage();
  const GUIDE_ARTICLES = getGuideArticles(t);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

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

      {/* Popular Reads */}
      <div className="mb-16">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-8 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          {t("Popular Reads", "பிரபலமான கட்டுரைகள்")}
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-8 custom-scrollbar scroll-smooth">
          {GUIDE_ARTICLES.slice(0, 4).map((article) => (
            <Card 
              key={`pop-${article.id}`} 
              className="min-w-[320px] md:min-w-[420px] p-0 overflow-hidden group cursor-pointer border-none bg-surface-container shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[40px]"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="h-40 relative flex items-center justify-center p-6 bg-primary/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                <BookOpen className="w-16 h-16 text-primary/30 z-10" />
                <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-widest border border-primary/10 shadow-sm">
                  {article.tag}
                </div>
              </div>
              <div className="p-8 pb-10">
                <h3 className="text-2xl font-black font-headline text-on-surface mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-on-surface-variant font-bold opacity-60 line-clamp-2 leading-relaxed">{article.desc}</p>
              </div>
            </Card>
          ))}
        </div>
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
              onClick={() => setSelectedArticle(article)}
            >
              <Card className="h-full flex flex-col p-8 group cursor-pointer hover:border-primary/30 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none overflow-hidden rounded-tr-3xl">
                    <div className="w-48 h-48 rounded-full bg-current -mt-16 -mr-16" style={{ color: article.color }} />
                 </div>
                 
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 bg-white" style={{ color: article.color }}>
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

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/80 backdrop-blur-md"
               onClick={() => setSelectedArticle(null)}
             />
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container rounded-[40px] overflow-hidden shadow-2xl"
             >
                <div className="h-48 relative bg-gradient-to-r from-surface-container-high to-surface-container flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-on-surface-variant/10" />
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20"
                  >
                    <ArrowLeft className="w-6 h-6 rotate-45" />
                  </button>
                </div>
                
                <div className="p-10 md:p-16 overflow-y-auto max-h-[calc(90vh-16rem)] custom-scrollbar">
                   <div className="flex items-center gap-4 mb-6">
                     <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{selectedArticle.tag}</span>
                     <span className="text-xs font-bold text-on-surface-variant/40 italic">{selectedArticle.mins} MIN READ</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-8 leading-tight">{selectedArticle.title}</h2>
                   <div className="space-y-8">
                      {selectedArticle.fullContent ? (
                        selectedArticle.fullContent.map((block, i) => (
                          <div key={i}>
                            {block.type === 'header' && (
                              <h4 className="text-xl font-black text-on-surface mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-primary rounded-full" />
                                {block.text}
                              </h4>
                            )}
                            {block.type === 'text' && (
                              <p className="text-on-surface-variant font-medium leading-[1.8] opacity-80">
                                {block.text}
                              </p>
                            )}
                            {block.type === 'benefits' && (
                              <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                                  <Sparkles size={16} /> {t("Healing Benefits", "மருத்துவ நன்மைகள்")}
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4">
                                  {block.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-on-surface-variant font-bold text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {block.type === 'procedure' && (
                              <div className="bg-surface-container-highest/30 p-8 rounded-[32px] border border-outline-variant/10">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6 flex items-center gap-2">
                                  <Clock size={16} /> {t("Step-by-Step Procedure", "செய்முறை விளக்கம்")}
                                </h4>
                                <ul className="space-y-4">
                                  {block.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-4">
                                      <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-black text-xs shrink-0">{j + 1}</span>
                                      <p className="text-on-surface-variant font-medium text-sm leading-relaxed mt-1.5">{item}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="prose prose-lg max-w-none text-on-surface-variant font-medium leading-[2]">
                           <p className="text-xl text-on-surface mb-8 font-bold opacity-90">{selectedArticle.desc}</p>
                           <p>Detailed content coming soon...</p>
                        </div>
                      )}
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
