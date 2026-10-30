/**
 * OFFICIAL NCTB HSC HIGHER MATHEMATICS SYLLABUS DATA (1st & 2nd Papers)
 * Code 265 (1st Paper, Class 11, 120 Periods)
 * Code 266 (2nd Paper, Class 12, 118 Periods)
 * Extracted directly from official NCTB Syllabus PDF.
 */

export const HIGHER_MATH_SUBJECTS = [
  {
    id: 'sub-math-1',
    name: 'Higher Mathematics 1st Paper',
    code: '265',
    accentColor: '#474D5E', // Muted Slate Navy
    tagBg: '#E6E9F0',
    tagText: '#2C3242',
    isOfficial: true,
  },
  {
    id: 'sub-math-2',
    name: 'Higher Mathematics 2nd Paper',
    code: '266',
    accentColor: '#3E5668', // Deep Slate Indigo
    tagBg: '#E5ECF0',
    tagText: '#263947',
    isOfficial: true,
  },
];

export const HIGHER_MATH_CHAPTERS = [
  // Higher Math 1st Paper (120 Periods Total)
  {
    id: 'ch-math-1', // Preserved for backwards compatibility
    subjectId: 'sub-math-1',
    chapterNumber: 1,
    periods: 12,
    name: 'Chapter 1: Matrices & Determinants (ম্যাট্রিক্স ও নির্ণায়ক)',
  },
  {
    id: 'ch-math1-2',
    subjectId: 'sub-math-1',
    chapterNumber: 2,
    periods: 12,
    name: 'Chapter 2: Vectors (ভেক্টর)',
  },
  {
    id: 'ch-math-3', // Preserved for backwards compatibility
    subjectId: 'sub-math-1',
    chapterNumber: 3,
    periods: 12,
    name: 'Chapter 3: Straight Lines (সরলরেখা)',
  },
  {
    id: 'ch-math1-4',
    subjectId: 'sub-math-1',
    chapterNumber: 4,
    periods: 8,
    name: 'Chapter 4: Circles (বৃত্ত)',
  },
  {
    id: 'ch-math1-5',
    subjectId: 'sub-math-1',
    chapterNumber: 5,
    periods: 10,
    name: 'Chapter 5: Permutations & Combinations (বিন্যাস ও সমাবেশ)',
  },
  {
    id: 'ch-math1-6',
    subjectId: 'sub-math-1',
    chapterNumber: 6,
    periods: 14,
    name: 'Chapter 6: Trigonometric Ratios (ত্রিকোণমিতিক অনুপাত)',
  },
  {
    id: 'ch-math1-7',
    subjectId: 'sub-math-1',
    chapterNumber: 7,
    periods: 12,
    name: 'Chapter 7: Trigonometric Ratios of Associated Angles (সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত)',
  },
  {
    id: 'ch-math1-8',
    subjectId: 'sub-math-1',
    chapterNumber: 8,
    periods: 14,
    name: 'Chapter 8: Functions & Graph of Functions (ফাংশন ও ফাংশনের লেখচিত্র)',
  },
  {
    id: 'ch-math-9', // Preserved for backwards compatibility
    subjectId: 'sub-math-1',
    chapterNumber: 9,
    periods: 14,
    name: 'Chapter 9: Differentiation (অন্তরীকরণ)',
  },
  {
    id: 'ch-math-10', // Preserved for backwards compatibility
    subjectId: 'sub-math-1',
    chapterNumber: 10,
    periods: 12,
    name: 'Chapter 10: Integration (যোগজীকরণ)',
  },

  // Higher Math 2nd Paper (118 Periods Total)
  {
    id: 'ch-math2-1',
    subjectId: 'sub-math-2',
    chapterNumber: 1,
    periods: 12,
    name: 'Chapter 1: Real Numbers & Inequalities (বাস্তব সংখ্যা ও অসমতা)',
  },
  {
    id: 'ch-math2-2',
    subjectId: 'sub-math-2',
    chapterNumber: 2,
    periods: 8,
    name: 'Chapter 2: Linear Programming (যোগাশ্রয়ী প্রোগ্রাম)',
  },
  {
    id: 'ch-math2-3',
    subjectId: 'sub-math-2',
    chapterNumber: 3,
    periods: 12,
    name: 'Chapter 3: Complex Numbers (জটিল সংখ্যা)',
  },
  {
    id: 'ch-math2-4',
    subjectId: 'sub-math-2',
    chapterNumber: 4,
    periods: 12,
    name: 'Chapter 4: Polynomials & Polynomial Equations (বহুপদী ও বহুপদী সমীকরণ)',
  },
  {
    id: 'ch-math2-5',
    subjectId: 'sub-math-2',
    chapterNumber: 5,
    periods: 12,
    name: 'Chapter 5: Binomial Expansion (দ্বিপদী বিস্তৃতি)',
  },
  {
    id: 'ch-math2-6',
    subjectId: 'sub-math-2',
    chapterNumber: 6,
    periods: 14,
    name: 'Chapter 6: Conics (কণিক)',
  },
  {
    id: 'ch-math2-7',
    subjectId: 'sub-math-2',
    chapterNumber: 7,
    periods: 12,
    name: 'Chapter 7: Inverse Trigonometric Functions & Equations (বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ)',
  },
  {
    id: 'ch-math2-8',
    subjectId: 'sub-math-2',
    chapterNumber: 8,
    periods: 14,
    name: 'Chapter 8: Statics (স্থিতিবিদ্যা)',
  },
  {
    id: 'ch-math2-9',
    subjectId: 'sub-math-2',
    chapterNumber: 9,
    periods: 14,
    name: 'Chapter 9: Motion of Particles in a Plane (সমতলে বস্তুকণার গতি)',
  },
  {
    id: 'ch-math2-10',
    subjectId: 'sub-math-2',
    chapterNumber: 10,
    periods: 10,
    name: 'Chapter 10: Measures of Dispersion & Probability (বিস্তার পরিমাপ ও সম্ভাবনা)',
  },
];

export const HIGHER_MATH_TOPICS = [
  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 1: ম্যাট্রিক্স ও নির্ণায়ক (12 Periods)
  // ==========================================================
  {
    id: 'top-math1-1-1',
    chapterId: 'ch-math-1',
    name: 'ম্যাট্রিক্সের ধারণা ও প্রকারভেদ: সারি, কলাম, বর্গ, কর্ণ, স্কেলার, অভেদক, ট্রান্সপোজ ও প্রতিসম ম্যাট্রিক্স (Types of Matrices)',
  },
  {
    id: 'top-math-1-1', // Preserved
    chapterId: 'ch-math-1',
    name: 'ম্যাট্রিক্সের সমতা, স্কেলার গুণিতক, যোগ, বিয়োগ ও গুণ (Matrix Addition, Subtraction & Multiplication)',
  },
  {
    id: 'top-math-1-2', // Preserved
    chapterId: 'ch-math-1',
    name: 'নির্ণায়কের মান, অনুরাশি (Minor), সহগুণক (Cofactor) ও বিস্তার (Determinant Expansion & Properties)',
  },
  {
    id: 'top-math1-1-4',
    chapterId: 'ch-math-1',
    name: 'নির্ণায়কের ধর্মাবলি প্রমাণ ও সারি-কলাম রূপান্তরের সাহায্যে মান নির্ণয় (Properties of Determinants & Evaluation)',
  },
  {
    id: 'top-math1-1-5',
    chapterId: 'ch-math-1',
    name: 'ব্যতিক্রমী ও অব্যতিক্রমী ম্যাট্রিক্স এবং অ্যাডজয়েন্ট ম্যাট্রিক্স (Singular, Non-singular & Adjoint Matrix)',
  },
  {
    id: 'top-math-1-3', // Preserved
    chapterId: 'ch-math-1',
    name: 'বিপরীত ম্যাট্রিক্স নির্ণয় ও ক্রেমারের নিয়মে একঘাত সমীকরণ জোট সমাধান (Inverse Matrix & Cramer\'s Rule Solution of Linear Equations)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 2: ভেক্টর (12 Periods)
  // ==========================================================
  {
    id: 'top-math1-2-1',
    chapterId: 'ch-math1-2',
    name: 'জ্যামিতিক ভেক্টর: ধারক রেখা, সমতা, বিপরীত ভেক্টর, একক ভেক্টর ও শূন্য ভেক্টর (Geometric Vectors & Terminology)',
  },
  {
    id: 'top-math1-2-2',
    chapterId: 'ch-math1-2',
    name: 'ভেক্টরের যোগ, বিয়োগ ও স্কেলার গুণিতক বিধি (Vector Addition, Subtraction & Scalar Multiplication)',
  },
  {
    id: 'top-math1-2-3',
    chapterId: 'ch-math1-2',
    name: 'দ্বিমাত্রিক ও ত্রিমাত্রিক কার্তেসীয় স্থানাঙ্কে ভেক্টর প্রকাশ (i, j, k) ও অবস্থান ভেক্টর (Vector in Cartesian Coordinates in 2D & 3D)',
  },
  {
    id: 'top-math1-2-4',
    chapterId: 'ch-math1-2',
    name: 'ভেক্টরের মান, দিক কোসাইন ও একক ভেক্টর নির্ণয় (Magnitude, Direction Cosines & Unit Vector)',
  },
  {
    id: 'top-math1-2-5',
    chapterId: 'ch-math1-2',
    name: 'ভেক্টরের স্কেলার গুণন (ডট গুণন), লম্ব হওয়ার শর্ত ও অভিক্ষেপ/অংশক (Dot Product, Orthogonality & Vector Projection)',
  },
  {
    id: 'top-math1-2-6',
    chapterId: 'ch-math1-2',
    name: 'ভেক্টরের ভেক্টর গুণন (ক্রস গুণন), সমান্তরাল হওয়ার শর্ত ও লব্ধ একক ভেক্টর (Cross Product, Parallelism & Normal Unit Vector)',
  },
  {
    id: 'top-math1-2-7',
    chapterId: 'ch-math1-2',
    name: 'ভেক্টরের সাহায্যে ত্রিভুজ, সামান্তরিকের ক্ষেত্রফল ও জ্যামিতিক উপপাদ্য প্রমাণ (Area Calculation & Geometric Proofs using Vectors)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 3: সরলরেখা (12 Periods)
  // ==========================================================
  {
    id: 'top-math1-3-1',
    chapterId: 'ch-math-3',
    name: 'কার্তেসীয় ও পোলার স্থানাঙ্ক এবং পারস্পরিক রূপান্তর (Cartesian & Polar Coordinates Conversion: x=r cos θ, y=r sin θ)',
  },
  {
    id: 'top-math1-3-2',
    chapterId: 'ch-math-3',
    name: 'দুইটি বিন্দুর মধ্যবর্তী দূরত্ব ও অনুপাত বিভক্তকারী বিন্দুর স্থানাঙ্ক (অন্তর্বিভক্ত ও বহির্বিভক্ত) (Distance Formula & Section Formula)',
  },
  {
    id: 'top-math1-3-3',
    chapterId: 'ch-math-3',
    name: 'ত্রিভুজের ভরকেন্দ্র, পরিকেন্দ্র, অন্তর্কেন্দ্র ও শীর্ষবিন্দু দ্বারা ক্ষেত্রফল নির্ণয় (Centroid & Triangle Area by Vertices)',
  },
  {
    id: 'top-math1-3-4',
    chapterId: 'ch-math-3',
    name: 'সরলরেখার ঢাল (m = tan θ = (y2-y1)/(x2-x1)) ও অক্ষের সমান্তরাল রেখা (Slope of Straight Line & Lines Parallel to Axes)',
  },
  {
    id: 'top-math1-3-5',
    chapterId: 'ch-math-3',
    name: 'সরলরেখার বিভিন্ন সমীকরণ: y = mx+c, y-y1 = m(x-x1), x/a + y/b = 1, x cos α + y sin α = p (Standard Forms of Linear Equations)',
  },
  {
    id: 'top-math1-3-6',
    chapterId: 'ch-math-3',
    name: 'দুইটি সরলরেখার ছেদবিন্দু, পরস্পর সমান্তরাল (m1 = m2) ও লম্ব (m1*m2 = -1) হওয়ার শর্ত (Intersection, Parallel & Perpendicular Conditions)',
  },
  {
    id: 'top-math1-3-7',
    chapterId: 'ch-math-3',
    name: 'দুইটি রেখার অন্তর্ভুক্ত কোণের পরিমাপ (tan θ = ±(m1-m2)/(1+m1m2)) (Angle Between Two Straight Lines)',
  },
  {
    id: 'top-math1-3-8',
    chapterId: 'ch-math-3',
    name: 'কোনো বিন্দু থেকে সরলরেখার লম্ব দূরত্ব ও সমান্তরাল রেখাদ্বয়ের মধ্যবর্তী দূরত্ব (Perpendicular Distance from a Point & Distance Between Parallel Lines)',
  },
  {
    id: 'top-math1-3-9',
    chapterId: 'ch-math-3',
    name: 'সরলরেখাদ্বয়ের মধ্যবর্তী কোণের সমদ্বিখণ্ডকের সমীকরণ (Equations of Bisectors of Angles Between Two Lines)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 4: বৃত্ত (8 Periods)
  // ==========================================================
  {
    id: 'top-math1-4-1',
    chapterId: 'ch-math1-4',
    name: 'মূলবিন্দু ও নির্দিষ্ট কেন্দ্র (h, k) এবং r ব্যাসার্ধবিশিষ্ট বৃত্তের সমীকরণ: (x-h)² + (y-k)² = r² (Standard Equations of Circles)',
  },
  {
    id: 'top-math1-4-2',
    chapterId: 'ch-math1-4',
    name: 'বৃত্তের সাধারণ সমীকরণ: x² + y² + 2gx + 2fy + c = 0, কেন্দ্র (-g, -f) ও ব্যাসার্ধ √(g²+f²-c) (General Equation of Circle)',
  },
  {
    id: 'top-math1-4-3',
    chapterId: 'ch-math1-4',
    name: 'অক্ষদ্বয়কে স্পর্শকারী বৃত্ত ও অক্ষদ্বয় হতে কর্তিত অংশের পরিমাণ (Intercepts Made on Axes by Circles: 2√(g²-c), 2√(f²-c))',
  },
  {
    id: 'top-math1-4-4',
    chapterId: 'ch-math1-4',
    name: 'তিনটি বিন্দু দিয়ে অতিক্রান্ত বৃত্তের সমীকরণ ও ব্যাসের প্রান্তবিন্দু দ্বারা বৃত্ত (Circle Passing through 3 Points & Diametrical Form)',
  },
  {
    id: 'top-math1-4-5',
    chapterId: 'ch-math1-4',
    name: 'বৃত্তের স্পর্শক ও অভিলম্বের সমীকরণ এবং স্পর্শ করার শর্ত (Tangents, Normals & Condition of Tangency: c² = a²(1+m²))',
  },
  {
    id: 'top-math1-4-6',
    chapterId: 'ch-math1-4',
    name: 'বহিস্থ বিন্দু থেকে বৃত্তে অঙ্কিত স্পর্শকের দৈর্ঘ্য ও স্পর্শ জ্যা (Length of Tangents from External Point & Chord of Contact)',
  },
  {
    id: 'top-math1-4-7',
    chapterId: 'ch-math1-4',
    name: 'দুইটি বৃত্তের সাধারণ জ্যা ও সাধারণ স্পর্শক (Common Chord & Common Tangents of Two Circles)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 5: বিন্যাস ও সমাবেশ (10 Periods)
  // ==========================================================
  {
    id: 'top-math1-5-1',
    chapterId: 'ch-math1-5',
    name: 'গণনার মৌলিক যোজন ও গুণন বিধি এবং ফ্যাক্টোরিয়াল n! (Fundamental Counting Principles & Factorial Notation)',
  },
  {
    id: 'top-math1-5-2',
    chapterId: 'ch-math1-5',
    name: 'বিন্যাস (Permutation) এর ধারণা ও সূত্র প্রতিপাদন: nPr = n! / (n-r)! (Derivation of Permutation Formula nPr)',
  },
  {
    id: 'top-math1-5-3',
    chapterId: 'ch-math1-5',
    name: 'একজাতীয় ও ভিন্ন ভিন্ন বস্তুর বিন্যাস এবং পুনরাবৃত্তিমূলক বিন্যাস (Permutation of Similar Items & Repeated Elements)',
  },
  {
    id: 'top-math1-5-4',
    chapterId: 'ch-math1-5',
    name: 'শব্দ গঠন ও সংখ্যা গঠনের গাণিতিক সমস্যা (Word Formations & Number Formations with Conditions)',
  },
  {
    id: 'top-math1-5-5',
    chapterId: 'ch-math1-5',
    name: 'বৃত্তাকার বিন্যাস: (n-1)! ও মালা/হার গাঁথার ক্ষেত্রে ½(n-1)! (Circular Permutations)',
  },
  {
    id: 'top-math1-5-6',
    chapterId: 'ch-math1-5',
    name: 'সমাবেশ (Combination) এর ধারণা ও সূত্র প্রতিপাদন: nCr = n! / (r!(n-r)!) (Combination Formula nCr)',
  },
  {
    id: 'top-math1-5-7',
    chapterId: 'ch-math1-5',
    name: 'সম্পূরক সমাবেশ ও প্যাসকেলের ত্রিভুজ সম্পর্ক: nCr = nC(n-r) এবং nCr + nC(r-1) = (n+1)Cr (Complementary Combinations & Identity)',
  },
  {
    id: 'top-math1-5-8',
    chapterId: 'ch-math1-5',
    name: 'শর্তাধীন সমাবেশ: কমিটি গঠন ও জ্যামিতিক বিন্দুর সমাবেশ (Conditional Combinations: Committee Formation & Geometric Counting)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 6: ত্রিকোণমিতিক অনুপাত (14 Periods)
  // ==========================================================
  {
    id: 'top-math1-6-1',
    chapterId: 'ch-math1-6',
    name: 'কোণের পরিমাপ: ষাটমূলক ও বৃত্তীয় পদ্ধতি এবং রেডিয়ান কোণ (Angle Measurement: Sexagesimal & Circular Systems)',
  },
  {
    id: 'top-math1-6-2',
    chapterId: 'ch-math1-6',
    name: 'বৃত্তচাপের দৈর্ঘ্য ও বৃত্তকলার ক্ষেত্রফল: s = rθ, A = ½r²θ (Arc Length & Sector Area Formulae)',
  },
  {
    id: 'top-math1-6-3',
    chapterId: 'ch-math1-6',
    name: 'যেকোনো কোণের ত্রিকোণমিতিক অনুপাত ও চতুর্ভাগে চিহ্নের পরিবর্তন (Trigonometric Ratios in Four Quadrants: ASTC Rule)',
  },
  {
    id: 'top-math1-6-4',
    chapterId: 'ch-math1-6',
    name: 'ত্রিকোণমিতিক অভেদাবলি প্রমাণ ও প্রয়োগ (Fundamental Trigonometric Identities)',
  },
  {
    id: 'top-math1-6-5',
    chapterId: 'ch-math1-6',
    name: 'সীমিত ব্যবধিতে ত্রিকোণমিতিক অনুপাতের মান নির্ণয় (Evaluation of Trig Functions in Specified Intervals)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 7: সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত (12 Periods)
  // ==========================================================
  {
    id: 'top-math1-7-1',
    chapterId: 'ch-math1-7',
    name: 'যৌগিক কোণের ত্রিকোণমিতিক সূত্র: sin(A±B), cos(A±B), tan(A±B) (Trigonometric Ratios of Compound Angles)',
  },
  {
    id: 'top-math1-7-2',
    chapterId: 'ch-math1-7',
    name: 'গুণফল হতে যোগফল/বিয়োগফলে রূপান্তর সূত্র: 2 sin A cos B, 2 cos A cos B ইত্যাদি (Transformation of Products into Sums/Differences)',
  },
  {
    id: 'top-math1-7-3',
    chapterId: 'ch-math1-7',
    name: 'যোগফল/বিয়োগফল হতে গুণফলে রূপান্তর সূত্র: sin C ± sin D, cos C ± cos D (Transformation of Sums into Products)',
  },
  {
    id: 'top-math1-7-4',
    chapterId: 'ch-math1-7',
    name: 'গুণিতক কোণের অনুপাত: sin 2A, cos 2A, tan 2A, sin 3A, cos 3A (Multiple Angles Ratios: 2A and 3A)',
  },
  {
    id: 'top-math1-7-5',
    chapterId: 'ch-math1-7',
    name: 'উপ-গুণিতক কোণের অনুপাত: A/2, A/3 কোণের ত্রিকোণমিতিক মান (Submultiple Angles Ratios)',
  },
  {
    id: 'top-math1-7-6',
    chapterId: 'ch-math1-7',
    name: 'শর্তাধীন অভেদাবলি: A + B + C = π হলে বিভিন্ন ত্রিকোণমিতিক প্রমাণ (Conditional Identities)',
  },
  {
    id: 'top-math1-7-7',
    chapterId: 'ch-math1-7',
    name: 'ত্রিভুজের কোণ ও বাহুর সম্পর্ক: সাইন সূত্র (a/sin A = 2R) ও কোসাইন সূত্র (cos A = (b²+c²-a²)/2bc) (Sine & Cosine Rules of Triangles)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 8: ফাংশন ও ফাংশনের লেখচিত্র (14 Periods)
  // ==========================================================
  {
    id: 'top-math1-8-1',
    chapterId: 'ch-math1-8',
    name: 'ফাংশনের ধারণা, ডোমেন ও রেঞ্জ নির্ণয় (Concept of Functions, Finding Domain & Range)',
  },
  {
    id: 'top-math1-8-2',
    chapterId: 'ch-math1-8',
    name: 'ফাংশনের প্রকারভেদ: এক-এক ফাংশন, সার্বিক (On-to) ফাংশন ও বিপরীত ফাংশন f⁻¹(x) (One-to-One, Onto & Inverse Functions)',
  },
  {
    id: 'top-math1-8-3',
    chapterId: 'ch-math1-8',
    name: 'সংযোজিত ফাংশন (fog, gof) ও এর ডোমেন/রেঞ্জ (Composite Functions)',
  },
  {
    id: 'top-math1-8-4',
    chapterId: 'ch-math1-8',
    name: 'বিশেষ ফাংশনসমূহ: পরমমান ফাংশন |x|, চিহ্ন ফাংশন, গুরু পূর্ণসংখ্যা ফাংশন [x] (Special Functions: Absolute Value, Signum & Greatest Integer)',
  },
  {
    id: 'top-math1-8-5',
    chapterId: 'ch-math1-8',
    name: 'বীজগাণিতিক ও সূচকীয়/লগারিদমিক ফাংশনের লেখচিত্র অঙ্কন (Graphs of Algebraic, Exponential & Logarithmic Functions)',
  },
  {
    id: 'top-math1-8-6',
    chapterId: 'ch-math1-8',
    name: 'ত্রিকোণমিতিক ফাংশনের পর্যায়কাল ও লেখচিত্র: sin x, cos x, tan x (Periodicity & Graphs of Trig Functions)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 9: অন্তরীকরণ (14 Periods)
  // ==========================================================
  {
    id: 'top-math-9-1', // Preserved
    chapterId: 'ch-math-9',
    name: 'সীমা (Limit) এর ধারণা, অস্তিত্ব ও মৌলিক উপপাদ্য (Limits & First Principle Formulae: lim (sin x)/x = 1)',
  },
  {
    id: 'top-math1-9-2',
    chapterId: 'ch-math-9',
    name: 'ফাংশনের অবিচ্ছিন্নতা ও ব্যবকলনযোগ্যতা (Continuity and Differentiability of Functions)',
  },
  {
    id: 'top-math1-9-3',
    chapterId: 'ch-math-9',
    name: 'মূল নিয়মে অন্তরজ নির্ণয়: xⁿ, eˣ, aˣ, ln x, sin x, cos x, tan x (Derivatives from First Principles)',
  },
  {
    id: 'top-math1-9-4',
    chapterId: 'ch-math-9',
    name: 'যোগ, বিয়োগ, গুণ (uv) ও ভাগ (u/v) এর অন্তরীকরণ সূত্র (Differentiation Product & Quotient Rules)',
  },
  {
    id: 'top-math-9-2', // Preserved
    chapterId: 'ch-math-9',
    name: 'সংযোজিত ফাংশনের অন্তরজ (চেইন রুল) ও পরামিতিক সমীকরণ (Chain Rule & Parametric Differentiation)',
  },
  {
    id: 'top-math1-9-6',
    chapterId: 'ch-math-9',
    name: 'বিপরীত ত্রিকোণমিতিক ফাংশন ও অব্যক্ত ফাংশনের অন্তরীকরণ (Derivatives of Inverse Trig & Implicit Functions)',
  },
  {
    id: 'top-math1-9-7',
    chapterId: 'ch-math-9',
    name: 'পর্যায়ক্রমিক অন্তরীকরণ (Successive Differentiation: y_n নির্ণয়) ও লিইবনিজের উপপাদ্য (Successive Differentiation & Leibniz\'s Theorem)',
  },
  {
    id: 'top-math-9-3', // Preserved
    chapterId: 'ch-math-9',
    name: 'অন্তরজের জ্যামিতিক তাৎপর্য, স্পর্শক ও অভিলম্বের সমীকরণ (Tangent & Normal Equations: dy/dx as Geometric Slope)',
  },
  {
    id: 'top-math1-9-9',
    chapterId: 'ch-math-9',
    name: 'অন্তরজ সম্পর্কিত হার পরিমাপক: বেগ, ত্বরণ ও পরিবর্তন হার (Derivatives as Rate of Change)',
  },
  {
    id: 'top-math-9-4', // Preserved
    chapterId: 'ch-math-9',
    name: 'ফাংশনের বৃদ্ধি-হ্রাস, চরম মান এবং গুরুমান ও লঘুমান নির্ণয় (Maxima & Minima Optimization: First & Second Derivative Tests)',
  },

  // ==========================================================
  // HIGHER MATH 1ST PAPER - CHAPTER 10: যোগজীকরণ (12 Periods)
  // ==========================================================
  {
    id: 'top-math-10-1', // Preserved
    chapterId: 'ch-math-10',
    name: 'অনির্দিষ্ট যোগজ (Indefinite Integrals) ও আদর্শ সমাকলন সূত্রাবলি (Standard Integrals & Anti-derivatives)',
  },
  {
    id: 'top-math1-10-2',
    chapterId: 'ch-math-10',
    name: 'প্রতিস্থাপন পদ্ধতি দ্বারা যোগজীকরণ: ∫ f\'(x)/f(x) dx ও ত্রিকোণমিতিক প্রতিস্থাপন (Substitution Method)',
  },
  {
    id: 'top-math-10-2', // Preserved
    chapterId: 'ch-math-10',
    name: 'অংশক্রমে যোগজীকরণ: LIATE নীতি (Integration by Parts: ∫ u v dx = u ∫ v dx - ∫ (du/dx ∫ v dx) dx)',
  },
  {
    id: 'top-math1-10-4',
    chapterId: 'ch-math-10',
    name: 'আংশিক ভগ্নাংশের সাহায্যে মূলদ ভগ্নাংশের যোগজীকরণ (Integration using Partial Fractions)',
  },
  {
    id: 'top-math1-10-5',
    chapterId: 'ch-math-10',
    name: 'নির্দিষ্ট যোগজ (Definite Integrals) ও মৌলিক উপপাদ্য (Definite Integrals & Fundamental Theorem of Calculus)',
  },
  {
    id: 'top-math1-10-6',
    chapterId: 'ch-math-10',
    name: 'নির্দিষ্ট যোগজের ধর্মাবলি ও মান নির্ণয়ে প্রয়োগ (Properties of Definite Integrals)',
  },
  {
    id: 'top-math-10-3', // Preserved
    chapterId: 'ch-math-10',
    name: 'নির্দিষ্ট যোগজের সাহায্যে সমতলীয় বক্ররেখা দ্বারা আবদ্ধ ক্ষেত্রফল নির্ণয় (Definite Integrals & Area Under Curves: A = ∫ y dx)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 1: বাস্তব সংখ্যা ও অসমতা (12 Periods)
  // ==========================================================
  {
    id: 'top-math2-1-1',
    chapterId: 'ch-math2-1',
    name: 'বাস্তব সংখ্যা পদ্ধতির মৌলিক স্বীকার্যসমূহ ও বৈশিষ্ট্য (Real Number System Axioms & Field Properties)',
  },
  {
    id: 'top-math2-1-2',
    chapterId: 'ch-math2-1',
    name: 'সুপ্রিমাম (লঘিষ্ঠ ঊর্ধ্বসীমা) ও ইনফিমাম (গরিষ্ঠ নিম্নসীমা) এর ধারণা ও নির্ণয় (Supremum & Infimum of Sets)',
  },
  {
    id: 'top-math2-1-3',
    chapterId: 'ch-math2-1',
    name: 'বাস্তব সংখ্যার পরমমান ও এর ধর্মাবলি প্রমাণ (Absolute Values & Properties: |x+y| ≤ |x| + |y|)',
  },
  {
    id: 'top-math2-1-4',
    chapterId: 'ch-math2-1',
    name: 'একচলকবিশিষ্ট রৈখিক অসমতার সমাধান ও সংখ্যারেখায় প্রকাশ (Solving Linear Inequalities in One Variable & Number Line)',
  },
  {
    id: 'top-math2-1-5',
    chapterId: 'ch-math2-1',
    name: 'পরমমান সংবলিত অসমতার সমাধান ও পরমমান চিহ্নের সাহায্যে প্রকাশ (Inequalities Involving Absolute Values)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 2: যোগাশ্রয়ী প্রোগ্রাম (8 Periods)
  // ==========================================================
  {
    id: 'top-math2-2-1',
    chapterId: 'ch-math2-2',
    name: 'যোগাশ্রয়ী প্রোগ্রামের ভূমিকা: উদ্দেশ্যমূলক ফাংশন (Z) ও সীমাবদ্ধতা শর্তাবলি (Objective Function & Constraints)',
  },
  {
    id: 'top-math2-2-2',
    chapterId: 'ch-math2-2',
    name: 'বাস্তব সমস্যা হতে যোগাশ্রয়ী প্রোগ্রাম মডেল গঠন (Formulation of Linear Programming Problems from Real Life)',
  },
  {
    id: 'top-math2-2-3',
    chapterId: 'ch-math2-2',
    name: 'লেখচিত্র পদ্ধতিতে অসমতা অঙ্কন ও সম্ভাব্য সমাধান এলাকা বা ফিজিবল রিজিওন (Feasible Region & Corner Points in Graph)',
  },
  {
    id: 'top-math2-2-4',
    chapterId: 'ch-math2-2',
    name: 'কৌণিক বিন্দু পদ্ধতির সাহায্যে সর্বোচ্চকরণ ও সর্বনিম্নকরণ নির্ণয় (Maximization & Minimization by Corner Point Method)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 3: জটিল সংখ্যা (12 Periods)
  // ==========================================================
  {
    id: 'top-math2-3-1',
    chapterId: 'ch-math2-3',
    name: 'কাল্পনিক একক i এর ধারণা, ঘাত ও জটিল সংখ্যা z = x + iy (Imaginary Unit i, Powers of i & Complex Numbers)',
  },
  {
    id: 'top-math2-3-2',
    chapterId: 'ch-math2-3',
    name: 'জটিল সংখ্যার জ্যামিতিক প্রতিরূপ (আরগন্ড চিত্র) ও অনুবন্ধী জটিল সংখ্যা z̄ (Argand Diagram & Conjugate Complex Numbers)',
  },
  {
    id: 'top-math2-3-3',
    chapterId: 'ch-math2-3',
    name: 'জটিল সংখ্যার পরমমান (মডুলাস r) ও নতি (আর্গুমেন্ট θ) নির্ণয় (Modulus & Argument of Complex Numbers: r = √(x²+y²), θ = tan⁻¹(y/x))',
  },
  {
    id: 'top-math2-3-4',
    chapterId: 'ch-math2-3',
    name: 'জটিল সংখ্যার পোলার ও অয়লারীয় আকার: z = r(cos θ + i sin θ) = r e^(iθ) (Polar and Exponential Forms)',
  },
  {
    id: 'top-math2-3-5',
    chapterId: 'ch-math2-3',
    name: 'জটিল সংখ্যার বর্গমূল ও ঘনমূল নির্ণয় (Square Root & Cube Roots of Complex Numbers)',
  },
  {
    id: 'top-math2-3-6',
    chapterId: 'ch-math2-3',
    name: 'এককের কাল্পনিক ঘনমূল (ω ও ω²) এর ধর্মাবলি: 1 + ω + ω² = 0, ω³ = 1 (Properties of Cube Roots of Unity)',
  },
  {
    id: 'top-math2-3-7',
    chapterId: 'ch-math2-3',
    name: 'ডি-মইভারের উপপাদ্য ও এককের n-তম মূল নির্ণয় (De Moivre\'s Theorem & n-th Roots of Unity)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 4: বহুপদী ও বহুপদী সমীকরণ (12 Periods)
  // ==========================================================
  {
    id: 'top-math2-4-1',
    chapterId: 'ch-math2-4',
    name: 'বহুপদী রাশির সংজ্ঞা, মাত্রা ও একচলকবিশিষ্ট বহুপদী (Polynomials Definition, Degree & Classification)',
  },
  {
    id: 'top-math2-4-2',
    chapterId: 'ch-math2-4',
    name: 'দ্বিঘাত সমীকরণ ax² + bx + c = 0 এর সমাধান ও মূলের প্রকৃতি (Quadratic Equations & Nature of Roots: Discriminant D = b² - 4ac)',
  },
  {
    id: 'top-math2-4-3',
    chapterId: 'ch-math2-4',
    name: 'দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক: α+β = -b/a, αβ = c/a (Relations between Roots and Coefficients)',
  },
  {
    id: 'top-math2-4-4',
    chapterId: 'ch-math2-4',
    name: 'প্রদত্ত মূল দ্বারা নতুন দ্বিঘাত সমীকরণ গঠন (Formation of Quadratic Equation with Given Roots: x² - (α+β)x + αβ = 0)',
  },
  {
    id: 'top-math2-4-5',
    chapterId: 'ch-math2-4',
    name: 'দুইটি দ্বিঘাত সমীকরণের একটি সাধারণ মূল বা উভয় মূল সাধারণ হওয়ার শর্ত (Condition for Common Roots in Quadratic Equations)',
  },
  {
    id: 'top-math2-4-6',
    chapterId: 'ch-math2-4',
    name: 'ত্রিঘাত ও চতুর্ঘাত সমীকরণের মূল ও সহগের সম্পর্ক এবং সমাধান (Cubic and Biquadratic Equations Root-Coefficient Relations)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 5: দ্বিপদী বিস্তৃতি (12 Periods)
  // ==========================================================
  {
    id: 'top-math2-5-1',
    chapterId: 'ch-math2-5',
    name: 'প্যাসকেলের ত্রিভুজ ও দ্বিপদী সহগ নির্ণয় (Pascal\'s Triangle & Binomial Coefficients)',
  },
  {
    id: 'top-math2-5-2',
    chapterId: 'ch-math2-5',
    name: 'ধনাত্মক পূর্ণসাংখ্যিক ঘাতের দ্বিপদী উপপাদ্য: (a+x)ⁿ এর বিস্তৃতি (Binomial Theorem for Positive Integer Index)',
  },
  {
    id: 'top-math2-5-3',
    chapterId: 'ch-math2-5',
    name: 'দ্বিপদী বিস্তৃতির সাধারণ পদ: T_(r+1) = nCr a^(n-r) x^r (General Term of Binomial Expansion)',
  },
  {
    id: 'top-math2-5-4',
    chapterId: 'ch-math2-5',
    name: 'দ্বিপদী বিস্তৃতির মধ্যপদ নির্ণয় (Middle Terms in Binomial Expansion)',
  },
  {
    id: 'top-math2-5-5',
    chapterId: 'ch-math2-5',
    name: 'নির্দিষ্ট পদ ও x-বর্জিত বা ধ্রুবক পদ নির্ণয় (Finding Independent / Constant Term Free of x)',
  },
  {
    id: 'top-math2-5-6',
    chapterId: 'ch-math2-5',
    name: 'যেকোনো মূলদ ঘাতের জন্য দ্বিপদী উপপাদ্য: (1+x)ⁿ (|x| < 1) এবং আসন্ন মান নির্ণয় (Binomial Theorem for Any Rational Index)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 6: কণিক (14 Periods)
  // ==========================================================
  {
    id: 'top-math2-6-1',
    chapterId: 'ch-math2-6',
    name: 'কণিকের সংজ্ঞা, উপকেন্দ্র (Focus S), দ্বিকাক্ষ (Directrix M) ও উৎকেন্দ্রিকতা e (Definition of Conics & Eccentricity: SP = e PM)',
  },
  {
    id: 'top-math2-6-2',
    chapterId: 'ch-math2-6',
    name: 'পরাবৃত্ত (Parabola, e = 1): আদর্শ সমীকরণ y² = 4ax ও x² = 4ay (Parabola Standard Forms)',
  },
  {
    id: 'top-math2-6-3',
    chapterId: 'ch-math2-6',
    name: 'পরাবৃত্তের শীর্ষবিন্দু, উপকেন্দ্র, উপকেন্দ্রিক লম্বের দৈর্ঘ্য ও দ্বিকাক্ষের সমীকরণ (Parabola Focus, Vertex, Latus Rectum & Directrix)',
  },
  {
    id: 'top-math2-6-4',
    chapterId: 'ch-math2-6',
    name: 'উপবৃত্ত (Ellipse, 0 < e < 1): আদর্শ সমীকরণ x²/a² + y²/b² = 1 (Ellipse Standard Equations for a > b and b > a)',
  },
  {
    id: 'top-math2-6-5',
    chapterId: 'ch-math2-6',
    name: 'উপবৃত্তের উৎকেন্দ্রিকতা, উপকেন্দ্রদ্বয়, অক্ষদ্বয়ের দৈর্ঘ্য ও নিয়ামকের সমীকরণ (Ellipse Eccentricity, Foci, Major/Minor Axes & Directrices)',
  },
  {
    id: 'top-math2-6-6',
    chapterId: 'ch-math2-6',
    name: 'অধিবৃত্ত (Hyperbola, e > 1): আদর্শ সমীকরণ x²/a² - y²/b² = 1 (Hyperbola Standard Equations)',
  },
  {
    id: 'top-math2-6-7',
    chapterId: 'ch-math2-6',
    name: 'অধিবৃত্তের উৎকেন্দ্রিকতা, উপকেন্দ্র, শীর্ষ ও অসীমমুখী রেখা/অ্যাসিম্পটোট (Hyperbola Parameters & Asymptotes: y = ±(b/a)x)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 7: বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ (12 Periods)
  // ==========================================================
  {
    id: 'top-math2-7-1',
    chapterId: 'ch-math2-7',
    name: 'বিপরীত ত্রিকোণমিতিক ফাংশনের ধারণা ও মুখ্য মান (Inverse Trig Functions & Principal Values: sin⁻¹ x, cos⁻¹ x, tan⁻¹ x)',
  },
  {
    id: 'top-math2-7-2',
    chapterId: 'ch-math2-7',
    name: 'বিপরীত ত্রিকোণমিতিক রূপান্তর সূত্র: tan⁻¹ x ± tan⁻¹ y = tan⁻¹((x±y)/(1∓xy)) (Addition & Transformation Formulae)',
  },
  {
    id: 'top-math2-7-3',
    chapterId: 'ch-math2-7',
    name: '2 tan⁻¹ x এর রূপান্তর সূত্রাবলি (2 tan⁻¹ x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²)))',
  },
  {
    id: 'top-math2-7-4',
    chapterId: 'ch-math2-7',
    name: 'বিপরীত বৃত্তীয় ফাংশন সংবলিত অভেদাবলি প্রমাণ (Proof of Inverse Trigonometric Identities)',
  },
  {
    id: 'top-math2-7-5',
    chapterId: 'ch-math2-7',
    name: 'ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান: sin θ = 0, cos θ = 0, tan θ = 0 (General Solutions of Trig Equations)',
  },
  {
    id: 'top-math2-7-6',
    chapterId: 'ch-math2-7',
    name: 'sin θ = sin α (θ = nπ + (-1)ⁿ α), cos θ = cos α (θ = 2nπ ± α), tan θ = tan α (θ = nπ + α) (General Solutions with Non-zero Values)',
  },
  {
    id: 'top-math2-7-7',
    chapterId: 'ch-math2-7',
    name: 'a cos θ + b sin θ = c আকারের ত্রিকোণমিতিক সমীকরণ সমাধান ও নির্দিষ্ট ব্যবধিতে মান (Solving a cos θ + b sin θ = c in Intervals)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 8: স্থিতিবিদ্যা (14 Periods)
  // ==========================================================
  {
    id: 'top-math2-8-1',
    chapterId: 'ch-math2-8',
    name: 'বিন্দুতে ক্রিয়াশীল বলের সাম্যাবস্থা ও বলের সামান্তরিক সূত্র (Equilibrium of Forces Acting at a Point & Parallelogram Law)',
  },
  {
    id: 'top-math2-8-2',
    chapterId: 'ch-math2-8',
    name: 'লামির উপপাদ্য (Lami\'s Theorem: P/sin α = Q/sin β = R/sin γ) ও প্রয়োগ (Lami\'s Theorem & Applications in Equilibrium)',
  },
  {
    id: 'top-math2-8-3',
    chapterId: 'ch-math2-8',
    name: 'বলের ত্রিভুজ সূত্র ও বলের বহুভুজ সূত্র (Triangle Law & Polygon Law of Forces)',
  },
  {
    id: 'top-math2-8-4',
    chapterId: 'ch-math2-8',
    name: 'লম্বাংশ উপপাদ্য ও একাধিক বলের লব্ধি নির্ণয় (Theorem of Resolved Parts & Resultant of Coplanar Forces)',
  },
  {
    id: 'top-math2-8-5',
    chapterId: 'ch-math2-8',
    name: 'সমান্তরাল বল: সদৃশ ও বিসদৃশ সমান্তরাল বলের লব্ধির মান ও ক্রিয়াবিন্দু (Like and Unlike Parallel Forces Resultant)',
  },
  {
    id: 'top-math2-8-6',
    chapterId: 'ch-math2-8',
    name: 'বলযুগল (Couple), বলযুগলের ভ্রামক ও ভ্যারিগননের উপপাদ্য (Moment of Couple & Varignon\'s Theorem of Moments)',
  },
  {
    id: 'top-math2-8-7',
    chapterId: 'ch-math2-8',
    name: 'দৃঢ় বস্তুর ওপর ক্রিয়ারত সমতলীয় বলসমূহের সাম্যাবস্থার সাধারণ শর্তাবলি (General Conditions of Equilibrium for Coplanar Forces)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 9: সমতলে বস্তুকণার গতি (14 Periods)
  // ==========================================================
  {
    id: 'top-math2-9-1',
    chapterId: 'ch-math2-9',
    name: 'সরলরেখায় সমত্বরণে গতি: গতির সমীকরণাবলি ও প্রমাণ (Motion in a Straight Line with Uniform Acceleration: v=u+at, s=ut+½at²)',
  },
  {
    id: 'top-math2-9-2',
    chapterId: 'ch-math2-9',
    name: 't-তম সেকেন্ডে অতিক্রান্ত দূরত্ব: s_t = u + ½a(2t-1) (Distance Traversed in t-th Second)',
  },
  {
    id: 'top-math2-9-3',
    chapterId: 'ch-math2-9',
    name: 'অভিকর্ষের অধীনে উল্লম্বভাবে নিক্ষিপ্ত ও পড়ন্ত বস্তুর গতি (Vertical Motion under Gravity)',
  },
  {
    id: 'top-math2-9-4',
    chapterId: 'ch-math2-9',
    name: 'গতির লেখচিত্র: দূরত্ব-সময় ও বেগ-সময় লেখচিত্রের জ্যামিতিক প্রয়োগ (Motion Graph Analysis & Applications)',
  },
  {
    id: 'top-math2-9-5',
    chapterId: 'ch-math2-9',
    name: 'আপেক্ষিক বেগ ও সমতলে দুই বা ততোধিক বস্তুর আপেক্ষিক গতি (Relative Velocity in a Plane)',
  },
  {
    id: 'top-math2-9-6',
    chapterId: 'ch-math2-9',
    name: 'প্রাসের গতি: প্রক্ষেপণ কোণ, অনুভূমিক পাল্লা (R) ও সর্বোচ্চ উচ্চতা (H) নির্ণয় (Projectile Motion: Range, Maximum Height & Time of Flight)',
  },
  {
    id: 'top-math2-9-7',
    chapterId: 'ch-math2-9',
    name: 'সর্বোচ্চ অনুভূমিক পাল্লার শর্ত (θ = 45°) ও অনুভূমিকের সাথে যেকোনো কোণে প্রাসের গতিপথ (Maximum Horizontal Range & Trajectory Equations)',
  },

  // ==========================================================
  // HIGHER MATH 2ND PAPER - CHAPTER 10: বিস্তার পরিমাপ ও সম্ভাবনা (10 Periods)
  // ==========================================================
  {
    id: 'top-math2-10-1',
    chapterId: 'ch-math2-10',
    name: 'বিস্তার পরিমাপের ধারণা: পরিসর ও গড় ব্যবধান (Measures of Dispersion: Range & Mean Deviation)',
  },
  {
    id: 'top-math2-10-2',
    chapterId: 'ch-math2-10',
    name: 'পরিমিত ব্যবধান (Standard Deviation σ) ও ভেদাঙ্ক (Variance σ²) নির্ণয় (Standard Deviation & Variance Calculations)',
  },
  {
    id: 'top-math2-10-3',
    chapterId: 'ch-math2-10',
    name: 'বিভেদাঙ্ক (Coefficient of Variation CV) ও তথ্যের তুলনা (Coefficient of Variation & Comparison of Datasets)',
  },
  {
    id: 'top-math2-10-4',
    chapterId: 'ch-math2-10',
    name: 'সম্ভাবনার প্রাথমিক ধারণা: নমুনা ক্ষেত্র, নমুনা বিন্দু ও ঘটনা (Sample Space, Sample Points & Events)',
  },
  {
    id: 'top-math2-10-5',
    chapterId: 'ch-math2-10',
    name: 'সম্ভাবনার গাণিতিক ও পরিসাংখ্যিক সংজ্ঞা: P(A) = n(A)/n(S) (Mathematical Definition of Probability)',
  },
  {
    id: 'top-math2-10-6',
    chapterId: 'ch-math2-10',
    name: 'সম্ভাবনার যোগ বিধি ও গুণন বিধি: স্বাধীন ও অধীন ঘটনা (Addition & Multiplication Theorems of Probability)',
  },
  {
    id: 'top-math2-10-7',
    chapterId: 'ch-math2-10',
    name: 'শর্তাধীন সম্ভাবনা ও মুদ্রা/ছক্কা/তাস সম্পর্কিত গাণিতিক সমস্যা (Conditional Probability, Coins, Dice & Card Problems)',
  },
];
