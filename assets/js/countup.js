/**
 * FutureFunds - Count Up Animation
 * Animates numbers when they come into view
 */

class CountUp {
  constructor(element, options = {}) {
    this.element = element;
    this.endValue = parseInt(element.dataset.value, 10) || 0;
    this.options = {
      duration: options.duration || 2000,
      easing: options.easing || this.easeOutExpo,
      ...options
    };
    
    this.startTime = null;
    this.currentValue = 0;
    
    this.init();
  }
  
  init() {
    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '50px'
      }
    );
    
    // Start observing
    observer.observe(this.element);
  }
  
  animate() {
    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.element.textContent = this.formatNumber(this.endValue);
      return;
    }
    
    // Start animation
    this.startTime = performance.now();
    requestAnimationFrame(timestamp => this.update(timestamp));
  }
  
  update(currentTime) {
    if (!this.startTime) this.startTime = currentTime;
    
    const elapsed = currentTime - this.startTime;
    const progress = Math.min(elapsed / this.options.duration, 1);
    
    // Calculate current value using easing
    this.currentValue = Math.round(
      this.options.easing(progress) * this.endValue
    );
    
    // Update DOM
    this.element.textContent = this.formatNumber(this.currentValue);
    
    // Continue animation if not complete
    if (progress < 1) {
      requestAnimationFrame(timestamp => this.update(timestamp));
    }
  }
  
  formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }
  
  // Easing function
  easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }
}

// Initialize count-up animations
const initCountUp = () => {
  document.querySelectorAll('[data-countup]').forEach(element => {
    new CountUp(element);
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountUp);
} else {
  initCountUp();
}

export default CountUp;

