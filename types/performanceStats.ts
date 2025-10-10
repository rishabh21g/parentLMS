import { ReactElement } from "react";

export interface PerformanceStats {
  coverage: number;
  speed: number;
  accuracy: number;
  overallRating: number;
}

 export interface StatItem {
  name :string
   label: string;
   value: number;
   color: string;
   icon: ReactElement;
  
 }