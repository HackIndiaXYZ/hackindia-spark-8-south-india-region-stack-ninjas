import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Landmark, Heart, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';


export const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const stats = [
    { label: t("Founded in Chennai", "சென்னையில் தொடங்கப்பட்டது"), value: "2021", icon: Landmark },
    { label: t("Districts Covered", "மாவட்டங்கள்"), value: "38", icon: Target },
    { label: t("Verified Doctors", "மருத்துவர்கள்"), value: "200+", icon: Heart },
    { label: t("Active Families", "குடும்பங்கள்"), value: "50K+", icon: Users },
  ];

  const team = [
    { name: "Dr. Arunachalam", role: "Medical Director", creds: "MBBS, MD", color: "text-primary", bg: "bg-primary/5" },
    { name: "Kavitha Rajan", role: "Chief Technology Officer", creds: "IIT Madras, AI Specialist", color: "text-secondary", bg: "bg-secondary/5" },
    { name: "Murugesan S.", role: "Public Health Lead", creds: "Community Outreach", color: "text-tertiary", bg: "bg-tertiary/5" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-24">
      <motion.button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-12 font-bold uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> {t("Back", "பின்னே")}
      </motion.button>

      {/* Mission Section */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block underline decoration-4 underline-offset-8 decoration-primary/20">{t("Our Sacred Mission", "எங்கள் லட்சியம்")}</span>
          <h1 className="text-5xl md:text-7xl font-black font-headline text-on-surface leading-[0.9] tracking-tight mb-8">
            {t("Democratizing Health for Every Tamilian", "அனைவருக்கும் ஆரோக்கியம்")}
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-8 font-medium">
            {t("We are building the future of inclusive healthcare, ensuring every individual has the guidance they need to lead a healthier life, regardless of their location or language.", "இடம் அல்லது மொழி பொருட்படுத்தாமல், ஆரோக்கியமான வாழ்க்கை வாழ தேவையான வழிகாட்டுதலை ஒவ்வொரு நபரும் பெறுவதை உறுதிசெய்கிறோம்.")}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface-container/30 p-6 rounded-3xl border border-outline-variant/10">
                <div className="text-4xl font-black text-primary mb-1 tracking-tighter">{s.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hero-gradient rounded-[48px] p-16 text-white relative overflow-hidden shadow-3xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <Heart className="w-20 h-20 text-white/20 mb-10 fill-white/10" />
          <h3 className="text-4xl font-black font-headline mb-6 tracking-tight">{t("Our Vision", "எங்கள் நோக்கம்")}</h3>
          <p className="text-white/80 text-lg font-medium leading-relaxed mb-10">
            {t("A Tamil Nadu where every person, from the hills of Nilgiris to the shores of Rameswaram, has instant access to quality healthcare guidance.", "நீலகிரி மலைகள் முதல் ராமேஸ்வரம் வரை ஒவ்வொரு தமிழருக்கும் தரமான மருத்துவ வழிகாட்டுதல் கிடைப்பதை உறுதி செய்தல்.")}
          </p>
          <div className="space-y-4">
            {[
              t("Bilingual First Design", "இருமொழி வடிவமைப்பு"),
              t("AI-Powered Rural Inclusion", "AI மூலம் கிராமப்புற மேம்பாடு"),
              t("Verified Specialist Network", "சரிபார்க்கப்பட்ட நிபுணர் குழு"),
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-primary-fixed shrink-0" />
                <span className="font-bold tracking-wide">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-4 tracking-tight">{t("The Hearts Behind the Vision", "தொலைநோக்குப் பார்வை கொண்டவர்கள்")}</h2>
        <p className="text-on-surface-variant text-lg font-medium">{t("A blend of medical expertise and technological innovation.", "மருத்துவ நிபுணத்துவம் மற்றும் தொழில்நுட்ப புத்தாக்கத்தின் கலவை.")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center group"
          >
            <div className={cn("w-32 h-32 rounded-[40px] flex items-center justify-center text-4xl font-black mb-8 shadow-2xl group-hover:scale-110 transition-transform", member.bg, member.color)}>
              {member.name.charAt(4)}
            </div>
            <h3 className="text-2xl font-black text-on-surface mb-2">{member.name}</h3>
            <p className={cn("font-black text-xs uppercase tracking-[0.2em] mb-4", member.color)}>{member.role}</p>
            <p className="text-on-surface-variant font-medium text-sm px-8 opacity-70">{member.creds}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
