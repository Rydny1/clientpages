document.addEventListener('DOMContentLoaded', function () {
  // Set Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Navbar Scroll Effect ---
  // If not on home page (which has hero), we might want navbar to be solid immediately.
  // However, the CSS default handles transparency.
  // For specific pages (like menu/about), you can force 'navbar-scrolled' if you prefer,
  // but the current design uses a header image/block so transparent is fine initially.
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();
  }

  // --- Intersection Observer for Fade-in Animations ---
  const sections = document.querySelectorAll('.fade-in-section');

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1, // 10% of the item is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
