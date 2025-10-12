/**
 * FutureFunds - Testimonial Slider
 * Accessible carousel implementation with keyboard controls and autoplay
 */

class Slider {
  constructor(element, options = {}) {
    this.slider = element;
    this.track = element.querySelector('.slider__track');
    this.slides = Array.from(this.track.children);
    this.currentIndex = 0;
    
    this.options = {
      autoplay: options.autoplay ?? true,
      interval: options.interval ?? 5000,
      ...options
    };
    
    this.init();
  }
  
  init() {
    // Set ARIA attributes
    this.slider.setAttribute('role', 'region');
    this.slider.setAttribute('aria-roledescription', 'carousel');
    this.track.setAttribute('role', 'presentation');
    
    // Create controls
    this.createControls();
    
    // Set initial state
    this.updateSlides();
    
    // Start autoplay if enabled
    if (this.options.autoplay) {
      this.startAutoplay();
      
      // Pause on hover/focus
      this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
      this.slider.addEventListener('mouseleave', () => this.startAutoplay());
      this.slider.addEventListener('focusin', () => this.stopAutoplay());
      this.slider.addEventListener('focusout', () => this.startAutoplay());
    }
    
    // Handle keyboard navigation
    this.slider.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.next();
          break;
      }
    });
  }
  
  createControls() {
    // Create navigation buttons
    const controls = document.createElement('div');
    controls.className = 'slider__controls';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'slider__button slider__button--prev';
    prevButton.setAttribute('aria-label', 'Previous slide');
    prevButton.innerHTML = '←';
    prevButton.addEventListener('click', () => this.prev());
    
    const nextButton = document.createElement('button');
    nextButton.className = 'slider__button slider__button--next';
    nextButton.setAttribute('aria-label', 'Next slide');
    nextButton.innerHTML = '→';
    nextButton.addEventListener('click', () => this.next());
    
    controls.appendChild(prevButton);
    controls.appendChild(nextButton);
    
    // Create dots
    const dots = document.createElement('div');
    dots.className = 'slider__dots';
    
    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'slider__dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => this.goToSlide(index));
      dots.appendChild(dot);
    });
    
    this.dots = Array.from(dots.children);
    
    // Append controls
    this.slider.appendChild(controls);
    this.slider.appendChild(dots);
  }
  
  updateSlides() {
    // Update slide positions
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    
    // Update ARIA attributes
    this.slides.forEach((slide, index) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `${index + 1} of ${this.slides.length}`);
      slide.setAttribute('aria-hidden', index !== this.currentIndex);
    });
    
    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === this.currentIndex);
      dot.setAttribute('aria-current', index === this.currentIndex);
    });
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlides();
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlides();
  }
  
  startAutoplay() {
    if (this.options.autoplay && !this.autoplayInterval) {
      this.autoplayInterval = setInterval(() => this.next(), this.options.interval);
    }
  }
  
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize sliders
const initSliders = () => {
  document.querySelectorAll('.slider').forEach(slider => {
    new Slider(slider);
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSliders);
} else {
  initSliders();
}

export default Slider;

