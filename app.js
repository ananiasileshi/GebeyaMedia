(() => {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  const PROJECTS = [
    {
      slug: 'project-one',
      title: 'Project One',
      category: 'COMMERCIAL',
      categoryKey: 'commercial',
      client: 'Client Name',
      year: '2025',
      services: 'Concept, Production, Post',
      type: 'TVC / Digital',
      challenge: 'Create an authoritative campaign film with high recall and premium brand presence.',
      idea: 'Anchor the narrative around a single bold promise, then build emotional momentum with cinematic pacing.',
      craft: 'Disciplined lighting, tight edit rhythm, and a minimal color system that lets the message lead.',
      results: 'Stronger brand recall and a cohesive set of cutdowns optimized for social and broadcast.'
    },
    {
      slug: 'project-two',
      title: 'Project Two',
      category: 'ANIMATION',
      categoryKey: 'animation',
      client: 'Client Name',
      year: '2024',
      services: 'Motion Design, 2D Animation',
      type: 'Explainer',
      challenge: 'Turn complexity into clarity without losing energy and style.',
      idea: 'Use bold type and simple geometric language that feels editorial and confident.',
      craft: 'Snappy transitions, clean typography, and an accent-first visual system.',
      results: 'Higher completion rates on social and improved understanding in customer feedback.'
    },
    {
      slug: 'project-three',
      title: 'Project Three',
      category: 'DOCUMENTARY',
      categoryKey: 'documentary',
      client: 'Client Name',
      year: '2023',
      services: 'Direction, Field Production, Edit',
      type: 'Short Doc',
      challenge: 'Capture authentic stories while maintaining production discipline.',
      idea: 'Let the people lead the film — visuals support truth, not spectacle.',
      craft: 'Interview-driven narrative, careful sound, and a restrained grade for honesty.',
      results: 'A timeless film that builds trust and positions the brand as human-first.'
    },
    {
      slug: 'project-four',
      title: 'Project Four',
      category: 'BRANDING',
      categoryKey: 'branding',
      client: 'Client Name',
      year: '2022',
      services: 'Identity, Guidelines, Assets',
      type: 'Brand System',
      challenge: 'Build a visual system that scales across digital, print, and campaigns.',
      idea: 'A strong wordmark + modular grid rules that keep everything consistent.',
      craft: 'A disciplined palette, typography hierarchy, and reusable motion templates.',
      results: 'A cohesive system adopted across all touchpoints with faster production speed.'
    }
  ];

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }

  function initTheme() {
    const root = document.documentElement;
    const stored = window.localStorage.getItem('gm-theme');
    const initial = stored || (prefersLight ? 'light' : 'dark');

    const apply = (t) => {
      if (t === 'light') root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      window.localStorage.setItem('gm-theme', t);
      qsa('[data-theme-toggle]').forEach((btn) => {
        btn.textContent = t === 'light' ? '☀' : '☾';
        btn.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      });
    };

    apply(initial);

    qsa('[data-theme-toggle]').forEach((btn) => {
      btn.disabled = false;
      btn.addEventListener('click', () => {
        const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        apply(cur === 'light' ? 'dark' : 'light');
      });
    });
  }

  // Preloader
  function initPreloader() {
    const pre = qs('[data-preloader]');
    if (!pre) return;

    const pct = qs('[data-preloader-pct]', pre);
    const path = qs('path', pre);
    const state = { v: 0 };

    const step = () => {
      const inc = Math.random() * 3.5 + 0.8;
      state.v = clamp(state.v + inc, 0, 100);
      if (pct) pct.textContent = String(Math.round(state.v)).padStart(3, '0') + '%';
      if (path) {
        const start = 900;
        const end = 0;
        const t = state.v / 100;
        path.style.strokeDashoffset = String(start + (end - start) * t);
      }

      if (state.v >= 100) {
        pre.classList.add('is-fill');
        window.setTimeout(() => {
          pre.classList.add('is-done');
        }, 350);
        return;
      }
      window.setTimeout(step, 34);
    };

    Promise.allSettled([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      new Promise((res) => window.setTimeout(res, 300))
    ]).then(() => {
      if (prefersReducedMotion) {
        if (pct) pct.textContent = '100%';
        pre.classList.add('is-fill');
        pre.classList.add('is-done');
        return;
      }
      step();
    });
  }

  function initReveals() {
    if (prefersReducedMotion) return;

    const candidates = qsa('[data-reveal]');
    if (candidates.length === 0) return;

    candidates.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.getAttribute('data-reveal-delay') || '0');
        window.setTimeout(() => {
          el.classList.add('is-in');
        }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.18 });

    candidates.forEach((el) => io.observe(el));
  }

  function initMagneticButtons() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia || !window.matchMedia('(pointer:fine)').matches) return;

    const items = qsa('[data-magnetic]');
    if (items.length === 0) return;

    const strength = 12;
    const radius = 90;

    items.forEach((el) => {
      let rect = el.getBoundingClientRect();
      const refresh = () => { rect = el.getBoundingClientRect(); };
      window.addEventListener('resize', refresh);

      const onMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > radius) {
          el.style.transform = '';
          return;
        }
        const pull = 1 - dist / radius;
        el.style.transform = `translate3d(${dx * pull * (strength / radius)}px, ${dy * pull * (strength / radius)}px, 0)`;
      };

      const onLeave = () => { el.style.transform = ''; };

      el.addEventListener('mouseenter', refresh);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  function initWorkFilters() {
    const grid = qs('[data-work-grid]');
    if (!grid) return;

    const pills = qsa('[data-filter]');
    const cards = qsa('[data-preview][data-category]', grid);

    const apply = (key) => {
      pills.forEach((p) => p.classList.toggle('is-active', p.getAttribute('data-filter') === key));
      cards.forEach((c) => {
        const cat = c.getAttribute('data-category');
        const show = key === 'all' || key === cat;
        c.style.display = show ? '' : 'none';
      });
    };

    pills.forEach((p) => {
      p.addEventListener('click', () => {
        apply(p.getAttribute('data-filter') || 'all');
      });
    });

    apply('all');
  }

  function initPreviewVideos() {
    const cards = qsa('[data-preview]');
    if (cards.length === 0) return;

    const isFine = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

    cards.forEach((card) => {
      const v = qs('[data-preview-video]', card);
      if (!v) return;

      const play = async () => {
        if (prefersReducedMotion) return;
        try { await v.play(); } catch { }
      };

      const stop = () => {
        v.pause();
        v.currentTime = 0;
      };

      if (isFine) {
        card.addEventListener('mouseenter', play);
        card.addEventListener('mouseleave', stop);
        return;
      }

      // Mobile / coarse pointer: first tap previews, second tap navigates
      card.addEventListener('click', (e) => {
        if (prefersReducedMotion) return;
        if (card.getAttribute('data-preview-armed') !== '1') {
          e.preventDefault();
          card.setAttribute('data-preview-armed', '1');
          play();
          window.setTimeout(() => {
            card.removeAttribute('data-preview-armed');
            stop();
          }, 2500);
        }
      });
    });
  }

  function initProjectPage() {
    const root = qs('[data-project-page]');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || '';
    const p = PROJECTS.find((x) => x.slug === slug) || PROJECTS[0];
    if (!p) return;

    const set = (sel, val) => {
      const el = qs(sel);
      if (!el) return;
      el.textContent = val;
    };

    set('[data-project-title]', p.title);
    set('[data-project-category]', p.category);
    set('[data-project-client]', p.client);
    set('[data-project-year]', p.year);
    set('[data-project-services]', p.services);
    set('[data-project-type]', p.type);
    set('[data-project-challenge]', p.challenge);
    set('[data-project-idea]', p.idea);
    set('[data-project-craft]', p.craft);
    set('[data-project-results]', p.results);

    document.title = `Gebeya Media — ${p.title}`;
  }

  function initSharedElementOpenTransition() {
    if (prefersReducedMotion) return;

    const cards = qsa('a.card[href^="project.html"]');
    if (cards.length === 0) return;

    const overlay = document.createElement('div');
    overlay.className = 'open-transition';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    const animate = (card, href) => {
      const rect = card.getBoundingClientRect();
      const clone = card.cloneNode(true);

      overlay.innerHTML = '';
      overlay.appendChild(clone);
      overlay.style.display = 'block';

      clone.style.position = 'absolute';
      clone.style.left = rect.left + 'px';
      clone.style.top = rect.top + 'px';
      clone.style.width = rect.width + 'px';
      clone.style.height = rect.height + 'px';
      clone.style.margin = '0';
      clone.style.transformOrigin = 'left top';
      clone.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
      clone.style.willChange = 'transform';

      // Hide text inside clone during the zoom for a cleaner feel
      const content = clone.querySelector('.card__content');
      if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity .2s cubic-bezier(.22,1,.36,1)';
      }

      const sx = window.innerWidth / rect.width;
      const sy = window.innerHeight / rect.height;
      const tx = -rect.left;
      const ty = -rect.top;

      requestAnimationFrame(() => {
        clone.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sx}, ${sy})`;
      });

      window.setTimeout(() => {
        window.location.href = href;
      }, 620);
    };

    cards.forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href) return;

        // Don't fight the curtain transition; we use this for project links.
        e.preventDefault();
        animate(a, href);
      });
    });

    window.addEventListener('pageshow', () => {
      overlay.style.display = 'none';
      overlay.innerHTML = '';
    });
  }

  // Header: solid on scroll + hide on scroll down
  function initHeader() {
    const header = qs('[data-header]');
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-solid', y > 100);

      const dy = y - lastY;
      if (y > 140 && dy > 6) header.classList.add('is-hidden');
      if (dy < -6) header.classList.remove('is-hidden');

      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(onScroll);
    }, { passive: true });

    onScroll();
  }

  // Scroll progress bar
  function initProgress() {
    const bar = qs('[data-progress]');
    if (!bar) return;

    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) : 0;
      bar.style.width = (p * 100).toFixed(3) + '%';
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  // Overlay menu
  function initOverlayMenu() {
    const menuBtn = qs('[data-menu-open]');
    const closeBtn = qs('[data-menu-close]');
    const overlay = qs('[data-overlay]');
    if (!menuBtn || !overlay) return;

    const open = () => {
      document.documentElement.classList.add('is-menu-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
    };

    const close = () => {
      document.documentElement.classList.remove('is-menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = document.documentElement.classList.contains('is-menu-open');
      if (isOpen) close();
      else open();
    });

    if (closeBtn) closeBtn.addEventListener('click', close);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    qsa('a', overlay).forEach((a) => {
      a.addEventListener('click', () => close());
    });

    close();
  }

  // Curtain page transitions (simple)
  function initCurtainTransitions() {
    const curtain = qs('[data-curtain]');
    if (!curtain) return;

    const title = qs('[data-curtain-title]', curtain);

    const setTitle = (href) => {
      if (!title) return;
      const map = {
        'index.html': 'HOME',
        'work.html': 'OUR WORK',
        'about.html': 'ABOUT US',
        'blog.html': 'BLOG',
        'contact.html': 'CONTACT',
        'project.html': 'PROJECT'
      };
      const key = (href || '').split('/').pop() || '';
      title.textContent = map[key] || 'LOADING';
    };

    const isSameOrigin = (url) => {
      try {
        const u = new URL(url, window.location.href);
        return u.origin === window.location.origin;
      } catch {
        return false;
      }
    };

    qsa('a[href]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href) return;

        // Project links use a shared-element open transition instead of the curtain.
        if (href.startsWith('project.html')) return;

        const isHash = href.startsWith('#');
        const isExternal = !isSameOrigin(href);
        const newTab = a.getAttribute('target') === '_blank';

        if (isHash || isExternal || newTab) return;

        e.preventDefault();
        if (prefersReducedMotion) {
          window.location.href = href;
          return;
        }

        setTitle(href);
        curtain.classList.remove('is-out');
        curtain.classList.add('is-in');

        window.setTimeout(() => {
          window.location.href = href;
        }, 650);
      });
    });

    window.addEventListener('pageshow', () => {
      if (prefersReducedMotion) return;
      curtain.classList.remove('is-in');
      curtain.classList.add('is-out');
      window.setTimeout(() => curtain.classList.remove('is-out'), 650);
    });
  }

  // Hero parallax (subtle)
  function initHeroParallax() {
    const heroVideo = qs('[data-hero-video]');
    if (!heroVideo) return;
    if (prefersReducedMotion) return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      tx = x * 10;
      ty = y * 10;
    };

    const raf = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      heroVideo.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(1.08)`;
      requestAnimationFrame(raf);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    requestAnimationFrame(raf);
  }

  // Services accordion
  function initAccordion() {
    qsa('[data-acc-item]').forEach((item) => {
      const btn = qs('button', item);
      const panel = qs('[data-acc-panel]', item);
      if (!btn || !panel) return;

      const close = () => {
        item.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';
      };

      const open = () => {
        item.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      };

      close();

      btn.addEventListener('click', () => {
        const expanded = item.getAttribute('aria-expanded') === 'true';
        qsa('[data-acc-item]').forEach((it) => {
          if (it === item) return;
          it.setAttribute('aria-expanded', 'false');
          const p = qs('[data-acc-panel]', it);
          if (p) p.style.maxHeight = '0px';
        });
        if (expanded) close();
        else open();
      });

      window.addEventListener('resize', () => {
        if (item.getAttribute('aria-expanded') === 'true') {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  // Showreel modal
  function initShowreel() {
    const openBtn = qs('[data-open-showreel]');
    const modal = qs('[data-modal]');
    const closeBtn = qs('[data-modal-close]');
    const video = modal ? qs('video', modal) : null;
    if (!openBtn || !modal || !closeBtn || !video) return;

    const open = async () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      video.muted = false;
      try { await video.play(); } catch { }
    };

    const close = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    };

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    close();
  }

  // Scroll hint fade
  function initScrollHint() {
    const hint = qs('[data-scrollhint]');
    if (!hint) return;
    const onScroll = () => {
      const y = window.scrollY;
      hint.style.opacity = String(clamp(1 - y / 180, 0, 1));
      hint.style.transform = `translateX(-50%) translateY(${clamp(y / 20, 0, 10)}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Custom cursor (desktop only)
  function initCursor() {
    const cursor = qs('[data-cursor]');
    if (!cursor) return;

    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const dot = qs('[data-cursor-dot]', cursor);
    const ring = qs('[data-cursor-ring]', cursor);
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const setState = (active, hover, text) => {
      cursor.classList.toggle('is-active', active);
      cursor.classList.toggle('is-hover', hover);
      ring.textContent = text || '';
    };

    setState(true, false, '');

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    }, { passive: true });

    const raf = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Event delegation avoids double-binding and covers dynamically created elements.
    const onOver = (e) => {
      const t = e.target instanceof Element ? e.target.closest('[data-cursor-hover]') : null;
      if (!t) return;
      const label = t.getAttribute('data-cursor-hover') || 'VIEW';
      setState(true, true, label);
    };

    const onOut = (e) => {
      const t = e.target instanceof Element ? e.target.closest('[data-cursor-hover]') : null;
      if (!t) return;
      setState(true, false, '');
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    document.addEventListener('mouseleave', () => setState(false, false, ''));
    document.addEventListener('mouseenter', () => setState(true, false, ''));
  }

  // Duplicate marquee content (for seamless loop)
  function initMarquee() {
    qsa('[data-track]').forEach((track) => {
      if (track.getAttribute('data-duped') === '1') return;
      track.setAttribute('data-duped', '1');

      const items = qsa('[data-logo]', track);
      items.forEach((n) => track.appendChild(n.cloneNode(true)));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPreloader();
    initHeader();
    initProgress();
    initOverlayMenu();
    initCurtainTransitions();
    initHeroParallax();
    initAccordion();
    initShowreel();
    initScrollHint();
    initCursor();
    initMarquee();
    initWorkFilters();
    initPreviewVideos();
    initProjectPage();
    initSharedElementOpenTransition();
    initReveals();
    initMagneticButtons();
  });
})();
