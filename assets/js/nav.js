/**
 * Navigation functionality for FutureFunds
 * Handles dropdown menus and active states
 */

document.addEventListener('DOMContentLoaded', () => {
  // Handle dropdown buttons
  const dropdownButtons = document.querySelectorAll('.nav__item.has-dropdown .nav__link');
  
  dropdownButtons.forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    
    // Desktop: Handle hover
    const item = button.closest('.nav__item');
    
    item.addEventListener('mouseenter', () => {
      button.setAttribute('aria-expanded', 'true');
    });
    
    item.addEventListener('mouseleave', () => {
      button.setAttribute('aria-expanded', 'false');
    });
    
    // Mobile: Handle click
    button.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all other dropdowns
        dropdownButtons.forEach(otherButton => {
          if (otherButton !== button) {
            otherButton.setAttribute('aria-expanded', 'false');
          }
        });
        
        button.setAttribute('aria-expanded', !isExpanded);
      }
    });
  });

  // Handle mobile menu toggle
  const menuToggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('is-active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (menu?.classList.contains('is-active') && 
        !event.target.closest('.nav__menu') && 
        !event.target.closest('.nav__toggle')) {
      menu.classList.remove('is-active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Handle mobile dropdown menus
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  function handleMobileDropdowns(e) {
    const dropdownButtons = document.querySelectorAll('.nav__item.has-dropdown .nav__link');
    
    dropdownButtons.forEach(button => {
      if (e.matches) { // Mobile view
        button.addEventListener('click', (event) => {
          event.preventDefault();
          const dropdown = button.nextElementSibling;
          const isExpanded = dropdown.style.visibility === 'visible';
          
          // Close all other dropdowns
          document.querySelectorAll('.nav__dropdown').forEach(d => {
            if (d !== dropdown) {
              d.style.visibility = 'hidden';
              d.style.opacity = '0';
            }
          });
          
          // Toggle current dropdown
          dropdown.style.visibility = isExpanded ? 'hidden' : 'visible';
          dropdown.style.opacity = isExpanded ? '0' : '1';
          dropdown.style.transform = isExpanded ? 'translateY(-10px)' : 'translateY(0)';
        });
      } else { // Desktop view
        button.removeEventListener('click', () => {});
      }
    });
  }

  // Initial check and listen for viewport changes
  handleMobileDropdowns(mediaQuery);
  mediaQuery.addListener(handleMobileDropdowns);
});
