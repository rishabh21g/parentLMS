import { PerformanceStats } from "./performanceStats";
import { UserProfile } from "./user";

export interface ApiResponse {
  user: UserProfile;
  performance: PerformanceStats;
}