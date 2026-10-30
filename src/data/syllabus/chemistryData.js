/**
 * OFFICIAL NCTB HSC CHEMISTRY SYLLABUS DATA (1st & 2nd Papers)
 * Code 176 (1st Paper, Class 11, 140 Periods)
 * Code 177 (2nd Paper, Class 12, 140 Periods)
 * Extracted directly from official NCTB Syllabus PDF.
 */

export const CHEMISTRY_SUBJECTS = [
  {
    id: 'sub-chem-1',
    name: 'Chemistry 1st Paper',
    code: '176',
    accentColor: '#2B5740', // Muted Forest
    tagBg: '#E2EBE5',
    tagText: '#1E402F',
    isOfficial: true,
  },
  {
    id: 'sub-chem-2',
    name: 'Chemistry 2nd Paper',
    code: '177',
    accentColor: '#35654C', // Emerald Forest
    tagBg: '#E5EDE7',
    tagText: '#234935',
    isOfficial: true,
  },
];

export const CHEMISTRY_CHAPTERS = [
  // Chemistry 1st Paper (140 Periods Total)
  {
    id: 'ch-chem1-1',
    subjectId: 'sub-chem-1',
    chapterNumber: 1,
    periods: 15,
    name: 'Chapter 1: Safe Use of Laboratory (ল্যাবরেটরির নিরাপদ ব্যবহার)',
  },
  {
    id: 'ch-chem-2', // Preserved for backwards compatibility
    subjectId: 'sub-chem-1',
    chapterNumber: 2,
    periods: 32,
    name: 'Chapter 2: Qualitative Chemistry (গুণগত রসায়ন)',
  },
  {
    id: 'ch-chem-3', // Preserved for backwards compatibility
    subjectId: 'sub-chem-1',
    chapterNumber: 3,
    periods: 30,
    name: 'Chapter 3: Periodic Properties & Chemical Bonding (মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন)',
  },
  {
    id: 'ch-chem-4', // Preserved for backwards compatibility
    subjectId: 'sub-chem-1',
    chapterNumber: 4,
    periods: 28,
    name: 'Chapter 4: Chemical Changes (রাসায়নিক পরিবর্তন)',
  },
  {
    id: 'ch-chem1-5',
    subjectId: 'sub-chem-1',
    chapterNumber: 5,
    periods: 35,
    name: 'Chapter 5: Applied / Economic Chemistry (কর্মমুখী রসায়ন)',
  },

  // Chemistry 2nd Paper (140 Periods Total)
  {
    id: 'ch-chem2-1',
    subjectId: 'sub-chem-2',
    chapterNumber: 1,
    periods: 25,
    name: 'Chapter 1: Environmental Chemistry (পরিবেশ রসায়ন)',
  },
  {
    id: 'ch-chem2-2',
    subjectId: 'sub-chem-2',
    chapterNumber: 2,
    periods: 40,
    name: 'Chapter 2: Organic Chemistry (জৈব রসায়ন)',
  },
  {
    id: 'ch-chem2-3',
    subjectId: 'sub-chem-2',
    chapterNumber: 3,
    periods: 22,
    name: 'Chapter 3: Quantitative Chemistry (পরিমাণগত রসায়ন)',
  },
  {
    id: 'ch-chem2-4',
    subjectId: 'sub-chem-2',
    chapterNumber: 4,
    periods: 28,
    name: 'Chapter 4: Electrochemistry (তড়িৎ রসায়ন)',
  },
  {
    id: 'ch-chem2-5',
    subjectId: 'sub-chem-2',
    chapterNumber: 5,
    periods: 25,
    name: 'Chapter 5: Industrial / Economic Chemistry (অর্থনৈতিক রসায়ন)',
  },
];

export const CHEMISTRY_TOPICS = [
  // ==========================================================
  // CHEMISTRY 1ST PAPER - CHAPTER 1: ল্যাবরেটরির নিরাপদ ব্যবহার (15 Periods)
  // ==========================================================
  {
    id: 'top-chem1-1-1',
    chapterId: 'ch-chem1-1',
    name: 'ল্যাবরেটরি ব্যবহার বিধি: পোশাক, নিরাপদ গ্লাস, মাস্ক ও হ্যান্ড গ্লাভস (Laboratory Safety Rules: Apron, Safety Glasses, Mask & Gloves)',
  },
  {
    id: 'top-chem1-1-2',
    chapterId: 'ch-chem1-1',
    name: 'গ্লাসসামগ্রী ব্যবহারের নিরাপদ কৌশল (Safe Techniques of Using Glassware)',
  },
  {
    id: 'top-chem1-1-3',
    chapterId: 'ch-chem1-1',
    name: 'ল্যাবরেটরি, যন্ত্রপাতি ও গ্লাসসামগ্রী পরিষ্কার করার কৌশল (Cleaning Laboratory Equipment & Glassware)',
  },
  {
    id: 'top-chem1-1-4',
    chapterId: 'ch-chem1-1',
    name: 'পল-বুঙ্গি ব্যালেন্স ও ডিজিটাল ব্যালেন্স (২-ডিজিট ও ৪-ডিজিট) ব্যবহারের ক্ষেত্র ও বিধি (Paul-Bunge & Digital Balances)',
  },
  {
    id: 'top-chem1-1-5',
    chapterId: 'ch-chem1-1',
    name: 'মেজারিং সিলিন্ডার, ব্যুরেট, আয়তনমিতিক ফ্লাক্স ও পিপেট ব্যবহারের ক্ষেত্র ও বিধি (Measuring Cylinder, Burette, Volumetric Flask & Pipette)',
  },
  {
    id: 'top-chem1-1-6',
    chapterId: 'ch-chem1-1',
    name: 'কনিক্যাল ফ্লাক্স, ওয়াশ বোতল, ব্যুরেট ও পিপেট ব্যবহারের কৌশল (Techniques of Using Conical Flask, Wash Bottle, Burette & Pipette)',
  },
  {
    id: 'top-chem1-1-7',
    chapterId: 'ch-chem1-1',
    name: 'স্পিরিট ল্যাম্প ও বুনসেন বার্নার দ্বারা টেস্টটিউব, বিকার, গোলতলি ফ্লাক্স, কনিক্যাল ফ্লাক্সে তাপ দেওয়ার কৌশল (Heating Techniques with Spirit Lamp & Bunsen Burner)',
  },
  {
    id: 'top-chem1-1-8',
    chapterId: 'ch-chem1-1',
    name: 'রিএজেন্ট বোতল ব্যবহারের নিরাপদ কৌশল (Safe Handling of Reagent Bottles)',
  },
  {
    id: 'top-chem1-1-9',
    chapterId: 'ch-chem1-1',
    name: 'রাসায়নিক দ্রব্য সংরক্ষণ ও ব্যবহারে সতর্কতা (Precaution in Chemical Storage & Handling)',
  },
  {
    id: 'top-chem1-1-10',
    chapterId: 'ch-chem1-1',
    name: 'ব্যবহৃত রাসায়নিক দ্রব্যের নিরাপদ সংরক্ষণ ও পরিত্যাগ (Safe Disposal of Used Chemicals)',
  },
  {
    id: 'top-chem1-1-11',
    chapterId: 'ch-chem1-1',
    name: 'পরিবেশের উপর ল্যাবরেটরিতে ব্যবহৃত রাসায়নিক দ্রব্যের প্রভাব ও পরিমিত ব্যবহারের গুরুত্ব (Environmental Impact of Lab Chemicals & Controlled Usage)',
  },
  {
    id: 'top-chem1-1-12',
    chapterId: 'ch-chem1-1',
    name: 'সেমি-মাইক্রো এবং মাইক্রো অ্যানালিটিক্যাল পদ্ধতি (Semi-micro and Micro Analytical Methods)',
  },
  {
    id: 'top-chem1-1-13',
    chapterId: 'ch-chem1-1',
    name: 'ল্যাবরেটরি নিরাপত্তা সামগ্রী, প্রাথমিক চিকিৎসা ও ফার্স্ট এইড বক্স ব্যবহার বিধি (Lab Safety Equipment, First Aid & First Aid Box)',
  },

  // ==========================================================
  // CHEMISTRY 1ST PAPER - CHAPTER 2: গুণগত রসায়ন (32 Periods)
  // ==========================================================
  {
    id: 'top-chem-2-1', // Preserved
    chapterId: 'ch-chem-2',
    name: 'পরমাণুর রাদারফোর্ড ও বোর মডেল (Rutherford & Bohr Atomic Models)',
  },
  {
    id: 'top-chem-2-2', // Preserved
    chapterId: 'ch-chem-2',
    name: 'কোয়ান্টাম সংখ্যা, বিভিন্ন উপস্তর এবং ইলেকট্রন ধারণ ক্ষমতা (Quantum Numbers, Subshells & Electron Capacity)',
  },
  {
    id: 'top-chem1-2-3',
    chapterId: 'ch-chem-2',
    name: 'কোয়ান্টাম উপস্তরের শক্তিক্রম এবং আকৃতি: s, p, d, f (Energy Hierarchy & Shape of Subshells)',
  },
  {
    id: 'top-chem1-2-4',
    chapterId: 'ch-chem-2',
    name: 'আউফবাউ (Aufbau), হুন্ড (Hund\'s) ও পাউলির বর্জন (Pauli Exclusion) নীতি (Aufbau Principle, Hund\'s Rule & Pauli Exclusion Principle)',
  },
  {
    id: 'top-chem1-2-5',
    chapterId: 'ch-chem-2',
    name: 'তড়িৎ চুম্বকীয় বর্ণালি (Electromagnetic Spectrum)',
  },
  {
    id: 'top-chem1-2-6',
    chapterId: 'ch-chem-2',
    name: 'রেখা বর্ণালির সাহায্যে মৌল শনাক্তকরণ (Element Identification by Line Spectra)',
  },
  {
    id: 'top-chem1-2-7',
    chapterId: 'ch-chem-2',
    name: 'বোর পরমাণু মডেল ও হাইড্রোজেন পরমাণু বর্ণালি: লাইম্যান, বামার, প্যাসচেন, ব্র্যাকেট, ফুন্ড সিরিজ (Bohr Model & Hydrogen Atomic Emission Spectrum)',
  },
  {
    id: 'top-chem1-2-8',
    chapterId: 'ch-chem-2',
    name: 'জাল পাসপোর্ট ও টাকা শনাক্তকরণে UV রশ্মির ব্যবহার (UV Rays in Fake Currency & Passport Detection)',
  },
  {
    id: 'top-chem1-2-9',
    chapterId: 'ch-chem-2',
    name: 'চিকিৎসা ক্ষেত্রে IR রশ্মির ব্যবহার (Medical Applications of IR Rays)',
  },
  {
    id: 'top-chem1-2-10',
    chapterId: 'ch-chem-2',
    name: 'রোগ নির্ণয়ে MRI পরীক্ষার মূলনীতি (Principles of MRI in Medical Diagnosis)',
  },
  {
    id: 'top-chem-2-3', // Preserved
    chapterId: 'ch-chem-2',
    name: 'শিখা পরীক্ষার মাধ্যমে Na+, K+, Ca2+, Cu2+ আয়ন শনাক্তকরণ (Flame Test for Cation Identification)',
  },
  {
    id: 'top-chem1-2-12',
    chapterId: 'ch-chem-2',
    name: 'আয়নিক যৌগের দ্রাব্যতা, দ্রাব্যতা নীতি ও দ্রাব্যতা গুণফল Ksp (Solubility, Solubility Product Ksp & Common Ion Effect)',
  },
  {
    id: 'top-chem1-2-13',
    chapterId: 'ch-chem-2',
    name: 'দ্রবণে ক্যাটায়ন ও অ্যানায়ন শনাক্তকরণ: Cu2+, Al3+, Fe2+, Fe3+, Zn2+, Ca2+, Na+, NH4+, Cl-, SO42-, CO32- (Wet Tests for Ions)',
  },
  {
    id: 'top-chem1-2-14',
    chapterId: 'ch-chem-2',
    name: 'কেলাসন ও বিশোধন পদ্ধতি (Crystallization & Purification)',
  },
  {
    id: 'top-chem1-2-15',
    chapterId: 'ch-chem-2',
    name: 'পাতন ও আংশিক পাতন (Distillation & Fractional Distillation)',
  },
  {
    id: 'top-chem1-2-16',
    chapterId: 'ch-chem-2',
    name: 'বাষ্প পাতন ও ঊর্ধ্বপাতন (Steam Distillation & Sublimation)',
  },
  {
    id: 'top-chem1-2-17',
    chapterId: 'ch-chem-2',
    name: 'দ্রাবক নিষ্কাশন ও বণ্টন সূত্র (Solvent Extraction & Partition Law)',
  },
  {
    id: 'top-chem-2-4', // Preserved
    chapterId: 'ch-chem-2',
    name: 'ক্রোমাটোগ্রাফি: পেপার ও পাতলা স্তর ক্রোমাটোগ্রাফি (Chromatography: Paper & TLC Principles, Rf Value)',
  },

  // ==========================================================
  // CHEMISTRY 1ST PAPER - CHAPTER 3: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (30 Periods)
  // ==========================================================
  {
    id: 'top-chem1-3-1',
    chapterId: 'ch-chem-3',
    name: 'ইলেকট্রন বিন্যাসের ভিত্তিতে মৌলের শ্রেণিবিভাগ: s, p, d, f-ব্লক মৌল (Classification by Electronic Configuration: s, p, d, f blocks)',
  },
  {
    id: 'top-chem1-3-2',
    chapterId: 'ch-chem-3',
    name: 'বিভিন্ন ব্লকের মৌলসমূহের সাধারণ বৈশিষ্ট্য ও ধর্মাবলি (General Properties of s, p, d, f Block Elements)',
  },
  {
    id: 'top-chem1-3-3',
    chapterId: 'ch-chem-3',
    name: 'd-ব্লক মৌল ও অবস্থান্তর মৌল, রঙিন যৌগ ও জটিল আয়ন গঠন (Transition Elements, Colored Compounds & Complex Ion Formation)',
  },
  {
    id: 'top-chem1-3-4',
    chapterId: 'ch-chem-3',
    name: 'পর্যায়বৃত্ত ধর্ম: পরমাণুর আকার ও পারমাণবিক ব্যাসার্ধ (Periodic Properties: Atomic Size & Radius)',
  },
  {
    id: 'top-chem1-3-5',
    chapterId: 'ch-chem-3',
    name: 'আয়নীকরণ শক্তি ও এর প্রভাবকসমূহ (Ionization Energy & Factors Influencing It)',
  },
  {
    id: 'top-chem1-3-6',
    chapterId: 'ch-chem-3',
    name: 'ইলেকট্রন আসক্তি ও ব্যতিক্রমসমূহ (Electron Affinity & Periodic Trends)',
  },
  {
    id: 'top-chem1-3-7',
    chapterId: 'ch-chem-3',
    name: 'তড়িৎ ঋণাত্মকতা ও পলিং স্কেল (Electronegativity & Pauling Scale)',
  },
  {
    id: 'top-chem1-3-8',
    chapterId: 'ch-chem-3',
    name: 'গলনাঙ্ক, স্ফুটনাঙ্ক ও ধাতব ধর্ম (Melting Point, Boiling Point & Metallic Nature)',
  },
  {
    id: 'top-chem1-3-9',
    chapterId: 'ch-chem-3',
    name: 'মৌলের অক্সাইডের অম্ল-ক্ষারক প্রকৃতি (Acid-Base Nature of Element Oxides)',
  },
  {
    id: 'top-chem1-3-10',
    chapterId: 'ch-chem-3',
    name: 'রাসায়নিক বন্ধন ও আয়নিক বন্ধন গঠন (Chemical Bonding & Ionic Bond Formation)',
  },
  {
    id: 'top-chem1-3-11',
    chapterId: 'ch-chem-3',
    name: 'সমযোজী বন্ধন ও অষ্টক সম্প্রসারণ/সংকোচন (Covalent Bond & Octet Rule)',
  },
  {
    id: 'top-chem1-3-12',
    chapterId: 'ch-chem-3',
    name: 'সন্নিবেশ সমযোজী বন্ধন (Coordinate Covalent Bond)',
  },
  {
    id: 'top-chem1-3-13',
    chapterId: 'ch-chem-3',
    name: 'সংকরায়ন (Hybridization): sp3, sp2, sp, sp3d, sp3d2 সংকরায়ন ও অণুর আকৃতি (Hybridization & Molecular Geometry - VSEPR Theory)',
  },
  {
    id: 'top-chem1-3-14',
    chapterId: 'ch-chem-3',
    name: 'পানির অণুর কৌণিক আকৃতি ও অ্যামোনিয়ার পিরামিডীয় আকৃতি (Shapes of H2O and NH3 Molecules)',
  },
  {
    id: 'top-chem1-3-15',
    chapterId: 'ch-chem-3',
    name: 'বন্ধন কোণ ও মুক্তজোড় ইলেকট্রনের বিকর্ষণ প্রভাব (Bond Angles & Lone Pair Repulsion)',
  },
  {
    id: 'top-chem1-3-16',
    chapterId: 'ch-chem-3',
    name: 'পোলারিটি ও ডাইপোল মোমেন্ট (Polarity & Dipole Moment of Covalent Molecules)',
  },
  {
    id: 'top-chem1-3-17',
    chapterId: 'ch-chem-3',
    name: 'পোলারায়ন ও ফাজানের নীতি (Polarization & Fajan\'s Rules)',
  },
  {
    id: 'top-chem1-3-18',
    chapterId: 'ch-chem-3',
    name: 'ভ্যানডার ওয়ালস আকর্ষণ বল (Van der Waals Forces)',
  },
  {
    id: 'top-chem1-3-19',
    chapterId: 'ch-chem-3',
    name: 'হাইড্রোজেন বন্ধন: আন্তঃআণবিক ও অন্তঃআণবিক হাইড্রোজেন বন্ধন (Hydrogen Bonding: Intermolecular & Intramolecular)',
  },
  {
    id: 'top-chem1-3-20',
    chapterId: 'ch-chem-3',
    name: 'পানির ভৌত ধর্ম ও জৈব অণুতে হাইড্রোজেন বন্ধনের প্রভাব (Effects of Hydrogen Bonding on Physical Properties of Water)',
  },
  {
    id: 'top-chem1-3-21',
    chapterId: 'ch-chem-3',
    name: 'অজৈব যৌগের আধুনিক নামকরণ (IUPAC Nomenclature of Inorganic Compounds)',
  },

  // ==========================================================
  // CHEMISTRY 1ST PAPER - CHAPTER 4: রাসায়নিক পরিবর্তন (28 Periods)
  // ==========================================================
  {
    id: 'top-chem1-4-1',
    chapterId: 'ch-chem-4',
    name: 'রাসায়নিক বিক্রিয়া ও গ্রিন কেমিস্ট্রি ধারণা (Chemical Reactions & 12 Principles of Green Chemistry)',
  },
  {
    id: 'top-chem1-4-2',
    chapterId: 'ch-chem-4',
    name: 'বিক্রিয়ার দিক: একমুখী ও উভমুখী বিক্রিয়া (Direction of Reactions: Irreversible & Reversible Reactions)',
  },
  {
    id: 'top-chem-4-1', // Preserved
    chapterId: 'ch-chem-4',
    name: 'বিক্রিয়ার গতি ও হার, বিক্রিয়ার হারের সমীকরণ ও ক্রম (Rate of Reaction & Order of Reaction)',
  },
  {
    id: 'top-chem1-4-4',
    chapterId: 'ch-chem-4',
    name: 'সক্রিয়ণ শক্তি ও আরহেনিয়াস সমীকরণ (Activation Energy & Arrhenius Equation)',
  },
  {
    id: 'top-chem1-4-5',
    chapterId: 'ch-chem-4',
    name: 'প্রভাবক ও প্রভাবন প্রক্রিয়া: সমসত্ত্ব ও অসমসত্ত্ব প্রভাবন (Catalysts & Catalysis: Homogeneous & Heterogeneous)',
  },
  {
    id: 'top-chem1-4-6',
    chapterId: 'ch-chem-4',
    name: 'রাসায়নিক সাম্যাবস্থা ও গতিশীল প্রকৃতি (Chemical Equilibrium & Dynamic Nature)',
  },
  {
    id: 'top-chem-4-3', // Preserved
    chapterId: 'ch-chem-4',
    name: 'লা-শাতেলিয়ারের নীতি: তাপমাত্রা, চাপ ও ঘনমাত্রার প্রভাব (Le Chatelier\'s Principle: Effect of Temp, Pressure, Conc.)',
  },
  {
    id: 'top-chem1-4-8',
    chapterId: 'ch-chem-4',
    name: 'শিল্পক্ষেত্রে লা-শাতেলিয়ারের নীতি প্রয়োগ: হেবার পদ্ধতিতে অ্যামোনিয়া ও স্পর্শ পদ্ধতিতে H2SO4 উৎপাদন (Industrial Applications: Haber-Bosch & Contact Processes)',
  },
  {
    id: 'top-chem-4-2', // Preserved
    chapterId: 'ch-chem-4',
    name: 'ভরক্রিয়া সূত্র ও সাম্যধ্রুবক: Kc ও Kp নির্ণয় ও সম্পর্ক (Law of Mass Action & Equilibrium Constants Kc and Kp)',
  },
  {
    id: 'top-chem1-4-10',
    chapterId: 'ch-chem-4',
    name: 'পানির আয়নিক গুণফল Kw (Ionic Product of Water Kw)',
  },
  {
    id: 'top-chem-4-4', // Preserved
    chapterId: 'ch-chem-4',
    name: 'অম্ল-ক্ষারকের বিভিন্ন তত্ত্ব: আরহেনিয়াস, ব্রনস্টেড-লাউরি ও লুইস মতবাদ (Acid-Base Theories: Arrhenius, Bronsted-Lowry & Lewis)',
  },
  {
    id: 'top-chem1-4-12',
    chapterId: 'ch-chem-4',
    name: 'অম্ল ও ক্ষারকের বিয়োজন ধ্রুবক (Ka ও Kb) এবং অম্লের তীব্রতা (Dissociation Constants Ka, Kb & Relative Strengths)',
  },
  {
    id: 'top-chem1-4-13',
    chapterId: 'ch-chem-4',
    name: 'pH ও pOH স্কেল এবং গণনা (pH and pOH Scale & Calculations)',
  },
  {
    id: 'top-chem1-4-14',
    chapterId: 'ch-chem-4',
    name: 'বাফার দ্রবণ: অম্লীয় ও ক্ষারীয় বাফার দ্রবণের প্রস্তুতি ও কার্যপ্রণালী (Buffer Solutions: Acidic & Basic Buffer Mechanisms)',
  },
  {
    id: 'top-chem1-4-15',
    chapterId: 'ch-chem-4',
    name: 'হেন্ডারসন-হ্যাসেলবালখ সমীকরণ ও বাফার ক্ষমতা (Henderson-Hasselbalch Equation & Buffer Capacity)',
  },
  {
    id: 'top-chem1-4-16',
    chapterId: 'ch-chem-4',
    name: 'মানবদেহের রক্তে বাফার ক্রিয়া: ব্লাড বাফার সিস্টেম (Buffer Action in Human Blood)',
  },
  {
    id: 'top-chem1-4-17',
    chapterId: 'ch-chem-4',
    name: 'রাসায়নিক পরিবর্তন ও তাপীয় পরিবর্তন: তাপোৎপাদী ও তাপহারী বিক্রিয়া (Chemical Changes & Enthalpy Changes: Exothermic and Endothermic)',
  },
  {
    id: 'top-chem1-4-18',
    chapterId: 'ch-chem-4',
    name: 'প্রমাণ গঠন তাপ, দহন তাপ, প্রশমন তাপ ও দ্রবণ তাপ (Standard Enthalpy of Formation, Combustion, Neutralization & Solution)',
  },
  {
    id: 'top-chem1-4-19',
    chapterId: 'ch-chem-4',
    name: 'হেসের তাপ সমষ্টিকরণ সূত্র ও ল্যাপলাস সূত্র (Hess\'s Law of Constant Heat Summation)',
  },

  // ==========================================================
  // CHEMISTRY 1ST PAPER - CHAPTER 5: কর্মমুখী রসায়ন (35 Periods)
  // ==========================================================
  {
    id: 'top-chem1-5-1',
    chapterId: 'ch-chem1-5',
    name: 'খাদ্য নিরাপত্তা ও খাদ্য রসায়ন (Food Security & Role of Chemistry)',
  },
  {
    id: 'top-chem1-5-2',
    chapterId: 'ch-chem1-5',
    name: 'খাদ্য নষ্ট হওয়ার কারণ ও ব্যাকটেরিয়া/ছত্রাকের ভূমিকা (Causes of Food Spoilage & Microorganism Action)',
  },
  {
    id: 'top-chem1-5-3',
    chapterId: 'ch-chem1-5',
    name: 'অনুমোদিত প্রিজারভেটিভস ও খাদ্য সংরক্ষণ কৌশল (Approved Food Preservatives & Preservation Mechanisms)',
  },
  {
    id: 'top-chem1-5-4',
    chapterId: 'ch-chem1-5',
    name: 'প্রাকৃতিক খাদ্য সংরক্ষক: লবণ, চিনি, তেল ও ভিনেগার (Natural Preservatives: Salt, Sugar, Oil & Vinegar)',
  },
  {
    id: 'top-chem1-5-5',
    chapterId: 'ch-chem1-5',
    name: 'খাদ্য কৌটাজাতকরণের মূলনীতি (Principles of Food Canning & Packaging)',
  },
  {
    id: 'top-chem1-5-6',
    chapterId: 'ch-chem1-5',
    name: 'বিভিন্ন খাদ্যদ্রব্য কৌটাজাতকরণ প্রণালী: ফল, সবজি, মাছ ও মাংস (Canning of Local Fruits, Vegetables, Fish & Meat)',
  },
  {
    id: 'top-chem1-5-7',
    chapterId: 'ch-chem1-5',
    name: 'মাখন থেকে ঘি উৎপাদন ও দুধের পাস্তুরায়ন (Production of Ghee from Butter & Pasteurization of Milk)',
  },
  {
    id: 'top-chem1-5-8',
    chapterId: 'ch-chem1-5',
    name: 'টয়লেট্রিজ ও কসমেটিকস সামগ্রী উৎপাদন: কোল্ড ক্রিম, ভ্যানিশিং ক্রিম, হেয়ার অয়েল ও আফটার শেভ (Production of Toiletries & Cosmetics: Creams, Hair Oil, After Shave)',
  },
  {
    id: 'top-chem1-5-9',
    chapterId: 'ch-chem1-5',
    name: 'ট্যালকম পাউডার ও বেবি লোশন প্রস্তুতি (Preparation of Talcum Powder & Baby Lotion)',
  },
  {
    id: 'top-chem1-5-10',
    chapterId: 'ch-chem1-5',
    name: 'সাবান ও ডিটারজেন্টের পরিচ্ছন্নকরণ কৌশল (Cleansing Mechanisms of Soaps & Synthetic Detergents)',
  },
  {
    id: 'top-chem1-5-11',
    chapterId: 'ch-chem1-5',
    name: 'গ্লাস ক্লিনার ও টয়লেট ক্লিনার প্রস্তুতি ও পরিচ্ছন্নকরণ কৌশল (Preparation & Cleansing Action of Glass Cleaner & Toilet Cleaner)',
  },
  {
    id: 'top-chem1-5-12',
    chapterId: 'ch-chem1-5',
    name: 'সুগন্ধি ও পারফিউম তৈরির কৌশল (Chemistry of Perfumes & Fragrances)',
  },

  // ==========================================================
  // CHEMISTRY 2ND PAPER - CHAPTER 1: পরিবেশ রসায়ন (25 Periods)
  // ==========================================================
  {
    id: 'top-chem2-1-1',
    chapterId: 'ch-chem2-1',
    name: 'বায়ুমণ্ডলের উপাদান ও বিভিন্ন স্তরের গঠন: ট্রপোস্ফিয়ার, স্ট্র্যাটোস্ফিয়ার, মেসোস্ফিয়ার ও থার্মোস্ফিয়ার (Atmosphere Layers & Composition)',
  },
  {
    id: 'top-chem2-1-2',
    chapterId: 'ch-chem2-1',
    name: 'ঘূর্ণিঝড় ও জলোচ্ছ্বাস সৃষ্টিতে বায়ুর তাপ, চাপ, ঘনত্ব ও জলীয়বাষ্পের ভূমিকা (Cyclones, Tidal Surges & Atmospheric Physics)',
  },
  {
    id: 'top-chem2-1-3',
    chapterId: 'ch-chem2-1',
    name: 'গ্যাসীয় সূত্রাবলি: বয়েল, চার্লস ও গে-লুসাকের সূত্র (Gas Laws: Boyle\'s, Charles\'s & Gay-Lussac\'s Laws)',
  },
  {
    id: 'top-chem2-1-4',
    chapterId: 'ch-chem2-1',
    name: 'আভোগাড্রোর সূত্র ও সমন্বিত গ্যাস সমীকরণ (Avogadro\'s Law & Combined Gas Equation)',
  },
  {
    id: 'top-chem2-1-5',
    chapterId: 'ch-chem2-1',
    name: 'আদর্শ গ্যাস সমীকরণ (PV = nRT) ও সার্বজনীন গ্যাস ধ্রুবক R এর তাৎপর্য (Ideal Gas Equation & Universal Gas Constant R)',
  },
  {
    id: 'top-chem2-1-6',
    chapterId: 'ch-chem2-1',
    name: 'ডাল্টনের আংশিক চাপ সূত্র ও এর প্রয়োগ (Dalton\'s Law of Partial Pressures & Applications)',
  },
  {
    id: 'top-chem2-1-7',
    chapterId: 'ch-chem2-1',
    name: 'গ্রাহামের গ্যাস ব্যাপন সূত্র (Graham\'s Law of Gas Diffusion)',
  },
  {
    id: 'top-chem2-1-8',
    chapterId: 'ch-chem2-1',
    name: 'গ্যাসের গতি তত্ত্বের মৌলিক স্বীকার্যসমূহ ও গতীয় সমীকরণ (Kinetic Theory of Gases & Kinetic Gas Equation)',
  },
  {
    id: 'top-chem2-1-9',
    chapterId: 'ch-chem2-1',
    name: 'গ্যাসের গতিশক্তি ও গড় বর্গবেগের বর্গমূল RMS বেগ গণনা (Kinetic Energy & RMS Velocity of Gas Molecules)',
  },
  {
    id: 'top-chem2-1-10',
    chapterId: 'ch-chem2-1',
    name: 'বাস্তব গ্যাসের আচরণ ও ভ্যানডার ওয়ালস সমীকরণ (Real Gases Behavior & Van der Waals Equation)',
  },
  {
    id: 'top-chem2-1-11',
    chapterId: 'ch-chem2-1',
    name: 'ক্রান্তি তাপমাত্রা ও গ্যাসের তরলীকরণ (Critical Temperature & Liquefaction of Gases)',
  },
  {
    id: 'top-chem2-1-12',
    chapterId: 'ch-chem2-1',
    name: 'বায়ু দূষণ: প্রধান বায়ু দূষকসমূহ: CO, SOx, NOx, CFCs ও উদ্বায়ী জৈব যৌগ (Air Pollutants & Environmental Impact)',
  },
  {
    id: 'top-chem2-1-13',
    chapterId: 'ch-chem2-1',
    name: 'গ্রিনহাউজ প্রভাব ও বৈশ্বিক উষ্ণায়ন (Greenhouse Effect & Global Warming)',
  },
  {
    id: 'top-chem2-1-14',
    chapterId: 'ch-chem2-1',
    name: 'অ্যাসিড বৃষ্টি ও এর ক্ষতিকর প্রভাব (Acid Rain Causes, Reactions & Effects)',
  },
  {
    id: 'top-chem2-1-15',
    chapterId: 'ch-chem2-1',
    name: 'ওজোন স্তর ক্ষয় ও CFC এর ভূমিকা (Ozone Depletion Mechanisms & CFCs Role)',
  },
  {
    id: 'top-chem2-1-16',
    chapterId: 'ch-chem2-1',
    name: 'পানির দূষণ ও পানির গুণগত মান পরিমাপক: DO, BOD, COD, TDS ও pH (Water Quality Parameters: DO, BOD, COD, TDS, pH)',
  },
  {
    id: 'top-chem2-1-17',
    chapterId: 'ch-chem2-1',
    name: 'পানির খরতা: অস্থায়ী ও স্থায়ী খরতা দূরীকরণ (Water Hardness: Temporary & Permanent Hardness Removal)',
  },
  {
    id: 'top-chem2-1-18',
    chapterId: 'ch-chem2-1',
    name: 'ভারী ধাতু দ্বারা পানি দূষণ: আর্সেনিক (As), লেড (Pb), ক্যাডমিয়াম (Cd), ক্রোমিয়াম (Cr) দূষণ (Heavy Metal Contamination: As, Pb, Cd, Cr)',
  },

  // ==========================================================
  // CHEMISTRY 2ND PAPER - CHAPTER 2: জৈব রসায়ন (40 Periods)
  // ==========================================================
  {
    id: 'top-chem2-2-1',
    chapterId: 'ch-chem2-2',
    name: 'জৈব যৌগের সূচনা, প্রাণশক্তি মতবাদ ও বার্জেলিয়াস-ভোলার অবদান (Vital Force Theory & Wohler\'s Synthesis)',
  },
  {
    id: 'top-chem2-2-2',
    chapterId: 'ch-chem2-2',
    name: 'জৈব যৌগের শ্রেণিবিভাগ: মুক্তশিকল, বদ্ধশিকল, অ্যালিসাইক্লিক, অ্যারোমেটিক ও হেটারোসাইক্লিক (Classification of Organic Compounds)',
  },
  {
    id: 'top-chem2-2-3',
    chapterId: 'ch-chem2-2',
    name: 'সমগোত্রীয় শ্রেণি ও বিভিন্ন কার্যকরী মূলক (Homologous Series & Functional Groups)',
  },
  {
    id: 'top-chem2-2-4',
    chapterId: 'ch-chem2-2',
    name: 'জৈব যৌগের IUPAC নামকরণ: অ্যালকেন, অ্যালকিন, অ্যালকাইন, অ্যালকোহল, অ্যালডিহাইড, কিটোন ও অ্যাসিড (IUPAC Nomenclature)',
  },
  {
    id: 'top-chem2-2-5',
    chapterId: 'ch-chem2-2',
    name: 'গাঠনিক সমাণুতা: শিকল, অবস্থান, কার্যকরী মূলক, মেটামারিজম ও টটোমারিজম (Structural Isomerism)',
  },
  {
    id: 'top-chem2-2-6',
    chapterId: 'ch-chem2-2',
    name: 'স্টেরিও সমাণুতা: জ্যামিতিক সমাণুতা (সিস-ট্রান্স) ও শর্তাবলি (Geometrical Isomerism: Cis-Trans)',
  },
  {
    id: 'top-chem2-2-7',
    chapterId: 'ch-chem2-2',
    name: 'আলোক সক্রিয় সমাণুতা: কাইরাল কার্বন, এনানশিওমার, ডায়াস্টেরিওমার ও রেসিমিক মিশ্রণ (Optical Isomerism: Chirality, Enantiomers, Racemic Mixture)',
  },
  {
    id: 'top-chem2-2-8',
    chapterId: 'ch-chem2-2',
    name: 'জৈব বিক্রিয়ার কৌশল: ইলেকট্রোফাইল, নিউক্লিওফাইল ও মুক্তমূলক (Reaction Intermediates: Electrophiles, Nucleophiles & Free Radicals)',
  },
  {
    id: 'top-chem2-2-9',
    chapterId: 'ch-chem2-2',
    name: 'জৈব বিক্রিয়ার প্রকারভেদ: যুত, প্রতিস্থাপন, অপনয়ন ও পুনর্বিন্যাস বিক্রিয়া (Types of Organic Reactions: Addition, Substitution, Elimination)',
  },
  {
    id: 'top-chem2-2-10',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালকেন: প্রস্তুতি ও ফ্রি-র‍্যাডিক্যাল হ্যালোজেনেশন বিক্রিয়া (Alkanes: Synthesis & Free-Radical Halogenation)',
  },
  {
    id: 'top-chem2-2-11',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালকিন: প্রস্তুতি, ইলেকট্রোফিলিক যুত বিক্রিয়া ও মারকনিকভের নীতি (Alkenes: Electrophilic Addition & Markownikoff\'s Rule)',
  },
  {
    id: 'top-chem2-2-12',
    chapterId: 'ch-chem2-2',
    name: 'ওজোনোলাইসিস ও ওজোনাইডের আর্দ্রবিশ্লেষণ (Ozonolysis of Alkenes & Identification of Double Bonds)',
  },
  {
    id: 'top-chem2-2-13',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালকাইন: প্রস্তুতি, অম্লধর্মিতা ও শনাক্তকরণ বিক্রিয়া (Alkyne Chemistry: Synthesis, Acidity & Reactions)',
  },
  {
    id: 'top-chem2-2-14',
    chapterId: 'ch-chem2-2',
    name: 'অ্যারোমেটিক যৌগ: বেনজিন ও হাকেলের (4n+2) ইলেকট্রন নিয়ম (Aromaticity & Huckel\'s Rule)',
  },
  {
    id: 'top-chem2-2-15',
    chapterId: 'ch-chem2-2',
    name: 'বেনজিনের ইলেকট্রোফিলিক প্রতিস্থাপন: নাইট্রেশন, হ্যালোজেনেশন, সালফোনেশন ও ফ্রিডেল-ক্রাফটস বিক্রিয়া (Electrophilic Aromatic Substitution)',
  },
  {
    id: 'top-chem2-2-16',
    chapterId: 'ch-chem2-2',
    name: 'বেনজিন বলয়ে অর্থো-প্যারা ও মেটা নির্দেশক মূলকের ওরিয়েন্টেশন (Ortho-Para & Meta Directing Groups in Benzene)',
  },
  {
    id: 'top-chem2-2-17',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালকাইল হ্যালাইড ও নিউক্লিওফিলিক প্রতিস্থাপন: SN1 ও SN2 কৌশল (Alkyl Halides & SN1/SN2 Mechanisms)',
  },
  {
    id: 'top-chem2-2-18',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালকোহল: শ্রেণিবিভাগ, লুকাস বিকারক দ্বারা 1°, 2°, 3° অ্যালকোহল পার্থক্যকরণ (Alcohols & Lucas Test for 1°, 2°, 3° Alcohols)',
  },
  {
    id: 'top-chem2-2-19',
    chapterId: 'ch-chem2-2',
    name: 'ফেনল: প্রস্তুতি, অম্লধর্মিতা, কোব বিক্রিয়া ও রাইমার-টিম্যান বিক্রিয়া (Phenol: Synthesis, Acidity & Electrophilic Reactions)',
  },
  {
    id: 'top-chem2-2-20',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালডিহাইড ও কিটোন: প্রস্তুতি ও নিউক্লিওফিলিক যুত বিক্রিয়া (Carbonyl Chemistry: Aldehydes & Ketones)',
  },
  {
    id: 'top-chem2-2-21',
    chapterId: 'ch-chem2-2',
    name: 'কার্বনিল যৌগের শনাক্তকরণ: 2,4-DNP পরীক্ষা, টলেন্স বিকারক ও ফেহলিং দ্রবণ পরীক্ষা (Identification Tests: 2,4-DNP, Tollens\' & Fehling\'s)',
  },
  {
    id: 'top-chem2-2-22',
    chapterId: 'ch-chem2-2',
    name: 'অ্যালডল ঘনীভবন ও ক্যানিজারো বিক্রিয়া (Aldol Condensation & Cannizzaro Reaction)',
  },
  {
    id: 'top-chem2-2-23',
    chapterId: 'ch-chem2-2',
    name: 'কার্বক্সিলিক অ্যাসিড: অম্লধর্মিতা ও অ্যাসিড ডেরিভেটিভসমূহ (Carboxylic Acids & Acid Derivatives)',
  },
  {
    id: 'top-chem2-2-24',
    chapterId: 'ch-chem2-2',
    name: 'অ্যামিন: 1°, 2°, 3° অ্যামিনের পার্থক্য ও কার্বিলঅ্যামিন পরীক্ষা (Amines Classification & Carbylamine Test)',
  },
  {
    id: 'top-chem2-2-25',
    chapterId: 'ch-chem2-2',
    name: 'ডায়াজোনিয়াম লবণ প্রস্তুতি ও স্যান্ডমেয়ার বিক্রিয়া (Diazonium Salts & Sandmeyer Reaction)',
  },
  {
    id: 'top-chem2-2-26',
    chapterId: 'ch-chem2-2',
    name: 'পলিমার ও পলিমারকরণ: যুত ও ঘনীভবন পলিমার (পলিথিন, পিভিসি, নাইলন-৬:৬, টেরিলিন) (Polymers & Polymerization)',
  },
  {
    id: 'top-chem2-2-27',
    chapterId: 'ch-chem2-2',
    name: 'পরিবেশ ও সমাজজীবনে জৈব যৌগের ভূমিকা: ডেটল ও প্যারাসিটামল (Role of Organic Compounds: Dettol, Paracetamol & Plastic Recycling)',
  },

  // ==========================================================
  // CHEMISTRY 2ND PAPER - CHAPTER 3: পরিমাণগত রসায়ন (22 Periods)
  // ==========================================================
  {
    id: 'top-chem2-3-1',
    chapterId: 'ch-chem2-3',
    name: 'রাসায়নিক গণনা ও মোল ধারণা (Chemical Calculations & Mole Concept)',
  },
  {
    id: 'top-chem2-3-2',
    chapterId: 'ch-chem2-3',
    name: 'গ্যাসের মোলার আয়তন ও প্রমাণ তাপমাত্রা-চাপ: STP ও SATP (Molar Volume of Gases at STP/SATP)',
  },
  {
    id: 'top-chem2-3-3',
    chapterId: 'ch-chem2-3',
    name: 'স্টয়কিওমিতি ও লিমিটিং বিক্রিয়ক গণনা (Stoichiometry & Limiting Reactant Calculations)',
  },
  {
    id: 'top-chem2-3-4',
    chapterId: 'ch-chem2-3',
    name: 'দ্রবণের বিভিন্ন ঘনমাত্রা একক: মোলারিটি, মোলালিটি, নরমালিটি ও মোল ভগ্নাংশ (Concentration Units: Molarity, Molality, Normality & Mole Fraction)',
  },
  {
    id: 'top-chem2-3-5',
    chapterId: 'ch-chem2-3',
    name: 'শতকরা সংযুতি, পিপিএম (ppm), পিপিবি (ppb) ও পিপিটি (ppt) এককে রূপান্তর (Percentage Composition, ppm, ppb, ppt Calculations)',
  },
  {
    id: 'top-chem2-3-6',
    chapterId: 'ch-chem2-3',
    name: 'প্রাথমিক প্রমাণ পদার্থ ও গৌণ প্রমাণ পদার্থ (Primary and Secondary Standard Substances)',
  },
  {
    id: 'top-chem2-3-7',
    chapterId: 'ch-chem2-3',
    name: 'প্রমাণ দ্রবণ প্রস্তুতি ও লঘুকরণ সমীকরণ: V1S1 = V2S2 (Preparation of Standard Solutions & Dilution Law)',
  },
  {
    id: 'top-chem2-3-8',
    chapterId: 'ch-chem2-3',
    name: 'অ্যাসিড-ক্ষার টাইট্রেশন ও প্রশমন বিন্দু (Acid-Base Titration & Neutralization Equivalence Point)',
  },
  {
    id: 'top-chem2-3-9',
    chapterId: 'ch-chem2-3',
    name: 'নির্দেশক নির্বাচন ও টাইট্রেশন লেখচিত্র (Selection of Indicators & Titration Curves)',
  },
  {
    id: 'top-chem2-3-10',
    chapterId: 'ch-chem2-3',
    name: 'জারণ-বিজারণ বিক্রিয়া ও জারণ সংখ্যা গণনা (Redox Reactions & Oxidation Number Calculations)',
  },
  {
    id: 'top-chem2-3-11',
    chapterId: 'ch-chem2-3',
    name: 'আয়ন-ইলেকট্রন পদ্ধতিতে জারণ-বিজারণ সমতাকরণ (Balancing Redox Reactions by Ion-Electron Method)',
  },
  {
    id: 'top-chem2-3-12',
    chapterId: 'ch-chem2-3',
    name: 'জারণ-বিজারণ টাইট্রেশন: KMnO4 ও K2Cr2O7 দ্বারা Fe2+ এর পরিমাণ নির্ণয় (Redox Titration: Determination of Fe2+ using KMnO4 & K2Cr2O7)',
  },
  {
    id: 'top-chem2-3-13',
    chapterId: 'ch-chem2-3',
    name: 'আয়োডিমিতি ও আয়োডোমিতি টাইট্রেশন (Iodimetry & Iodometry Titrations)',
  },
  {
    id: 'top-chem2-3-14',
    chapterId: 'ch-chem2-3',
    name: 'বিয়ার-ল্যাম্বার্ট সূত্র ও দ্রবণের ঘনমাত্রা নির্ণয় (Beer-Lambert Law & Concentration Determination)',
  },
  {
    id: 'top-chem2-3-15',
    chapterId: 'ch-chem2-3',
    name: 'পরিমাণগত বিশ্লেষণের আধুনিক যন্ত্রকৌশল: UV-Visible স্পেকট্রোস্কোপি, পারমাণবিক শোষণ বর্ণালিমিতি (AAS), HPLC ও GC (Instrumental Analysis: UV-Vis, AAS, HPLC, GC)',
  },

  // ==========================================================
  // CHEMISTRY 2ND PAPER - CHAPTER 4: তড়িৎ রসায়ন (28 Periods)
  // ==========================================================
  {
    id: 'top-chem2-4-1',
    chapterId: 'ch-chem2-4',
    name: 'তড়িৎ পরিবাহী ও এর প্রকারভেদ: ইলেকট্রনীয় পরিবাহী ও তড়িৎবিশ্লেষ্য পরিবাহী (Electrical Conductors: Electronic & Electrolytic)',
  },
  {
    id: 'top-chem2-4-2',
    chapterId: 'ch-chem2-4',
    name: 'তড়িৎবিশ্লেষ্যের পরিবাহিতা: আপেক্ষিক পরিবাহিতা, তুল্য পরিবাহিতা ও মোলার পরিবাহিতা (Conductivity of Electrolytes: Specific, Equivalent & Molar)',
  },
  {
    id: 'top-chem2-4-3',
    chapterId: 'ch-chem2-4',
    name: 'কোলরাউশের আয়নসমূহের স্বাধীন সঞ্চারণ সূত্র (Kohlrausch\'s Law of Independent Migration of Ions)',
  },
  {
    id: 'top-chem2-4-4',
    chapterId: 'ch-chem2-4',
    name: 'ফ্যারাডের তড়িৎবিশ্লেষণ সূত্রাবলি ও তড়িৎ রাসায়নিক তুল্যাঙ্ক (Faraday\'s Laws of Electrolysis & Electrochemical Equivalent)',
  },
  {
    id: 'top-chem2-4-5',
    chapterId: 'ch-chem2-4',
    name: 'ফ্যারাডের সূত্রের গাণিতিক প্রয়োগ ও ধাতু নিষ্কাশন/ইলেক্ট্রোপ্লেটিং (Quantitative Calculations of Electrolysis & Electroplating)',
  },
  {
    id: 'top-chem2-4-6',
    chapterId: 'ch-chem2-4',
    name: 'ধাতুর তড়িৎ রাসায়নিক সক্রিয়তা সিরিজ ও প্রয়োগ (Electrochemical Series of Metals & Applications)',
  },
  {
    id: 'top-chem2-4-7',
    chapterId: 'ch-chem2-4',
    name: 'গ্যালভানিক কোষ ও ড্যানিয়েল কোষের গঠন ও কার্যপ্রণালী (Galvanic Cells & Daniell Cell Construction and Working)',
  },
  {
    id: 'top-chem2-4-8',
    chapterId: 'ch-chem2-4',
    name: 'তড়িৎদ্বার বিভব ও প্রমাণ তড়িৎদ্বার বিভব (Electrode Potential & Standard Electrode Potential)',
  },
  {
    id: 'top-chem2-4-9',
    chapterId: 'ch-chem2-4',
    name: 'প্রমাণ হাইড্রোজেন তড়িৎদ্বার (SHE) ও এর সাহায্যে তড়িৎদ্বার বিভব পরিমাপ (Standard Hydrogen Electrode & Measurement of EMF)',
  },
  {
    id: 'top-chem2-4-10',
    chapterId: 'ch-chem2-4',
    name: 'তড়িৎ রাসায়নিক কোষের EMF ও কোষ বিভব সংক্রান্ত নার্নস্ট (Nernst) সমীকরণ (Electromotive Force & Nernst Equation)',
  },
  {
    id: 'top-chem2-4-11',
    chapterId: 'ch-chem2-4',
    name: 'কোষের মুক্ত শক্তি পরিবর্তন (ΔG) ও সাম্যধ্রুবক K এর সাথে EMF এর সম্পর্ক (Free Energy Change ΔG, Equilibrium Constant & Cell Potential)',
  },
  {
    id: 'top-chem2-4-12',
    chapterId: 'ch-chem2-4',
    name: 'প্রাথমিক কোষ ও মাধ্যমিক কোষ: ড্রাই সেল ও লেড-অ্যাসিড স্টোরেজ ব্যাটারি (Dry Cell & Lead-Acid Storage Battery)',
  },
  {
    id: 'top-chem2-4-13',
    chapterId: 'ch-chem2-4',
    name: 'লিথিয়াম ও লিথিয়াম-আয়ন ব্যাটারির গঠন, ক্রিয়াকৌশল ও সুবিধা (Lithium & Lithium-ion Batteries Construction and Mechanism)',
  },
  {
    id: 'top-chem2-4-14',
    chapterId: 'ch-chem2-4',
    name: 'হাইড্রোজেন-অক্সিজেন ফুয়েল সেল ও এর কার্যপ্রণালী (Hydrogen-Oxygen Fuel Cell Principles & Reactions)',
  },
  {
    id: 'top-chem2-4-15',
    chapterId: 'ch-chem2-4',
    name: 'ধাতুর ক্ষয় ও জারণ প্রতিরোধ কৌশল: মরিচা পড়া ও ক্যাথোডিক সংরক্ষণ (Metallic Corrosion & Prevention: Rusting & Cathodic Protection)',
  },

  // ==========================================================
  // CHEMISTRY 2ND PAPER - CHAPTER 5: অর্থনৈতিক রসায়ন (25 Periods)
  // ==========================================================
  {
    id: 'top-chem2-5-1',
    chapterId: 'ch-chem2-5',
    name: 'বাংলাদেশের প্রাকৃতিক গ্যাস ক্ষেত্র, উপাদান ও শিল্পে ব্যবহার (Natural Gas Resources in Bangladesh & Industrial Uses)',
  },
  {
    id: 'top-chem2-5-2',
    chapterId: 'ch-chem2-5',
    name: 'বাংলাদেশের কয়লা ক্ষেত্র, কয়লার শ্রেণিবিভাগ ও জ্বালানি মান (Coal Fields in Bangladesh, Classification & Calorific Value)',
  },
  {
    id: 'top-chem2-5-3',
    chapterId: 'ch-chem2-5',
    name: 'ইউরিয়া সার উৎপাদনের মূলনীতি ও কারখানা প্রণালী (Manufacture of Urea Fertilizer & Flowsheet)',
  },
  {
    id: 'top-chem2-5-4',
    chapterId: 'ch-chem2-5',
    name: 'কাচ শিল্প: কাচের উপাদান, প্রকারভেদ ও উৎপাদন পদ্ধতি (Glass Industry: Raw Materials, Types & Manufacturing)',
  },
  {
    id: 'top-chem2-5-5',
    chapterId: 'ch-chem2-5',
    name: 'সিরামিক শিল্প: কাঁচামাল, কাদামাটি ও সিরামিক উৎপাদন কৌশল (Ceramic Industry: Raw Materials & Production Process)',
  },
  {
    id: 'top-chem2-5-6',
    chapterId: 'ch-chem2-5',
    name: 'সিমেন্ট শিল্প: সিমেন্টের উপাদান ও পোর্টল্যান্ড সিমেন্ট উৎপাদন (Cement Industry: Raw Materials & Portland Cement Manufacture)',
  },
  {
    id: 'top-chem2-5-7',
    chapterId: 'ch-chem2-5',
    name: 'পাল্প ও কাগজ শিল্প: কাঁচামাল, সালফেট পদ্ধতি ও ক্লোরিনমুক্ত ব্লিচিং (Pulp & Paper Industry: Kraft Process & Bleaching)',
  },
  {
    id: 'top-chem2-5-8',
    chapterId: 'ch-chem2-5',
    name: 'চামড়া প্রক্রিয়াকরণ (ট্যানিং): ক্রোম ট্যানিং ও ভেজিটেবল ট্যানিং এর মূলনীতি (Leather Tanning Industry: Chrome & Vegetable Tanning)',
  },
  {
    id: 'top-chem2-5-9',
    chapterId: 'ch-chem2-5',
    name: 'শিল্পবর্জ্য ও পরিবেশ দূষণ: টেক্সটাইল, ডায়িং, চামড়া ও সার কারখানার বর্জ্য (Industrial Waste & Effluent Pollution)',
  },
  {
    id: 'top-chem2-5-10',
    chapterId: 'ch-chem2-5',
    name: 'বর্জ্য শোধনাগার বা ETP (Effluent Treatment Plant) এর গঠন ও মূলনীতি (ETP Principles & Wastewater Treatment)',
  },
  {
    id: 'top-chem2-5-11',
    chapterId: 'ch-chem2-5',
    name: 'পদার্থ পুনর্ব্যবহার (Recycling): লোহা, অ্যালুমিনিয়াম, কাচ, প্লাস্টিক ও কাগজ রিসাইক্লিং (Recycling of Metals, Glass, Plastic & Paper)',
  },
  {
    id: 'top-chem2-5-12',
    chapterId: 'ch-chem2-5',
    name: 'কয়লাভিত্তিক বিদ্যুৎকেন্দ্রের সুবিধা-অসুবিধা ও ফ্লাই অ্যাশ ব্যবস্থাপনা (Coal-based Power Plants, Pros/Cons & Fly Ash Management)',
  },
  {
    id: 'top-chem2-5-13',
    chapterId: 'ch-chem2-5',
    name: 'ন্যানোপ্রযুক্তি ও ন্যানোপার্টিক্যালস: ধারণা, বৈশিষ্ট্য ও শিল্পক্ষেত্রে প্রয়োগ (Nanotechnology & Nanoparticles: Principles & Industrial Applications)',
  },
];
