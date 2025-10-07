'use client';
import React from 'react';

type Props = { regime: string };

export default function RegimeDisplay({ regime }: Props) {
  const color =
    regime === 'Risk-On' ? 'text-green-400' :
    regime === 'Neutral' ? 'text-yellow-400' :
    'text-red-400';

  return (
    <div className="my-6 text-center">
      <h2 className="text-xl font-semibold text-white mb-2">Current Regime</h2>
      <div className={`text-2xl font-bold ${color}`}>{regime}</div>
    </div>
  );
}