// Smooth scroll implementation with performance optimizations
const smoothScroll = {
  init() {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Add passive event listener for better scroll performance
    window.addEventListener("scroll", this.handleScroll.bind(this), {
      passive: true,
    });

    // Initialize intersection observer for section transitions
    this.initIntersectionObserver();
  },

  handleScroll: (() => {
    let ticking = false;

    return function () {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update scroll-based animations here if needed
          ticking = false;
        });
        ticking = true;
      }
    };
  })(),

  initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          // Optional: Add any section-specific animations here
        }
      });
    }, options);

    // Observe all main sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  },
};

// Initialize smooth scroll when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  smoothScroll.init();
});

export default smoothScroll;
