import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../css/root.js'

const Home = () => {
  const subjects = [
    { id: 1, name: 'Maths', progress: 85, color: colors.primary[500] },
    { id: 2, name: 'English', progress: 72, color: colors.secondary[500] },
    { id: 3, name: 'Science', progress: 91, color: colors.warning },
    { id: 4, name: 'SST', progress: 68, color: colors.primary[400] },
    { id: 5, name: 'Hindi', progress: 79, color: colors.danger },
    { id: 6, name: 'Art', progress: 95, color: colors.secondary[400] },
  ]

  const recentActivity = [
    { subject: 'Maths', chapter: 'Algebra', completed: true },
    { subject: 'Science', chapter: 'Physics Laws', completed: false },
    { subject: 'English', chapter: 'Grammar', completed: true },
  ]

  return (
    <ScrollView style={styles.container}>
      {/* Header with Student Profile */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.studentName}>Student Name</Text>
            <Text style={styles.grade}>Grade 8 - Section A</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Overall Progress */}
      <View style={styles.overallStatsCard}>
        <Text style={styles.cardTitle}>Overall Progress</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>83%</Text>
          </View>
          <View style={styles.statsInfo}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>Subjects</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>42</Text>
              <Text style={styles.statLabel}>Chapters</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>35</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Subjects Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subjects</Text>
        <View style={styles.subjectsGrid}>
          {subjects.map((subject) => (
            <TouchableOpacity key={subject.id} style={styles.subjectCard}>
              <View style={[styles.subjectIcon, { backgroundColor: subject.color }]}>
                <Text style={styles.subjectIconText}>{subject.name[0]}</Text>
              </View>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${subject.progress}%`, backgroundColor: subject.color }
                  ]} 
                />
              </View>
              <Text style={styles.progressPercentage}>{subject.progress}%</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {recentActivity.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={[
                styles.activityStatus, 
                { backgroundColor: activity.completed ? colors.success : colors.warning }
              ]} />
              <View style={styles.activityContent}>
                <Text style={styles.activitySubject}>{activity.subject}</Text>
                <Text style={styles.activityChapter}>{activity.chapter}</Text>
              </View>
              <Text style={[
                styles.activityStatusText,
                { color: activity.completed ? colors.success : colors.warning }
              ]}>
                {activity.completed ? 'Completed' : 'In Progress'}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View All Subjects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={styles.secondaryButtonText}>Performance Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  header: {
    backgroundColor: colors.neutral[800],
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary[600],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
    borderColor: colors.primary[400],
  },
  avatarText: {
    color: colors.ui.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  studentName: {
    color: colors.ui.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  grade: {
    color: colors.ui.textSecondary,
    fontSize: 14,
  },
  profileButton: {
    backgroundColor: colors.button.primary.bg,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.button.primary.border,
  },
  profileButtonText: {
    color: colors.button.primary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  overallStatsCard: {
    backgroundColor: colors.ui.surface,
    margin: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    marginBottom: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: colors.ui.surface,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
  },
  statsInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.ui.muted,
    marginTop: 2,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    marginBottom: 15,
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subjectCard: {
    backgroundColor: colors.ui.surface,
    width: '48%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  subjectIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectIconText: {
    color: colors.ui.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subjectName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
    marginBottom: 8,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: colors.neutral[600],
    borderRadius: 3,
    marginBottom: 5,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressPercentage: {
    fontSize: 12,
    color: colors.ui.muted,
  },
  activityList: {
    backgroundColor: colors.ui.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.default,
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.muted,
  },
  activityStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activitySubject: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.ui.textPrimary,
  },
  activityChapter: {
    fontSize: 12,
    color: colors.ui.textSecondary,
    marginTop: 2,
  },
  activityStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    backgroundColor: colors.button.primary.bg,
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.button.primary.border,
  },
  actionButtonText: {
    color: colors.button.primary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: colors.button.secondary.bg,
    borderColor: colors.button.secondary.border,
  },
  secondaryButtonText: {
    color: colors.button.secondary.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default Home