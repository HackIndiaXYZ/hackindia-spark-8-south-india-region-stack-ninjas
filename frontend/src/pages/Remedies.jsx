import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Apple, Coffee, Droplets, Wind, Zap, ChevronRight, Info, Heart, Flower2, Moon, Sparkles, X } from 'lucide-react';
import { Card, Button } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { cn } from '../utils/cn';

export const Remedies = () => {
  const { t } = useLanguage();
  const { addToHistory } = useUser();
  const [savedStatus, setSavedStatus] = useState({});
  const [selectedRemedy, setSelectedRemedy] = useState(null);

  const handleSave = (e, remedy) => {
    e.stopPropagation();
    addToHistory({
      type: "Remedy Saved",
      title: remedy.title,
      status: "Saved",
      icon: "Leaf",
      iconColor: "text-green-500",
      details: remedy.condition
    });
    setSavedStatus(prev => ({ ...prev, [remedy.title]: true }));
    setTimeout(() => {
      setSavedStatus(prev => ({ ...prev, [remedy.title]: false }));
    }, 2000);
  };

  const remedies = [
    {
      title: t("Digestion Booster", "செரிமான மேம்பாடு"),
      condition: t("Indigestion & Bloating", "செரிமானமின்மை மற்றும் வாயுத்தொல்லை"),
      food: t("Ginger & Cumin", "இஞ்சி மற்றும் சீரகம்"),
      shortDesc: t("Traditional brew for quick digestive relief.", "விரைவான செரிமானத்திற்கான பாரம்பரிய கஷாயம்."),
      icon: <Zap className="text-orange-500" />,
      color: "bg-orange-500/10",
      benefits: [
        t("Instantly relieves stomach bloating and gas.", "வயிற்று உப்புசம் மற்றும் வாயுத் தொல்லையை நீக்குகிறது."),
        t("Enhances metabolic fire (Jataragni) for better food breakdown.", "செரிமான நெருப்பை தூண்டுகிறது."),
        t("Reduces nausea and stomach cramps naturally.", "குமட்டல் மற்றும் வயிற்று வலியை இயற்கையாக குறைக்கிறது.")
      ],
      procedure: [
        t("Take 1-inch fresh ginger and crush it slightly.", "1 அங்குல புதிய இஞ்சியை லேசாக நசுக்கவும்."),
        t("Take 1 teaspoon of cumin seeds (Jeera).", "1 தேக்கரண்டி சீரகம் எடுக்கவும்."),
        t("Boil both in 2 cups of clean water.", "இரண்டையும் 2 கப் சுத்தமான தண்ணீரில் கொதிக்க விடவும்."),
        t("Reduce the water to 1 cup by simmering.", "நீரை 1 கப்பாக வற்றும் வரை மிதமான தீயில் கொதிக்க வைக்கவும்."),
        t("Strain, let it cool slightly, and drink warm 30 minutes after your meal.", "வடிகட்டி, சிறிது ஆறவிட்டு, உணவுக்கு 30 நிமிடங்களுக்குப் பிறகு மிதமான சூட்டில் குடிக்கவும்.")
      ]
    },
    {
      title: t("Immunity Shot", "நோய் எதிர்ப்பு சக்தி"),
      condition: t("Low Immunity & Vitality", "குறைந்த நோய் எதிர்ப்பு சக்தி"),
      food: t("Amla & Turmeric", "நெல்லிக்காய் மற்றும் மஞ்சள்"),
      shortDesc: t("Power-packed morning tonic for natural defense.", "உடலின் இயற்கையான பாதுகாப்பிற்கான காலை பானம்."),
      icon: <Apple className="text-red-500" />,
      color: "bg-red-500/10",
      benefits: [
        t("Provides a massive daily dose of natural Vitamin C.", "ஏராளமான வைட்டமின் சி வழங்குகிறது."),
        t("Turmeric acts as a potent anti-inflammatory agent in the blood.", "மஞ்சள் ஒரு சிறந்த அழற்சி எதிர்ப்பு மருந்தாக செயல்படுகிறது."),
        t("Fights off daily viral and bacterial threats efficiently.", "அன்றாட வைரஸ் தொற்றுகளை எதிர்க்கிறது.")
      ],
      procedure: [
        t("Take 1 fresh Amla (Indian Gooseberry), remove seeds, and chop.", "1 நெல்லிக்காயின் விதையை நீக்கி நறுக்கிக் கொள்ளவும்."),
        t("Add a pinch of organic turmeric powder.", "ஒரு சிட்டிகை தூய மஞ்சள் தூள் சேர்க்கவும்."),
        t("Blend with a little warm water and extract the juice.", "சிறிது நீர் சேர்த்து அரைத்து சாறு எடுக்கவும்."),
        t("Add 1 teaspoon of pure honey and mix well (skip if diabetic).", "1 தேக்கரண்டி தூய தேன் கலந்து நன்றாகக் கலக்கவும்."),
        t("Consume daily on an empty stomach in the morning.", "தினம் காலையில் வெறும் வயிற்றில் குடிக்கவும்.")
      ]
    },
    {
      title: t("Respiratory Care", "சுவாசப் பாதுகாப்பு"),
      condition: t("Cold, Cough & Sinus", "சளி, இருமல் மற்றும் சைனஸ்"),
      food: t("Tulsi & Black Pepper", "துளசி மற்றும் மிளகு"),
      shortDesc: t("Quick relief from chest congestion and phlegm.", "நெஞ்சு சளியை நீக்கி உடனடி நிவாரணம் தரும்."),
      icon: <Leaf className="text-green-500" />,
      color: "bg-green-500/10",
      benefits: [
        t("Clears heavy, stubborn mucus from the respiratory tract.", "சுவாசக் குழாயில் உள்ள கடினமான சளியை நீக்குகிறது."),
        t("Relieves severe throat pain and dryness.", "தொண்டை வலி மற்றும் வறட்சியைக் குறைக்கிறது."),
        t("Reduces mild fever symptoms naturally.", "மிதமான காய்ச்சல் அறிகுறிகளை தணிக்கிறது.")
      ],
      procedure: [
        t("Pluck and wash 10-15 fresh Tulsi leaves thoroughly.", "10-15 புதிய துளசி இலைகளை கழுவவும்."),
        t("Crush 5-6 black peppercorns coarsely.", "5-6 மிளகுகளை லேசாக நசுக்கவும்."),
        t("Boil them together in 2 cups of water.", "அவற்றை 2 கப் நீரில் கொதிக்க விடவும்."),
        t("Add a small piece of Palm Jaggery (Karupatti) for sweetness.", "சுவைக்காக சிறிது கருப்பட்டி சேர்க்கவும்."),
        t("Reduce to 1 cup, filter, and drink while comfortably hot.", "1 கப்பாக வற்றியதும் சூடாக இருக்கும்போதே பருகவும்.")
      ]
    },
    {
      title: t("Joint Health", "மூட்டு ஆரோக்கியம்"),
      condition: t("Joint Pains & Inflammation", "மூட்டு வலி மற்றும் வீக்கம்"),
      food: t("Garlic & Fenugreek", "பூண்டு மற்றும் வெந்தயம்"),
      shortDesc: t("Traditional remedy to lubricate joints and reduce pain.", "மூட்டு வலிகளைக் குறைக்க பாரம்பரிய வைத்தியம்."),
      icon: <Droplets className="text-blue-500" />,
      color: "bg-blue-500/10",
      benefits: [
        t("Significantly reduces severe swelling in joints.", "மூட்டுகளில் உள்ள வீக்கத்தைக் குறைக்கிறது."),
        t("Helps lubricate the soft tissues safely over time.", "மென்மையான திசுக்களுக்கு இயற்கையாக உயவு அளிக்கிறது."),
        t("Improves mobility for elderly patients.", "முதியவர்களின் மூட்டு இயக்கத்தை மேம்படுத்துகிறது.")
      ],
      procedure: [
        t("Soak 1 teaspoon of fenugreek seeds overnight in water.", "1 தேக்கரண்டி வெந்தயத்தை இரவில் நீரில் ஊறவைக்கவும்."),
        t("In the morning, peel 2 cloves of raw garlic.", "காலையில், 2 பூண்டு பற்களை உரிக்கவும்."),
        t("Chew the garlic cloves thoroughly on an empty stomach.", "வெறும் வயிற்றில் பூண்டை நன்றாக மென்று தின்னவும்."),
        t("Swallow the soaked fenugreek seeds along with the water.", "ஊறவைத்த வெந்தயத்தை நீருடன் சேர்த்து விழுங்கவும்.")
      ]
    },
    {
      title: t("Natural Coolant", "உடல் குளிர்ச்சி"),
      condition: t("Body Heat & Acidity", "உடல் சூடு மற்றும் அமிலத்தன்மை"),
      food: t("Aloe Vera & Buttermilk", "கற்றாழை மற்றும் மோர்"),
      shortDesc: t("Soothe your stomach and reduce core body temperature.", "வயிற்றை சீராக்கி உடல் சூட்டைக் குறைக்கும் பானம்."),
      icon: <Wind className="text-cyan-500" />,
      color: "bg-cyan-500/10",
      benefits: [
        t("Lowers high body heat preventing summer mouth ulcers.", "வாய் புண்களைத் தடுக்கும் வகையில் உடல் சூட்டைக் குறைக்கிறது."),
        t("Acts as a natural antacid for severe heartburn.", "நெஞ்செரிச்சலுக்கு மருந்தாக செயல்படுகிறது."),
        t("Hydrates and clears the skin from within.", "உடலின் உள்ளிருந்து சருமத்தை நீரேற்றுகிறது.")
      ],
      procedure: [
        t("Cut a fresh Aloe Vera leaf and extract 2 spoons of transparent gel.", "புதிய கற்றாழை இலையை வெட்டி 2 ஸ்பூன் ஜெல்லை எடுக்கவும்."),
        t("Wash the gel thoroughly 7 times in running water to remove naturally occurring toxins (Aloin).", "ஜெல்லை ஓடும் நீரில் 7 முறை நன்கு கழுவவும்."),
        t("Blend the clean gel with 1 glass of fresh buttermilk.", "ஜெல்லை 1 கிளாஸ் மோரில் நன்கு கலக்கவும்."),
        t("Add a pinch of roasted cumin powder and salt.", "வறுத்த சீரகப் பொடி மற்றும் உப்பு ஒரு சிட்டிகை சேர்க்கவும்."),
        t("Drink mid-morning for the best cooling effects.", "சிறந்த பலனுக்கு காலை 11 மணியளவில் குடிக்கவும்.")
      ]
    },
    {
      title: t("Hair Vitality", "முடி வளர்ச்சி"),
      condition: t("Hair Fall & Dandruff", "முடி உதிர்தல் மற்றும் பொடுகு"),
      food: t("Curry Leaves & Coconut Oil", "கறிவேப்பிலை மற்றும் தேங்காய் எண்ணெய்"),
      shortDesc: t("Ancient secret for dark, thick, and healthy hair.", "கருமையான, அடர்த்தியான முடி வளர பண்டைய ரகசியம்."),
      icon: <Flower2 className="text-pink-500" />,
      color: "bg-pink-500/10",
      benefits: [
        t("Deeply strengthens hair follicles from the root.", "முடியின் வேர்களை பலப்படுத்துகிறது."),
        t("Prevents premature greying of hair naturally through melanin preservation.", "இளநரையை இயற்கையாகத் தடுக்கிறது."),
        t("Reduces scalp inflammation, flakiness, and dandruff.", "உச்சந்தலையில் ஏற்படும் பொடுகை குறைக்கிறது.")
      ],
      procedure: [
        t("Take a large handful of fresh, dark green curry leaves.", "ஒரு கைப்பிடி புதிய, அடர் பச்சை கறிவேப்பிலையை எடுக்கவும்."),
        t("Heat 100ml of pure, cold-pressed coconut oil in an iron pan.", "100 மில்லி சுத்தமான தேங்காய் எண்ணெயை இரும்புச் சட்டியில் சூடாக்கவும்."),
        t("Carefully drop the leaves into the hot oil and let it splutter.", "சூடான எண்ணெயில் இலைகளைப் போட்டு பொரிய விடவும்."),
        t("Turn off the heat once the oil turns slightly green.", "எண்ணெய் சற்று பச்சை நிறமாக மாறியதும் அடுப்பை அணைக்கவும்."),
        t("Cool completely, filter, and massage gently into the scalp twice a week.", "ஆறவைத்து, வடிகட்டி, வாரத்திற்கு இருமுறை உச்சந்தலையில் தேய்க்கவும்.")
      ]
    },
    {
      title: t("Deep Sleep", "ஆழ்ந்த உறக்கம்"),
      condition: t("Insomnia & Stress", "தூக்கமின்மை மற்றும் மன அழுத்தம்"),
      food: t("Warm Milk & Nutmeg", "சுடான பால் மற்றும் ஜாதிக்காய்"),
      shortDesc: t("A calming bedtime ritual to induce peaceful sleep.", "நிம்மதியான தூக்கத்தைத் தூண்டும் இரவுநேர பானம்."),
      icon: <Moon className="text-indigo-500" />,
      color: "bg-indigo-500/10",
      benefits: [
        t("Relaxes the nervous system naturally, reducing cortisol levels.", "நரம்பு மண்டலத்தை இயற்கையாக தளர்த்துகிறது."),
        t("Reduces racing thoughts and nighttime anxiety effectively.", "இரவு நேர கவலையைக் குறைக்கிறது."),
        t("Improves overall sleep efficiency without morning grogginess.", "சோர்வின்றி தூக்கத்தின் தரத்தை மேம்படுத்துகிறது.")
      ],
      procedure: [
        t("Warm a glass of milk (dairy or almond milk works fine).", "ஒரு கிளாஸ் பாலை மிதமாக சூடாக்கவும்."),
        t("Grate a very tiny pinch of fresh Nutmeg (Jaathikkai).", "நன்கு சிறிய அளவிலான ஜாதிக்காயை துருவி சேர்க்கவும்."),
        t("Mix well along with a pinch of turmeric if desired.", "விரும்பினால் ஒரு சிட்டிகை மஞ்சள் சேர்த்து நன்கு கலக்கவும்."),
        t("Drink exactly 30 minutes before your intended sleep time.", "தூங்குவதற்கு 30 நிமிடங்களுக்கு முன் குடிக்கவும்.")
      ]
    },
    {
      title: t("Menstrual Relief", "மாதவிடாய் வலி நிவாரணம்"),
      condition: t("Period Cramps & Pain", "மாதவிடாய் பிடிப்புகள் மற்றும் வலி"),
      food: t("Fenugreek & Jaggery", "வெந்தயம் மற்றும் வெல்லம்"),
      shortDesc: t("Traditional sweet remedy to ease uterine spasms.", "கர்ப்பப்பை வலியைக் குறைக்க பாரம்பரிய மருந்து."),
      icon: <Heart className="text-rose-500" />,
      color: "bg-rose-500/10",
      benefits: [
        t("Relieves severe abdominal cramping and uterine spasms.", "கடுமையான வயிற்று வலியைக் குறைக்கிறது."),
        t("Helps replenish iron lost during the menstruation cycle.", "மாதவிடாய் காலத்தில் ஏற்படும் இரும்புச் சத்துக் குறைபாட்டை நீக்குகிறது."),
        t("Balances intense hormonal fluctuations effectively.", "ஹார்மோன் ஏற்ற இறக்கங்களை சமன்படுத்துகிறது.")
      ],
      procedure: [
        t("Dry roast 1 tablespoon of fenugreek seeds until aromatic.", "1 தேக்கரண்டி வெந்தயத்தை வாசனை வரும் வரை வறுக்கவும்."),
        t("Grind it into a perfectly fine powder.", "அதை நன்றாக பொடி செய்து கொள்ளவும்."),
        t("Mix 1/2 tsp of this powder with 1 tsp of crushed jaggery or palm sugar.", "அதில் 1/2 டீஸ்பூன் பொடியுடன் வெல்லம் கலக்கவும்."),
        t("Roll it into a small ball and consume with warm water.", "அதைச் சிறிய உருண்டையாகப் பிடித்து வெதுவெதுப்பான நீருடன் சாப்பிடவும்."),
        t("Take it immediately at the first sign of cramps.", "வலி தொடங்கும்போதே இதை சாப்பிடவும்.")
      ]
    },
    {
      title: t("Throat Relief", "தொண்டை நிவாரணம்"),
      condition: t("Sore Throat & Tonsils", "தொண்டை வலி மற்றும் டான்சில்ஸ்"),
      food: t("Turmeric & Pink Salt", "மஞ்சள் மற்றும் இந்துப்பு"),
      shortDesc: t("Powerful gargle to kill bacteria and soothe the throat.", "பாக்டீரியாவை அழிக்கவும் தொண்டையை தேற்றவும் உதவும் மருந்து."),
      icon: <Droplets className="text-teal-500" />,
      color: "bg-teal-500/10",
      benefits: [
        t("Extracts excess fluid from swollen throat tissues via osmosis.", "வீங்கிய தொண்டை திசுக்களில் அடைத்துள்ள திரவத்தை வெளியேற்றுகிறது."),
        t("Acts as a direct antibacterial and antiviral wash.", "பாக்டீரியாக்களை நேரடியாக அழிக்கிறது."),
        t("Loosens thick, uncomfortable mucus in the upper throat.", "தொண்டையில் உள்ள கட்டியான சளியை தளர்த்துகிறது.")
      ],
      procedure: [
        t("Warm 1 full glass of clean drinking water.", "1 கிளாஸ் சுத்தமான தண்ணீரை சூடாக்கவும்."),
        t("Stir in half a teaspoon of rock salt (Indhuppu).", "அரை தேக்கரண்டி இந்துப்பு சேர்க்கவும்."),
        t("Add a quarter teaspoon of pure turmeric powder.", "கால் தேக்கரண்டி மஞ்சள் தூள் சேர்க்கவும்."),
        t("Gargle deeply for 30 seconds at a time.", "ஒவ்வொரு முறையும் 30 விநாடிகள் தொண்டையில் படும்படி கொப்பளிக்கவும்."),
        t("Repeat 3 to 4 times a day for fast relief. Do not swallow.", "ஒரு நாளைக்கு 3 முறை கொப்பளிக்கவும். விழுங்க வேண்டாம்.")
      ]
    },
    {
      title: t("Constipation Ease", "மலச்சிக்கல் தீர்வு"),
      condition: t("Constipation & Hard Stools", "மலச்சிக்கல்"),
      food: t("Warm Water & Castor Oil", "வெந்நீர் மற்றும் விளக்கெண்ணெய்"),
      shortDesc: t("Ancient method to lubricate the digestive tract.", "செரிமான அமைப்பை சுத்தப்படுத்த பழமையான வழிமுறை."),
      icon: <Sparkles className="text-amber-500" />,
      color: "bg-amber-500/10",
      benefits: [
        t("Stimulates slow bowel movements safely yielding quick results.", "குடல் இயக்கத்தை பாதுகாப்பாகத் தூண்டுகிறது."),
        t("Dramatically softens the existing dry stools in the colon.", "குடலில் உள்ள மலத்தை மென்மையாக்குகிறது."),
        t("Clears out residual toxins and build-up from the intestinal tract.", "குடலிலிருந்து கழிவுகளை முழுமையாக வெளியேற்றுகிறது.")
      ],
      procedure: [
        t("Boil 1 glass of water and let it become comfortably warm.", "1 கிளாஸ் தண்ணீரை கொதிக்க வைத்து மிதமாக ஆறவிடவும்."),
        t("Add 1 teaspoon of pure, edible-grade Castor Oil (Vilakkennai).", "1 தேக்கரண்டி சுத்தமான விளக்கெண்ணெய் சேர்க்கவும்."),
        t("Stir rapidly and drink it immediately before going to bed.", "நன்றாகக் கலந்து தூங்குவதற்கு முன் குடிக்கவும்."),
        t("Ensure you drink plenty of warm water throughout the next morning.", "மறுநாள் காலை அதிக தண்ணீர் குடிப்பதை உறுதி செய்யவும்.")
      ]
    }
  ];

  return (
    <div className="pb-24 max-w-7xl mx-auto px-4">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remedies.map((remedy, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card 
              className="p-8 h-full flex flex-col group hover:shadow-2xl hover:border-primary/30 transition-all border-outline-variant/10 cursor-pointer"
              onClick={() => setSelectedRemedy(remedy)}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${remedy.color} transition-transform group-hover:scale-110 shadow-inner`}>
                  {remedy.icon}
                </div>
                <div>
                   <h3 className="text-xl font-black text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">{remedy.title}</h3>
                   <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">{remedy.condition}</span>
                </div>
              </div>

              <div className="flex-1 space-y-5">
                 <p className="text-[13px] text-on-surface-variant font-medium leading-[1.8] opacity-80">
                   {remedy.shortDesc}
                 </p>
                 <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 mb-2">
                     {t("Primary Ingredients", "முக்கிய பொருட்கள்")}
                   </h4>
                   <p className="font-bold text-sm text-on-surface flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                     {remedy.food}
                   </p>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center">
                   {t("Read Full Procedure", "முழு செய்முறை")} <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </span>
                 <Button 
                   variant={savedStatus[remedy.title] ? "solid" : "outline"}
                   size="sm" 
                   className={cn(
                     "rounded-xl transition-all duration-300 text-[10px] px-3",
                     savedStatus[remedy.title] ? "bg-green-500 hover:bg-green-600 text-white border-green-500" : ""
                   )}
                   onClick={(e) => handleSave(e, remedy)}
                 >
                   {savedStatus[remedy.title] ? t("Saved!", "சேமிக்கப்பட்டது!") : t("Save", "சேமி")}
                 </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Remedy Detail Modal */}
      <AnimatePresence>
        {selectedRemedy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/80 backdrop-blur-md"
               onClick={() => setSelectedRemedy(null)}
             />
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
             >
                <div className="p-8 md:p-14 overflow-y-auto max-h-[90vh] custom-scrollbar">
                   <button 
                     onClick={() => setSelectedRemedy(null)}
                     className="absolute top-6 right-6 w-12 h-12 bg-surface-variant hover:bg-surface-variant-high rounded-full flex items-center justify-center text-on-surface transition-all z-20"
                   >
                     <X className="w-6 h-6" />
                   </button>

                   <div className="flex items-center gap-5 mb-8">
                     <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center ${selectedRemedy.color} shadow-inner`}>
                       {React.cloneElement(selectedRemedy.icon, { className: cn(selectedRemedy.icon.props.className, "w-10 h-10") })}
                     </div>
                     <div>
                       <span className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{selectedRemedy.condition}</span>
                       <h2 className="text-3xl md:text-5xl font-black font-headline text-on-surface mt-4 leading-tight tracking-tight">{selectedRemedy.title}</h2>
                     </div>
                   </div>

                   <div className="mb-10 p-6 bg-surface-container-high/50 rounded-3xl border border-outline-variant/10">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 mb-3">
                       {t("Primary Ingredients Required", "தேவையான முக்கிய பொருட்கள்")}
                     </h4>
                     <p className="font-bold text-xl text-on-surface flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary" />
                       {selectedRemedy.food}
                     </p>
                   </div>
                   
                   <div className="space-y-8">
                      {/* Benefits */}
                      <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                          <Sparkles size={16} /> {t("Healing Benefits", "மருத்துவ நன்மைகள்")}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-4">
                          {selectedRemedy.benefits.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-on-surface-variant font-bold text-sm bg-surface-container/50 p-4 rounded-2xl border border-primary/10">
                              <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Procedure */}
                      <div className="bg-surface-container-highest/30 p-8 rounded-[32px] border border-outline-variant/10">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6 flex items-center gap-2">
                          <Coffee size={16} /> {t("Step-by-Step Procedure", "செய்முறை விளக்கம்")}
                        </h4>
                        <ul className="space-y-4">
                          {selectedRemedy.procedure.map((item, j) => (
                            <li key={j} className="flex items-start gap-4 p-4 hover:bg-surface-container transition-colors rounded-2xl">
                              <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-black text-xs shrink-0">{j + 1}</span>
                              <p className="text-on-surface-variant font-medium text-[15px] leading-relaxed mt-1.5">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>
                   
                   <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-4">
                     <p className="text-xs text-on-surface-variant/50 font-bold italic flex items-center gap-2">
                       <Info size={14} />
                       {t("Disclaimer: Consult a doctor if symptoms persist.", "சிகிச்சைக்குப் பின்னும் குறையவில்லை எனில் மருத்துவரை அணுகவும்.")}
                     </p>
                     <Button 
                       className={cn("rounded-xl px-8 w-full md:w-auto transition-all", savedStatus[selectedRemedy.title] ? "bg-green-500 hover:bg-green-600 text-white" : "")}
                       onClick={(e) => handleSave(e, selectedRemedy)}
                     >
                       {savedStatus[selectedRemedy.title] ? t("Saved to History!", "சேமிக்கப்பட்டது!") : t("Save to History", "வரலாற்றில் சேமி")}
                     </Button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
