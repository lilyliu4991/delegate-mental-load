'use client';

import { LoadSummary, PARTNER_LABELS } from '@/types';
import LoadChart from './LoadChart';

interface Props {
  summary: LoadSummary;
  totalTasks: number;
  onReset: () => void;
  onExport: () => void;
}

export default function SummaryPanel({ summary, totalTasks, onReset, onExport }: Props) {
  return (
    <div className="sticky top-16 sm:top-20 bg-white border border-stone-200 p-6 space-y-6">
      <div>
        <h3 className="font-serif text-xl text-stone-800">Mental Load Breakdown</h3>
        <p className="text-xs text-stone-400 mt-1" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>Updates as you assign tasks</p>
      </div>

      <LoadChart summary={summary} />

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 border border-stone-100" style={{ background: '#EAF5F5' }}>
          <div className="font-serif text-xl sm:text-2xl" style={{ color: '#5AABAB' }}>{summary.partner1Percent}%</div>
          <div className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{PARTNER_LABELS.partner1}</div>
        </div>
        <div className="p-4 border border-stone-100" style={{ background: '#F2F7F7' }}>
          <div className="font-serif text-xl sm:text-2xl" style={{ color: '#6FA3A8' }}>{summary.partner2Percent}%</div>
          <div className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{PARTNER_LABELS.partner2}</div>
        </div>
        <div className="p-4 border border-stone-100 bg-[#F8F4EF]">
          <div className="font-serif text-xl sm:text-2xl text-stone-700">{summary.sharedCount}</div>
          <div className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>Shared tasks</div>
        </div>
        <div className="p-4 border border-stone-100 bg-[#F8F4EF]">
          <div className="font-serif text-xl sm:text-2xl text-stone-700">{summary.neitherCount}</div>
          <div className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>Unassigned</div>
        </div>
      </div>

      <div className="text-xs text-stone-400 text-center" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
        {summary.assignedCount} of {totalTasks} tasks assigned
      </div>

      <div className="flex gap-2">
        <button onClick={onExport} className="flex-1 text-xs font-nav uppercase tracking-wider text-stone-600 border border-stone-200 py-2.5 hover:bg-[#F8F4EF] transition-colors"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          Export
        </button>
        <button onClick={onReset} className="flex-1 text-xs font-nav uppercase tracking-wider text-stone-400 border border-stone-200 py-2.5 hover:bg-[#F8F4EF] transition-colors"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          Reset
        </button>
      </div>
    </div>
  );
}
