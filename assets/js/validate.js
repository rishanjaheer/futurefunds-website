/**
 * FutureFunds - Form Validation
 * Client-side form validation with inline error messages
 */

import { createToast } from './main.js';

class FormValidator {
  constructor(form, rules = {}) {
    this.form = form;
    this.rules = rules;
    this.init();
  }
  
  init() {
    this.form.setAttribute('novalidate', '');
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation on input
    this.form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });
  }
  
  validateField(field) {
    const name = field.name;
    const value = field.value.trim();
    const rules = this.rules[name] || {};
    
    // Clear previous errors
    this.clearFieldError(field);
    
    // Required field
    if (rules.required && !value) {
      return this.showFieldError(field, 'This field is required');
    }
    
    // Email format
    if (rules.email && value && !this.isValidEmail(value)) {
      return this.showFieldError(field, 'Please enter a valid email address');
    }
    
    // Minimum length
    if (rules.minLength && value.length < rules.minLength) {
      return this.showFieldError(field, `Must be at least ${rules.minLength} characters`);
    }
    
    // Maximum length
    if (rules.maxLength && value.length > rules.maxLength) {
      return this.showFieldError(field, `Must be no more than ${rules.maxLength} characters`);
    }
    
    // Pattern match
    if (rules.pattern && !rules.pattern.test(value)) {
      return this.showFieldError(field, rules.message || 'Please enter a valid value');
    }
    
    return true;
  }
  
  validateForm() {
    let isValid = true;
    const fields = this.form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
      // Collect form data
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData.entries());
      
      // Emit custom event with form data
      const event = new CustomEvent('form:valid', { detail: data });
      this.form.dispatchEvent(event);
      
      // Show success message
      createToast('Form submitted successfully!');
      
      // Reset form
      this.form.reset();
    } else {
      // Focus first field with error
      const firstError = this.form.querySelector('.has-error');
      if (firstError) {
        firstError.focus();
      }
    }
  }
  
  showFieldError(field, message) {
    field.classList.add('has-error');
    field.setAttribute('aria-invalid', 'true');
    
    // Create or update error message
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    return false;
  }
  
  clearFieldError(field) {
    field.classList.remove('has-error');
    field.removeAttribute('aria-invalid');
    
    // Remove error message if it exists
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
  }
  
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Example usage:
/*
const validator = new FormValidator(form, {
  name: {
    required: true,
    minLength: 2
  },
  email: {
    required: true,
    email: true
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
});
*/

export default FormValidator;

