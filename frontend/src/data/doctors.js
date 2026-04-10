export const DOCTORS_DATA = [
  // CHENNAI
  { id: 1, name: 'Dr. Rajesh Kumar', hospital: 'City General Hospital', specialist: 'General Physician', location: 'Chennai', area: 'Anna Nagar', contact: '044-1234567', exp: '15 yrs', rating: 4.8, available: true, recommended: true },
  { id: 2, name: 'Dr. Priya Shankar', hospital: 'Heart & Wellness Center', specialist: 'Cardiologist', location: 'Chennai', area: 'T. Nagar', contact: '044-7654321', exp: '12 yrs', rating: 4.9, available: true, recommended: false },
  { id: 3, name: 'Dr. Murugan Pillai', hospital: 'Neuro Care Clinic', specialist: 'Neurologist', location: 'Chennai', area: 'Adyar', contact: '044-1122334', exp: '18 yrs', rating: 4.7, available: false, recommended: true },
  { id: 9, name: 'Dr. Suresh Babu', hospital: 'Diabetes Care Institute', specialist: 'Diabetologist', location: 'Chennai', area: 'Velachery', contact: '044-9988776', exp: '16 yrs', rating: 4.6, available: false, recommended: false },
  { id: 13, name: 'Dr. Anithra Devi', hospital: 'Apollo Lifeline', specialist: 'Gynecologist', location: 'Chennai', area: 'Greams Road', contact: '044-2233445', exp: '20 yrs', rating: 4.9, available: true, recommended: true },
  { id: 14, name: 'Dr. Balaji S.', hospital: 'Ortho Spine Clinic', specialist: 'Orthopedic', location: 'Chennai', area: 'Porur', contact: '044-4455667', exp: '14 yrs', rating: 4.7, available: true, recommended: false },
  { id: 15, name: 'Dr. Chitra Ram', hospital: 'Global Health', specialist: 'Pediatrician', location: 'Chennai', area: 'Perungudi', contact: '044-5566778', exp: '10 yrs', rating: 4.8, available: true, recommended: false },

  // SALEM - Expanded General Physicians & Regional Focus
  { id: 7, name: 'Dr. Vignesh Rajan', hospital: 'Child Health Center', specialist: 'Pediatrician', location: 'Salem', area: 'Fair Lands', contact: '0427-2233441', exp: '11 yrs', rating: 4.7, available: true, recommended: false },
  { id: 24, name: 'Dr. Lavanya T.', hospital: 'Manipal Hospital', specialist: 'Dermatologist', location: 'Salem', area: 'Suramangalam', contact: '0427-1122332', exp: '9 yrs', rating: 4.4, available: true, recommended: false },
  { id: 25, name: 'Dr. Mani Maran', hospital: 'Neuro Foundation', specialist: 'Neurologist', location: 'Salem', area: 'Peramanur', contact: '0427-3344553', exp: '21 yrs', rating: 4.8, available: true, recommended: true },
  { id: 40, name: 'Dr. Senthil Kumar', hospital: 'Dharan Hospital', specialist: 'General Physician', location: 'Salem', area: 'Seelanaickanpatty', contact: '0427-2709999', exp: '18 yrs', rating: 4.9, available: true, recommended: true },
  { id: 41, name: 'Dr. Koushik Ram', hospital: 'Kauvery Hospital', specialist: 'General Physician', location: 'Salem', area: 'Seelanaickenpatti', contact: '0427-2677777', exp: '14 yrs', rating: 4.8, available: true, recommended: true },
  { id: 42, name: 'Dr. Meera Bai', hospital: 'Shanmuga Hospital', specialist: 'General Physician', location: 'Salem', area: 'Saradha College Rd', contact: '0427-2706666', exp: '16 yrs', rating: 4.7, available: true, recommended: false },
  { id: 43, name: 'Dr. Arun Prasanth', hospital: 'VIMS Hospitals', specialist: 'General Physician', location: 'Salem', area: 'Sankari Main Rd', contact: '70944-50112', exp: '12 yrs', rating: 4.6, available: true, recommended: false },
  { id: 44, name: 'Dr. Parvathi S.', hospital: 'Dharan Hospital', specialist: 'Gynecologist', location: 'Salem', area: 'Seelanaickanpatty', contact: '0427-2709999', exp: '15 yrs', rating: 4.9, available: true, recommended: true },
  { id: 45, name: 'Dr. Naveen G.', hospital: 'Kauvery Hospital', specialist: 'Cardiologist', location: 'Salem', area: 'Seelanaickenpatti', contact: '0427-2677777', exp: '19 yrs', rating: 5.0, available: true, recommended: true },
  { id: 46, name: 'Dr. Revathi K.', hospital: 'Shanmuga Hospital', specialist: 'ENT Specialist', location: 'Salem', area: 'Saradha College Rd', contact: '0427-2706666', exp: '10 yrs', rating: 4.5, available: true, recommended: false },
  { id: 47, name: 'Dr. Siddiqui A.', hospital: 'Salem Poly Clinic', specialist: 'General Physician', location: 'Salem', area: 'Advaitha Ashram Rd', contact: '0427-2334455', exp: '22 yrs', rating: 4.8, available: true, recommended: false },

  // NAMAKKAL - Regional Focus
  { id: 10, name: 'Dr. Meena Kumari', hospital: 'Gastro & Liver Center', specialist: 'Gastroenterologist', location: 'Namakkal', area: 'Main Road', contact: '04286-234567', exp: '13 yrs', rating: 4.7, available: true, recommended: true },
  { id: 39, name: 'Dr. Arul G.', hospital: 'Namakkal Govt Hospital', specialist: 'General Physician', location: 'Namakkal', area: 'Salem Rd', contact: '04286-220000', exp: '19 yrs', rating: 4.5, available: true, recommended: false },
  { id: 48, name: 'Dr. Karthikeyan S.', hospital: 'MM Hospital', specialist: 'General Physician', location: 'Namakkal', area: 'Trichy Main Rd', contact: '96262-10000', exp: '15 yrs', rating: 4.8, available: true, recommended: true },
  { id: 49, name: 'Dr. Devi P.', hospital: 'Imayam Speciality Hospital', specialist: 'Gynecologist', location: 'Namakkal', area: 'Bazaar', contact: '04286-222222', exp: '14 yrs', rating: 4.7, available: true, recommended: true },
  { id: 50, name: 'Dr. Muralidharan T.', hospital: 'MM Hospital', specialist: 'Orthopedic', location: 'Namakkal', area: 'Trichy Main Rd', contact: '96262-10000', exp: '20 yrs', rating: 4.9, available: true, recommended: true },
  { id: 51, name: 'Dr. Sharmila J.', hospital: 'Shree Akhshaya Hospital', specialist: 'Pediatrician', location: 'Namakkal', area: 'Bazaar', contact: '04286-333333', exp: '11 yrs', rating: 4.6, available: true, recommended: false },

  // COIMBATORE
  { id: 4, name: 'Dr. Lakshmi Devi', hospital: 'ENT Speciality Hospital', specialist: 'ENT Specialist', location: 'Coimbatore', area: 'RS Puram', contact: '0422-112233', exp: '10 yrs', rating: 4.6, available: true, recommended: false },
  { id: 6, name: 'Dr. Saranya Balan', hospital: 'Skin & Cosmo Clinic', specialist: 'Dermatologist', location: 'Coimbatore', area: 'Gandhipuram', contact: '0422-556677', exp: '8 yrs', rating: 4.5, available: true, recommended: false },
  { id: 16, name: 'Dr. Deepak Raj', hospital: 'PSG Hospitals', specialist: 'Cardiologist', location: 'Coimbatore', area: 'Peelamedu', contact: '0422-223344', exp: '22 yrs', rating: 5.0, available: true, recommended: true },
  { id: 17, name: 'Dr. Elango M.', hospital: 'KG Hospital', specialist: 'Neurologist', location: 'Coimbatore', area: 'Race Course', contact: '0422-334455', exp: '19 yrs', rating: 4.7, available: true, recommended: false },
  { id: 18, name: 'Dr. Faiza Khan', hospital: 'Lotus Eye Hospital', specialist: 'Ophthalmologist', location: 'Coimbatore', area: 'Saravanampatti', contact: '0422-445566', exp: '12 yrs', rating: 4.8, available: true, recommended: true },

  // MADURAI
  { id: 5, name: 'Dr. Anand Krishnan', hospital: 'Ortho & Spine Center', specialist: 'Orthopedic', location: 'Madurai', area: 'Anna Nagar', contact: '0452-334455', exp: '20 yrs', rating: 4.9, available: true, recommended: true },
  { id: 19, name: 'Dr. Ganesan P.', hospital: 'Vadamalayan Hospitals', specialist: 'General Physician', location: 'Madurai', area: 'Simmakkal', contact: '0452-112233', exp: '25 yrs', rating: 4.8, available: true, recommended: false },
  { id: 20, name: 'Dr. Hemalatha S.', hospital: 'Meenakshi Mission', specialist: 'Gynecologist', location: 'Madurai', area: 'Melur Road', contact: '0452-223344', exp: '15 yrs', rating: 4.7, available: true, recommended: true },
  { id: 21, name: 'Dr. Indran T.', hospital: 'Apollo Speciality', specialist: 'Pulmonologist', location: 'Madurai', area: 'K.K. Nagar', contact: '0452-334455', exp: '13 yrs', rating: 4.6, available: true, recommended: false },

  // TRICHY
  { id: 8, name: 'Dr. Kavitha Nair', hospital: 'Women & Child Hospital', specialist: 'Gynecologist', location: 'Trichy', area: 'Srirangam', contact: '0431-445566', exp: '14 yrs', rating: 4.8, available: true, recommended: true },
  { id: 22, name: 'Dr. Jagadish R.', hospital: 'Frontier Lifeline', specialist: 'General Physician', location: 'Trichy', area: 'Thillai Nagar', contact: '0431-112233', exp: '12 yrs', rating: 4.5, available: true, recommended: false },
  { id: 23, name: 'Dr. Karthik M.', hospital: 'Kauvery Hospital', specialist: 'Neurologist', location: 'Trichy', area: 'Cantonment', contact: '0431-223344', exp: '17 yrs', rating: 4.9, available: true, recommended: true },

  // TIRUNELVELI
  { id: 26, name: 'Dr. Naveen Kumar', hospital: 'Nellai Medical Center', specialist: 'General Physician', location: 'Tirunelveli', area: 'Palayamkottai', contact: '0462-112233', exp: '10 yrs', rating: 4.6, available: true, recommended: true },
  { id: 27, name: 'Dr. Oviya S.', hospital: 'Shifa Hospital', specialist: 'Gynecologist', location: 'Tirunelveli', area: 'Junction', contact: '0462-223344', exp: '13 yrs', rating: 4.7, available: true, recommended: false },

  // THANJAVUR
  { id: 29, name: 'Dr. Qadir S.', hospital: 'Meenakshi Hospital', specialist: 'Cardiologist', location: 'Thanjavur', area: 'Medical College Rd', contact: '04362-112233', exp: '18 yrs', rating: 4.9, available: true, recommended: true },

  // THOOTHUKUDI
  { id: 32, name: 'Dr. Thamizhan K.', hospital: 'Velammal Hospital', specialist: 'Gastroenterologist', location: 'Thoothukudi', area: 'Ettayapuram Rd', contact: '0461-223344', exp: '14 yrs', rating: 4.7, available: true, recommended: true },

  // ERODE
  { id: 11, name: 'Dr. Arjun Selvam', hospital: 'Erode General Hospital', specialist: 'General Physician', location: 'Erode', area: 'Perundurai Road', contact: '0424-112233', exp: '9 yrs', rating: 4.4, available: true, recommended: false },

  // VELLORE
  { id: 34, name: 'Dr. Victor D.', hospital: 'CMC Hospital', specialist: 'General Physician', location: 'Vellore', area: 'Thottapalayam', contact: '0416-112233', exp: '28 yrs', rating: 5.0, available: true, recommended: true },

  // HOSUR
  { id: 36, name: 'Dr. Xavier S.', hospital: 'Sparsh Hospital', specialist: 'ENT Specialist', location: 'Hosur', area: 'Bagalur Rd', contact: '04344-223344', exp: '10 yrs', rating: 4.5, available: true, recommended: true },

  // KANYAKUMARI/NAGERCOIL
  { id: 37, name: 'Dr. Yamini R.', hospital: 'Asaripallam Medical', specialist: 'Gynecologist', location: 'Nagercoil', area: 'Asaripallam', contact: '04652-112233', exp: '16 yrs', rating: 4.8, available: true, recommended: true },
];
