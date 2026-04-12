export const getGuideArticles = (t) => [
  // SEASONAL
  { 
    id: 1, 
    category: 'seasonal', 
    tag: t('Summer Health', 'கோடைக்கால ஆரோக்கியம்'), 
    title: t('Staying Hydrated in Tamil Nadu Summer', 'தமிழக கோடையில் நீரேற்றத்துடன் இருப்பது'), 
    desc: t('The scorching summer heat from April-June demands extra hydration. Neer mor, tender coconut, and buttermilk are your best allies.', 'ஏப்ரல்-ஜூன் கடுமையான கோடை வெப்பத்திற்கு கூடுதல் நீரேற்றம் தேவை. நீர்மோர் மற்றும் இளநீர் மிகவும் சிறந்தது.'), 
    fullContent: [
      { type: 'header', text: t('Beat the Heat Naturally', 'இயற்கையாகவே வெப்பத்தைத் தணிக்கலாம்') },
      { type: 'text', text: t('During peak summer (Kathiri Veyyil), plain water may not replenish lost electrolytes. Traditional Tamil beverages are designed to cool the core body temperature.', 'கத்திரி வெய்யிலின் போது, வெறும் தண்ணீர் மட்டுமே இழந்த எலக்ட்ரோலைட்டுகளை ஈடுசெய்யாது. பாரம்பரிய தமிழ் பானங்கள் உடல் வெப்பநிலையைக் குறைக்க வடிவமைக்கப்பட்டுள்ளன.') },
      { type: 'benefits', items: [
        t('Instantly lowers core body temperature', 'உடலின் வெப்பநிலையை உடனடியாகக் குறைக்கிறது'),
        t('Replenishes natural salts and minerals lost through sweat', 'வியர்வையால் இழந்த உப்புகள் மற்றும் தாதுக்களை நிரப்புகிறது'),
        t('Prevents heat strokes and exhaustion', 'வெப்ப மாரடைப்பு மற்றும் சோர்வைத் தடுக்கிறது'),
        t('Aids digestion which often slows down in heat', 'கோடையில் மெதுவாகும் செரிமானத்திற்கு உதவுகிறது')
      ]},
      { type: 'procedure', items: [
        t('Drink 2 glasses of Neer Mor (Diluted buttermilk) daily with a pinch of salt and ginger.', 'ஒரு சிட்டிகை உப்பு மற்றும் இஞ்சியுடன் தினமும் 2 கிளாஸ் நீர் மோர் குடிக்கவும்.'),
        t('Consume one Elaneer (Tender Coconut) around 11:00 AM for maximum electrolyte absorption.', 'அதிகப்படியான எலக்ட்ரோலைட்டை உறிஞ்சுவதற்கு காலை 11:00 மணியளவில் ஒரு இளநீர் குடிக்கவும்.'),
        t('Wear light cotton clothes to allow skin to breathe.', 'சருமம் சுவாசிக்க வசதியாக வெளிர் நிற பருத்தி ஆடைகளை அணியவும்.'),
        t('Avoid peak sun exposure between 12:00 PM and 4:00 PM.', 'மதியம் 12:00 முதல் மாலை 4:00 மணி வரை உச்ச வெயிலைத் தவிர்க்கவும்.')
      ]}
    ],
    icon: 'Sun', 
    color: '#ff9800', 
    mins: 4,
    image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 4, 
    category: 'seasonal', 
    tag: t('Monsoon Safety', 'பருவமழை பாதுகாப்பு'), 
    title: t('Dengue & Malaria Prevention Tips', 'டெங்கு மற்றும் மலேரியா தடுப்பு குறிப்புகள்'), 
    desc: t('Northeast monsoon brings risks of vector-borne diseases. Learn how to protect your family during October-December.', 'வடகிழக்கு பருவமழை நோய் அபாயங்களைக் கொண்டுவருகிறது. உங்கள் குடும்பத்தை எவ்வாறு பாதுகாப்பது என்பதை அறிக.'), 
    fullContent: [
      { type: 'header', text: t('Prevention is Better than Cure', 'வருமுன் காப்பதே சிறந்தது') },
      { type: 'text', text: t('Stagnant water after heavy rains is a breeding ground for Aedes mosquitoes.', 'கனமழைக்கு பின் தேங்கும் தண்ணீர் ஏடிஸ் கொசுக்களின் இனப்பெருக்கத்திற்கு வழிவகுக்கிறது.') },
      { type: 'benefits', items: [
        t('Nilavembu Kudineer boosts immunity specifically against viral fevers', 'நிலவேம்பு குடிநீர் வைரஸ் காய்ச்சலுக்கு எதிராக நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது'),
        t('Early detection prevents critical platelet drops', 'ஆரம்பக் கட்ட கண்டறிதல் இரத்தத் தட்டுகளின் வீழ்ச்சியைத் தடுக்கிறது'),
        t('Natural repellents are safer for long-term use than chemical ones', 'ரசாயனங்களை விட இயற்கையான விரட்டிகள் பாதுகாப்பானவை')
      ]},
      { type: 'procedure', items: [
        t('Drain water from coconut shells, tires, and flower pots weekly.', 'தேங்காய் ஓடுகள், டயர்கள் மற்றும் பூச்சட்டிகளில் இருந்து தண்ணீரை வாரம் தோறும் வெளியேற்றவும்.'),
        t('Take 30ml of Nilavembu decoction for 3 consecutive days once a month during monsoon.', 'பருவமழைக் காலத்தில் மாதத்திற்கு ஒருமுறை தொடர்ந்து 3 நாட்கள் 30 மிலி நிலவேம்பு குடிநீரை அருந்தவும்.'),
        t('Use mosquito nets even during daytime naps.', 'பகலில் தூங்கும் போதும் கொசு வலைகளைப் பயன்படுத்தவும்.'),
        t('Include more garlic and pepper in your diet to build natural resistance.', 'இயற்கையான எதிர்ப்பை உருவாக்க பூண்டு மற்றும் மிளகு ஆகியவற்றை உணவில் சேர்த்துக் கொள்ளுங்கள்.')
      ]}
    ],
    icon: 'CloudRain', 
    color: '#607d8b', 
    mins: 4,
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 9, 
    category: 'seasonal', 
    tag: t('Winter Wellness', 'குளிர்கால நல்வாழ்வு'), 
    title: t('Keeping Warm: December-January Health Tips', 'வெப்பமாக இருத்தல்: டிசம்பர்-ஜனவரி ஆரோக்கிய குறிப்புகள்'), 
    desc: t('While Tamil Nadu winters are mild, the temperature drop affects the elderly and children. Essential tips to stay healthy.', 'தமிழக குளிர்காலம் மிதமானதாக இருந்தாலும், முதியோர் மற்றும் குழந்தைகளை பாதிக்கிறது. ஆரோக்கியமாக இருக்க குறிப்புகள்.'), 
    fullContent: [
      { type: 'header', text: t('Protecting the Respiratory System', 'சுவாச மண்டலத்தை பாதுகாத்தல்') },
      { type: 'benefits', items: [
        t('Prevents seasonal flu and dry coughs', 'பருவகால காய்ச்சல் மற்றும் வறட்டு இருமலைத் தடுக்கிறது'),
        t('Maintains body warmth and circulation', 'உடல் வெப்பதையும் இரத்த ஓட்டத்தையும் பராமரிக்கிறது'),
        t('Eases joint Stiffness often felt in cold mornings', 'குளிர்கால காலைப் பொழுதில் ஏற்படும் மூட்டு பிடிப்புகளை குறைக்கிறது')
      ]},
      { type: 'procedure', items: [
        t('Prepare Sukku Coffee: Boil dry ginger, black pepper, and coriander seeds with palm jaggery.', 'சுக்கு காபி: சுக்கு, மிளகு, கொத்தமல்லி விதைகளை கருப்பட்டியுடன் கொதிக்க வைக்கவும்.'),
        t('Apply a drop of Eucalyptus oil to your pillow for clear breathing.', 'சுவாசத்தை தெளிவாக்க யூகலிப்டஸ் எண்ணெயின் ஒரு துளியை தலையணையில் விடவும்.'),
        t('Warm sesame oil massage (Abhyanga) before bathing improves circulation.', 'குளிக்கும் முன் வெதுவெதுப்பான நல்லெண்ணெய் மசாஜ் செய்வது இரத்த ஓட்டத்தை மேம்படுத்துகிறது.'),
        t('Ensure the elderly take an early dinner for better digestion.', 'முதியவர்கள் செரிமானத்திற்காக சீக்கிரமாக இரவு உணவை உண்பதை உறுதி செய்யவும்.')
      ]}
    ],
    icon: 'Snowflake', 
    color: '#00bcd4', 
    mins: 4,
    image: 'https://images.unsplash.com/photo-1481016570479-9eab6349fde7?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 13, 
    category: 'diet', 
    tag: t('Fiber Rich', 'நார்ச்சத்து மிக்கது'), 
    title: t('Vazhaithandu: The Kidney Stone Savior', 'வாழைத்தண்டு: சிறுநீரக கல் காப்பான்'), 
    desc: t('Discover why Banana stem (vazhaithandu) is a regular part of the Tamil diet and how it aids in detoxification.', 'வாழைத்தண்டு ஏன் தமிழ் உணவில் தவறாமல் இடம்பெறுகிறது, அது எப்படி நச்சுத்தன்மையை நீக்குகிறது என்பதை அறிக.'), 
    fullContent: [
      { type: 'header', text: t('Nutritional Powerhouse', 'ஊட்டச்சத்துக்களின் பெட்டகம்') },
      { type: 'benefits', items: [
        t('Dissolves small kidney stones through high potassium and diuretic properties', 'பொட்டாசியம் மற்றும் டையூரிடிக் பண்புகளால் சிறிய சிறுநீரக கற்களைக் கரைக்கிறது'),
        t('High fiber content prevents constipation and aids weight loss', 'நார்ச்சத்து மலச்சிக்கலைத் தடுத்து எடை இழப்புக்கு உதவுகிறது'),
        t('Detoxifies the entire digestive tract', 'முழு செரிமான அமைப்பின் நச்சுக்களை வெளியேற்றுகிறது'),
        t('Regulates blood pressure balances', 'இரத்த அழுத்தத்தை சீராக்குகிறது')
      ]},
      { type: 'procedure', items: [
        t('Vazhaithandu Juice: Extract juice from fresh stem, mix with curd and cumin.', 'வாழைத்தண்டு சாறு: புதிய தண்டின் சாற்றை மோர் மற்றும் சீரகத்துடன் கலக்கவும்.'),
        t('Prepare as a Poriyal: Finely chop, sauté with mustard, urad dal, and grated coconut.', 'பொரியலாக: பொடியாக நறுக்கி, கடுகு, உளுத்தம் பருப்பு, தேங்காய் துருவலுடன் வதக்கவும்.'),
        t('Consume at least twice a week for preventive care.', 'தடுப்பு பராமரிப்புக்காக வாரத்திற்கு இரண்டு முறையாவது உட்கொள்ளவும்.'),
        t('Best eaten in the morning or afternoon for optimal digestion.', 'சிறந்த செரிமானத்திற்கு காலை அல்லது மதிய வேளைகளில் சாப்பிடவும்.')
      ]}
    ],
    icon: 'Sprout', 
    color: '#43a047', 
    mins: 6,
    image: 'https://images.unsplash.com/photo-1601647998500-79a145538af7?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 14, 
    category: 'diet', 
    tag: t('Probiotics', 'ப்ரோபயாடிக்ஸ்'), 
    title: t('Pazhaya Sadam: The Ancient Superfood', 'பழைய சாதம்: பழமையான சூப்பர்ஃபுட்'), 
    desc: t('Fermented rice eaten with shallots is rich in Vitamin B12 and billions of healthy gut bacteria.', 'சின்ன வெங்காயத்துடன் உண்ணப்படும் பழைய சாதம் வைட்டமின் பி12 மற்றும் நல்ல குடல் பாக்டீரியாக்களை கொண்டுள்ளது.'), 
    fullContent: [
      { type: 'header', text: t('Golden Bowl of Health', 'ஆரோக்கியத்தின் பொற்கிண்ணம்') },
      { type: 'benefits', items: [
        t('Highest concentration of Vitamin B6 and B12 among traditional foods', 'பாரம்பரிய உணவுகளிலேயே அதிக வைட்டமின் பி6 மற்றும் பி12 கொண்டது'),
        t('Billions of natural lactobacillus for gut microbiome', 'குடல் நுண்ணுயிரிகளுக்கான பில்லியன் கணக்கான இயற்கையான நல்ல பாக்டீரியாக்கள்'),
        t('Provides sustained energy throughout the day', 'நாள் முழுவதும் நீடித்த ஆற்றலை வழங்குகிறது'),
        t('Reduces body heat and prevents stomach ulcers', 'உடல் சூட்டைக் குறைக்கிறது மற்றும் வயிற்றுப் புண்களைத் தடுக்கிறது')
      ]},
      { type: 'procedure', items: [
        t('Soak cooked parboiled rice in water overnight in an earthen pot.', 'வேகவைத்த புழுங்கல் அரிசியை மண் பானையில் இரவு முழுவதும் தண்ணீரில் ஊறவைக்கவும்.'),
        t('Next morning, mash slightly and add fresh buttermilk and sea salt.', 'மறுநாள் காலையில், லேசாக மசித்து புதிய மோர் மற்றும் கல் உப்பு பாதுகாக்கவும்.'),
        t('Eat with 4-5 raw small onions (shallots) and a green chili.', '4-5 பச்சை சின்ன வெங்காயம் மற்றும் ஒரு பச்சை மிளகாயுடன் சாப்பிடவும்.'),
        t('Perfect breakfast for those living in tropical climates.', 'வெப்ப மண்டல காலநிலையில் வாழ்பவர்களுக்கு சரியான காலை உணவு.')
      ]}
    ],
    icon: 'Milk', 
    color: '#03a9f4', 
    mins: 4,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 15, 
    category: 'mental', 
    tag: t('Focus', 'கவனம்'), 
    title: t('Vasi Yoga: Ancient Breathing Mastery', 'வாசி யோகம்: பண்டைய சுவாச கலை'), 
    desc: t('Explore the subtle art of Vasi Yoga mentioned by Siddhars to improve longevity, focus, and inner peace.', 'ஆயுள், கவனம் மற்றும் உள் அமைதியை மேம்படுத்த சித்தர்கள் குறிப்பிடும் வாசி யோகத்தை ஆராயவும்.'), 
    fullContent: [
      { type: 'header', text: t('Mental Discipline via Breath', 'சுவாசம் மூலம் மன ஒழுக்கம்') },
      { type: 'benefits', items: [
        t('Calms the nervous system instantly', 'நரம்பு மண்டலத்தை உடனடியாக அமைதிப்படுத்துகிறது'),
        t('Increases lung capacity and oxygen saturation', 'நுரையீரலின் திறன் மற்றும் ஆக்ஸிஜன் செறிவை அதிகரிக்கிறது'),
        t('Enhances cognitive focus and memory retention', 'கவனம் மற்றும் நினைவாற்றலை மேம்படுத்துகிறது'),
        t('Supports spiritual well-being and longevity', 'ஆன்மீக நல்வாழ்வு மற்றும் நீண்ட ஆயுளை ஆதரிக்கிறது')
      ]},
      { type: 'procedure', items: [
        t('Sit comfortably with an erect spine in Sukhasana or Padmasana.', 'சுகாசனம் அல்லது பத்மாசனத்தில் நிமிர்ந்த முதுகுத்தண்டுடன் வசதியாக உட்காரவும்.'),
        t('Inhale deeply for 4 counts, hold for 4, and exhale for 8 counts.', '4 வினாடிகள் ஆழமாக சுவாசித்து, 4 வினாடிகள் பிடித்து, 8 வினாடிகளுக்கு வெளியிடவும்.'),
        t('Focus on the Ajna chakra (medial point between the eyebrows).', 'ஆக்ஞா சக்கரத்தில் (புருவங்களுக்கு இடையில் உள்ள புள்ளி) கவனம் செலுத்துங்கள்.'),
        t('Practice daily for 15 minutes during the early morning hours.', 'அதிகாலை வேளையில் தினமும் 15 நிமிடங்கள் பயிற்சி செய்யுங்கள்.')
      ]}
    ],
    icon: 'Zap', 
    color: '#fb8c00', 
    mins: 8,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 2, 
    category: 'traditional', 
    tag: t('Siddha Medicine', 'சித்த மருத்துவம்'), 
    title: t('Thalaikku Thylam: Natural Headache Remedies', 'தலைக்கு தைலம்: இயற்கை தலைவலி வைத்தியம்'), 
    desc: t('Traditional hair oil preparations with camphor and sesame have been used for centuries to relieve headaches naturally.', 'தலைவலியைப் போக்க கற்பூரம் மற்றும் நல்லெண்ணெய் கலந்த பாரம்பரிய முடி எண்ணெய் பழங்காலமாக பயன்படுகிறது.'), 
    fullContent: [
      { type: 'header', text: t('The Art of External Therapy', 'வெளிப்புற சிகிச்சையின் கலை') },
      { type: 'benefits', items: [
        t('Relieves deep tension and sinus pressure almost instantly', 'கடுமையான பதற்றம் மற்றும் சைனஸ் அழுத்தத்தை உடனடியாக நீக்குகிறது'),
        t('Provides a profound cooling effect to the overworked nervous system', 'அதிக வேலை செய்யும் நரம்பு மண்டலத்திற்கு சிறந்த குளிர்ச்சி விளைவை அளிக்கிறது'),
        t('Reduces Pitta (heat) safely and naturally', 'பித்தத்தை (உடல் சூடு) பாதுகாப்பாகவும் இயற்கையாகவும் குறைக்கிறது'),
        t('Promotes deep, restorative sleep free of chemical painkillers', 'இரசாயன வலிநிவாரணிகள் இன்றி ஆழ்ந்த, அமைதியான தூக்கத்தை ஊக்குவிக்கிறது')
      ]},
      { type: 'procedure', items: [
        t('Warm 2 tablespoons of unrefined sesame oil (Nallennai) slightly.', '2 தேக்கரண்டி நல்லெண்ணெயை மிதமாக சூடாக்கவும்.'),
        t('Add a small pinch of edible camphor (Pacha Karpuram) and let it dissolve off the heat.', 'அடுப்பில் இருந்து இறக்கி, சிறிதளவு பச்சைக் கற்பூரத்தை சேர்த்து கரைய விடவும்.'),
        t('Gently massage the oil into the scalp using circular motions, focusing on the crown and temples.', 'வட்ட இயக்கங்களைப் பயன்படுத்தி உச்சந்தலையில் எண்ணெயை மெதுவாக மசாஜ் செய்யவும்.'),
        t('Leave it on for 20-30 minutes before washing with a mild herbal powder like Arappu or Shikakai.', 'அரப்பு அல்லது சீயக்காய் போன்ற மூலிகைப் பொடியைக் கொண்டு கழுவுவதற்கு முன் 20-30 நிமிடங்கள் ஊறவிடவும்.')
      ]}
    ],
    icon: 'Flower2', 
    color: '#4caf50', 
    mins: 5, 
    image: 'https://images.unsplash.com/photo-1620916518391-9d2e13290b24?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 7, 
    category: 'traditional', 
    tag: t('Home Remedies', 'வீட்டு வைத்தியம்'), 
    title: t('Kasayam Recipes for Common Ailments', 'பொதுவான நோய்களுக்கான கஷாயம்'), 
    desc: t('Herbal decoctions using tulsi, pepper, ginger, and turmeric have been passed down for generations.', 'துளசி, மிளகு, இஞ்சி மற்றும் மஞ்சள் கலந்த மூலிகை கஷாயங்கள் பல தலைமுறைகளாக பின்பற்றப்படுகின்றன.'), 
    fullContent: [
      { type: 'header', text: t('The Kitchen Pharmacy', 'அஞ்சறைப் பெட்டி மருந்தகம்') },
      { type: 'benefits', items: [
        t('Boosts immunity naturally without side effects', 'பக்கவிளைவுகளின்றி இயற்கையாகவே நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது'),
        t('Acts as a natural detox for blood and respiratory tract', 'குடல் மற்றும் சுவாசக் குழாய்களுக்கு இயற்கையான நச்சு நீக்கியாக செயல்படுகிறது'),
        t('Clears congestion and reduces throat inflammation', 'நெரிசலை நீக்குகிறது மற்றும் தொண்டை அடைப்பைக் குறைக்கிறது'),
        t('Improves digestion and metabolic fire during fevers', 'காய்ச்சலின் போது செரிமானத்தை மற்றும் வளர்சிதை மாற்ற எரியை மேம்படுத்துகிறது')
      ]},
      { type: 'procedure', items: [
        t('Boil 2 cups of water with 1 inch of freshly crushed ginger and 5 crushed peppercorns.', '1 அங்குல நசுக்கிய இஞ்சி மற்றும் 5 நசுக்கிய மிளகுகளை 2 கப் தண்ணீரில் கொதிக்கையவும்.'),
        t('Add a handful of fresh Tulsi leaves and a pinch of turmeric powder.', 'ஒரு கைப்பிடி துளசி இலைகள் மற்றும் ஒரு சிட்டிகை மஞ்சள் தூள் சேர்க்கவும்.'),
        t('Let the mixture simmer and reduce to exactly half its original volume (1 cup).', 'கலவையை மிதமான தீயில் வைத்து, சரியாக பாதியாக குறையும் வரை கொதிக்க விடவும்.'),
        t('Strain, add a teaspoon of palm jaggery (Karupatti) or honey, and drink while warm.', 'மாற்றிய பின்பு, ஒரு தேக்கரண்டி கருப்பட்டி அல்லது தேன் சேர்த்து மிதமான சூட்டில் குடிக்கவும்.')
      ]}
    ],
    icon: 'Coffee', 
    color: '#795548', 
    mins: 6, 
    image: 'https://images.unsplash.com/photo-1544787210-282aa61190bc?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 11, 
    category: 'traditional', 
    tag: t('Skin Care', 'சரும பராமரிப்பு'), 
    title: t('Nalangu Maavu: The Ancient Organic Soap', 'நலங்கு மாவு: பழமையான இயற்கை சோப்'), 
    desc: t('A blend of 12 traditional herbs that detoxifies the skin, treats body odor, and provides a natural glow.', '12 பாரம்பரிய மூலிகைகளின் கலவை, இது நச்சுக்களை நீக்கி, உடல் துர்நாற்றத்திற்கு சிகிச்சையளித்து பளபளப்பைத் தருகிறது.'), 
    fullContent: [
      { type: 'header', text: t('Glow with Heritage', 'பாரம்பரியத்துடன் ஜொலிக்கவும்') },
      { type: 'benefits', items: [
        t('Treats skin blemishes, acne, and pigmentation naturally', 'சரும கறைகள், முகப்பரு மற்றும் நிறமிகளை இயற்கையாக குணப்படுத்துகிறது'),
        t('Eliminates body odor by eliminating odor-causing bacteria without blocking pores', 'துளைகளை அடைக்காமல் துர்நாற்றத்தை உண்டாக்கும் பாக்டீரியாக்களை அகற்றி உடல் துர்நாற்றத்தை நீக்குகிறது'),
        t('Maintains the natural pH balance of the skin unlike harsh chemical soaps', 'கடுமையான ரசாயன சோப்புகளைப் போலல்லாமல் சருமத்தின் இயற்கையான pH சமநிலையைப் பராமரிக்கிறது'),
        t('Safe for babies, toddlers, and individuals with highly sensitive skin', 'குழந்தைகள் மற்றும் மிகவும் உணர்திறன் வாய்ந்த சருமம் கொண்டவர்களுக்கு பாதுகாப்பானது')
      ]},
      { type: 'procedure', items: [
        t('Take 2-3 tablespoons of Nalangu Maavu herbal powder in a small bowl.', 'ஒரு சிறிய பாத்திரத்தில் 2-3 தேக்கரண்டி நலங்கு மாவு எடுத்துக் கொள்ளவும்.'),
        t('Mix with water, rose water, or curd (for dry skin) to form a thick, smooth paste.', 'நீர், பன்னீர் அல்லது தயிருடன் (வறண்ட சருமத்திற்கு) கலந்து கெட்டியான பேஸ்ட்டாக உருவாக்கவும்.'),
        t('Apply it all over your wet body and gently scrub in circular motions.', 'ஈரமான உடல் முழுவதும் தடவி, வட்ட வடிவில் மெதுவாக தேய்க்கவும்.'),
        t('Rinse thoroughly with water. Avoid using regular soap afterward.', 'தண்ணீரால் நன்கு கழுவவும். பிறகு வழக்கமான சோப் பயன்படுத்துவதைத் தவிர்க்கவும்.')
      ]}
    ],
    icon: 'Sparkles', 
    color: '#e91e63', 
    mins: 5, 
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  }
];
