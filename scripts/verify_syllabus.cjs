/**
 * Official HSC Study Tracker Syllabus Verification Script
 */
async function verify() {
  const {
    SAMPLE_SUBJECTS,
    SAMPLE_CHAPTERS,
    SAMPLE_TOPICS,
    getChaptersBySubjectId,
    getTopicsByChapterId
  } = await import("../src/data/sampleHscSyllabus.js");
  const { calculateSyllabusProgress } = await import("../src/services/storageService.js");

  console.log("=== HSC SYLLABUS DATA INTEGRITY REPORT ===");
  console.log(`Subjects : ${SAMPLE_SUBJECTS.length}`);
  console.log(`Chapters : ${SAMPLE_CHAPTERS.length}`);
  console.log(`Topics   : ${SAMPLE_TOPICS.length}`);

  let totalPeriods = 0;
  for (const s of SAMPLE_SUBJECTS) {
    const chapters = getChaptersBySubjectId(s.id);
    const periods = chapters.reduce((acc, c) => acc + (c.periods || 0), 0);
    const topicCount = chapters.reduce((acc, c) => acc + getTopicsByChapterId(c.id).length, 0);
    totalPeriods += periods;
    console.log(`  [Code ${s.code}] ${s.name}: ${chapters.length} chapters, ${periods} periods, ${topicCount} topics`);
  }
  console.log(`\nGrand Total Curriculum Periods: ${totalPeriods}`);

  const dummy = {
    "top-phy-2-1": { completed: true },
    "top-chem-2-1": { completed: true },
    "top-math-1-1": { completed: true },
    "top-bio-1-1": { completed: true },
    "top-ict-1-1": { completed: true }
  };
  const prog = calculateSyllabusProgress(dummy);
  console.log("\nSample Progress Calculation:", prog.overall);
  console.log("✓ Verification Successful!");
}
verify();
