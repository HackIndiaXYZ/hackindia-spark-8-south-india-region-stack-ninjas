export const SYMPTOMS_LIST = [
  'Fever', 'Cough', 'Cold', 'Sore Throat', 'Headache', 'Body Ache',
  'Chest Pain', 'Ear Pain', 'Eye Irritation', 'Stomach Pain',
  'Nausea', 'Vomiting', 'Diarrhea', 'Fatigue', 'Skin Rash',
  'Joint Pain', 'Back Pain', 'Dizziness', 'Shortness of Breath', 'Toothache'
];

export const SPECIALIST_MAP = {
  'fever': { spec: 'General Physician', condition: 'Viral/Bacterial Infection', icon: 'stethoscope', tips: ['Rest well and stay hydrated', 'Take paracetamol if fever is high', 'Monitor temperature every 4 hours'] },
  'cough': { spec: 'Pulmonologist', condition: 'Respiratory Tract Infection', icon: 'stethoscope', tips: ['Avoid cold drinks and dusty areas', 'Try warm turmeric milk (பால் மஞ்சள்)', 'See doctor if cough lasts >2 weeks'] },
  'cold': { spec: 'General Physician', condition: 'Common Cold / Rhinitis', icon: 'stethoscope', tips: ['Steam inhalation helps', 'Stay warm and hydrated', 'Rest for 2–3 days'] },
  'chest pain': { spec: 'Cardiologist', condition: 'Possible Cardiac Issue', icon: 'cardiology', tips: ['Seek IMMEDIATE medical attention', 'Avoid physical exertion', 'Call 108 if pain is severe'] },
  'ear pain': { spec: 'ENT Specialist', condition: 'Otitis Media / Ear Infection', icon: 'hearing', tips: ['Avoid water entry into ear', 'Do not insert objects in ear', 'Warm compress may help'] },
  'headache': { spec: 'Neurologist', condition: 'Tension Headache / Migraine', icon: 'neurology', tips: ['Rest in a quiet, dark room', 'Stay hydrated', 'Avoid screen time'] },
  'stomach pain': { spec: 'Gastroenterologist', condition: 'Gastritis / Digestive Issue', icon: 'gastroenterology', tips: ['Eat light foods like rice porridge (கஞ்சி)', 'Avoid spicy food', 'Stay hydrated'] },
  'skin rash': { spec: 'Dermatologist', condition: 'Allergic Reaction / Dermatitis', icon: 'dermatology', tips: ['Avoid scratching', 'Keep the area clean and dry', 'Note if rash spreads quickly'] },
  'joint pain': { spec: 'Orthopedic', condition: 'Arthritis / Joint Inflammation', icon: 'orthopedics', tips: ['Apply warm compress', 'Avoid heavy lifting', 'Gentle stretching helps'] },
  'eye irritation': { spec: 'Ophthalmologist', condition: 'Conjunctivitis / Eye Strain', icon: 'visibility', tips: ['Avoid rubbing your eyes', 'Wash eyes with clean water', 'Reduce screen time'] },
  'dizziness': { spec: 'Neurologist', condition: 'Vertigo / Inner Ear Issue', icon: 'neurology', tips: ['Sit or lie down immediately', 'Avoid sudden movements', 'Stay hydrated'] },
  'shortness of breath': { spec: 'Pulmonologist', condition: 'Respiratory / Cardiac Issue', icon: 'pulmonology', tips: ['Sit upright to ease breathing', 'Seek URGENT medical care', 'Call 108 if severe'] },
  'nausea': { spec: 'General Physician', condition: 'Gastroenteritis / Food Poisoning', icon: 'stethoscope', tips: ['Sip water slowly', 'Avoid solid food for a few hours', 'Oral rehydration solution (ORS) helps'] },
  'default': { spec: 'General Physician', condition: 'General Health Consultation', icon: 'stethoscope', tips: ['Describe all symptoms clearly to your doctor', 'Note when symptoms started', 'Bring any existing prescriptions'] },
};
