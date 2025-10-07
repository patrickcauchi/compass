

'use client';
import React, { useState } from 'react';

import AllocationWheel from '../components/AllocationWheel';
import RegimeDisplay from '../components/RegimeDisplay';
import AllocationPanel from '../components/AllocationPanel';
import IndicatorSection from '../components/IndicatorSection';

export default function Home() {
  const [regime] = useState('Risk-On');
  const [allocations] = useState({ BTC: 60, ETH: 30, USDT: 10 });

  return (
    <section
      className="
        flex flex-col items-center justify-center
        w-full space-y-12
      "
    >
  <AllocationWheel />
  <RegimeDisplay regime={regime} />
  <AllocationPanel allocations={allocations} />
  <IndicatorSection />
    </section>
  );
}
