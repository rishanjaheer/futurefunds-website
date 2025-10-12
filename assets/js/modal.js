/**
 * FutureFunds - Modal System
 * Handles modal dialogs with focus management and keyboard interactions
 */

class Modal {
  constructor(trigger) {
    this.trigger = trigger;
    this.modalId = trigger.getAttribute('data-modal-target');
    this.modal = document.getElementById(this.modalId);
    this.closeBtn = this.modal.querySelector('.modal__close');
    this.focusableElements = this.modal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    
    this.init();
  }
  
  init() {
    // Set ARIA attributes
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-hidden', 'true');
    
    // Add event listeners
    this.trigger.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
    
    // Handle keyboard interactions
    this.modal.addEventListener('keydown', (e) => this.handleKeydown(e));
  }
  
  open() {
    // Store last focused element to restore focus when closing
    this.lastActiveElement = document.activeElement;
    
    // Show modal
    this.modal.classList.add('is-active');
    this.modal.setAttribute('aria-hidden', 'false');
    
    // Focus first focusable element
    this.firstFocusable.focus();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    // Hide modal
    this.modal.classList.remove('is-active');
    this.modal.setAttribute('aria-hidden', 'true');
    
    // Restore focus
    if (this.lastActiveElement) {
      this.lastActiveElement.focus();
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
  }
  
  handleKeydown(e) {
    // Close on escape
    if (e.key === 'Escape') {
      this.close();
      return;
    }
    
    // Trap focus
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else {
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }
  }
}

// Initialize modals
const initModals = () => {
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    new Modal(trigger);
  });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModals);
} else {
  initModals();
}

export default Modal;

