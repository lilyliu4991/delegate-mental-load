'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task, OwnerKey } from '@/types';
import { INITIAL_TASKS, CATEGORIES } from '@/data/tasks';
import { calculateLoadSummary } from '@/lib/calculations';
import TaskCategory from './TaskCategory';
import SummaryPanel from './SummaryPanel';

const STORAGE_KEY = 'dml-tasks-v2';

function buildSummaryText(tasks: Task[]): { subject: string; body: string } {
  const summary = calculateLoadSummary(tasks);

  const byOwner = (label: string, key: string) =>
    tasks
      .filter((t) => t.ownerStatus === key)
      .map((t) => `  • ${t.title}`)
      .join('\n') || '  (none)';

  const both = tasks
    .filter((t) => t.ownerStatus === 'both')
    .map((t) => `  • ${t.title}`)
    .join('\n') || '  (none)';

  const subject = `Our Mental Load Breakdown — DelegateMentalLoad.com`;

  const body = [
    'Hi! Here are our mental load results from DelegateMentalLoad.com.',
    '',
    '── OVERVIEW ──────────────────────────',
    `Wife:     ${summary.partner1Percent}% of responsibilities`,
    `Husband:  ${summary.partner2Percent}% of responsibilities`,
    `Shared:   ${summary.sharedCount} tasks`,
    `Unassigned: ${summary.neitherCount} tasks`,
    '',
    '── WIFE OWNS ─────────────────────────',
    byOwner('Wife', 'partner1'),
    '',
    '── HUSBAND OWNS ──────────────────────',
    byOwner('Husband', 'partner2'),
    '',
    '── SHARED ────────────────────────────',
    both,
    '',
    '──────────────────────────────────────',
    'Generated at DelegateMentalLoad.com',
  ].join('\n');

  return { subject, body };
}

function loadFromStorage(): Task[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export default function DelegationTool() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [hydrated, setHydrated] = useState(false);
  const [emailAddr, setEmailAddr] = useState('');
  const [showEmailBox, setShowEmailBox] = useState(false);

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) setTasks(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, hydrated]);

  const updateTask = useCallback((id: string, owner: OwnerKey) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ownerStatus: owner } : t)));
  }, []);

  const resetAll = () => {
    setTasks(INITIAL_TASKS);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportSummary = () => {
    const { subject, body } = buildSummaryText(tasks);
    const blob = new Blob([`${subject}\n\n${body}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mental-load-summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendEmail = () => {
    const { subject, body } = buildSummaryText(tasks);
    const mailto = `mailto:${encodeURIComponent(emailAddr)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const summary = calculateLoadSummary(tasks);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Task list */}
      <div className="flex-1 space-y-3 min-w-0">
        {CATEGORIES.map((cat) => (
          <TaskCategory
            key={cat.key}
            category={cat}
            tasks={tasks.filter((t) => t.category === cat.key)}
            onUpdate={updateTask}
          />
        ))}

        {/* Email results — appears after all categories */}
        <div className="bg-white border border-stone-200 p-6 mt-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl shrink-0">📬</span>
            <div className="flex-1">
              <h3 className="font-serif text-lg text-stone-800 mb-1">Email your results</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
                Send a full breakdown — who owns what, shared tasks, and your percentages — straight to your inbox so you both have a record.
              </p>

              {showEmailBox ? (
                <div className="flex gap-0">
                  <input
                    type="email"
                    value={emailAddr}
                    onChange={(e) => setEmailAddr(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 border border-stone-300 px-4 py-2.5 text-sm text-stone-700 outline-none focus:border-[#D97060] transition-colors"
                    style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}
                    onKeyDown={(e) => e.key === 'Enter' && sendEmail()}
                  />
                  <button
                    onClick={sendEmail}
                    className="bg-[#5AABAB] text-white text-xs font-nav uppercase tracking-widest px-5 py-2.5 hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setShowEmailBox(false)}
                    className="border border-stone-300 border-l-0 text-stone-400 px-3 py-2.5 hover:bg-stone-50 transition-colors text-sm"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowEmailBox(true)}
                  className="bg-[#5AABAB] text-white text-xs font-nav uppercase tracking-widest px-6 py-3 hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Email My Results
                </button>
              )}
              <p className="text-xs text-stone-400 mt-3" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
                Opens your mail app with the summary pre-filled. Nothing is stored or sent by this site.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky summary */}
      <div className="w-full lg:w-72 shrink-0">
        <SummaryPanel
          summary={summary}
          totalTasks={tasks.length}
          onReset={resetAll}
          onExport={exportSummary}
        />
      </div>
    </div>
  );
}
