export interface Chapter {
  id: number;
  name: string;
  accuracyTest: number;
  accuracyPractice: number;
  speedTest: number;
  speedPractice: number;
  coverage: number;
  comparison: number;
}

export interface OverallStats {
  accuracyTest: number;
  accuracyPractice: number;
  speedTest: number;
  speedPractice: number;
  coverage: number;
  comparison: number;
}

export interface Subject {
  id: number;
  name: string;
  color: string;
  progress: number;
  overall: OverallStats;
  chapters: Chapter[];
}
