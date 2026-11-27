(function () {
  var SITE = window.SITE, PROJECTS = window.PROJECTS;
  var IMG = "";

  var UI = {
    en: {
      brandName: "Haoqing (Justin) Pan", navWork: "Work", navAbout: "About", navContact: "Contact",
      hello: "Hi, I'm", aboutTitle: "About me", education: "Education", skills: "Skills",
      contactTitle: "Contact me", contactLead: "Seen something you like? Leave me a message, or reach me directly.",
      fName: "Your name", fEmail: "Your email", fMsg: "Message", fSend: "Send message",
      fNote: "This opens your email app with the message ready to send.",
      errMsg: "Write a message first.", errEmail: "Check your email address.",
      solo: "Solo", team: "Team", back: "Back to work", next: "Next project", credit: "Credit",
      email: "Email", phone: "Phone", wechat: "WeChat", linkedin: "LinkedIn",
      copied: "WeChat ID copied", subject: "Portfolio message from ",
      footer: "All works shown are by Haoqing (Justin) Pan or the credited team. All rights reserved.",
      inProgress: "In progress"
    },
    zh: {
      brandName: "潘昊卿 Haoqing (Justin) Pan", navWork: "作品", navAbout: "关于我", navContact: "联系我",
      hello: "你好，我是", aboutTitle: "关于我", education: "教育经历", skills: "技能",
      contactTitle: "联系我", contactLead: "看到喜欢的作品？欢迎给我留言，或者直接联系我。",
      fName: "你的名字", fEmail: "你的邮箱", fMsg: "留言内容", fSend: "发送留言",
      fNote: "点击后会打开你的邮件应用，留言内容已自动填好。",
      errMsg: "请先填写留言内容。", errEmail: "请检查邮箱地址。",
      solo: "个人作品", team: "团队作品", back: "返回作品", next: "下一个项目", credit: "署名",
      email: "邮箱", phone: "电话", wechat: "微信", linkedin: "LinkedIn",
      copied: "微信号已复制", subject: "来自作品集的留言：",
      footer: "本站展示的所有作品均由潘昊卿（Haoqing (Justin) Pan）或署名团队创作，保留所有权利。",
      inProgress: "进行中"
    }
  };

  var state = { lang: "en", mode: "industrial" };
  try {
    var q = new URLSearchParams(location.search).get("lang");
    var saved = localStorage.getItem("lang");
    if (q === "zh" || q === "en") state.lang = q;
    else if (saved === "zh" || saved === "en") state.lang = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("zh") === 0) state.lang = "zh";
  } catch (e) {}

  function t(key) { return UI[state.lang][key]; }
  function L(v) { return v == null ? "" : (typeof v === "string" ? v : (v[state.lang] || v.en || "")); }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (k === "class") n.className = attrs[k]; else n.setAttribute(k, attrs[k]); }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function byId(id) { for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i]; }

  /* ---------- static text ---------- */
  function applyText() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.classList.toggle("on", b.dataset.lang === state.lang); });
    document.getElementById("hero-name").textContent = state.lang === "zh" ? "潘昊卿" : "Haoqing (Justin) Pan";
    document.querySelectorAll(".mode-switch button").forEach(function (b) {
      b.textContent = L(SITE.modes[b.dataset.mode].label);
    });
    document.getElementById("footer-copy").textContent = "© 2026 Haoqing (Justin) Pan. " + t("footer");
    renderAbout(); renderChannels();
  }

  /* ---------- home ---------- */
  function chips(p) {
    var h = "";
    if (p.year) h += '<span class="chip">' + p.year + "</span>";
    if (p.context) h += '<span class="chip">' + esc(L(p.context)) + "</span>";
    if (p.cat !== "art") h += '<span class="chip ' + (p.team === "team" ? "team" : "") + '">' + t(p.team === "team" ? "team" : "solo") + "</span>";
    return h;
  }
  function renderGrid() {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    PROJECTS.filter(function (p) { return p.cat === state.mode; }).forEach(function (p, i) {
      var a = el("a", { class: "card", href: "#p/" + p.id });
      a.style.animationDelay = (i * 60) + "ms";
      a.innerHTML =
        '<div class="thumb' + (p.fit === "contain" ? " contain" : "") + '"><img loading="lazy" draggable="false" src="' + IMG + p.cover + '" alt="' + esc(L(p.title)) + '">' +
        '<span class="copy-tag">' + esc(p.copyright) + "</span></div>" +
        '<div class="card-body"><div class="card-title">' + esc(L(p.title)) + "</div>" +
        '<div class="card-sub">' + esc(L(p.sub)) + "</div>" +
        '<div class="chips">' + chips(p) + "</div></div>";
      if (p.single) a.addEventListener("click", function (e) { e.preventDefault(); openLightbox(IMG + p.cover, L(p.title) + " · " + L(p.sub) + " · " + p.copyright); });
      grid.appendChild(a);
    });
    document.getElementById("tagline").textContent = L(SITE.modes[state.mode].tagline);
    document.querySelectorAll(".mode-switch button").forEach(function (b) {
      var on = b.dataset.mode === state.mode;
      b.classList.toggle("on", on); b.setAttribute("aria-selected", on);
    });
    document.body.dataset.mode = state.mode;
  }
  function renderAbout() {
    document.getElementById("about-text").innerHTML = SITE.about[state.lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    document.getElementById("edu").innerHTML = SITE.education.map(function (e) {
      return "<li><b>" + esc(L(e.school)) + "</b><span>" + esc(L(e.degree)) + "</span><br><span>" + esc(L(e.years)) + "</span></li>";
    }).join("");
    document.getElementById("skills").innerHTML = SITE.skills.map(function (s) {
      return "<dt>" + esc(L(s.h)) + "</dt><dd>" + esc(L(s.v)) + "</dd>";
    }).join("");
  }

  var ICONS = {
    email: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>',
    wechat: '<svg viewBox="0 0 24 24"><path d="M9.5 4C5.4 4 2 6.8 2 10.2c0 1.9 1 3.6 2.7 4.8L4 17.5l2.8-1.5c.9.3 1.8.4 2.7.4"/><path d="M15.5 9C12 9 9.3 11.3 9.3 14.1s2.7 5.1 6.2 5.1c.7 0 1.4-.1 2-.3l2.3 1.3-.6-2.1c1.4-.9 2.5-2.4 2.5-4 0-2.8-2.7-5.1-6.2-5.1z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-3.2c0-1.5 1-2.3 2.1-2.3s2 .8 2 2.3V16M11.5 10.5V16"/></svg>'
  };
  function renderChannels() {
    var c = SITE.contact, ul = document.getElementById("channels");
    var rows = [];
    if (c.email) rows.push({ k: "email", v: c.email, href: "mailto:" + c.email });
    if (c.phone) rows.push({ k: "phone", v: c.phone, href: "tel:" + c.phone.replace(/[^\d+]/g, "") });
    if (c.wechat) rows.push({ k: "wechat", v: c.wechat, copy: true });
    if (c.linkedin) rows.push({ k: "linkedin", v: c.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: c.linkedin, ext: true });
    ul.innerHTML = "";
    rows.forEach(function (r) {
      var li = el("li");
      var inner = '<span class="ch-icon">' + ICONS[r.k] + '</span><span><span class="ch-label">' + t(r.k) + '</span><span class="ch-value">' + esc(r.v) + "</span></span>";
      var n = r.copy ? el("button", { type: "button", class: "channel" }, inner) : el("a", { class: "channel", href: r.href }, inner);
      if (r.ext) { n.setAttribute("target", "_blank"); n.setAttribute("rel", "noopener"); }
      if (r.copy) n.addEventListener("click", function () { copyText(r.v); });
      li.appendChild(n); ul.appendChild(li);
    });
  }
  function copyText(s) {
    var done = function () { toast(t("copied") + ": " + s); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(s).then(done, done);
    else { var a = el("textarea"); a.value = s; document.body.appendChild(a); a.select(); try { document.execCommand("copy"); } catch (e) {} a.remove(); done(); }
  }
  var toastTimer;
  function toast(msg) {
    var n = document.getElementById("toast"); n.textContent = msg; n.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { n.hidden = true; }, 2200);
  }

  /* ---------- contact form ---------- */
  var form = document.getElementById("msg-form"), err = document.getElementById("form-err");
  form.addEventListener("input", function () { err.textContent = ""; });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    if (!msg) { err.textContent = t("errMsg"); form.message.focus(); return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = t("errEmail"); form.email.focus(); return; }
    var body = msg + "\n\n— " + (name || "") + (email ? " <" + email + ">" : "");
    location.href = "mailto:" + SITE.contact.email + "?subject=" + encodeURIComponent(t("subject") + (name || "")) + "&body=" + encodeURIComponent(body);
  });

  /* ---------- project page ---------- */
  function figure(src, p, extraClass) {
    if (/\.mp4$/i.test(src)) {
      return '<figure class="fig vid"><video src="' + IMG + src + '" poster="' + IMG + src.replace(/\.mp4$/i, ".jpg") + '" autoplay muted loop playsinline preload="metadata"></video><figcaption>' + esc(p.copyright) + "</figcaption></figure>";
    }
    return '<figure class="fig ' + (extraClass || "") + '" data-src="' + IMG + src + '"><img loading="lazy" draggable="false" src="' + IMG + src + '" alt="' + esc(L(p.title)) + '"><figcaption>' + esc(p.copyright) + "</figcaption></figure>";
  }
  function renderProject(p) {
    var v = document.getElementById("project-view");
    var list = PROJECTS.filter(function (x) { return x.cat === p.cat && !x.single; });
    var nxt = list[(list.indexOf(p) + 1) % list.length];
    var h = '<button type="button" class="back" id="back">← ' + t("back") + "</button>" +
      '<div class="p-head"><h1 class="p-title">' + esc(L(p.title)) + '</h1><p class="p-sub">' + esc(L(p.sub)) + "</p>" +
      '<div class="chips">' + chips(p) + "</div></div>" +
      '<div class="credit"><b>' + t("credit") + "</b><span>" + esc(L(p.credit)) + "<br>" + esc(p.copyright) + "</span></div>" +
      '<div class="p-cover">' + figure(p.cover, p) + "</div>";
    (p.sections || []).forEach(function (s) {
      h += '<section class="sec"><h2>' + esc(L(s.h)) + "</h2><p>" + esc(L(s.p)) + "</p>";
      if (s.imgs && s.imgs.length) {
        h += '<div class="gallery' + (s.imgs.length === 1 ? " one" : s.imgs.length === 2 || s.imgs.length === 4 ? " two" : "") + '">' + s.imgs.map(function (src) { return figure(src, p); }).join("") + "</div>";
      }
      h += "</section>";
    });
    if (nxt && nxt !== p) h += '<a class="next" href="#p/' + nxt.id + '"><span><small>' + t("next") + "</small><strong>" + esc(L(nxt.title)) + '</strong></span><span class="arrow">→</span></a>';
    v.innerHTML = h;
    v.querySelectorAll("video").forEach(function (vid) { vid.muted = true; var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {}); });
    document.getElementById("back").addEventListener("click", function () { location.hash = p.cat; });
    document.title = L(p.title) + " · Haoqing (Justin) Pan";
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("lightbox");
  function openLightbox(src, cap) {
    lb.querySelector("img").src = src; lb.querySelector("figcaption").textContent = cap; lb.hidden = false;
  }
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-close")) lb.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });
  document.getElementById("project-view").addEventListener("click", function (e) {
    var f = e.target.closest(".fig");
    if (f && !f.classList.contains("vid")) openLightbox(f.dataset.src, f.querySelector("figcaption").textContent);
  });

  /* ---------- routing ---------- */
  var lastHome = 0;
  function route() {
    var h = location.hash.replace(/^#/, "");
    var home = document.getElementById("home-view"), proj = document.getElementById("project-view");
    lb.hidden = true;
    if (h.indexOf("p/") === 0 && byId(h.slice(2)) && !byId(h.slice(2)).single) {
      var p = byId(h.slice(2));
      if (!home.hidden) lastHome = window.scrollY;
      state.mode = p.cat; document.body.dataset.mode = p.cat;
      home.hidden = true; proj.hidden = false; renderProject(p); window.scrollTo(0, 0);
      return;
    }
    var wasProject = !proj.hidden;
    if (h === "game" || h === "art" || h === "industrial") state.mode = h;
    else state.mode = "industrial";
    proj.hidden = true; home.hidden = false;
    document.title = "Haoqing (Justin) Pan · Toy & Industrial Design Portfolio";
    renderGrid();
    if (wasProject) window.scrollTo(0, lastHome);
  }
  window.addEventListener("hashchange", route);

  document.querySelectorAll(".mode-switch button").forEach(function (b) {
    b.addEventListener("click", function () { location.hash = b.dataset.mode; });
  });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      state.lang = b.dataset.lang;
      try { localStorage.setItem("lang", state.lang); } catch (e) {}
      applyText();
      var h = location.hash.replace(/^#/, "");
      if (h.indexOf("p/") === 0 && byId(h.slice(2))) renderProject(byId(h.slice(2))); else renderGrid();
    });
  });
  document.querySelectorAll("[data-nav]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = a.dataset.nav;
      e.preventDefault();
      var go = function () {
        if (target === "home") window.scrollTo(0, 0);
        else document.getElementById(target).scrollIntoView({ behavior: "smooth" });
      };
      if (!document.getElementById("project-view").hidden || target === "home") {
        if (location.hash.indexOf("#p/") === 0 || target === "home") { location.hash = state.mode; setTimeout(go, 30); return; }
      }
      go();
    });
  });

  applyText();
  route();
})();
