"use client";
import React from "react";

type Card = {
  key: string;
  title: string;
  value: string;
  sublabel?: string;
  trend?: "up" | "down" | "flat";
};

const MOCK: Card[] = [
  { key: "liquidity", title: "Liquidity Tide (M2/DXY/WALCL)", value: "↑ Mild Expansion", sublabel: "Tone: Supportive", trend: "up" },
  { key: "etf",       title: "US Spot BTC ETF Flows",        value: "+$220M",         sublabel: "5-day net",     trend: "up" },
  { key: "stables",   title: "Stablecoin Supply",             value: "+0.8%",          sublabel: "7-day change",  trend: "up" },
  { key: "risk",      title: "Leverage & Risk Filters",       value: "Balanced",       sublabel: "Funding/OVX",   trend: "flat" },
];

function TrendPill({ trend }: { trend?: "up" | "down" | "flat" }) {
  const map = {
    up:   "text-green-400 bg-green-400/10 border-green-400/30",
    down: "text-red-400 bg-red-400/10 border-red-400/30",
    flat: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  } as const;
  const cls = trend ? map[trend] : "text-gray-300 border-gray-700";
  const symbol = trend === "up" ? "▲" : trend === "down" ? "▼" : "➖";
  return (
    <span className={`px-2 py-0.5 text-xs rounded-md border ${cls}`}>
      {symbol}
    </span>
  );
}

export default function IndicatorSection() {
  return (
    <section className="w-full">
      <h2 className="heading text-lg mb-4">Key Indicators (Mock)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {MOCK.map((c) => (
          <div key={c.key} className="glass p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm text-gray-300">{c.title}</h3>
                <div className="mt-1 text-xl font-semibold">{c.value}</div>
              </div>
              <TrendPill trend={c.trend} />
            </div>
            {c.sublabel && (
              <p className="mt-2 text-xs text-gray-400">{c.sublabel}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
