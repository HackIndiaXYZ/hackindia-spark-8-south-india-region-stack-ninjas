import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, BookOpen, ArrowRight, Thermometer, Activity, Droplets, Heart } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold mb-8 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-primary-fixed" />
                <span className="tracking-wider uppercase">{t("TAMIL NADU'S TRUSTED HEALTH COMPANION", "தமிழகத்தின் நம்பகமான ஆரோக்கிய துணை")}</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black font-headline text-white leading-[0.95] tracking-tight mb-8">
                {t("Your Health,", "உங்கள் ஆரோக்கியம்,")} <br />
                <span className="text-primary-fixed-dim">{t("Our Priority", "எங்கள் முன்னுரிமை")}</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-medium">
                {t(
                  "AI-powered symptom checking, specialist matching, and health guidance tailored for Tamil Nadu — in your language.",
                  "தமிழ்நாட்டிற்காக AI-ஆல் இயக்கப்படும் அறிகுறி பரிசோதனை, நிபுணர் பொருத்தம் மற்றும் ஆரோக்கிய வழிகாட்டுதல்."
                )}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/symptoms')} className="flex-1 sm:flex-initial shadow-2xl">
                  {t("Check Symptoms", "அறிகுறிகளை சரிபார்க்கவும்")}
                  <Activity className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/doctors')} className="flex-1 sm:flex-initial bg-white/5 border-white/30 text-white hover:bg-white/10">
                  {t("Find Doctors", "மருத்துவர்களை கண்டுபிடி")}
                  <Search className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-12">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-primary-fixed flex items-center justify-center text-xs font-bold shadow-xl">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center text-xs font-bold text-primary shadow-xl">+</div>
                </div>
                <p className="text-white/70 text-sm font-medium">
                  <span className="text-white font-black text-lg">50,000+</span> {t("families trust Tamil Nalam", "குடும்பங்கள் தமிழ் நலத்தை நம்புகின்றன")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] p-8 w-full max-w-md border border-white/20 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-fixed/20 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center shadow-inner">
                    <Heart className="w-8 h-8 text-on-primary-fixed fill-on-primary-fixed" />
                  </div>
                  <div>
                    <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest">{t("Live Health Status", "நேரடி ஆரோக்கிய நிலை")}</h3>
                    <p className="text-white font-black text-2xl">{t("Normal ✓", "இயல்பானது ✓")}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: t("Temperature", "வெப்பநிலை"), value: "98.6°F", icon: Thermometer, color: "text-orange-400" },
                    { label: t("Heart Rate", "இதய துடிப்பு"), value: "72 bpm", icon: Activity, color: "text-pink-400" },
                    { label: t("Blood Pressure", "இரத்த அழுத்தம்"), value: "120/80", icon: Droplets, color: "text-blue-400" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 rounded-3xl p-5 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl bg-white/5 ${stat.color}`}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <span className="text-white/70 font-bold uppercase text-[10px] tracking-widest">{stat.label}</span>
                      </div>
                      <span className="text-white font-black text-xl">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="mt-8 w-full py-4 text-white border-white/20 hover:bg-white/10 rounded-2xl font-bold" onClick={() => navigate('/dashboard')}>
                  {t("View Full Dashboard", "முழு டேஷ்போர்டைப் பார்க்கவும்")} →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.span 
              className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {t("Empowering Health", "ஆரோக்கியத்தை மேம்படுத்துதல்")}
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-6xl font-black font-headline text-on-surface mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {t("Everything you need for better health", "சிறந்த ஆரோக்கியத்திற்கு தேவையான அனைத்தும்")}
            </motion.h2>
            <motion.p 
              className="text-on-surface-variant text-xl max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {t(
                "From AI-driven symptom analysis to finding specialists near you — all in Tamil and English.",
                "AI-ஆல் இயக்கப்படும் அறிகுறி பகுப்பாய்வு முதல் உங்களுக்கு அருகிலுள்ள நிபுணர்களைக் கண்டறிவது வரை."
              )}
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                title: t("AI Symptom Checker", "AI அறிகுறி சரிபார்ப்பு"), 
                desc: t("Describe your symptoms and get instant AI-powered analysis with specialist recommendations.", "உங்கள் அறிகுறிகளை விவரிக்கவும், உடனடி AI பகுப்பாய்வு மற்றும் நிபுணர் பரிந்துரைகளைப் பெறவும்."),
                icon: ShieldCheck, color: "primary", path: "/symptoms"
              },
              { 
                title: t("Find Specialists", "நிபுணர்களைக் கண்டறியுங்கள்"), 
                desc: t("Browse verified doctors across Tamil Nadu, filtered by specialty, location and availability.", "தமிழ்நாடு முழுவதும் சரிபார்க்கப்பட்ட மருத்துவர்களை சிறப்பு, இடம் மற்றும் கிடைக்கும் தன்மை ஆகியவற்றால் வடிகட்டுங்கள்."),
                icon: Search, color: "secondary", path: "/doctors"
              },
              { 
                title: t("Health Guide", "ஆரோக்கிய வழிகாட்டி"), 
                desc: t("Seasonal health tips, traditional remedies, and wellness articles curated for Tamil Nadu's climate.", "தமிழ்நாட்டின் காலநிலைக்காக தயாரிக்கப்பட்ட பருவகால ஆரோக்கிய குறிப்புகள், பாரம்பரிய மருந்துகள்."),
                icon: BookOpen, color: "tertiary", path: "/guide"
              },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full p-10 cursor-pointer group" onClick={() => navigate(feature.path)}>
                  <div className={`w-16 h-16 bg-${feature.color}/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-black font-headline text-on-surface mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 font-medium">{feature.desc}</p>
                  <div className={`flex items-center gap-2 text-${feature.color} font-bold text-sm uppercase tracking-widest`}>
                    <span>{t("Learn more", "மேலும் அறிய")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-error/5 border-2 border-error/10 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-error mb-4">{t("Emergency? Call 108", "அவசரமா? 108 ஐ அழைக்கவும்")}</h2>
                <p className="text-error/70 text-lg font-bold uppercase tracking-widest">{t("FOR LIFE-THREATENING SITUATIONS IN TAMIL NADU", "தமிழ்நாட்டில் உயிருக்கு ஆபத்தான சூழல்களுக்கு")}</p>
              </div>
              <a href="tel:108" className="bg-error text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-error/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-4">
                <Activity className="w-8 h-8" />
                {t("Call Now", "இப்போது அழை")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
