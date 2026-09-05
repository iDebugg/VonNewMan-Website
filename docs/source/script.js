(function () {
  "use strict";

  /* Sticky nav shadow */
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("is-stuck", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Dropdown menus */
  var toggles = Array.prototype.slice.call(document.querySelectorAll("[data-menu]"));
  function closeMenus(except) {
    toggles.forEach(function (t) {
      if (t === except) return;
      t.setAttribute("aria-expanded", "false");
      document.getElementById(t.getAttribute("data-menu")).classList.remove("is-open");
    });
  }
  toggles.forEach(function (t) {
    var menu = document.getElementById(t.getAttribute("data-menu"));
    t.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = t.getAttribute("aria-expanded") === "true";
      closeMenus(t);
      t.setAttribute("aria-expanded", open ? "false" : "true");
      menu.classList.toggle("is-open", !open);
    });
  });
  document.addEventListener("click", function () { closeMenus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenus(); closeMobile(); } });

  /* Mobile menu */
  var burger = document.querySelector(".nav__burger");
  var mobile = document.getElementById("mobile-menu");
  function closeMobile() { if (!mobile) return; mobile.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  if (burger && mobile) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = mobile.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMobile); });
  }

  /* Sector switch */
  var segButtons = Array.prototype.slice.call(document.querySelectorAll(".seg button"));
  segButtons.forEach(function (b) {
    b.addEventListener("click", function () {
      segButtons.forEach(function (x) { x.setAttribute("aria-selected", "false"); });
      b.setAttribute("aria-selected", "true");
      document.querySelectorAll(".sector-panel").forEach(function (p) { p.classList.remove("is-active"); });
      document.getElementById(b.getAttribute("aria-controls")).classList.add("is-active");
    });
  });

  /* Live clocks: Lagos (WAT) and London (GMT/BST) */
  function tick() {
    var now = new Date();
    [["clock-lagos", "Africa/Lagos"], ["clock-london", "Europe/London"]].forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (!el) return;
      try {
        var parts = new Intl.DateTimeFormat("en-GB", { timeZone: pair[1], hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
        var zone = new Intl.DateTimeFormat("en-GB", { timeZone: pair[1], timeZoneName: "short" }).formatToParts(now).filter(function (p) { return p.type === "timeZoneName"; })[0];
        var label = pair[1] === "Africa/Lagos" ? "WAT" : (zone ? zone.value : "");
        el.innerHTML = parts + "<span>" + label + "</span>";
      } catch (err) { el.textContent = "--:--"; }
    });
  }
  tick();
  setInterval(tick, 15000);

  /* Reveal on scroll */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Contact form: compose an email (no backend required) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = "Enquiry from " + (f.org.value || f.name.value || "website");
      var body = [
        "Name: " + f.name.value,
        "Organisation: " + f.org.value,
        "Email: " + f.email.value,
        "Sector: " + f.sector.value,
        "Interested in: " + f.interest.value,
        "",
        f.message.value
      ].join("\n");
      window.location.href = "mailto:info@vonnewmanconsulting.com.ng?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var note = document.getElementById("form-note");
      if (note) note.textContent = "Your email app should open with the message ready to send.";
    });
  }

  /* Footer year */
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
