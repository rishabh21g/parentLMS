import { StyleSheet } from 'react-native';
import colors from './root.js';

const profileStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  header: {
    backgroundColor: colors.neutral[800],
    padding: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary[600],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 3,
    borderColor: colors.primary[400],
  },
  avatarText: {
    color: colors.ui.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerInfo: {
    flex: 1,
  },
  studentName: {
    color: colors.ui.textPrimary,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  studentDetails: {
    color: colors.ui.textSecondary,
    fontSize: 16,
    marginBottom: 2,
  },
  studentId: {
    color: colors.ui.muted,
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.ui.surface,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary[600],
  },
  tabText: {
    color: colors.ui.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: colors.ui.textPrimary,
  },
  tabContent: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.ui.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    marginBottom: 16,
  },
  performanceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  performanceItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: colors.neutral[700],
    borderRadius: 8,
  },
  performanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary[400],
    marginBottom: 4,
  },
  performanceLabel: {
    fontSize: 12,
    color: colors.ui.textSecondary,
    textAlign: 'center',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    backgroundColor: colors.neutral[700],
    borderRadius: 8,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.warning,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementIconText: {
    fontSize: 20,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    marginBottom: 2,
  },
  achievementDescription: {
    fontSize: 12,
    color: colors.ui.textSecondary,
    marginBottom: 2,
  },
  achievementDate: {
    fontSize: 12,
    color: colors.ui.muted,
  },
  viewAllButton: {
    marginTop: 8,
    padding: 12,
    backgroundColor: colors.button.primary.bg,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.button.primary.border,
  },
  viewAllText: {
    color: colors.button.primary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  subjectChip: {
    backgroundColor: colors.primary[700],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  subjectChipText: {
    color: colors.ui.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  infoGrid: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.muted,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.ui.textSecondary,
    fontWeight: '600',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: colors.ui.textPrimary,
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  attendanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  attendanceCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral[700],
  },
  attendancePercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.success,
  },
  attendanceLabel: {
    fontSize: 12,
    color: colors.ui.textSecondary,
    marginTop: 2,
  },
  attendanceDetails: {
    flex: 1,
    gap: 8,
  },
  attendanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.neutral[700],
    borderRadius: 6,
  },
  attendanceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
  },
  attendanceText: {
    fontSize: 12,
    color: colors.ui.textSecondary,
  },
});

export default profileStyles;