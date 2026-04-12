
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const districts = [
  'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 
  'Thanjavur', 'Thoothukudi', 'Nagercoil', 'Hosur', 'Kanchipuram', 'Tiruppur', 'Dindigul', 
  'Ramanathapuram', 'Cuddalore', 'Karur', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Pudukkottai', 
  'Sivaganga', 'Tenkasi', 'Theni', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Ranipet', 
  'Tirupattur', 'Chengalpattu', 'Kallakurichi', 'Mayiladuthurai'
];

const specialties = [
  'Allopathic/General Physician',
  'Cardiology & Cardio-Thoracic Surgery',
  'Orthopaedic Surgeon',
  'Gynaecology & Obstetrics',
  'Neurology & Neurosurgeon',
  'Oncology (Medical, Radiation, Surgical)',
  'Pediatrician',
  'Gastroenterology'
];

const hospitalMapping = {
  'Apollo Hospitals': 'https://www.apollohospitals.com/',
  'Fortis Hospital': 'https://www.fortishospitals.com/',
  'Kauvery Hospital': 'https://www.kauveryhospital.com/',
  'MIOT International': 'https://www.miothospitals.com/',
  'MGM Healthcare': 'https://mgmhealthcare.in/',
  'Gleneagles HealthCity': 'https://www.gleneagleshospitals.co.in/',
  'Dr. Metha’s Hospitals': 'https://mehtahospital.com/',
  'KMCH': 'https://www.kmchhospitals.com/',
  'Ganga Hospital': 'https://www.gangahospital.com/',
  'PSG Hospitals': 'https://www.psghospitals.com/',
  'KG Hospital': 'https://www.kghospital.com/',
  'Lotus Eye Hospital': 'https://www.lotuseye.org/',
  'Sri Ramakrishna Hospital': 'https://www.sriramakrishnahospital.com/',
  'Velammal Hospital': 'https://www.velammalhospital.com/',
  'Vadamalayan Hospitals': 'https://vadamalayan.org/',
  'Meenakshi Mission Hospital': 'https://www.meenakshimission.org/',
  'Manipal Hospital': 'https://www.manipalhospitals.com/',
  'Shanmuga Hospital': 'http://www.shanmugahospital.com/',
  'Neuro Foundation': 'https://neurofoundation.in/',
  'Dharan Hospital': 'https://www.dharanhospital.com/',
  'Nellai Medical Center': 'https://nellaimedicalcenter.com/',
  'Frontier Lifeline': 'https://www.frontierlifeline.com/',
  'CMC Hospital': 'https://www.cmcvellore.ac.in/',
  'SIMS Hospital': 'https://simshospitals.com/',
  'Vijaya Hospital': 'https://www.vijayahospital.org/',
  'Global Health': 'https://www.gleneagleshospitals.co.in/healthcity-chennai',
  'Billroth Hospitals': 'https://billrothhospitals.com/',
  'Chettinad Health City': 'https://chettinadhealthcity.com/',
  'SRMC': 'https://www.sriramachandra.edu.in/',
  'Sundaram Medical Foundation': 'https://www.smfhospital.org/',
  'Royal Care Hospital': 'https://www.royalcarehospital.in/',
  'Kovai Medical Center': 'https://www.kmchhospitals.com/'
};

const hospitalNames = Object.keys(hospitalMapping);

const firstNames = ['Rajesh', 'Priya', 'Murugan', 'Suresh', 'Anithra', 'Balaji', 'Chitra', 'Vinoth', 'Preethi', 'Lakshmi', 'Saranya', 'Deepak', 'Elango', 'Faiza', 'Ramesh', 'Anand', 'Ganesan', 'Hemalatha', 'Indran', 'Sivakumar', 'Vignesh', 'Lavanya', 'Mani', 'Senthil', 'Koushik', 'Kavitha', 'Jagadish', 'Karthik', 'Aruna', 'Naveen', 'Oviya', 'Victor', 'Samuel', 'Arjun', 'Meera', 'Yamini', 'Kumar', 'Anita', 'Sruthi', 'Ranjith', 'Gautham', 'Divya', 'Santhosh', 'Nandhini', 'Prakash', 'Shalini', 'Ashwin', 'Abirami'];
const lastNames = ['Kumar', 'Shankar', 'Pillai', 'Babu', 'Devi', 'S.', 'Ram', 'K.', 'Balan', 'Raj', 'M.', 'Khan', 'Krishnan', 'P.', 'S.', 'T.', 'Rajan', 'Maran', 'Prasanth', 'Nair', 'R.', 'G.', 'Kumar', 'Selvam', 'Bai'];

const doctors = [];
let id = 1;

districts.forEach(dist => {
  specialties.forEach(spec => {
    const count = Math.floor(Math.random() * 3) + 4; 
    for (let i = 0; i < count; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const hospital = hospitalNames[Math.floor(Math.random() * hospitalNames.length)];
        const contact = `044-${Math.floor(1000000 + Math.random() * 9000000)}`;
        const exp = `${Math.floor(Math.random() * 25) + 5} yrs`;
        const rating = (4.0 + Math.random() * 1.0).toFixed(1);
        
        doctors.push({
            id: id++,
            name: `Dr. ${firstName} ${lastName}`,
            hospital: `${hospital} - ${dist}`,
            specialist: spec,
            location: dist,
            area: dist + ' Center',
            contact: contact,
            exp: exp,
            rating: parseFloat(rating),
            available: Math.random() > 0.3,
            website: hospitalMapping[hospital]
        });
    }
  });
});

const content = 'export const DOCTORS_DATA = ' + JSON.stringify(doctors, null, 2) + ';';
fs.writeFileSync(path.join(__dirname, 'doctors.js'), content, { encoding: 'utf8' });
console.log('Successfully wrote doctors.js with ' + doctors.length + ' entries.');
