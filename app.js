/* ════════════════════════════════════════════════════════════════
   O!GZ Studios — behavior + data
   Vanilla port of the Claude Design DC component (OGz Studios.dc.html).
   Data objects are copied verbatim from the DC component's getters.
   ════════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  // ── helpers ───────────────────────────────────────────────────
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Localized text → EN/AR sibling spans (CSS shows the active one).
  const loc = (o) => `<span class="t-en">${esc(o.en)}</span><span class="t-ar">${esc(o.ar)}</span>`;
  const $  = (sel, ctx = document) => ctx.querySelector(sel);

  // ── data (verbatim from DC getters) ───────────────────────────
  const NAV = [
    { en: "Work", ar: "الأعمال", anchor: "#work", id: "work" },
    { en: "Services", ar: "الخدمات", anchor: "#services", id: "services" },
    { en: "Studio", ar: "الاستوديو", anchor: "#studio", id: "studio" },
    { en: "Awards", ar: "الجوائز", anchor: "#awards", id: "awards" },
    { en: "Contact", ar: "تواصل", anchor: "#contact", id: "contact" },
  ];

  const WORKS = [
    { client:{en:"OGZ Productions",ar:"إنتاج OGZ"}, title:{en:"Qahr · قهر",ar:"قهر"}, disc:{en:"Short Film · 10 Int'l Awards",ar:"فيلم قصير · ١٠ جوائز دولية"}, year:"2025", col:2, ar:"40/17", img:"img/qahr.jpg", watch:"https://www.youtube.com/watch?v=ogl3fJ0NcVw", embed:"https://www.youtube.com/embed/ogl3fJ0NcVw?autoplay=1" },
    { client:{en:"vivo",ar:"vivo"}, title:{en:"vivo Y33s",ar:"vivo Y33s"}, disc:{en:"Commercial",ar:"إعلان تجاري"}, year:"2024", col:1, ar:"4/5", img:"img/vivo.jpg" },
    { client:{en:"Floward",ar:"فلاورد"}, title:{en:"Ramadan Campaign",ar:"حملة رمضان"}, disc:{en:"Branded Film",ar:"فيلم علامة"}, year:"2024", col:1, ar:"4/5", img:"img/heritage.jpg", watch:"https://www.instagram.com/flowardeg/reel/DPOxSIgE_vP/" },
    { client:{en:"Food & Beverage",ar:"أغذية ومشروبات"}, title:{en:"Grazing Table",ar:"طاولة التذوّق"}, disc:{en:"Food Photography",ar:"تصوير طعام"}, year:"2024", col:1, ar:"4/5", img:"img/charcuterie.jpg" },
    { client:{en:"Food & Beverage",ar:"أغذية ومشروبات"}, title:{en:"Stone-Baked",ar:"مخبوز بالحجر"}, disc:{en:"Food Photography",ar:"تصوير طعام"}, year:"2023", col:1, ar:"4/5", img:"img/pizza.jpg" },
    { client:{en:"Te3rafny Zein",ar:"تعرفني زين"}, title:{en:"Te3rafny Zein",ar:"تعرفني زين"}, disc:{en:"Short Film",ar:"فيلم قصير"}, year:"2024", col:1, ar:"4/5", bg:"linear-gradient(135deg,#1a0a2e,#3349EB)", watch:"https://www.youtube.com/watch?v=n15ZXzXOY_I", embed:"https://www.youtube.com/embed/n15ZXzXOY_I?autoplay=1" },
    { client:{en:"Comedy",ar:"كوميديا"}, title:{en:"Comedy Interviews",ar:"مقابلات كوميدية"}, disc:{en:"Digital Series",ar:"سلسلة رقمية"}, year:"2024", col:1, ar:"4/5", bg:"linear-gradient(135deg,#0d1f0d,#CCFF00 280%)", watch:"https://www.youtube.com/watch?v=LH-9P-3tBGg", embed:"https://www.youtube.com/embed/LH-9P-3tBGg?autoplay=1" },
    { client:{en:"Barra El7esba",ar:"برة الحسبة"}, title:{en:"Barra El7esba",ar:"برة الحسبة"}, disc:{en:"Short Film",ar:"فيلم قصير"}, year:"2024", col:1, ar:"4/5", bg:"linear-gradient(135deg,#1c0808,#d63031)", watch:"https://www.youtube.com/watch?v=cDpH3Q-KuSM", embed:"https://www.youtube.com/embed/cDpH3Q-KuSM?autoplay=1" },
    { client:{en:"Product Reels",ar:"ريلز المنتجات"}, title:{en:"Product Reels",ar:"ريلز المنتجات"}, disc:{en:"Social Content",ar:"محتوى سوشال"}, year:"2025", col:1, ar:"4/5", bg:"linear-gradient(135deg,#0a0a0a,#FF6B9D 300%)", watch:"https://www.instagram.com/p/DPl8C4RCHVa/" },
    { client:{en:"Automotive",ar:"سيارات"}, title:{en:"City Drive",ar:"جولة المدينة"}, disc:{en:"Brand Commercial",ar:"إعلان علامة"}, year:"2024", col:2, ar:"40/17", img:"img/car.jpg" },
  ];

  const LAURELS = [
    { fest:"Biencortos", award:{en:"BEST INTERNATIONAL SHORT",ar:"أفضل فيلم قصير دولي"}, year:"2025" },
    { fest:"Biencortos", award:{en:"BEST ACTOR",ar:"أفضل ممثل"}, year:"2025" },
    { fest:"Altın Koza", award:{en:"SPECIAL JURY PRIZE",ar:"جائزة لجنة التحكيم"}, year:"2025" },
    { fest:"Thessaloniki", award:{en:"BEST STUDENT SCREENPLAY",ar:"أفضل سيناريو طلابي"}, year:"2025" },
    { fest:"Thessaloniki", award:{en:"BEST STUDENT EDITING",ar:"أفضل مونتاج طلابي"}, year:"2025" },
    { fest:"Contact ISFF", award:{en:"SPECIAL MENTION",ar:"تنويه خاص"}, year:"2025" },
    { fest:"Vega Digital", award:{en:"PLATINUM · apsco",ar:"بلاتينية · apsco"}, year:"2024" },
    { fest:"Viddy Awards", award:{en:"WINNER · apsco",ar:"فائز · apsco"}, year:"2024" },
  ];

  const CITIES = [
    { tag:"HQ", city:{en:"Riyadh",ar:"الرياض"}, role:{en:"HEADQUARTERS",ar:"المقر الرئيسي"} },
    { tag:"EU", city:{en:"Warsaw",ar:"وارسو"}, role:{en:"STUDIO",ar:"استوديو"} },
    { tag:"MENA", city:{en:"Cairo",ar:"القاهرة"}, role:{en:"STUDIO",ar:"استوديو"} },
  ];

  const LEDGER = [
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Best International Short Film",ar:"أفضل فيلم قصير دولي"}, body:{en:"Biencortos Film Festival",ar:"مهرجان بيِنكورتوس"} },
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Best Actor",ar:"أفضل ممثل"}, body:{en:"Biencortos Film Festival",ar:"مهرجان بيِنكورتوس"} },
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Special Jury Prize",ar:"جائزة لجنة التحكيم الخاصة"}, body:{en:"32nd Altın Koza Film Festival",ar:"مهرجان ألتن كوزا الـ٣٢"} },
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Best Student Screenplay",ar:"أفضل سيناريو طلابي"}, body:{en:"Thessaloniki Free Short Festival",ar:"مهرجان ثيسالونيكي للأفلام القصيرة"} },
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Best Student Editing",ar:"أفضل مونتاج طلابي"}, body:{en:"Thessaloniki Free Short Festival",ar:"مهرجان ثيسالونيكي للأفلام القصيرة"} },
    { year:"2025", title:{en:"Qahr · قهر",ar:"قهر"}, award:{en:"Special Mention",ar:"تنويه خاص"}, body:{en:"Contact Intl. Student Film Fest",ar:"مهرجان كونتاكت الدولي للطلبة"} },
    { year:"2024", title:{en:"Energy That Moves a Nation",ar:"طاقة تحرّك وطن"}, award:{en:"Platinum Vega Award",ar:"جائزة فيغا البلاتينية"}, body:{en:"Vega Digital Awards · apsco",ar:"جوائز فيغا الرقمية · apsco"} },
    { year:"2024", title:{en:"Energy That Moves a Nation",ar:"طاقة تحرّك وطن"}, award:{en:"Viddy Award",ar:"جائزة فيدي"}, body:{en:"Viddy Awards · apsco",ar:"جوائز فيدي · apsco"} },
  ];

  const TEAM = [
    { dot:"var(--green)", label:{en:"FOUNDERS & MANAGEMENT",ar:"المؤسسون والإدارة"}, people:[
      { name:{en:"Amira Salah",ar:"أميرة صلاح"}, role:{en:"Executive Producer & Managing Partner",ar:"منتجة تنفيذية وشريكة إدارية"}, detail:{en:"+18 yrs · executive producer, writer & documentary director",ar:"+١٨ سنة · منتجة تنفيذية وكاتبة ومخرجة وثائقيات"} },
      { name:{en:"Mohamed Rabie",ar:"محمد ربيع"}, role:{en:"Business Development Director",ar:"مدير تطوير الأعمال"}, detail:{en:"+14 yrs · founder of Cairo Log Media · Warsaw Film School",ar:"+١٤ سنة · مؤسس Cairo Log Media · مدرسة وارسو للأفلام"} },
      { name:{en:"Ahmed Kamel",ar:"أحمد كامل"}, role:{en:"Executive Creative Director",ar:"مدير إبداعي تنفيذي"}, detail:{en:"+12 yrs · wrote “Lahfa” & head writer, SNL Arabia",ar:"+١٢ سنة · كتب «لهفة» وكبير كتّاب SNL Arabia"} },
    ]},
    { dot:"var(--epink)", label:{en:"CREATIVE & CONTENT",ar:"الإبداع والمحتوى"}, people:[
      { name:{en:"Nada Khalifa",ar:"ندى خليفة"}, role:{en:"Creative Director",ar:"مديرة إبداعية"}, detail:{en:"+4 yrs · dir. “Qahr” (10 awards) · board, Shashat Women's Cinema",ar:"+٤ سنوات · مخرجة «قهر» (١٠ جوائز) · عضو مجلس شاشات"} },
      { name:{en:"Eslam Khaled",ar:"إسلام خالد"}, role:{en:"Director & Cinematographer",ar:"مخرج ومصوّر سينمائي"}, detail:{en:"+10 yrs · directing, cinematography, editing & color",ar:"+١٠ سنوات · إخراج وتصوير سينمائي ومونتاج وتصحيح ألوان"} },
    ]},
    { dot:"var(--ultra)", label:{en:"PRODUCTION",ar:"الإنتاج"}, people:[
      { name:{en:"Yusra Baghlab",ar:"يسرا باغلب"}, role:{en:"Content Producer",ar:"منتجة محتوى"}, detail:{en:"+6 yrs · brands + government projects",ar:"+٦ سنوات · مشاريع علامات وجهات حكومية"} },
    ]},
    { dot:"var(--orange)", label:{en:"FILMING & EVENTS",ar:"التصوير والفعاليات"}, people:[
      { name:{en:"Eslam Gado",ar:"إسلام جادو"}, role:{en:"Director of Photography",ar:"مدير تصوير"}, detail:{en:"+10 yrs · lighting, composition & camera",ar:"+١٠ سنوات · إضاءة وتكوين وكاميرا"} },
      { name:{en:"Amro Khalid",ar:"عمرو خالد"}, role:{en:"Post Producer & Editor",ar:"منتج ومهندس مونتاج"}, detail:{en:"+10 yrs · senior editor — sound, color & VFX",ar:"+١٠ سنوات · كبير المونتاج — صوت وألوان ومؤثرات"} },
    ]},
  ];

  const FOOTCOLS = [
    { label:{en:"WORK",ar:"الأعمال"}, links:[ {l:{en:"Selected work",ar:"أعمال مختارة"},href:"#work"}, {l:{en:"Reel",ar:"الريِل"},href:"#work"}, {l:{en:"Services",ar:"الخدمات"},href:"#services"} ] },
    { label:{en:"STUDIO",ar:"الاستوديو"}, links:[ {l:{en:"About",ar:"عن الاستوديو"},href:"#studio"}, {l:{en:"Clients",ar:"العملاء"},href:"#clients"}, {l:{en:"Awards",ar:"الجوائز"},href:"#awards"}, {l:{en:"Team",ar:"الفريق"},href:"#team"} ] },
  ];

  const MARQUEE = {
    en: ["FILM","SERIES","ADS","BRANDED","SOCIAL","SHORT FILMS","PHOTOGRAPHY","EVENTS","MUSIC VIDEOS"],
    ar: ["أفلام","مسلسلات","إعلانات","علامات","سوشال","أفلام قصيرة","تصوير","فعاليات","فيديوهات موسيقية"],
  };

  // Laurel branch SVG (left; the right is the same mirrored via scaleX(-1)).
  const LAUREL_SVG = (flip) =>
    `<svg viewBox="0 0 44 104" fill="none" style="height:clamp(74px,7.6vw,100px);width:auto;flex:none${flip ? ";transform:scaleX(-1)" : ""}"><path d="M40 100 C 20 88, 8 60, 15 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path><g fill="currentColor"><ellipse cx="34" cy="86" rx="6" ry="2.6" transform="rotate(28 34 86)"></ellipse><ellipse cx="26" cy="73" rx="6.6" ry="2.7" transform="rotate(15 26 73)"></ellipse><ellipse cx="20" cy="60" rx="6.6" ry="2.7" transform="rotate(1 20 60)"></ellipse><ellipse cx="17" cy="47" rx="6.3" ry="2.6" transform="rotate(-13 17 47)"></ellipse><ellipse cx="16" cy="34" rx="5.9" ry="2.5" transform="rotate(-27 16 34)"></ellipse><ellipse cx="18" cy="23" rx="5.3" ry="2.3" transform="rotate(-41 18 23)"></ellipse></g></svg>`;

  // ── renderers ─────────────────────────────────────────────────
  function renderNav() {
    const linkStyle = "font-size:15px;font-weight:600;text-decoration:none;color:#000;padding-bottom:3px";
    $("#navLinks").innerHTML = NAV.map(n =>
      `<a href="${n.anchor}" class="ulink nav-link" data-target="${n.id}" style="${linkStyle}"><span>${loc(n)}</span></a>`
    ).join("");

    const menuStyle = "font-family:var(--font-disp);font-size:clamp(38px,11vw,64px);font-weight:800;color:#fff;text-decoration:none;letter-spacing:-.02em;line-height:1.12";
    $("#menuLinks").innerHTML = NAV.map(n =>
      `<a href="${n.anchor}" class="menu-link" data-target="${n.id}" style="${menuStyle}">${loc(n)}</a>`
    ).join("");
  }

  function renderMarquee() {
    const unit = (i) =>
      `<span style="display:inline-flex;align-items:center">${loc({ en: MARQUEE.en[i], ar: MARQUEE.ar[i] })}<span style="color:var(--epink);margin:0 22px">✱</span></span>`;
    const words = MARQUEE.en.map((_, i) => unit(i)).join("");
    const span = `<span style="font-family:var(--font-disp);font-weight:800;font-size:clamp(20px,2.4vw,32px);letter-spacing:-.01em;display:inline-flex;align-items:center">${words}</span>`;
    $("#kwMarquee").innerHTML = span + span;
  }

  function renderWorks() {
    $("#workGrid").innerHTML = WORKS.map(w => {
      const hasVideo = !!(w.embed || w.watch);
      const ctaLabel = w.embed
        ? `<span>▶</span> <span class="t-en">WATCH</span><span class="t-ar">شغّل</span>`
        : w.watch
        ? `<span>↗</span> <span class="t-en">WATCH</span><span class="t-ar">شغّل</span>`
        : `<span class="t-en">VIEW CASE</span><span class="t-ar">شوف العمل</span>`;
      const mediaStyle = w.img
        ? `<img class="tile-media" src="${w.img}" alt="${esc(w.title.en)}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`
        : `<div style="position:absolute;inset:0;background:${w.bg||"#111"}"></div>`;
      const href = w.embed ? "javascript:void(0)" : (w.watch || "#contact");
      const dataAttrs = w.embed ? `data-embed="${esc(w.embed)}" data-title="${esc(w.title.en)}"` : "";
      return `
      <a href="${href}" ${dataAttrs} class="tile${w.embed?" js-play":""} reveal" style="position:relative;display:block;aspect-ratio:${w.ar};overflow:hidden;text-decoration:none;background:#0a0a0a"${w.watch && !w.embed ? ` target="_blank" rel="noopener"` : ""}>
        ${mediaStyle}
        <div class="tile-scan" style="position:absolute;inset:0;pointer-events:none"></div>
        <div class="tile-frame" style="position:absolute;inset:10px;border:3px solid var(--green);opacity:0;transition:opacity .2s;pointer-events:none"></div>
        <div style="position:absolute;top:13px;inset-inline-end:15px;font-family:var(--font-mono);font-size:12px;font-weight:700;color:#fff;background:rgba(0,0,0,.4);padding:3px 8px">${esc(w.year)}</div>
        ${hasVideo ? `<div style="position:absolute;top:13px;inset-inline-start:15px;width:8px;height:8px;background:var(--epink);border-radius:50%"></div>` : ""}
        <div class="tile-cta" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:9px;color:#000;font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.14em;background:var(--green);padding:11px 18px;white-space:nowrap">${ctaLabel}</div>
        <div style="position:absolute;inset-inline:0;bottom:0;padding:20px;background:linear-gradient(0deg,rgba(0,0,0,.9) 0%,rgba(0,0,0,.3) 72%,transparent);display:flex;flex-direction:column;gap:6px">
          <div style="font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.12em;color:var(--green)">${loc(w.client)}</div>
          <div style="font-family:var(--font-disp);font-size:clamp(18px,2vw,30px);font-weight:800;color:#fff;letter-spacing:-.01em;line-height:1.02">${loc(w.title)}</div>
          <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:rgba(255,255,255,.66)">${loc(w.disc)}</div>
        </div>
      </a>`;
    }).join("");

    // attach lightbox click handlers (scoped to the grid we just rendered;
    // runs during boot() before init(), so do NOT reference init()'s `root`)
    document.querySelectorAll("#workGrid .js-play").forEach(tile => {
      tile.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(tile.dataset.embed, tile.dataset.title);
      });
    });
  }

  function openLightbox(embedUrl, title) {
    const existing = document.getElementById("ogz-lightbox");
    if (existing) existing.remove();
    const lb = document.createElement("div");
    lb.id = "ogz-lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", title || "Video");
    lb.style.cssText = "position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.96);display:flex;align-items:center;justify-content:center;animation:lbIn .18s ease";
    lb.innerHTML = `
      <style>@keyframes lbIn{from{opacity:0}to{opacity:1}}</style>
      <div style="position:relative;width:min(90vw,1100px);aspect-ratio:16/9">
        <iframe src="${esc(embedUrl)}" allow="autoplay;fullscreen" allowfullscreen frameborder="0" style="position:absolute;inset:0;width:100%;height:100%;border:none"></iframe>
      </div>
      <button aria-label="Close" style="position:fixed;top:22px;right:26px;background:rgba(255,255,255,.12);border:none;color:#fff;font-size:28px;line-height:1;width:48px;height:48px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>`;
    document.body.appendChild(lb);
    const close = () => lb.remove();
    lb.querySelector("button").addEventListener("click", close);
    lb.addEventListener("click", e => { if (e.target === lb) close(); });
    const onKey = (e) => { if (e.key === "Escape") { close(); document.removeEventListener("keydown", onKey); } };
    document.addEventListener("keydown", onKey);
  }

  function renderCities() {
    $("#citiesGrid").innerHTML = CITIES.map(c => `
      <div style="padding:clamp(22px,2.6vw,38px) clamp(16px,2vw,28px);border-inline-end:2px solid #000">
        <div style="font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.14em;color:#fff;margin-bottom:10px">${esc(c.tag)}</div>
        <div style="font-family:var(--font-disp);font-size:clamp(24px,2.8vw,40px);font-weight:800;letter-spacing:-.02em">${loc(c.city)}</div>
        <div style="color:#000;opacity:.7;font-size:13px;margin-top:4px;font-family:var(--font-mono)">${loc(c.role)}</div>
      </div>`).join("");
  }

  function renderLedger() {
    $("#ledgerRows").innerHTML = LEDGER.map(r => `
      <div class="ledger-row" style="display:grid;grid-template-columns:80px 1fr 1.1fr 1fr;gap:16px;padding:18px 0;border-bottom:1px solid rgba(0,0,0,.25);align-items:baseline">
        <span style="font-family:var(--font-mono);font-size:14px;font-weight:700;color:#000">${esc(r.year)}</span>
        <span style="font-family:var(--font-disp);font-size:clamp(15px,1.5vw,19px);font-weight:800">${loc(r.title)}</span>
        <span style="font-size:clamp(15px,1.5vw,18px);font-weight:600;color:#000">${loc(r.award)}</span>
        <span style="font-size:14px;font-weight:500;color:#000;opacity:.8;line-height:1.4">${loc(r.body)}</span>
      </div>`).join("");
  }

  function renderLaurels() {
    const one = (f, hidden) => `
      <div class="laurel"${hidden ? ' aria-hidden="true"' : ""} style="display:flex;align-items:stretch;justify-content:center;gap:clamp(3px,0.5vw,7px);color:#000;flex:none">
        ${LAUREL_SVG(false)}
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 2px;white-space:nowrap">
          <div style="font-family:var(--font-disp);font-size:clamp(15px,1.5vw,20px);font-weight:800;letter-spacing:-.01em;line-height:1.05">${esc(f.fest)}</div>
          <div style="font-family:var(--font-mono);font-size:clamp(8px,0.8vw,10px);font-weight:700;letter-spacing:.07em;line-height:1.25;margin-top:6px;opacity:.78">${loc(f.award)}</div>
          <div style="font-family:var(--font-mono);font-size:clamp(8px,0.8vw,10px);font-weight:700;margin-top:5px">${esc(f.year)}</div>
        </div>
        ${LAUREL_SVG(true)}
      </div>`;
    const set = (hidden) => LAURELS.map(f => one(f, hidden)).join("");
    $("#laurelTrack").innerHTML = set(false) + set(true);
  }

  function renderTeam() {
    $("#teamTiers").innerHTML = TEAM.map(tier => `
      <div class="reveal" style="margin-bottom:clamp(28px,3.4vw,48px)">
        <div style="font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.16em;color:#000;padding-bottom:14px;margin-bottom:8px;border-bottom:2px solid #000;display:flex;align-items:center;gap:10px"><span style="width:9px;height:9px;background:${tier.dot}"></span>${loc(tier.label)}</div>
        ${tier.people.map(p => `
          <div class="team-row" style="display:grid;grid-template-columns:minmax(150px,0.7fr) minmax(140px,1fr) 1.4fr;gap:16px;padding:18px 0;border-bottom:1px solid rgba(0,0,0,.16);align-items:baseline">
            <span style="font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.04em;color:#000;opacity:.55;text-transform:uppercase">${loc(p.role)}</span>
            <span style="font-family:var(--font-disp);font-size:clamp(18px,2vw,28px);font-weight:800;letter-spacing:-.01em">${loc(p.name)}</span>
            <span style="font-size:14px;font-weight:500;color:#000;opacity:.8;line-height:1.45">${loc(p.detail)}</span>
          </div>`).join("")}
      </div>`).join("");
  }

  function renderFootCols() {
    $("#footCols").innerHTML = FOOTCOLS.map(col => `
      <div>
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:700;letter-spacing:.14em;color:rgba(255,255,255,.5);margin-bottom:18px">${loc(col.label)}</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${col.links.map(l => `<a href="${l.href}" class="ulink" style="color:rgba(255,255,255,.8);text-decoration:none;font-size:15px;width:max-content;padding-bottom:2px">${loc(l.l)}</a>`).join("")}
        </div>
      </div>`).join("");
  }

  // ── <image-slot> (lightweight vanilla replica) ────────────────
  class ImageSlot extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      const ph = this.getAttribute("placeholder") || "Drop an image";
      const img = document.createElement("img"); img.className = "is-img"; img.alt = "";
      const ring = document.createElement("div"); ring.className = "is-ring";
      const empty = document.createElement("div"); empty.className = "is-empty";
      empty.innerHTML = `<div class="cap">${esc(ph)}</div><div class="sub"><u>Click to browse</u></div>`;
      const input = document.createElement("input"); input.type = "file"; input.accept = "image/*"; input.style.display = "none";
      this.append(img, ring, empty, input);

      const fill = (file) => { if (!file || !file.type.startsWith("image/")) return; img.src = URL.createObjectURL(file); this.setAttribute("data-filled", ""); };
      this.addEventListener("click", () => input.click());
      input.addEventListener("change", (e) => fill(e.target.files[0]));
      this.addEventListener("dragover", (e) => { e.preventDefault(); this.setAttribute("data-over", ""); });
      this.addEventListener("dragleave", () => this.removeAttribute("data-over"));
      this.addEventListener("drop", (e) => { e.preventDefault(); this.removeAttribute("data-over"); fill(e.dataTransfer.files[0]); });
    }
  }
  if (!customElements.get("image-slot")) customElements.define("image-slot", ImageSlot);

  // ── behavior ──────────────────────────────────────────────────
  function init() {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = $("#root");

    // language toggle
    const setLang = (lang) => {
      root.setAttribute("data-lang", lang);
      root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", lang);
    };
    $("#langToggle").addEventListener("click", () =>
      setLang(root.getAttribute("data-lang") === "en" ? "ar" : "en"));

    // mobile menu
    const menu = $("#menuOverlay");
    $("#navBurger").addEventListener("click", () => menu.classList.add("open"));
    $("#menuClose").addEventListener("click", () => menu.classList.remove("open"));
    $(".menu-cta").addEventListener("click", () => menu.classList.remove("open"));
    root.querySelectorAll(".menu-link").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("open")));

    // mute toggle (decorative — no hosted video in this build)
    const muteBtn = $("#muteToggle");
    let muted = true;
    muteBtn.addEventListener("click", () => {
      muted = !muted;
      muteBtn.querySelector(".mute-x").style.display = muted ? "" : "none";
      muteBtn.querySelector(".mute-wave").style.display = muted ? "none" : "";
      muteBtn.setAttribute("aria-label", muted ? "Play sound" : "Mute sound");
    });

    // back to top
    $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // nav active-on-click feedback
    const navLinks = Array.prototype.slice.call(root.querySelectorAll(".nav-link"));
    const setActive = (id) => navLinks.forEach((a) => a.classList.toggle("on", a.dataset.target === id));
    navLinks.forEach((a) => a.addEventListener("click", () => setActive(a.dataset.target)));

    // scroll: progress bar, sticky-nav state, scroll-spy
    const ids = ["hero", "work", "services", "clients", "studio", "awards", "team", "contact"];
    const header = $(".site-nav");
    const progress = $("#progress");
    let scrolled = false, active = "work", ticking = false;
    const onScroll = () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 80;
        if (isScrolled !== scrolled) { scrolled = isScrolled; header.classList.toggle("scrolled", scrolled); }
        if (progress) {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.transform = "scaleX(" + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ")";
        }
        let cur = active;
        const mid = window.scrollY + window.innerHeight * 0.35;
        for (const id of ids) { const el = document.getElementById(id); if (el && el.offsetTop <= mid) cur = id; }
        if (cur !== active) { active = cur; setActive(active); }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // reveal-on-scroll with sibling stagger
    const reveals = Array.prototype.slice.call(root.querySelectorAll(".reveal"));
    reveals.forEach((el) => {
      const sibs = el.parentElement
        ? Array.prototype.filter.call(el.parentElement.children, (c) => c.classList && c.classList.contains("reveal"))
        : [el];
      el.dataset.sidx = Math.max(0, sibs.indexOf(el));
    });
    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = parseInt(e.target.dataset.sidx || "0", 10);
            e.target.style.transitionDelay = Math.min(i, 7) * 72 + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach((el) => io.observe(el));
    }

    // count-up numbers
    const fmt = (n) => n.toLocaleString("en-US");
    root.querySelectorAll("[data-count]").forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-count"), 10) || 0;
      if (reduce) { counter.textContent = fmt(target); return; }
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now(), dur = 1200;
            const tick = (now) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              counter.textContent = fmt(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            cio.unobserve(e.target);
          }
        });
      }, { threshold: 0.5 });
      cio.observe(counter);
    });

    // work gallery auto-drift (pauses on hover / manual interaction)
    const grid = $(".work-grid");
    if (grid && !reduce) {
      let paused = false, resumeT = null, last = performance.now();
      const SPEED = 26; // px per second
      const pause = (ms) => { paused = true; clearTimeout(resumeT); resumeT = setTimeout(() => { paused = false; }, ms); };
      grid.addEventListener("pointerenter", () => { paused = true; clearTimeout(resumeT); });
      grid.addEventListener("pointerleave", () => { paused = false; });
      grid.addEventListener("wheel", () => pause(2600), { passive: true });
      grid.addEventListener("touchstart", () => pause(3600), { passive: true });
      const max = () => grid.scrollWidth - grid.clientWidth;
      const visible = () => { const b = grid.getBoundingClientRect(); return b.top < window.innerHeight - 40 && b.bottom > 40; };
      const step = (now) => {
        const dt = Math.min(0.05, (now - last) / 1000); last = now;
        if (!paused && visible() && max() > 4) {
          let nx = grid.scrollLeft + SPEED * dt;
          if (nx >= max() - 1) nx = 0;
          grid.scrollLeft = nx;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }

  // ── boot ──────────────────────────────────────────────────────
  function boot() {
    renderNav();
    renderMarquee();
    renderWorks();
    renderCities();
    renderLedger();
    renderLaurels();
    renderTeam();
    renderFootCols();
    init();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
