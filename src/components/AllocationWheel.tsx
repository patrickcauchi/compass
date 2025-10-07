'use client';
import React from 'react';

export default function AllocationWheel() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full w-48 h-48 border-8 border-blue-500/30 flex items-center justify-center">
        <span className="text-xl font-semibold text-blue-400">
          Risk-On&nbsp;(60/30/10)
        </span>
      </div>
      <p className="mt-6 text-gray-400 max-w-md">
        Compass allocates between <strong>BTC / ETH / USDT</strong> depending on macro tides and crypto flows.
      </p>
    </div>
  );
}