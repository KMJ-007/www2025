import React from 'react';

// want this like: https://www.foam.org/talent-2024
export default function VibePage() {
  const currentVibe = {
    mood: 'Focused',
    music: 'Lo-fi Beats',
    activity: 'Coding',
    weather: 'Rainy',
    thought: 'Building in public is the best way to learn'
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Current Vibe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(currentVibe).map(([key, value]) => (
          <div 
            key={key}
            className="p-6 rounded-lg border border-foreground/10 bg-background/50"
          >
            <h2 className="text-lg font-medium capitalize mb-2">{key}</h2>
            <p className="text-foreground/70">{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 