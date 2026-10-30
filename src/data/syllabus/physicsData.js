/**
 * OFFICIAL NCTB HSC PHYSICS SYLLABUS DATA (1st & 2nd Papers)
 * Code 174 (1st Paper, Class 11, 140 Periods)
 * Code 175 (2nd Paper, Class 12, 140 Periods)
 * Extracted directly from official NCTB Syllabus PDF.
 */

export const PHYSICS_SUBJECTS = [
  {
    id: 'sub-phy-1',
    name: 'Physics 1st Paper',
    code: '174',
    accentColor: '#3C4B39', // Deep Olive
    tagBg: '#E7ECE3',
    tagText: '#2B3728',
    isOfficial: true,
  },
  {
    id: 'sub-phy-2',
    name: 'Physics 2nd Paper',
    code: '175',
    accentColor: '#4A5846', // Forest Olive
    tagBg: '#EBEFE8',
    tagText: '#2F3C2C',
    isOfficial: true,
  },
];

export const PHYSICS_CHAPTERS = [
  // Physics 1st Paper (140 Periods Total)
  {
    id: 'ch-phy1-1',
    subjectId: 'sub-phy-1',
    chapterNumber: 1,
    periods: 16,
    name: 'Chapter 1: Physical World & Measurement (ভৌতজগত ও পরিমাপ)',
  },
  {
    id: 'ch-phy-2', // Preserved for backwards compatibility
    subjectId: 'sub-phy-1',
    chapterNumber: 2,
    periods: 10,
    name: 'Chapter 2: Vector (ভেক্টর)',
  },
  {
    id: 'ch-phy-3', // Preserved for backwards compatibility
    subjectId: 'sub-phy-1',
    chapterNumber: 3,
    periods: 10,
    name: 'Chapter 3: Dynamics (গতিবিদ্যা)',
  },
  {
    id: 'ch-phy-4', // Preserved for backwards compatibility
    subjectId: 'sub-phy-1',
    chapterNumber: 4,
    periods: 22,
    name: 'Chapter 4: Newtonian Mechanics (নিউটনিয়ান বলবিদ্যা)',
  },
  {
    id: 'ch-phy-5', // Preserved for backwards compatibility
    subjectId: 'sub-phy-1',
    chapterNumber: 5,
    periods: 12,
    name: 'Chapter 5: Work, Energy & Power (কাজ, শক্তি ও ক্ষমতা)',
  },
  {
    id: 'ch-phy1-6',
    subjectId: 'sub-phy-1',
    chapterNumber: 6,
    periods: 15,
    name: 'Chapter 6: Gravitation & Gravity (মহাকর্ষ ও অভিকর্ষ)',
  },
  {
    id: 'ch-phy1-7',
    subjectId: 'sub-phy-1',
    chapterNumber: 7,
    periods: 16,
    name: 'Chapter 7: Structural Properties of Matter (পদার্থের গাঠনিক ধর্ম)',
  },
  {
    id: 'ch-phy1-8',
    subjectId: 'sub-phy-1',
    chapterNumber: 8,
    periods: 12,
    name: 'Chapter 8: Periodic Motion (পর্যাবৃত্ত গতি)',
  },
  {
    id: 'ch-phy1-9',
    subjectId: 'sub-phy-1',
    chapterNumber: 9,
    periods: 14,
    name: 'Chapter 9: Waves (তরঙ্গ)',
  },
  {
    id: 'ch-phy1-10',
    subjectId: 'sub-phy-1',
    chapterNumber: 10,
    periods: 13,
    name: 'Chapter 10: Ideal Gas & Kinetic Theory of Gases (আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব)',
  },

  // Physics 2nd Paper (140 Periods Total)
  {
    id: 'ch-phy2-1',
    subjectId: 'sub-phy-2',
    chapterNumber: 1,
    periods: 12,
    name: 'Chapter 1: Thermodynamics (তাপগতিবিদ্যা)',
  },
  {
    id: 'ch-phy2-2',
    subjectId: 'sub-phy-2',
    chapterNumber: 2,
    periods: 13,
    name: 'Chapter 2: Static Electricity (স্থির তড়িৎ)',
  },
  {
    id: 'ch-phy2-3',
    subjectId: 'sub-phy-2',
    chapterNumber: 3,
    periods: 14,
    name: 'Chapter 3: Current Electricity (চল তড়িৎ)',
  },
  {
    id: 'ch-phy2-4',
    subjectId: 'sub-phy-2',
    chapterNumber: 4,
    periods: 15,
    name: 'Chapter 4: Magnetic Effects of Current & Magnetism (তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব)',
  },
  {
    id: 'ch-phy2-5',
    subjectId: 'sub-phy-2',
    chapterNumber: 5,
    periods: 11,
    name: 'Chapter 5: Electromagnetic Induction & Alternating Current (তাড়িতচৌম্বক আবেশ ও পরিবর্তী প্রবাহ)',
  },
  {
    id: 'ch-phy2-6',
    subjectId: 'sub-phy-2',
    chapterNumber: 6,
    periods: 15,
    name: 'Chapter 6: Geometrical Optics (জ্যামিতিক আলোকবিজ্ঞান)',
  },
  {
    id: 'ch-phy2-7',
    subjectId: 'sub-phy-2',
    chapterNumber: 7,
    periods: 11,
    name: 'Chapter 7: Physical Optics (ভৌত আলোকবিজ্ঞান)',
  },
  {
    id: 'ch-phy2-8',
    subjectId: 'sub-phy-2',
    chapterNumber: 8,
    periods: 14,
    name: 'Chapter 8: Introduction to Modern Physics (আধুনিক পদার্থবিজ্ঞানের সূচনা)',
  },
  {
    id: 'ch-phy2-9',
    subjectId: 'sub-phy-2',
    chapterNumber: 9,
    periods: 11,
    name: 'Chapter 9: Atomic Models & Nuclear Physics (পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান)',
  },
  {
    id: 'ch-phy2-10',
    subjectId: 'sub-phy-2',
    chapterNumber: 10,
    periods: 19,
    name: 'Chapter 10: Semiconductor & Electronics (সেমিকন্ডাক্টর ও ইলেকট্রনিক্স)',
  },
  {
    id: 'ch-phy2-11',
    subjectId: 'sub-phy-2',
    chapterNumber: 11,
    periods: 5,
    name: 'Chapter 11: Astronomy (জ্যোতির্বিজ্ঞান)',
  },
];

export const PHYSICS_TOPICS = [
  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 1: ভৌতজগত ও পরিমাপ (16 Periods)
  // ==========================================================
  {
    id: 'top-phy1-1-1',
    chapterId: 'ch-phy1-1',
    name: 'ভৌতজগতের প্রকৃতি, পরিসর এবং পদার্থবিজ্ঞানের উদ্দীপক ভূমিকা (Nature and Scope of Physical World)',
  },
  {
    id: 'top-phy1-1-2',
    chapterId: 'ch-phy1-1',
    name: 'পদার্থবিজ্ঞানের ক্রমবিকাশ ও বিজ্ঞানীদের অবদান (Historical Development of Physics & Scientists\' Contributions)',
  },
  {
    id: 'top-phy1-1-3',
    chapterId: 'ch-phy1-1',
    name: 'স্থান, কাল, ভর এবং কার্যকারণ সম্পর্ক (Concepts of Space, Time, Mass & Causality)',
  },
  {
    id: 'top-phy1-1-4',
    chapterId: 'ch-phy1-1',
    name: 'মৌলিক ও লব্ধ রাশি, SI একক ও এদের আদর্শ মান (Fundamental & Derived Quantities, SI Units)',
  },
  {
    id: 'top-phy1-1-5',
    chapterId: 'ch-phy1-1',
    name: 'মাত্রা ও মাত্রিক সমীকরণ এবং সমীকরণের যথার্থতা যাচাই (Dimensions, Dimensional Equations & Verification)',
  },
  {
    id: 'top-phy1-1-6',
    chapterId: 'ch-phy1-1',
    name: 'পরিমাপের ত্রুটি: যান্ত্রিক ত্রুটি, ব্যক্তিগত ত্রুটি, পরম ও আপেক্ষিক ত্রুটি (Errors in Measurement: Systematic, Personal, Absolute & Relative)',
  },
  {
    id: 'top-phy1-1-7',
    chapterId: 'ch-phy1-1',
    name: 'ব্যবহারিক: স্লাইড ক্যালিপার্স দিয়ে আয়তাকার ও বেলনাকার বস্তুর ক্ষেত্রফল ও আয়তন নির্ণয় (Practical: Slide Calipers)',
  },
  {
    id: 'top-phy1-1-8',
    chapterId: 'ch-phy1-1',
    name: 'ব্যবহারিক: স্ক্রু-গজ দিয়ে তারের ব্যাস ও পাতের পুরুত্ব নির্ণয় (Practical: Screw Gauge)',
  },
  {
    id: 'top-phy1-1-9',
    chapterId: 'ch-phy1-1',
    name: 'ব্যবহারিক: স্ফেরোমিটার দিয়ে গোলীয় তলের বক্রতার ব্যাসার্ধ নির্ণয় (Practical: Spherometer Radius of Curvature)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 2: ভেক্টর (10 Periods)
  // ==========================================================
  {
    id: 'top-phy-2-1', // Preserved
    chapterId: 'ch-phy-2',
    name: 'ভেক্টর রাশি, বিশেষ ভেক্টর ও ভেক্টর যোজন (Vector Addition & Triangular Law)',
  },
  {
    id: 'top-phy1-2-2',
    chapterId: 'ch-phy-2',
    name: 'ভেক্টর সামান্তরিক সূত্র ও লব্ধির মান ও দিক নির্ণয় (Parallelogram Law of Vectors: Magnitude & Direction)',
  },
  {
    id: 'top-phy1-2-3',
    chapterId: 'ch-phy-2',
    name: 'দ্বিমাত্রিক ও ত্রিমাত্রিক কার্তেসীয় আয়ত একক ভেক্টর (i, j, k) ও লম্বাংশে বিভাজন (Resolution of Vectors in 2D and 3D)',
  },
  {
    id: 'top-phy-2-3', // Preserved
    chapterId: 'ch-phy-2',
    name: 'নদী-নৌকা সমস্যা, বৃষ্টির আপেক্ষিক বেগ ও বায়ুপ্রবাহ (River-Boat Problems, Relative Velocity & Rain-Man Problems)',
  },
  {
    id: 'top-phy-2-2', // Preserved
    chapterId: 'ch-phy-2',
    name: 'স্কেলার গুণন ও ভেক্টর গুণন: ডট ও ক্রস গুণন এবং জ্যামিতিক তাৎপর্য (Dot Product & Cross Product Applications)',
  },
  {
    id: 'top-phy1-2-6',
    chapterId: 'ch-phy-2',
    name: 'ভেক্টর গুণের সাহায্যে সামান্তরিক ও ত্রিভুজের ক্ষেত্রফল নির্ণয় (Area Calculation using Vector Cross Product)',
  },
  {
    id: 'top-phy-2-4', // Preserved
    chapterId: 'ch-phy-2',
    name: 'ভেক্টর ক্যালকুলাস ও অপারেটর: ডেল, গ্রেডিয়েন্ট, ডাইভারজেন্স ও কার্ল (Vector Calculus: Del, Gradient, Divergence & Curl)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 3: গতিবিদ্যা (10 Periods)
  // ==========================================================
  {
    id: 'top-phy1-3-1',
    chapterId: 'ch-phy-3',
    name: 'প্রসঙ্গ কাঠামো, পরম ও আপেক্ষিক স্থিতি ও গতি (Frame of Reference, Absolute and Relative Motion)',
  },
  {
    id: 'top-phy1-3-2',
    chapterId: 'ch-phy-3',
    name: 'দূরত্ব, সরণ, দ্রুতি ও বেগ (গড় বেগ ও তাৎক্ষণিক বেগ) (Distance, Displacement, Speed & Instantaneous Velocity)',
  },
  {
    id: 'top-phy1-3-3',
    chapterId: 'ch-phy-3',
    name: 'ত্বরণ ও মন্দন: সমত্বরণ ও পরিবর্তনশীল ত্বরণ (Acceleration & Deceleration, Uniform & Non-uniform Motion)',
  },
  {
    id: 'top-phy1-3-4',
    chapterId: 'ch-phy-3',
    name: 'ক্যালকুলাসের সাহায্যে একমাত্রিক গতির সমীকরণ প্রতিপাদন (1D Kinematic Equations using Calculus: v=u+at, s=ut+½at²)',
  },
  {
    id: 'top-phy1-3-5',
    chapterId: 'ch-phy-3',
    name: 'গতির লেখচিত্র: সরণ-সময় ও বেগ-সময় লেখচিত্র বিশ্লেষণ (Motion Graphs: s-t and v-t Graph Analysis)',
  },
  {
    id: 'top-phy1-3-6',
    chapterId: 'ch-phy-3',
    name: 'দ্বিমাত্রিক গতি ও প্রক্ষেপক/প্রাস (Projectile Motion: Trajectory Equation, Maximum Height, Time of Flight, Range)',
  },
  {
    id: 'top-phy1-3-7',
    chapterId: 'ch-phy-3',
    name: 'প্রাসের গতিপথ পরাবৃত্ত প্রমাণ ও গাণিতিক সমস্যা সমাধান (Parabolic Trajectory Proof & Projectile Problem Solving)',
  },
  {
    id: 'top-phy1-3-8',
    chapterId: 'ch-phy-3',
    name: 'সুষম বৃত্তাকার গতি: কৌণিক সরণ, কৌণিক বেগ, কৌণিক ত্বরণ ও রৈখিক রাশির সাথে সম্পর্ক (Uniform Circular Motion: v = ωr, a = αr)',
  },
  {
    id: 'top-phy1-3-9',
    chapterId: 'ch-phy-3',
    name: 'কেন্দ্রমুখী ত্বরণ ও এর সমীকরণ (a = v²/r = ω²r) (Centripetal Acceleration Derivation)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 4: নিউটনিয়ান বলবিদ্যা (22 Periods)
  // ==========================================================
  {
    id: 'top-phy1-4-1',
    chapterId: 'ch-phy-4',
    name: 'বল, জড়তা ও নিউটনের গতির সূত্রাবলি (Force, Inertia & Newton\'s Laws of Motion)',
  },
  {
    id: 'top-phy1-4-2',
    chapterId: 'ch-phy-4',
    name: 'মৌলিক বলসমূহ: মহাকর্ষ, তড়িৎচৌম্বক, সবল নিউক্লীয় ও দুর্বল নিউক্লীয় বল (Fundamental Forces in Nature)',
  },
  {
    id: 'top-phy-4-1', // Preserved
    chapterId: 'ch-phy-4',
    name: 'রৈখিক ভরবেগ, ভরবেগের সংরক্ষণ সূত্র ও স্থিতিস্থাপক/অস্থিতিস্থাপক সংঘর্ষ (Conservation of Linear Momentum & Collision)',
  },
  {
    id: 'top-phy1-4-4',
    chapterId: 'ch-phy-4',
    name: 'বলের ঘাত ও ঘাত বল, বন্দুকের পশ্চাৎবেগ ও রকেটের গতি সমীকরণ (Impulse of Force, Recoil of Gun & Rocket Propulsion)',
  },
  {
    id: 'top-phy-4-3', // Preserved
    chapterId: 'ch-phy-4',
    name: 'টর্ক বা বলের ভ্রামক এবং কৌণিক ভরবেগ ও কৌণিক ভরবেগের সংরক্ষণশীলতা (Torque & Angular Momentum Conservation)',
  },
  {
    id: 'top-phy-4-4', // Preserved
    chapterId: 'ch-phy-4',
    name: 'জড়তার ভ্রামক ও চক্রগতির ব্যাসার্ধ: সমান্তরাল ও লম্ব অক্ষ উপপাদ্য (Moment of Inertia & Radius of Gyration: Parallel & Perpendicular Axis Theorems)',
  },
  {
    id: 'top-phy1-4-7',
    chapterId: 'ch-phy-4',
    name: 'দণ্ড, বৃত্তাকার চাকতি ও গোলকের জড়তার ভ্রামক নির্ণয় (Moment of Inertia of Thin Rod, Circular Disc & Sphere)',
  },
  {
    id: 'top-phy1-4-8',
    chapterId: 'ch-phy-4',
    name: 'ঘূর্ণন গতিশক্তি ও মোট গতিশক্তি (Rotational Kinetic Energy: E = ½Iω² & Total Rolling Energy)',
  },
  {
    id: 'top-phy1-4-9',
    chapterId: 'ch-phy-4',
    name: 'কেন্দ্রমুখী বল ও কেন্দ্রবিমুখী বল (Centripetal Force & Centrifugal Force)',
  },
  {
    id: 'top-phy-4-2', // Preserved
    chapterId: 'ch-phy-4',
    name: 'ঘর্ষণ বল, ঘর্ষণ কোণ ও রাস্তার ব্যাংকিং কোণ (Friction, Road Banking & Curved Motion: tan θ = v²/rg)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 5: কাজ, শক্তি ও ক্ষমতা (12 Periods)
  // ==========================================================
  {
    id: 'top-phy1-5-1',
    chapterId: 'ch-phy-5',
    name: 'কাজ: ধ্রুব বল দ্বারা কাজ, ধনাত্মক ও ঋণাত্মক কাজ, শূন্য কাজ (Work Done by Constant Force: Positive, Negative & Zero Work)',
  },
  {
    id: 'top-phy-5-1', // Preserved
    chapterId: 'ch-phy-5',
    name: 'পরিবর্তনশীল বল দ্বারা কৃতকাজ ও স্প্রিং বলের বিপরীতে কাজ (Work Done by Variable Force & Spring Force)',
  },
  {
    id: 'top-phy-5-2', // Preserved
    chapterId: 'ch-phy-5',
    name: 'কাজ-শক্তি উপপাদ্য ও স্প্রিংয়ের বিভব শক্তি (Work-Energy Theorem & Spring Potential Energy: U = ½kx²)',
  },
  {
    id: 'top-phy1-5-4',
    chapterId: 'ch-phy-5',
    name: 'সংরক্ষণশীল বল ও অসংরক্ষণশীল বলের বৈশিষ্ট্য ও উদাহরণ (Conservative & Non-conservative Forces)',
  },
  {
    id: 'top-phy1-5-5',
    chapterId: 'ch-phy-5',
    name: 'যান্ত্রিক শক্তির নিত্যতা সূত্র ও পড়ন্ত বস্তুর ক্ষেত্রে সংরক্ষণশীলতা প্রমাণ (Law of Conservation of Mechanical Energy)',
  },
  {
    id: 'top-phy1-5-6',
    chapterId: 'ch-phy-5',
    name: 'ক্ষমতা ও কর্মদক্ষতা: গড় ক্ষমতা, তাৎক্ষণিক ক্ষমতা ও মোটর-পাম্পের দক্ষতা (Power & Efficiency: P = Fv, η = P_out / P_in)',
  },
  {
    id: 'top-phy1-5-7',
    chapterId: 'ch-phy-5',
    name: 'কুয়া বা চৌবাচ্চা খালি করতে কৃতকাজ ও পাম্পের অশ্বক্ষমতা গণনা (Work Done in Emptying Wells & Horsepower Calculations)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 6: মহাকর্ষ ও অভিকর্ষ (15 Periods)
  // ==========================================================
  {
    id: 'top-phy1-6-1',
    chapterId: 'ch-phy1-6',
    name: 'কেপলারের গ্রহ সংক্রান্ত গতিসূত্রাবলি (কক্ষপথ, ক্ষেত্রফল ও আবর্তনকালের সূত্র) (Kepler\'s Laws of Planetary Motion)',
  },
  {
    id: 'top-phy1-6-2',
    chapterId: 'ch-phy1-6',
    name: 'নিউটনের সার্বজনীন মহাকর্ষ সূত্র ও মহাকর্ষীয় ধ্রুবক G এর মাত্রা ও মান (Newton\'s Universal Law of Gravitation & Constant G)',
  },
  {
    id: 'top-phy1-6-3',
    chapterId: 'ch-phy1-6',
    name: 'অভিকর্ষজ ত্বরণ g ও পৃথিবীর ভরের সম্পর্ক (Acceleration due to Gravity g & Earth\'s Mass: g = GM/R²)',
  },
  {
    id: 'top-phy1-6-4',
    chapterId: 'ch-phy1-6',
    name: 'ভূপৃষ্ঠ থেকে উচ্চতা ও গভীরতায় g এর মানের পরিবর্তন (Variation of g with Altitude & Depth)',
  },
  {
    id: 'top-phy1-6-5',
    chapterId: 'ch-phy1-6',
    name: 'পৃথিবীর আকার ও আহ্নিক গতির কারণে অক্ষাংশে g এর পরিবর্তন (Variation of g with Earth\'s Shape & Diurnal Rotation: g_λ = g - ω²R cos²λ)',
  },
  {
    id: 'top-phy1-6-6',
    chapterId: 'ch-phy1-6',
    name: 'মহাকর্ষীয় প্রাবল্য ও মহাকর্ষীয় বিভব (Gravitational Field Intensity E & Potential V)',
  },
  {
    id: 'top-phy1-6-7',
    chapterId: 'ch-phy1-6',
    name: 'মুক্তিবেগ: সংজ্ঞা, রাশিমালা প্রতিপাদন ও গণনা (Escape Velocity Derivation & Calculations: v_e = √(2gR))',
  },
  {
    id: 'top-phy1-6-8',
    chapterId: 'ch-phy1-6',
    name: 'কৃত্রিম উপগ্রহের গতি: বেগ, পর্যায়কাল ও উচ্চতা নির্ণয় (Orbital Velocity, Time Period & Altitude of Artificial Satellites)',
  },
  {
    id: 'top-phy1-6-9',
    chapterId: 'ch-phy1-6',
    name: 'ভূ-স্থির উপগ্রহ ও পার্কিং কক্ষপথ (Geostationary Satellites & Parking Orbits)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 7: পদার্থের গাঠনিক ধর্ম (16 Periods)
  // ==========================================================
  {
    id: 'top-phy1-7-1',
    chapterId: 'ch-phy1-7',
    name: 'আন্তঃআণবিক বল, পদার্থের তিনটি অবস্থা ও স্থিতিস্থাপকতার কারণ (Intermolecular Forces & Cause of Elasticity)',
  },
  {
    id: 'top-phy1-7-2',
    chapterId: 'ch-phy1-7',
    name: 'পীড়ন ও বিকৃতি: দৈর্ঘ্য, আয়তন ও কৃন্তন পীড়ন/বিকৃতি (Stress & Strain: Longitudinal, Volume & Shearing)',
  },
  {
    id: 'top-phy1-7-3',
    chapterId: 'ch-phy1-7',
    name: 'হুকের সূত্র ও স্থিতিস্থাপক গুণাঙ্কসমূহ: ইয়ং, আয়তন ও দৃঢ়তার গুণাঙ্ক (Hooke\'s Law & Moduli of Elasticity: Y, K, η)',
  },
  {
    id: 'top-phy1-7-4',
    chapterId: 'ch-phy1-7',
    name: 'পয়সনের অনুপাত σ ও এর সীমা (Poisson\'s Ratio & Theoretical Limits: -1 to 0.5)',
  },
  {
    id: 'top-phy1-7-5',
    chapterId: 'ch-phy1-7',
    name: 'তারের প্রসারণে সঞ্চিত শক্তি ও একক আয়তনে সঞ্চিত শক্তির সমীকরণ (Elastic Potential Energy Stored in Stretched Wire: W = ½YAL(ΔL/L)²)',
  },
  {
    id: 'top-phy1-7-6',
    chapterId: 'ch-phy1-7',
    name: 'সান্দ্রতা, সান্দ্র বল ও নিউটনের সান্দ্রতার সূত্র (Viscosity, Viscous Force & Newton\'s Law of Viscosity)',
  },
  {
    id: 'top-phy1-7-7',
    chapterId: 'ch-phy1-7',
    name: 'সান্দ্রতা গুণাঙ্ক η ও স্টোকসের সূত্র (Coefficient of Viscosity & Stokes\' Law: F = 6πηrv)',
  },
  {
    id: 'top-phy1-7-8',
    chapterId: 'ch-phy1-7',
    name: 'প্রান্তিক বেগ বা প্রান্ত বেগ সমীকরণ প্রতিপাদন (Terminal Velocity Formula: v_t = 2r²(ρ - σ)g / 9η)',
  },
  {
    id: 'top-phy1-7-9',
    chapterId: 'ch-phy1-7',
    name: 'পৃষ্ঠটান ও পৃষ্ঠশক্তি: আণবিক মতবাদ ও সম্পর্ক (Surface Tension & Surface Energy: T = W/ΔA)',
  },
  {
    id: 'top-phy1-7-10',
    chapterId: 'ch-phy1-7',
    name: 'স্পর্শ কোণ, কৈশিকতা ও কৈশিক নলে তরলের আরোহণ সমীকরণ (Angle of Contact, Capillarity & Ascent of Liquid: h = 2T cos θ / rρg)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 8: পর্যাবৃত্ত গতি (12 Periods)
  // ==========================================================
  {
    id: 'top-phy1-8-1',
    chapterId: 'ch-phy1-8',
    name: 'পর্যাবৃত্ত গতি ও স্পন্দন গতি (Periodic Motion & Oscillatory Motion)',
  },
  {
    id: 'top-phy1-8-2',
    chapterId: 'ch-phy1-8',
    name: 'সরল ছন্দিত স্পন্দন (SHM): বৈশিষ্ট্য ও অন্তরক সমীকরণ (Simple Harmonic Motion: Differential Equation: d²x/dt² + ω²x = 0)',
  },
  {
    id: 'top-phy1-8-3',
    chapterId: 'ch-phy1-8',
    name: 'সরল ছন্দিত গতির সরণ, বেগ ও ত্বরণের সমীকরণ (Displacement, Velocity & Acceleration in SHM: x=A sin(ωt+δ), v=ω√(A²-x²))',
  },
  {
    id: 'top-phy1-8-4',
    chapterId: 'ch-phy1-8',
    name: 'সরল ছন্দিত স্পন্দনে শক্তি: গতিশক্তি, বিভব শক্তি ও মোট শক্তি (Energy in SHM: Kinetic, Potential & Total Energy Conservation)',
  },
  {
    id: 'top-phy1-8-5',
    chapterId: 'ch-phy1-8',
    name: 'সরল দোলক: গতি সমীকরণ, পর্যায়কালের সূত্রাবলি (Simple Pendulum: Laws of Simple Pendulum & Time Period: T = 2π√(L/g))',
  },
  {
    id: 'top-phy1-8-6',
    chapterId: 'ch-phy1-8',
    name: 'সেকেন্ড দোলক, পাহাড়ের উচ্চতা ও খনির গভীরতায় দোলক ঘড়ির সময় পরিমাপ (Seconds Pendulum & Height/Depth Calculation by Pendulum Clock)',
  },
  {
    id: 'top-phy1-8-7',
    chapterId: 'ch-phy1-8',
    name: 'স্প্রিং-ভর ব্যবস্থা: অনুভূমিক ও উল্লম্ব স্প্রিংয়ের পর্যায়কাল (Spring-Mass Oscillations: T = 2π√(m/k))',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 9: তরঙ্গ (14 Periods)
  // ==========================================================
  {
    id: 'top-phy1-9-1',
    chapterId: 'ch-phy1-9',
    name: 'তরঙ্গ ও তরঙ্গের প্রকারভেদ: অনুপ্রস্থ ও অনুদৈর্ঘ্য তরঙ্গ (Waves Classification: Transverse & Longitudinal Waves)',
  },
  {
    id: 'top-phy1-9-2',
    chapterId: 'ch-phy1-9',
    name: 'তরঙ্গ সংক্রান্ত রাশিসমূহ: বিস্তার, তরঙ্গদৈর্ঘ্য, পর্যায়কাল, কম্পাঙ্ক ও তরঙ্গবেগ (v = fλ) (Wave Parameters)',
  },
  {
    id: 'top-phy1-9-3',
    chapterId: 'ch-phy1-9',
    name: 'অগ্রগামী তরঙ্গের সমীকরণ প্রতিপাদন (Equation of Progressive Wave: y = A sin 2π/λ (vt - x))',
  },
  {
    id: 'top-phy1-9-4',
    chapterId: 'ch-phy1-9',
    name: 'তরঙ্গের উপরিপাতন নীতি ও স্থির তরঙ্গ গঠন (Principle of Superposition & Standing Waves)',
  },
  {
    id: 'top-phy1-9-5',
    chapterId: 'ch-phy1-9',
    name: 'স্থির তরঙ্গের নিস্পন্দ ও স্পন্দ বিস্তার বিন্দু (Nodes and Antinodes in Standing Waves)',
  },
  {
    id: 'top-phy1-9-6',
    chapterId: 'ch-phy1-9',
    name: 'টানা তারের আড় কম্পন সূত্রাবলি ও সুরশলাকা (Transverse Vibrations of Stretched Strings: Mersenne\'s Laws)',
  },
  {
    id: 'top-phy1-9-7',
    chapterId: 'ch-phy1-9',
    name: 'শব্দ তরঙ্গের ব্যতিচার ও বীট বা স্বরকম্প (Interference of Sound Waves & Beats Formation: f_beat = |f1 - f2|)',
  },
  {
    id: 'top-phy1-9-8',
    chapterId: 'ch-phy1-9',
    name: 'ডপলার ক্রিয়া ও আপাত কম্পাঙ্ক গণনা (Doppler Effect in Sound & Apparent Frequency)',
  },

  // ==========================================================
  // PHYSICS 1ST PAPER - CHAPTER 10: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব (13 Periods)
  // ==========================================================
  {
    id: 'top-phy1-10-1',
    chapterId: 'ch-phy1-10',
    name: 'আদর্শ গ্যাস সূত্রাবলি: বয়েল, চার্লস ও চাপীয় সূত্র (Ideal Gas Laws: Boyle\'s, Charles\'s & Pressure Laws)',
  },
  {
    id: 'top-phy1-10-2',
    chapterId: 'ch-phy1-10',
    name: 'আদর্শ গ্যাস সমীকরণ (PV = nRT) ও সার্বজনীন গ্যাস ধ্রুবক R এবং বোল্টজম্যান ধ্রুবক k (Ideal Gas Equation & Constants R, k)',
  },
  {
    id: 'top-phy1-10-3',
    chapterId: 'ch-phy1-10',
    name: 'গ্যাসের গতিতত্ত্বের মৌলিক স্বীকার্যসমূহ ও গতীয় সমীকরণ (P = ⅓ρc²) (Kinetic Theory of Gases & Pressure Formula)',
  },
  {
    id: 'top-phy1-10-4',
    chapterId: 'ch-phy1-10',
    name: 'গ্যাসের অণুর মূল গড় বর্গবেগ RMS বেগ ও গতিশক্তি (RMS Velocity: c_rms = √(3RT/M) & Total Kinetic Energy)',
  },
  {
    id: 'top-phy1-10-5',
    chapterId: 'ch-phy1-10',
    name: 'স্বাধীনতার মাত্রা ও শক্তির সমবিভাজন নীতি (Degrees of Freedom & Law of Equipartition of Energy)',
  },
  {
    id: 'top-phy1-10-6',
    chapterId: 'ch-phy1-10',
    name: 'গ্যাসের অণুর গড় মুক্ত পথ: ক্লসিয়াস, বোল্টজম্যান ও জিন্সের সমীকরণ (Mean Free Path of Gas Molecules)',
  },
  {
    id: 'top-phy1-10-7',
    chapterId: 'ch-phy1-10',
    name: 'বাষ্প ও বায়ুমণ্ডলের আর্দ্রতা: সম্পৃক্ত ও অসম্পৃক্ত বাষ্পচাপ (Saturated & Unsaturated Vapour Pressure)',
  },
  {
    id: 'top-phy1-10-8',
    chapterId: 'ch-phy1-10',
    name: 'শিশিরাঙ্ক ও আপেক্ষিক আর্দ্রতা (Dew Point & Relative Humidity Calculations using Glaisher\'s Factors)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 1: তাপগতিবিদ্যা (12 Periods)
  // ==========================================================
  {
    id: 'top-phy2-1-1',
    chapterId: 'ch-phy2-1',
    name: 'তাপগতীয় ব্যবস্থা, তাপীয় সাম্যাবস্থা ও তাপগতিবিদ্যার শূন্যতম সূত্র (Thermodynamic Systems, Thermal Equilibrium & Zeroth Law)',
  },
  {
    id: 'top-phy2-1-2',
    chapterId: 'ch-phy2-1',
    name: 'তাপমাত্রা ও থার্মোমিটারের মূলনীতি (Temperature Scales & Thermometric Properties)',
  },
  {
    id: 'top-phy2-1-3',
    chapterId: 'ch-phy2-1',
    name: 'তাপগতিবিদ্যার ১ম সূত্র ও অভ্যন্তরীণ শক্তি (First Law of Thermodynamics & Internal Energy: dQ = dU + dW)',
  },
  {
    id: 'top-phy2-1-4',
    chapterId: 'ch-phy2-1',
    name: 'তাপগতীয় প্রক্রিয়া: সমোষ্ণ, রুদ্ধতাপীয়, সমচাপ ও সম-আয়তন প্রক্রিয়া (Thermodynamic Processes: Isothermal, Adiabatic, Isobaric, Isochoric)',
  },
  {
    id: 'top-phy2-1-5',
    chapterId: 'ch-phy2-1',
    name: 'সমোষ্ণ ও রুদ্ধতাপীয় প্রক্রিয়ায় কৃতকাজ ও রুদ্ধতাপীয় সম্পর্ক (PV^γ = constant, TV^(γ-1) = constant)',
  },
  {
    id: 'top-phy2-1-6',
    chapterId: 'ch-phy2-1',
    name: 'গ্যাসের মোলার আপেক্ষিক তাপ: Cp ও Cv এর সম্পর্ক (Cp - Cv = R, Cp/Cv = γ)',
  },
  {
    id: 'top-phy2-1-7',
    chapterId: 'ch-phy2-1',
    name: 'প্রত্যাবর্তী ও অপ্রত্যাবর্তী প্রক্রিয়া (Reversible & Irreversible Processes)',
  },
  {
    id: 'top-phy2-1-8',
    chapterId: 'ch-phy2-1',
    name: 'কার্নো চক্র ও কার্নো ইঞ্জিন: দক্ষতা সমীকরণ (Carnot Cycle & Efficiency: η = 1 - T2/T1)',
  },
  {
    id: 'top-phy2-1-9',
    chapterId: 'ch-phy2-1',
    name: 'তাপগতিবিদ্যার ২য় সূত্র: ক্লসিয়াস, কেলভিন ও প্লাঙ্কের বিবৃতি (Second Law of Thermodynamics: Clausius, Kelvin, Planck Statements)',
  },
  {
    id: 'top-phy2-1-10',
    chapterId: 'ch-phy2-1',
    name: 'এন্ট্রপি: সংজ্ঞা, ভৌত তাৎপর্য ও মহাবিশ্বের এন্ট্রপি বৃদ্ধি (Concept of Entropy & Entropy Increase of Universe: dS = dQ/T)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 2: স্থির তড়িৎ (13 Periods)
  // ==========================================================
  {
    id: 'top-phy2-2-1',
    chapterId: 'ch-phy2-2',
    name: 'তড়িৎ আধান ও আধানের কোয়ান্টায়ন ও নিত্যতা (Electric Charge, Quantization & Conservation of Charge)',
  },
  {
    id: 'top-phy2-2-2',
    chapterId: 'ch-phy2-2',
    name: 'কুলম্বের সূত্র ও তড়িৎ বল (Coulomb\'s Law, Permittivity & Dielectric Constant: F = 1/(4πε) * q1q2/r²)',
  },
  {
    id: 'top-phy2-2-3',
    chapterId: 'ch-phy2-2',
    name: 'তড়িৎ ক্ষেত্র ও তড়িৎ প্রাবল্য (Electric Field & Electric Field Intensity E)',
  },
  {
    id: 'top-phy2-2-4',
    chapterId: 'ch-phy2-2',
    name: 'তড়িৎ বলরেখা ও তড়িৎ ফ্লাক্স (Electric Field Lines & Electric Flux)',
  },
  {
    id: 'top-phy2-2-5',
    chapterId: 'ch-phy2-2',
    name: 'গাউসের সূত্র ও এর প্রয়োগ (Gauss\'s Law & Applications in Spherical/Planar Charge Distributions)',
  },
  {
    id: 'top-phy2-2-6',
    chapterId: 'ch-phy2-2',
    name: 'তড়িৎ বিভব ও বিভব পার্থক্য: বিন্দু আধানের জন্য বিভব সমীকরণ (Electric Potential & Potential Difference: V = 1/(4πε) * q/r)',
  },
  {
    id: 'top-phy2-2-7',
    chapterId: 'ch-phy2-2',
    name: 'তড়িৎ দ্বিমেরু, দ্বিমেরু ভ্রামক ও দ্বিমেরুর প্রাবল্য/বিভব (Electric Dipole, Dipole Moment & Field Intensity)',
  },
  {
    id: 'top-phy2-2-8',
    chapterId: 'ch-phy2-2',
    name: 'ধারক ও ধারকত্ব: সমান্তরাল পাত ধারক ও ডাই-ইলেকট্রিকের প্রভাব (Capacitors & Capacitance: Parallel Plate Capacitor C = εA/d)',
  },
  {
    id: 'top-phy2-2-9',
    chapterId: 'ch-phy2-2',
    name: 'ধারকের সমবায়: শ্রেণি ও সমান্তরাল সংযোগ (Series and Parallel Combination of Capacitors)',
  },
  {
    id: 'top-phy2-2-10',
    chapterId: 'ch-phy2-2',
    name: 'আহিত ধারকে সঞ্চিত শক্তি (Energy Stored in a Capacitor: U = ½CV² = ½Q²/C)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 3: চল তড়িৎ (14 Periods)
  // ==========================================================
  {
    id: 'top-phy2-3-1',
    chapterId: 'ch-phy2-3',
    name: 'তড়িৎ প্রবাহ, প্রবাহ ঘনত্ব ও তাড়ন বেগ (Electric Current, Current Density & Drift Velocity: I = nAvq)',
  },
  {
    id: 'top-phy2-3-2',
    chapterId: 'ch-phy2-3',
    name: 'ওহমের সূত্র ও রোধের ওপর তাপমাত্রার প্রভাব (Ohm\'s Law & Temperature Coefficient of Resistance: R_θ = R_0(1+αθ))',
  },
  {
    id: 'top-phy2-3-3',
    chapterId: 'ch-phy2-3',
    name: 'আপেক্ষিক রোধ ও পরিবাহিতা (Resistivity & Conductivity: ρ = RA/L)',
  },
  {
    id: 'top-phy2-3-4',
    chapterId: 'ch-phy2-3',
    name: 'রোধের সমবায় ও তড়িৎ বর্তনী বিশ্লেষণ (Combination of Resistors & Circuit Analysis)',
  },
  {
    id: 'top-phy2-3-5',
    chapterId: 'ch-phy2-3',
    name: 'তড়িচ্চালক শক্তি ও অভ্যন্তরীণ রোধ (Electromotive Force EMF & Internal Resistance r: E = I(R+r))',
  },
  {
    id: 'top-phy2-3-6',
    chapterId: 'ch-phy2-3',
    name: 'কার্শফের সূত্রাবলি (১ম সূত্র ও ২য় সূত্র) (Kirchhoff\'s Current and Voltage Laws: KCL & KVL)',
  },
  {
    id: 'top-phy2-3-7',
    chapterId: 'ch-phy2-3',
    name: 'হুইটস্টোন ব্রিজ নীতি ও সাম্যাবস্থার শর্ত (Wheatstone Bridge Principle & Balance Condition: P/Q = R/S)',
  },
  {
    id: 'top-phy2-3-8',
    chapterId: 'ch-phy2-3',
    name: 'মিটার ব্রিজ ও পোস্ট অফিস বক্স দ্বারা অজানা রোধ নির্ণয় (Meter Bridge & Post Office Box Resistance Measurement)',
  },
  {
    id: 'top-phy2-3-9',
    chapterId: 'ch-phy2-3',
    name: 'পটেনশিওমিটার: তড়িচ্চালক শক্তি ও অভ্যন্তরীণ রোধ তুলনা (Potentiometer Principles & Applications)',
  },
  {
    id: 'top-phy2-3-10',
    chapterId: 'ch-phy2-3',
    name: 'শান্ট ও এর ব্যবহার: অ্যামিটার ও ভোল্টমিটারের পাল্লা বৃদ্ধি (Shunt Theory & Extension of Ammeter/Voltmeter Range)',
  },
  {
    id: 'top-phy2-3-11',
    chapterId: 'ch-phy2-3',
    name: 'তড়িৎ প্রবাহের তাপীয় ফল ও জুল এর সূত্র (Joule\'s Heating Law of Electric Current: H = I²Rt/J)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 4: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব (15 Periods)
  // ==========================================================
  {
    id: 'top-phy2-4-1',
    chapterId: 'ch-phy2-4',
    name: 'ওরস্টেডের পরীক্ষা ও চৌম্বক ক্ষেত্র (Oersted\'s Experiment & Magnetic Field)',
  },
  {
    id: 'top-phy2-4-2',
    chapterId: 'ch-phy2-4',
    name: 'বায়ো-স্যাভার্ট সূত্র ও সোজা পরিবাহী তারে চৌম্বক ক্ষেত্র (Biot-Savart Law & Magnetic Field around Straight Wire)',
  },
  {
    id: 'top-phy2-4-3',
    chapterId: 'ch-phy2-4',
    name: 'বৃত্তাকার কুণ্ডলী ও সলিনয়েডের অক্ষে চৌম্বক ক্ষেত্র (Magnetic Field at Center of Circular Coil & Solenoid)',
  },
  {
    id: 'top-phy2-4-4',
    chapterId: 'ch-phy2-4',
    name: 'অ্যাম্পিয়ারের সার্কিটাল সূত্র (Ampere\'s Circuital Law & Applications)',
  },
  {
    id: 'top-phy2-4-5',
    chapterId: 'ch-phy2-4',
    name: 'চৌম্বক ক্ষেত্রে গতিশীল আধানে লরেন্জ বল (Lorentz Force: F = q(E + v × B))',
  },
  {
    id: 'top-phy2-4-6',
    chapterId: 'ch-phy2-4',
    name: 'চৌম্বক ক্ষেত্রে পরিবাহী তারের ওপর বল ও সমান্তরাল তারের পারস্পরিক বল (Force on Current-Carrying Conductor: F = I(L × B))',
  },
  {
    id: 'top-phy2-4-7',
    chapterId: 'ch-phy2-4',
    name: 'হল ক্রিয়া ও হল ভোল্টেজ সমীকরণ (Hall Effect & Hall Voltage: V_H = BI/nqd)',
  },
  {
    id: 'top-phy2-4-8',
    chapterId: 'ch-phy2-4',
    name: 'চৌম্বক ক্ষেত্রে আয়তাকার কুণ্ডলীর ওপর টর্ক ও চলকুণ্ডলী গ্যালভানোমিটার (Torque on Current Loop & Moving Coil Galvanometer)',
  },
  {
    id: 'top-phy2-4-9',
    chapterId: 'ch-phy2-4',
    name: 'চৌম্বক পদার্থ: ডায়া, প্যারা ও ফেরোচৌম্বক পদার্থ (Magnetic Materials: Dia, Para & Ferromagnetism)',
  },
  {
    id: 'top-phy2-4-10',
    chapterId: 'ch-phy2-4',
    name: 'ভূ-চুম্বকত্ব: বিচ্যুতি, বিনতি ও ভূ-চৌম্বক ক্ষেত্রের অনুভূমিক প্রাবল্য (Terrestrial Magnetism: Declination, Dip & Horizontal Component H)',
  },
  {
    id: 'top-phy2-4-11',
    chapterId: 'ch-phy2-4',
    name: 'হিস্টেরেসিস চক্র ও চৌম্বক ধারণক্ষমতা (Hysteresis Loop & Retentivity/Coercivity)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 5: তাড়িতচৌম্বক আবেশ ও পরিবর্তী প্রবাহ (11 Periods)
  // ==========================================================
  {
    id: 'top-phy2-5-1',
    chapterId: 'ch-phy2-5',
    name: 'চৌম্বক ফ্লাক্স ও তাড়িতচৌম্বক আবেশের ধারণা (Magnetic Flux & Concept of Electromagnetic Induction)',
  },
  {
    id: 'top-phy2-5-2',
    chapterId: 'ch-phy2-5',
    name: 'ফ্যারাডের তাড়িতচৌম্বক আবেশের সূত্রাবলি (Faraday\'s Laws of Electromagnetic Induction: e = -dΦ/dt)',
  },
  {
    id: 'top-phy2-5-3',
    chapterId: 'ch-phy2-5',
    name: 'লেঞ্জের সূত্র ও শক্তির নিত্যতা নীতি (Lenz\'s Law & Energy Conservation)',
  },
  {
    id: 'top-phy2-5-4',
    chapterId: 'ch-phy2-5',
    name: 'স্বকীয় আবেশ ও স্বকীয় আবেশ গুণাঙ্ক L (Self-Induction & Coefficient of Self-Inductance)',
  },
  {
    id: 'top-phy2-5-5',
    chapterId: 'ch-phy2-5',
    name: 'পারস্পরিক আবেশ ও পারস্পরিক আবেশ গুণাঙ্ক M (Mutual Induction & Coefficient of Mutual Inductance)',
  },
  {
    id: 'top-phy2-5-6',
    chapterId: 'ch-phy2-5',
    name: 'তড়িৎ জেনারেটর / ডায়নামোর মূলনীতি ও গঠন (AC & DC Electric Generator Principles)',
  },
  {
    id: 'top-phy2-5-7',
    chapterId: 'ch-phy2-5',
    name: 'ট্রান্সফরমার বা রূপান্তরক: গঠন, স্টেপ-আপ ও স্টেপ-ডাউন এবং রূপান্তর অনুপাত (Transformer: Step-up, Step-down & Efficiency)',
  },
  {
    id: 'top-phy2-5-8',
    chapterId: 'ch-phy2-5',
    name: 'পরিবর্তী প্রবাহ (AC): শীর্ষ মান, গড় মান ও বর্গমূলীয় গড় মান RMS মান (Alternating Current: Peak, Average & RMS Values I_rms = I_0/√2)',
  },
  {
    id: 'top-phy2-5-9',
    chapterId: 'ch-phy2-5',
    name: 'AC বর্তনীতে রোধ, আবেশক ও ধারক: LCR শ্রেণি বর্তনী ও অনুনাদ (AC Circuits: Resistor, Inductor, Capacitor & LCR Resonance)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 6: জ্যামিতিক আলোকবিজ্ঞান (15 Periods)
  // ==========================================================
  {
    id: 'top-phy2-6-1',
    chapterId: 'ch-phy2-6',
    name: 'আলোর প্রতিফলন ও গোলীয় দর্পণে প্রতিবিম্ব গঠন (Reflection of Light & Spherical Mirrors: 1/u + 1/v = 1/f)',
  },
  {
    id: 'top-phy2-6-2',
    chapterId: 'ch-phy2-6',
    name: 'আলোর প্রতিসরণ, প্রতিসরণাঙ্ক ও স্নেলের সূত্র (Refraction of Light, Refractive Index & Snell\'s Law)',
  },
  {
    id: 'top-phy2-6-3',
    chapterId: 'ch-phy2-6',
    name: 'সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন এবং অপটিক্যাল ফাইবার (Critical Angle, Total Internal Reflection & Optical Fiber)',
  },
  {
    id: 'top-phy2-6-4',
    chapterId: 'ch-phy2-6',
    name: 'প্রিজমে আলোর প্রতিসরণ, বিচ্যুতি কোণ ও ন্যূনতম বিচ্যুতি কোণ δ_m (Refraction through Prism & Minimum Deviation: μ = sin((A+δm)/2) / sin(A/2))',
  },
  {
    id: 'top-phy2-6-5',
    chapterId: 'ch-phy2-6',
    name: 'আলোর বিচ্ছুরণ ও বর্ণালি সৃষ্টি (Dispersion of Light & Spectrum Formation)',
  },
  {
    id: 'top-phy2-6-6',
    chapterId: 'ch-phy2-6',
    name: 'গোলীয় তলে প্রতিসরণ ও লেন্স প্রস্তুতকারকের সূত্র (Lens Maker\'s Formula: 1/f = (μ - 1)(1/R1 - 1/R2))',
  },
  {
    id: 'top-phy2-6-7',
    chapterId: 'ch-phy2-6',
    name: 'পাতলা লেন্সে প্রতিবিম্ব গঠন ও লেন্সের সমীকরণ (Thin Lens Equation: 1/v - 1/u = 1/f & Magnification m = v/u)',
  },
  {
    id: 'top-phy2-6-8',
    chapterId: 'ch-phy2-6',
    name: 'লেন্সের ক্ষমতা ও লেন্সের সমবায় (Power of Lens P = 1/f & Combination of Lenses: P = P1 + P2)',
  },
  {
    id: 'top-phy2-6-9',
    chapterId: 'ch-phy2-6',
    name: 'দৃষ্টির ত্রুটি: হ্রস্বদৃষ্টি (Myopia) ও দূরদৃষ্টি (Hypermetropia) এবং প্রতিকার (Defects of Vision & Corrections)',
  },
  {
    id: 'top-phy2-6-10',
    chapterId: 'ch-phy2-6',
    name: 'আলোক যন্ত্র: সরল ও যৌগিক অণুবীক্ষণ যন্ত্র এবং বিবর্ধন ক্ষমতা (Optical Instruments: Simple & Compound Microscope)',
  },
  {
    id: 'top-phy2-6-11',
    chapterId: 'ch-phy2-6',
    name: 'দূরবীক্ষণ যন্ত্র: নভোদূরবীক্ষণ যন্ত্র ও বিবর্ধন ক্ষমতা (Astronomical Telescope & Magnifying Power)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 7: ভৌত আলোকবিজ্ঞান (11 Periods)
  // ==========================================================
  {
    id: 'top-phy2-7-1',
    chapterId: 'ch-phy2-7',
    name: 'আলোর প্রকৃতি: কণা তত্ত্ব, তরঙ্গ তত্ত্ব ও তড়িৎচৌম্বক তত্ত্ব (Nature of Light: Wave, Corpuscular & Electromagnetic Theories)',
  },
  {
    id: 'top-phy2-7-2',
    chapterId: 'ch-phy2-7',
    name: 'তরঙ্গমুখের ধারণা ও হাইগেনসের নীতি (Wavefront Concept & Huygens\' Principle)',
  },
  {
    id: 'top-phy2-7-3',
    chapterId: 'ch-phy2-7',
    name: 'হাইগেনসের নীতির সাহায্যে আলোর প্রতিফলন ও প্রতিসরণের সূত্র প্রমাণ (Proof of Laws of Reflection & Refraction using Huygens\' Principle)',
  },
  {
    id: 'top-phy2-7-4',
    chapterId: 'ch-phy2-7',
    name: 'আলোর ব্যতিচার ও সুসংগত উৎস (Interference of Light & Coherent Sources)',
  },
  {
    id: 'top-phy2-7-5',
    chapterId: 'ch-phy2-7',
    name: 'ইয়ং এর দ্বি-চির পরীক্ষা ও ডোরার প্রস্থ নির্ণয় (Young\'s Double Slit Experiment & Fringe Width: β = λD/d)',
  },
  {
    id: 'top-phy2-7-6',
    chapterId: 'ch-phy2-7',
    name: 'আলোর অপবর্তন: ফ্রনহফার ও ফ্রেনেল অপবর্তন (Diffraction of Light: Fraunhofer & Fresnel Diffraction)',
  },
  {
    id: 'top-phy2-7-7',
    chapterId: 'ch-phy2-7',
    name: 'একক চিরের দরুন ফ্রনহফার অপবর্তন (Fraunhofer Diffraction at a Single Slit)',
  },
  {
    id: 'top-phy2-7-8',
    chapterId: 'ch-phy2-7',
    name: 'অপবর্তন গ্রেটিং ও গ্রেটিং ধ্রুবক (Diffraction Grating & Grating Element: (a+b) sin θ = nλ)',
  },
  {
    id: 'top-phy2-7-9',
    chapterId: 'ch-phy2-7',
    name: 'আলোর সমবর্তন ও ব্রুস্টারের সূত্র (Polarization of Light & Brewster\'s Law: μ = tan θ_p)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 8: আধুনিক পদার্থবিজ্ঞানের সূচনা (14 Periods)
  // ==========================================================
  {
    id: 'top-phy2-8-1',
    chapterId: 'ch-phy2-8',
    name: 'চিরায়ত পদার্থবিজ্ঞান বনাম আধুনিক পদার্থবিজ্ঞান (Classical Physics vs Modern Physics)',
  },
  {
    id: 'top-phy2-8-2',
    chapterId: 'ch-phy2-8',
    name: 'আইনস্টাইনের বিশেষ আপেক্ষিকতা তত্ত্বের মৌলিক স্বীকার্যসমূহ (Postulates of Special Theory of Relativity)',
  },
  {
    id: 'top-phy2-8-3',
    chapterId: 'ch-phy2-8',
    name: 'লরেঞ্জ রূপান্তর সমীকরণ (Lorentz Transformation Equations)',
  },
  {
    id: 'top-phy2-8-4',
    chapterId: 'ch-phy2-8',
    name: 'কাল দীর্ঘায়ন বা সময় প্রসারণ (Time Dilation: t = t0 / √(1 - v²/c²))',
  },
  {
    id: 'top-phy2-8-5',
    chapterId: 'ch-phy2-8',
    name: 'দৈর্ঘ্য সংকোচন (Length Contraction: L = L0 √(1 - v²/c²))',
  },
  {
    id: 'top-phy2-8-6',
    chapterId: 'ch-phy2-8',
    name: 'ভরের আপেক্ষিকতা ও ভর-শক্তি সম্পর্ক সমীকরণ (Relativistic Mass: m = m0 / √(1 - v²/c²) & Mass-Energy Equivalence: E = mc²)',
  },
  {
    id: 'top-phy2-8-7',
    chapterId: 'ch-phy2-8',
    name: 'কৃষ্ণবস্তুর বিকিরণ ও ম্যাক্স প্লাঙ্কের কোয়ান্টাম তত্ত্ব (Black Body Radiation & Planck\'s Quantum Theory: E = hf)',
  },
  {
    id: 'top-phy2-8-8',
    chapterId: 'ch-phy2-8',
    name: 'ফটোইলেকট্রিক ক্রিয়া ও আইনস্টাইনের আলোক-তড়িৎ সমীকরণ (Photoelectric Effect & Einstein\'s Equation: hf = W0 + K_max)',
  },
  {
    id: 'top-phy2-8-9',
    chapterId: 'ch-phy2-8',
    name: 'ফোটনের বৈশিষ্ট্য ও কার্যাবলি (Properties of Photons)',
  },
  {
    id: 'top-phy2-8-10',
    chapterId: 'ch-phy2-8',
    name: 'কম্পটন ক্রিয়া ও তরঙ্গদৈর্ঘ্য বৃদ্ধি (Compton Effect & Compton Shift: Δλ = h/(m0*c) * (1 - cos θ))',
  },
  {
    id: 'top-phy2-8-11',
    chapterId: 'ch-phy2-8',
    name: 'দ্য ব্রগলির পদার্থ তরঙ্গ ও তরঙ্গ-কণা দ্বৈততা (De Broglie Matter Waves & Wave-Particle Duality: λ = h/p)',
  },
  {
    id: 'top-phy2-8-12',
    chapterId: 'ch-phy2-8',
    name: 'হাইজেনবার্গের অনিশ্চয়তা নীতি (Heisenberg\'s Uncertainty Principle: Δx * Δp ≥ h/4π)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 9: পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান (11 Periods)
  // ==========================================================
  {
    id: 'top-phy2-9-1',
    chapterId: 'ch-phy2-9',
    name: 'থমসন ও রাদারফোর্ডের পরমাণু মডেল ও সীমাবদ্ধতা (Thomson & Rutherford Atomic Models & Limitations)',
  },
  {
    id: 'top-phy2-9-2',
    chapterId: 'ch-phy2-9',
    name: 'বোর পরমাণু মডেলের স্বীকার্যসমূহ (Bohr\'s Postulates: Angular Momentum mvr = nh/2π)',
  },
  {
    id: 'top-phy2-9-3',
    chapterId: 'ch-phy2-9',
    name: 'হাইড্রোজেন পরমাণুর কক্ষপথের ব্যাসার্ধ, বেগ ও মোট শক্তি নির্ণয় (Radius, Velocity & Energy of Hydrogen Electron)',
  },
  {
    id: 'top-phy2-9-4',
    chapterId: 'ch-phy2-9',
    name: 'হাইড্রোজেনের পারমাণবিক বর্ণালি ও রিডবার্গ সমীকরণ (Hydrogen Emission Spectra & Rydberg Formula: 1/λ = R_H(1/n1² - 1/n2²))',
  },
  {
    id: 'top-phy2-9-5',
    chapterId: 'ch-phy2-9',
    name: 'পরমাণু নিউক্লিয়াসের গঠন, পারমাণবিক ভর একক (amu) ও আইসোটোপ/আইসোবার (Atomic Nucleus Structure, amu, Isotopes & Isobars)',
  },
  {
    id: 'top-phy2-9-6',
    chapterId: 'ch-phy2-9',
    name: 'ভর ত্রুটি ও নিউক্লীয় বন্ধন শক্তি (Mass Defect & Nuclear Binding Energy: ΔE = Δm * c²)',
  },
  {
    id: 'top-phy2-9-7',
    chapterId: 'ch-phy2-9',
    name: 'তেজস্ক্রিয়তা: আলফা, বিটা ও গামা রশ্মির প্রকৃতি ও বৈশিষ্ট্য (Radioactivity: Alpha, Beta & Gamma Rays Properties)',
  },
  {
    id: 'top-phy2-9-8',
    chapterId: 'ch-phy2-9',
    name: 'তেজস্ক্রিয় ক্ষয় সূত্র, অর্ধায়ু ও গড় আয়ু (Radioactive Decay Law: N = N0 e^(-λt), Half Life T½ = 0.693/λ, Mean Life τ = 1/λ)',
  },
  {
    id: 'top-phy2-9-9',
    chapterId: 'ch-phy2-9',
    name: 'নিউক্লীয় ফিশন বিক্রিয়া ও চেইন বিক্রিয়া (Nuclear Fission & Chain Reactions)',
  },
  {
    id: 'top-phy2-9-10',
    chapterId: 'ch-phy2-9',
    name: 'নিউক্লীয় ফিউশন বিক্রিয়া ও সৌরশক্তি (Nuclear Fusion & Stellar Energy Generation)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 10: সেমিকন্ডাক্টর ও ইলেকট্রনিক্স (19 Periods)
  // ==========================================================
  {
    id: 'top-phy2-10-1',
    chapterId: 'ch-phy2-10',
    name: 'শক্তি ব্যান্ড তত্ত্ব: যোজন ব্যান্ড, পরিবহন ব্যান্ড ও নিষিদ্ধ শক্তি ব্যবধান (Energy Band Theory: Valence, Conduction & Forbidden Gap)',
  },
  {
    id: 'top-phy2-10-2',
    chapterId: 'ch-phy2-10',
    name: 'পরিবাহী, অর্ধপরিবাহী ও অপরিবাহী পদার্থের ব্যান্ড কাঠামো (Band Structure of Conductors, Semiconductors & Insulators)',
  },
  {
    id: 'top-phy2-10-3',
    chapterId: 'ch-phy2-10',
    name: 'বিশুদ্ধ ও অবিশুদ্ধ অর্ধপরিবাহী: ডোপিং এবং p-টাইপ ও n-টাইপ অর্ধপরিবাহী (Intrinsic & Extrinsic Semiconductors: Doping, p-type & n-type)',
  },
  {
    id: 'top-phy2-10-4',
    chapterId: 'ch-phy2-10',
    name: 'p-n জংশন ডায়োড: নিঃশেষিত স্তর (Depletion Layer) ও বিভব প্রাচীর (p-n Junction Diode: Depletion Layer & Potential Barrier)',
  },
  {
    id: 'top-phy2-10-5',
    chapterId: 'ch-phy2-10',
    name: 'ডায়োডের সম্মুখবর্তী বায়াস ও বিমুখী বায়াস এবং I-V বৈশিষ্ট্য লেখচিত্র (Forward & Reverse Bias of Diode & I-V Characteristics)',
  },
  {
    id: 'top-phy2-10-6',
    chapterId: 'ch-phy2-10',
    name: 'ডায়োড রেকটিফায়ার: একমুখীকরণ (অর্ধ-তরঙ্গ ও পূর্ণ-তরঙ্গ রেকটিফিকেশন) (Diode as Rectifier: Half-Wave & Full-Wave Rectification)',
  },
  {
    id: 'top-phy2-10-7',
    chapterId: 'ch-phy2-10',
    name: 'আলোক নিঃসরণকারী ডায়োড LED, ফটোডায়োড ও সৌরকোষ (LED, Photodiode & Solar Cell Principles)',
  },
  {
    id: 'top-phy2-10-8',
    chapterId: 'ch-phy2-10',
    name: 'ট্রানজিস্টর: গঠন ও কার্যপ্রণালী (npn ও pnp ট্রানজিস্টর) (Transistor Construction & Working Principle: npn & pnp)',
  },
  {
    id: 'top-phy2-10-9',
    chapterId: 'ch-phy2-10',
    name: 'ট্রানজিস্টর বিন্যাস: সাধারণ নিঃসারক (CE) বিন্যাস ও প্রবাহ লাভ (Common Emitter Configuration & Current Gains α, β)',
  },
  {
    id: 'top-phy2-10-10',
    chapterId: 'ch-phy2-10',
    name: 'অ্যামপ্লিফায়ার / বিবর্ধক হিসেবে ট্রানজিস্টরের ব্যবহার (Transistor as an Amplifier)',
  },
  {
    id: 'top-phy2-10-11',
    chapterId: 'ch-phy2-10',
    name: 'সুইচ হিসেবে ট্রানজিস্টরের ব্যবহার (Transistor as an Electronic Switch)',
  },
  {
    id: 'top-phy2-10-12',
    chapterId: 'ch-phy2-10',
    name: 'সংখ্যা পদ্ধতি ও লজিক গেইট: AND, OR, NOT, NAND, NOR, XOR ও সত্যক সারণি (Logic Gates & Truth Tables)',
  },
  {
    id: 'top-phy2-10-13',
    chapterId: 'ch-phy2-10',
    name: 'সমন্বিত বর্তনী বা আইসি (IC) এর ধারণা ও সুবিধা (Integrated Circuits Concept & Advantages)',
  },

  // ==========================================================
  // PHYSICS 2ND PAPER - CHAPTER 11: জ্যোতির্বিজ্ঞান (5 Periods)
  // ==========================================================
  {
    id: 'top-phy2-11-1',
    chapterId: 'ch-phy2-11',
    name: 'মহাবিশ্বের উৎপত্তি ও মহাবিস্ফোরণ (Big Bang Theory & Origin of the Universe)',
  },
  {
    id: 'top-phy2-11-2',
    chapterId: 'ch-phy2-11',
    name: 'নক্ষত্রের জন্ম, বিবর্তন, শ্বেত বামন, নিউট্রন স্টার ও কৃষ্ণগহ্বর (Life Cycle of Stars, White Dwarf, Neutron Star & Black Hole)',
  },
  {
    id: 'top-phy2-11-3',
    chapterId: 'ch-phy2-11',
    name: 'চন্দ্রশেখর সীমা (Chandrasekhar Limit = 1.4 Solar Mass)',
  },
  {
    id: 'top-phy2-11-4',
    chapterId: 'ch-phy2-11',
    name: 'গ্যালাক্সি ও হাবলের মহাবিশ্ব সম্প্রসারণ সূত্র (Galaxies & Hubble\'s Law of Expanding Universe: v = H0 * d)',
  },
  {
    id: 'top-phy2-11-5',
    chapterId: 'ch-phy2-11',
    name: 'ডার্ক ম্যাটার ও ডার্ক এনার্জি (Dark Matter & Dark Energy in Cosmology)',
  },
];
