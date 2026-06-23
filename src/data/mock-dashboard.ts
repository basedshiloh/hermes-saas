export interface PackTab {
  id: string;
  title: string;
  type: 'tool' | 'chat' | 'report' | 'settings';
  description: string;
  iconClass: string;
}

export interface Pack {
  id: string;
  name: string;
  persona: string;
  description: string;
  iconClass: string;
  tabs: PackTab[];
  starterPrompts: string[];
}

export const PACKS: Pack[] = [
  {
    id: 'seo',
    name: 'SEO Automation',
    persona: 'SEO managers & content marketers',
    description:
      'Keyword research, competitor analysis, content writing, and auto-publish to WordPress — all pre-configured.',
    iconClass: 'icon-search',
    tabs: [
      { id: 'keyword-research', title: 'Keyword Research', type: 'tool', description: 'Discover low-competition keywords and search trends.', iconClass: 'icon-target' },
      { id: 'content-writer', title: 'Content Writer', type: 'tool', description: 'Generate SEO-optimized articles and meta descriptions.', iconClass: 'icon-edit' },
      { id: 'competitor-analysis', title: 'Competitor Analysis', type: 'report', description: 'Analyze competitor rankings and backlink strategies.', iconClass: 'icon-bar-chart' },
    ],
    starterPrompts: [
      'Find 20 low-competition keywords for {{niche}}',
      'Write a 1500-word SEO article about {{topic}}',
      'Analyze the top 5 pages ranking for {{keyword}}',
    ],
  },
  {
    id: 'social',
    name: 'Social Media',
    persona: 'Social media managers & creators',
    description:
      'Content ideas, captions, scheduling — your agent handles the creative grind so you can focus on strategy.',
    iconClass: 'icon-share-2',
    tabs: [
      { id: 'content-ideas', title: 'Content Ideas', type: 'tool', description: 'Research trends and generate content ideas.', iconClass: 'icon-zap' },
      { id: 'post-writer', title: 'Post Writer', type: 'tool', description: 'Write posts for any platform.', iconClass: 'icon-edit' },
      { id: 'content-calendar', title: 'Content Calendar', type: 'report', description: 'Plan and organize your content schedule.', iconClass: 'icon-calendar' },
    ],
    starterPrompts: [
      'Generate 10 content ideas about {{topic}} for LinkedIn',
      'Write a week of Instagram captions for {{brand}}',
      'Create a 30-day content calendar for {{industry}}',
    ],
  },
  {
    id: 'engineer',
    name: 'Engineer & Analyst',
    persona: 'Engineers, analysts & developers',
    description:
      'Precise calculations, data crunching, script generation, and technical research — powered by code execution.',
    iconClass: 'icon-code',
    tabs: [
      { id: 'code-workspace', title: 'Code Workspace', type: 'tool', description: 'Write, run, and debug scripts.', iconClass: 'icon-terminal' },
      { id: 'data-analysis', title: 'Data Analysis', type: 'tool', description: 'Crunch numbers and generate reports.', iconClass: 'icon-bar-chart' },
      { id: 'automations', title: 'Automations', type: 'tool', description: 'Set up recurring tasks and cron jobs.', iconClass: 'icon-repeat' },
    ],
    starterPrompts: [
      'Write a Python script that {{task}}',
      'Analyze this CSV and summarize the key findings',
      'Set up a daily automation to {{task}}',
    ],
  },
  {
    id: 'student',
    name: 'Student & Researcher',
    persona: 'Students, academics & researchers',
    description:
      'Summarize papers, generate study notes, cite sources — your personal research assistant that reads everything.',
    iconClass: 'icon-book-open',
    tabs: [
      { id: 'research', title: 'Research', type: 'tool', description: 'Deep research with web browsing.', iconClass: 'icon-search' },
      { id: 'notes', title: 'Study Notes', type: 'tool', description: 'Generate notes from any material.', iconClass: 'icon-file-text' },
      { id: 'citations', title: 'Citations', type: 'report', description: 'Track and format citations.', iconClass: 'icon-bookmark' },
    ],
    starterPrompts: [
      'Summarize this PDF and extract key arguments',
      'Find 5 recent studies about {{topic}}',
      'Generate study notes for {{subject}}',
    ],
  },
  {
    id: 'general',
    name: 'General Assistant',
    persona: 'Anyone who wants full control',
    description:
      'Open-ended agent — coding, research, business tasks. Configure everything via chat. For power users.',
    iconClass: 'icon-cpu',
    tabs: [],
    starterPrompts: [
      'Help me research {{topic}}',
      'Write a Python script that {{task}}',
      'Set up a daily automation to {{task}}',
    ],
  },
];

export interface MockMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const MOCK_CONVERSATION: MockMessage[] = [
  { id: '1', role: 'user', content: 'Find 10 low-competition keywords for "home office furniture"' },
  { id: '2', role: 'assistant', content: 'I\'ll research low-competition keywords for "home office furniture" using web search and competitor analysis.\n\n**Searching...** ✓\n\nHere are 10 low-competition keywords:\n\n1. **ergonomic standing desk for small spaces** — Vol: 880, KD: 12\n2. **minimalist home office setup ideas** — Vol: 1,200, KD: 15\n3. **best desk organizer for remote workers** — Vol: 720, KD: 11\n4. **compact corner desk with storage** — Vol: 590, KD: 9\n5. **home office lighting for video calls** — Vol: 450, KD: 8\n6. **adjustable monitor arm for dual screens** — Vol: 1,100, KD: 14\n7. **noise cancelling office partition** — Vol: 320, KD: 7\n8. **under desk cable management solutions** — Vol: 680, KD: 10\n9. **eco-friendly office furniture brands** — Vol: 410, KD: 13\n10. **foldable desk for apartment office** — Vol: 530, KD: 8\n\nWant me to create content briefs for any of these?' },
  { id: '3', role: 'user', content: 'Create a content brief for #2 "minimalist home office setup ideas"' },
  { id: '4', role: 'assistant', content: '**Content Brief: Minimalist Home Office Setup Ideas**\n\n**Target keyword:** minimalist home office setup ideas\n**Word count:** 1,500–2,000 words\n**Search intent:** Informational + commercial\n\n**Suggested title:** "15 Minimalist Home Office Setup Ideas That Actually Boost Productivity"\n\n**Outline:**\n1. Why minimalism works for home offices\n2. Essential furniture (desk, chair, storage)\n3. 15 setup ideas with photos\n4. Budget breakdown ($200–$2,000 range)\n5. Common mistakes to avoid\n\n**Competitor gaps:** None of the top 5 results include budget breakdowns. This is our angle.\n\nShall I write the full article now?' },
];

export const PROVISIONING_STAGES = [
  { id: 'queued', label: 'Queued', description: 'Your agent is in the deployment queue...' },
  { id: 'allocating', label: 'Allocating resources', description: 'Selecting the best server for your agent...' },
  { id: 'pulling', label: 'Downloading agent', description: 'Pulling the latest Hermes agent image...' },
  { id: 'starting', label: 'Starting environment', description: 'Spinning up your private agent environment...' },
  { id: 'installing', label: 'Installing Hermes', description: 'Setting up the Hermes agent in your environment...' },
  { id: 'configuring', label: 'Configuring gateway', description: 'Setting up the communication channel...' },
  { id: 'health', label: 'Health check', description: 'Verifying everything is working correctly...' },
  { id: 'ready', label: 'Ready!', description: 'Your Hermes agent is live and ready to chat.' },
];
