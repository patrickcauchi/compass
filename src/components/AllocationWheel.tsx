'use client';
import React from 'react';

export default function AllocationWheel() {
  return (
    <div
      className="
        flex items-center justify-center
        w-48 h-48
        rounded-full
        border-8 border-blue-500/30
        shadow-[0_0_30px_rgba(59,130,246,0.25)]
        glass
      "
    >
      <span className="text-xl font-semibold text-blue-400 text-glow">
        Risk-On (60/30/10)
      </span>
      </div>
    );
  }