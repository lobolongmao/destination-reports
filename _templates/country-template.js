/* 新國家範本 —— 複製到 data/countries/<id>.js 後，把所有 TODO 換掉。
   規則見 CLAUDE.md 第 5～7 節。檔案中殘留 TODO 時，報告頁會顯示紅色警告。
   每個數字、價格、政策都要加 src: ["sX"]，並在最下方 sources 登錄。 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["TODO-id"] = {
  id: "TODO-id",
  name: "TODO 中文國名",
  en: "TODO English name",
  author: "TODO 作者",
  checked: "TODO YYYY-MM-DD",
  theme: { accent: "#TODO", accentSoft: "#TODO" },   // 該國主題色（6 碼 HEX）

  slides: [
    { id: "cover", type: "cover", kicker: "Destination Market Report · 0X",
      title: "TODO 國名", subtitle: "TODO 英文名｜臺灣出境旅遊市場分析與旅行社產品比較",
      headline: "TODO 30 字內一句話結論", checked: "TODO YYYY-MM-DD" },

    { id: "background", type: "facts", kicker: "01 · Background", title: "國家背景",
      items: [
        { label: "首都", value: "TODO" },
        { label: "語言／貨幣", value: "TODO" },
        { label: "時差", value: "TODO" },
        { label: "飛行時間", value: "TODO", src: ["TODO"] },
        { label: "主要國際機場", value: "TODO", src: ["TODO"] },
        { label: "臺灣出發", value: "TODO 出發城市與航空公司", src: ["TODO"] },
        { label: "熱門區域", value: "TODO", src: ["TODO"] },
        { label: "旺季", value: "TODO", src: ["TODO"] }
      ] },

    { id: "entry", type: "bullets", kicker: "02 · Entry & Cost", title: "入境規定與旅行成本",
      items: [
        { tag: "new", text: "TODO 簽證／免簽規定", src: ["TODO"] },
        { text: "TODO 入境申報", src: ["TODO"] },
        { text: "TODO 機場稅費或其他費用", src: ["TODO"] },
        { tag: "warn", text: "TODO 匯率或注意事項", src: ["TODO"] }
      ] },

    { id: "market", type: "stats", kicker: "03 · Market Size", title: "臺灣赴TODO市場概況",
      items: [
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] },
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] },
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] }
      ],
      takeaway: "TODO 這些數字代表什麼" },

    { id: "segments", type: "cards", kicker: "04 · Segments", title: "目標客群",
      items: [
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO 對應產品" },
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO 對應產品" },
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO 對應產品" }
      ] },

    { id: "lion", type: "table", kicker: "05 · Lion Travel", title: "雄獅旅遊TODO產品整理",
      columns: ["產品（官網名稱節錄）", "天數／出發", "價格", "類型", "景點", "美食", "體驗"],
      rows: [
        { cells: ["TODO", "TODO", "NT$TODO 起", "TODO", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "NT$TODO 起", "TODO", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "NT$TODO 起", "TODO", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "NT$TODO 起", "TODO", "TODO", "TODO", "TODO"], src: ["TODO"] }
      ],
      note: "價格為查詢日官網或通路顯示之起價，依出發日浮動。" },

    { id: "competitors", type: "table", kicker: "06 · Competitors", title: "其他旅行社TODO產品",
      columns: ["旅行社", "產品（節錄）", "天數", "價格", "類型／特色", "景點・美食・體驗"],
      rows: [
        { cells: ["可樂旅遊", "TODO", "TODO", "NT$TODO 起", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["東南旅遊", "TODO", "TODO", "NT$TODO 起", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["鳳凰旅遊", "TODO", "TODO", "NT$TODO 起", "TODO", "TODO"], src: ["TODO"] }
      ],
      note: "價格為查詢日各旅行社官網列表顯示之起價，依出發日浮動。" },

    { id: "compare", type: "compare", kicker: "07 · Comparison", title: "旅行社優勢與劣勢",
      items: [
        { agency: "雄獅旅遊", position: "TODO 定位",
          pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "可樂旅遊", position: "TODO 定位",
          pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "東南旅遊", position: "TODO 定位",
          pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "鳳凰旅遊", position: "TODO 定位",
          pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] }
      ] },

    { id: "insight", type: "insight", kicker: "08 · Opportunities", title: "市場缺口與機會",
      items: [
        { title: "TODO 機會 1", text: "TODO" },
        { title: "TODO 機會 2", text: "TODO" },
        { title: "TODO 機會 3", text: "TODO" }
      ] },

    { id: "sources", type: "sources", kicker: "09 · Sources", title: "資料來源",
      note: "查詢日期：TODO。產品價格為查詢當日網頁顯示之起價，實際售價以各旅行社公告為準。" }
  ],

  sources: [
    { id: "TODO", title: "TODO", publisher: "TODO", url: "https://TODO", date: "TODO" }
  ]
};
