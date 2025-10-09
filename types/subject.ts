export interface Chapter {
  id: number;
  name: string;
  accuracy: number;
  speed: number;
  coverage: number;
  comparison: number;
}

export interface OverallStats {
  accuracy: number;
  speed: number;
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
