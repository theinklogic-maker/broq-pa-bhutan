// Core logic for Broq-Pa Bhutan Web Page
document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initRevealAnimations();
});

// 1. Scroll Progress Bar & Navbar Styling on Scroll
function initScrollEffects() {
  const scrollProgress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    // Scroll progress calculation
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = scrolled + '%';
    }

    // Navbar visual feedback on scroll
    if (navbar) {
      if (winScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

// 2. Reveal Sections on Scroll (using Intersection Observer)
function initRevealAnimations() {
  const sections = document.querySelectorAll('.fade-in-section');

  const options = {
    root: null,
    threshold: 0.12, // Trigger when 12% of the element is visible
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animates only once
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}
