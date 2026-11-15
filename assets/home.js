/* 首頁：依 window.COUNTRIES 產生國家卡片。新增國家不需修改本檔。 */
(function () {
  var grid = document.getElementById("country-grid");
  if (!grid || !window.COUNTRIES) return;
  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var cards = window.COUNTRIES.map(function (c) {
    var badge = c.status === "draft" ? '<span class="badge draft">草稿</span>' : '<span class="badge">完成</span>';
    return '<a class="country-card" href="report.html?c=' + encodeURIComponent(c.id) + '">' +
      '<span class="region">' + esc(c.region) + "</span>" +
      "<h3>" + esc(c.name) + "</h3><span class=\"en\">" + esc(c.en) + "</span>" +
      "<p>" + esc(c.summary) + "</p>" +
      '<div class="foot"><span>查詢日 ' + esc(c.checked) + "</span>" + badge + "</div></a>";
  });
  cards.push('<div class="country-card placeholder"><span class="region">下一份</span><h3>＋ 新國家</h3>' +
    "<p>依 CLAUDE.md 第 6 節，複製範本、填資料、登錄即可產生新報告。</p></div>");
  grid.innerHTML = cards.join("");
})();
