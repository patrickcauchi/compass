# 🧭 Compass Indicator Dashboard – Future Work Plan

**Purpose:**  
Define the roadmap for the full `/indicators` dashboard following Batch 8.5 (mock section on homepage).

---

## 🎯 Vision
The `/indicators` route will become Compass’s **core analytics hub**, expanding the 4 mock cards into a full **10-indicator dashboard** that reflects macro + crypto flows.

---

## 🧩 Structure Overview

### 1️⃣ Page Layout
- Path: `/src/app/indicators/page.tsx`
- Components:
  - `<IndicatorsGrid />`
  - `<IndicatorCard />`
  - `<IndicatorFilterBar />` (future)
  - `<IndicatorSummary />` (future)
- Retains Compass design system: dark, glass, calm typography.

---

## 🪞 Indicators (Phase 1 – Static Mock)
| ID | Name | Group | Example Display |
|----|------|--------|----------------|
| liquidity | Liquidity Tide (M2 / DXY / WALCL) | Macro | “↑ Mild Expansion” |
| etf_flows | US Spot BTC ETF Flows | Crypto Flows | “+$220 M” |
| stablecoins | Stablecoin Supply Growth | Crypto Flows | “+0.8 % (7-day)” |
| funding | Funding Rates | Risk | “Normal” |
| realized_vol | On-chain Volatility | Risk | “Low ↘” |
| eth_btc | ETH / BTC Ratio | Internal | “0.055 ↑” |
| credit_spreads | Macro Credit Spreads | Macro | “Tightening ↘” |
| open_interest | Futures Open Interest | Risk | “Stable” |
| market_cap | Crypto Market Cap | Context | “+$35 B (1 W)” |
| dominance | BTC Dominance | Context | “53 % ↑” |

---

## ⚙️ Phase 2 – Mock + Local Data
- Load mock JSON (`/data/mock/indicators.json`).
- Validate via `tools/validate_data.py`.
- Map indicators → `<IndicatorCard />`.
- Include trend icons (“▲”, “▼”, “—”) and sub-labels.

---

## 📊 Phase 3 – Dynamic (Connected)
- Fetch real data weekly from internal or API sources.
- Add historical sparkline per card (mini SVG).
- Integrate AI narrative: “Liquidity is expanding while risk metrics remain neutral.”
- Enable sorting/filtering.

---

## 🧠 Design Principles
- **Clarity = Credibility** → analytical, minimalist cards.
- **Consistency** → each card uses identical structure + typography.
- **Responsiveness** → 1-col (mobile), 2-col (md), 3-col (lg).
- **Educational tone** → no “buy/sell” language.

---

## 🧱 Implementation Order
1. Create `/indicators/page.tsx` + `<IndicatorsGrid />` – static mock v1.  
2. Add `mock/indicators.json` + simple validator.  
3. Replace hardcoded mocks → data map.  
4. Add sparkline placeholder box (Phase 2.5).  
5. Add real data sources (Phase 3).  
6. Add commentary panel / AI Coach integration (future).

---

**Owner:** Architect Orbis → Developer Copilot  
**Status:** Pending after semantic optimisation phase
