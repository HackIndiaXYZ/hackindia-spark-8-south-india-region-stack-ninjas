import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Stethoscope, Info, ArrowLeft, CheckCircle, Search, AlertCircle, ChevronRight } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { SYMPTOMS_LIST, SPECIALIST_MAP } from '../data/symptoms';
import { useNavigate } from 'react-router-dom';

export const Symptoms = () => {
  const { t } = useLanguage();
  const { addToHistory } = useUser();
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const toggleSymptom = (s) => {
    setSelectedSymptoms(prev => 
      prev.includes(s) ? prev.filter(item => item !== s) : [...prev, s]
    );
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
  };

  const runAnalysis = () => {
    const combined = (inputValue + ' ' + selectedSymptoms.join(' ')).toLowerCase();
    if (!combined.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      let matched = SPECIALIST_MAP['default'];
      for (const [key, val] of Object.entries(SPECIALIST_MAP)) {
        if (combined.includes(key)) {
          matched = val;
          break;
        }
      }
      setResult(matched);
      addToHistory(matched);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
      <motion.button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-10 font-bold uppercase tracking-widest"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft className="w-4 h-4" /> {t("Back to Home", "முகப்பு பக்கம்")}
      </motion.button>

      <div className="mb-12">
        <motion.span 
          className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-3 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t("AI-Powered Assessment", "AI-ஆல் இயக்கப்படும் மதிப்பீடு")}
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-6xl font-black font-headline text-on-surface mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("Symptom Checker", "அறிகுறிகளை சரிபார்க்கவும்")}
        </motion.h1>
        <motion.p 
          className="text-on-surface-variant text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {t("Select or describe your symptoms for an instant analysis.", "உடனடி பகுப்பாய்வுக்காக உங்கள் அறிகுறிகளைத் தேர்ந்தெடுக்கவும் அல்லது விவரிக்கவும்.")}
        </motion.p>
      </div>

      <Card className="mb-8 p-10">
        <h2 className="text-xl font-black text-on-surface mb-8 uppercase tracking-widest">{t("Common Symptoms", "பொதுவான அறிகுறிகள்")}</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {SYMPTOMS_LIST.map((s, idx) => (
            <button
              key={idx}
              onClick={() => toggleSymptom(s)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all border-2 ${
                selectedSymptoms.includes(s)
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-surface-container/50 border-transparent text-on-surface-variant hover:border-outline-variant/30'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <label className="text-sm font-black text-on-surface-variant uppercase tracking-widest block ml-1">{t("Or describe in your own words", "அல்லது உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும்")}</label>
          <div className="relative group">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full h-20 px-8 pr-16 rounded-3xl bg-surface-container border-2 border-transparent focus:border-primary/30 focus:bg-surface-container-lowest transition-all text-xl font-medium placeholder:text-outline/50"
              placeholder={t("e.g., headache since morning, mild fever...", "உதாரணம்: காலை முதல் தலைவலி, லேசான காய்ச்சல்...")}
            />
            <Activity className="absolute right-6 top-1/2 -translate-y-1/2 text-primary w-8 h-8 opacity-30 group-focus-within:opacity-100 transition-opacity" />
          </div>
        </div>
      </Card>

      <Button 
        size="lg" 
        onClick={runAnalysis} 
        disabled={isAnalyzing || (!inputValue.trim() && selectedSymptoms.length === 0)}
        className="w-full h-20 text-2xl"
      >
        {isAnalyzing ? (
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <span>{t("Analyzing...", "பகுப்பாய்வு செய்கிறது...")}</span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Search className="w-7 h-7" />
            <span>{t("Analyze Symptoms", "அறிகுறிகளை பகுப்பாய்வு செய்யவும்")}</span>
          </div>
        )}
      </Button>

      {/* Disclaimer */}
      <div className="mt-8 flex gap-4 p-6 bg-error/5 border-2 border-error/10 rounded-3xl">
        <AlertCircle className="text-error w-8 h-8 shrink-0" />
        <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
          {t(
            "Disclaimer: This is not a professional medical diagnosis. Please consult a qualified doctor for clinical advice. In case of severe pain or chest discomfort, contact emergency services immediately.",
            "குறிப்பு: இது ஒரு தொழில்முறை மருத்துவ நோயறிதல் அல்ல. மருத்துவ ஆலோசனைக்கு தகுதியுள்ள மருத்துவரை அணுகவும். கடுமையான வலி அல்லது மார்பு அசௌகரியம் ஏற்பட்டால், உடனடியாக அவசர சேவைகளைத் தொடர்பு கொள்ளவும்."
          )}
        </p>
      </div>

      {/* Result Section */}
      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-12 scroll-mt-24"
            id="analysis-result"
          >
            <Card className="p-10 border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
               <div className="flex items-center justify-between mb-10 relative z-10">
                 <h2 className="text-3xl font-black text-on-surface tracking-tight">{t("Analysis Core Results", "பகுப்பாய்வு முடிவுகள்")}</h2>
                 <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest rounded-full">{t("Provisional", "தற்காலிகமானது")}</span>
               </div>

               <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
                 <div className="bg-surface-container/30 rounded-[32px] p-8 border border-outline-variant/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">{t("Potential Condition", "சாத்தியமான நிலை")}</p>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Stethoscope className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-on-surface">{result.condition}</h3>
                    </div>
                 </div>
                 <div className="bg-surface-container/30 rounded-[32px] p-8 border border-outline-variant/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">{t("Recommended Specialist", "பரிந்துரைக்கப்படும் நிபுணர்")}</p>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary/10 rounded-2xl">
                        <Search className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-on-surface">{result.spec}</h3>
                    </div>
                 </div>
               </div>

               <div className="bg-primary/5 rounded-[32px] p-8 mb-8 relative z-10 border border-primary/10">
                 <h4 className="flex items-center gap-3 font-black text-primary uppercase tracking-widest text-sm mb-6">
                    <CheckCircle className="w-5 h-5" /> {t("Home Care Recommendations", "வீட்டு பராமரிப்பு பரிந்துரைகள்")}
                 </h4>
                 <ul className="grid md:grid-cols-2 gap-4">
                   {result.tips.map((tip, i) => (
                     <li key={i} className="flex gap-4 p-4 bg-white/50 dark:bg-black/10 rounded-2xl items-start font-medium text-on-surface-variant">
                       <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                       <span>{tip}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <Button size="lg" className="w-full relative z-10" onClick={() => navigate(`/doctors?spec=${result.spec}`)}>
                 {t(`Find Nearby ${result.spec}`, `அருகிலுள்ள ${result.spec} நிபுணரைத் தேடுங்கள்`)}
                 <ArrowLeft className="w-6 h-6 ml-3 rotate-180" />
               </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
