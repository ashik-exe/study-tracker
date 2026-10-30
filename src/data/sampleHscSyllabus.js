/**
 * OFFICIAL HSC SYLLABUS DATA (BANGLADESH NCTB CURRICULUM)
 * 
 * Hierarchical Architecture:
 * Subject → Paper → Chapter → Period/Topic → Completion Status
 * 
 * Disciplines covered:
 * 1. Physics (1st Paper Code 174, 2nd Paper Code 175)
 * 2. Chemistry (1st Paper Code 176, 2nd Paper Code 177)
 * 3. Higher Mathematics (1st Paper Code 265, 2nd Paper Code 266)
 * 4. Biology (1st Paper Botany Code 178, 2nd Paper Zoology Code 179)
 * 5. ICT - Information & Communication Technology (Unified Code 275)
 * 6. English (1st Paper Code 107 - Prototype retained)
 */

import { PHYSICS_SUBJECTS, PHYSICS_CHAPTERS, PHYSICS_TOPICS } from './syllabus/physicsData.js';
import { CHEMISTRY_SUBJECTS, CHEMISTRY_CHAPTERS, CHEMISTRY_TOPICS } from './syllabus/chemistryData.js';
import { HIGHER_MATH_SUBJECTS, HIGHER_MATH_CHAPTERS, HIGHER_MATH_TOPICS } from './syllabus/higherMathData.js';
import { BIOLOGY_SUBJECTS, BIOLOGY_CHAPTERS, BIOLOGY_TOPICS } from './syllabus/biologyData.js';
import { ICT_SUBJECTS, ICT_CHAPTERS, ICT_TOPICS } from './syllabus/ictData.js';
import { BANGLA_SUBJECTS, BANGLA_CHAPTERS, BANGLA_TOPICS } from './syllabus/banglaData.js';
import { ENGLISH_SUBJECTS, ENGLISH_CHAPTERS, ENGLISH_TOPICS } from './syllabus/englishData.js';

export const IS_SAMPLE_SYLLABUS = false;

export const SYLLABUS_METADATA = {
  curriculum: 'HSC Bangladesh (National Curriculum & Textbook Board)',
  academicYear: '2025-2026',
  officialSubjects: [
    'sub-ban-1',
    'sub-ban-2',
    'sub-eng-1',
    'sub-eng-2',
    'sub-phy-1',
    'sub-phy-2',
    'sub-chem-1',
    'sub-chem-2',
    'sub-math-1',
    'sub-math-2',
    'sub-bio-1',
    'sub-bio-2',
    'sub-ict',
  ],
  disclaimer: 'Bangla, English, Physics, Chemistry, Higher Mathematics, Biology (1st & 2nd Papers) and ICT syllabi are 100% verified and extracted from official NCTB curriculum documents.',
};

/**
 * PARENT SUBJECT HIERARCHY (Subject → Papers)
 */
export const HSC_SUBJECTS = [
  {
    id: 'subj-bangla',
    name: 'Bangla',
    bengaliName: 'বাংলা',
    accentColor: '#9B3C3C',
    tagBg: '#F7EBEB',
    tagText: '#6B2424',
    isOfficial: true,
    papers: [
      {
        ...BANGLA_SUBJECTS[0],
        subjectGroupId: 'subj-bangla',
        paperNumber: 1,
        paperLabel: '1st Paper',
        bengaliPaperLabel: '১ম পত্র',
      },
      {
        ...BANGLA_SUBJECTS[1],
        subjectGroupId: 'subj-bangla',
        paperNumber: 2,
        paperLabel: '2nd Paper',
        bengaliPaperLabel: '২য় পত্র',
      },
    ],
  },
  {
    id: 'subj-english',
    name: 'English',
    bengaliName: 'ইংরেজি',
    accentColor: '#2E5A88',
    tagBg: '#EAF0F6',
    tagText: '#1A3E63',
    isOfficial: true,
    papers: [
      {
        ...ENGLISH_SUBJECTS[0],
        subjectGroupId: 'subj-english',
        paperNumber: 1,
        paperLabel: '1st Paper',
        bengaliPaperLabel: '১ম পত্র',
      },
      {
        ...ENGLISH_SUBJECTS[1],
        subjectGroupId: 'subj-english',
        paperNumber: 2,
        paperLabel: '2nd Paper',
        bengaliPaperLabel: '২য় পত্র',
      },
    ],
  },
  {
    id: 'subj-physics',
    name: 'Physics',
    bengaliName: 'পদার্থবিজ্ঞান',
    accentColor: '#3C4B39',
    tagBg: '#E7ECE3',
    tagText: '#2B3728',
    isOfficial: true,
    papers: [
      {
        ...PHYSICS_SUBJECTS[0],
        subjectGroupId: 'subj-physics',
        paperNumber: 1,
        paperLabel: '1st Paper',
        bengaliPaperLabel: '১ম পত্র',
      },
      {
        ...PHYSICS_SUBJECTS[1],
        subjectGroupId: 'subj-physics',
        paperNumber: 2,
        paperLabel: '2nd Paper',
        bengaliPaperLabel: '২য় পত্র',
      },
    ],
  },
  {
    id: 'subj-chemistry',
    name: 'Chemistry',
    bengaliName: 'রসায়ন',
    accentColor: '#2B5740',
    tagBg: '#E2EBE5',
    tagText: '#1E402F',
    isOfficial: true,
    papers: [
      {
        ...CHEMISTRY_SUBJECTS[0],
        subjectGroupId: 'subj-chemistry',
        paperNumber: 1,
        paperLabel: '1st Paper',
        bengaliPaperLabel: '১ম পত্র',
      },
      {
        ...CHEMISTRY_SUBJECTS[1],
        subjectGroupId: 'subj-chemistry',
        paperNumber: 2,
        paperLabel: '2nd Paper',
        bengaliPaperLabel: '২য় পত্র',
      },
    ],
  },
  {
    id: 'subj-higher-math',
    name: 'Higher Mathematics',
    bengaliName: 'উচ্চতর গণিত',
    accentColor: '#474D5E',
    tagBg: '#E6E9F0',
    tagText: '#2C3242',
    isOfficial: true,
    papers: [
      {
        ...HIGHER_MATH_SUBJECTS[0],
        subjectGroupId: 'subj-higher-math',
        paperNumber: 1,
        paperLabel: '1st Paper',
        bengaliPaperLabel: '১ম পত্র',
      },
      {
        ...HIGHER_MATH_SUBJECTS[1],
        subjectGroupId: 'subj-higher-math',
        paperNumber: 2,
        paperLabel: '2nd Paper',
        bengaliPaperLabel: '২য় পত্র',
      },
    ],
  },
  {
    id: 'subj-biology',
    name: 'Biology',
    bengaliName: 'জীববিজ্ঞান',
    accentColor: '#8C6324',
    tagBg: '#F3EDE2',
    tagText: '#614316',
    isOfficial: true,
    papers: [
      {
        ...BIOLOGY_SUBJECTS[0],
        subjectGroupId: 'subj-biology',
        paperNumber: 1,
        paperLabel: '1st Paper (Botany)',
        bengaliPaperLabel: '১ম পত্র (উদ্ভিদবিজ্ঞান)',
      },
      {
        ...BIOLOGY_SUBJECTS[1],
        subjectGroupId: 'subj-biology',
        paperNumber: 2,
        paperLabel: '2nd Paper (Zoology)',
        bengaliPaperLabel: '২য় পত্র (প্রাণিবিজ্ঞান)',
      },
    ],
  },
  {
    id: 'subj-ict',
    name: 'ICT',
    bengaliName: 'তথ্য ও যোগাযোগ প্রযুক্তি',
    accentColor: '#2B5756',
    tagBg: '#E2EBEA',
    tagText: '#1C3C3B',
    isOfficial: true,
    papers: [
      {
        ...ICT_SUBJECTS[0],
        subjectGroupId: 'subj-ict',
        paperNumber: 1,
        paperLabel: 'Unified Paper',
        bengaliPaperLabel: 'একক পত্র',
      },
    ],
  },
];

/**
 * Flat paper-level list preserved for backwards compatibility
 */
export const SAMPLE_SUBJECTS = HSC_SUBJECTS.flatMap((s) => s.papers);

export const SAMPLE_CHAPTERS = [
  ...BANGLA_CHAPTERS,
  ...ENGLISH_CHAPTERS,
  ...PHYSICS_CHAPTERS,
  ...CHEMISTRY_CHAPTERS,
  ...HIGHER_MATH_CHAPTERS,
  ...BIOLOGY_CHAPTERS,
  ...ICT_CHAPTERS,
];

export const SAMPLE_TOPICS = [
  ...BANGLA_TOPICS,
  ...ENGLISH_TOPICS,
  ...PHYSICS_TOPICS,
  ...CHEMISTRY_TOPICS,
  ...HIGHER_MATH_TOPICS,
  ...BIOLOGY_TOPICS,
  ...ICT_TOPICS,
];

// Helper Query Functions
export const getSubjectGroups = () => HSC_SUBJECTS;

export const getSubjectGroupById = (id) => 
  HSC_SUBJECTS.find((s) => s.id === id);

export const getSubjectGroupByPaperId = (paperId) => 
  HSC_SUBJECTS.find((s) => s.papers.some((p) => p.id === paperId)) || HSC_SUBJECTS[0];

export const getPapersBySubjectGroupId = (groupId) => {
  const group = HSC_SUBJECTS.find((s) => s.id === groupId);
  return group ? group.papers : [];
};

export const getPaperById = (paperId) => 
  SAMPLE_SUBJECTS.find((s) => s.id === paperId);

export const getSubjectById = (id) => {
  // Support looking up either paper ID or parent subject ID
  const paperMatch = SAMPLE_SUBJECTS.find((s) => s.id === id);
  if (paperMatch) return paperMatch;
  return HSC_SUBJECTS.find((s) => s.id === id);
};

export const getChapterById = (id) => SAMPLE_CHAPTERS.find((c) => c.id === id);
export const getTopicById = (id) => SAMPLE_TOPICS.find((t) => t.id === id);

export const getChaptersBySubjectId = (subjectId) => {
  // If a parent subject ID is passed (e.g. 'subj-physics'), return all chapters of that subject
  const group = HSC_SUBJECTS.find((s) => s.id === subjectId);
  if (group) {
    const paperIds = new Set(group.papers.map((p) => p.id));
    return SAMPLE_CHAPTERS.filter((c) => paperIds.has(c.subjectId));
  }
  // Otherwise filter by specific paperId
  return SAMPLE_CHAPTERS.filter((c) => c.subjectId === subjectId);
};

export const getChaptersByPaperId = (paperId) => 
  SAMPLE_CHAPTERS.filter((c) => c.subjectId === paperId);

export const getTopicsByChapterId = (chapterId) => 
  SAMPLE_TOPICS.filter((t) => t.chapterId === chapterId);
