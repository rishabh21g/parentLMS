import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import colors from '../../css/root.js';

const Profile = () => {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;
  const isTablet = width > 800;

  const [activeTab, setActiveTab] = useState('overview');

  const studentInfo = {
    name: "Alex Johnson",
    studentId: "STU2024001",
    grade: "Grade 8",
    section: "Section A",
    rollNumber: "15",
    dateOfBirth: "15/03/2010",
    parentName: "Sarah Johnson",
    contactNumber: "+1 234 567 8900",
    email: "sarah.johnson@email.com",
    address: "123 Oak Street, Springfield, IL 62701"
  };

  const academicInfo = {
    currentGrade: "8th Grade",
    academicYear: "2024-25",
    subjects: ["Maths", "English", "Science", "SST", "Hindi", "Art"],
    overallPerformance: "Excellent",
    attendance: "96%",
    totalDays: 180,
    presentDays: 173
  };

  const achievements = [
    { title: "Mathematics Excellence", date: "Oct 2024", description: "Top scorer in quarterly exam" },
    { title: "Science Fair Winner", date: "Sep 2024", description: "1st place in school science fair" },
    { title: "Perfect Attendance", date: "Aug 2024", description: "100% attendance for the month" },
  ];

  const renderOverviewTab = () => (
    <View style={styles.tabContent}>
      {/* Academic Performance Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Academic Performance</Text>
        <View style={styles.performanceGrid}>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceValue}>83%</Text>
            <Text style={styles.performanceLabel}>Overall Grade</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceValue}>96%</Text>
            <Text style={styles.performanceLabel}>Attendance</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceValue}>6</Text>
            <Text style={styles.performanceLabel}>Subjects</Text>
          </View>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceValue}>3</Text>
            <Text style={styles.performanceLabel}>Achievements</Text>
          </View>
        </View>
      </View>

      {/* Recent Achievements */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Achievements</Text>
        {achievements.slice(0, 2).map((achievement, index) => (
          <View key={index} style={styles.achievementItem}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementIconText}>🏆</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDate}>{achievement.date}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All Achievements</Text>
        </TouchableOpacity>
      </View>

      {/* Current Subjects */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Subjects</Text>
        <View style={styles.subjectsGrid}>
          {academicInfo.subjects.map((subject, index) => (
            <View key={index} style={styles.subjectChip}>
              <Text style={styles.subjectChipText}>{subject}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderPersonalTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Student Information</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Student ID</Text>
            <Text style={styles.infoValue}>{studentInfo.studentId}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Grade & Section</Text>
            <Text style={styles.infoValue}>{studentInfo.grade} - {studentInfo.section}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Roll Number</Text>
            <Text style={styles.infoValue}>{studentInfo.rollNumber}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>{studentInfo.dateOfBirth}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Parent Information</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Parent Name</Text>
            <Text style={styles.infoValue}>{studentInfo.parentName}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Contact Number</Text>
            <Text style={styles.infoValue}>{studentInfo.contactNumber}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{studentInfo.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>{studentInfo.address}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderAcademicTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Academic Details</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Current Grade</Text>
            <Text style={styles.infoValue}>{academicInfo.currentGrade}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Academic Year</Text>
            <Text style={styles.infoValue}>{academicInfo.academicYear}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Overall Performance</Text>
            <Text style={styles.infoValue}>{academicInfo.overallPerformance}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance Record</Text>
        <View style={styles.attendanceContainer}>
          <View style={styles.attendanceCircle}>
            <Text style={styles.attendancePercentage}>{academicInfo.attendance}</Text>
            <Text style={styles.attendanceLabel}>Attendance</Text>
          </View>
          <View style={styles.attendanceDetails}>
            <View style={styles.attendanceItem}>
              <Text style={styles.attendanceValue}>{academicInfo.totalDays}</Text>
              <Text style={styles.attendanceText}>Total Days</Text>
            </View>
            <View style={styles.attendanceItem}>
              <Text style={styles.attendanceValue}>{academicInfo.presentDays}</Text>
              <Text style={styles.attendanceText}>Present Days</Text>
            </View>
            <View style={styles.attendanceItem}>
              <Text style={styles.attendanceValue}>{academicInfo.totalDays - academicInfo.presentDays}</Text>
              <Text style={styles.attendanceText}>Absent Days</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>All Achievements</Text>
        {achievements.map((achievement, index) => (
          <View key={index} style={styles.achievementItem}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementIconText}>🏆</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
              <Text style={styles.achievementDate}>{achievement.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{studentInfo.name.split(' ').map(n => n[0]).join('')}</Text>
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.studentName}>{studentInfo.name}</Text>
              <Text style={styles.studentDetails}>{studentInfo.grade} • {studentInfo.section}</Text>
              <Text style={styles.studentId}>ID: {studentInfo.studentId}</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
            onPress={() => setActiveTab('overview')}
          >
            <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'personal' && styles.activeTab]}
            onPress={() => setActiveTab('personal')}
          >
            <Text style={[styles.tabText, activeTab === 'personal' && styles.activeTabText]}>
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'academic' && styles.activeTab]}
            onPress={() => setActiveTab('academic')}
          >
            <Text style={[styles.tabText, activeTab === 'academic' && styles.activeTabText]}>
              Academic
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'personal' && renderPersonalTab()}
        {activeTab === 'academic' && renderAcademicTab()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Profile;