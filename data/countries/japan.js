/* 日本市場分析報告 —— 只放資料，版面由 assets/report.js 渲染。規則見 CLAUDE.md。 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["japan"] = {
  id: "japan",
  name: "日本",
  en: "Japan",
  author: "羅聖皓",
  checked: "2026-11-16",
  theme: { accent: "#b8383b", accentSoft: "#fbeeee" },

  slides: [
    /* 1 封面 */
    {
      id: "cover", type: "cover", art: "mountain",
      kicker: "Destination Market Report · 02",
      title: "日本",
      subtitle: "Japan｜臺灣出境旅遊市場分析與旅行社產品比較",
      headline: "臺灣人最常去的國家已像「第二個國旅」：價格集中在 3–4 萬，勝負改由獨家資源與二線城市決定。",
      checked: "2026-11-16"
    },

    /* 2 國家背景 */
    {
      id: "background", type: "facts", basis: "fact", icon: "globe",
      kicker: "01 · Background", title: "國家背景",
      items: [
        { label: "首都", value: "東京（Tokyo）" },
        { label: "語言／貨幣", value: "日語／日圓（JPY）" },
        { label: "時差", value: "比臺灣快 1 小時（UTC+9）" },
        { label: "臺灣出發", value: "台北、台中、高雄皆有出發團；旅行社另有包機直飛富山、庄內、函館、釧路等二線城市", src: ["j28", "j37"] },
        { label: "熱門區域", value: "東京、京都、大阪、北海道、沖繩、九州、北陸、東北、四國", src: ["j23"] },
        { label: "國際旅客規模", value: "2025 年訪日外國旅客約 4,268 萬人次，創歷史新高", src: ["j14"] },
        { label: "匯率背景", value: "日圓疲軟被日本政府列為訪日人數創新高的主因之一", src: ["j9"] },
        { label: "旺季", value: "3 月櫻花季、10 月中秋國慶連假與冬季雪季", src: ["j17", "j10"] }
      ]
    },

    /* 3 地圖 */
    {
      id: "map", type: "map", basis: "summary", icon: "map",
      kicker: "02 · Where", title: "主要旅遊區域在哪裡",
      lede: "團體產品集中在關東、關西、北海道三大區；東北、北陸、九州與四國是二訪以上旅客的延伸選擇。",
      map: {
        bbox: [127.0, 25.8, 146.2, 45.8],
        outline: [
          [[140.0,41.4],[141.2,41.8],[141.7,42.6],[143.3,42.0],[144.5,42.9],[145.6,43.3],[145.1,44.1],[144.0,44.1],[142.0,45.4],[141.6,45.2],[141.7,44.3],[141.4,43.2],[140.3,43.3],[140.4,42.4],[139.8,42.2]],
          [[141.4,41.4],[141.5,40.5],[142.0,39.5],[141.5,38.3],[141.0,37.9],[141.0,36.9],[140.6,36.3],[140.9,35.7],[140.4,35.1],[139.8,34.9],[139.6,35.3],[139.1,35.1],[138.8,34.6],[138.2,34.6],[137.0,34.6],[136.8,34.3],[136.2,33.5],[135.7,33.5],[135.1,34.3],[135.2,34.7],[134.2,34.7],[133.0,34.4],[132.2,33.9],[130.9,34.0],[131.4,34.5],[132.6,35.5],[133.6,35.5],[134.8,35.7],[135.6,35.5],[136.0,36.0],[136.9,37.1],[137.3,36.9],[137.6,37.2],[138.6,37.8],[139.4,38.4],[140.0,39.8],[139.9,40.6],[140.3,41.2],[140.9,41.5]],
          [[132.4,33.4],[132.9,34.1],[133.7,34.3],[134.6,34.2],[134.7,33.8],[134.2,33.3],[133.3,33.4],[132.9,32.8],[132.5,32.9]],
          [[129.8,33.4],[130.4,33.6],[130.9,33.9],[131.6,33.6],[131.9,33.0],[131.5,31.5],[131.1,31.3],[130.7,31.0],[130.2,31.3],[130.3,32.1],[129.8,32.7],[129.6,33.1]]
        ],
        islands: [[127.8, 26.4, 5]],
        origin: { from: [130.4, 33.59], label: "臺灣 ✈ 北中南皆有直飛", toward: "sw" },
        points: [
          { name: "東京", en: "Tokyo", lat: 35.68, lon: 139.69, kind: "hub", note: "關東主力：迪士尼、淺草、橫濱，常搭配富士山", src: ["j24"] },
          { name: "富士山", en: "Mt. Fuji", lat: 35.36, lon: 138.73, label: "left", note: "河口湖、山中湖、箱根溫泉，關東團幾乎必排", src: ["j24"] },
          { name: "大阪・京都", en: "Osaka / Kyoto", lat: 34.69, lon: 135.5, kind: "hub", label: "left", note: "關西主力：環球影城、清水寺、伏見稻荷、奈良", src: ["j23", "j29"] },
          { name: "北陸・白川鄉", en: "Hokuriku", lat: 36.26, lon: 136.9, label: "left", note: "合掌村點燈、兼六園，冬季主題團熱點", src: ["j20"] },
          { name: "東北", en: "Tohoku", lat: 38.27, lon: 140.87, note: "藏王樹冰、銀山溫泉、松島，二訪族的雪景路線", src: ["j31"] },
          { name: "札幌", en: "Sapporo", lat: 43.06, lon: 141.35, kind: "hub", label: "left", note: "北海道門戶：小樽、函館、洞爺湖、螃蟹溫泉", src: ["j23"] },
          { name: "道東・釧路", en: "Eastern Hokkaido", lat: 43.0, lon: 144.38, note: "流冰船、丹頂鶴，冬季包機路線", src: ["j39"] },
          { name: "福岡・九州", en: "Kyushu", lat: 33.59, lon: 130.4, kind: "hub", note: "湯布院、高千穗、柳川，溫泉與鐵道", src: ["j35"] },
          { name: "沖繩", en: "Okinawa", lat: 26.21, lon: 127.68, kind: "beach", note: "海島度假，自由行比例高", src: ["j20"] }
        ]
      }
    },

    /* 4 入境 */
    {
      id: "entry", type: "bullets", basis: "fact", icon: "passport",
      kicker: "03 · Entry & Cost", title: "入境規定與旅行成本",
      items: [
        { text: "設有臺灣戶籍者（護照有身分證字號）免簽證，每次可停留 90 天。", src: ["j1"] },
        { text: "入境前可在「Visit Japan Web」預先登記，非強制，但能讓免稅購物等手續更便利。", src: ["j2"] },
        { tag: "new", text: "2026 年 7 月 1 日起，出國稅（國際觀光旅客稅）由 1,000 日圓調為 3,000 日圓，隨機票或團費徵收。", src: ["j3"] },
        { tag: "new", text: "免稅制度改為「先付後退」，多個城市也調整住宿稅；行動電源僅限隨身攜帶。", src: ["j5", "j4"] },
        { tag: "warn", text: "電子旅行授權 JESTA 預計 2028 年度上路，臺灣在適用範圍內；未取得者將無法登機。", src: ["j6", "j7"] },
        { tag: "warn", text: "JESTA 研議收取約 2,000～3,000 日圓手續費，金額尚未定案。", src: ["j8"] }
      ]
    },

    /* 5 市場 */
    {
      id: "market", type: "stats", basis: "mixed", icon: "chart",
      kicker: "04 · Market Size", title: "臺灣赴日市場概況",
      items: [
        { value: "676 萬", label: "2025 年臺灣訪日人次", note: "年增 11.9%，創歷史新高", src: ["j10"] },
        { value: "38.2%", label: "2026 年 1–2 月出國旅客中前往日本的占比", note: "日本也是 2025 年最熱門的出國目的地", src: ["j5", "j16"] },
        { value: "3,884 億", label: "2026 年第一季臺灣旅客在日消費（日圓）", note: "各國中排名第一，以購物為大宗", src: ["j17"] },
        { value: "+19.7%", label: "2026 年 4 月臺灣訪日年增", note: "同月中國旅客年減 56.8%", src: ["j18"] }
      ],
      takeaway: "臺灣赴日已高度成熟、旅客多為回頭客，市場不缺需求，缺的是讓「第三、第四次去」的人還想跟團的理由。"
    },

    /* 6 趨勢 */
    {
      id: "trend", type: "chart", basis: "fact", icon: "trend",
      kicker: "05 · Trend", title: "長期趨勢：訪日整體 vs. 臺灣市場",
      lede: "兩條線都在 2024 年超越疫情前；但 2026 年 1–9 月訪日總數年減 2.9%，主要是中國旅客大減。",
      items: [
        {
          title: "訪日外國旅客人次", unit: "萬人次",
          note: "2026 年 1–9 月累計約 3,073 萬人次，年減 2.9%（未滿一年，未列入圖中）。",
          bars: [
            { label: "2019", value: 3188, display: "3,188", status: "actual", src: ["j15", "j19"] },
            { label: "2023", value: 2507, display: "2,507", status: "actual", src: ["j15"] },
            { label: "2024", value: 3687, display: "3,687", status: "actual", src: ["j14"] },
            { label: "2025", value: 4268, display: "4,268", status: "actual", src: ["j14"] }
          ]
        },
        {
          title: "臺灣訪日旅客人次", unit: "萬人次",
          note: "2020–2022 年受疫情影響，未列入。",
          bars: [
            { label: "2019", value: 489, display: "489", status: "actual", src: ["j13"] },
            { label: "2023", value: 420, display: "420", status: "actual", src: ["j12"] },
            { label: "2024", value: 604, display: "604", status: "actual", src: ["j11"] },
            { label: "2025", value: 676, display: "676", status: "actual", src: ["j10"] }
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
        { name: "回頭客深度旅遊", who: "去過東京、大阪多次的旅客", needs: "沒去過的二線城市、鐵道、點燈等「只有這次才有」的體驗", fit: "北陸、東北、道東、四國主題團（多在 4 萬以上）" },
        { name: "親子主題樂園", who: "帶國小以下孩子的家庭", needs: "迪士尼、環球影城、快速通關、樂園周邊飯店", fit: "關東迪士尼團、關西環球影城團（3–4 萬為主）" },
        { name: "季節追逐族", who: "賞櫻、賞楓、追雪的旅客", needs: "準確的花期與雪季、保證入場的季節活動", fit: "點燈、樹冰、流冰船等季節主題團" },
        { name: "長輩溫泉放鬆", who: "帶爸媽出遊的家庭、熟齡旅客", needs: "全程無自理餐、保證溫泉飯店、不進免稅店", fit: "無自理餐＋保證溫泉的品質團" },
        { name: "小資自由行", who: "學生、年輕上班族", needs: "低預算、行程自主，只要機票加住宿", fit: "團體自由行、機加酒（1 萬以下～1–2 萬）" }
      ]
    },

    /* 8 雄獅 */
    {
      id: "lion", type: "table", basis: "fact", icon: "bag",
      kicker: "07 · Lion Travel", title: "雄獅旅遊日本產品整理",
      columns: ["產品（官網名稱節錄）", "類型", "天數／出發", "價格帶", "景點", "美食", "體驗"],
      rows: [
        { cells: ["限定神戶大阪｜全程無自理餐｜雪白姬路城、清水寺、平等院、伏見稻荷大社、日本環球影城", "經典團", "5 日", "3–4 萬", "姬路城、清水寺、平等院、伏見稻荷", "魚之棚商店街；全程無自理餐", "日本環球影城"], src: ["j23"] },
        { cells: ["限定北海道｜全程無自理餐、保住國際品牌、函館纜車、洞爺湖、昭和新山、小樽漫遊", "經典團", "5 日", "3–4 萬", "函館、洞爺湖、昭和新山、小樽", "溫泉美食；全程無自理餐", "函館纜車"], src: ["j23"] },
        { cells: ["東京｜東京迪士尼、奇幻動漫樂園、山中湖白鳥號、富士山、淺草寺、上野阿美橫町", "親子經典團", "5 日", "3–4 萬", "迪士尼、富士山、淺草寺", "精選溫泉餐", "山中湖白鳥號"], src: ["j24"] },
        { cells: ["北海道熱氣球瑞萃（獨家）｜保證入住新開幕美瑛緩慢瑞萃十勝岳", "特色住宿團", "5 日", "3–4 萬", "美瑛、十勝", "螃蟹吃到飽", "熱氣球、十勝溫泉"], src: ["j20"] },
        { cells: ["北陸合掌村點燈｜一年僅 4 天的點燈之夜、庄川峽遊船", "季節主題團", "5 日", "4 萬以上", "白川鄉合掌村、庄川峽", "—", "點燈、遊船、戲雪、採果"], src: ["j20"] },
        { cells: ["關西志摩味覺列車｜搭乘觀光列車 Les Saveurs 志摩", "鐵道主題團", "5 日", "4 萬以上", "關西、志摩", "列車上法式料理", "觀光列車"], src: ["j21"] },
        { cells: ["客製｜北陸白川鄉合掌村點燈，保證入點燈會場、兼六園、郡上八幡迷你小團（專屬包車，不含機票）", "迷你小團", "5 日／北中高", "3–4 萬", "白川鄉、兼六園、郡上八幡", "—", "保證入點燈會場"], src: ["j26"] },
        { cells: ["沖繩自由行（ITF 旅展）", "機加酒自由行", "—", "1 萬以下", "沖繩自選", "—", "—"], src: ["j20"] }
      ],
      note: "價格以「每人起價」所在的價格帶表示；出發日不同，只看相對位置。迷你小團價格不含機票，比較時需另計。頂級線另有北海道流冰巡航五日（4 萬以上，十萬元級）。",
      src: ["j22"]
    },

    /* 9 同類比較 */
    {
      id: "matrix", type: "matrix", basis: "summary", icon: "grid",
      kicker: "08 · Like-for-like", title: "同類型產品比較",
      basisNote: "比較口徑：以 5 日、台北出發、每人起價為主，價格以價格帶表示。「未見同類」指查詢時列表中沒有找到這類產品，不代表該公司完全沒有。日本沒有萬元級團體，「入門團」指各家最低價位的五日團。",
      agencies: ["雄獅旅遊", "可樂旅遊", "東南旅遊", "鳳凰旅遊"],
      rows: [
        { category: "萬元入門團", desc: "各家最低價位的五日團體",
          cells: [
            { band: "2–3 萬", example: "爆省北海道｜定山溪彩燈節、企鵝遊行", src: ["j27"] },
            { band: "2–3 萬", example: "【破盤下殺】關西三都、有馬溫泉", src: ["j28"] },
            { band: "2–3 萬", example: "東京一口價｜8 人成行、自由漫遊", src: ["j33"] },
            { band: "未見同類", example: "列表多在 4 萬以上", src: ["j41"] }
          ] },
        { category: "經典團", desc: "關西三都、東京迪士尼、北海道道南",
          cells: [
            { band: "3–4 萬", example: "限定神戶大阪｜無自理餐、環球影城", src: ["j23"] },
            { band: "3–4 萬", example: "萬歲關西瑪利歐｜環球影城、四都京阪神奈", src: ["j29"] },
            { band: "3–4 萬", example: "限時九州｜湯布院、高千穗、柳川", src: ["j35"] },
            { band: "未公開", example: "超值漫遊東北｜奧入瀨、銀山溫泉", src: ["j43"] }
          ] },
        { category: "無購物＋五星品質團", desc: "日本版：無自理餐、保證溫泉或指定飯店、不進免稅店",
          cells: [
            { band: "3–4 萬", example: "熱氣球瑞萃｜獨家保證入住新飯店", src: ["j20"] },
            { band: "3–4 萬", example: "北海道和牛溫泉祭｜洞爺湖溫泉旅館", src: ["j28"] },
            { band: "3–4 萬", example: "典藏五星東京｜雙溫泉饗宴", src: ["j34"] },
            { band: "4 萬以上", example: "鳥取｜不進免稅店、全程無自理餐、無自費", src: ["j41"] }
          ] },
        { category: "小團／幾人成行", desc: "包車或 10 人以下成行",
          cells: [
            { band: "3–4 萬", example: "迷你小團專屬包車（不含機票）", src: ["j26"] },
            { band: "未見同類", example: "" },
            { band: "4 萬以上", example: "8 人成行｜保住溫泉、關西四都", src: ["j34"] },
            { band: "未見同類", example: "" }
          ] },
        { category: "團體自由行／機加酒", desc: "含機票住宿，或跟團半自助",
          cells: [
            { band: "1 萬以下", example: "沖繩自由行（旅展）", src: ["j20"] },
            { band: "2–3 萬", example: "東京跟團半自助｜忍野八海、御殿場", src: ["j30"] },
            { band: "3–4 萬", example: "北海道自遊團隊｜三晚連泊", src: ["j36"] },
            { band: "未見同類", example: "" }
          ] },
        { category: "季節／外府主題團", desc: "點燈、樹冰、流冰、賞楓、鐵道",
          cells: [
            { band: "4 萬以上", example: "北陸合掌村點燈；志摩味覺列車", src: ["j20", "j21"] },
            { band: "4 萬以上", example: "東北雪舞紛飛｜藏王樹冰纜車", src: ["j31"] },
            { band: "4 萬以上", example: "釧路流冰天使｜包機道東", src: ["j39"] },
            { band: "4 萬以上", example: "立山黑部秋楓絕景 6 日", src: ["j41"] }
          ] },
        { category: "頂級奢旅", desc: "百選溫泉、星野等指定高端住宿",
          cells: [
            { band: "4 萬以上", example: "北海道流冰巡航；TOMAMU 星野", src: ["j22", "j25"] },
            { band: "未見同類", example: "" },
            { band: "4 萬以上", example: "典藏北海道｜百選鶴雅、流冰船", src: ["j38"] },
            { band: "未公開", example: "《金鳳凰》系列｜晚餐安排在入住酒店", src: ["j42"] }
          ] }
      ],
      readout: [
        { text: "日本五日團的經典款幾乎都落在 3–4 萬，四家差異不在價格，而在「無自理餐、保證飯店、不進免稅店」這些條件。", src: ["j23", "j29", "j41"] },
        { text: "季節主題團四家都在 4 萬以上，是日本市場的主戰場；差別在誰掌握獨家資源（雄獅鐵道包列、東南二線城市包機）。", src: ["j21", "j37"] },
        { text: "雄獅是唯一在七類都有產品的一家，並同時有最便宜的自由行與十萬元級頂級團。" }
      ]
    },

    /* 10 優劣勢 */
    {
      id: "compare", type: "compare", basis: "summary", icon: "scale",
      kicker: "09 · Comparison", title: "旅行社優勢與劣勢",
      items: [
        {
          agency: "雄獅旅遊", position: "綜合型＋獨家資源：從萬元自由行到十萬元級頂級團",
          pros: [
            { text: "七類產品全都有，價格帶從 1 萬以下到十萬元以上", src: ["j20", "j22"] },
            { text: "獨家資源：熱氣球瑞萃獨家飯店、觀光列車包列", src: ["j20", "j21"] },
            { text: "迷你小團專屬包車，台北、台中、高雄都能出發", src: ["j26"] },
            { text: "日本線訂單年增逾兩成，並公開「已成團」一覽", src: ["j22", "j23"] }
          ],
          cons: [
            { text: "迷你小團價格不含機票，與一般團體直接比價容易誤判", src: ["j26"] },
            { text: "冬季北海道主題團多在 5 萬以上，入門門檻較高", src: ["j25"] }
          ]
        },
        {
          agency: "可樂旅遊", position: "樂園與年輕型：環球影城產品最密集",
          pros: [
            { text: "日本團體行程達 617 筆，台北、台中、高雄皆可出發", src: ["j28"] },
            { text: "環球影城相關行程最多，部分含快速通關", src: ["j29"] },
            { text: "「跟團半自助」產品兼顧接送與自由時間", src: ["j30"] }
          ],
          cons: [
            { text: "春節團價差大，東北春節團可達 9 萬以上", src: ["j32"] },
            { text: "查詢時未見迷你小團與頂級奢旅產品", src: ["j28"] }
          ]
        },
        {
          agency: "東南旅遊", position: "包機型：二線城市直飛與小團成行",
          pros: [
            { text: "包機直飛富山、庄內、函館等二線城市", src: ["j37"] },
            { text: "「8 人成行」小團與一口價產品", src: ["j33", "j34"] },
            { text: "早鳥與結伴優惠：6 人結伴、三個月前付訂，最高省 2.1 萬", src: ["j40"] }
          ],
          cons: [
            { text: "冬季北海道、東北主題團多在 4 萬以上", src: ["j39", "j40"] },
            { text: "部分精選行程標示「請洽客服」，未公開價格", src: ["j39"] }
          ]
        },
        {
          agency: "鳳凰旅遊", position: "高品質型：不進免稅店、全程無自理餐",
          pros: [
            { text: "主打不進免稅店、全程無自理餐、無自費", src: ["j41"] },
            { text: "直飛米子等少見航點，路線冷門", src: ["j41"] },
            { text: "《金鳳凰》系列晚餐安排在入住酒店，減少移動", src: ["j42"] }
          ],
          cons: [
            { text: "價格多在 4 萬以上，查詢時未見入門團與自由行", src: ["j41"] },
            { text: "多個產品頁未直接顯示團費，比價不易", src: ["j43", "j42"] }
          ]
        }
      ]
    },

    /* 11 機會 */
    {
      id: "insight", type: "insight", basis: "inference", icon: "bulb",
      kicker: "10 · Opportunities", title: "市場缺口與機會",
      items: [
        { title: "日本已是「第二個國旅」", evidence: "2025 年臺灣訪日 676 萬人次，2026 年初出國旅客近四成去日本，臺灣旅客在日消費居各國之首。", src: ["j10", "j5", "j17"],
          text: "成長不會來自說服沒去過的人，而是給去過很多次的人「下一個非去不可的地方」。" },
        { title: "成本上升，但需求還在", evidence: "出國稅漲為 3 倍、免稅改先付後退、JESTA 將收費；同期臺灣訪日仍逐月成長。", src: ["j3", "j5", "j8", "j18"],
          text: "旅客不會因此不去，但會更在意「總共要花多少」，含稅、含手續的透明報價會成為差異。" },
        { title: "二線城市與鐵道是獨家戰場", evidence: "東南用包機打開富山、庄內、釧路；雄獅有觀光列車包列與獨家飯店。", src: ["j37", "j21", "j20"],
          text: "經典路線比價格比不出差異，掌握別人買不到的座位與房間，才是回頭客願意多付錢的理由。" },
        { title: "中國客減少留下的空檔", evidence: "2026 年 4 月中國訪日年減 56.8%，臺灣同月年增 19.7%。", src: ["j18"],
          text: "日本飯店與觀光業對臺灣市場的依賴度提高，是談獨家房源與合作活動的好時機。" }
      ]
    },

    /* 12 行動 */
    {
      id: "actions", type: "actions", basis: "inference", icon: "flag",
      kicker: "11 · Action Plan", title: "行動優先順序（以雄獅視角）",
      lede: "優先順序依「預期影響 × 可行性」判斷；可行性看成本、所需部門與外部限制。",
      items: [
        { priority: "P1", action: "「赴日新制」行前懶人包＋含稅總價標示", why: "出國稅、免稅退稅、JESTA 接連變動，旅客最需要知道總花費。", src: ["j3", "j5", "j6"],
          feasibility: "高", feasibilityNote: "整理既有公告即可，可放官網與 APP", timeline: "1 個月內",
          kpi: ["行前頁瀏覽 → 日本產品點擊率", "稅費相關客服詢問量", "報價後成交率"] },
        { priority: "P1", action: "日本團「品質條件」統一標示", why: "經典團價格相近，消費者靠無自理餐、保證飯店、購物站有無做選擇。", src: ["j23", "j41"],
          feasibility: "高", feasibilityNote: "以既有產品資訊重新整理成固定欄位", timeline: "1–2 個月",
          kpi: ["日本產品頁轉換率", "品質團訂單占比", "行程內容相關客訴"] },
        { priority: "P2", action: "回頭客專屬「二線城市＋鐵道」產品線", why: "既有會員回流率高，最適合推冷門路線與獨家列車。", src: ["j22", "j21"],
          feasibility: "中", feasibilityNote: "需談包列與航班座位，受供給限制", timeline: "一季",
          kpi: ["回頭客購買占比", "二線城市產品營收", "客單價 vs. 經典團"] },
        { priority: "P2", action: "迷你小團提供「含機票」參考總價", why: "目前小團不含機票，與一般團直接比較時看起來較便宜或較貴都可能誤導。", src: ["j26"],
          feasibility: "中", feasibilityNote: "需整合機票即時報價", timeline: "一季",
          kpi: ["小團詢價 → 成交率", "小團訂單數", "價格相關取消率"] },
        { priority: "P3", action: "趁中國客減少，爭取日本飯店獨家房源", why: "供給端空檔期，可能談到較好的房型與價格。", src: ["j18"],
          feasibility: "低", feasibilityNote: "需當地採購談判，中國客回流後效果可能消失", timeline: "6 個月以上",
          kpi: ["獨家房源數", "相關產品毛利率", "滿意度與回購意願"] }
      ],
      note: "以上為 AI 依本報告資料推論的建議，實際排序需搭配雄獅內部的訂單、毛利與客服資料驗證。"
    },

    /* 13 來源 */
    {
      id: "sources", type: "sources", basis: "fact", icon: "book",
      kicker: "12 · Sources", title: "資料來源",
      note: "查詢日期：2026-11-16。產品價格以查詢當日網頁顯示之起價歸入價格帶，實際售價以各旅行社公告為準；入境規定請以外交部領事事務局與日本官方最新公告為準。"
    }
  ],

  sources: [
    { id: "j1", title: "日本－簽證及入境須知", publisher: "外交部領事事務局", url: "https://www.boca.gov.tw/sp-foof-countrycp-01-33-90862-02-1.html" },
    { id: "j2", title: "入境日本與簽證資訊", publisher: "日本政府觀光局 JNTO", url: "https://www.japan.travel/tw/plan/visa-info/" },
    { id: "j3", title: "國際觀光旅客稅稅率上調至 3,000 日圓", publisher: "日本觀光廳", url: "https://www.mlit.go.jp/kankocho/content/001997101.pdf", date: "2026" },
    { id: "j4", title: "2026 旅日出國稅、行動電源、退稅新制整理", publisher: "NOWnews", url: "https://www.nownews.com/news/6839362", date: "2026" },
    { id: "j5", title: "日本7月調升「出國稅」 不分國籍離境皆要付", publisher: "公視新聞", url: "https://news.pts.org.tw/article/809432", date: "2026" },
    { id: "j6", title: "日本2028年度起實施線上入境事前審查 JESTA", publisher: "台灣英文新聞（引日經）", url: "https://www.taiwannews.com.tw/zh/news/6118414", date: "2025-05" },
    { id: "j7", title: "日本內閣通過 JESTA 修正案", publisher: "unwire.hk（引共同社）", url: "https://unwire.hk/2026/03/10/japan-jesta-visa-free-travel-authorization-2029/life-tech/", date: "2026-03-10" },
    { id: "j8", title: "日本入境許可將收手續費", publisher: "鏡週刊（引共同社）", url: "https://www.mirrormedia.mg/story/20251223edi069", date: "2025-12-23" },
    { id: "j9", title: "2025年訪日外國旅客首度突破4000萬人次", publisher: "NOWnews", url: "https://www.nownews.com/news/6777862", date: "2026-01-20" },
    { id: "j10", title: "2025年の訪日台湾人数は676.3万人", publisher: "訪日ラボ（引 JNTO）", url: "https://honichi.com/news/2026/02/18/inbound-taiwan-2025/", date: "2026-02" },
    { id: "j11", title: "2024年の訪日台湾人数は604.4万人で過去最高", publisher: "訪日ラボ（引 JNTO）", url: "https://honichi.com/news/2025/02/26/inbound-taiwan-2024", date: "2025-02" },
    { id: "j12", title: "2023年の訪日台湾人は420万人", publisher: "訪日ラボ（引 JNTO）", url: "https://honichi.com/news/2024/02/08/taiwandata2023", date: "2024-02" },
    { id: "j13", title: "インバウンドにおける台湾市場の特徴（2019 年約 489 万人）", publisher: "訪日ラボ", url: "https://honichi.com/feature-of-taiwanese-visiting-to-japan" },
    { id: "j14", title: "Japan Sets New Record with Over 42 Million Foreign Tourists in 2025", publisher: "Nation Thailand（引 JNTO）", url: "https://www.nationthailand.com/news/tourism/40062233", date: "2026-02-07" },
    { id: "j15", title: "訪日外国人旅行者数の推移", publisher: "日本觀光廳（引 JNTO）", url: "https://www.mlit.go.jp/kankocho/content/001738541.pdf", date: "2024" },
    { id: "j16", title: "114年出國旅遊1894萬人次創新高", publisher: "中央社（引觀光署）", url: "https://www.cna.com.tw/news/ahel/202601260266.aspx", date: "2026-01-26" },
    { id: "j17", title: "2026首季台灣旅客在日消費全球第一", publisher: "關鍵評論網（引日本觀光廳）", url: "https://www.thenewslens.com/article/266771", date: "2026-04" },
    { id: "j18", title: "日本旅遊變貴了！出國稅要漲3倍", publisher: "今周刊（引 JNTO）", url: "https://www.businesstoday.com.tw/article/category/183030/post/202605210045/", date: "2026-05-22" },
    { id: "j19", title: "International arrivals in Japan in September 2026", publisher: "Travel Voice（引 JNTO）", url: "https://www.travelvoice.jp/english/international-arrivals-in-japan-in-september-2026-were-down-5-0-to-3-1-million-yoy-reduction-for-two-consecutive-months/print", date: "2026-10" },
    { id: "j20", title: "2026年ITF線上旅展開跑！雄獅冬季旅遊訂單增三成", publisher: "udn 旅遊", url: "https://travel.udn.com/travel/story/7934/9810608", date: "2026-10" },
    { id: "j21", title: "ITF線上旅展開跑 雄獅：冬季旅遊增三成（志摩味覺列車）", publisher: "聯合新聞網", url: "https://udn.com/news/story/7241/9809994", date: "2026-10" },
    { id: "j22", title: "ITF台灣國際旅展 雄獅以「Future Travel Hub」登場", publisher: "經濟日報", url: "https://money.udn.com/money/story/124921/9855153", date: "2026-11" },
    { id: "j23", title: "2026年日本旅遊已成團、特選清艙優惠", publisher: "雄獅旅遊", url: "https://event.liontravel.com/zh-tw/japan/guarantee", date: "查詢 2026-11-16" },
    { id: "j24", title: "東京旅遊、迪士尼、富士山跟團推薦", publisher: "雄獅旅遊", url: "https://travel.liontravel.com/category/zh-tw/japan/kanto", date: "查詢 2026-11-16" },
    { id: "j25", title: "北海道旅遊跟團推薦", publisher: "雄獅旅遊", url: "https://travel.liontravel.com/category/zh-tw/japan/hokkaido", date: "查詢 2026-11-16" },
    { id: "j26", title: "日本旅遊迷你小團、客製小包團", publisher: "雄獅旅遊", url: "https://www.liontravel.com/category/zh-tw/mini-tour/japan", date: "查詢 2026-11-16" },
    { id: "j27", title: "北海道旅行社推薦（雄獅、東南行程整理）", publisher: "常旅客 TFT", url: "https://www.the-frequent-traveler.com.tw/2025%E6%97%A5%E6%9C%AC%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%85%E8%A1%8C%E7%A4%BE%E6%8E%A8%E8%96%A6%EF%BC%9A%E6%97%85%E9%81%8A%E5%85%A8%E6%94%BB%E7%95%A5%E3%80%81%E5%AD%A3%E7%AF%80%E5%A4%A9%E6%B0%A3/", date: "2025" },
    { id: "j28", title: "日本旅遊跟團推薦行程", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/C000_Portal/C000_HP01A_Main.aspx?TourArea=A&AirLine=JX", date: "查詢 2026-11-16" },
    { id: "j29", title: "2026日本環球影城跟團遊", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/webDM/tour/japan/usj/ticket.html", date: "查詢 2026-11-16" },
    { id: "j30", title: "日本關東、東京旅遊", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/C000_Portal/C000_HP01A_Main.aspx?TourArea=A-02&ProductType=Package", date: "查詢 2026-11-16" },
    { id: "j31", title: "日本東北旅遊", publisher: "可樂旅遊", url: "https://www.colatour.com.tw/C000_Portal/C000_HP01A_Main.aspx?TourArea=A-05", date: "查詢 2026-11-16" },
    { id: "j32", title: "日本東北旅遊（春節賀歲）", publisher: "可樂旅遊", url: "https://tour.colatour.com.tw/search?TourArea=A-05", date: "查詢 2026-11-16" },
    { id: "j33", title: "日本關東團體旅遊行程", publisher: "東南旅遊", url: "https://tour.settour.com.tw/search?destinationCode=JT_3", date: "查詢 2026-11-16" },
    { id: "j34", title: "東北亞－日本團體旅遊行程", publisher: "東南旅遊", url: "https://tour.settour.com.tw/search?destinationCode=1A1_2", date: "查詢 2026-11-16" },
    { id: "j35", title: "日本九州團體旅遊行程", publisher: "東南旅遊", url: "https://tour.settour.com.tw/search?destinationCode=JF_3", date: "查詢 2026-11-16" },
    { id: "j36", title: "日本北海道團體旅遊行程", publisher: "東南旅遊", url: "https://tour.settour.com.tw/search?destinationCode=JH_3", date: "查詢 2026-11-16" },
    { id: "j37", title: "2026專屬包機開飛", publisher: "東南旅遊", url: "https://www.settour.com.tw/act/gfg/japan/jpsale/voteprice.html?srcType=overseas", date: "查詢 2026-11-16" },
    { id: "j38", title: "日本北海道旅遊精選行程", publisher: "東南旅遊", url: "https://www.settour.com.tw/act/gfg/japan/hokkaido/", date: "查詢 2026-11-16" },
    { id: "j39", title: "日本旅遊：日本跟團行程推薦", publisher: "東南旅遊", url: "https://tour.settour.com.tw/japan.html", date: "查詢 2026-11-16" },
    { id: "j40", title: "日本東北旅遊精選行程", publisher: "東南旅遊", url: "https://www.settour.com.tw/act/gfg/japan/tohoku/", date: "查詢 2026-11-16" },
    { id: "j41", title: "秋旅．與楓相遇", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/Sale/index/42/204", date: "查詢 2026-11-16" },
    { id: "j42", title: "《金鳳凰》日本東瀛東京櫻饌五日遊", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/TOU/TOU0020/NJE0500637", date: "查詢 2026-11-16" },
    { id: "j43", title: "超值漫遊東北５日", publisher: "鳳凰旅遊", url: "https://www.travel.com.tw/TOU/TOU0020/NJE0500757/NJN081305IT25B", date: "查詢 2026-11-16" }
  ]
};
