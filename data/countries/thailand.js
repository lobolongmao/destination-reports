/* 泰國市場分析報告 —— 只放資料，版面由 assets/report.js 渲染。規則見 CLAUDE.md。 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["thailand"] = {
  id: "thailand",
  name: "泰國",
  en: "Thailand",
  author: "羅聖皓",
  checked: "2026-11-16",
  theme: { accent: "#c8962e", accentSoft: "#faf3e4" },

  slides: [
    /* 1 封面 */
    {
      id: "cover", type: "cover", art: "temple",
      kicker: "Destination Market Report · 01",
      title: "泰國",
      subtitle: "Thailand｜臺灣出境旅遊市場分析與旅行社產品比較",
      headline: "入境門檻變高、旅客信心待修復；產品競爭轉向「無購物＋五星＋主題」，雄獅勝在產品線最完整。",
      checked: "2026-11-16"
    },

    /* 2 國家背景 */
    {
      id: "background", type: "facts", basis: "fact", icon: "globe",
      kicker: "01 · Background", title: "國家背景",
      items: [
        { label: "首都", value: "曼谷（Bangkok）" },
        { label: "語言／貨幣", value: "泰語／泰銖（THB）" },
        { label: "時差", value: "比臺灣慢 1 小時（UTC+7）" },
        { label: "飛行時間", value: "臺灣直飛曼谷不到 4 小時", src: ["s34"] },
        { label: "主要國際機場", value: "曼谷素萬那普（BKK）、廊曼（DMK），以及普吉、清邁、合艾、清萊", src: ["s2"] },
        { label: "臺灣出發", value: "桃園為主，高雄、台中亦有直飛團；長榮、華航、星宇、泰航、虎航、泰獅航皆有航班", src: ["s21", "s35"] },
        { label: "城市地位", value: "曼谷被 Euromonitor 評為 2025 年全球最多國際旅客造訪城市（3,030 萬人次）", src: ["s11"] },
        { label: "旺季", value: "冬季與春節為臺灣旅客旺季；2026 年春節住宿搜尋量曼谷居首", src: ["s11"] }
      ]
    },

    /* 3 地圖 */
    {
      id: "map", type: "map", basis: "summary", icon: "map",
      kicker: "02 · Where", title: "主要旅遊區域在哪裡",
      lede: "臺灣團體行程以曼谷、芭達雅為主力，向外延伸到大城、華欣、北碧；泰北與南部海島則是另一條產品線。",
      map: {
        bbox: [97.0, 5.4, 106.0, 20.8],
        outline: [[97.35,18.55],[97.75,19.55],[98.25,19.75],[98.95,19.78],[99.5,20.15],[99.95,20.45],[100.1,20.38],[100.55,20.15],[100.4,19.6],[101.25,19.55],[101.05,18.45],[101.15,17.5],[101.9,17.95],[102.65,17.85],[103.3,18.4],[104.0,18.25],[104.7,17.5],[104.8,16.5],[105.45,15.8],[105.6,14.95],[105.2,14.35],[104.3,14.4],[103.0,14.35],[102.55,13.65],[102.35,13.0],[102.6,12.2],[102.95,11.65],[102.3,12.15],[101.7,12.65],[100.95,12.65],[100.85,13.45],[100.55,13.55],[100.0,13.4],[99.95,12.6],[99.65,11.8],[99.2,10.9],[99.2,10.0],[99.85,9.25],[100.35,8.4],[100.6,7.2],[101.3,6.9],[102.1,6.2],[101.6,5.8],[101.1,6.25],[100.4,6.5],[100.1,6.7],[99.7,7.1],[99.3,7.7],[98.9,8.1],[98.45,8.2],[98.3,8.5],[98.25,9.0],[98.6,9.95],[98.75,10.6],[99.25,11.6],[99.1,12.6],[99.2,13.2],[98.6,14.1],[98.2,15.2],[98.6,16.1],[98.55,16.7],[97.75,17.65]],
        islands: [[98.35, 7.95, 5], [100.0, 9.5, 4]],
        origin: { from: [100.5, 13.75], label: "臺北 ✈ 直飛約 4 小時" },
        points: [
          { name: "曼谷", en: "Bangkok", lat: 13.75, lon: 100.5, kind: "hub", note: "首都與主要國際航點，幾乎所有團體行程的起訖點", src: ["s2"] },
          { name: "芭達雅", en: "Pattaya", lat: 12.93, lon: 100.88, kind: "beach", note: "曼谷東南約 145 公里的海濱，曼芭團主力", src: ["s19"] },
          { name: "華欣", en: "Hua Hin", lat: 12.57, lon: 99.96, kind: "beach", label: "left", note: "度假海濱，常與曼谷組成「雙城」或文青主題團", src: ["s21"] },
          { name: "大城", en: "Ayutthaya", lat: 14.35, lon: 100.57, note: "古都遺址與獅子動物園，常見於親子與文化行程", src: ["s21"] },
          { name: "北碧", en: "Kanchanaburi", lat: 14.02, lon: 99.53, label: "left", note: "賽福瑞動物園、桂河與水上屋，外府主題團", src: ["s15", "s21"] },
          { name: "清邁", en: "Chiang Mai", lat: 18.79, lon: 98.98, note: "泰北門戶，大象營、夜間動物園、古城", src: ["s21"] },
          { name: "清萊", en: "Chiang Rai", lat: 19.91, lon: 99.83, note: "白廟、藍廟，常與清邁組成雙城團", src: ["s21"] },
          { name: "普吉", en: "Phuket", lat: 7.88, lon: 98.39, kind: "beach", label: "left", note: "安達曼海島嶼，跳島與海灘度假", src: ["s21"] },
          { name: "蘇梅島", en: "Koh Samui", lat: 9.5, lon: 100.0, kind: "beach", note: "暹羅灣島嶼，有星宇直飛的度假團", src: ["s21"] }
        ]
      }
    },

    /* 4 入境 */
    {
      id: "entry", type: "bullets", basis: "fact", icon: "passport",
      kicker: "03 · Entry & Cost", title: "入境規定與旅行成本",
      items: [
        { tag: "new", text: "2026 年 5 月泰國取消對 93 國的 60 天免簽，臺灣旅客恢復為 30 天免簽。", src: ["s1"] },
        { text: "要多停留可在當地移民局延簽，費用 1,900 泰銖，可再延 30 天。", src: ["s2"] },
        { text: "自 2025 年 5 月 1 日起，入境前 72 小時內須線上免費填寫數位入境卡 TDAC，取代紙本 TM6。", src: ["s4", "s3"] },
        { tag: "new", text: "2026 年 6 月 20 日起，國際出境旅客服務費由 730 泰銖調為 1,120 泰銖，通常已含在機票中。", src: ["s2"] },
        { tag: "warn", text: "外籍旅客入境費（原訂 300 泰銖）研議中，金額可能更高，考慮併入機票或透過 TDAC 收取。", src: ["s5", "s32"] },
        { tag: "warn", text: "泰銖 2025 年升值約 8%，加上安全疑慮，被泰國業者視為旅客減少的兩大主因。", src: ["s12"] }
      ]
    },

    /* 5 市場 */
    {
      id: "market", type: "stats", basis: "mixed", icon: "chart",
      kicker: "04 · Market Size", title: "臺灣赴泰市場概況",
      items: [
        { value: "約 108 萬", label: "2024 年臺灣赴泰人次", note: "2019 年疫情前約 78 萬", src: ["s8"] },
        { value: "−11%", label: "2025 年臺灣市場年減幅", note: "同年臺灣整體出國約 1,890 萬人次，仍在成長", src: ["s6", "s10"] },
        { value: "+12%", label: "2026 年 2 月臺灣市場年增", note: "回升趨勢延續至 3 月", src: ["s9"] },
        { value: "120 萬", label: "泰國觀光局 2026 年臺灣市場目標", note: "2025 年 7 月因泰柬邊境衝突，臺灣曾發布黃色旅遊警示", src: ["s7"] }
      ],
      takeaway: "臺灣整體出國持續成長、泰國卻下滑，問題比較可能出在「信心」與「價格感」而不是需求，這正是旅行社產品能補位的地方。"
    },

    /* 6 趨勢圖 */
    {
      id: "trend", type: "chart", basis: "mixed", icon: "trend",
      kicker: "05 · Trend", title: "長期趨勢：泰國整體 vs. 臺灣市場",
      lede: "泰國整體旅客 2024 年後回落；臺灣市場已超越疫情前，但 2025 年同樣下滑。",
      items: [
        {
          title: "泰國國際旅客人次", unit: "萬人次",
          note: "2026 為泰國政府下修後的預估值。",
          bars: [
            { label: "2019", value: 3990, display: "3,990", status: "actual", src: ["s37"] },
            { label: "2021", value: 43, display: "43", status: "actual", src: ["s37"] },
            { label: "2023", value: 2800, display: "2,800", status: "actual", src: ["s37"] },
            { label: "2024", value: 3550, display: "3,550", status: "actual", src: ["s37"] },
            { label: "2025", value: 3290, display: "3,290", status: "actual", src: ["s6"] },
            { label: "2026", value: 3000, display: "3,000", status: "forecast", src: ["s5"] }
          ]
        },
        {
          title: "臺灣赴泰旅客人次", unit: "萬人次",
          note: "2025 為推算：2024 年 108 萬 ×（1 − 11%）≈ 96 萬；2020–2023 查無一致來源，未列。",
          bars: [
            { label: "2019", value: 78, display: "78", status: "actual", src: ["s8"] },
            { label: "2024", value: 108, display: "108", status: "actual", src: ["s8"] },
            { label: "2025", value: 96, display: "≈96", status: "estimate", src: ["s8", "s6"] },
            { label: "2026", value: 120, display: "120", status: "target", src: ["s7"] }
          ]
        }
      ]
    },

    /* 7 客群 */
    {
      id: "segments", type: "cards", basis: "inference", icon: "users",
      kicker: "06 · Segments", title: "目標客群",
      lede: "依各家產品的設計方向反推主要客群，屬推論，需再以訂單或問卷資料驗證。",
      items: [
        { name: "小資首訪族", who: "學生、社會新鮮人、第一次去泰國的人", needs: "預算有限，想要夜市、按摩、網美咖啡廳，不想自己處理接送", fit: "萬元入門團、團體自由行（價格帶 1 萬以下～1–2 萬）" },
        { name: "親子家庭", who: "帶國小以下孩子的家庭", needs: "動物互動、樂園、飯店好住，節奏不能太趕", fit: "綠山／賽福瑞／大城獅子動物園行程" },
        { name: "熟齡與長輩同行", who: "50 歲以上、帶爸媽出遊的家庭", needs: "無購物、早去晚回、五星飯店、按摩與舒適餐食", fit: "「無購物＋五星」品質團（2–3 萬～3–4 萬）" },
        { name: "高端奢旅", who: "高所得、重視住宿品牌的旅客", needs: "保證入住文華東方、四季、凱賓斯基等品牌", fit: "頂級奢旅團（3–4 萬～4 萬以上）" },
        { name: "主題與小團族", who: "朋友小團、蜜月、素食者、追節慶者", needs: "兩人即可成行、主題明確（燈光節、蔬食、跨年）", fit: "兩人成行 Mini tour、季節主題團" }
      ]
    },

    /* 8 雄獅 */
    {
      id: "lion", type: "table", basis: "fact", icon: "bag",
      kicker: "07 · Lion Travel", title: "雄獅旅遊泰國產品整理",
      columns: ["產品（官網名稱節錄）", "類型", "天數／出發", "價格帶", "景點", "美食", "體驗"],
      rows: [
        { cells: ["曼谷一房一廳、綠山動物園×餵食長頸鹿、濱海小火車、彩虹沙灘俱樂部", "萬元入門團", "5 日／台北", "1–2 萬", "綠山動物園、芭達雅、湄南河、ICONSIAM", "朱拉隆功美食街、泰式風味餐（餐標 250 泰銖）", "餵長頸鹿、古式按摩 60 分鐘"], src: ["s16"] },
        { cells: ["暹邏灣夜釣墨魚×海上 KTV、泰版故宮、國王行宮咖啡廳、嵩越路散策", "萬元入門團", "5 日／台北", "1–2 萬", "芭達雅、曼谷老城", "流水蝦海鮮燒烤吃到飽（餐標 699 泰銖）", "夜釣墨魚；含特產巡禮站"], src: ["s36"] },
        { cells: ["就愛泰國｜曼谷一房一廳酒店兩晚、北碧賽福瑞長頸鹿、玻璃天空棧道、水上泡泡咖啡廳", "經典團", "5 日／星宇", "2–3 萬", "北碧賽福瑞、鄭王廟", "飯店海鮮自助餐", "長頸鹿互動、泡泡屋咖啡廳"], src: ["s15"] },
        { cells: ["佛統納薩塔藝術燈光節、曼谷奢華國際五星 2 晚、華欣葡萄酒莊、拷汪皇宮", "季節主題團", "5 日", "3–4 萬", "燈光節、華欣、拷汪皇宮", "葡萄酒莊、飛機椰林咖啡廳", "夜間燈光藝術"], src: ["s13"] },
        { cells: ["曼谷河畔五星酒店、格蘭島海之旅、海鮮燒烤 BBQ、ICONSIAM，無購物五日", "無購物品質團", "5 日／高雄", "未公開", "格蘭島、東芭樂園、四方水上市場、ASIATIQUE", "海鮮燒烤＋啤酒暢飲（餐標 600 泰銖）", "水上活動、古式按摩 2 小時"], src: ["s19"] },
        { cells: ["曼谷塞福瑞野生動物園、海洋公園、水上泡泡屋咖啡廳、吞武里海鮮市場、米其林推薦｜兩人成行", "小團", "5 日", "3–4 萬", "塞福瑞、海洋公園", "吞武里海鮮市場、米其林推薦餐廳", "兩人即可出發"], src: ["s15"] },
        { cells: ["浪漫日落高空酒吧、北碧賽福瑞長頸鹿、船遊市場美食、鄭王廟泰服體驗｜兩人成行", "小團・無購物", "5 日／長榮", "4 萬以上", "北碧、鄭王廟", "船遊市場美食", "高空酒吧、泰服體驗"], src: ["s14", "s15"] },
        { cells: ["曼谷、芭達雅自由行｜雙城漫遊、精選住宿自選、贈 5 日上網卡", "機加酒自由行", "高雄出發", "1–2 萬", "曼谷＋芭達雅自選", "—", "上網卡"], src: ["s14"] }
      ],
      note: "價格以「每人起價」所在的價格帶表示；出發日不同，只看相對位置。「未公開」＝查詢時頁面沒有顯示價格。燈光節主題另有旅展促銷價（2–3 萬）。",
      src: ["s17"]
    },

    /* 9 同類比較矩陣 */
    {
      id: "matrix", type: "matrix", basis: "summary", icon: "grid",
      kicker: "08 · Like-for-like", title: "同類型產品比較",
      basisNote: "比較口徑：以 5～6 日、台北出發、每人起價為主，價格以價格帶表示。「未見同類」指查詢時列表中沒有找到這類產品，不代表該公司完全沒有。",
      agencies: ["雄獅旅遊", "可樂旅遊", "東南旅遊", "鳳凰旅遊"],
      rows: [
        { category: "萬元入門團", desc: "曼芭經典景點，可能含自理餐或特產站",
          cells: [
            { band: "1–2 萬", example: "曼谷一房一廳＋綠山動物園", src: ["s16"] },
            { band: "1–2 萬", example: "泰愛曼芭～大城長頸鹿", src: ["s22"] },
            { band: "1–2 萬", example: "泰瘋了 6 日（無購物）", src: ["s21"] },
            { band: "未見同類", example: "列表最低落在 2–3 萬", src: ["s26"] }
          ] },
        { category: "經典曼芭團", desc: "四～五星、景點＋表演＋按摩",
          cells: [
            { band: "2–3 萬", example: "就愛泰國｜北碧賽福瑞、鄭王廟", src: ["s15"] },
            { band: "2–3 萬", example: "華欣曼谷青春樂", src: ["s30"] },
            { band: "2–3 萬", example: "超值曼芭｜夜遊暹羅灣", src: ["s21"] },
            { band: "2–3 萬", example: "Pop Mart 旗艦店、爽泰莊園", src: ["s26"] }
          ] },
        { category: "無購物＋五星品質團", desc: "標示無購物，保證或全程五星",
          cells: [
            { band: "未公開", example: "保證河畔奢華五星 2 晚、無購物", src: ["s13"] },
            { band: "未公開", example: "達人帶路｜無市場購物站", src: ["s23"] },
            { band: "2–3 萬", example: "玩家曼谷／典藏華欣", src: ["s21"] },
            { band: "3–4 萬", example: "2 晚東方文華、全程五星無購物", src: ["s26"] }
          ] },
        { category: "小團／幾人成行", desc: "2～6 人即可出發",
          cells: [
            { band: "3–4 萬", example: "兩人成行 Mini tour（另有 4 萬以上款）", src: ["s15", "s14"] },
            { band: "1–2 萬", example: "玩樂曼谷｜四人成行、專屬用車", src: ["s22"] },
            { band: "2–3 萬", example: "獵星曼谷｜6 人成行、無購物", src: ["s21"] },
            { band: "未見同類", example: "" }
          ] },
        { category: "團體自由行／機加酒", desc: "含機票與住宿，行程自理",
          cells: [
            { band: "1 萬以下", example: "曼谷自由行（另有高雄出發雙城款）", src: ["s14"] },
            { band: "1–2 萬", example: "來去曼谷、六人成行 5+1 日", src: ["s25"] },
            { band: "1 萬以下", example: "泰自由 6 日｜接送＋網卡", src: ["s21"] },
            { band: "未見同類", example: "" }
          ] },
        { category: "季節／外府主題團", desc: "燈光節、北碧、桂河等",
          cells: [
            { band: "3–4 萬", example: "燈光節＋華欣（旅展價 2–3 萬）", src: ["s13", "s17"] },
            { band: "3–4 萬", example: "泰享北碧府｜帳篷酒店、螢火蟲", src: ["s22"] },
            { band: "3–4 萬", example: "桂河之旅｜水上屋 1 晚", src: ["s21"] },
            { band: "4 萬以上", example: "奢秘桂河｜水上屋、七重瀑布", src: ["s26"] }
          ] },
        { category: "頂級奢旅", desc: "指定奢華品牌飯店、全程五星",
          cells: [
            { band: "未見同類", example: "" },
            { band: "未見同類", example: "" },
            { band: "4 萬以上", example: "頂泰風｜全程五星、凱賓斯基", src: ["s21"] },
            { band: "3–4 萬", example: "星際主題五星太空飯店", src: ["s26"] }
          ] }
      ],
      readout: [
        { text: "入門團三家都在 1–2 萬，但東南標示無購物：價格帶相同、條件不同，直接比價格會低估東南。", src: ["s21", "s16"] },
        { text: "雄獅在七類中有六類有產品，覆蓋最完整；頂級奢旅則是東南與鳳凰的主場。" },
        { text: "「無購物＋五星」這類雄獅與可樂查無公開價格，消費者最在意的品質團反而最難比價。" }
      ]
    },

    /* 10 優劣勢 */
    {
      id: "compare", type: "compare", basis: "summary", icon: "scale",
      kicker: "09 · Comparison", title: "旅行社優勢與劣勢",
      items: [
        {
          agency: "雄獅旅遊", position: "綜合型：入門、經典、小團、主題、自由行都有",
          pros: [
            { text: "價格帶最廣，從 1–2 萬入門團到 4 萬以上兩人成行小團", src: ["s16", "s14"] },
            { text: "形式齊全：團體、Mini tour、機加酒，且有高雄出發", src: ["s14", "s19"] },
            { text: "行程頁標示餐標（250～699 泰銖），比價資訊透明", src: ["s16", "s36"] },
            { text: "會員基礎穩：冬季訂單年增三成，超過六成為回流會員", src: ["s18"] },
            { text: "與長榮聯合促銷曼谷機票買一送一，泰國團主打「2 萬元有找」", src: ["s20"] }
          ],
          cons: [
            { text: "部分入門團仍安排「特產巡禮」站，與市場無購物趨勢不同調", src: ["s36"] },
            { text: "品質團（無購物＋五星）查無公開價格，不易比價", src: ["s13", "s19"] },
            { text: "產品名稱以景點堆疊、常超過 40 字，消費者比較成本高", src: ["s13"] }
          ]
        },
        {
          agency: "可樂旅遊", position: "年輕自由型：團體自由行＋當地票券",
          pros: [
            { text: "多款「四人／六人成行」團體自由行，適合朋友小團", src: ["s22", "s25"] },
            { text: "當地一日遊與票券齊全，水上市場一日遊千元有找", src: ["s24"] },
            { text: "「達人帶路」行程標榜無市場購物站", src: ["s23"] }
          ],
          cons: [
            { text: "部分泰國頁面仍寫「不含泰國簽證費」，與現行免簽不符", src: ["s30"] },
            { text: "查詢時列表中未見頂級奢旅產品", src: ["s22"] }
          ]
        },
        {
          agency: "東南旅遊", position: "品質型：無購物＋保證入住指定飯店，產品數最多",
          pros: [
            { text: "泰國專區約 79 款行程，涵蓋曼芭、華欣、泰北、普吉、蘇梅", src: ["s21"] },
            { text: "入門團也標示無購物，並常保證入住洲際、四季、凱賓斯基", src: ["s21"] },
            { text: "主題細分：純素、潑水節、跨年、親子、6 人成行", src: ["s21"] }
          ],
          cons: [
            { text: "主力落在 2–3 萬，頂級可達 4 萬以上", src: ["s21"] },
            { text: "普吉、蘇梅多款標示「請洽」，未公開價格", src: ["s21"] }
          ]
        },
        {
          agency: "鳳凰旅遊", position: "中高價型：全程五星無購物的曼芭團",
          pros: [
            { text: "主力產品標示「全程五星無購物」", src: ["s26", "s27"] },
            { text: "有精緻養生蔬食團等少見主題", src: ["s28"] },
            { text: "部分團採「小費全包制」", src: ["s29"] }
          ],
          cons: [
            { text: "價格多在 2–3 萬以上，查詢時未見萬元入門團與小團", src: ["s26"] },
            { text: "部分行程未含領隊導遊小費（每人每天 300 元）", src: ["s27"] }
          ]
        }
      ]
    },

    /* 11 機會 */
    {
      id: "insight", type: "insight", basis: "inference", icon: "bulb",
      kicker: "10 · Opportunities", title: "市場缺口與機會",
      items: [
        { title: "把「安心」做成賣點", evidence: "2025 年臺灣赴泰減少 11%，泰國業者歸因於安全疑慮；臺灣曾發布黃色旅遊警示。", src: ["s6", "s7", "s12"],
          text: "團體旅遊本來就有導遊、保險與緊急處理，把這些講清楚，可能比再降價更能打動猶豫的旅客。" },
        { title: "政策頻繁變動＝資訊服務機會", evidence: "免簽、TDAC、出境服務費、入境費一年內接連變動，仍有旅行社頁面寫著舊的簽證費。", src: ["s1", "s2", "s30"],
          text: "誰先把行前資訊整理成清楚的一頁並主動提醒，誰就先贏得信任。" },
        { title: "南部出發與小團是差異化", evidence: "同類比較中，雄獅同時有高雄出發與兩人成行產品。", src: ["s14", "s19"],
          text: "對中南部旅客與小家庭，「從家門口出發、兩個人就能走」可能比多一個景點更有感。" },
        { title: "健康療癒與永續主題仍是空白", evidence: "泰國觀光局把方向轉向品質、安全、永續與健康旅遊；現有產品多是景點堆疊。", src: ["s31", "s5"],
          text: "以自然療癒、蔬食、低碳為主軸的高單價主題團仍少，雄獅有機會先卡位。" }
      ]
    },

    /* 12 行動 */
    {
      id: "actions", type: "actions", basis: "inference", icon: "flag",
      kicker: "11 · Action Plan", title: "行動優先順序（以雄獅視角）",
      lede: "優先順序依「預期影響 × 可行性」判斷；可行性看成本、所需部門與外部限制。",
      items: [
        { priority: "P1", action: "泰國入境新制行前資訊頁＋自動提醒", why: "回應政策頻繁變動，成本低、見效快。", src: ["s1", "s4"],
          feasibility: "高", feasibilityNote: "內容整理即可，可放官網與 APP", timeline: "1 個月內",
          kpi: ["行前頁瀏覽 → 泰國產品點擊率", "TDAC／簽證相關客服詢問量下降", "出團前文件問題件數"] },
        { priority: "P1", action: "產品頁「安心資訊」標準區塊", why: "把導遊、保險、緊急處理、購物站有無統一標示，回應信心問題。", src: ["s12"],
          feasibility: "高", feasibilityNote: "以既有產品資訊重排", timeline: "1–2 個月",
          kpi: ["泰國團產品頁轉換率", "報名後取消率", "購物站相關客訴"] },
        { priority: "P2", action: "產品分級命名＋同類比較表", why: "標題太長、品質團無公開價，消費者難以比較。", src: ["s13"],
          feasibility: "中", feasibilityNote: "需產品、網站、行銷跨部門", timeline: "一季",
          kpi: ["列表頁跳出率", "比較功能使用率", "品質團占泰國訂單比例"] },
        { priority: "P2", action: "主推「高雄出發＋兩人成行」", why: "既有產品中的差異化，對中南部與小家庭最有感。", src: ["s14", "s19"],
          feasibility: "中", feasibilityNote: "受南部航班與機位限制", timeline: "一季",
          kpi: ["高雄出發泰國團報名人數", "成團率", "兩人成行產品回購率"] },
        { priority: "P3", action: "健康療癒／永續主題團試辦", why: "對準泰國官方新方向，建立高單價新品類。", src: ["s31"],
          feasibility: "低", feasibilityNote: "需開發新供應商，市場待驗證", timeline: "6 個月以上",
          kpi: ["試辦團成團率", "客單價 vs. 經典團", "旅客滿意度與推薦意願"] }
      ],
      note: "以上為 AI 依本報告資料推論的建議，實際排序需搭配雄獅內部的訂單、毛利與客服資料驗證。"
    },

    /* 13 來源 */
    {
      id: "sources", type: "sources", basis: "fact", icon: "book",
      kicker: "12 · Sources", title: "資料來源",
      note: "查詢日期：2026-11-16。產品價格以查詢當日網頁顯示之起價歸入價格帶，實際售價以各旅行社公告為準；入境規定請以外交部領事事務局與泰國官方最新公告為準。"
    }
  ],

  sources: [
    { id: "s1", title: "泰國免簽新政：取消60天免簽，台灣恢復30天停留期限", publisher: "遠見雜誌（中央社）", url: "https://www.gvm.com.tw/article/130224", date: "2026-05-20" },
    { id: "s2", title: "2026泰國入境大洗牌：免簽剩30天、出境機場稅調漲", publisher: "NOWnews", url: "https://www.nownews.com/news/6847675", date: "2026" },
    { id: "s3", title: "泰國－國人出入境規定", publisher: "外交部領事事務局", url: "https://www.boca.gov.tw/sp-foof-countrycp-01-24-dec45-1.html" },
    { id: "s4", title: "泰國自由行懶人包：免簽入境減為30天、TDAC填寫教學", publisher: "cashfeel", url: "https://www.cashfeel.com.tw/article/泰國-曼谷-自由行-費用", date: "2026-05-22" },
    { id: "s5", title: "泰國縮短免簽並重新評估入境費制度", publisher: "NOWnews", url: "https://www.nownews.com/news/6841854", date: "2026" },
    { id: "s6", title: "Thailand faces sharp drop in tourist numbers", publisher: "Travel Weekly Asia（引泰國觀光體育部）", url: "https://www.travelweekly-asia.com/Destination-Travel/Thailand-faces-sharp-drop-in-tourist-numbers", date: "2026-01" },
    { id: "s7", title: "Vital Taiwan market seeking upgrades", publisher: "Bangkok Post（Magzter 轉載）", url: "https://www.magzter.com/en/stories/newspaper/Bangkok-Post/VITAL-TAIWAN-MARKET-SEEKING-UPGRADES", date: "2025-09-30" },
    { id: "s8", title: "Roadshow Seeks to Boost Taiwanese Arrivals in 2025", publisher: "轉載 Bangkok Post 報導（引泰國觀光體育部）", url: "https://hotelbookingonlinediskon.blogspot.com/2025/08/roadshow-seeks-to-boost-taiwanese.html", date: "2025-09" },
    { id: "s9", title: "China and Taiwan lead Thai tourism recovery", publisher: "TTG Asia", url: "https://www.ttgasia.com/2026/04/01/china-and-taiwan-lead-thai-tourism-recovery/", date: "2026-04-01" },
    { id: "s10", title: "Taiwan outbound travel rises 12.43% to 18.9 million", publisher: "Taiwan News（引交通部觀光署）", url: "https://www.taiwannews.com.tw/en/news/6290401", date: "2026" },
    { id: "s11", title: "2025全球最受歡迎旅遊城市是泰國曼谷", publisher: "NOWnews", url: "https://www.nownews.com/news/6768444", date: "2025" },
    { id: "s12", title: "10年來首度下滑！泰國2025年觀光成績慘淡", publisher: "自由時報", url: "https://ec.ltn.com.tw/article/breakingnews/5294537", date: "2025-12-30" },
    { id: "s13", title: "泰國旅遊推薦｜國外團體", publisher: "雄獅旅遊", url: "https://travel.liontravel.com/category/zh-tw/thailand/index", date: "查詢 2026-11-16" },
    { id: "s14", title: "泰國旅遊．機票．訂房．自由行", publisher: "雄獅旅遊", url: "https://event.liontravel.com/zh-tw/thailand/index", date: "查詢 2026-11-16" },
    { id: "s15", title: "雄獅泰國曼谷兩人成行行程與相關產品", publisher: "旅天下（雄獅出團）", url: "https://travel.gounitravel.com/detail?GroupID=24STN25BR99-T&NormGroupID=09305856-9bd9-4a68-859e-89941ed8e09a", date: "查詢 2026-11-16" },
    { id: "s16", title: "雄獅泰國曼谷一房一廳綠山動物園 5 日（產品比較）", publisher: "旅天下（雄獅出團）", url: "https://travel.gounitravel.com/Detail/Compare?GroupID=26ST115BRA-T,26ST121JXC-T&CompareType=2&Origin=LION&isJoinProdcut=False", date: "查詢 2026-11-16" },
    { id: "s17", title: "ITF台灣國際旅展 雄獅以「Future Travel Hub」登場", publisher: "經濟日報", url: "https://money.udn.com/money/story/124921/9855153", date: "2026-11" },
    { id: "s18", title: "2026年ITF線上旅展開跑！雄獅冬季旅遊訂單增三成", publisher: "udn 旅遊", url: "https://travel.udn.com/travel/story/7934/9810608", date: "2026-10" },
    { id: "s19", title: "泰國旅遊｜曼谷河畔五星酒店、格蘭島海之旅、無購物五日（高雄）", publisher: "雄獅旅遊", url: "https://travel.liontravel.com/tourdetail?TourID=THBKK201KI&NormGroupID=5CA41201-416D-4EBA-B82B-8E78FEC60469&GroupID=&fr=cg429C0401C0201M01", date: "查詢 2026-11-16" },
    { id: "s20", title: "限量搶！雄獅X長榮曼谷、沖繩買一送一", publisher: "Yahoo 新聞", url: "https://tw.news.yahoo.com/%E9%99%90%E9%87%8F%E6%90%B6-%E9%9B%84%E7%8D%85x%E9%95%B7%E6%A6%AE%E6%9B%BC%E8%B0%B7-%E6%B2%96%E7%B9%A9%E8%B2%B7-%E9%80%81-%E6%9D%B1%E4%BA%AC-125100660.html", date: "2026-09" },
    { id: "s21", title: "泰國旅遊跟團推薦", publisher: "東南旅遊", url: "https://www.settour.com.tw/act/gfg/southeast_asia/thailand/gfg.html", date: "查詢 2026-11-16" },
    { id: "s22", title: "泰國旅遊行程推薦", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/C000_Portal/C000_HP01A_Main.aspx?TourArea=C&AirLine=JX", date: "查詢 2026-11-16" },
    { id: "s23", title: "泰國達人帶路", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/webDM/theme/tourguide/thai.html", date: "查詢 2026-11-16" },
    { id: "s24", title: "泰國必玩行程大公開（一日遊）", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/webDM/ticket/global/daytour/thailand.html", date: "查詢 2026-11-16" },
    { id: "s25", title: "來去曼谷、六人成行～青春自由行5＋1日", publisher: "可樂旅遊", url: "https://tour.colatour.com.tw/itinerary?PatternNo=223631", date: "查詢 2026-11-16" },
    { id: "s26", title: "東南亞館－泰國", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/Hall/Index/SS", date: "查詢 2026-11-16" },
    { id: "s27", title: "曼谷芭塔雅 河畔超五星東方文華酒店 5天（全程五星無購物）", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/TOU/TOU0020/STC0500177/STC0623050024B", date: "查詢 2026-11-16" },
    { id: "s28", title: "泰國精緻養生蔬食團 五日", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/TOU/TOU0020/STC0500127", date: "查詢 2026-11-16" },
    { id: "s29", title: "春節【華欣曼谷】五日（無購物）", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/TOU/TOU0020/STC0500159/STC012505TG20A", date: "查詢 2026-11-16" },
    { id: "s30", title: "泰國行程關鍵字搜尋（高雄出發）", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/C10A_TourSell/C10A08_PatternSearch.aspx?DepartureCity=%E9%AB%98%E9%9B%84&KeyWord=%E6%B3%B0%E5%9C%8B&ctype=khhLE01", date: "查詢 2026-11-16" },
    { id: "s31", title: "泰國觀光局：2026年以新泰國理念重塑形象", publisher: "世界日報（中央社）", url: "https://www.worldjournal.com/wj/story/121261/9129506", date: "2025" },
    { id: "s32", title: "Thailand tourist entry fee 2026", publisher: "Wego Travel Blog", url: "https://blog.wego.com/thailand-tourist-entry-fee-2026/", date: "2026-03" },
    { id: "s34", title: "泰國來台旅客突破40萬人次", publisher: "風傳媒", url: "https://www.storm.mg/article/11148660", date: "2026-07-14" },
    { id: "s35", title: "曼谷幫 泰國獨家團體行程（台中、高雄出發）", publisher: "走跳旅遊 曼谷幫", url: "https://goplaytravel.com.tw/minitour-thai/", date: "查詢 2026-11-16" },
    { id: "s36", title: "雄獅泰國暹邏灣夜釣墨魚 5 日（產品比較）", publisher: "旅天下（雄獅出團）", url: "https://travel.gounitravel.com/Detail/Compare?GroupID=26ST118JXB-T,26ST202JXB-T&CompareType=2&Origin=LION&isJoinProdcut=False", date: "查詢 2026-11-16" },
    { id: "s37", title: "泰國觀光復甦未能重現疫情前盛況（2019–2024 國際旅客人次）", publisher: "NOWnews", url: "https://www.nownews.com/news/6710244", date: "2025" }
  ]
};
