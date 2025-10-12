/**
 * FutureFunds - Course Filter System
 * Handles filtering and searching of course cards
 */

class CourseFilter {
  constructor() {
    this.courses = [];
    this.filters = {
      topic: [],
      level: '',
      search: ''
    };
    
    this.init();
  }
  
  async init() {
    try {
      // Load courses data
      const response = await fetch('/assets/data/courses.json');
      this.courses = await response.json();
      
      // Initialize DOM elements
      this.courseGrid = document.querySelector('.course-grid');
      this.topicFilters = document.querySelectorAll('[data-filter-topic]');
      this.levelSelect = document.querySelector('[data-filter-level]');
      this.searchInput = document.querySelector('[data-filter-search]');
      
      // Restore filters from session storage
      this.restoreFilters();
      
      // Add event listeners
      this.bindEvents();
      
      // Initial render
      this.renderCourses();
      
    } catch (error) {
      console.error('Error initializing course filter:', error);
    }
  }
  
  bindEvents() {
    // Topic filter buttons
    this.topicFilters.forEach(button => {
      button.addEventListener('click', () => {
        const topic = button.dataset.filterTopic;
        this.toggleTopicFilter(topic);
        button.classList.toggle('is-active');
        this.saveFilters();
        this.renderCourses();
      });
    });
    
    // Level select
    if (this.levelSelect) {
      this.levelSelect.addEventListener('change', () => {
        this.filters.level = this.levelSelect.value;
        this.saveFilters();
        this.renderCourses();
      });
    }
    
    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        this.filters.search = this.searchInput.value.toLowerCase();
        this.saveFilters();
        this.renderCourses();
      });
    }
  }
  
  toggleTopicFilter(topic) {
    const index = this.filters.topic.indexOf(topic);
    if (index === -1) {
      this.filters.topic.push(topic);
    } else {
      this.filters.topic.splice(index, 1);
    }
  }
  
  filterCourses() {
    return this.courses.filter(course => {
      // Topic filter
      if (this.filters.topic.length > 0) {
        const hasMatchingTopic = course.topics.some(topic => 
          this.filters.topic.includes(topic)
        );
        if (!hasMatchingTopic) return false;
      }
      
      // Level filter
      if (this.filters.level && course.level !== this.filters.level) {
        return false;
      }
      
      // Search filter
      if (this.filters.search) {
        const searchTerm = this.filters.search.toLowerCase();
        const matchesSearch = 
          course.title.toLowerCase().includes(searchTerm) ||
          course.summary.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }
      
      return true;
    });
  }
  
  renderCourses() {
    const filteredCourses = this.filterCourses();
    
    // Update course grid
    this.courseGrid.innerHTML = filteredCourses.length ? 
      filteredCourses.map(course => this.createCourseCard(course)).join('') :
      this.createEmptyState();
    
    // Update filter badges
    this.updateFilterBadges();
    
    // Announce results to screen readers
    this.announceResults(filteredCourses.length);
  }
  
  createCourseCard(course) {
    return `
      <article class="card course-card">
        <header class="course-card__header">
          <div class="course-card__meta">
            <span class="badge">${course.level}</span>
            <span class="text-muted">${course.duration}</span>
          </div>
          <h3>${course.title}</h3>
        </header>
        
        <div class="course-card__body">
          <p>${course.summary}</p>
        </div>
        
        <footer class="course-card__footer cluster">
          <button class="btn btn--subtle" 
            data-modal-target="syllabus-${course.slug}"
            aria-label="View syllabus for ${course.title}">
            View Syllabus
          </button>
          <a href="/course-${course.slug}.html" 
            class="btn btn--primary"
            aria-label="Open ${course.title} course">
            Open Course
          </a>
        </footer>
      </article>
    `;
  }
  
  createEmptyState() {
    return `
      <div class="text-center stack" style="grid-column: 1 / -1; padding: var(--space-2xl);">
        <h3>No courses found</h3>
        <p class="text-muted">Try adjusting your filters or search terms</p>
        <button class="btn btn--secondary" onclick="this.resetFilters()">
          Reset Filters
        </button>
      </div>
    `;
  }
  
  updateFilterBadges() {
    const badgeContainer = document.querySelector('.filter-badges');
    if (!badgeContainer) return;
    
    const badges = [];
    
    // Topic badges
    this.filters.topic.forEach(topic => {
      badges.push(`
        <button class="badge" onclick="this.removeTopicFilter('${topic}')">
          ${topic} <span aria-hidden="true">×</span>
        </button>
      `);
    });
    
    // Level badge
    if (this.filters.level) {
      badges.push(`
        <button class="badge" onclick="this.removeLevelFilter()">
          ${this.filters.level} <span aria-hidden="true">×</span>
        </button>
      `);
    }
    
    // Search badge
    if (this.filters.search) {
      badges.push(`
        <button class="badge" onclick="this.removeSearchFilter()">
          "${this.filters.search}" <span aria-hidden="true">×</span>
        </button>
      `);
    }
    
    badgeContainer.innerHTML = badges.length ? badges.join('') : '';
  }
  
  announceResults(count) {
    const announcement = document.getElementById('filter-announcement');
    if (announcement) {
      announcement.textContent = `${count} courses found`;
    }
  }
  
  removeTopicFilter(topic) {
    const index = this.filters.topic.indexOf(topic);
    if (index !== -1) {
      this.filters.topic.splice(index, 1);
      this.saveFilters();
      this.renderCourses();
      
      // Update button state
      const button = document.querySelector(`[data-filter-topic="${topic}"]`);
      if (button) button.classList.remove('is-active');
    }
  }
  
  removeLevelFilter() {
    this.filters.level = '';
    if (this.levelSelect) this.levelSelect.value = '';
    this.saveFilters();
    this.renderCourses();
  }
  
  removeSearchFilter() {
    this.filters.search = '';
    if (this.searchInput) this.searchInput.value = '';
    this.saveFilters();
    this.renderCourses();
  }
  
  resetFilters() {
    this.filters = {
      topic: [],
      level: '',
      search: ''
    };
    
    // Reset UI
    this.topicFilters.forEach(button => button.classList.remove('is-active'));
    if (this.levelSelect) this.levelSelect.value = '';
    if (this.searchInput) this.searchInput.value = '';
    
    this.saveFilters();
    this.renderCourses();
  }
  
  saveFilters() {
    sessionStorage.setItem('courseFilters', JSON.stringify(this.filters));
  }
  
  restoreFilters() {
    const savedFilters = sessionStorage.getItem('courseFilters');
    if (savedFilters) {
      this.filters = JSON.parse(savedFilters);
      
      // Restore UI state
      this.filters.topic.forEach(topic => {
        const button = document.querySelector(`[data-filter-topic="${topic}"]`);
        if (button) button.classList.add('is-active');
      });
      
      if (this.levelSelect) this.levelSelect.value = this.filters.level;
      if (this.searchInput) this.searchInput.value = this.filters.search;
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new CourseFilter());
} else {
  new CourseFilter();
}

export default CourseFilter;

