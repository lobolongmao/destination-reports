/* 新國家範本 —— 複製到 data/countries/<id>.js 後，把所有 TODO 換掉。
   規則見 CLAUDE.md 第 5～7 節。殘留 TODO 時，報告頁會顯示紅色警告。
   ・每個數字、政策、產品都加 src: ["sX"]，並在最下方 sources 登錄
   ・價格只能用價格帶：1 萬以下／1–2 萬／2–3 萬／3–4 萬／4 萬以上／未公開／未見同類
   ・basis：fact／summary／mixed／inference（segments、insight、actions 必須是 inference） */
window.REPORTS = window.REPORTS || {};
window.REPORTS["TODO-id"] = {
  id: "TODO-id",
  name: "TODO 中文國名",
  en: "TODO English name",
  author: "TODO 作者",
  checked: "TODO YYYY-MM-DD",
  theme: { accent: "#TODO", accentSoft: "#TODO" },

  slides: [
    { id: "cover", type: "cover", art: "TODO temple|city|beach|mountain",
      kicker: "Destination Market Report · 0X", title: "TODO 國名",
      subtitle: "TODO 英文名｜臺灣出境旅遊市場分析與旅行社產品比較",
      headline: "TODO 40 字內一句話結論", checked: "TODO YYYY-MM-DD" },

    { id: "background", type: "facts", basis: "fact", icon: "globe", kicker: "01 · Background", title: "國家背景",
      items: [
        { label: "首都", value: "TODO" },
        { label: "語言／貨幣", value: "TODO" },
        { label: "時差", value: "TODO" },
        { label: "飛行時間", value: "TODO", src: ["TODO"] },
        { label: "主要國際機場", value: "TODO", src: ["TODO"] },
        { label: "臺灣出發", value: "TODO 出發城市與航空公司", src: ["TODO"] },
        { label: "旺季", value: "TODO", src: ["TODO"] }
      ] },

    { id: "map", type: "map", basis: "summary", icon: "map", kicker: "02 · Where", title: "主要旅遊區域在哪裡",
      lede: "TODO 一句話說明產品集中在哪些區域",
      map: {
        bbox: ["TODO 最小經度", "TODO 最小緯度", "TODO 最大經度", "TODO 最大緯度"],
        outline: [["TODO lon", "TODO lat"]],
        origin: { from: ["TODO lon", "TODO lat"], label: "臺北 ✈ 直飛約 TODO 小時" },
        points: [
          { name: "TODO", en: "TODO", lat: 0, lon: 0, kind: "hub", note: "TODO", src: ["TODO"] }
        ]
      } },

    { id: "entry", type: "bullets", basis: "fact", icon: "passport", kicker: "03 · Entry & Cost", title: "入境規定與旅行成本",
      items: [
        { tag: "new", text: "TODO 簽證／免簽規定", src: ["TODO"] },
        { text: "TODO 入境申報", src: ["TODO"] },
        { text: "TODO 機場稅費或其他費用", src: ["TODO"] },
        { tag: "warn", text: "TODO 匯率或注意事項", src: ["TODO"] }
      ] },

    { id: "market", type: "stats", basis: "mixed", icon: "chart", kicker: "04 · Market Size", title: "臺灣赴TODO市場概況",
      items: [
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] },
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] },
        { value: "TODO", label: "TODO", note: "TODO", src: ["TODO"] }
      ],
      takeaway: "TODO 這些數字可能代表什麼（會自動標為 AI 推論）" },

    { id: "trend", type: "chart", basis: "mixed", icon: "trend", kicker: "05 · Trend", title: "長期趨勢",
      items: [
        { title: "TODO 圖表名稱", unit: "萬人次", note: "TODO 推算值的算式或資料缺口說明",
          bars: [
            { label: "TODO 年", value: 0, display: "TODO", status: "actual", src: ["TODO"] },
            { label: "TODO 年", value: 0, display: "TODO", status: "forecast", src: ["TODO"] }
          ] }
      ] },

    { id: "segments", type: "cards", basis: "inference", icon: "users", kicker: "06 · Segments", title: "目標客群",
      items: [
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO 對應產品類型與價格帶" },
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO" },
        { name: "TODO 客群名", who: "TODO", needs: "TODO", fit: "TODO" }
      ] },

    { id: "lion", type: "table", basis: "fact", icon: "bag", kicker: "07 · Lion Travel", title: "雄獅旅遊TODO產品整理",
      columns: ["產品（官網名稱節錄）", "類型", "天數／出發", "價格帶", "景點", "美食", "體驗"],
      rows: [
        { cells: ["TODO", "TODO", "TODO", "TODO 價格帶", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "TODO", "TODO 價格帶", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "TODO", "TODO 價格帶", "TODO", "TODO", "TODO"], src: ["TODO"] },
        { cells: ["TODO", "TODO", "TODO", "TODO 價格帶", "TODO", "TODO", "TODO"], src: ["TODO"] }
      ],
      note: "價格以「每人起價」所在的價格帶表示；出發日不同，只看相對位置。「未公開」＝查詢時頁面沒有顯示價格。" },

    { id: "matrix", type: "matrix", basis: "summary", icon: "grid", kicker: "08 · Like-for-like", title: "同類型產品比較",
      basisNote: "比較口徑：TODO 天數、出發地、每人起價；「未見同類」指查詢時列表中沒有找到這類產品。",
      agencies: ["雄獅旅遊", "可樂旅遊", "東南旅遊", "鳳凰旅遊"],
      rows: [
        { category: "萬元入門團", desc: "TODO", cells: [{ band: "TODO", example: "TODO", src: ["TODO"] }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "經典團", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "無購物＋五星品質團", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "小團／幾人成行", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "團體自由行／機加酒", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "季節／外府主題團", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] },
        { category: "頂級奢旅", desc: "TODO", cells: [{ band: "TODO" }, { band: "TODO" }, { band: "TODO" }, { band: "TODO" }] }
      ],
      readout: [{ text: "TODO 同類比較看出的差異" }] },

    { id: "compare", type: "compare", basis: "summary", icon: "scale", kicker: "09 · Comparison", title: "旅行社優勢與劣勢",
      items: [
        { agency: "雄獅旅遊", position: "TODO", pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "可樂旅遊", position: "TODO", pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "東南旅遊", position: "TODO", pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] },
        { agency: "鳳凰旅遊", position: "TODO", pros: [{ text: "TODO", src: ["TODO"] }], cons: [{ text: "TODO", src: ["TODO"] }] }
      ] },

    { id: "insight", type: "insight", basis: "inference", icon: "bulb", kicker: "10 · Opportunities", title: "市場缺口與機會",
      items: [
        { title: "TODO", evidence: "TODO 有來源的依據", text: "TODO 推論", src: ["TODO"] },
        { title: "TODO", evidence: "TODO", text: "TODO", src: ["TODO"] },
        { title: "TODO", evidence: "TODO", text: "TODO", src: ["TODO"] }
      ] },

    { id: "actions", type: "actions", basis: "inference", icon: "flag", kicker: "11 · Action Plan", title: "行動優先順序（以雄獅視角）",
      lede: "優先順序依「預期影響 × 可行性」判斷。",
      items: [
        { priority: "P1", action: "TODO", why: "TODO", feasibility: "高", feasibilityNote: "TODO", timeline: "TODO", kpi: ["TODO 可量化指標"], src: ["TODO"] },
        { priority: "P2", action: "TODO", why: "TODO", feasibility: "中", feasibilityNote: "TODO", timeline: "TODO", kpi: ["TODO"], src: ["TODO"] },
        { priority: "P3", action: "TODO", why: "TODO", feasibility: "低", feasibilityNote: "TODO", timeline: "TODO", kpi: ["TODO"], src: ["TODO"] }
      ],
      note: "以上為 AI 依本報告資料推論的建議，實際排序需搭配內部資料驗證。" },

    { id: "sources", type: "sources", basis: "fact", icon: "book", kicker: "12 · Sources", title: "資料來源",
      note: "查詢日期：TODO。產品價格以查詢當日網頁顯示之起價歸入價格帶，實際售價以各旅行社公告為準。" }
  ],

  sources: [
    { id: "TODO", title: "TODO", publisher: "TODO", url: "https://TODO", date: "TODO" }
  ]
};
