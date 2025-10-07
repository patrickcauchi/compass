'use client';
import React from 'react';

type Props = {
  allocations: { BTC: number; ETH: number; USDT: number };
};

export default function AllocationPanel({ allocations }: Props) {
  const keys = Object.keys(allocations) as (keyof typeof allocations)[];
  const colors: Record<string, string> = {
    BTC: 'bg-yellow-500',
    ETH: 'bg-blue-500',
    USDT: 'bg-green-500',
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 space-y-4">
      {keys.map((k) => (
        <div key={k}>
          <div className="flex justify-between mb-1 text-sm text-gray-300">
            <span>{k}</span>
            <span>{allocations[k]}%</span>
          </div>
          <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
            <div
              className={`${colors[k]} h-3`}
              style={{ width: `${allocations[k]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}