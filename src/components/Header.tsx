'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-700 bg-black/70 text-white p-4 flex items-center justify-between">
      <h1 className="text-lg font-semibold tracking-wide">🧭 Compass</h1>
      <nav className="space-x-4 text-sm">
        <a href="#" className="hover:text-blue-400">Dashboard</a>
        <a href="#" className="hover:text-blue-400">Backtester</a>
        <a href="#" className="hover:text-blue-400">About</a>
      </nav>
    </header>
  );
}