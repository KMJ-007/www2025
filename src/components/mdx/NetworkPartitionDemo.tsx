'use client';

import { useState } from 'react';

export default function NetworkPartitionDemo() {
  const [isPartitioned, setIsPartitioned] = useState(false);

  return (
    <div className="my-8 p-6 border rounded-lg bg-foreground/5">
      <h3 className="text-lg font-semibold mb-4">Network Partition Simulator</h3>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-4 h-4 rounded-full ${isPartitioned ? 'bg-red-500' : 'bg-green-500'}`} />
        <span>Status: {isPartitioned ? 'Partitioned' : 'Connected'}</span>
      </div>
      <button
        type="button"
        onClick={() => setIsPartitioned(!isPartitioned)}
        className="px-4 py-2 bg-foreground/10 rounded hover:bg-foreground/20 transition-colors"
      >
        Toggle Partition
      </button>
    </div>
  );
} 