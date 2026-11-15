# 目的地市場分析報告 Destination Market Reports

一個國家＝一份簡報式的旅遊市場分析報告。每份報告用相同的 10 張投影片結構，整理：

國家背景 → 入境規定與旅行成本 → 臺灣出境市場數據 → 目標客群 → **雄獅旅遊產品** → 其他旅行社（可樂、東南、鳳凰）產品 → 優劣勢比較 → 市場缺口與機會 → 資料來源

## 線上瀏覽

- 首頁：`https://<你的帳號>.github.io/destination-reports/`
- 泰國報告：`https://<你的帳號>.github.io/destination-reports/report.html?c=thailand`

報告頁可用鍵盤 ← → 翻頁，也可以按右上角「列印 / 存 PDF」輸出成簡報 PDF。

## 專案怎麼運作

| 檔案 | 角色 |
|---|---|
| `CLAUDE.md` | 給 AI 的專案規則（結構、命名、內容規則、新增流程、檢查清單） |
| `data/countries/<id>.js` | 一國一份的**報告內容**（純資料） |
| `data/countries.js` | 國家登錄清單，首頁卡片由此產生 |
| `assets/report.js` | 共用簡報渲染器，同時檢查報告是否符合規則 |
| `_templates/country-template.js` | 新國家範本 |

內容與版面分離：新增國家只需要新增一份資料檔並登錄，不必碰 HTML／CSS／JS。若資料檔缺少必備投影片、殘留 TODO 或引用不存在的來源，報告頁頂端會出現紅色警告。

## 請 AI 新增一個國家

> 「請閱讀 CLAUDE.md，依第 6 節流程新增越南的市場分析報告。」

## 更新紀錄

- 2026-11-16 建立專案；新增泰國報告（`thailand`）
