import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Phone, Star, Clock, Calendar, X, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA } from '../data/doctors';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { cn } from '../utils/cn';


export const Doctors = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSpec = searchParams.get('spec') || '';

  const [searchTerm, setSearchTerm] = useState('');
  const [specFilter, setSpecFilter] = useState(initialSpec);
  const [locFilter, setLocFilter] = useState('');
  const [bookingDoc, setBookingDoc] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter(doc => {
      const matchSearch = !searchTerm || 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSpec = !specFilter || doc.specialist === specFilter;
      const matchLoc = !locFilter || doc.location === locFilter;
      return matchSearch && matchSpec && matchLoc;
    });
  }, [searchTerm, specFilter, locFilter]);

  const specialties = [...new Set(DOCTORS_DATA.map(d => d.specialist))];
  const locations = [...new Set(DOCTORS_DATA.map(d => d.location))];

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
        <motion.h1 
          className="text-4xl md:text-6xl font-black font-headline text-on-surface mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("Find a Doctor", "மருத்துவரைத் தேடுங்கள்")}
        </motion.h1>
        <motion.p 
          className="text-on-surface-variant text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {t("Verified specialists across Tamil Nadu.", "தமிழ்நாடு முழுவதும் சரிபார்க்கப்பட்ட நிபுணர்கள்.")}
        </motion.p>
      </div>

      {/* Filters Hub */}
      <Card className="mb-12 p-8 bg-surface-container-low border-transparent">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 relative group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary w-6 h-6 opacity-40 group-focus-within:opacity-100 transition-opacity" />
             <input 
               type="text" 
               placeholder={t("Search doctors or hospitals...", "மருத்துவர்கள் அல்லது மருத்துவமனைகளைத் தேடுங்கள்...")}
               className="w-full h-16 pl-16 pr-6 rounded-2xl bg-surface-container-highest/50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-medium text-lg"
               value={searchTerm}
               onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(12); }}
             />
          </div>
          <select 
            className="h-16 px-6 rounded-2xl bg-surface-container-highest/50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface appearance-none cursor-pointer"
            value={specFilter}
            onChange={(e) => { setSpecFilter(e.target.value); setVisibleCount(12); }}
          >
            <option value="">{t("All Specialties", "அனைத்து துறைகளும்")}</option>
            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select 
            className="h-16 px-6 rounded-2xl bg-surface-container-highest/50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface appearance-none cursor-pointer"
            value={locFilter}
            onChange={(e) => { setLocFilter(e.target.value); setVisibleCount(12); }}
          >
            <option value="">{t("All Locations", "அனைத்து இடங்களும்")}</option>
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </Card>

      {/* Doctor Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredDoctors.slice(0, visibleCount).map((doc, idx) => (
            <motion.div
              key={doc.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: (idx % 12) * 0.05 }}
            >
              <Card className="h-full flex flex-col p-8 group relative overflow-hidden bg-white/40 backdrop-blur-xl border-white/40 shadow-2xl hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 card-futuristic">
                {/* Animated Background Decor */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />

                
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 hero-gradient rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl group-hover:scale-110 transition-transform shrink-0">
                    {doc.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-black text-on-surface leading-snug group-hover:text-primary transition-colors">{doc.name}</h3>
                    <p className="text-primary font-black text-xs uppercase tracking-widest mt-1">{doc.specialist}</p>
                    <p className="text-on-surface-variant text-sm font-medium opacity-70 mt-1">{doc.hospital}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <div className="p-2 bg-surface-container rounded-xl group-hover:bg-primary/5 transition-colors">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold">{doc.area}, {doc.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <div className="p-2 bg-surface-container rounded-xl group-hover:bg-secondary/5 transition-colors">
                      <Phone className="w-4 h-4 text-secondary" />
                    </div>
                    <a href={`tel:${doc.contact}`} className="text-sm font-bold hover:text-secondary transition-colors">{doc.contact}</a>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <div className="p-2 bg-surface-container rounded-xl group-hover:bg-tertiary/5 transition-colors">
                      <Clock className="w-4 h-4 text-tertiary" />
                    </div>
                    <span className="text-sm font-bold">{doc.exp} experience</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-surface-container/30 rounded-[32px] mb-8 border border-outline-variant/10">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-black text-on-surface">{doc.rating}</span>
                    <span className="text-[10px] font-black text-on-surface-variant/50">/5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-2 h-2 rounded-full", doc.available ? "bg-green-500 animate-pulse" : "bg-red-400")} />
                    <span className={cn("text-[10px] font-black uppercase tracking-widest", doc.available ? "text-green-600" : "text-red-500")}>
                      {doc.available ? "Available" : "Busy"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button 
                    variant="primary"
                    className="w-full h-14 rounded-2xl text-base shadow-xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest transition-all hover:scale-[1.02]" 
                    onClick={() => {
                      if (doc.website) {
                        window.open(doc.website, '_blank');
                      } else {
                        setBookingDoc(doc);
                      }
                    }}
                  >
                    {doc.website ? t("Visit Website", "இணையதளம் செல்க") : t("Book Appointment", "முன்பதிவு செய்யுங்கள்")}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredDoctors.length > visibleCount && (
        <div className="flex flex-col items-center mt-16">
          <p className="text-on-surface-variant font-bold mb-6 brightness-75">
            {t("Showing", "காட்டப்படுகிறது")} {visibleCount} {t("of", "இல்")} {filteredDoctors.length} {t("Doctors", "மருத்துவர்கள்")}
          </p>
          <Button 
            size="lg" 
            className="px-12 h-16 rounded-3xl shadow-3xl font-black uppercase tracking-widest bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all"
            onClick={() => setVisibleCount(prev => prev + 12)}
          >
            {t("Load More Specialists", "மேலும் நிபுணர்களைக் காட்டு")}
          </Button>
        </div>
      )}

      {filteredDoctors.length === 0 && (
        <motion.div 
          className="text-center py-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Search className="w-12 h-12 text-outline/30" />
          </div>
          <h2 className="text-2xl font-black text-on-surface mb-4 uppercase tracking-widest">{t("No Match Found", "முடிவுகள் எதுவும் இல்லை")}</h2>
          <p className="text-on-surface-variant font-medium mb-10">{t("Try adjusting your filters or search keywords.", "மறுபடியும் தேடிப் பாருங்கள்.")}</p>
          <Button variant="ghost" className="underline font-black text-primary uppercase" onClick={() => { setSearchTerm(''); setSpecFilter(''); setLocFilter(''); }}>
             {t("Clear All Filters", "அனைத்தையும் நீக்கு")}
          </Button>
        </motion.div>
      )}

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingDoc && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setBookingDoc(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-lg bg-surface-container-lowest rounded-[48px] p-10 shadow-3xl border border-white/20"
            >
               <button onClick={() => setBookingDoc(null)} className="absolute top-8 right-8 p-3 hover:bg-surface-container rounded-full transition-colors">
                  <X className="w-6 h-6 text-on-surface-variant" />
               </button>

               <div className="mb-10">
                 <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">{t("Confirm Booking", "முன்பதிவை உறுதிப்படுத்துக")}</span>
                 <h2 className="text-3xl font-black font-headline text-on-surface tracking-tight">{t("Quick Appointment", "விரைவான சந்திப்பு")}</h2>
               </div>

               <div className="bg-primary/5 rounded-[32px] p-6 mb-10 border border-primary/10 flex items-center gap-5">
                 <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg shrink-0">
                    {bookingDoc.name.charAt(4)}
                 </div>
                 <div>
                    <h3 className="text-lg font-black text-on-surface">{bookingDoc.name}</h3>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">{bookingDoc.specialist}</p>
                    <div className="flex flex-col mt-1">
                      <p className="text-on-surface-variant text-xs font-semibold opacity-70">{bookingDoc.hospital}</p>
                      {bookingDoc.website && (
                        <a 
                          href={bookingDoc.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary text-[10px] font-black underline mt-1 hover:text-primary-variant transition-colors"
                        >
                          Visit Official Website
                        </a>
                      )}
                    </div>
                 </div>
               </div>

               <div className="space-y-6 mb-10">
                 {[
                   { label: t("Your Full Name", "உங்கள் முழு பெயர்"), icon: Search, type: "text", placeholder: "Arul Selvam" },
                   { label: t("Phone Number", "தொலைபேசி எண்"), icon: Phone, type: "tel", placeholder: "+91 98765 43210" },
                   { label: t("Select Date", "தேதியைத் தேர்ந்தெடுக்கவும்"), icon: Calendar, type: "date" },
                 ].map((field, i) => (
                   <div key={i} className="space-y-2">
                     <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] ml-2">{field.label}</label>
                     <input 
                       type={field.type} 
                       placeholder={field.placeholder}
                       className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface"
                     />
                   </div>
                 ))}
               </div>

               <Button size="lg" className="w-full h-16 text-xl rounded-3xl shadow-2xl shadow-primary/30" onClick={() => { alert('Appointment requested!'); setBookingDoc(null); }}>
                 <CheckCircle className="w-6 h-6 mr-3" />
                 {t("Confirm Appointment", "முன்பதிவை உறுதிப்படுத்துக")}
               </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
