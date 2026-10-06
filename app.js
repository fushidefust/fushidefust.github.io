/* ==========================================================================
   Portfolio - layout rendering + interactions
   ========================================================================== */
(function () {
  "use strict";

  var C = window.PORTFOLIO;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------------------------------------------------------- links */

  function linkLabel(label) {
    return '<span class="link-underline__roll"><b>' + esc(label) + "</b><b>" + esc(label) + "</b></span>";
  }

  function fillLink(node, label, href) {
    if (!node) return;
    if (href) node.setAttribute("href", href);
    node.innerHTML = linkLabel(label) + '<i class="arrow" aria-hidden="true"></i>';
  }

  /* --------------------------------------------------------- section heads */

  var HEADS = {
    "ai-video": [C.aiVideos.index, C.aiVideos.label],
    editing: [C.editing.index, C.editing.label],
    about: [C.about.index, C.about.label],
    portfolio: [C.portfolio.index, C.portfolio.label],
    services: [C.services.index, C.services.label],
    pricing: [C.pricing.index, C.pricing.label],
    illustrations: [C.illustrations.index, C.illustrations.label],
    archive: [C.archive.index, C.archive.label],
    stats: [C.stats.index, C.stats.label],
    articles: [C.articles.index, C.articles.label],
    faq: [C.faq.index, C.faq.label]
  };

  function renderHeads() {
    Object.keys(HEADS).forEach(function (id) {
      var section = document.getElementById(id);
      if (!section) return;
      var idx = $(".sec-head__index", section);
      var lbl = $(".sec-head__label", section);
      if (idx) idx.textContent = "(" + HEADS[id][0] + ")";
      if (lbl) lbl.textContent = "(" + HEADS[id][1] + ")";
    });
    $$("[data-brand-year]").forEach(function (n) { n.textContent = C.brand.year; });
    $$("[data-brand-version]").forEach(function (n) { n.textContent = C.brand.version; });
    $$("[data-brand-name]").forEach(function (n) { n.textContent = C.brand.name + "©"; });
  }

  /* ----------------------------------------------------------- navigation */

  function renderNav() {
    $("#navList").innerHTML = C.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + esc(item.label) + "<sup>" + esc(item.index) + "</sup></a></li>";
    }).join("");

    $("#menuList").innerHTML = C.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + esc(item.label) + "<sup>" + esc(item.index) + "</sup></a></li>";
    }).join("");
    var menuMail = $("#menuMail");
    menuMail.textContent = C.contact.email;
    menuMail.setAttribute("href", "mailto:" + C.contact.email);

    $("#footerNav").innerHTML = C.contact.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + esc(item.label) + "<sup>" + esc(item.index) + "</sup></a></li>";
    }).join("");
  }

  /* ---------------------------------------------------------------- hero */

  function renderHero() {
    var mark = $("#brandMark");
    mark.textContent = C.brand.mark;

    $("#badgeImage").src = C.badge.image;
    $("#badgeTitle").textContent = C.badge.title;
    $("#badgeName").textContent = C.badge.name;
    $("#badgeRole").textContent = C.badge.role;

    $("#heroImage").src = C.hero.image;
    $("#heroImage").alt = C.brand.name + " key visual";

    var video = $("#heroVideo");
    var hero = $("#heroSection");
    if (C.hero.video && !reduced) {
      video.setAttribute("poster", C.hero.image);
      video.src = C.hero.video;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      hero.classList.add("has-video");

      function kick() {
        var p = video.play();
        if (p && p.catch) p.catch(function () { /* autoplay blocked: poster stays */ });
      }
      if (video.readyState >= 2) kick();
      video.addEventListener("loadeddata", kick);
      video.addEventListener("canplay", kick);
      document.addEventListener("visibilitychange", function () {
        if (!document.hidden) kick();
      });
    } else {
      video.remove();
    }
    $("#heroLead").innerHTML = C.hero.leadLines.map(function (line) { return esc(line); }).join("<br>");
    fillLink($("#heroCta"), C.hero.cta.label, C.hero.cta.href);

    $("#heroDisciplines").innerHTML = C.hero.disciplines.map(function (line) {
      return "<li>" + esc(line) + "</li>";
    }).join("");

    $("#heroWordmark").textContent = C.brand.wordmark;
  }

  /* --------------------------------------------------------------- about */

  function renderAbout() {
    $("#aboutImage").src = C.about.image;
    $("#aboutImage").alt = C.about.label;
    fillLink($("#aboutCta"), C.about.cta.label, C.about.cta.href);

    $("#aboutNotes").innerHTML = C.about.notes.map(function (n) {
      return '<div class="about__note"><p class="about__note-tag">' + esc(n.tag) +
        '</p><p class="about__note-text">' + esc(n.text) + "</p></div>";
    }).join("");

    var track = $("#clientsTrack");
    var one = C.clients.map(function (c) {
      return '<div class="ticker__item"><span>' + esc(c) + "</span></div>";
    }).join("");
    track.innerHTML = one + one + one;
  }

  /* ----------------------------------------------------------- portfolio */

  function renderPortfolio() {
    $("#portfolioTitle").textContent = C.portfolio.title;
    fillLink($("#portfolioCta"), C.portfolio.cta.label, C.portfolio.cta.href);

    var seeAll = $("#seeAll");
    seeAll.setAttribute("href", C.portfolio.seeAll.href);
    $("#seeAllImage").src = C.portfolio.seeAllImage;
    $("#seeAllLabel").textContent = C.portfolio.seeAll.label;

    $("#portfolioCards").innerHTML = C.portfolio.projects.map(function (p, i) {
      return '<a class="p-card p-card--' + esc(p.layout || "portrait") + '" href="' + p.image +
        '" data-lightbox data-caption="' + esc(p.name) + '" data-reveal="img" data-delay="' + (i * 0.08) + '">' +
        '<span class="p-card__frame">' +
          '<img class="p-card__bg" src="' + p.image + '" alt="" loading="lazy">' +
          '<span class="p-card__inner"><img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy"></span>' +
          '<span class="p-card__hover">查看</span>' +
        "</span>" +
        '<span class="p-card__meta">' +
          '<span class="col-1">(' + p.id + ")</span>" +
          '<span class="col-2">' + esc(p.name) + "<small>" + esc(p.category) + "</small></span>" +
          '<span class="col-3">' + esc(p.year) + "</span>" +
        "</span>" +
      "</a>";
    }).join("");
  }

  /* ------------------------------------------------------------ services */

  function renderServices() {
    var s = C.services;
    $("#servicesImage").src = s.image;
    $("#servicesImage").alt = s.label;
    fillLink($("#servicesCta"), s.cta.label, s.cta.href);

    $("#servicesList").innerHTML = s.items.map(function (item, i) {
      return '<article class="services__row" data-reveal="fade" data-delay="' + (i * 0.05) + '">' +
        '<p class="services__num">' + esc(item.id) + "</p>" +
        '<div class="services__copy">' +
          '<h3 class="services__title">' + esc(item.title) + "</h3>" +
          '<p class="services__sub">' + esc(item.subtitle) + "</p>" +
          '<p class="services__text">' + esc(item.text) + "</p>" +
        "</div>" +
        '<figure class="services__media"><img src="' + item.image + '" alt="' + esc(item.title) + '" loading="lazy"></figure>' +
      "</article>";
    }).join("");
  }

  /* ------------------------------------------------------------- pricing */

  function renderPricing() {
    $("#pricingGrid").innerHTML = C.pricing.plans.map(function (plan, i) {
      return '<a class="plan cover-card' + (plan.dark ? " plan--dark" : "") + '" href="' + plan.image +
        '" data-lightbox data-caption="' + esc(plan.name) + '" data-reveal="fade" data-delay="' + (i * 0.06) + '">' +
        '<span class="plan__media"><img src="' + plan.image + '" alt="' + esc(plan.name) + '" loading="lazy"></span>' +
        '<span class="plan__body">' +
          '<span class="plan__name">' + esc(plan.name) + "</span>" +
          '<span class="plan__tagline">' + esc(plan.tagline) + "</span>" +
          '<span class="plan__meta">' + esc(plan.meta) + "</span>" +
        "</span>" +
      "</a>";
    }).join("");
  }

  /* --------------------------------------------------------- testimonials */

  function renderIllustrations() {
    $("#illustrationsGrid").innerHTML = C.illustrations.items.map(function (item, i) {
      return '<a class="illustration-card" href="' + item.image + '" data-lightbox data-caption="' + esc(item.title) +
        '" data-reveal="img" data-delay="' + (i * 0.06) + '">' +
        '<span class="illustration-card__media"><img src="' + item.image + '" alt="' + esc(item.title) + '" loading="lazy"></span>' +
        '<span class="illustration-card__meta"><span>' + esc(item.title) + "</span><span>" + esc(item.meta) + "</span></span>" +
      "</a>";
    }).join("");
  }

  /* ------------------------------------------------------------- archive */

  function renderArchive() {
    var images = C.archive.pages.join("|");
    $("#comicsNote").textContent = C.archive.note;
    $("#archiveList").innerHTML = C.archive.pages.map(function (src, i) {
      return '<a class="comic-page" href="' + src + '" data-lightbox data-images="' + images +
        '" data-index="' + i + '" data-caption="漫画" data-reveal="img" data-delay="' + Math.min(i * 0.025, 0.2) + '">' +
        '<img src="' + src + '" alt="漫画第 ' + (i + 1) + ' 页" loading="lazy">' +
        '<span class="comic-page__num">' + String(i + 1).padStart(2, "0") + "</span>" +
      "</a>";
    }).join("");
  }

  /* --------------------------------------------------------------- editing */

  function videoCardMarkup(item, i) {
    return '<article class="video-card video-card--' + esc(item.layout || "wide") +
      '" data-reveal="fade" data-delay="' + (i * 0.05) + '">' +
      '<video class="video-card__media" controls preload="metadata" playsinline poster="' + item.poster + '">' +
        '<source src="' + item.src + '" type="video/mp4">' +
      "</video>" +
      '<div class="video-card__body">' +
        '<p class="video-card__id">(' + esc(item.id) + ")</p>" +
        '<div><h3 class="video-card__title">' + esc(item.title) + "</h3>" +
        '<p class="video-card__cat">' + esc(item.category) + "</p></div>" +
        '<p class="video-card__meta">' + esc(item.meta) + "</p>" +
      "</div>" +
    "</article>";
  }

  function renderAiVideos() {
    $("#aiVideoGrid").innerHTML = C.aiVideos.items.map(videoCardMarkup).join("");
  }

  function renderEditing() {
    $("#editingGrid").innerHTML = C.editing.items.map(videoCardMarkup).join("");
  }

  /* --------------------------------------------------------------- stats */

  function renderStats() {
    $("#statsGrid").innerHTML = C.stats.items.map(function (s, i) {
      return '<div class="stat" data-reveal="fade" data-delay="' + (i * 0.05) + '">' +
        '<p class="stat__value" data-count="' + s.value + '" data-suffix="' + esc(s.suffix) + '">0' + esc(s.suffix) + "</p>" +
        '<p class="stat__label">' + esc(s.label) + "</p>" +
        '<p class="stat__text">' + esc(s.text) + "</p>" +
      "</div>";
    }).join("");
  }

  /* ------------------------------------------------------------ articles */

  function renderArticles() {
    $("#articlesGrid").innerHTML = C.articles.items.map(function (a, i) {
      return '<a class="article" href="' + a.href + '" data-lightbox data-caption="' + esc(a.title) +
        '" data-reveal="img" data-delay="' + (i * 0.06) + '">' +
        '<span class="article__media"><img src="' + a.image + '" alt="' + esc(a.title) + '" loading="lazy"></span>' +
        '<span class="article__meta"><span>' + esc(a.id) + "</span>" +
        "<span>" + esc(a.title) + '<span class="article__cat">' + esc(a.category) + "</span></span>" +
        "<span>" + esc(a.year) + "</span></span>" +
      "</a>";
    }).join("");
  }

  /* ----------------------------------------------------------------- faq */

  function renderFaq() {
    var reel = C.faq.showreel;
    var link = $("#showreel");
    link.setAttribute("href", reel.href);
    link.setAttribute("data-lightbox", "");
    link.setAttribute("data-caption", reel.caption);
    $("#showreelImage").src = reel.image;
    $("#showreelImage").alt = reel.caption;
    $("#showreelLabel").textContent = reel.label;
    $("#showreelCaption").textContent = reel.caption;

    $("#faqList").innerHTML = C.faq.items.map(function (item) {
      return '<li class="faq__item">' +
        '<button class="faq__q" type="button" aria-expanded="false"><span>' + esc(item.q) + "</span>" +
        '<span class="faq__sign" aria-hidden="true"></span></button>' +
        '<div class="faq__a"><p>' + esc(item.a) + "</p></div>" +
      "</li>";
    }).join("");
  }

  /* -------------------------------------------------------------- footer */

  function renderFooter() {
    $("#footerHeading").textContent = C.contact.heading;
    var mail = $("#footerMail");
    mail.setAttribute("href", "mailto:" + C.contact.email);
    mail.innerHTML = "<span>" + esc(C.contact.email) + "</span>";
    var phone = $("#footerPhone");
    phone.setAttribute("href", "tel:" + C.contact.phone);
    phone.innerHTML = "<span>" + esc(C.contact.phone) + "</span>";
    fillLink($("#footerCta"), C.contact.cta.label, C.contact.cta.href);
    $("#footerWordmark").textContent = C.brand.wordmarkFooter;

    var menuPhone = $("#menuPhone");
    menuPhone.setAttribute("href", "tel:" + C.contact.phone);
    menuPhone.textContent = C.contact.phone;
  }

  /* -------------------------------------------------------------- intro  */

  function runIntro() {
    var intro = $("#intro");
    var counter = $("#introCount");
    var hero = $("#heroSection");

    if (reduced || new URLSearchParams(window.location.search).has("preview")) {
      intro.classList.add("is-gone");
      hero.classList.add("is-ready");
      return;
    }

    var start = performance.now();
    var duration = 820;

    function tick(now) {
      var p = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      counter.textContent = String(Math.round(eased * 100)).padStart(2, "0");
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        intro.classList.add("is-done");
        hero.classList.add("is-ready");
        window.setTimeout(function () { intro.classList.add("is-gone"); }, 1400);
      }
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------- reveals */

  /* Split a statement into visual lines so every line can mask-reveal.
     Re-runs on resize, so the wrapping always matches the real layout. */
  function splitStatement(el, text) {
    if (!el || !text) return;
    var wasIn = el.classList.contains("is-in");
    el.setAttribute("data-raw", text);
    el.innerHTML = text.split(/\s+/).filter(Boolean).map(function (word) {
      return '<span class="w">' + esc(word) + "</span>";
    }).join(" ");

    var words = $$(".w", el);
    var lines = [];
    var current = [];
    var top = null;
    words.forEach(function (word) {
      var t = word.offsetTop;
      if (top === null || Math.abs(t - top) < 3) {
        current.push(word.textContent);
      } else {
        lines.push(current.join(" "));
        current = [word.textContent];
      }
      top = t;
    });
    if (current.length) lines.push(current.join(" "));

    el.innerHTML = lines.map(function (line, i) {
      return '<span class="line" style="--i:' + i + '"><i>' + esc(line) + "</i></span>";
    }).join("");
    if (wasIn) el.classList.add("is-in");
  }

  function initStatements() {
    var about = $("#aboutStatement");
    var services = $("#servicesStatement");
    var aboutText = C.about.statement.join(" ");
    var servicesText = C.services.statement.join(" ");

    splitStatement(about, aboutText);
    splitStatement(services, servicesText);

    var raf = null;
    window.addEventListener("resize", function () {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(function () {
        splitStatement(about, aboutText);
        splitStatement(services, servicesText);
      });
    });
  }

  function initReveals() {
    var nodes = $$("[data-reveal], .statement, .reveal-line");
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseFloat(el.getAttribute("data-delay") || "0");
        window.setTimeout(function () { el.classList.add("is-in"); }, delay * 1000);
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ------------------------------------------------------------ counters */

  function animateCount(node) {
    var raw = node.getAttribute("data-count") || "0";
    var target = parseFloat(raw);
    var decimals = (raw.split(".")[1] || "").length;
    var suffix = node.getAttribute("data-suffix") || "";
    var start = performance.now();
    var dur = reduced ? 1 : 1400;

    function frame(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      var value = target * eased;
      node.textContent = (decimals ? value.toFixed(decimals) : String(Math.round(value))) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var nodes = $$("[data-count]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(animateCount);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ------------------------------------------------------------ marquees */

  function initTickers() {
    if (reduced) return;
    $$(".ticker__track").forEach(function (track) {
      var offset = 0;
      var velocity = 0;
      var lastScroll = window.scrollY;
      var half = 0;

      function measure() { half = track.scrollWidth / 2; }
      measure();
      window.addEventListener("resize", measure);

      function loop() {
        var y = window.scrollY;
        var delta = y - lastScroll;
        lastScroll = y;
        velocity += (delta * 0.42 - velocity) * 0.12;
        offset -= velocity;

        if (half > 0) {
          if (offset <= -half) offset += half;
          if (offset > 0) offset -= half;
        }
        track.style.transform = "translate3d(" + offset.toFixed(2) + "px,0,0)";
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    });
  }

  /* -------------------------------------------------------- hero parallax */

  function initHeroParallax() {
    if (reduced) return;
    var media = $(".hero__media");
    var word = $(".hero__wordmark");
    var body = $(".hero__body");
    var ticking = false;

    function update() {
      var y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        media.style.transform = "translate3d(0," + (y * 0.16).toFixed(2) + "px,0)";
        word.style.transform = "translate3d(0," + (y * -0.06).toFixed(2) + "px,0)";
        body.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ faq */

  function initFaq() {
    $$(".faq__item").forEach(function (item) {
      var btn = $(".faq__q", item);
      var panel = $(".faq__a", item);
      btn.addEventListener("click", function () {
        var open = item.classList.contains("is-open");
        $$(".faq__item.is-open").forEach(function (other) {
          other.classList.remove("is-open");
          $(".faq__a", other).style.height = "0px";
          $(".faq__q", other).setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item.classList.add("is-open");
          panel.style.height = panel.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ----------------------------------------------------------------- menu */

  function initMenu() {
    var btn = $("#menuBtn");
    var overlay = $("#menuOverlay");

    function setOpen(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
      overlay.classList.toggle("is-open", open);
      document.body.classList.toggle("is-locked", open);
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    $$("#menuList a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* --------------------------------------------------------------- lightbox */

  function initLightbox() {
    var box = $("#lightbox");
    var image = $("#lightboxImage");
    var caption = $("#lightboxCaption");
    var count = $("#lightboxCount");
    var previous = $("#lightboxPrev");
    var next = $("#lightboxNext");
    var items = [];
    var index = 0;

    function show(nextIndex) {
      if (!items.length) return;
      index = (nextIndex + items.length) % items.length;
      image.src = items[index].src;
      image.alt = items[index].caption;
      caption.textContent = items[index].caption;
      count.textContent = (index + 1) + " / " + items.length;
      var hasSiblings = items.length > 1;
      previous.hidden = !hasSiblings;
      next.hidden = !hasSiblings;
    }

    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
    }

    function open(trigger) {
      var raw = trigger.getAttribute("data-images");
      var title = trigger.getAttribute("data-caption") || "";
      items = raw ? raw.split("|").map(function (src, i) {
        return { src: src, caption: title + " · " + (i + 1).toString().padStart(2, "0") };
      }) : [{ src: trigger.getAttribute("href"), caption: title }];

      show(parseInt(trigger.getAttribute("data-index") || "0", 10) || 0);
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      $("#lightboxClose").focus();
    }

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-lightbox]");
      if (!trigger) return;
      e.preventDefault();
      open(trigger);
    });

    $("#lightboxClose").addEventListener("click", close);
    previous.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox__stage")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }

  /* ------------------------------------------------------------ bootstrap */

  renderHeads();
  renderNav();
  renderHero();
  renderAiVideos();
  renderEditing();
  renderAbout();
  renderPortfolio();
  renderServices();
  renderPricing();
  renderIllustrations();
  renderArchive();
  renderStats();
  renderArticles();
  renderFaq();
  renderFooter();

  initStatements();
  initReveals();
  initCounters();
  initTickers();
  initHeroParallax();
  initFaq();
  initMenu();
  initLightbox();
  runIntro();

  if (new URLSearchParams(window.location.search).has("preview") && window.location.hash) {
    var previewTarget = document.querySelector(window.location.hash);
    if (previewTarget) window.scrollTo(0, previewTarget.offsetTop);
  }
})();
