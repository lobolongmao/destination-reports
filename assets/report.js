/* 報告渲染器：report.html?c=<id> → 載入 data/countries/<id>.js → 依 slides 渲染成簡報
   同時檢查 CLAUDE.md 第 5 節的規則，違規時在頁面頂端顯示紅色警告。
   新增國家「不需要」修改本檔。 */
(function () {
  "use strict";

  /* ---------- 規則常數（與 CLAUDE.md 同步） ---------- */
  var REQUIRED = ["cover", "background", "map", "entry", "market", "trend", "segments",
    "lion", "matrix", "compare", "insight", "actions", "sources"];
  var MUST_INFER = ["segments", "insight", "actions"];
  var BANDS = ["1 萬以下", "1–2 萬", "2–3 萬", "3–4 萬", "4 萬以上", "未公開", "未見同類"];
  var BASIS = {
    fact: "資料事實",
    summary: "依資料歸納",
    mixed: "事實＋AI 推論",
    inference: "AI 推論（待驗證）"
  };

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
  function inf(it) { return it && it.inference ? '<span class="inf-tag">推論</span>' : ""; }
  function bandClass(b) { var i = BANDS.indexOf(b); return i === -1 ? "band-x" : "band-" + i; }

  /* ---------- 內建圖示（自繪，無版權疑慮） ---------- */
  var ICONS = {
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
    passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c2.8 0 5 2.2 5 5"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    scale: '<path d="M12 3v18M5 7h14M5 7l-3 7h6L5 7zM19 7l-3 7h6l-3-7zM8 21h8"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5V16h8v-2.5A6 6 0 0 0 12 3z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4zM20 4h-5a3 3 0 0 0-3 3"/><path d="M20 4v14h-6"/>'
  };
  function icon(name) {
    if (!ICONS[name]) return "";
    return '<svg class="slide-icon" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + "</svg>";
  }

  /* ---------- 封面插畫（通用剪影，可選 temple / city / beach / mountain） ---------- */
  var ART = {
    temple: '<circle cx="300" cy="120" r="70" class="sun"/>' +
      '<path class="far" d="M0 300 L60 250 L120 270 L200 230 L280 260 L360 220 L440 300Z"/>' +
      '<path class="mid" d="M150 300V215h20l-10-25 20 0-10-25 14 0-14-35-14 35 14 0-10 25 20 0-10 25h20v85z"/>' +
      '<path class="mid" d="M250 300v-60c0-25 20-35 30-55 10 20 30 30 30 55v60z M280 185v-45"/>' +
      '<path class="mid" d="M330 300v-40h50v40zM320 262l35-22 35 22z"/>' +
      '<path class="water" d="M0 300h440v40H0z"/>' +
      '<path class="wave" d="M20 318q15-6 30 0t30 0M140 326q15-6 30 0t30 0M280 316q15-6 30 0t30 0"/>',
    city: '<circle cx="320" cy="110" r="60" class="sun"/><path class="mid" d="M40 300V200h40v100M100 300V150h50v150M170 300V220h30v80M220 300V120h45v180M285 300V190h40v110M340 300V230h50v70"/><path class="water" d="M0 300h440v40H0z"/>',
    beach: '<circle cx="300" cy="130" r="65" class="sun"/><path class="water" d="M0 240h440v100H0z"/><path class="far" d="M0 300q220-60 440 0v40H0z"/><path class="mid" d="M90 300c5-60 10-110 30-150M120 150c-30-5-55 5-70 25M120 150c25-15 55-10 70 10M120 150c-10-25-35-35-55-30"/>',
    mountain: '<circle cx="320" cy="110" r="60" class="sun"/><path class="far" d="M0 300 120 140l80 100 70-120 170 180z"/><path class="mid" d="M0 300l90-80 70 50 90-90 190 120z"/><path class="water" d="M0 300h440v40H0z"/>'
  };

  /* ---------- 各版型 ---------- */
  var T = {
    cover: function (sl, r) {
      var art = ART[sl.art] ? '<svg class="cover-art" viewBox="0 0 440 340" aria-hidden="true">' + ART[sl.art] + "</svg>" : "";
      return '<div class="cover-grid"><div><p class="kicker">' + esc(sl.kicker || "Destination Market Report") + "</p>" +
        "<h1>" + esc(sl.title) + "</h1>" +
        '<p class="subtitle">' + esc(sl.subtitle) + "</p>" +
        '<p class="headline">' + esc(sl.headline) + "</p>" +
        '<p class="checked">資料查詢日：' + esc(sl.checked) + "　｜　整理：" + esc(r.author || "") + "</p></div>" + art + "</div>" +
        '<div class="legend-basis">本報告以標籤區分：<span class="basis b-fact">資料事實</span><span class="basis b-summary">依資料歸納</span><span class="basis b-inference">AI 推論（待驗證）</span></div>' +
        '<p class="hint">↓ 捲動或按 → 翻頁</p>';
    },
    facts: function (sl) {
      return '<dl class="facts">' + sl.items.map(function (it) {
        return '<div class="' + (it.inference ? "inf" : "") + '"><dt>' + esc(it.label) + "</dt><dd>" + esc(it.value) + inf(it) + refs(it.src) + "</dd></div>";
      }).join("") + "</dl>";
    },
    bullets: function (sl) {
      var label = { "new": "近期變動", "warn": "注意" };
      return '<ul class="bullets">' + sl.items.map(function (it) {
        var tag = it.tag ? '<span class="tag ' + esc(it.tag) + '">' + (label[it.tag] || esc(it.tag)) + "</span>" : "";
        return '<li class="' + (it.inference ? "inf" : "") + '">' + tag + esc(it.text) + inf(it) + refs(it.src) + "</li>";
      }).join("") + "</ul>";
    },
    stats: function (sl) {
      if (sl.items.length > 4) problems.push("「" + sl.title + "」stats 超過 4 個");
      return '<div class="stats">' + sl.items.map(function (it) {
        if (!it.src || !it.src.length) problems.push("「" + sl.title + "」的數字「" + it.value + "」沒有 src");
        return '<div class="stat"><div class="value">' + esc(it.value) + refs(it.src) + '</div><div class="label">' +
          esc(it.label) + "</div>" + (it.note ? '<div class="note">' + esc(it.note) + "</div>" : "") + "</div>";
      }).join("") + "</div>" +
        (sl.takeaway ? '<p class="takeaway"><span class="basis b-inference">AI 推論</span>' + esc(sl.takeaway) + "</p>" : "");
    },
    cards: function (sl) {
      return '<div class="cards">' + sl.items.map(function (it) {
        return '<div class="card"><h3>' + esc(it.name) + "</h3><dl><dt>WHO</dt><dd>" + esc(it.who) +
          "</dd><dt>NEEDS</dt><dd>" + esc(it.needs) + "</dd><dt>PRODUCT FIT</dt><dd>" + esc(it.fit) + refs(it.src) + "</dd></dl></div>";
      }).join("") + "</div>";
    },
    table: function (sl) {
      if (sl.rows.length > 8) problems.push("「" + sl.title + "」表格超過 8 列");
      var bandCol = sl.columns.indexOf("價格帶");
      var head = "<tr>" + sl.columns.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>";
      var body = sl.rows.map(function (row) {
        var cells = row.cells || row;
        return "<tr>" + cells.map(function (c, i) {
          if (i === bandCol) {
            if (BANDS.indexOf(c) === -1) problems.push("「" + sl.title + "」價格帶不在規定選項內：" + c);
            return '<td><span class="band ' + bandClass(c) + '">' + esc(c) + "</span></td>";
          }
          return "<td>" + esc(c) + (i === 0 && row.src ? refs(row.src) : "") + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return '<div class="table-wrap"><table class="data"><thead>' + head + "</thead><tbody>" + body +
        "</tbody></table></div>" + (sl.note ? '<p class="table-note">' + esc(sl.note) + refs(sl.src) + "</p>" : "");
    },

    /* 示意地圖：equirectangular，依 bbox 自動縮放 */
    map: function (sl) {
      var m = sl.map, b = m.bbox; // [minLon, minLat, maxLon, maxLat]
      var k = Math.cos(((b[1] + b[3]) / 2) * Math.PI / 180);
      var W = 400, H = Math.round(W * (b[3] - b[1]) / ((b[2] - b[0]) * k));
      function P(lon, lat) { return [((lon - b[0]) / (b[2] - b[0]) * W).toFixed(1), ((b[3] - lat) / (b[3] - b[1]) * H).toFixed(1)]; }
      // outline 可為單一多邊形 [[lon,lat],...] 或多個多邊形 [[[lon,lat],...], ...]（群島國家）
      var polys = typeof m.outline[0][0] === "number" ? [m.outline] : m.outline;
      var outline = polys.map(function (poly) {
        return poly.map(function (p, i) { var q = P(p[0], p[1]); return (i ? "L" : "M") + q[0] + " " + q[1]; }).join("") + "Z";
      }).join("");
      var svg = '<svg class="map-svg" viewBox="-10 -10 ' + (W + 20) + " " + (H + 20) + '" role="img" aria-label="' + esc(sl.title) + '">';
      svg += '<path class="land" d="' + outline + '"/>';
      (m.islands || []).forEach(function (p) { var q = P(p[0], p[1]); svg += '<circle class="land" cx="' + q[0] + '" cy="' + q[1] + '" r="' + (p[2] || 4) + '"/>'; });
      if (m.origin) {
        // toward：臺灣相對於地圖的方向，ne（右上，預設）或 sw（左下）
        var o = P(m.origin.from[0], m.origin.from[1]), sw = m.origin.toward === "sw";
        var ex = sw ? -5 : W + 5, ey = sw ? H * 0.8 : H * 0.05;
        var cx = sw ? W * 0.2 : W * 0.85, cy = sw ? H * 0.72 : H * 0.35;
        svg += '<path class="route" d="M' + o[0] + " " + o[1] + " Q " + cx + " " + cy + " " + ex + " " + ey + '"/>' +
          '<text class="route-label" x="' + (sw ? 2 : W - 2) + '" y="' + (sw ? ey - 12 : ey + 22) + '" text-anchor="' + (sw ? "start" : "end") + '">' + esc(m.origin.label) + "</text>";
      }
      m.points.forEach(function (pt, i) {
        var q = P(pt.lon, pt.lat), left = pt.label === "left";
        svg += '<g class="pt pt-' + esc(pt.kind || "city") + '"><circle cx="' + q[0] + '" cy="' + q[1] + '" r="' + (pt.kind === "hub" ? 7 : 5) + '"/>' +
          '<text x="' + (+q[0] + (left ? -10 : 10)) + '" y="' + (+q[1] + 4) + '" text-anchor="' + (left ? "end" : "start") + '">' + (i + 1) + " " + esc(pt.name) + "</text></g>";
      });
      svg += "</svg>";
      var list = '<ol class="map-list">' + m.points.map(function (pt) {
        return "<li><strong>" + esc(pt.name) + "</strong>" + (pt.en ? ' <span class="en">' + esc(pt.en) + "</span>" : "") +
          "<br>" + esc(pt.note) + refs(pt.src) + "</li>";
      }).join("") + "</ol>";
      return '<div class="map-grid"><figure>' + svg + '<figcaption>示意地圖：國界與位置為概略繪製，僅供理解相對位置。</figcaption></figure>' + list + "</div>";
    },

    /* 長條趨勢圖：status = actual / estimate / forecast / target */
    chart: function (sl) {
      var STATUS = { actual: "實際值", estimate: "推算值（AI 依來源計算）", forecast: "官方預估", target: "官方目標" };
      var used = {};
      var charts = sl.items.map(function (c) {
        var max = Math.max.apply(null, c.bars.map(function (x) { return x.value; })) * 1.15;
        var W = 380, H = 220, pad = 28, bw = (W - pad * 2) / c.bars.length;
        var g = '<svg class="chart-svg" viewBox="0 0 ' + W + " " + (H + 40) + '" role="img" aria-label="' + esc(c.title) + '">';
        g += '<line class="axis" x1="' + pad + '" y1="' + H + '" x2="' + (W - pad) + '" y2="' + H + '"/>';
        c.bars.forEach(function (x, i) {
          var st = x.status || "actual"; used[st] = true;
          var h = (x.value / max) * (H - 30), xx = pad + i * bw + bw * 0.18, w = bw * 0.64;
          g += '<rect class="bar bar-' + st + '" x="' + xx.toFixed(1) + '" y="' + (H - h).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '"/>' +
            '<text class="bar-val" x="' + (xx + w / 2).toFixed(1) + '" y="' + (H - h - 6).toFixed(1) + '" text-anchor="middle">' + esc(x.display || x.value) + "</text>" +
            '<text class="bar-lab" x="' + (xx + w / 2).toFixed(1) + '" y="' + (H + 18) + '" text-anchor="middle">' + esc(x.label) + "</text>";
        });
        g += "</svg>";
        var srcs = [];
        c.bars.forEach(function (x) { (x.src || []).forEach(function (sid) { if (srcs.indexOf(sid) === -1) srcs.push(sid); }); });
        return '<figure class="chart"><h3>' + esc(c.title) + '</h3><p class="unit">單位：' + esc(c.unit) + "</p>" + g +
          '<figcaption>' + esc(c.note || "") + refs(srcs) + "</figcaption></figure>";
      }).join("");
      var legend = '<div class="chart-legend">' + Object.keys(STATUS).filter(function (k) { return used[k]; }).map(function (k) {
        return '<span><i class="sw bar-' + k + '"></i>' + STATUS[k] + "</span>";
      }).join("") + "</div>";
      return '<div class="charts">' + charts + "</div>" + legend;
    },

    /* 同類型比較矩陣：列＝產品類型，欄＝旅行社 */
    matrix: function (sl) {
      var head = "<tr><th>產品類型</th>" + sl.agencies.map(function (a, i) {
        return '<th class="' + (i === 0 ? "primary" : "") + '">' + esc(a) + "</th>";
      }).join("") + "</tr>";
      var body = sl.rows.map(function (row) {
        return '<tr><th scope="row"><strong>' + esc(row.category) + '</strong><span class="cat-desc">' + esc(row.desc) + "</span></th>" +
          row.cells.map(function (c, i) {
            if (BANDS.indexOf(c.band) === -1) problems.push("「" + sl.title + "」價格帶不在規定選項內：" + c.band);
            return '<td class="' + (i === 0 ? "primary" : "") + '"><span class="band ' + bandClass(c.band) + '">' + esc(c.band) + "</span>" +
              (c.example ? '<span class="ex">' + esc(c.example) + refs(c.src) + "</span>" : "") + "</td>";
          }).join("") + "</tr>";
      }).join("");
      return '<p class="basis-note">' + esc(sl.basisNote) + '</p><div class="table-wrap"><table class="matrix"><thead>' + head +
        "</thead><tbody>" + body + "</tbody></table></div>" +
        (sl.readout ? '<ul class="readout">' + sl.readout.map(function (x) { return "<li>" + esc(x.text) + inf(x) + refs(x.src) + "</li>"; }).join("") + "</ul>" : "");
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
      return '<div class="insights">' + sl.items.map(function (it) {
        return "<div><h3>" + esc(it.title) + '</h3><p class="evidence"><b>依據</b>' + esc(it.evidence || "") + refs(it.src) +
          '</p><p><b>推論</b>' + esc(it.text) + "</p></div>";
      }).join("") + "</div>";
    },

    /* 行動優先順序：priority P1–P3、feasibility 高/中/低、kpi 陣列 */
    actions: function (sl) {
      var FEAS = { "高": 3, "中": 2, "低": 1 };
      return '<div class="actions">' + sl.items.map(function (it) {
        var dots = "";
        for (var i = 1; i <= 3; i++) dots += '<i class="' + (i <= (FEAS[it.feasibility] || 0) ? "on" : "") + '"></i>';
        return '<div class="action"><div class="a-head"><span class="prio prio-' + esc(it.priority) + '">' + esc(it.priority) + "</span><h3>" + esc(it.action) + "</h3></div>" +
          '<p class="why">' + esc(it.why) + refs(it.src) + "</p>" +
          '<div class="a-meta"><span><b>可行性</b><span class="feas">' + dots + "</span>" + esc(it.feasibility) + "｜" + esc(it.feasibilityNote || "") + "</span>" +
          "<span><b>時程</b>" + esc(it.timeline) + "</span></div>" +
          '<div class="kpi"><b>衡量指標</b><ul>' + it.kpi.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul></div></div>";
      }).join("") + "</div>" + (sl.note ? '<p class="table-note">' + esc(sl.note) + "</p>" : "");
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
    r.slides.forEach(function (sl) {
      if (!T[sl.type]) problems.push("未知的版型 type：" + sl.type);
      if (sl.type !== "cover" && !BASIS[sl.basis]) problems.push("「" + sl.title + "」缺少或填錯 basis（fact / summary / mixed / inference）");
      if (MUST_INFER.indexOf(sl.id) !== -1 && sl.basis !== "inference") problems.push("「" + sl.title + "」必須標為 basis: \"inference\"");
    });
  }

  /* ---------- 渲染 ---------- */
  function render(r) {
    r.sources.forEach(function (x, i) { srcIndex[x.id] = i + 1; });
    check(r);

    document.title = r.name + "市場分析報告｜目的地市場分析報告";
    if (r.theme && /^#[0-9a-fA-F]{6}$/.test(r.theme.accent)) {
      document.documentElement.style.setProperty("--accent", r.theme.accent);
      if (/^#[0-9a-fA-F]{6}$/.test(r.theme.accentSoft || "")) document.documentElement.style.setProperty("--accent-soft", r.theme.accentSoft);
    }
    document.getElementById("meta-name").textContent = r.name + " " + r.en;

    var total = r.slides.length;
    deck.innerHTML = r.slides.map(function (sl, i) {
      var inner = T[sl.type] ? T[sl.type](sl, r) : "";
      var basis = sl.basis && BASIS[sl.basis] ? '<span class="basis b-' + sl.basis + '">' + BASIS[sl.basis] + "</span>" : "";
      var head = sl.type === "cover" ? "" :
        icon(sl.icon) + '<p class="kicker">' + esc(sl.kicker || "") + basis + "</p><h2>" + esc(sl.title) + "</h2>" +
        (sl.lede ? '<p class="lede">' + esc(sl.lede) + "</p>" : "");
      return '<section class="slide slide--' + esc(sl.type) + '" id="' + esc(sl.id) + '">' + head + inner +
        '<span class="num">' + (i + 1) + " / " + total + "</span></section>";
    }).join("");

    // 進度點
    var dots = document.getElementById("dots");
    dots.innerHTML = r.slides.map(function (sl) { return '<a href="#' + esc(sl.id) + '" title="' + esc(sl.title) + '"></a>'; }).join("");
    var slides = deck.querySelectorAll(".slide");
    var links = dots.querySelectorAll("a");
    var current = 0;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(slides, e.target);
          links.forEach(function (a, j) { a.classList.toggle("on", j === idx); });
          current = idx;
        }
      });
    }, { threshold: 0.5 });
    slides.forEach(function (el) { io.observe(el); });

    // 鍵盤翻頁
    document.addEventListener("keydown", function (e) {
      if (["ArrowRight", "PageDown"].indexOf(e.key) !== -1) { go(current + 1); e.preventDefault(); }
      if (["ArrowLeft", "PageUp"].indexOf(e.key) !== -1) { go(current - 1); e.preventDefault(); }
    });
    function go(n) { if (n >= 0 && n < slides.length) slides[n].scrollIntoView({ behavior: "smooth" }); }
    document.getElementById("print-btn").addEventListener("click", function () { window.print(); });

    if (problems.length) {
      alertBox.hidden = false;
      alertBox.innerHTML = "<strong>⚠ 這份報告不符合 CLAUDE.md 規則：</strong><ul>" +
        problems.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      console.warn("[CLAUDE.md 規則檢查]", problems);
    }
  }
})();
