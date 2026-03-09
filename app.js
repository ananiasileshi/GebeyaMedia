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
      results: 'Stronger brand recall and a cohesive set of cutdowns optimized for social and broadcast.',
      overview: 'A video-first campaign designed to feel premium on day one — from the first frame to the final cutdown.',
      team: [
        { role: 'Direction', name: 'Gebeya Media Studio' },
        { role: 'Cinematography', name: 'In-house' },
        { role: 'Edit', name: 'In-house' },
        { role: 'Sound', name: 'Partner' }
      ],
      timeline: [
        { label: 'Discovery', value: '2 days' },
        { label: 'Pre-production', value: '5 days' },
        { label: 'Shoot', value: '1 day' },
        { label: 'Post', value: '7 days' }
      ],
      metrics: [
        { label: 'Deliverables', value: '1 hero + 6 cutdowns' },
        { label: 'Turnaround', value: '15 days' },
        { label: 'Platforms', value: 'IG / TikTok / YouTube' }
      ],
      gallery: []
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
      results: 'Higher completion rates on social and improved understanding in customer feedback.',
      overview: 'An editorial approach to motion that balances clarity and personality.',
      team: [
        { role: 'Motion Lead', name: 'Gebeya Media Studio' },
        { role: 'Design', name: 'Client Team' }
      ],
      timeline: [
        { label: 'Audit', value: '1 week' },
        { label: 'Build', value: '2 weeks' },
        { label: 'Rollout', value: '1 week' }
      ],
      metrics: [
        { label: 'Templates', value: '18' },
        { label: 'Components', value: '36+' },
        { label: 'Easings', value: '6' }
      ],
      gallery: []
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
      results: 'A timeless film that builds trust and positions the brand as human-first.',
      overview: 'A documentary approach that balances dignity and presence.',
      team: [
        { role: 'Director', name: 'Gebeya Media Studio' },
        { role: 'Producer', name: 'Partner' },
        { role: 'Editor', name: 'In-house' }
      ],
      timeline: [
        { label: 'Research', value: '2 weeks' },
        { label: 'Field', value: '4 days' },
        { label: 'Post', value: '3 weeks' }
      ],
      metrics: [
        { label: 'Runtime', value: '12 minutes' },
        { label: 'Locations', value: '2' },
        { label: 'Languages', value: '2' }
      ],
      gallery: []
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
      results: 'A cohesive system adopted across all touchpoints with faster production speed.',
      overview: 'A brand system that balances clarity and expression — designed for real production speed.',
      team: [
        { role: 'Brand Lead', name: 'Gebeya Media Studio' },
        { role: 'Strategy', name: 'In-house' }
      ],
      timeline: [
        { label: 'Discovery', value: '1 week' },
        { label: 'Design', value: '2 weeks' },
        { label: 'Guidelines', value: '1 week' }
      ],
      metrics: [
        { label: 'Pages', value: '36' },
        { label: 'Assets', value: '60+' },
        { label: 'Lockups', value: '12' }
      ],
      gallery: []
    }
  ];

  const POSTS = [
    {
      slug: 'cinematic-brand-film',
      title: 'How we build a cinematic brand film',
      category: 'BTS',
      categoryKey: 'bts',
      date: '2026-03-09',
      readTime: '5 min read',
      deck: 'A practical look at how we move from brief to script, shoot, edit, and sound — while keeping the brand voice crisp.',
      body: [
        { type: 'p', text: 'A cinematic brand film is less about “big shots” and more about clarity: one message, one emotion, one arc.' },
        { type: 'h2', text: '1) Start with one promise' },
        { type: 'p', text: 'Before mood boards, we lock the promise. If we can’t say it in one sentence, the film won’t land.' },
        { type: 'h2', text: '2) Rhythm is a design tool' },
        { type: 'p', text: 'We storyboard beats, not scenes. The edit is planned early so the shoot is purposeful.' },
        { type: 'p', text: 'Then we build cutdowns that preserve the promise — not just random highlights.' }
      ]
    },
    {
      slug: 'motion-design-rhythm',
      title: 'Motion design rhythm: timing, contrast, and restraint',
      category: 'CRAFT',
      categoryKey: 'craft',
      date: '2026-03-09',
      readTime: '4 min read',
      deck: 'A few rules we use to make motion feel premium: contrast, spacing, and intentional pauses.',
      body: [
        { type: 'p', text: 'Premium motion rarely screams. It breathes. It makes space for the message.' },
        { type: 'h2', text: 'Use contrast, not chaos' },
        { type: 'p', text: 'Fast → slow. Loud → quiet. Big → small. Contrast creates focus and “luxury” pacing.' },
        { type: 'h2', text: 'Let type lead' },
        { type: 'p', text: 'Treat typography as a graphic element — scale it, crop it, and animate it with restraint.' }
      ]
    },
    {
      slug: 'brand-systems',
      title: 'Why brand systems win: consistency at speed',
      category: 'INSIGHTS',
      categoryKey: 'insights',
      date: '2026-03-09',
      readTime: '6 min read',
      deck: 'The best brands don’t just look good — they stay consistent across every touchpoint without slowing teams down.',
      body: [
        { type: 'p', text: 'A brand system is a production tool. It reduces decision fatigue and increases consistency.' },
        { type: 'h2', text: 'Consistency is trust' },
        { type: 'p', text: 'When your audience sees the same hierarchy and tone everywhere, the brand feels “real”.' },
        { type: 'h2', text: 'Speed comes from constraints' },
        { type: 'p', text: 'Clear rules make it easier to create. Constraints are not limits — they’re leverage.' }
      ]
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

    const forceIn = () => {
      candidates.forEach((el) => {
        if (!el.classList.contains('is-in')) el.classList.add('is-in');
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      forceIn();
      return;
    }

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

    window.setTimeout(() => {
      forceIn();
      try { io.disconnect(); } catch { }
    }, 2200);
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

    const HIDE_MS = 260;

    const stopPreview = (card) => {
      const v = qs('[data-preview-video]', card);
      if (!v) return;
      try {
        v.pause();
        v.currentTime = 0;
      } catch { }
      card.removeAttribute('data-preview-armed');
    };

    const apply = (key) => {
      pills.forEach((p) => p.classList.toggle('is-active', p.getAttribute('data-filter') === key));
      cards.forEach((c) => {
        const cat = c.getAttribute('data-category');
        const show = key === 'all' || key === cat;

        if (show) {
          c.style.display = '';
          c.classList.remove('is-filtered-out');
          c.setAttribute('aria-hidden', 'false');
          return;
        }

        stopPreview(c);
        c.classList.add('is-filtered-out');
        c.setAttribute('aria-hidden', 'true');
        window.setTimeout(() => {
          if (c.classList.contains('is-filtered-out')) c.style.display = 'none';
        }, HIDE_MS);
      });
    };

    pills.forEach((p) => {
      p.addEventListener('click', () => {
        apply(p.getAttribute('data-filter') || 'all');
      });
    });

    apply('all');
  }

  function initWorkPage() {
    const grid = qs('[data-work-grid]');
    if (!grid) return;
    if (grid.getAttribute('data-work-rendered') === '1') return;
    grid.setAttribute('data-work-rendered', '1');

    grid.innerHTML = '';

    const videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

    const makeCard = (p) => {
      const a = document.createElement('a');
      a.className = 'card';
      a.href = `project.html?slug=${encodeURIComponent(p.slug)}`;
      a.setAttribute('data-preview', '');
      a.setAttribute('data-category', p.categoryKey || 'all');
      a.setAttribute('data-cursor-hover', 'VIEW');
      a.setAttribute('aria-label', p.title || 'Project');

      a.innerHTML = `
        <div class="card__media" aria-hidden="true">
          <div class="poster"></div>
          <video muted loop playsinline preload="metadata" data-preview-video>
            <source src="${videoSrc}" type="video/mp4" />
          </video>
        </div>
        <div class="card__content">
          <span class="tag mono">${(p.category || '').toUpperCase()}</span>
          <h3>${p.title || ''}</h3>
          <div class="meta"><span>${p.client || ''}</span><span class="mono" style="letter-spacing:.08em; color: var(--text-2);">${p.year || ''}</span></div>
          <div class="cta mono">VIEW PROJECT →</div>
        </div>
        <div class="card__line" aria-hidden="true"></div>
      `;

      a.setAttribute('data-reveal', '');
      return a;
    };

    const items = Array.isArray(PROJECTS) ? PROJECTS : [];
    items.forEach((p, idx) => {
      const card = makeCard(p);

      if (idx === 0) {
        grid.appendChild(card);
        return;
      }

      if (idx === 1) {
        const stack = document.createElement('div');
        stack.className = 'stack';
        stack.appendChild(card);
        grid.appendChild(stack);
        return;
      }

      if (idx === 2) {
        const stack = qs('.stack', grid);
        if (stack) stack.appendChild(card);
        else grid.appendChild(card);
        return;
      }

      if (idx === 3) {
        card.style.gridColumn = '1 / -1';
        card.style.minHeight = '320px';
        grid.appendChild(card);
        return;
      }

      grid.appendChild(card);
    });
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

    set('[data-project-overview]', p.overview || '');

    const teamRoot = qs('[data-project-team]');
    if (teamRoot) {
      teamRoot.innerHTML = '';
      const team = Array.isArray(p.team) ? p.team : [];
      team.forEach((m) => {
        const row = document.createElement('div');
        row.className = 'credit-row';
        row.innerHTML = `<div class="credit-k mono">${m.role || ''}</div><div class="credit-v">${m.name || ''}</div>`;
        row.setAttribute('data-reveal', '');
        teamRoot.appendChild(row);
      });
      teamRoot.closest('.case-section')?.classList.toggle('is-empty', team.length === 0);
    }

    const tlRoot = qs('[data-project-timeline]');
    if (tlRoot) {
      tlRoot.innerHTML = '';
      const timeline = Array.isArray(p.timeline) ? p.timeline : [];
      timeline.forEach((s) => {
        const row = document.createElement('div');
        row.className = 'timeline-row';
        row.innerHTML = `<div class="timeline-k mono">${s.label || ''}</div><div class="timeline-v">${s.value || ''}</div>`;
        row.setAttribute('data-reveal', '');
        tlRoot.appendChild(row);
      });
      tlRoot.closest('.case-section')?.classList.toggle('is-empty', timeline.length === 0);
    }

    const mRoot = qs('[data-project-metrics]');
    if (mRoot) {
      mRoot.innerHTML = '';
      const metrics = Array.isArray(p.metrics) ? p.metrics : [];
      metrics.forEach((m) => {
        const card = document.createElement('div');
        card.className = 'metric';
        card.innerHTML = `<div class="metric-k mono">${m.label || ''}</div><div class="metric-v">${m.value || ''}</div>`;
        card.setAttribute('data-reveal', '');
        mRoot.appendChild(card);
      });
      mRoot.closest('.case-section')?.classList.toggle('is-empty', metrics.length === 0);
    }

    const gRoot = qs('[data-project-gallery]');
    if (gRoot) {
      gRoot.innerHTML = '';
      const gallery = Array.isArray(p.gallery) ? p.gallery : [];
      const items = gallery.length > 0 ? gallery : ['ph-1', 'ph-2', 'ph-3', 'ph-4'];

      items.forEach((src, idx) => {
        const item = document.createElement('div');
        const isPh = String(src).startsWith('ph-');
        item.className = isPh ? 'gallery-item gallery-item--ph' : 'gallery-item';

        if (isPh) {
          const ph = document.createElement('div');
          ph.className = 'gallery-ph';
          ph.setAttribute('data-ph', String(idx + 1));
          item.appendChild(ph);
        } else {
          const img = document.createElement('img');
          img.src = src;
          img.alt = '';
          img.loading = 'lazy';
          img.decoding = 'async';
          item.appendChild(img);
        }

        item.setAttribute('data-reveal', '');
        gRoot.appendChild(item);
      });

      gRoot.closest('.case-section')?.classList.toggle('is-empty', false);
    }

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

    let lastFocus = null;

    const focusables = () => qsa('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])', overlay)
      .filter((el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');

    const open = () => {
      lastFocus = document.activeElement;
      document.documentElement.classList.add('is-menu-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
      const f = focusables();
      if (f[0]) f[0].focus();
    };

    const close = () => {
      document.documentElement.classList.remove('is-menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
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

      if (e.key === 'Tab' && document.documentElement.classList.contains('is-menu-open')) {
        const f = focusables();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    qsa('a', overlay).forEach((a) => {
      a.addEventListener('click', () => close());
    });

    close();
  }

  function initBlogFilters() {
    const list = qs('[data-post-list]');
    if (!list) return;

    const chips = qsa('[data-post-filter]');
    const posts = qsa('[data-post][data-post-category]', list);

    const apply = (key) => {
      chips.forEach((c) => c.classList.toggle('is-active', c.getAttribute('data-post-filter') === key));
      posts.forEach((p) => {
        const cat = p.getAttribute('data-post-category');
        const show = key === 'all' || key === cat;
        p.style.display = show ? '' : 'none';
      });
    };

    chips.forEach((c) => {
      c.addEventListener('click', () => apply(c.getAttribute('data-post-filter') || 'all'));
    });

    apply('all');
  }

  function initPostPage() {
    const root = qs('[data-post-page]');
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || '';
    const post = POSTS.find((p) => p.slug === slug) || POSTS[0];
    if (!post) return;

    const set = (sel, val) => {
      const el = qs(sel);
      if (!el) return;
      el.textContent = val;
    };

    set('[data-post-title]', post.title);
    set('[data-post-category]', post.category);
    set('[data-post-deck]', post.deck);
    set('[data-post-meta]', `${post.readTime}  •  ${post.date}`);

    const body = qs('[data-post-body]');
    if (body) {
      body.innerHTML = '';
      post.body.forEach((blk) => {
        if (blk.type === 'h2') {
          const h = document.createElement('h2');
          h.textContent = blk.text;
          h.setAttribute('data-reveal', '');
          body.appendChild(h);
          return;
        }
        const p = document.createElement('p');
        p.textContent = blk.text;
        p.setAttribute('data-reveal', '');
        body.appendChild(p);
      });
    }

    document.title = `Gebeya Media — ${post.title}`;
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
    const hero = qs('.hero');
    const video = qs('[data-hero-video]');
    if (!hero || !video) return;
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
      video.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(1.08)`;
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

  function initHeroCanvas() {
    const canvas = qs('[data-hero-canvas]');
    if (!canvas) return;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const getRgb = (name, fallback) => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      const parts = raw.split(',').map((v) => parseFloat(v.trim())).filter((n) => Number.isFinite(n));
      if (parts.length === 3) return parts;
      return fallback;
    };

    const teal = () => getRgb('--accent-rgb', [0, 187, 150]);
    const orange = () => getRgb('--accent-2-rgb', [236, 94, 42]);

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    let mx = 0;
    let my = 0;
    let mxf = 0;
    let myf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = Math.max(1, Math.floor(rect.width * dpr));
      h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
    };

    const onMove = (e) => {
      const x = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
      const y = (e.clientY / Math.max(1, window.innerHeight)) * 2 - 1;
      mx = clamp(x, -1, 1);
      my = clamp(y, -1, 1);
    };

    const blobs = [
      { r: 0.42, sp: 0.00014, ph: 0.0, col: 'teal' },
      { r: 0.36, sp: 0.00011, ph: 1.7, col: 'orange' },
      { r: 0.30, sp: 0.00009, ph: 3.2, col: 'teal' }
    ];

    const noise = document.createElement('canvas');
    const nctx = noise.getContext('2d');
    let nw = 0;
    let nh = 0;

    const refreshNoise = () => {
      if (!nctx) return;
      nw = Math.max(1, Math.floor(w / 2));
      nh = Math.max(1, Math.floor(h / 2));
      noise.width = nw;
      noise.height = nh;

      const img = nctx.createImageData(nw, nh);
      const data = img.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 20;
      }
      nctx.putImageData(img, 0, 0);
    };

    const draw = (t) => {
      if (!running) return;

      mxf += (mx - mxf) * 0.06;
      myf += (my - myf) * 0.06;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      const [tr, tg, tb] = teal();
      const [or, og, ob] = orange();

      const drift = Math.max(w, h) * 0.035;
      const dx = mxf * drift;
      const dy = myf * drift;

      blobs.forEach((b, i) => {
        const tt = t * b.sp;
        const x = (0.18 + 0.64 * (0.5 + 0.5 * Math.sin(tt + b.ph + i))) * w + dx * (0.6 + i * 0.15);
        const y = (0.18 + 0.64 * (0.5 + 0.5 * Math.cos(tt * 1.12 + b.ph))) * h + dy * (0.6 + i * 0.15);
        const rr = Math.max(w, h) * b.r;

        const isTeal = b.col === 'teal';
        const r = isTeal ? tr : or;
        const g = isTeal ? tg : og;
        const bl = isTeal ? tb : ob;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, rr);
        grad.addColorStop(0, `rgba(${r},${g},${bl},0.22)`);
        grad.addColorStop(0.55, `rgba(${r},${g},${bl},0.10)`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, rr, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      if (nctx) {
        if ((t | 0) % 6 === 0) refreshNoise();
        ctx.save();
        ctx.globalAlpha = 0.10;
        ctx.globalCompositeOperation = 'overlay';
        ctx.drawImage(noise, 0, 0, w, h);
        ctx.restore();
      }

      raf = window.requestAnimationFrame(draw);
    };

    const onVis = () => {
      running = !document.hidden;
      if (running && !raf) raf = window.requestAnimationFrame(draw);
      if (!running && raf) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    resize();
    refreshNoise();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVis);
    raf = window.requestAnimationFrame(draw);
  }

  function initStatsViz() {
    const root = qs('.statsviz');
    if (!root) return;

    const reduced = prefersReducedMotion;
    const kpies = qsa('[data-count-to]', root);
    const chart = qs('[data-chart]', root);
    const line = chart ? qs('.chart__line', chart) : null;
    const glow = chart ? qs('.chart__glow', chart) : null;

    const runCounters = () => {
      kpies.forEach((el) => {
        if (el.getAttribute('data-counted') === '1') return;
        el.setAttribute('data-counted', '1');

        const to = Number(el.getAttribute('data-count-to') || '0');
        const suffix = el.getAttribute('data-count-suffix') || '';
        if (!Number.isFinite(to)) return;

        if (reduced) {
          el.textContent = String(to) + suffix;
          return;
        }

        const dur = 850;
        const start = performance.now();
        const from = 0;

        const step = (t) => {
          const p = clamp((t - start) / dur, 0, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = Math.round(from + (to - from) * eased);
          el.textContent = String(v) + suffix;
          if (p < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      });
    };

    const runChart = () => {
      if (!line) return;
      if (line.getAttribute('data-drawn') === '1') return;
      line.setAttribute('data-drawn', '1');
      if (glow) glow.setAttribute('data-drawn', '1');

      if (reduced) return;

      const paths = [line, glow].filter(Boolean);
      paths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len}`;
        p.style.strokeDashoffset = `${len}`;
      });

      const dur = 980;
      const start = performance.now();
      const step = (t) => {
        const p = clamp((t - start) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const off = 1 - eased;
        paths.forEach((pth) => {
          const len = pth.getTotalLength();
          pth.style.strokeDashoffset = `${len * off}`;
        });
        if (p < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        runCounters();
        runChart();
        io.disconnect();
      });
    }, { threshold: 0.22 });
    io.observe(root);
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
    const safe = (name, fn) => {
      try {
        fn();
      } catch (err) {
        console.error(`[GM] init failed: ${name}`, err);
      }
    };

    safe('theme', initTheme);
    safe('preloader', initPreloader);
    safe('header', initHeader);
    safe('progress', initProgress);
    safe('overlayMenu', initOverlayMenu);
    safe('curtain', initCurtainTransitions);
    safe('heroParallax', initHeroParallax);
    safe('heroCanvas', initHeroCanvas);
    safe('statsViz', initStatsViz);
    safe('accordion', initAccordion);
    safe('showreel', initShowreel);
    safe('scrollHint', initScrollHint);
    safe('cursor', initCursor);
    safe('marquee', initMarquee);
    safe('workPage', initWorkPage);
    safe('workFilters', initWorkFilters);
    safe('previewVideos', initPreviewVideos);
    safe('projectPage', initProjectPage);
    safe('sharedTransition', initSharedElementOpenTransition);
    safe('blogFilters', initBlogFilters);
    safe('postPage', initPostPage);
    safe('reveals', initReveals);
    safe('magnetic', initMagneticButtons);
  });
})();
