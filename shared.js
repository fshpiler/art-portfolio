/* ═══════════════════════════════════════════════
   FAINA SHPILER — Shared JS (cursor, nav, reveal)
   ═══════════════════════════════════════════════ */

(function() {

  /* ── CURSOR ── */
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');
  if (cursor && ring) {
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
    function animCursor() {
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();

    function cursorGrow() {
      cursor.style.width = '14px'; cursor.style.height = '14px';
      ring.style.width = '50px'; ring.style.height = '50px';
      ring.style.borderColor = '#d4408a';
    }
    function cursorShrink() {
      cursor.style.width = '8px'; cursor.style.height = '8px';
      ring.style.width = '36px'; ring.style.height = '36px';
      ring.style.borderColor = '#8b2fc9';
    }
    document.querySelectorAll('a, button, .masonry-item, .cat-tile').forEach(function(el) {
      el.addEventListener('mouseenter', cursorGrow);
      el.addEventListener('mouseleave', cursorShrink);
    });
  }

  /* ── NAV SCROLL ── */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── SCROLL REVEAL ── */
  var reveals = document.querySelectorAll('.reveal');
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(function(el) { revealObs.observe(el); });

  /* ── LIGHTBOX ── */
  window._lbImages = window._lbImages || [];
  window._lbIdx = 0;

  var lb    = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var lbPrev  = document.getElementById('lbPrev');
  var lbNext  = document.getElementById('lbNext');

  if (lb && lbImg) {
    if (lbClose) lbClose.addEventListener('click', function() { lb.classList.remove('open'); });
    lb.addEventListener('click', function(e) { if (e.target === lb) lb.classList.remove('open'); });
    if (lbPrev) lbPrev.addEventListener('click', function() {
      window._lbIdx = (window._lbIdx - 1 + window._lbImages.length) % window._lbImages.length;
      lbImg.src = window._lbImages[window._lbIdx];
    });
    if (lbNext) lbNext.addEventListener('click', function() {
      window._lbIdx = (window._lbIdx + 1) % window._lbImages.length;
      lbImg.src = window._lbImages[window._lbIdx];
    });
    document.addEventListener('keydown', function(e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowLeft') { lbPrev && lbPrev.click(); }
      if (e.key === 'ArrowRight') { lbNext && lbNext.click(); }
    });
  }

  window.openLightbox = function(idx) {
    window._lbIdx = idx;
    if (lbImg) lbImg.src = window._lbImages[idx];
    if (lb) lb.classList.add('open');
  };

  /* ── EMAIL DECODE ── */
  var _e = atob('ZnNoaWxlckBnbWFpbC5jb20=');
  var _m = atob('bWFpbHRvOg==');
  document.querySelectorAll('[data-email]').forEach(function(el) {
    el.href = _m + _e;
  });

  /* ── CONTACT FORM ── */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name    = document.getElementById('fname').value;
      var email   = document.getElementById('femail').value;
      var subject = document.getElementById('fsubject').value || 'Website Inquiry';
      var msg     = document.getElementById('fmessage').value;
      var body    = 'Name: ' + name + '%0AEmail: ' + email + '%0A%0A' + encodeURIComponent(msg);
      window.location.href = _m + _e + '?subject=' + encodeURIComponent(subject) + '&body=' + body;
    });
  }

})();
