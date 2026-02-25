/* ==========================================================================
   Rachel Whitlock — Portfolio JS
   ========================================================================== */

(function () {
  'use strict';

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* --- Nav Scroll Effect --- */
  const nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  /* --- Scroll Fade-In (IntersectionObserver) --- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      fadeElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything if no IntersectionObserver or reduced motion
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }
})();
