document.addEventListener('DOMContentLoaded', () => {
  // Parallax effect
  window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.hero, .section-image img');
    
    parallaxElements.forEach(element => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      if(element.classList.contains('hero')) {
        element.style.backgroundPosition = `center ${rate}px`;
      } else {
        element.style.transform = `translateY(${rate}px)`;
      }
    });
  });

  // Custom cursor effect
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
    
    cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
    cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`;
  });

  // Add hover effect to interactive elements
  document.querySelectorAll('a, button, .portfolio-item, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.style.transform = 'scale(2)';
      cursorOutline.style.transform = 'scale(2)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorDot.style.transform = 'scale(1)';
      cursorOutline.style.transform = 'scale(1)';
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.section-content, .service-card, .portfolio-item, .feature-card').forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
  });

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      }
    });
  });

  // Responsive Navigation
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  });

  // Add scroll event for navbar background
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255,255,255,0.95)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      nav.style.background = 'rgba(255,255,255,0.95)';
      nav.style.boxShadow = 'none';
    }
  });
});