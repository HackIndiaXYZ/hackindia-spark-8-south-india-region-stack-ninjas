import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Heart, 
  Droplets, 
  Thermometer, 
  Flame, 
  Calendar, 
  ArrowUpRight, 
  Clock, 
  User, 
  ShieldAlert,
  ChevronRight,
  Plus,
  Search
} from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import { HEALTH_TIPS } from '../data/healthTips';

export const Dashboard = ({ onSelectTip }) => {
  const { t, lang } = useLanguage();
  const { profile } = useUser();
  const navigate = useNavigate();

  const metrics = [
    { label: t("Heart Rate", "இதய துடிப்பு"), value: "72", unit: "bpm", icon: Heart, color: "text-red-500", bg: "bg-red-50", trend: "+2%", status: "Normal" },
    { label: t("Blood Pressure", "இரத்த அழுத்தம்"), value: "120/80", unit: "mmHg", icon: Activity, color: "text-blue-500", bg: "bg-blue-50", trend: "Stable", status: "Optimal" },
    { label: t("Oxygen Saturation", "ஆக்சிஜன் அளவு"), value: "98", unit: "%", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-50", trend: "Stable", status: "Healthy" },
    { label: t("Body Temp", "வெப்பநிலை"), value: "98.6", unit: "°F", icon: Thermometer, color: "text-orange-500", bg: "bg-orange-50", trend: "0.1°", status: "Normal" },
  ];

  const handleActivityClick = (act) => {
    if (act.tipId) {
      const tip = HEALTH_TIPS.find(tip => tip.id === act.tipId);
      if (tip) {
        onSelectTip({
          ...tip,
          title: lang === 'en' ? tip.title : tip.titleTa,
          desc: lang === 'en' ? tip.desc : tip.descTa,
          details: lang === 'en' ? tip.details : tip.detailsTa,
          icon: tip.icon === 'Droplets' ? <Droplets className={tip.iconColor} /> : <Plus className={tip.iconColor} />
        });
      }
    } else if (act.path) {
      navigate(act.path);
    }
  };

  const recentActivities = [
    { type: "Symptom Check", title: t("Fever & Cough Analysis", "காய்ச்சல் மற்றும் இருமல் பகுப்பாய்வு"), date: t("2 hours ago", "2 மணி நேரம் முன்"), status: "Completed", icon: ShieldAlert, iconColor: "text-primary", path: "/history" },
    { type: "Appointment", title: t("Dr. Rajesh Kumar (GP)", "டாக்டர் ராஜேஷ் குமார்"), date: t("Yesterday", "நேற்று"), status: "Confirmed", icon: Calendar, iconColor: "text-secondary", path: "/doctors" },
    { type: "Guide Read", title: t("Summer Hydration Tips", "கோடை கால நீர்ச்சத்து"), date: t("2 days ago", "2 நாட்களுக்கு முன்"), status: "Viewed", icon: Droplets, iconColor: "text-cyan-500", tipId: 'summer-hydration' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
           <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">{t("Personal Health Sanctuary", "தனிப்பட்ட ஆரோக்கிய போர்ட்டல்")}</span>
           <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tight leading-tight">
             {t(`Welcome back, ${profile.name.split(' ')[0]}!`, `மீண்டும் வருக, ${profile.name.split(' ')[0]}!`)}
           </h1>
           <p className="text-on-surface-variant text-xl font-medium mt-2">{t("Your vitals are looking great today.", "உங்கள் ஆரோக்கியம் இன்று சிறப்பாக உள்ளது.")}</p>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Metric Cards */}
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-8 group hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between mb-8">
                <div className={cn("p-4 rounded-[24px] shadow-sm group-hover:scale-110 transition-transform", m.bg)}>
                  <m.icon className={cn("w-7 h-7", m.color)} />
                </div>
                <div className="text-right">
                   <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-1">{t("Trend", "போக்கு")}</div>
                   <div className="text-xs font-black text-green-600 flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> {m.trend}
                   </div>
                </div>
              </div>
              <div className="mb-6">
                 <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-1">{m.label}</h3>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-on-surface tracking-tighter">{m.value}</span>
                   <span className="text-sm font-bold text-on-surface-variant/60">{m.unit}</span>
                 </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600">{m.status}</span>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Daily Wellness Insight */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-10 h-full relative overflow-hidden bg-surface-container border border-outline-variant/10 group cursor-pointer hover:border-primary/30 transition-all hover:shadow-2xl shadow-sm" onClick={() => navigate('/guide')}>
             <div className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none overflow-hidden rounded-tr-[40px] transition-transform duration-700 group-hover:scale-125">
                <div className="w-64 h-64 rounded-full bg-primary -mt-16 -mr-16" />
             </div>
             <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                 <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{t("Daily Insight", "இன்றைய சிறப்புத் தகவல்")}</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black font-headline text-on-surface tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors">
                    {t("The Power of Traditional Spices in Immunity", "நோய் எதிர்ப்புச் சக்திக்கு பாரம்பரிய மசாலாக்களின் வலிமை")}
                 </h2>
                 <p className="text-on-surface-variant text-lg font-medium leading-[1.8] max-w-2xl opacity-80">
                    {t("Turmeric, black pepper, and cumin are not just flavor enhancers; they are potent anti-inflammatory agents that protect the body against seasonal illnesses. Discover how to incorporate them effectively.", "மஞ்சள், மிளகு மற்றும் சீரகம் ஆகியவை சுவைக்கு மட்டுமல்ல; அவை உடலை தொற்றுகளில் இருந்து பாதுகாக்கும் சிறந்த மருந்துகளாகும். அவற்றை எவ்வாறு பயன்படுத்துவது என்பதை அறியவும்.")}
                 </p>
               </div>
               
               <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-8">
                 <div className="grid grid-cols-2 gap-8 border-l-2 border-primary/20 pl-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-1.5">{t("Category", "வகை")}</div>
                      <div className="text-sm font-bold text-on-surface">{t("Nutrition", "உணவு & ஊட்டச்சத்து")}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50 mb-1.5">{t("Read Time", "வாசிப்பு நேரம்")}</div>
                      <div className="text-sm font-bold text-on-surface flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 4 {t("min", "நிமிடம்")}</div>
                    </div>
                 </div>
                 <div className="flex-grow flex sm:justify-end">
                    <Button variant="ghost" className="rounded-2xl group-hover:bg-primary/5 pl-6 pr-4 h-12">
                       {t("Read Full Guide", "முழு வழிகாட்டியைப் படிக்க")} <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                 </div>
               </div>
             </div>
          </Card>
        </motion.div>

        {/* Sidebar / Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 h-full">
            <h3 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-8">{t("Quick Transitions", "விரைவான அணுகல்")}</h3>
            <div className="space-y-4">
              <Button className="w-full h-16 rounded-3xl group" onClick={() => navigate('/symptoms')}>
                 <ShieldAlert className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                 {t("Start Analysis", "பரிசோதனையைத் தொடங்கு")}
              </Button>
              <Button variant="outline" className="w-full h-16 rounded-3xl border-secondary/20 hover:bg-secondary/5 text-secondary group" onClick={() => navigate('/doctors')}>
                 <Search className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                 {t("Find a Specialist", "நிபுணரைத் தேடு")}
              </Button>
              <Button variant="outline" className="w-full h-16 rounded-3xl border-tertiary/20 hover:bg-tertiary/5 text-tertiary group" onClick={() => navigate('/guide')}>
                 <Plus className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform" />
                 {t("Health Resources", "ஆரோக்கிய வளங்கள்")}
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Recent Activities */}
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-10">
            <h2 className="text-2xl font-black text-on-surface tracking-tight mb-8">{t("Recent Activity Log", "சமீபத்திய நடவடிக்கைகள்")}</h2>
            <div className="space-y-6">
              {recentActivities.map((act, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-6 p-6 bg-surface-container/30 rounded-[32px] hover:bg-surface-container/50 transition-all cursor-pointer group border border-outline-variant/10"
                  onClick={() => handleActivityClick(act)}
                >
                   <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform bg-white", act.iconColor)}>
                      <act.icon className="w-7 h-7" />
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50">{act.type}</span>
                         <span className="w-1 h-1 rounded-full bg-outline-variant" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/50">{act.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-on-surface">{act.title}</h4>
                   </div>
                   <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">{act.status}</span>
                      <ChevronRight className="w-6 h-6 text-on-surface-variant opacity-30 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                   </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};
