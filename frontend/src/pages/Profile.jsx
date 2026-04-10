import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Droplets, Save, Edit2, Camera } from 'lucide-react';
import { Button, Card } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';

export const Profile = () => {
  const { t } = useLanguage();
  const { profile, updateProfile } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">{t("Manage Account", "கணக்கை நிர்வகிக்கவும்")}</span>
          <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tight">{t("Your Profile", "உங்கள் சுயவிவரம்")}</h1>
        </motion.div>
        <Button 
          variant={isEditing ? "outline" : "primary"} 
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-2xl"
        >
          {isEditing ? t("Cancel", "ரத்துசெய்") : <><Edit2 className="w-4 h-4 mr-2" /> {t("Edit Profile", "சுயவிவரத்தைத் திருத்து")}</>}
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Col: Avatar & Core Info */}
        <div className="md:col-span-1 space-y-8">
          <Card className="p-8 text-center flex flex-col items-center">
            <div className="relative group mb-6">
              <div className="w-32 h-32 hero-gradient rounded-[40px] flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                {profile.avatar || profile.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 p-3 bg-white dark:bg-surface-container-high rounded-2xl shadow-xl text-primary hover:scale-110 transition-transform">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl font-black text-on-surface mb-1">{profile.name}</h3>
            <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest opacity-60">{profile.gender}, {profile.age} {t("years", "வயது")}</p>
          </Card>

          <Card className="p-6">
             <div className="space-y-4">
                <div className="flex items-center gap-4 text-on-surface-variant">
                   <div className="p-2 bg-primary/5 rounded-xl"><Mail className="w-4 h-4 text-primary" /></div>
                   <span className="text-sm font-medium truncate">{profile.email}</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                   <div className="p-2 bg-secondary/5 rounded-xl"><Phone className="w-4 h-4 text-secondary" /></div>
                   <span className="text-sm font-medium">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                   <div className="p-2 bg-tertiary/5 rounded-xl"><MapPin className="w-4 h-4 text-tertiary" /></div>
                   <span className="text-sm font-medium">{profile.location}</span>
                </div>
             </div>
          </Card>
        </div>

        {/* Right Col: Edit Form or Details */}
        <div className="md:col-span-2">
          <Card className="p-10 h-full">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Full Name", "முழு பெயர்")}</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Age", "வயது")}</label>
                      <input name="age" type="number" value={formData.age} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Gender", "பாலினம்")}</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Phone", "தொலைபேசி")}</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Blood Group", "இரத்த வகை")}</label>
                      <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface" />
                   </div>
                   <div className="col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest ml-2">{t("Location", "இடம்")}</label>
                      <input name="location" value={formData.location} onChange={handleChange} className="w-full h-14 px-6 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all font-bold text-on-surface" />
                   </div>
                </div>
                <Button type="submit" className="w-full h-16 rounded-3xl mt-8">
                  <Save className="w-5 h-5 mr-3" /> {t("Save Changes", "மாற்றங்களைச் சேமி")}
                </Button>
              </form>
            ) : (
              <div className="space-y-12">
                 <div>
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">{t("Medical Overview", "மருத்துவ கண்ணோட்டம்")}</h4>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="bg-surface-container/30 p-6 rounded-3xl">
                          <Droplets className="w-8 h-8 text-red-500 mb-2" />
                          <div className="text-3xl font-black text-on-surface">{profile.bloodGroup}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">{t("Blood Group", "இரத்த வகை")}</div>
                       </div>
                       <div className="bg-surface-container/30 p-6 rounded-3xl">
                          <Calendar className="w-8 h-8 text-blue-500 mb-2" />
                          <div className="text-3xl font-black text-on-surface">{profile.age}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">{t("Years Old", "வயது")}</div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">{t("Account Security", "கணக்கு பாதுகாப்பு")}</h4>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-6 bg-surface-container/30 rounded-3xl">
                          <div>
                             <div className="font-bold text-on-surface">{t("Two-Factor Authentication", "இரு காரணி அங்கீகாரம்")}</div>
                             <div className="text-xs text-on-surface-variant opacity-60">{t("Add extra security to your account", "உங்கள் கணக்கிற்கு கூடுதல் பாதுகாப்பைச் சேர்க்கவும்")}</div>
                          </div>
                          <div className="w-12 h-6 bg-primary/20 rounded-full relative">
                             <div className="absolute top-1 left-7 w-4 h-4 bg-primary rounded-full transition-all" />
                          </div>
                       </div>
                       <div className="flex items-center justify-between p-6 bg-surface-container/30 rounded-3xl opacity-50">
                          <div>
                             <div className="font-bold text-on-surface">{t("Face ID / Biometrics", "முக அடையாள அட்டை")}</div>
                             <div className="text-xs text-on-surface-variant">Not configured</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
