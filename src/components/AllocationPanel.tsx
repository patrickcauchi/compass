"use client";
import React from "react";

interface AllocationPanelProps {
  allocations: { BTC: number; ETH: number; USDT: number };
}

export default function AllocationPanel({ allocations }: AllocationPanelProps) {
  const bars = [
    { label: "BTC", value: allocations.BTC, color: "bg-yellow-400" },
    { label: "ETH", value: allocations.ETH, color: "bg-blue-400" },
    { label: "USDT", value: allocations.USDT, color: "bg-green-400" },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6 glass">
      <h2 className="heading text-lg mb-4">Current Allocation</h2>
      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>{bar.label}</span>
              <span className="num">{bar.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`${bar.color} h-full transition-all duration-700`}
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}