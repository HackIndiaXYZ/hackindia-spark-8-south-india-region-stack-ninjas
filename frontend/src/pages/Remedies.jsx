import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Apple, Coffee, Droplets, Wind, Zap, ChevronRight, Info } from 'lucide-react';
import { Card, Button } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';

export const Remedies = () => {
  const { t } = useLanguage();

  const remedies = [
    {
      title: t("Digestion Booster", "செரிமான மேம்பாடு"),
      condition: t("Indigestion & Bloating", "செரிமானமின்மை மற்றும் வாயுத்தொல்லை"),
      food: t("Ginger & Cumin", "இஞ்சி மற்றும் சீரகம்"),
      recipe: t(
        "Boil 1-inch crushed ginger and 1 tsp cumin seeds in 2 cups of water. Reduce to 1 cup, strain, and drink warm after meals.",
        "1 அங்குல நசுக்கிய இஞ்சி மற்றும் 1 டீஸ்பூன் சீரகத்தை 2 கப் நீரில் கொதிக்கவிடவும். அது 1 கப்பாக வற்றியதும் ஆறவைத்து உணவுக்குப் பின் குடிக்கவும்."
      ),
      icon: <Zap className="text-orange-500" />,
      color: "bg-orange-500/10"
    },
    {
      title: t("Immunity Shot", "நோய் எதிர்ப்பு சக்தி"),
      condition: t("Low Immunity & Vitality", "குறைந்த நோய் எதிர்ப்பு சக்தி"),
      food: t("Amla & Turmeric", "நெல்லிக்காய் மற்றும் மஞ்சள்"),
      recipe: t(
        "Mix fresh amla juice with a pinch of organic turmeric and honey. Consume daily morning for strong immunity.",
        "புதிய நெல்லிக்காய் சாறுடன் ஒரு சிட்டிகை மஞ்சள் மற்றும் தேன் கலந்து தினமும் காலையில் குடித்து வர நோய் எதிர்ப்பு சக்தி அதிகரிக்கும்."
      ),
      icon: <Apple className="text-red-500" />,
      color: "bg-red-500/10"
    },
    {
      title: t("Respiratory Care", "சுவாசப் பாதுகாப்பு"),
      condition: t("Cold, Cough & Sinus", "சளி, இருமல் மற்றும் சைனஸ்"),
      food: t("Tulsi & Black Pepper", "துளசி மற்றும் மிளகு"),
      recipe: t(
        "Boil 10 Tulsi leaves and 5 crushed peppercorns. Add a little palm sugar (Karupatti). Drink as herbal tea twice a day.",
        "10 துளசி இலைகள் மற்றும் 5 நசுக்கிய மிளகை சேர்த்து கொதிக்க விடவும். சிறிது கருப்பட்டி சேர்த்து ஒரு நாளைக்கு இருமுறை குடிக்கவும்."
      ),
      icon: <Leaf className="text-green-500" />,
      color: "bg-green-500/10"
    },
    {
      title: t("Joint Health", "மூட்டு ஆரோக்கியம்"),
      condition: t("Joint Pains & Inflammation", "மூட்டு வலி மற்றும் வீக்கம்"),
      food: t("Garlic & Fenugreek", "பூண்டு மற்றும் வெந்தயம்"),
      recipe: t(
        "Soak 1 tsp fenugreek seeds overnight. Eat them on an empty stomach with 1-2 raw garlic cloves to reduce inflammation.",
        "1 டீஸ்பூன் வெந்தயத்தை இரவில் ஊறவைக்கவும். காலையில் வெறும் வயிற்றில் 1-2 பூண்டு பற்களுடன் சேர்த்துச் சாப்பிடவும்."
      ),
      icon: <Droplets className="text-blue-500" />,
      color: "bg-blue-500/10"
    },
    {
      title: t("Natural Coolant", "உடல் குளிர்ச்சி"),
      condition: t("Body Heat & Acidity", "உடல் சூடு மற்றும் அமிலத்தன்மை"),
      food: t("Aloe Vera & Buttermilk", "கற்றாழை மற்றும் மோர்"),
      recipe: t(
        "Blend clean aloe vera gel into fresh buttermilk. Season with cumin powder and curry leaves for a refreshing summer drink.",
        "கற்றாழை ஜெல்லுடன் புதிய மோரைச் சேர்த்து அரைக்கவும். அதனுடன் சீரகப்பொடி மற்றும் கறிவேப்பிலை சேர்த்துப் பருகவும்."
      ),
      icon: <Wind className="text-cyan-500" />,
      color: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="pb-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">
          {t("Nature's Pharmacy", "இயற்கை மருந்தகம்")}
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-headline text-on-surface tracking-tight leading-tight">
          {t("Traditional Home Remedies", "பாரம்பரிய வீட்டு வைத்தியம்")}
        </h1>
        <p className="text-on-surface-variant text-xl font-medium mt-4 max-w-2xl">
          {t(
            "Time-tested Tamil home remedies using common kitchen ingredients. Remember, prevention is better than cure.",
            "அஞ்சறைப் பெட்டிப் பொருட்களைக் கொண்டு செய்யப்படும் பாரம்பரிய வைத்தியங்கள். சிகிச்சையை விடத் தற்காப்பே சிறந்தது."
          )}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {remedies.map((remedy, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-8 h-full flex flex-col group hover:shadow-2xl transition-all border-outline-variant/10">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${remedy.color} transition-transform group-hover:scale-110`}>
                  {remedy.icon}
                </div>
                <div>
                   <h3 className="text-xl font-black text-on-surface tracking-tight leading-tight">{remedy.title}</h3>
                   <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-60">{remedy.condition}</span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                 <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 mb-2">
                     {t("Primary Ingredients", "முக்கிய பொருட்கள்")}
                   </h4>
                   <p className="font-bold text-on-surface flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                     {remedy.food}
                   </p>
                 </div>

                 <div className="p-5 bg-surface-container/50 rounded-2xl border border-outline-variant/10">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
                      {t("Preparation", "தயாரிப்பு முறை")}
                    </h4>
                    <p className="text-sm text-on-surface-variant font-medium leading-[1.8]">
                      {remedy.recipe}
                    </p>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant/40 italic">
                    <Info size={14} /> {t("consult if symptoms persist", "தொடர்ந்தால் மருத்துவரை அணுகவும்")}
                 </div>
                 <Button variant="ghost" size="sm" className="bg-primary/5 text-primary rounded-xl">
                    {t("Save", "சேமி")}
                 </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
