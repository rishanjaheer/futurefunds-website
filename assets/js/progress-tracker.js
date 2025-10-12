/**
 * Progress Tracker for FutureFunds Courses
 * Handles saving and loading user progress using localStorage
 */

class ProgressTracker {
  constructor() {
    this.courseId = 'budgeting-saving';
    this.storageKey = `ff-course-${this.courseId}`;
    this.progress = this.loadProgress();
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : this.getDefaultProgress();
    } catch (error) {
      console.warn('Error loading progress:', error);
      return this.getDefaultProgress();
    }
  }

  getDefaultProgress() {
    return {
      courseId: this.courseId,
      currentLesson: 1,
      completedLessons: [],
      quizScores: {},
      startedAt: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      totalTimeSpent: 0 // in minutes
    };
  }

  saveProgress() {
    try {
      this.progress.lastAccessed = new Date().toISOString();
      localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
    } catch (error) {
      console.warn('Error saving progress:', error);
    }
  }

  // Lesson Progress
  markLessonComplete(lessonNumber) {
    if (!this.progress.completedLessons.includes(lessonNumber)) {
      this.progress.completedLessons.push(lessonNumber);
      this.progress.completedLessons.sort((a, b) => a - b);
    }
    this.saveProgress();
  }

  isLessonComplete(lessonNumber) {
    return this.progress.completedLessons.includes(lessonNumber);
  }

  setCurrentLesson(lessonNumber) {
    this.progress.currentLesson = lessonNumber;
    this.saveProgress();
  }

  getCurrentLesson() {
    return this.progress.currentLesson;
  }

  // Quiz Progress
  saveQuizScore(lessonNumber, quizType, score, totalQuestions) {
    const quizKey = `${lessonNumber}-${quizType}`;
    this.progress.quizScores[quizKey] = {
      score,
      totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      completedAt: new Date().toISOString(),
      passed: (score / totalQuestions) >= 0.7
    };
    this.saveProgress();
  }

  getQuizScore(lessonNumber, quizType) {
    const quizKey = `${lessonNumber}-${quizType}`;
    return this.progress.quizScores[quizKey] || null;
  }

  hasPassedQuiz(lessonNumber, quizType) {
    const score = this.getQuizScore(lessonNumber, quizType);
    return score && score.passed;
  }

  // Course Statistics
  getCompletionPercentage() {
    const totalLessons = 10;
    return Math.round((this.progress.completedLessons.length / totalLessons) * 100);
  }

  getNextLesson() {
    const completedLessons = this.progress.completedLessons;
    if (completedLessons.length === 0) return 1;
    
    const lastCompleted = Math.max(...completedLessons);
    return Math.min(lastCompleted + 1, 10);
  }

  isCourseComplete() {
    return this.progress.completedLessons.length === 10;
  }

  // Time Tracking
  addTimeSpent(minutes) {
    this.progress.totalTimeSpent += minutes;
    this.saveProgress();
  }

  getTotalTimeSpent() {
    return this.progress.totalTimeSpent;
  }

  // Course Reset
  resetProgress() {
    this.progress = this.getDefaultProgress();
    this.saveProgress();
  }

  // Export/Import Progress
  exportProgress() {
    return JSON.stringify(this.progress, null, 2);
  }

  importProgress(progressData) {
    try {
      const imported = JSON.parse(progressData);
      if (imported.courseId === this.courseId) {
        this.progress = imported;
        this.saveProgress();
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Error importing progress:', error);
      return false;
    }
  }

  // Achievement System
  getAchievements() {
    const achievements = [];
    
    // Lesson completion achievements
    if (this.progress.completedLessons.length >= 1) {
      achievements.push({
        id: 'first-lesson',
        title: 'Getting Started',
        description: 'Completed your first lesson',
        icon: '🎯',
        unlockedAt: this.progress.completedLessons.length >= 1 ? new Date().toISOString() : null
      });
    }
    
    if (this.progress.completedLessons.length >= 5) {
      achievements.push({
        id: 'halfway-hero',
        title: 'Halfway Hero',
        description: 'Completed 5 lessons',
        icon: '⭐',
        unlockedAt: this.progress.completedLessons.length >= 5 ? new Date().toISOString() : null
      });
    }
    
    if (this.isCourseComplete()) {
      achievements.push({
        id: 'course-complete',
        title: 'Budget Master',
        description: 'Completed the entire Budgeting & Saving course',
        icon: '🏆',
        unlockedAt: this.isCourseComplete() ? new Date().toISOString() : null
      });
    }
    
    // Quiz achievements
    const passedQuizzes = Object.values(this.progress.quizScores).filter(score => score.passed);
    if (passedQuizzes.length >= 5) {
      achievements.push({
        id: 'quiz-master',
        title: 'Quiz Master',
        description: 'Passed 5 quizzes',
        icon: '🧠',
        unlockedAt: passedQuizzes.length >= 5 ? new Date().toISOString() : null
      });
    }
    
    // Perfect scores
    const perfectScores = Object.values(this.progress.quizScores).filter(score => score.percentage === 100);
    if (perfectScores.length >= 1) {
      achievements.push({
        id: 'perfectionist',
        title: 'Perfectionist',
        description: 'Scored 100% on a quiz',
        icon: '💯',
        unlockedAt: perfectScores.length >= 1 ? new Date().toISOString() : null
      });
    }
    
    return achievements;
  }
}

// Global progress tracker instance
window.progressTracker = new ProgressTracker();

export default ProgressTracker;
