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

  // Simplified scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.section-content, .service-card, .portfolio-item')
    .forEach(el => {
      el.classList.add('animate-hidden');
      observer.observe(el);
    });

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && 
        !navLinks.contains(e.target) && 
        navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      body.style.overflow = '';
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
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
      navLinks.classList.remove('active');
      body.style.overflow = '';
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
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