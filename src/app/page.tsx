

'use client';
import React, { useState } from 'react';
import AllocationWheel from '../components/AllocationWheel';
import RegimeDisplay from '../components/RegimeDisplay';
import AllocationPanel from '../components/AllocationPanel';

export default function Home() {
  const [regime] = useState('Risk-On');
  const [allocations] = useState({ BTC: 60, ETH: 30, USDT: 10 });

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <AllocationWheel />
      <RegimeDisplay regime={regime} />
      <AllocationPanel allocations={allocations} />
    </div>
  );
}
