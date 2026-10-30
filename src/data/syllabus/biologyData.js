/**
 * OFFICIAL NCTB HSC BIOLOGY SYLLABUS DATA (1st & 2nd Papers)
 * Code 178 (1st Paper - Botany / উদ্ভিদবিজ্ঞান, Class 11, 140 Periods)
 * Code 179 (2nd Paper - Zoology / প্রাণিবিজ্ঞান, Class 12, 140 Periods)
 * Extracted directly from official NCTB Syllabus PDF.
 */

export const BIOLOGY_SUBJECTS = [
  {
    id: 'sub-bio-1',
    name: 'Biology 1st Paper (Botany)',
    code: '178',
    accentColor: '#8C6324', // Warm Ochre
    tagBg: '#F3EDE2',
    tagText: '#614316',
    isOfficial: true,
  },
  {
    id: 'sub-bio-2',
    name: 'Biology 2nd Paper (Zoology)',
    code: '179',
    accentColor: '#7C541D', // Deep Bronze Ochre
    tagBg: '#F0E9DC',
    tagText: '#523610',
    isOfficial: true,
  },
];

export const BIOLOGY_CHAPTERS = [
  // Biology 1st Paper (Botany / উদ্ভিদবিজ্ঞান - 140 Periods Total)
  {
    id: 'ch-bio-1', // Preserved for backwards compatibility
    subjectId: 'sub-bio-1',
    chapterNumber: 1,
    periods: 25,
    name: 'Chapter 1: Cell and its Structure (কোষ ও এর গঠন)',
  },
  {
    id: 'ch-bio-2', // Preserved for backwards compatibility
    subjectId: 'sub-bio-1',
    chapterNumber: 2,
    periods: 8,
    name: 'Chapter 2: Cell Division (কোষ বিভাজন)',
  },
  {
    id: 'ch-bio1-3',
    subjectId: 'sub-bio-1',
    chapterNumber: 3,
    periods: 8,
    name: 'Chapter 3: Cell Chemistry (কোষ রসায়ন)',
  },
  {
    id: 'ch-bio1-4',
    subjectId: 'sub-bio-1',
    chapterNumber: 4,
    periods: 15,
    name: 'Chapter 4: Microorganisms (অনুজীব)',
  },
  {
    id: 'ch-bio1-5',
    subjectId: 'sub-bio-1',
    chapterNumber: 5,
    periods: 10,
    name: 'Chapter 5: Algae and Fungi (শৈবাল ও ছত্রাক)',
  },
  {
    id: 'ch-bio1-6',
    subjectId: 'sub-bio-1',
    chapterNumber: 6,
    periods: 8,
    name: 'Chapter 6: Bryophyta & Pteridophyta (ব্রায়োফাইটা ও টেরিডোফাইটা)',
  },
  {
    id: 'ch-bio1-7',
    subjectId: 'sub-bio-1',
    chapterNumber: 7,
    periods: 8,
    name: 'Chapter 7: Gymnosperms & Angiosperms (নগ্নবীজী ও আবৃতবীজী উদ্ভিদ)',
  },
  {
    id: 'ch-bio1-8',
    subjectId: 'sub-bio-1',
    chapterNumber: 8,
    periods: 7,
    name: 'Chapter 8: Tissue and Tissue System (টিস্যু ও টিস্যুতন্ত্র)',
  },
  {
    id: 'ch-bio1-9',
    subjectId: 'sub-bio-1',
    chapterNumber: 9,
    periods: 19,
    name: 'Chapter 9: Plant Physiology (উদ্ভিদ শারীরতত্ত্ব)',
  },
  {
    id: 'ch-bio1-10',
    subjectId: 'sub-bio-1',
    chapterNumber: 10,
    periods: 4,
    name: 'Chapter 10: Plant Reproduction (উদ্ভিদ প্রজনন)',
  },
  {
    id: 'ch-bio1-11',
    subjectId: 'sub-bio-1',
    chapterNumber: 11,
    periods: 10,
    name: 'Chapter 11: Biotechnology (জীবপ্রযুক্তি)',
  },
  {
    id: 'ch-bio1-12',
    subjectId: 'sub-bio-1',
    chapterNumber: 12,
    periods: 18,
    name: 'Chapter 12: Organisms Environment, Distribution & Conservation (জীবের পরিবেশ, বিস্তার ও সংরক্ষণ)',
  },

  // Biology 2nd Paper (Zoology / প্রাণিবিজ্ঞান - 140 Periods Total)
  {
    id: 'ch-bio2-1',
    subjectId: 'sub-bio-2',
    chapterNumber: 1,
    periods: 7,
    name: 'Chapter 1: Animal Diversity & Classification (প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস)',
  },
  {
    id: 'ch-bio2-2',
    subjectId: 'sub-bio-2',
    chapterNumber: 2,
    periods: 25,
    name: 'Chapter 2: Animal Introduction: Hydra, Grasshopper & Rohu Fish (প্রাণীর পরিচিতি: হাইড্রা, ঘাসফড়িং ও রুই মাছ)',
  },
  {
    id: 'ch-bio2-3',
    subjectId: 'sub-bio-2',
    chapterNumber: 3,
    periods: 11,
    name: 'Chapter 3: Human Physiology: Digestion & Absorption (মানব শারীরতত্ত্ব: পরিপাক ও শোষণ)',
  },
  {
    id: 'ch-bio2-4',
    subjectId: 'sub-bio-2',
    chapterNumber: 4,
    periods: 14,
    name: 'Chapter 4: Human Physiology: Blood & Circulation (মানব শারীরতত্ত্ব: রক্ত ও সঞ্চালন)',
  },
  {
    id: 'ch-bio2-5',
    subjectId: 'sub-bio-2',
    chapterNumber: 5,
    periods: 10,
    name: 'Chapter 5: Human Physiology: Breathing & Respiration (মানব শারীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন)',
  },
  {
    id: 'ch-bio2-6',
    subjectId: 'sub-bio-2',
    chapterNumber: 6,
    periods: 6,
    name: 'Chapter 6: Human Physiology: Excretion & Waste (মানব শারীরতত্ত্ব: বর্জ্য ও নিষ্কাশন)',
  },
  {
    id: 'ch-bio2-7',
    subjectId: 'sub-bio-2',
    chapterNumber: 7,
    periods: 12,
    name: 'Chapter 7: Human Physiology: Locomotion & Movement (মানব শারীরতত্ত্ব: চলন ও অঙ্গচালনা)',
  },
  {
    id: 'ch-bio2-8',
    subjectId: 'sub-bio-2',
    chapterNumber: 8,
    periods: 12,
    name: 'Chapter 8: Human Physiology: Coordination & Control (মানব শারীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ)',
  },
  {
    id: 'ch-bio2-9',
    subjectId: 'sub-bio-2',
    chapterNumber: 9,
    periods: 11,
    name: 'Chapter 9: Continuity of Human Life: Reproduction (মানব জীবনের ধারাবাহিকতা)',
  },
  {
    id: 'ch-bio2-10',
    subjectId: 'sub-bio-2',
    chapterNumber: 10,
    periods: 9,
    name: 'Chapter 10: Human Body Defense: Immunity (মানবদেহের প্রতিরক্ষা - ইমিউনিটি)',
  },
  {
    id: 'ch-bio2-11',
    subjectId: 'sub-bio-2',
    chapterNumber: 11,
    periods: 15,
    name: 'Chapter 11: Genetics & Evolution (জিনতত্ত্ব ও বিবর্তন)',
  },
  {
    id: 'ch-bio2-12',
    subjectId: 'sub-bio-2',
    chapterNumber: 12,
    periods: 8,
    name: 'Chapter 12: Animal Behaviour (প্রাণী আচরণ)',
  },
];

export const BIOLOGY_TOPICS = [
  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 1: কোষ ও এর গঠন (25 Periods)
  // ==========================================================
  {
    id: 'top-bio1-1-1',
    chapterId: 'ch-bio-1',
    name: 'কোষের ধারণা, প্রকারভেদ ও আদর্শ উদ্ভিদ কোষের গঠন (Cell Concept, Types & Plant Cell Structure)',
  },
  {
    id: 'top-bio1-1-2',
    chapterId: 'ch-bio-1',
    name: 'কোষ প্রাচীরের ভৌত ও রাসায়নিক গঠন এবং কাজ (Cell Wall Physical & Chemical Structure, Functions)',
  },
  {
    id: 'top-bio-1-1', // Preserved
    chapterId: 'ch-bio-1',
    name: 'প্লাজমামেমব্রেন বা কোষঝিল্লি ও ফ্লুইড মোজাইক মডেল (Fluid Mosaic Model of Cell Membrane)',
  },
  {
    id: 'top-bio1-1-4',
    chapterId: 'ch-bio-1',
    name: 'সাইটোপ্লাজম ও সাইটোপ্লাজমীয় অঙ্গাণুসমূহ: রাইবোজোম, গলজিবস্তু ও লাইসোজোম (Cytoplasm, Ribosomes, Golgi Apparatus & Lysosomes)',
  },
  {
    id: 'top-bio1-1-5',
    chapterId: 'ch-bio-1',
    name: 'এন্ডোপ্লাজমিক রেটিকুলাম ও সেন্ট্রিওল (Endoplasmic Reticulum & Centrioles)',
  },
  {
    id: 'top-bio-1-2', // Preserved
    chapterId: 'ch-bio-1',
    name: 'মাইটোকন্ড্রিয়া ও ক্লোরোপ্লাস্টের সূক্ষ্ম গঠন ও কার্যাবলি (Mitochondria & Chloroplast Ultrastructure and Functions)',
  },
  {
    id: 'top-bio1-1-7',
    chapterId: 'ch-bio-1',
    name: 'নিউক্লিয়াসের ভৌত ও রাসায়নিক গঠন: নিউক্লিয়ার মেমব্রেন, নিউক্লিওপ্লাজম ও নিউক্লিওলাস (Nucleus Ultrastructure)',
  },
  {
    id: 'top-bio1-1-8',
    chapterId: 'ch-bio-1',
    name: 'ক্রোমোজোমের বাহ্যিক ও সূক্ষ্ম গঠন এবং রাসায়নিক উপাদান (Chromosome Morphology & Chemical Composition)',
  },
  {
    id: 'top-bio-1-3', // Preserved
    chapterId: 'ch-bio-1',
    name: 'বংশগতীয় বস্তু ডিএনএ ও ওয়াটসন-ক্রিক ডাবল হেলিক্স মডেল (Watson-Crick DNA Double Helix Model & Nucleotides)',
  },
  {
    id: 'top-bio1-1-10',
    chapterId: 'ch-bio-1',
    name: 'আরএনএ (RNA) এর গঠন ও বিভিন্ন প্রকারভেদ: mRNA, tRNA, rRNA, gRNA (RNA Structure & Types)',
  },
  {
    id: 'top-bio1-1-11',
    chapterId: 'ch-bio-1',
    name: 'ডিএনএ রেপ্লিকেশন বা প্রতিলিপন: অর্ধ-সংরক্ষণশীল পদ্ধতি ও মেসেলসন-স্টাহল প্রমাণ (Semi-conservative DNA Replication)',
  },
  {
    id: 'top-bio1-1-12',
    chapterId: 'ch-bio-1',
    name: 'ট্রান্সক্রিপশন প্রক্রিয়া ও জেনেটিক কোড (Transcription Process & Genetic Code)',
  },
  {
    id: 'top-bio1-1-13',
    chapterId: 'ch-bio-1',
    name: 'ট্রান্সলেশন প্রক্রিয়া ও প্রোটিন সংশ্লেষণ (Translation Process & Protein Synthesis)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 2: কোষ বিভাজন (8 Periods)
  // ==========================================================
  {
    id: 'top-bio1-2-1',
    chapterId: 'ch-bio-2',
    name: 'কোষ বিভাজনের প্রকারভেদ: অ্যামাইটোসিস, মাইটোসিস ও মিওসিস (Types of Cell Division: Amitosis, Mitosis, Meiosis)',
  },
  {
    id: 'top-bio1-2-2',
    chapterId: 'ch-bio-2',
    name: 'কোষ চক্র (Cell Cycle: Interphase G1, S, G2 & M Phase) ও নিয়ন্ত্রণ (Cell Cycle Phases & Checkpoints)',
  },
  {
    id: 'top-bio1-2-3',
    chapterId: 'ch-bio-2',
    name: 'মাইটোসিস কোষ বিভাজনের পর্যায়সমূহ: প্রোফেজ, প্রো-মেটাফেজ, মেটাফেজ, অ্যানাফেজ ও টেলোফেজ (Mitosis Stages)',
  },
  {
    id: 'top-bio1-2-4',
    chapterId: 'ch-bio-2',
    name: 'সাইটোকাইনেসিস ও মাইটোসিসের গুরুত্ব এবং অনিয়ন্ত্রিত মাইটোসিস (ক্যান্সার ও টিউমার) (Cytokinesis & Significance of Mitosis)',
  },
  {
    id: 'top-bio1-2-5',
    chapterId: 'ch-bio-2',
    name: 'মিওসিস-১ এর প্রোফেজ-১ এর উপ-পর্যায়সমূহ: লেপ্টোটিন, জাইগোটিন, প্যাকাইটিন, ডিপ্লোটিন ও ডায়াকাইনেসিস (Meiosis Prophase-I Stages)',
  },
  {
    id: 'top-bio1-2-6',
    chapterId: 'ch-bio-2',
    name: 'ক্রসিং ওভার (Crossing Over): কৌশল, কায়াজমা সৃষ্টি ও জীববৈচিত্র্যে তাৎপর্য (Crossing Over Mechanism & Importance)',
  },
  {
    id: 'top-bio1-2-7',
    chapterId: 'ch-bio-2',
    name: 'মিওসিসের তাৎপর্য এবং মাইটোসিস ও মিওসিসের মধ্যে পার্থক্য (Significance of Meiosis & Comparison)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 3: কোষ রসায়ন (8 Periods)
  // ==========================================================
  {
    id: 'top-bio1-3-1',
    chapterId: 'ch-bio1-3',
    name: 'কার্বোহাইড্রেট বা শর্করা: শ্রেণিবিভাগ (মনোস্যাকারাইড, ডাইস্যাকারাইড, অলিগোস্যাকারাইড ও পলিস্যাকারাইড) (Carbohydrates Classification)',
  },
  {
    id: 'top-bio1-3-2',
    chapterId: 'ch-bio1-3',
    name: 'গ্লুকোজ, ফ্রুক্টোজ, সুক্রোজ, স্টার্চ ও সেলুলোজের গঠন ও ভূমিকা (Structure & Role of Glucose, Starch & Cellulose)',
  },
  {
    id: 'top-bio1-3-3',
    chapterId: 'ch-bio1-3',
    name: 'অ্যামিনো অ্যাসিড: গঠন, পেপটাইড বন্ধন ও শ্রেণিবিভাগ (Amino Acids Structure & Peptide Bond Formation)',
  },
  {
    id: 'top-bio1-3-4',
    chapterId: 'ch-bio1-3',
    name: 'প্রোটিন: সরল, যুগ্ম ও উদ্ভূত প্রোটিন এবং জৈবিক গুরুত্ব (Proteins Classification & Biological Functions)',
  },
  {
    id: 'top-bio1-3-5',
    chapterId: 'ch-bio1-3',
    name: 'লিপিড: সরল লিপিড (চর্বি ও তেল), যৌগিক লিপিড ও উৎপাদিত লিপিড (Lipids Classification & Importance)',
  },
  {
    id: 'top-bio1-3-6',
    chapterId: 'ch-bio1-3',
    name: 'এনজাইম বা উৎসেচক: বৈশিষ্ট্য, কো-এনজাইম, ক্রিয়া কৌশল ও তালা-চাবি মতবাদ (Enzyme Characteristics & Lock-and-Key Mechanism)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 4: অনুজীব (15 Periods)
  // ==========================================================
  {
    id: 'top-bio1-4-1',
    chapterId: 'ch-bio1-4',
    name: 'ভাইরাস: আবিষ্কারের ইতিহাস, ভৌত ও রাসায়নিক গঠন এবং জীব-জড় বৈশিষ্ট্য (Virus Structure & Living/Non-living Characteristics)',
  },
  {
    id: 'top-bio1-4-2',
    chapterId: 'ch-bio1-4',
    name: 'T2 ব্যাকটেরিওফাজের গঠন ও লাইটিক/লাইসোজেনিক চক্র (T2 Bacteriophage Structure & Lytic/Lysogenic Cycles)',
  },
  {
    id: 'top-bio1-4-3',
    chapterId: 'ch-bio1-4',
    name: 'মানবদেহে ভাইরাসজনিত রোগ: ডেঙ্গু, হেপাটাইটিস, পোলিও ও পেঁপের রিং স্পট রোগ (Viral Diseases: Dengue, Hepatitis, Papaya Ring Spot)',
  },
  {
    id: 'top-bio1-4-4',
    chapterId: 'ch-bio1-4',
    name: 'ব্যাকটেরিয়া: শ্রেণিবিন্যাস, আদর্শ ব্যাকটেরিয়ার গঠন ও দ্বি-ভাজন জনন (Bacteria Classification, Ultrastructure & Binary Fission)',
  },
  {
    id: 'top-bio1-4-5',
    chapterId: 'ch-bio1-4',
    name: 'কৃষি, চিকিৎসা ও শিল্পে ব্যাকটেরিয়ার অর্থনৈতিক গুরুত্ব (Economic Importance of Bacteria in Agriculture & Industry)',
  },
  {
    id: 'top-bio1-4-6',
    chapterId: 'ch-bio1-4',
    name: 'ম্যালেরিয়া পরজীবী প্লাজমোডিয়াম: জীবনচক্র (মানবদেহে হেপাটিক/এরিথ্রোসাইটিক সাইজোগনি ও মশকীর দেহে স্পোরোগনি) (Malaria Parasite Life Cycle)',
  },
  {
    id: 'top-bio1-4-7',
    chapterId: 'ch-bio1-4',
    name: 'ম্যালেরিয়ার লক্ষণ, প্রতিকার ও নিয়ন্ত্রণ ব্যবস্থা (Malaria Symptoms, Prevention & Vector Control)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 5: শৈবাল ও ছত্রাক (10 Periods)
  // ==========================================================
  {
    id: 'top-bio1-5-1',
    chapterId: 'ch-bio1-5',
    name: 'শৈবালের সাধারণ বৈশিষ্ট্য, বাসস্থান ও কোষীয় গঠন (Algae General Characteristics, Habitat & Cellular Structure)',
  },
  {
    id: 'top-bio1-5-2',
    chapterId: 'ch-bio1-5',
    name: 'ইউলোথ্রিক্স (Ulothrix): গঠন, অঙ্গজ, অযৌন ও যৌন জনন (Ulothrix Morphology & Reproduction)',
  },
  {
    id: 'top-bio1-5-3',
    chapterId: 'ch-bio1-5',
    name: 'ছত্রাকের সাধারণ বৈশিষ্ট্য, গঠন (হাইফা ও মাইসেলিয়াম) ও পুষ্টি (Fungi Characteristics, Hyphae, Mycelium & Nutrition)',
  },
  {
    id: 'top-bio1-5-4',
    chapterId: 'ch-bio1-5',
    name: 'অ্যাগারিকাস (Agaricus / মাশরুম): গঠন, জীবনচক্র ও অর্থনৈতিক গুরুত্ব (Agaricus Mushroom Morphology, Life Cycle & Cultivation)',
  },
  {
    id: 'top-bio1-5-5',
    chapterId: 'ch-bio1-5',
    name: 'ছত্রাকের ক্ষতিকর ভূমিকা ও উদ্ভিদের ছত্রাকজনিত রোগ: আলুর বিলম্বিত ধ্বসা রোগ (Late Blight of Potato)',
  },
  {
    id: 'top-bio1-5-6',
    chapterId: 'ch-bio1-5',
    name: 'লাইকেন (Lichen): গঠন, মিথোজীবিতা ও ইকোলজিক্যাল গুরুত্ব (Lichen Structure, Symbiosis & Ecological Significance)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 6: ব্রায়োফাইটা ও টেরিডোফাইটা (8 Periods)
  // ==========================================================
  {
    id: 'top-bio1-6-1',
    chapterId: 'ch-bio1-6',
    name: 'ব্রায়োফাইটার বৈশিষ্ট্য ও উভচর উদ্ভিদ হিসেবে ভূমিকা (Bryophyta General Characteristics & Amphibian Plants)',
  },
  {
    id: 'top-bio1-6-2',
    chapterId: 'ch-bio1-6',
    name: 'রিকসিয়া (Riccia): থ্যালাসের বাহ্যিক ও অভ্যন্তরীণ গঠন এবং জনন (Riccia Thallus Morphology & Reproduction)',
  },
  {
    id: 'top-bio1-6-3',
    chapterId: 'ch-bio1-6',
    name: 'টেরিডোফাইটার বৈশিষ্ট্য ও ফার্ন উদ্ভিদের পরিচিতি (Pteridophyta General Characteristics)',
  },
  {
    id: 'top-bio1-6-4',
    chapterId: 'ch-bio1-6',
    name: 'টেরিস (Pteris / ঢেঁকিশাক): স্পোরোফাইট ও গ্যামেটোফাইট (প্রোথ্যালাস) জননচক্র (Pteris Fern Life Cycle & Prothallus)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 7: নগ্নবীজী ও আবৃতবীজী উদ্ভিদ (8 Periods)
  // ==========================================================
  {
    id: 'top-bio1-7-1',
    chapterId: 'ch-bio1-7',
    name: 'নগ্নবীজী উদ্ভিদের সাধারণ বৈশিষ্ট্য ও সাইকাস (Cycas): গঠন, কোরালয়েড মূল ও পাম ফার্ন (Gymnosperms Characteristics & Cycas Coral Root)',
  },
  {
    id: 'top-bio1-7-2',
    chapterId: 'ch-bio1-7',
    name: 'আবৃতবীজী উদ্ভিদের স্বরূপ, পুষ্পমঞ্জরি ও বিভিন্ন প্রকার স্তবক (Angiosperms Characteristics & Inflorescence Types)',
  },
  {
    id: 'top-bio1-7-3',
    chapterId: 'ch-bio1-7',
    name: 'পুষ্পপত্রবিন্যাস (Aestivation) ও অমরাবিন্যাস (Placentation) এর প্রকারভেদ (Aestivation & Placentation Types)',
  },
  {
    id: 'top-bio1-7-4',
    chapterId: 'ch-bio1-7',
    name: 'মালভেসি (Malvaceae / জবা গোত্র): সনাক্তকারী বৈশিষ্ট্য, পুষ্পপ্রতীক, পুষ্পসংকেত ও অর্থনৈতিক গুরুত্ব (Malvaceae Family Characteristics & Floral Formula)',
  },
  {
    id: 'top-bio1-7-5',
    chapterId: 'ch-bio1-7',
    name: 'পোয়েসি (Poaceae / ঘাস গোত্র - ধান, গম): সনাক্তকারী বৈশিষ্ট্য, পুষ্পপ্রতীক ও পুষ্পসংকেত (Poaceae Family Characteristics & Floral Formula)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 8: টিস্যু ও টিস্যুতন্ত্র (7 Periods)
  // ==========================================================
  {
    id: 'top-bio1-8-1',
    chapterId: 'ch-bio1-8',
    name: 'ভাজক টিস্যু: বৈশিষ্ট্য, অবস্থান ও বিভাজন অনুযায়ী শ্রেণিবিভাগ (Meristematic Tissue Classification & Functions)',
  },
  {
    id: 'top-bio1-8-2',
    chapterId: 'ch-bio1-8',
    name: 'স্থায়ী টিস্যু: সরল, জটিল (জাইলেম ও ফ্লোয়েম) ও ক্ষরণকারী টিস্যু (Permanent Tissue: Xylem & Phloem)',
  },
  {
    id: 'top-bio1-8-3',
    chapterId: 'ch-bio1-8',
    name: 'টিস্যুতন্ত্রের প্রকারভেদ: এপিডার্মাল, গ্রাউন্ড ও ভাস্কুলার টিস্যুতন্ত্র (Tissue Systems: Epidermal, Ground & Vascular)',
  },
  {
    id: 'top-bio1-8-4',
    chapterId: 'ch-bio1-8',
    name: 'ভাস্কুলার বান্ডল এর প্রকারভেদ: সংযুক্ত (কোল্যাটারাল, বাইকোল্যাটারাল), অরিয় ও কেন্দ্রিক (Vascular Bundle Types: Radial, Conjoint, Concentric)',
  },
  {
    id: 'top-bio1-8-5',
    chapterId: 'ch-bio1-8',
    name: 'একবীজপত্রী উদ্ভিদের মূল ও কাণ্ডের অভ্যন্তরীণ গঠন ও প্রস্থচ্ছেদ পরীক্ষণ (Anatomy of Monocot Root and Stem)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 9: উদ্ভিদ শারীরতত্ত্ব (19 Periods)
  // ==========================================================
  {
    id: 'top-bio1-9-1',
    chapterId: 'ch-bio1-9',
    name: 'খনিজ লবণ পরিশোষণ: সক্রিয় ও নিষ্ক্রিয় পরিশোষণ মতবাদসমূহ (Mineral Salt Absorption: Active & Passive Mechanisms)',
  },
  {
    id: 'top-bio1-9-2',
    chapterId: 'ch-bio1-9',
    name: 'লুনডেগড় মতবাদ ও আয়ন পরিবাহক মতবাদ (Lundegardh Cytochrome Hypothesis & Carrier Concepts)',
  },
  {
    id: 'top-bio1-9-3',
    chapterId: 'ch-bio1-9',
    name: 'প্রস্বেদন বা বাষ্পমোচন: প্রকারভেদ, পত্ররন্ধ্রীয় প্রস্বেদন ও প্রভাবকসমূহ (Transpiration Types, Stomatal Transpiration & Factors)',
  },
  {
    id: 'top-bio1-9-4',
    chapterId: 'ch-bio1-9',
    name: 'পত্ররন্ধ্র খোলা ও বন্ধ হওয়ার কৌশল: প্রোটন প্রবাহ মতবাদ (Stomatal Mechanism: Proton-Transport Theory)',
  },
  {
    id: 'top-bio1-9-5',
    chapterId: 'ch-bio1-9',
    name: 'সালোকসংশ্লেষণ: আলোক পর্যায়, ফটোলাইসিস ও ফটোফসফোরাইলেশন (চক্রীয় ও অচক্রীয়) (Photosynthesis Light Stage & Photophosphorylation)',
  },
  {
    id: 'top-bio1-9-6',
    chapterId: 'ch-bio1-9',
    name: 'অন্ধকার পর্যায়: ক্যালভিন চক্র (C3 গতিপথ) ও হ্যাচ-স্ল্যাক চক্র (C4 গতিপথ) (Calvin C3 Cycle & Hatch-Slack C4 Pathway)',
  },
  {
    id: 'top-bio1-9-7',
    chapterId: 'ch-bio1-9',
    name: 'C3 ও C4 উদ্ভিদের মধ্যে তুলনামূলক পার্থক্য ও ক্র্যান্জ অ্যানাটমি (Comparison between C3 and C4 Plants & Kranz Anatomy)',
  },
  {
    id: 'top-bio1-9-8',
    chapterId: 'ch-bio1-9',
    name: 'শ্বসন (Respiration): সবাত শ্বসন ও অবাত শ্বসন (Aerobic and Anaerobic Respiration)',
  },
  {
    id: 'top-bio1-9-9',
    chapterId: 'ch-bio1-9',
    name: 'সবাত শ্বসনের ধাপসমূহ: গ্লাইকোলাইসিস, অ্যাসিটাইল কো-এ সৃষ্টি, ক্রেবস চক্র ও ETS (Glycolysis, Krebs Cycle & Electron Transport System)',
  },
  {
    id: 'top-bio1-9-10',
    chapterId: 'ch-bio1-9',
    name: 'সবাত শ্বসনে ATP হিসাব ও মোট শক্তি উৎপাদন (ATP Yield Calculation in Aerobic Respiration: 36/38 ATP)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 10: উদ্ভিদ প্রজনন (4 Periods)
  // ==========================================================
  {
    id: 'top-bio1-10-1',
    chapterId: 'ch-bio1-10',
    name: 'উদ্ভিদ প্রজননের প্রকারভেদ: অঙ্গজ, অযৌন ও যৌন প্রজনন (Plant Reproduction Types: Vegetative, Asexual, Sexual)',
  },
  {
    id: 'top-bio1-10-2',
    chapterId: 'ch-bio1-10',
    name: 'পুং-গ্যামেটোফাইটের উৎপত্তি ও বিকাশ: পরাগরেণু ও পরাগনালি (Development of Male Gametophyte & Pollen Grains)',
  },
  {
    id: 'top-bio1-10-3',
    chapterId: 'ch-bio1-10',
    name: 'স্ত্রী-গ্যামেটোফাইটের উৎপত্তি ও বিকাশ: ভ্রূণথলির গঠন (Development of Female Gametophyte & Embryo Sac)',
  },
  {
    id: 'top-bio1-10-4',
    chapterId: 'ch-bio1-10',
    name: 'নিষেকের প্রক্রিয়া ও দ্বি-নিষেধ (Double Fertilization & Triple Fusion) এবং পার্থেনোজেনেসিস (Parthenogenesis)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 11: জীবপ্রযুক্তি (10 Periods)
  // ==========================================================
  {
    id: 'top-bio1-11-1',
    chapterId: 'ch-bio1-11',
    name: 'টিস্যু কালচার প্রযুক্তির মূলনীতি ও ধাপসমূহ (Plant Tissue Culture Principles & Methodology)',
  },
  {
    id: 'top-bio1-11-2',
    chapterId: 'ch-bio1-11',
    name: 'কৃষি ও বনজ শিল্পে টিস্যু কালচারের ব্যবহারিক প্রয়োগ (Applications of Tissue Culture in Agriculture & Forestry)',
  },
  {
    id: 'top-bio1-11-3',
    chapterId: 'ch-bio1-11',
    name: 'রিকম্বিনেন্ট ডিএনএ প্রযুক্তি (জেনেটিক ইঞ্জিনিয়ারিং) এর মূলনীতি ও ধাপসমূহ (Recombinant DNA Technology Principles & Steps)',
  },
  {
    id: 'top-bio1-11-4',
    chapterId: 'ch-bio1-11',
    name: 'রেস্ট্রিকশন এনজাইম, প্লাজমিড ভেক্টর ও জিন ক্লোনিং (Restriction Enzymes, Plasmid Vectors & Gene Cloning)',
  },
  {
    id: 'top-bio1-11-5',
    chapterId: 'ch-bio1-11',
    name: 'ট্রান্সজেনিক উদ্ভিদ ও প্রাণী সৃষ্টি এবং জিএমও (GMO / Genetically Modified Organisms)',
  },
  {
    id: 'top-bio1-11-6',
    chapterId: 'ch-bio1-11',
    name: 'চিকিৎসা ক্ষেত্রে ইনসুলিন উৎপাদন ও ইন্টারফেরন তৈরিতে জেনেটিক ইঞ্জিনিয়ারিং (Human Insulin Production & Medical Biotech)',
  },

  // ==========================================================
  // BIOLOGY 1ST PAPER (BOTANY) - CHAPTER 12: জীবের পরিবেশ, বিস্তার ও সংরক্ষণ (18 Periods)
  // ==========================================================
  {
    id: 'top-bio1-12-1',
    chapterId: 'ch-bio1-12',
    name: 'বাস্তুতন্ত্রের উপাদান, খাদ্যশৃঙ্খল, খাদ্যজাল ও ট্রফিক লেভেল (Ecosystem Components, Food Chains & Trophic Levels)',
  },
  {
    id: 'top-bio1-12-2',
    chapterId: 'ch-bio1-12',
    name: 'ইকোলজিক্যাল পিরামিড: সংখ্যার, জীবভরের ও শক্তির পিরামিড (Ecological Pyramids: Numbers, Biomass & Energy)',
  },
  {
    id: 'top-bio1-12-3',
    chapterId: 'ch-bio1-12',
    name: 'উদ্ভিদের পরিবেশীয় অভিযোজন: জলজ (হাইড্রোফাইট), মরুজ (জেরোফাইট) ও লবণাক্ত (হ্যালোফাইট) উদ্ভিদের অভিযোজন (Plant Adaptations: Hydrophytes, Xerophytes, Halophytes)',
  },
  {
    id: 'top-bio1-12-4',
    chapterId: 'ch-bio1-12',
    name: 'বাংলাদেশের সুন্দরবন ম্যানগ্রোভ বনভূমি ও উপকূলীয় সবুজ বেষ্টনী (Sundarbans Mangrove Ecosystem & Coastal Green Belt)',
  },
  {
    id: 'top-bio1-12-5',
    chapterId: 'ch-bio1-12',
    name: 'জীববৈচিত্র্যের ধারণা, প্রকারভেদ ও হুমকি (Biodiversity Concept, Types & Threats)',
  },
  {
    id: 'top-bio1-12-6',
    chapterId: 'ch-bio1-12',
    name: 'জীববৈচিত্র্য সংরক্ষণ পদ্ধতি: ইন-সিটু (In-situ) ও এক্স-সিটু (Ex-situ) সংরক্ষণ (In-situ & Ex-situ Conservation Strategies)',
  },
  {
    id: 'top-bio1-12-7',
    chapterId: 'ch-bio1-12',
    name: 'বিলুপ্তপ্রায় জীব ও রেড ডেটা বুক (Endangered Species & IUCN Red List Categories)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 1: প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস (7 Periods)
  // ==========================================================
  {
    id: 'top-bio2-1-1',
    chapterId: 'ch-bio2-1',
    name: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাসের ভিত্তি: ভ্রূণস্তর, প্রতিসাম্যতা, সিলোম ও নটোকর্ড (Bases of Animal Classification: Germ Layers, Symmetry, Coelom, Notochord)',
  },
  {
    id: 'top-bio2-1-2',
    chapterId: 'ch-bio2-1',
    name: 'নন-কর্ডাটা পর্বসমূহ: পরিফেরা, নিডারিয়া, প্লাটিহেলমিনথিস ও নেমাটোডার সনাক্তকারী বৈশিষ্ট্য (Non-chordata Phyla Characteristics: Porifera to Nematoda)',
  },
  {
    id: 'top-bio2-1-3',
    chapterId: 'ch-bio2-1',
    name: 'নন-কর্ডাটা পর্বসমূহ: অ্যানেলিডা, আর্থ্রোপোডা, মলাস্কা ও একাইনোডার্মাটার সনাক্তকারী বৈশিষ্ট্য (Phyla: Annelida, Arthropoda, Mollusca, Echinodermata)',
  },
  {
    id: 'top-bio2-1-4',
    chapterId: 'ch-bio2-1',
    name: 'কর্ডাটা পর্বের মৌলিক বৈশিষ্ট্য ও উপপর্বসমূহ: ইউরোকর্ডাটা, সেফালোকর্ডাটা ও ভার্টিব্রাটা (Chordata Phylum & Subphyla)',
  },
  {
    id: 'top-bio2-1-5',
    chapterId: 'ch-bio2-1',
    name: 'ভার্টিব্রাটার বিভিন্ন শ্রেণির বৈশিষ্ট্য: কনড্রিকথিস, অস্টিকথিস, উভচর, সরীসৃপ, পাখি ও স্তন্যপায়ী (Classes of Vertebrata)',
  },
  {
    id: 'top-bio2-1-6',
    chapterId: 'ch-bio2-1',
    name: 'দ্বিপদ নামকরণ নীতি ও ICZN কোড (Binomial Nomenclature & ICZN Rules)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 2: প্রাণীর পরিচিতি (25 Periods)
  // ==========================================================
  {
    id: 'top-bio2-2-1',
    chapterId: 'ch-bio2-2',
    name: 'হাইড্রা (Hydra): স্বভাব, বাসস্থান ও বাহ্যিক গঠন (Hydra Habitat, Habits & External Morphology)',
  },
  {
    id: 'top-bio2-2-2',
    chapterId: 'ch-bio2-2',
    name: 'হাইড্রার দেহপ্রাচীরের কোষসমূহ: এপিডার্মিস ও গ্যাস্ট্রোডার্মিসের কোষবিন্যাস (Hydra Body Wall Cells: Epidermis & Gastrodermis)',
  },
  {
    id: 'top-bio2-2-3',
    chapterId: 'ch-bio2-2',
    name: 'নিডোসাইট কোষ ও নেমাটোসিস্টের প্রকারভেদ ও নিক্ষেপ কৌশল (Cnidocytes & Nematocyst Types and Mechanism)',
  },
  {
    id: 'top-bio2-2-4',
    chapterId: 'ch-bio2-2',
    name: 'হাইড্রার খাদ্য গ্রহণ, খাদ্য পরিপাক (বহিঃকোষীয় ও অন্তঃকোষীয় পরিপাক) ও চলন (Hydra Digestion & Locomotion: Looping, Somersaulting)',
  },
  {
    id: 'top-bio2-2-5',
    chapterId: 'ch-bio2-2',
    name: 'হাইড্রার জনন: মুকুলোদগম, দ্বি-বিভাজন ও যৌন জনন এবং মিথোজীবিতা (Hydra Reproduction & Symbiosis with Zoochlorellae)',
  },
  {
    id: 'top-bio2-2-6',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িং (Grasshopper): স্বভাব, বাসস্থান ও বাহ্যিক গঠন (Grasshopper Morphology: Head, Thorax & Abdomen)',
  },
  {
    id: 'top-bio2-2-7',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের মুখোপাঙ্গসমূহ: ল্যাব্রাম, ম্যান্ডিবল, ম্যাক্সিলা, ল্যাবিয়াম ও হাইপোফ্যারিংস (Grasshopper Mouthparts Anatomy)',
  },
  {
    id: 'top-bio2-2-8',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের পৌষ্টিকতন্ত্র ও পরিপাক প্রক্রিয়া (Grasshopper Digestive System & Digestion)',
  },
  {
    id: 'top-bio2-2-9',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের সংবহনতন্ত্র: মুক্ত সংবহন ও রক্ত সংবহন প্রক্রিয়া (Open Circulatory System of Grasshopper)',
  },
  {
    id: 'top-bio2-2-10',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের শ্বসনতন্ত্র: ট্রাকিয়ালতন্ত্র ও শ্বাসক্রিয়ার কৌশল (Grasshopper Tracheal Respiratory System)',
  },
  {
    id: 'top-bio2-2-11',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের রেচনতন্ত্র: ম্যালপিজিয়ান নালিকা (Malpighian Tubules Excretory System)',
  },
  {
    id: 'top-bio2-2-12',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের পুঞ্জাক্ষির গঠন ও ওমাটিডিয়াম (Ommatidium Structure & Mosaic Vision)',
  },
  {
    id: 'top-bio2-2-13',
    chapterId: 'ch-bio2-2',
    name: 'ঘাসফড়িংয়ের রূপান্তর: অসম্পূর্ণ রূপান্তর ও নিম্ফ দশা (Incomplete Metamorphosis & Nymph Stages)',
  },
  {
    id: 'top-bio2-2-14',
    chapterId: 'ch-bio2-2',
    name: 'রুই মাছ (Labeo rohita): স্বভাব, বাহ্যিক গঠন ও আঁইশের গঠন (Rohu Fish External Anatomy & Cycloid Scales)',
  },
  {
    id: 'top-bio2-2-15',
    chapterId: 'ch-bio2-2',
    name: 'রুই মাছের রক্ত সংবহনতন্ত্র ও একচক্রী হৃৎপিণ্ডের গঠন (Rohu Fish Circulatory System & Single Circuit Heart)',
  },
  {
    id: 'top-bio2-2-16',
    chapterId: 'ch-bio2-2',
    name: 'রুই মাছের শ্বসনতন্ত্র: ফুলকা ও শ্বাসক্রিয়ার কৌশল (Gill Respiratory System in Rohu)',
  },
  {
    id: 'top-bio2-2-17',
    chapterId: 'ch-bio2-2',
    name: 'রুই মাছের বায়ুথলি বা পটকা: গঠন ও প্লবতা রক্ষায় ভূমিকা (Air Bladder Structure & Hydrostatic Function)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 3: মানব শারীরতত্ত্ব: পরিপাক ও শোষণ (11 Periods)
  // ==========================================================
  {
    id: 'top-bio2-3-1',
    chapterId: 'ch-bio2-3',
    name: 'পরিপাকের ধারণা ও মানব পৌষ্টিকনালির বিভিন্ন অংশের গঠন (Human Alimentary Canal Anatomy)',
  },
  {
    id: 'top-bio2-3-2',
    chapterId: 'ch-bio2-3',
    name: 'মুখগহ্বরে খাদ্য পরিপাক: লালাগ্রন্থি, লালারস ও টায়ালিনের ভূমিকা (Digestion in Oral Cavity: Salivary Glands & Ptyalin)',
  },
  {
    id: 'top-bio2-3-3',
    chapterId: 'ch-bio2-3',
    name: 'পাকস্থলীতে খাদ্য পরিপাক: গ্যাস্ট্রিক রস, হাইড্রোক্লোরিক অ্যাসিড ও পেপসিন (Digestion in Stomach: Gastric Juice & Enzymes)',
  },
  {
    id: 'top-bio2-3-4',
    chapterId: 'ch-bio2-3',
    name: 'ক্ষুদ্রান্ত্রে খাদ্য পরিপাক: যকৃতের ভূমিকা, পিত্তরস ও অগ্ন্যাশয় রসের এনজাইম (Digestion in Small Intestine: Liver, Bile & Pancreatic Juice)',
  },
  {
    id: 'top-bio2-3-5',
    chapterId: 'ch-bio2-3',
    name: 'শর্করা, আমিষ ও চর্বি জাতীয় খাদ্যের রাসায়নিক পরিপাক (Chemical Digestion of Carbohydrates, Proteins & Lipids)',
  },
  {
    id: 'top-bio2-3-6',
    chapterId: 'ch-bio2-3',
    name: 'পরিপাককৃত সরল খাদ্যের শোষণ ও আত্তীকরণ: ভিলাই এর ভূমিকা (Absorption of Nutrients in Intestinal Villi & Assimilation)',
  },
  {
    id: 'top-bio2-3-7',
    chapterId: 'ch-bio2-3',
    name: 'স্থূলতা (Obesity): কারণ, স্বাস্থ্য ঝুঁকি ও BMI পরিমাপ (Obesity Causes, Risks & BMI Calculation)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 4: মানব শারীরতত্ত্ব: রক্ত ও সঞ্চালন (14 Periods)
  // ==========================================================
  {
    id: 'top-bio2-4-1',
    chapterId: 'ch-bio2-4',
    name: 'রক্তের উপাদান ও কাজ: রক্তরস (প্লাজমা) ও রক্তকণিকাসমূহ (Blood Composition: Plasma & Blood Corpuscles RBC, WBC, Platelets)',
  },
  {
    id: 'top-bio2-4-2',
    chapterId: 'ch-bio2-4',
    name: 'রক্ত তঞ্চন বা জমাট বাঁধা প্রক্রিয়া ও রক্ত জমাট না বাঁধার কারণ (Blood Clotting Mechanism & Cascades)',
  },
  {
    id: 'top-bio2-4-3',
    chapterId: 'ch-bio2-4',
    name: 'লসিকাতন্ত্র: লসিকা, লসিকাগ্রন্থি ও লসিকার কাজ (Lymphatic System: Lymph, Nodes & Functions)',
  },
  {
    id: 'top-bio2-4-4',
    chapterId: 'ch-bio2-4',
    name: 'মানব হৃৎপিণ্ডের গঠন: প্রাচীর, প্রকোষ্ঠ ও কপাটিকাসমূহ (Human Heart Anatomy: Chambers & Valves)',
  },
  {
    id: 'top-bio2-4-5',
    chapterId: 'ch-bio2-4',
    name: 'কার্ডিয়াক চক্র বা হৃদচক্র: অলিন্দ ও নিলয়ের সিস্টোল ও ডায়াস্টোল (Cardiac Cycle: Atrial & Ventricular Systole/Diastole)',
  },
  {
    id: 'top-bio2-4-6',
    chapterId: 'ch-bio2-4',
    name: 'হৃৎপিণ্ডের মায়োজেনিক নিয়ন্ত্রণ: SA নোড (পেসমেকার), AV নোড, বান্ডল অব হিজ ও পারকিঞ্জি তন্তু (Myogenic Control of Heart: SA Node, AV Node, Purkinje Fibers)',
  },
  {
    id: 'top-bio2-4-7',
    chapterId: 'ch-bio2-4',
    name: 'রক্তচাপ, ব্যারোরিসেপ্টর ও রক্ত সংবহন প্রকারভেদ: সিস্টেমিক, পালমোনারি, পোর্টাল ও করোনারি (Blood Pressure, Baroreceptors & Circulation Types)',
  },
  {
    id: 'top-bio2-4-8',
    chapterId: 'ch-bio2-4',
    name: 'হৃদরোগের লক্ষণ ও চিকিৎসা: হার্ট অ্যাটাক, এনজাইনা, ওপেন হার্ট সার্জারি, পেসমেকার ও অ্যাঞ্জিওপ্লাস্টি (Cardiovascular Diseases, Angina, Pacemaker & Angioplasty)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 5: মানব শারীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন (10 Periods)
  // ==========================================================
  {
    id: 'top-bio2-5-1',
    chapterId: 'ch-bio2-5',
    name: 'মানব শ্বসনতন্ত্রের বিভিন্ন অংশ: নাসারন্ধ্র হতে অ্যালভিওলাস পর্যন্ত গঠন (Human Respiratory System Anatomy)',
  },
  {
    id: 'top-bio2-5-2',
    chapterId: 'ch-bio2-5',
    name: 'শ্বাসক্রিয়া কৌশল: প্রশ্বাস ও নিঃশ্বাস প্রক্রিয়া এবং ডায়াফ্রামের ভূমিকা (Breathing Mechanism: Inspiration & Expiration)',
  },
  {
    id: 'top-bio2-5-3',
    chapterId: 'ch-bio2-5',
    name: 'গ্যাসীয় বিনিময়: অ্যালভিওলাসে O2 ও CO2 এর ব্যাপন প্রক্রিয়া (Gas Exchange in Alveoli)',
  },
  {
    id: 'top-bio2-5-4',
    chapterId: 'ch-bio2-5',
    name: 'রক্তে অক্সিজেন (O2) পরিবহন: ভৌত দ্রবণ ও অক্সিহিমোগ্লোবিন রূপে (Oxygen Transport in Blood)',
  },
  {
    id: 'top-bio2-5-5',
    chapterId: 'ch-bio2-5',
    name: 'রক্তে কার্বন ডাই-অক্সাইড (CO2) পরিবহন: দ্রবীভূত অবস্থা, কার্বামিনো যৌগ ও বাইকার্বনেট যৌগ রূপে (CO2 Transport in Blood)',
  },
  {
    id: 'top-bio2-5-6',
    chapterId: 'ch-bio2-5',
    name: 'ক্লোরাইড শিফট বা হ্যামবার্গার প্রক্রিয়া (Chloride Shift / Hamburger Phenomenon)',
  },
  {
    id: 'top-bio2-5-7',
    chapterId: 'ch-bio2-5',
    name: 'শ্বাসক্রিয়ার স্নায়বিক ও রাসায়নিক নিয়ন্ত্রণ (Neural & Chemical Regulation of Respiration)',
  },
  {
    id: 'top-bio2-5-8',
    chapterId: 'ch-bio2-5',
    name: 'শ্বসনতন্ত্রের সাধারণ রোগ ও ধূমপানের ক্ষতিকর প্রভাব (Respiratory Disorders & Harmful Effects of Smoking)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 6: মানব শারীরতত্ত্ব: বর্জ্য ও নিষ্কাশন (6 Periods)
  // ==========================================================
  {
    id: 'top-bio2-6-1',
    chapterId: 'ch-bio2-6',
    name: 'মানব রেচনতন্ত্রের গঠন: বৃক্ক বা কিডনির বাহ্যিক ও লম্বচ্ছেদ গঠন (Human Excretory System & Kidney Anatomy)',
  },
  {
    id: 'top-bio2-6-2',
    chapterId: 'ch-bio2-6',
    name: 'নেফ্রন: বৃক্কের গঠন ও কাজের একক এবং ম্যালপিজিয়ান বডি ও রেনাল নালিকার সূক্ষ্ম গঠন (Nephron Ultrastructure: Bowman\'s Capsule, Glomerulus, Loop of Henle)',
  },
  {
    id: 'top-bio2-6-3',
    chapterId: 'ch-bio2-6',
    name: 'মূত্র সৃষ্টি প্রক্রিয়া: অতিপরিস্রাবণ, সক্রিয় পুনঃশোষণ ও সক্রিয় ক্ষরণ (Urine Formation Mechanism: Ultrafiltration, Reabsorption, Secretion)',
  },
  {
    id: 'top-bio2-6-4',
    chapterId: 'ch-bio2-6',
    name: 'বৃক্কের অসমোরেগুলেশন ভূমিকা ও হরমোনের প্রভাব (ADH ও অ্যালডোস্টেরন) (Osmoregulation Role of Kidney & Hormones ADH/Aldosterone)',
  },
  {
    id: 'top-bio2-6-5',
    chapterId: 'ch-bio2-6',
    name: 'বৃক্ক বিকল, ডায়ালাইসিস (হিমোডায়ালাইসিস ও পেরিটোনিয়াল ডায়ালাইসিস) এবং কিডনি প্রতিস্থাপন (Kidney Failure, Dialysis & Renal Transplantation)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 7: মানব শারীরতত্ত্ব: চলন ও অঙ্গচালনা (12 Periods)
  // ==========================================================
  {
    id: 'top-bio2-7-1',
    chapterId: 'ch-bio2-7',
    name: 'মানব কঙ্কালতন্ত্রের প্রধান অংশসমূহ: অক্ষীয় কঙ্কাল (করোটিকা, মেরুদণ্ড, বক্ষপিঞ্জর) (Axial Skeleton: Skull, Vertebral Column, Ribs)',
  },
  {
    id: 'top-bio2-7-2',
    chapterId: 'ch-bio2-7',
    name: 'উপাঙ্গীয় কঙ্কাল: বক্ষ-অস্থিচক্র, বাহু, শ্রোণি-অস্থিচক্র ও পা এর অস্থিসমূহ (Appendicular Skeleton: Girdles & Limbs Bones)',
  },
  {
    id: 'top-bio2-7-3',
    chapterId: 'ch-bio2-7',
    name: 'অস্থি ও তরুণাস্থির সূক্ষ্ম গঠন এবং হ্যাভারশিয়ান তন্ত্র (Bone, Cartilage Ultrastructure & Haversian System)',
  },
  {
    id: 'top-bio2-7-4',
    chapterId: 'ch-bio2-7',
    name: 'অস্থিসন্ধি: সাইনোভিয়াল অস্থিসন্ধির গঠন ও প্রকারভেদ (কব্জা, বল ও কোটর সন্ধি) (Synovial Joint Anatomy & Types)',
  },
  {
    id: 'top-bio2-7-5',
    chapterId: 'ch-bio2-7',
    name: 'পেশি টিস্যু: ঐচ্ছিক, অনৈচ্ছিক ও হৃদপেশির গঠন ও পার্থক্য (Muscular Tissue: Striated, Smooth & Cardiac Muscle)',
  },
  {
    id: 'top-bio2-7-6',
    chapterId: 'ch-bio2-7',
    name: 'ঐচ্ছিক পেশির সংকোচন কৌশল: স্লাইডিং ফিলামেন্ট তত্ত্ব (Muscle Contraction: Sliding Filament Theory)',
  },
  {
    id: 'top-bio2-7-7',
    chapterId: 'ch-bio2-7',
    name: 'অস্থিভঙ্গ ও প্রাথমিক চিকিৎসা (Fractures, Dislocation, Sprain & First Aid)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 8: মানব শারীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ (12 Periods)
  // ==========================================================
  {
    id: 'top-bio2-8-1',
    chapterId: 'ch-bio2-8',
    name: 'স্নায়ুতন্ত্রের শ্রেণিবিভাগ ও নিউরনের সূক্ষ্ম গঠন (Nervous System Classification & Neuron Anatomy)',
  },
  {
    id: 'top-bio2-8-2',
    chapterId: 'ch-bio2-8',
    name: 'সাইন্যাপস ও স্নায়ু উদ্দীপনা পরিবহন কৌশল (Synapse Structure & Nerve Impulse Transmission)',
  },
  {
    id: 'top-bio2-8-3',
    chapterId: 'ch-bio2-8',
    name: 'মানব মস্তিষ্ক: অগ্রমস্তিষ্ক (সেরিব্রাম), মধ্যমস্তিষ্ক ও পশ্চাৎমস্তিষ্ক (সেরিবেলাম, মেডুলা অবলংগাটা) (Human Brain Anatomy & Functions)',
  },
  {
    id: 'top-bio2-8-4',
    chapterId: 'ch-bio2-8',
    name: 'সুষুম্নাকাণ্ড ও প্রতিবর্ত ক্রিয়া (Spinal Cord & Reflex Action / Reflex Arc)',
  },
  {
    id: 'top-bio2-8-5',
    chapterId: 'ch-bio2-8',
    name: 'করোটিক স্নায়ুসমূহ: ১২ জোড়া স্নায়ুর নাম, প্রকৃতি ও বিস্তার (12 Pairs of Cranial Nerves: Names, Nature & Functions)',
  },
  {
    id: 'top-bio2-8-6',
    chapterId: 'ch-bio2-8',
    name: 'সংবেদী অঙ্গ: চোখের লম্বচ্ছেদ গঠন ও দর্শন কৌশল (Human Eye Anatomy & Vision Mechanism)',
  },
  {
    id: 'top-bio2-8-7',
    chapterId: 'ch-bio2-8',
    name: 'সংবেদী অঙ্গ: কানের গঠন, শ্রবণ কৌশল ও দেহের ভারসাম্য রক্ষা (Human Ear Anatomy, Hearing Mechanism & Body Equilibrium)',
  },
  {
    id: 'top-bio2-8-8',
    chapterId: 'ch-bio2-8',
    name: 'অন্তঃক্ষরা গ্রন্থিসমূহ ও হরমোন: পিটুইটারি, থাইরয়েড, প্যারাথাইরয়েড, অ্যাড্রেনাল ও অগ্ন্যাশয় (Endocrine Glands & Hormones)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 9: মানব জীবনের ধারাবাহিকতা (11 Periods)
  // ==========================================================
  {
    id: 'top-bio2-9-1',
    chapterId: 'ch-bio2-9',
    name: 'পুরুষ প্রজননতন্ত্রের বিভিন্ন অংশের গঠন ও কাজ (Male Reproductive System Anatomy & Functions)',
  },
  {
    id: 'top-bio2-9-2',
    chapterId: 'ch-bio2-9',
    name: 'স্ত্রী প্রজননতন্ত্রের বিভিন্ন অংশের গঠন ও কাজ (Female Reproductive System Anatomy & Functions)',
  },
  {
    id: 'top-bio2-9-3',
    chapterId: 'ch-bio2-9',
    name: 'গ্যামেটোজেনেসিস: স্পার্মাটোজেনেসিস ও উওজেনেসিস প্রক্রিয়া (Gametogenesis: Spermatogenesis & Oogenesis)',
  },
  {
    id: 'top-bio2-9-4',
    chapterId: 'ch-bio2-9',
    name: 'ঋতুচক্র বা মাসিক চক্র ও হরমোনের ভূমিকা (Menstrual Cycle Stages & Hormonal Regulation)',
  },
  {
    id: 'top-bio2-9-5',
    chapterId: 'ch-bio2-9',
    name: 'নিষেক (Fertilization) ও জাইগোট গঠন (Fertilization Mechanism & Cleavage Stages)',
  },
  {
    id: 'top-bio2-9-6',
    chapterId: 'ch-bio2-9',
    name: 'ভ্রূণীয় বিকাশ: মোরুলা, ব্লাস্টোলা, গ্যাস্ট্রুলা ও তিন ভ্রূণস্তর সৃষ্টি (Embryonic Development: Morula, Blastula, Gastrula)',
  },
  {
    id: 'top-bio2-9-7',
    chapterId: 'ch-bio2-9',
    name: 'অমরা বা প্লাসেন্টার গঠন ও কাজ (Placenta Formation, Functions & Endocrine Role)',
  },
  {
    id: 'top-bio2-9-8',
    chapterId: 'ch-bio2-9',
    name: 'যৌনবাহিত রোগসমূহ: সিফিলিস, গনোরিয়া ও এইডস (STDs: Syphilis, Gonorrhea & AIDS Causes and Prevention)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 10: মানবদেহের প্রতিরক্ষা - ইমিউনিটি (9 Periods)
  // ==========================================================
  {
    id: 'top-bio2-10-1',
    chapterId: 'ch-bio2-10',
    name: 'প্রতিরক্ষা ব্যবস্থার ধারণা ও মানবদেহের প্রতিরক্ষা স্তরসমূহ (Human Defense System Overview & Three Lines of Defense)',
  },
  {
    id: 'top-bio2-10-2',
    chapterId: 'ch-bio2-10',
    name: 'প্রথম প্রতিরক্ষা স্তর: ত্বক, চোখের পানি, মিউকাস মেমব্রেন ও পাকস্থলীর অ্যাসিড (First Line of Defense: Physical & Chemical Barriers)',
  },
  {
    id: 'top-bio2-10-3',
    chapterId: 'ch-bio2-10',
    name: 'দ্বিতীয় প্রতিরক্ষা স্তর: ফ্যাগোসাইটোসিস, ম্যাক্রোফেজ, প্রদাহ প্রতিক্রিয়া ও ইন্টারফেরন (Second Line of Defense: Phagocytosis & Inflammation)',
  },
  {
    id: 'top-bio2-10-4',
    chapterId: 'ch-bio2-10',
    name: 'তৃতীয় প্রতিরক্ষা স্তর: অ্যান্টিজেন ও অর্জিত অনাক্রম্যতা (Third Line of Defense: Specific Immunity & Antigens)',
  },
  {
    id: 'top-bio2-10-5',
    chapterId: 'ch-bio2-10',
    name: 'অ্যান্টিবডি: গঠন (Y-আকৃতির কাঠামো) ও প্রকারভেদ: IgG, IgM, IgA, IgD, IgE (Antibody Ultrastructure & Classes)',
  },
  {
    id: 'top-bio2-10-6',
    chapterId: 'ch-bio2-10',
    name: 'অ্যান্টিজেন-অ্যান্টিবডি অন্তর্বর্তী বিক্রিয়া (Antigen-Antibody Reaction & Neutralization)',
  },
  {
    id: 'top-bio2-10-7',
    chapterId: 'ch-bio2-10',
    name: 'টিকা বা ভ্যাকসিনেশন: প্রকারভেদ ও রোগ প্রতিরোধে টিকার গুরুত্ব (Vaccines Types & Immunization Schedule)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 11: জিনতত্ত্ব ও বিবর্তন (15 Periods)
  // ==========================================================
  {
    id: 'top-bio2-11-1',
    chapterId: 'ch-bio2-11',
    name: 'জিনতত্ত্বের পরিভাষা: জিন, অ্যালিল, লোকাস, হোমোজাইগাস, হেটারোজাইগাস, ফিনোটাইপ ও জিনোটাইপ (Genetics Terminology)',
  },
  {
    id: 'top-bio2-11-2',
    chapterId: 'ch-bio2-11',
    name: 'মেন্ডেলের ১ম সূত্র (পৃথকীকরণ সূত্র - ৩:১ অনুপাত) ও প্রমাণ (Mendel\'s First Law: Law of Segregation)',
  },
  {
    id: 'top-bio2-11-3',
    chapterId: 'ch-bio2-11',
    name: 'মেন্ডেলের ১ম সূত্রের ব্যতিক্রম: অসম্পূর্ণ প্রকটতা (১:২:১), সমপ্রকটতা (১:২:১) ও লিথাল জিন (২:১) (Deviations from Mendel\'s First Law)',
  },
  {
    id: 'top-bio2-11-4',
    chapterId: 'ch-bio2-11',
    name: 'মেন্ডেলের ২য় সূত্র (স্বাধীন সঞ্চারণ সূত্র - ৯:৩:৩:১ অনুপাত) (Mendel\'s Second Law: Independent Assortment)',
  },
  {
    id: 'top-bio2-11-5',
    chapterId: 'ch-bio2-11',
    name: 'মেন্ডেলের ২য় সূত্রের ব্যতিক্রম: পরিপূরক জিন (৯:৭), এপিস্ট্যাসিস (১৩:৩ ও ৯:৭) (Epistasis & Complementary Genes)',
  },
  {
    id: 'top-bio2-11-6',
    chapterId: 'ch-bio2-11',
    name: 'মানুষের লিঙ্গ নির্ধারণ নীতি: XX-XY পদ্ধতি (Sex Determination in Humans)',
  },
  {
    id: 'top-bio2-11-7',
    chapterId: 'ch-bio2-11',
    name: 'সেক্স-লিঙ্কড বংশগতি ও রোগ: বর্ণান্ধতা, হিমোফিলিয়া ও ডুসেন মাসকুলার ডিসট্রফি (Sex-linked Inheritance: Hemophilia & Color Blindness)',
  },
  {
    id: 'top-bio2-11-8',
    chapterId: 'ch-bio2-11',
    name: 'ABO রক্তের গ্রুপ ও আরএইচ (Rh) ফ্যাক্টর এবং গর্ভধারণে জটিলতা (Erythroblastosis Fetalis) (Blood Groups & Rh Incompatibility)',
  },
  {
    id: 'top-bio2-11-9',
    chapterId: 'ch-bio2-11',
    name: 'জৈব বিবর্তন: ল্যামার্কিজম ও ডারউইনিজমের প্রাকৃতিক নির্বাচন মতবাদ (Organic Evolution: Lamarckism & Darwinism Natural Selection)',
  },
  {
    id: 'top-bio2-11-10',
    chapterId: 'ch-bio2-11',
    name: 'বিবর্তনের পক্ষে প্রমাণসমূহ: সমসংস্থ ও সমবৃত্তীয় অঙ্গ এবং জীবাশ্ম প্রমাণ (Evidences for Evolution: Homologous, Analogous Organs & Fossils)',
  },

  // ==========================================================
  // BIOLOGY 2ND PAPER (ZOOLOGY) - CHAPTER 12: প্রাণী আচরণ (8 Periods)
  // ==========================================================
  {
    id: 'top-bio2-12-1',
    chapterId: 'ch-bio2-12',
    name: 'প্রাণী আচরণের ধারণা: সহজাত আচরণ ও অর্জিত আচরণ (Animal Behaviour Concept: Innate Behaviour & Learned Behaviour)',
  },
  {
    id: 'top-bio2-12-2',
    chapterId: 'ch-bio2-12',
    name: 'সহজাত আচরণের বৈশিষ্ট্য: ট্যাক্সিস, রিফ্লেক্স ও FAP (Fixed Action Pattern) (Innate Behaviour: Taxis, Reflexes & FAP)',
  },
  {
    id: 'top-bio2-12-3',
    chapterId: 'ch-bio2-12',
    name: 'শিক্ষালব্ধ আচরণ: অভ্যাসগতকরণ (Habituation), অনুকরণ (Imprinting) ও সাপেক্ষীকরণ (Conditioning) (Learned Behaviour: Pavlov\'s Conditioning)',
  },
  {
    id: 'top-bio2-12-4',
    chapterId: 'ch-bio2-12',
    name: 'সামাজিক আচরণ: মৌমাছির শ্রমবণ্টন ও নৃত্য ভাষা (Social Behaviour: Honeybee Division of Labour & Waggle Dance)',
  },
  {
    id: 'top-bio2-12-5',
    chapterId: 'ch-bio2-12',
    name: 'প্রাণীর পরিযান বা মাইগ্রেশন: পাখি ও মাছের পরিযায়ী আচরণ (Animal Migration: Migratory Birds & Fishes)',
  },
  {
    id: 'top-bio2-12-6',
    chapterId: 'ch-bio2-12',
    name: 'পরার্থপরতা বা অ্যালট্রুইজম (Altruism): কিন সিলেকশন ও দলগত স্বার্থ (Altruism & Kin Selection)',
  },
];
