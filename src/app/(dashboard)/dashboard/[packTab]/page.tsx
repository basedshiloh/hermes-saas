'use client';

import { cn } from '@/src/utils/cn';
import { PACKS } from '@/src/data/mock-dashboard';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const mockResults: Record<string, { query: string; results: string[] }> = {
  'keyword-research': {
    query: 'home office furniture',
    results: [
      'ergonomic standing desk for small spaces — Vol: 880, KD: 12',
      'minimalist home office setup ideas — Vol: 1,200, KD: 15',
      'best desk organizer for remote workers — Vol: 720, KD: 11',
      'compact corner desk with storage — Vol: 590, KD: 9',
      'home office lighting for video calls — Vol: 450, KD: 8',
    ],
  },
  'content-writer': {
    query: '',
    results: [
      '**Title:** 15 Minimalist Home Office Setup Ideas That Boost Productivity',
      '**Word count:** 1,847 words',
      '**Meta description:** Discover 15 minimalist home office setups that maximize focus and productivity...',
      '**Status:** Draft ready for review',
    ],
  },
  'content-ideas': {
    query: '',
    results: [
      '🔥 "5 tools every remote worker swears by" — Trending on LinkedIn',
      '📈 "Why async communication beats meetings" — Rising topic',
      '🎯 "My morning routine as a solo founder" — High engagement format',
      '💡 "The $200 desk setup that changed my productivity" — Viral potential',
    ],
  },
  'post-writer': {
    query: '',
    results: [
      '**LinkedIn post draft:**\n"I replaced my $2,000 desk setup with something that cost $200.\n\nHere\'s what I learned about minimalism at work..."',
      '**Instagram caption draft:**\n"Less stuff. More focus. My desk only has 3 things on it. 🖥️\n\n#minimalistoffice #remotework"',
    ],
  },
};

export default function PackTabPage() {
  const params = useParams();
  const tabId = params.packTab as string;
  const [query, setQuery] = useState('');

  const allTabs = PACKS.flatMap((p) => p.tabs);
  const tab = allTabs.find((t) => t.id === tabId);
  const mock = mockResults[tabId];

  if (!tab) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-tagline-1 font-inter-tight text-primary-50/50 font-normal">Tab not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-heading-5 font-inter-tight text-accent">{tab.title}</h2>
        <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">{tab.description}</p>
      </div>

      <div className="border-stroke-5 bg-background-7 space-y-4 rounded-xl border p-5">
        <fieldset className="space-y-2">
          <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">
            {tab.type === 'report' ? 'URL or topic to analyze' : 'What do you need?'}
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={mock?.query || 'Enter a topic, keyword, or URL...'}
              className="border-stroke-5/25 text-tagline-2 font-inter-tight flex-1 rounded-md border bg-transparent px-4.5 py-3 font-normal text-accent/90 placeholder:text-primary-50/40 focus:outline-none"
            />
            <ButtonPrimary onClick={() => {}}>Run</ButtonPrimary>
          </div>
        </fieldset>
      </div>

      {mock && (
        <div className="space-y-3">
          <h3 className="text-tagline-1 font-inter-tight text-accent font-medium">Results</h3>
          <div className="space-y-2">
            {mock.results.map((result, i) => (
              <div
                key={i}
                className={cn(
                  'border-stroke-5 bg-background-7 rounded-xl border px-5 py-4',
                )}
              >
                <p className="text-tagline-2 font-inter-tight text-primary-50/80 whitespace-pre-wrap font-normal">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
