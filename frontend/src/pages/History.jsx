import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History as HistoryIcon, Clock, Calendar, ChevronRight, Stethoscope, Search, Trash2, ArrowLeft } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const History = () => {
  const { t } = useLanguage();
  const { history, clearHistory } = useUser();
  const navigate = useNavigate();

  const formatDate = (isoStr) => {
    const date = new Date(isoStr);
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatTime = (isoStr) => {
    const date = new Date(isoStr);
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">{t("Activity Log", "செயல்பாட்டு பதிவு")}</span>
          <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tight">{t("Your History", "உங்கள் வரலாறு")}</h1>
        </motion.div>
        {history.length > 0 && (
          <Button 
            variant="ghost" 
            onClick={clearHistory}
            className="text-error hover:bg-error/5"
          >
            <Trash2 className="w-4 h-4 mr-2" /> {t("Clear History", "வரலாற்றை நீக்கு")}
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {history.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-40 bg-surface-container/20 rounded-[48px] border-2 border-dashed border-outline-variant/30"
          >
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <HistoryIcon className="w-10 h-10 text-outline/30" />
            </div>
            <h2 className="text-xl font-black text-on-surface mb-2 uppercase tracking-widest">{t("No History Yet", "வரலாறு எதுவும் இல்லை")}</h2>
            <p className="text-on-surface-variant font-medium mb-8 max-w-xs mx-auto opacity-60">
              {t("Your symptom analyses and medical activities will appear here.", "உங்கள் அறிகுறி பகுப்பாய்வு மற்றும் மருத்துவ நடவடிக்கைகள் இங்கே தோன்றும்.")}
            </p>
            <Button onClick={() => navigate('/symptoms')} className="rounded-2xl">
              {t("Start first check", "முதல் சோதனையைத் தொடங்கவும்")}
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {history.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Card className="p-8 group hover:border-primary/30 transition-all border-transparent bg-surface-container-low/50">
                   <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                     <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                        <Stethoscope className="w-8 h-8" />
                     </div>
                     
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">{t("Symptom Analysis", "அறிகுறி பகுப்பாய்வு")}</span>
                           <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">
                              <Calendar className="w-3 h-3" /> {formatDate(item.timestamp)}
                           </div>
                           <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40">
                              <Clock className="w-3 h-3" /> {formatTime(item.timestamp)}
                           </div>
                        </div>
                        <h3 className="text-2xl font-black text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">{item.condition}</h3>
                        <p className="text-on-surface-variant font-medium text-sm leading-relaxed opacity-70">
                          {t(`Recommended Specialist: ${item.spec}`, `பரிந்துரைக்கப்படும் நிபுணர்: ${item.spec}`)}
                        </p>
                     </div>

                     <div className="flex gap-3 w-full md:w-auto">
                        <Button 
                          variant="outline" 
                          className="flex-1 md:flex-initial rounded-2xl"
                          onClick={() => navigate(`/doctors?spec=${item.spec}`)}
                        >
                          <Search className="w-4 h-4 mr-2" /> {t("Find Doctor", "நிபுணரைத் தேடு")}
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="p-3 rounded-2xl md:hidden lg:flex"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                     </div>
                   </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {history.length > 0 && (
         <div className="mt-12 text-center">
            <p className="text-xs text-on-surface-variant mb-6 font-bold uppercase tracking-widest opacity-40 italic">
               {t("All data is stored locally on your device.", "அனைத்து தரவும் உங்கள் சாதனத்தில் சேமிக்கப்படும்.")}
            </p>
         </div>
      )}
    </div>
  );
};
