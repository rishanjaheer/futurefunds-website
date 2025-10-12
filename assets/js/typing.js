/**
 * FutureFunds - Typing Animation
 * Creates a typing effect that cycles through different words
 */

class TypingEffect {
  getMaxLength() {
    return Math.max(...this.words.map(word => word.length));
  }
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.currentWord = '';
    this.currentIndex = 0;
    this.isDeleting = false;
    
    // Options with defaults
    this.options = {
      typeSpeed: options.typeSpeed || 100,
      deleteSpeed: options.deleteSpeed || 50,
      pauseBeforeDelete: options.pauseBeforeDelete || 2000,
      pauseBeforeType: options.pauseBeforeType || 500,
      ...options
    };
  }
  
  type() {
    // Get the current word from the array
    const word = this.words[this.currentIndex];
    
    // Calculate the portion of the word to show
    if (this.isDeleting) {
      // Remove characters
      this.currentWord = word.substring(0, this.currentWord.length - 1);
    } else {
      // Add characters
      this.currentWord = word.substring(0, this.currentWord.length + 1);
    }
    
    // Update the element
    this.element.textContent = this.currentWord;
    
    // Calculate typing speed
    let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
    
    // If complete word
    if (!this.isDeleting && this.currentWord === word) {
      // Pause before starting to delete
      typeSpeed = this.options.pauseBeforeDelete;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentWord === '') {
      this.isDeleting = false;
      // Move to next word
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      // Pause before typing next word
      typeSpeed = this.options.pauseBeforeType;
    }
    
    // Schedule next tick
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typing effect when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const words = ['Budgeting', 'Investing', 'Saving', 'Financial Planning'];
    const typingEffect = new TypingEffect(typingElement, words, {
      typeSpeed: 100,      // Time per character when typing
      deleteSpeed: 50,     // Time per character when deleting
      pauseBeforeDelete: 2000,  // Pause time when word is complete
      pauseBeforeType: 500    // Pause time before typing new word
    });
    typingEffect.type();
  }
});
