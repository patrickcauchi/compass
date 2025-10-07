
'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-gray-900/60 backdrop-blur-md
        border-b border-gray-800
      "
      role="banner"
    >
      <div
        className="
          mx-auto w-full max-w-5xl
          flex items-center justify-between
          px-4 py-3
        "
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
          aria-label="Compass Home"
        >
          <span aria-hidden>🧭</span>
          <span className="heading">Compass</span>
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/40 rounded px-1 py-0.5 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/indicators"
                className="text-gray-300 hover:text-blue-400 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/40 rounded px-1 py-0.5 transition-colors"
              >
                Indicators
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-blue-400 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/40 rounded px-1 py-0.5 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* mobile menu placeholder (future) */}
        <div className="sm:hidden text-gray-300">
          <span className="sr-only">Menu</span>
          <div className="w-6 h-[1.5px] bg-gray-400 mb-1.5" />
          <div className="w-6 h-[1.5px] bg-gray-400" />
        </div>
      </div>
    </header>
  );
}