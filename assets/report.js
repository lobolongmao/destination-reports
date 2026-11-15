/* 報告渲染器：report.html?c=<id> → 載入 data/countries/<id>.js → 依 slides 渲染
   同時檢查 CLAUDE.md 第 5 節的規則，違規時在頁面頂端顯示警告。
   新增國家「不需要」修改本檔。 */
(function () {
  "use strict";

  var REQUIRED = ["cover", "background", "entry", "market", "segments", "lion", "competitors", "compare", "insight", "sources"];
  var params = new URLSearchParams(location.search);
  var id = (params.get("c") || "").toLowerCase();
  var deck = document.getElementById("deck");
  var alertBox = document.getElementById("rule-alert");

  if (!/^[a-z-]+$/.test(id)) { return fail("網址缺少國家參數，例如 report.html?c=thailand"); }

  window.REPORTS = window.REPORTS || {};
  var s = document.createElement("script");
  s.src = "data/countries/" + id + ".js";
  s.onload = function () {
    var r = window.REPORTS[id];
    if (!r) return fail("資料檔已載入，但沒有定義 window.REPORTS[\"" + id + "\"]");
    render(r);
  };
  s.onerror = function () { fail("找不到資料檔 data/countries/" + id + ".js"); };
  document.head.appendChild(s);

  /* ---------- 工具 ---------- */
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fail(msg) {
    deck.innerHTML = '<section class="slide"><h2>無法載入報告</h2><p>' + esc(msg) + '</p><p><a href="index.html">回首頁</a></p></section>';
  }

  var srcIndex = {};
  var problems = [];

  function refs(src) {
    if (!src || !src.length) return "";
    return src.map(function (sid) {
      var n = srcIndex[sid];
      if (!n) { problems.push("引用了不存在的來源 id：" + sid); return ""; }
      return '<sup class="ref"><a href="#src-' + esc(sid) + '" title="來源 ' + n + '">[' + n + "]</a></sup>";
    }).join("");
  }

  /* ---------- 各版型 ---------- */
  var T = {
    cover: function (sl, r) {
      return '<p class="kicker">' + esc(sl.kicker || "Destination Market Report") + "</p>" +
        "<h1>" + esc(sl.title) + "</h1>" +
        '<p class="subtitle">' + esc(sl.subtitle) + "</p>" +
        '<p class="headline">' + esc(sl.headline) + "</p>" +
        '<p class="checked">資料查詢日：' + esc(sl.checked) + "　｜　整理：" + esc(r.author || "") + "</p>" +
        '<p class="hint">↓ 捲動或按 → 翻頁</p>';
    },
    facts: function (sl) {
      return '<dl class="facts">' + sl.items.map(function (it) {
        return "<div><dt>" + esc(it.label) + "</dt><dd>" + esc(it.value) + refs(it.src) + "</dd></div>";
      }).join("") + "</dl>";
    },
    bullets: function (sl) {
      var label = { "new": "近期變動", "warn": "注意" };
      return '<ul class="bullets">' + sl.items.map(function (it) {
        var tag = it.tag ? '<span class="tag ' + esc(it.tag) + '">' + (label[it.tag] || esc(it.tag)) + "</span>" : "";
        return "<li>" + tag + esc(it.text) + refs(it.src) + "</li>";
      }).join("") + "</ul>";
    },
    stats: function (sl) {
      if (sl.items.length > 4) problems.push("「" + sl.title + "」stats 超過 4 個");
      return '<div class="stats">' + sl.items.map(function (it) {
        if (!it.src || !it.src.length) problems.push("「" + sl.title + "」的數字「" + it.value + "」沒有 src");
        return '<div class="stat"><div class="value">' + esc(it.value) + refs(it.src) + '</div><div class="label">' +
          esc(it.label) + "</div>" + (it.note ? '<div class="note">' + esc(it.note) + "</div>" : "") + "</div>";
      }).join("") + "</div>" + (sl.takeaway ? '<p class="takeaway">' + esc(sl.takeaway) + "</p>" : "");
    },
    cards: function (sl) {
      return '<div class="cards">' + sl.items.map(function (it) {
        return '<div class="card"><h3>' + esc(it.name) + "</h3><dl><dt>WHO</dt><dd>" + esc(it.who) +
          "</dd><dt>NEEDS</dt><dd>" + esc(it.needs) + "</dd><dt>PRODUCT FIT</dt><dd>" + esc(it.fit) + "</dd></dl></div>";
      }).join("") + "</div>";
    },
    table: function (sl) {
      if (sl.rows.length > 8) problems.push("「" + sl.title + "」表格超過 8 列");
      var head = "<tr>" + sl.columns.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>";
      var body = sl.rows.map(function (row) {
        var cells = row.cells || row;
        return "<tr>" + cells.map(function (c, i) {
          return "<td>" + esc(c) + (i === 0 && row.src ? refs(row.src) : "") + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return '<div class="table-wrap"><table class="data"><thead>' + head + "</thead><tbody>" + body +
        "</tbody></table></div>" + (sl.note ? '<p class="table-note">' + esc(sl.note) + refs(sl.src) + "</p>" : "");
    },
    compare: function (sl) {
      return '<div class="compare">' + sl.items.map(function (it, i) {
        var li = function (arr) { return arr.map(function (x) { return "<li>" + esc(x.text || x) + refs(x.src) + "</li>"; }).join(""); };
        return '<div class="agency' + (i === 0 ? " primary" : "") + '"><h3>' + esc(it.agency) + '</h3><p class="position">' +
          esc(it.position) + '</p><h4 class="p">STRENGTHS</h4><ul class="pros">' + li(it.pros) +
          '</ul><h4 class="c">WEAKNESSES</h4><ul class="cons">' + li(it.cons) + "</ul></div>";
      }).join("") + "</div>";
    },
    insight: function (sl) {
      return '<span class="opinion-label">整理者觀點</span><div class="insights">' + sl.items.map(function (it) {
        return "<div><h3>" + esc(it.title) + "</h3><p>" + esc(it.text) + refs(it.src) + "</p></div>";
      }).join("") + "</div>";
    },
    sources: function (sl, r) {
      return '<ol class="sources">' + r.sources.map(function (x) {
        return '<li id="src-' + esc(x.id) + '"><a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.title) +
          '</a> <span class="pub">— ' + esc(x.publisher) + (x.date ? "，" + esc(x.date) : "") + "</span></li>";
      }).join("") + '</ol><p class="table-note">' + esc(sl.note || "") + "</p>";
    }
  };

  /* ---------- 規則檢查 ---------- */
  function check(r) {
    var ids = r.slides.map(function (x) { return x.id; });
    var last = -1;
    REQUIRED.forEach(function (req) {
      var pos = ids.indexOf(req);
      if (pos === -1) problems.push("缺少必備投影片：" + req);
      else if (pos < last) problems.push("必備投影片順序錯誤：" + req);
      else last = pos;
    });
    if (JSON.stringify(r).indexOf("TODO") !== -1) problems.push("資料檔仍有 TODO 未填");
    r.slides.forEach(function (sl) { if (!T[sl.type]) problems.push("未知的版型 type：" + sl.type); });
  }

  /* ---------- 渲染 ---------- */
  function render(r) {
    r.sources.forEach(function (x, i) { srcIndex[x.id] = i + 1; });
    check(r);

    document.title = r.name + "市場分析報告｜目的地市場分析報告";
    if (r.theme && /^#[0-9a-fA-F]{6}$/.test(r.theme.accent)) {
      document.documentElement.style.setProperty("--accent", r.theme.accent);
      document.documentElement.style.setProperty("--accent-soft", r.theme.accentSoft || "#faf3e4");
    }
    document.getElementById("meta-name").textContent = r.name + " " + r.en;

    var total = r.slides.length;
    deck.innerHTML = r.slides.map(function (sl, i) {
      var inner = T[sl.type] ? T[sl.type](sl, r) : "";
      var head = sl.type === "cover" ? "" :
        (sl.kicker ? '<p class="kicker">' + esc(sl.kicker) + "</p>" : "") + "<h2>" + esc(sl.title) + "</h2>";
      return '<section class="slide slide--' + esc(sl.type) + '" id="' + esc(sl.id) + '">' + head + inner +
        '<span class="num">' + (i + 1) + " / " + total + "</span></section>";
    }).join("");

    // 進度點
    var dots = document.getElementById("dots");
    dots.innerHTML = r.slides.map(function (sl) { return '<a href="#' + esc(sl.id) + '" title="' + esc(sl.title) + '"></a>'; }).join("");
    var slides = deck.querySelectorAll(".slide");
    var links = dots.querySelectorAll("a");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(slides, e.target);
          links.forEach(function (a, j) { a.classList.toggle("on", j === idx); });
          current = idx;
        }
      });
    }, { threshold: 0.55 });
    slides.forEach(function (el) { io.observe(el); });

    // 鍵盤翻頁
    var current = 0;
    document.addEventListener("keydown", function (e) {
      if (["ArrowRight", "ArrowDown", "PageDown"].indexOf(e.key) !== -1) { go(current + 1); e.preventDefault(); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].indexOf(e.key) !== -1) { go(current - 1); e.preventDefault(); }
    });
    function go(n) { if (n >= 0 && n < slides.length) slides[n].scrollIntoView({ behavior: "smooth" }); }

    document.getElementById("print-btn").addEventListener("click", function () { window.print(); });

    // 顯示規則警告
    if (problems.length) {
      alertBox.hidden = false;
      alertBox.innerHTML = "<strong>⚠ 這份報告不符合 CLAUDE.md 規則：</strong><ul>" +
        problems.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      console.warn("[CLAUDE.md 規則檢查]", problems);
    }
  }
})();
