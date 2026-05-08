/* ============================================================
   IPS SMP — Main Script
   Handles: Navbar, Accordion (topic cards), Search filtering,
            Scroll animations, Mobile menu
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── 2. Mobile nav toggle ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }

  /* ── 3. Mobile dropdown toggle ── */
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = trigger.closest('.nav-dropdown');
        parent.classList.toggle('open');
      }
    });
  });

  /* ── 4. Topic Card Accordion ── */
  document.querySelectorAll('.topic-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.topic-card');
      const isOpen = card.classList.contains('open');

      // Close all others (optional: remove for multi-open)
      document.querySelectorAll('.topic-card.open').forEach(c => {
        if (c !== card) c.classList.remove('open');
      });

      card.classList.toggle('open', !isOpen);
    });
  });

  /* ── 5. Search / Filter (material pages) ── */
  const searchInput = document.getElementById('materialSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.topic-card').forEach(card => {
        const title = card.querySelector('.topic-title')?.textContent.toLowerCase() || '';
        const body  = card.querySelector('.topic-inner')?.textContent.toLowerCase() || '';
        const match = title.includes(query) || body.includes(query);
        card.classList.toggle('hidden', !match);
      });

      // Show empty state message
      const noResult = document.getElementById('noResults');
      if (noResult) {
        const anyVisible = [...document.querySelectorAll('.topic-card')].some(c => !c.classList.contains('hidden'));
        noResult.style.display = anyVisible ? 'none' : 'block';
      }
    });
  }

  /* ── 6. Scroll-reveal animation ── */
  const revealElements = document.querySelectorAll(
    '.class-card, .feature-card, .topic-card, .quiz-promo-inner'
  );

  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`;
      observer.observe(el);
    });
  }

  /* ── 7. Active nav link highlighting ── */
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

});
