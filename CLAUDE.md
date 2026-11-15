# CLAUDE.md — 目的地市場分析報告（Destination Market Reports）

> 給 AI 協作者（Claude、Codex、Cursor 等）的專案規則。**新增或修改任何內容前，請完整讀完本文件。**
> 若本文件與使用者在對話中的指示衝突，以使用者指示為準，完成後提醒使用者是否要回頭更新本文件。

---

## 1. 專案目的

這是一個「**一個國家＝一份簡報式市場分析報告**」的網站。作者對旅遊業有興趣，想用同一套架構，替不同出境旅遊目的地做市場分析，作為未來進入旅行業（產品企劃、線控）的練習作品。

每份報告都回答同樣的問題：

1. 這個國家是什麼樣的旅遊目的地？（背景、入境規定、旅行成本）
2. 臺灣旅客去這個國家的市場有多大、趨勢如何？
3. 主要客群是誰、他們要什麼？
4. 臺灣旅行社現在賣什麼產品？（**以雄獅旅遊為主力觀察對象**，再比較可樂、東南、鳳凰等）
5. 各家旅行社的優勢與劣勢？市場上還有什麼缺口與機會？

讀者：作者本人、課程老師與同學、對旅遊產業有興趣的人。語氣是「產業分析報告」，不是旅遊廣告。

---

## 2. 架構原則：內容與版面分離（最重要）

- **內容只寫在資料檔**：每個國家一個 `data/countries/<id>.js`，裡面只有資料（物件），**不寫 HTML**。
- **版面只寫在共用程式**：`report.html` + `assets/report.js` 負責把資料渲染成簡報；`assets/style.css` 負責外觀。
- 所以新增國家時**不需要、也不允許**複製或修改 HTML／CSS／JS，只要新增一個資料檔並登錄。
- 純靜態網站：HTML + CSS + 原生 JavaScript。**不使用框架、npm、建置工具、後端。**
- 部署在 GitHub Pages。內部路徑一律用**相對路徑**（`assets/style.css`，不可寫 `/assets/style.css`）。
- 必須可以直接雙擊 `index.html` 在本機開啟 → 資料用 `<script>` 載入 `.js`，不用 `fetch()` 讀 JSON。
- 唯一允許的外部資源：Google Fonts（Noto Sans TC、Noto Serif TC）。

---

## 3. 檔案結構

```
destination-reports/
├── CLAUDE.md                 ← 本文件：AI 規則唯一來源
├── AGENTS.md                 ← 指向本文件
├── README.md                 ← 給人看的簡介、使用方式、更新紀錄
├── index.html                ← 首頁：自動列出 data/countries.js 中所有國家
├── report.html               ← 報告頁：report.html?c=<id> 讀取對應資料檔並渲染成簡報
├── assets/
│   ├── style.css             ← 全站唯一樣式表
│   ├── home.js               ← 首頁卡片渲染
│   └── report.js             ← 簡報渲染器＋規則檢查（必備章節缺漏會在頁面上警告）
├── data/
│   ├── countries.js          ← ★ 國家登錄清單（新增國家必改）
│   └── countries/
│       └── thailand.js       ← ★ 一國一檔的報告內容
└── _templates/
    └── country-template.js   ← 新國家的空白範本（複製它，不要直接改它）
```

不要新增上表以外的資料夾或檔案類型。若需要新的投影片版型（slide type），先問使用者，並同步更新本文件第 5-2 節與 `report.js`。

---

## 4. 命名規則

| 項目 | 規則 | 範例 |
|---|---|---|
| 國家 id | 英文國名全小寫，多字用 `-` | `thailand`、`south-korea`、`vietnam` |
| 資料檔 | `data/countries/<id>.js` | `data/countries/vietnam.js` |
| 報告網址 | `report.html?c=<id>` | `report.html?c=vietnam` |
| 資料檔內的全域變數 | `window.REPORTS["<id>"] = {...}` | `window.REPORTS["vietnam"]` |
| 投影片 id | 第 5-1 節的固定 id，不可自創同義詞 | `background`、`matrix` |

---

## 5. 報告結構

### 5-1 必備章節（順序固定，id 固定）

每份報告的 `slides` 陣列**必須依序**包含以下 13 張。`report.js` 會檢查，缺少、順序錯誤或 `basis` 填錯時，頁面頂端會顯示紅色警告。

| # | id | 標題 | type | basis | 內容要求 |
|---|---|---|---|---|---|
| 1 | `cover` | 封面 | `cover` | — | 國名、副標、一句話結論（40 字內）、查詢日期、`art` 插畫 |
| 2 | `background` | 國家背景 | `facts` | `fact` | 首都、語言貨幣、時差、飛行時間、機場、臺灣出發航點、旺季 |
| 3 | `map` | 主要旅遊區域 | `map` | `summary` | 示意地圖＋6～10 個重點城市／區域與一句說明 |
| 4 | `entry` | 入境與旅行成本 | `bullets` | `fact` | 簽證／免簽、入境申報、機場稅費、近期政策變動 |
| 5 | `market` | 臺灣出境市場概況 | `stats` | `mixed` | 3～4 個關鍵數字，每個都有 `src`；`takeaway` 自動標為 AI 推論 |
| 6 | `trend` | 長期趨勢 | `chart` | `mixed` | 至少 1 張跨年度長條圖；推算值必須標 `estimate` 並寫算法 |
| 7 | `segments` | 目標客群 | `cards` | `inference` | 3～5 個客群 |
| 8 | `lion` | 雄獅產品整理 | `table` | `fact` | 4～8 個雄獅產品，欄位固定（見 5-4） |
| 9 | `matrix` | 同類型產品比較 | `matrix` | `summary` | 依固定產品類型（見 5-5）比較各旅行社 |
| 10 | `compare` | 旅行社優劣勢 | `compare` | `summary` | 每家：定位、優勢、劣勢；雄獅放第一 |
| 11 | `insight` | 市場缺口與機會 | `insight` | `inference` | 每點分「依據」（有來源）與「推論」 |
| 12 | `actions` | 行動優先順序 | `actions` | `inference` | 3～6 個行動，含優先順序、可行性、時程、衡量指標 |
| 13 | `sources` | 資料來源 | `sources` | `fact` | 全部來源與查詢日期 |

可以在必備投影片之間額外插入投影片，但 13 張必備的 id 與相對順序不能變。

### 5-2 事實與推論分開（`basis`）

每張投影片（封面除外）都必須有 `basis`，渲染時會在標題旁顯示標籤：

| basis | 標籤 | 用在 |
|---|---|---|
| `fact` | 資料事實 | 每一句都能對應到來源的內容 |
| `summary` | 依資料歸納 | 把多個來源整理、分類後的結果（地圖、同類比較、優劣勢） |
| `mixed` | 事實＋AI 推論 | 同一頁有事實也有推算或解讀 |
| `inference` | AI 推論（待驗證） | 客群、機會、行動建議 |

- `segments`、`insight`、`actions` **一定**是 `inference`。
- 在 `fact`／`summary` 頁中若某一點是推論，該 item 加 `inference: true`，會顯示「推論」小標。
- 推算數字（例如用成長率反推人次）只能出現在 `chart` 且 `status: "estimate"`，並在 `note` 寫出算式。

### 5-3 可用的投影片版型（type）

| type | 必要欄位 | 說明 |
|---|---|---|
| `cover` | `title`, `subtitle`, `headline`, `checked`, `art` | `art` 可用 `temple`／`city`／`beach`／`mountain`（內建通用剪影） |
| `facts` | `items: [{label, value, src?, inference?}]` | 兩欄資料表 |
| `map` | `map: {bbox, outline, islands?, origin?, points}` | 示意地圖，見 5-6 |
| `bullets` | `items: [{text, src?, tag?, inference?}]` | `tag`: `"new"` 近期變動、`"warn"` 注意 |
| `stats` | `items: [{value, label, note?, src}]`, `takeaway?` | 最多 4 個 |
| `chart` | `items: [{title, unit, note, bars: [{label, value, display?, status, src}]}]` | `status`: `actual` 實際、`estimate` 推算、`forecast` 官方預估、`target` 官方目標 |
| `cards` | `items: [{name, who, needs, fit}]` | 客群卡片 |
| `table` | `columns`, `rows: [{cells, src}]`, `note?` | 若有「價格帶」欄，值必須是 5-4 的選項 |
| `matrix` | `basisNote`, `agencies`, `rows: [{category, desc, cells: [{band, example, src}]}]`, `readout?` | 同類比較，見 5-5 |
| `compare` | `items: [{agency, position, pros: [{text, src}], cons: [{text, src}]}]` | 第一家自動以主題色框起 |
| `insight` | `items: [{title, evidence, text, src}]` | `evidence`＝有來源的依據；`text`＝推論 |
| `actions` | `items: [{priority, action, why, feasibility, feasibilityNote, timeline, kpi: [], src}]`, `note?` | `priority`: `P1`/`P2`/`P3`；`feasibility`: `高`/`中`/`低` |
| `sources` | `note` | 自動列出報告的 `sources` |

所有非封面投影片都可加：`kicker`（標題上方小字）、`icon`（右上角圖示）、`lede`（標題下一句導言）。
`icon` 可用：`globe` `map` `passport` `chart` `trend` `users` `bag` `grid` `scale` `bulb` `flag` `book`。

### 5-4 價格一律用「價格帶」

產品的出發日、艙等、成團人數都不同，精確價格沒有比較意義，也容易過時。因此：

- **不寫出發日期，不寫精確團費。** 以查詢當日看到的「每人起價」歸入以下價格帶，只能用這些字串：
  `1 萬以下`、`1–2 萬`、`2–3 萬`、`3–4 萬`、`4 萬以上`、`未公開`、`未見同類`
- `未公開`＝產品存在但頁面沒有價格；`未見同類`＝查詢時找不到這類產品（不代表該公司沒有）。
- 雄獅產品表（`lion`）欄位固定為：`產品（官網名稱節錄）`、`類型`、`天數／出發`、`價格帶`、`景點`、`美食`、`體驗`。
- 景點、美食、體驗用官網上的名稱，不加形容詞。

### 5-5 同類型比較（`matrix`）

不同條件的產品直接比價會失真，所以比較一律「同類比同類」。

- 欄：雄獅旅遊（固定第一欄）＋ 3 家以上競品，預設為可樂、東南、鳳凰。
- 列：使用以下**固定產品類型**（找不到就填 `未見同類`，不可刪列）：
  1. 萬元入門團　2. 經典團　3. 無購物＋五星品質團　4. 小團／幾人成行　5. 團體自由行／機加酒　6. 季節／外府主題團　7. 頂級奢旅
- 每格：`band`（價格帶）＋ `example`（一個代表產品名稱節錄）＋ `src`。
- `basisNote` 必須寫出比較口徑（天數、出發地、起價）。
- `readout` 寫 2～4 點「同類比較看出了什麼」，至少一點要指出「價格帶相同但條件不同」或「某類只有某家有」這類差異。

### 5-6 示意地圖（`map`）

- 地圖是用經緯度自繪的**示意圖**，不需要精確國界，頁面會自動加註「示意地圖」。
- `bbox: [最小經度, 最小緯度, 最大經度, 最大緯度]`，`outline` 是國界的概略經緯度點 `[[lon, lat], ...]`（30～80 點即可）。
- `points`: `{name, en, lat, lon, kind: "hub"|"city"|"beach", label?: "left", note, src}`；`hub` 為主要國際機場城市。
- `origin: {from: [lon, lat], label: "臺北 ✈ 直飛約 X 小時"}` 畫出從臺灣飛來的方向。
- 標籤重疊時，把其中一點設 `label: "left"`。

### 5-7 來源標註（`src`）

- 報告最外層有 `sources: [{id, title, publisher, url, date?}]`。
- 數字、政策、產品都要在 item 上寫 `src: ["s3"]`，渲染時顯示成上標 `[3]`，點擊可跳到來源頁。
- 引用不存在的來源 id 會觸發警告。

### 5-8 圖片

- 預設使用內建的封面剪影與投影片圖示，**不使用網路上的照片**。
- 若要加入照片，只能用作者自己拍攝的，或 CC 授權並標註作者與授權的圖片，放在 `assets/img/<國家id>-<描述>.jpg`，並先在本文件新增圖片版型規格。

## 6. ★ 新增一個國家的標準流程

1. **確認國家與 id**（第 4 節）。若 `data/countries/<id>.js` 已存在，改為「更新」而非新增。
2. **研究**：用網路搜尋取得最新資料。優先順序：
   - 政府／官方：外交部領事事務局、交通部觀光署統計、該國觀光局或移民局
   - 產業媒體與主流新聞（需註明媒體名稱與日期）
   - 旅行社官網產品頁（價格以查詢當日網頁顯示為準）
3. **複製範本**：把 `_templates/country-template.js` 複製成 `data/countries/<id>.js`，把所有 `TODO` 換成真實內容；完成後檔案中不得殘留 `TODO`。
4. **填寫 13 張必備投影片**（第 5-1 節），每個事實附 `src`、每張設定 `basis`；價格只用價格帶（5-4），競品比較依固定類型（5-5）。
5. **登錄**：在 `data/countries.js` 的 `COUNTRIES` 陣列末端加一筆：
   ```js
   { id: "vietnam", name: "越南", en: "Vietnam", region: "東南亞",
     summary: "40 字內的報告摘要", checked: "YYYY-MM-DD", status: "done" }
   ```
   `status` 可為 `"done"`（完成）或 `"draft"`（草稿，首頁會標示）。
6. **在 `index.html` 加一行 `<script>`？不需要。** 首頁只讀 `data/countries.js`；報告頁會依網址自動載入資料檔。
7. **更新 `README.md`** 的「更新紀錄」最上方：`- YYYY-MM-DD 新增越南報告`。
8. **自我檢查**（第 9 節）。

更新既有國家：改資料檔內容 → 更新 `checked` 日期（資料檔與 `countries.js` 兩處）→ 寫更新紀錄。

---

## 7. 內容規則

### 7-1 正確性
- **絕對不可編造**數字、價格、政策、產品名稱或網址。查不到就寫「（查無公開資料）」。
- 航班、簽證、價格都會變：在封面與 `sources` 註明**查詢日期**；產品價格只用價格帶（第 5-4 節）。
- 二手轉述的數據（新聞引述官方）要寫出原始機關，例如「泰國觀光體育部（據 Travel Weekly Asia）」。
- 唯一可以不附 `src` 的是穩定的一般常識：首都、官方語言、貨幣名稱、時區。其他一律附來源。

### 7-2 事實與觀點分開
- 事實、歸納、推論的分工見第 5-2 節。主觀判斷與建議只能放在 `basis: "inference"` 的投影片，或以 `inference: true` 標示。
- `compare` 的優劣勢要能從產品表或來源看得出根據，例如「多數行程標示無購物」而不是「品質最好」。

### 7-3 旅行社比較原則
- 雄獅旅遊為主力觀察對象：`lion` 章節單獨一張，`matrix` 與 `compare` 中排第一。
- 比較面向固定為：**價格帶、產品廣度（地區／天數）、產品特色（無購物、飯店等級、主題）、成團與彈性（幾人成行、自由行）、出發地**。
- 行動建議（`actions`）以雄獅的角度撰寫，每項都要有可量化的衡量指標，不可只寫「提升品牌形象」這類無法衡量的目標。
- 不做誹謗性或無根據的負面描述；劣勢要具體、可查證（例如「部分行程未含小費」）。

### 7-4 文字風格
- 繁體中文、臺灣用語；中英文之間加半形空格；中文使用全形標點。
- 每張投影片的文字量控制在一個螢幕內：`bullets` 最多 6 點、每點 60 字內；表格最多 8 列；能用圖表表達的跨年度數字，放進 `trend` 而不是條列。
- 地名第一次出現附英文，例如「芭達雅（Pattaya）」。

---

## 8. 視覺規則

- 風格：**產業研究簡報**。白底、深藍主色、各國有一個「主題色」點綴（在資料檔 `theme.accent` 設定，例如泰國用金色 `#c8962e`）。
- 顏色、字體、間距只能用 `style.css` 的 CSS 變數；新增樣式寫在 `style.css` 最末的「擴充區」並加註解。
- **不可使用 inline style**（主題色由 `report.js` 統一設定 `--accent` 變數，這是唯一例外）。
- 每張投影片 = 一個滿版畫面（`section.slide`），支援鍵盤 ← → 與捲動翻頁，列印時一頁一張。
- 不放未授權圖片。需要圖片時只用自己拍攝或 CC 授權並標註來源。

---

## 9. Definition of Done（完成前自我檢查）

- [ ] 用瀏覽器打開 `report.html?c=<id>`，頁面頂端**沒有**紅色規則警告
- [ ] 13 張必備投影片都在且順序正確，每張都有正確的 `basis`
- [ ] 價格只用價格帶，沒有出發日期；同類比較 7 個類型都有填
- [ ] 推算數字標為 `estimate` 並寫出算式
- [ ] 資料檔中沒有殘留 `TODO`
- [ ] 每個數字、價格、政策都有 `src`，且來源 id 都存在
- [ ] 封面與 `countries.js` 的查詢日期一致
- [ ] 首頁出現新國家卡片，點進去可以正常瀏覽
- [ ] 手機寬度（約 375px）文字不溢出
- [ ] `README.md` 更新紀錄已加上

## 10. 禁止事項

- ❌ 為了新國家去修改 `report.html`、`report.js`、`style.css`（版面是共用的）
- ❌ 編造數據、價格、產品、網址
- ❌ 把推論寫成事實語氣，或放在沒有標示推論的地方
- ❌ 寫精確團費或出發日期（只用價格帶）
- ❌ 使用來源不明或未授權的網路圖片
- ❌ 刪除既有國家報告（除非使用者明確要求）
- ❌ 引入框架、套件、建置流程或追蹤碼

## 11. Git 提交訊息

```
<類型>: <簡述>
類型：add（新增國家）/ update（更新資料）/ feat（新版型或功能）/ style / docs / fix
例：add: 新增越南市場分析報告
```
