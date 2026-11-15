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
    {
      id: "cover", type: "cover",
      kicker: "Destination Market Report · 01",
      title: "泰國",
      subtitle: "Thailand｜臺灣出境旅遊市場分析與旅行社產品比較",
      headline: "入境門檻變高、安全感待修復，但產品競爭已轉向「無購物＋五星＋主題」，雄獅勝在價格帶最廣。",
      checked: "2026-11-16"
    },

    {
      id: "background", type: "facts",
      kicker: "01 · Background", title: "國家背景",
      items: [
        { label: "首都", value: "曼谷（Bangkok）" },
        { label: "語言／貨幣", value: "泰語／泰銖（THB）" },
        { label: "時差", value: "比臺灣慢 1 小時（UTC+7）" },
        { label: "飛行時間", value: "臺灣直飛曼谷不到 4 小時", src: ["s34"] },
        { label: "主要國際機場", value: "曼谷素萬那普（BKK）、廊曼（DMK），以及普吉、清邁、合艾、清萊", src: ["s2"] },
        { label: "臺灣出發", value: "桃園為主，高雄、台中亦有直飛團；長榮、華航、星宇、泰航、虎航、泰獅航皆有航班", src: ["s21", "s35"] },
        { label: "熱門區域", value: "曼谷＋芭達雅（Pattaya）為團體主力，其次華欣（Hua Hin）、大城（Ayutthaya）、北碧（Kanchanaburi）、清邁、普吉", src: ["s21"] },
        { label: "城市地位", value: "曼谷被 Euromonitor 評為 2025 年全球最多國際旅客造訪城市（3,030 萬人次）", src: ["s11"] },
        { label: "旺季", value: "冬季與春節為臺灣旅客旺季；2026 年春節住宿搜尋量曼谷居首", src: ["s11"] }
      ]
    },

    {
      id: "entry", type: "bullets",
      kicker: "02 · Entry & Cost", title: "入境規定與旅行成本",
      items: [
        { tag: "new", text: "2026 年 5 月泰國取消對 93 國的 60 天免簽，臺灣旅客恢復為 30 天免簽。", src: ["s1"] },
        { text: "要多停留可在當地移民局延簽，費用 1,900 泰銖，可再延 30 天。", src: ["s2"] },
        { text: "自 2025 年 5 月 1 日起，入境前 72 小時內須線上免費填寫數位入境卡 TDAC，取代紙本 TM6。", src: ["s4", "s3"] },
        { tag: "new", text: "2026 年 6 月 20 日起，國際出境旅客服務費由 730 泰銖調為 1,120 泰銖，通常已含在機票中。", src: ["s2"] },
        { tag: "warn", text: "外籍旅客入境費（原訂 300 泰銖）研議中，金額可能更高，考慮併入機票或透過 TDAC 收取。", src: ["s5", "s32"] },
        { tag: "warn", text: "泰銖 2025 年升值約 8%，加上安全疑慮，被泰國業者視為旅客減少的兩大主因。", src: ["s12"] }
      ]
    },

    {
      id: "market", type: "stats",
      kicker: "03 · Market Size", title: "臺灣赴泰市場概況",
      items: [
        { value: "約 108 萬", label: "2024 年臺灣赴泰人次", note: "2019 年疫情前約 78 萬", src: ["s8"] },
        { value: "−11%", label: "2025 年臺灣市場年減幅", note: "泰國整體國際旅客 2025 年降至約 3,290 萬（−7.2%）；同年臺灣整體出國約 1,890 萬人次", src: ["s6", "s10"] },
        { value: "+12%", label: "2026 年 2 月臺灣市場年增", note: "回升趨勢延續至 3 月", src: ["s9"] },
        { value: "120 萬", label: "泰國觀光局 2026 年臺灣市場目標", note: "2025 年 7 月因泰柬邊境衝突，臺灣曾發布黃色旅遊警示", src: ["s7"] }
      ],
      takeaway: "臺灣 2025 年整體出國約 1,890 萬人次、仍在成長，泰國卻逆勢下滑——問題不在需求，而在「信心」與「價格感」，這正是旅行社產品能補位的地方。"
    },

    {
      id: "segments", type: "cards",
      kicker: "04 · Segments", title: "目標客群",
      items: [
        { name: "小資首訪族", who: "學生、社會新鮮人、第一次去泰國的人", needs: "總預算壓在 1.5 萬左右，想要夜市、按摩、網美咖啡廳，不想自己處理接送", fit: "萬元團、團體自由行（雄獅 12,999、可樂 13,999、東南 9,999 起）" },
        { name: "親子家庭", who: "帶國小以下孩子的家庭", needs: "動物互動、樂園、飯店好住，節奏不能太趕", fit: "綠山／賽福瑞／大城獅子動物園行程、親子飯店團" },
        { name: "熟齡與長輩同行", who: "50 歲以上、帶爸媽出遊的家庭", needs: "無購物、早去晚回、五星飯店、按摩與舒適餐食", fit: "鳳凰、東南的「全程五星無購物」曼芭團" },
        { name: "高端奢旅", who: "高所得、重視住宿品牌的旅客", needs: "保證入住文華東方、四季、凱賓斯基，私人體驗", fit: "東南「頂泰風」、鳳凰東方文華團（3.6～5.9 萬）" },
        { name: "主題與小團族", who: "朋友小團、蜜月、素食者、追節慶者", needs: "兩人即可成行、主題明確（燈光節、蔬食、跨年、潑水節）", fit: "雄獅兩人成行 Mini tour、鳳凰蔬食團、東南純植美學" }
      ]
    },

    {
      id: "lion", type: "table",
      kicker: "05 · Lion Travel", title: "雄獅旅遊泰國產品整理",
      columns: ["產品（官網名稱節錄）", "天數／出發", "價格", "類型", "景點", "美食", "體驗"],
      rows: [
        { cells: ["曼谷一房一廳、綠山動物園×餵食長頸鹿、濱海小火車、彩虹沙灘俱樂部", "5 日／台北", "NT$12,999 起（2026/1 團）", "萬元入門團", "綠山動物園、芭達雅、湄南河、ICONSIAM", "朱拉隆功美食街、泰式風味餐（餐標 250 泰銖）", "餵長頸鹿、古式按摩 60 分鐘"], src: ["s16"] },
        { cells: ["就愛泰國｜曼谷一房一廳酒店兩晚、北碧賽福瑞長頸鹿、玻璃天空棧道、水上泡泡咖啡廳", "5 日／星宇", "NT$25,999 起", "經典團", "北碧賽福瑞、鄭王廟", "飯店海鮮自助餐", "長頸鹿互動、泡泡屋咖啡廳"], src: ["s15"] },
        { cells: ["旅展優惠｜佛統納薩塔藝術燈光節、曼谷奢華國際五星 2 晚、華欣葡萄酒莊、拷汪皇宮", "5 日", "NT$30,999 起", "季節主題團", "燈光節、華欣、拷汪皇宮", "葡萄酒莊、飛機椰林咖啡廳", "夜間燈光藝術"], src: ["s13"] },
        { cells: ["曼谷河畔五星酒店、格蘭島海之旅、海鮮燒烤 BBQ、ICONSIAM，無購物五日", "5 日／高雄", "（查無公開價格）", "無購物・南部出發", "格蘭島、東芭樂園、四方水上市場、ASIATIQUE", "海鮮燒烤＋啤酒暢飲（餐標 600 泰銖）", "拖曳傘等水上活動、古式按摩 2 小時"], src: ["s19"] },
        { cells: ["曼谷塞福瑞野生動物園、海洋公園、水上泡泡屋咖啡廳、吞武里海鮮市場、米其林推薦｜兩人成行", "5 日", "NT$33,000 起（2026/10 團）", "小團", "塞福瑞、海洋公園", "吞武里海鮮市場、米其林推薦餐廳", "兩人即可出發"], src: ["s15"] },
        { cells: ["浪漫日落高空酒吧、北碧賽福瑞長頸鹿、船遊市場美食、鄭王廟泰服體驗｜兩人成行", "5 日／長榮", "NT$43,800 起", "Mini tour・無購物", "北碧、鄭王廟", "船遊市場美食", "高空酒吧、泰服體驗"], src: ["s14", "s15"] },
        { cells: ["曼谷、芭達雅自由行｜雙城漫遊、精選住宿自選、贈 5 日上網卡", "自由行／高雄", "NT$10,530 起", "機加酒", "曼谷＋芭達雅自選", "—", "上網卡"], src: ["s14"] },
        { cells: ["曼谷自由行｜新開幕飯店、星級酒店、無邊際泳池，贈 5 日上網卡", "自由行", "NT$9,890 起", "機加酒", "曼谷", "—", "飯店設施"], src: ["s14"] }
      ],
      note: "價格為查詢日官網或通路（旅天下）顯示之起價，依出發日浮動；另 2026 ITF 旅展雄獅推出「泰國華欣燈光節五日」每人 22,999 元起。",
      src: ["s17"]
    },

    {
      id: "competitors", type: "table",
      kicker: "06 · Competitors", title: "其他旅行社泰國產品",
      columns: ["旅行社", "產品（節錄）", "天數", "價格", "類型／特色", "景點・美食・體驗"],
      rows: [
        { cells: ["可樂旅遊", "泰愛曼芭～大城長頸鹿、暹羅海天派對、爽泰度假莊園、雙網紅咖啡廳", "5 日", "NT$17,999 起", "入門團", "海天派對自助餐＋表演、大城瑪哈泰寺、糖絲春捲"], src: ["s22"] },
        { cells: ["可樂旅遊", "泰享北碧府～賽福瑞動物園、大象叢林遊蹤、安帕瓦螢火蟲、北碧帳篷酒店", "5 日", "NT$32,800 起", "外府深度", "鄭王廟泰服、古法按摩 2 小時、帳篷酒店"], src: ["s22"] },
        { cells: ["可樂旅遊", "來去曼谷、六人成行～市區精品飯店、青春自由行", "5+1 日", "NT$13,999 起", "團體自由行", "精品四星飯店 4 晚，其餘自由"], src: ["s25"] },
        { cells: ["東南旅遊", "泰自由｜長榮直飛、ibis 連住 4 晚、接送與網卡", "6 日", "NT$9,999 起", "團體自由行", "接送機、網卡"], src: ["s21"] },
        { cells: ["東南旅遊", "泰瘋了｜粉紅沙灘、綠山動物園、人妖秀", "6 日", "NT$19,900 起", "無購物入門團", "綠山動物園、人妖秀"], src: ["s21"] },
        { cells: ["東南旅遊", "頂泰風｜嬉遊芭達雅、全程五星、凱賓斯基", "5 日", "NT$58,900 起", "頂級無購物", "全程五星、凱賓斯基"], src: ["s21"] },
        { cells: ["鳳凰旅遊", "曼谷芭塔雅｜Pop Mart 泡泡瑪特旗艦店、爽泰度假莊園", "5 日", "NT$24,300 起", "潮流打卡團", "Pop Mart 旗艦店、爽泰莊園文化體驗"], src: ["s26"] },
        { cells: ["鳳凰旅遊", "入住 2 晚超五星東方文華酒店、粉紅秘境俱樂部、吞武里海鮮市場", "5 日", "NT$36,400 起", "全程五星無購物", "東方文華、海鮮市場、水上俱樂部"], src: ["s26"] }
      ],
      note: "價格為查詢日各旅行社官網列表顯示之起價，依出發日浮動。"
    },

    {
      id: "compare", type: "compare",
      kicker: "07 · Comparison", title: "旅行社優勢與劣勢",
      items: [
        {
          agency: "雄獅旅遊", position: "綜合型：低價團、經典團、小團、自由行全都有",
          pros: [
            { text: "價格帶最廣，從 1.3 萬入門團到 4.4 萬兩人成行小團", src: ["s16", "s14"] },
            { text: "形式齊全：團體、Mini tour、機加酒，且有高雄出發", src: ["s14", "s19"] },
            { text: "行程頁標示餐標（250～600 泰銖），比價資訊透明", src: ["s16", "s19"] },
            { text: "會員基礎穩：冬季訂單年增三成，超過六成為回流會員", src: ["s18"] },
            { text: "與長榮聯合促銷曼谷機票買一送一，泰國團主打「2 萬元有找」", src: ["s20"] }
          ],
          cons: [
            { text: "低價團仍安排「特產巡禮」站點，與市場無購物趨勢不同調", src: ["s36"] },
            { text: "產品名稱以景點堆疊、動輒 40 字以上，消費者比較成本高", src: ["s13"] }
          ]
        },
        {
          agency: "可樂旅遊", position: "年輕自由型：團體自由行＋當地票券",
          pros: [
            { text: "多款「四人／六人成行」團體自由行，適合朋友小團", src: ["s22", "s25"] },
            { text: "當地一日遊與票券齊全，如水上市場一日遊 971 元起", src: ["s24"] },
            { text: "「達人帶路」行程標榜無市場購物站", src: ["s23"] }
          ],
          cons: [
            { text: "部分泰國頁面仍寫「不含泰國簽證費 NT$1,200」，與現行免簽不符", src: ["s30"] },
            { text: "查詢時列表中高端奢旅產品較少", src: ["s22"] }
          ]
        },
        {
          agency: "東南旅遊", position: "品質型：無購物＋保證入住指定飯店，產品數最多",
          pros: [
            { text: "泰國專區約 79 款行程，涵蓋曼芭、華欣、泰北、普吉、蘇梅", src: ["s21"] },
            { text: "多數標示無購物，並保證入住洲際、四季、凱賓斯基等", src: ["s21"] },
            { text: "主題細分：純素、潑水節、跨年、親子、6 人成行", src: ["s21"] }
          ],
          cons: [
            { text: "主力價位多在 2.6～3.3 萬，頂級可達 5.9 萬", src: ["s21"] },
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
            { text: "價格多落在 2.4～4 萬，缺少萬元入門產品", src: ["s26"] },
            { text: "部分行程未含領隊導遊小費（每人每天 300 元）", src: ["s27"] }
          ]
        }
      ]
    },

    {
      id: "insight", type: "insight",
      kicker: "08 · Opportunities", title: "市場缺口與機會",
      items: [
        { title: "把「安心」做成賣點", text: "臺灣赴泰下滑的主因是信心而非需求。團體旅遊本來就有導遊、保險與緊急處理，旅行社可以把入境新制代辦、行前安全說明、保險內容講清楚，直接回應旅客的不安。", src: ["s7", "s12"] },
        { title: "政策頻繁變動＝資訊服務機會", text: "30 天免簽、TDAC、出境服務費、入境費接連變動，但仍有旅行社頁面寫著舊的簽證費。誰先把行前資訊整理成清楚的一頁，誰就先贏得信任。", src: ["s1", "s30"] },
        { title: "南部出發與兩人成行是差異化", text: "雄獅同時有高雄出發與兩人成行小團，這在比價時很少被放大。對中南部旅客與小家庭來說，「從家門口出發、兩個人就能走」比再多一個景點更有感。", src: ["s14", "s19"] },
        { title: "健康療癒與永續主題仍是空白", text: "泰國觀光局把方向轉向品質、安全與永續，主打健康旅遊。現有產品多是景點堆疊，以自然療癒、蔬食、低碳為主軸的高單價主題團仍少，是雄獅可以先卡位的缺口。", src: ["s31", "s5"] }
      ]
    },

    {
      id: "sources", type: "sources",
      kicker: "09 · Sources", title: "資料來源",
      note: "查詢日期：2026-11-16。產品價格為查詢當日網頁顯示之起價，實際售價以各旅行社公告為準；入境規定請以外交部領事事務局與泰國官方最新公告為準。"
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
    { id: "s36", title: "雄獅泰國暹邏灣夜釣墨魚 5 日（產品比較）", publisher: "旅天下（雄獅出團）", url: "https://travel.gounitravel.com/Detail/Compare?GroupID=26ST118JXB-T,26ST202JXB-T&CompareType=2&Origin=LION&isJoinProdcut=False", date: "查詢 2026-11-16" }
  ]
};
