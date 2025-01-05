import React from 'react';

/**
 * 
 * https://web.archive.org/web/20230327180709/https://210ethan.github.io/knowledge/advice.html
 * https://joodaloop.com/bad-advice/
 */

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      title: 'Quick Thought on System Design',
      date: '2024-03-15',
      content: 'When designing distributed systems, always consider the CAP theorem trade-offs first.'
    },
    {
      id: 2,
      title: 'TIL: Rust Ownership',
      date: '2024-03-14',
      content: 'Rust\'s ownership system is unique among programming languages - each value has exactly one owner.'
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Notes</h1>
      <div className="space-y-6">
        {notes.map(note => (
          <article 
            key={note.id} 
            className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors"
          >
            <div className="flex justify-between items-baseline mb-2">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <time className="text-sm text-foreground/70">{note.date}</time>
            </div>
            <p className="text-foreground/70">{note.content}</p>
          </article>
        ))}
      </div>
    </main>
  );
} 