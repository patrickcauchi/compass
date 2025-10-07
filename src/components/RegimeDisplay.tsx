"use client";
import React from "react";

interface RegimeDisplayProps {
  regime: string;
}

export default function RegimeDisplay({ regime }: RegimeDisplayProps) {
  const colorMap: Record<string, string> = {
    "Risk-On": "text-green-400",
    "Neutral": "text-yellow-400",
    "Risk-Off": "text-red-400",
  };
  const color = colorMap[regime] || "text-gray-300";

  return (
    <div
      className={`
        text-3xl font-bold ${color}
        drop-shadow-[0_0_6px_rgba(0,255,0,0.3)]
        transition-colors duration-300
      `}
    >
      {regime}
    </div>
  );
}