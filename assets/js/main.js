/**
 * FutureFunds - Main JavaScript
 * Handles core functionality: navigation, scroll animations, notifications
 */

// DOM Elements
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

// Utility Functions
const debounce = (fn, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};

// Navigation
const toggleNav = () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('is-active');
  
  // Trap focus when menu is open
  if (!isExpanded) {
    const focusableElements = navMenu.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    firstFocusable.focus();
    
    navMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
      
      if (e.key === 'Escape') {
        toggleNav();
      }
    });
  }
};

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '50px',
  }
);

// Toast Notifications
const createToast = (message, duration = 3000) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Force reflow to enable transition
  toast.offsetHeight;
  toast.classList.add('is-active');
  
  setTimeout(() => {
    toast.classList.remove('is-active');
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

// Email Notification Handler
const handleNotifySubmit = (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  if (email) {
    // Store email in localStorage
    const notifyList = JSON.parse(localStorage.getItem('notifyList') || '[]');
    notifyList.push({ email, timestamp: Date.now() });
    localStorage.setItem('notifyList', JSON.stringify(notifyList));
    
    // Show success message
    createToast('Thanks! We\'ll notify you when the simulator launches.');
    e.target.reset();
  }
};

// Active Navigation State
const updateActiveNav = () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
};

// Initialize
const init = () => {
  // Navigation
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleNav);
  }
  
  // Scroll Reveal
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => revealOnScroll.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
  
  // Notify Forms
  document.querySelectorAll('.notify-form').forEach(form => {
    form.addEventListener('submit', handleNotifySubmit);
  });
  
  // Update active nav state
  updateActiveNav();
  
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export utilities for other modules
export { createToast, debounce };

