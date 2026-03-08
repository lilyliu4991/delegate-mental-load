'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { LoadSummary, PARTNER_LABELS } from '@/types';

interface Props { summary: LoadSummary; }

export default function LoadChart({ summary }: Props) {
  const hasData = summary.totalPoints > 0;

  const data = hasData
    ? [
        { name: PARTNER_LABELS.partner1, value: summary.partner1Points },
        { name: PARTNER_LABELS.partner2, value: summary.partner2Points },
      ]
    : [{ name: 'Unassigned', value: 1 }];

  const colors = hasData ? ['#5AABAB', '#E8907A'] : ['#C8E6E6'];

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-52 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={68} outerRadius={100} paddingAngle={hasData ? 3 : 0} dataKey="value" strokeWidth={0}>
              {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
            </Pie>
            {hasData && <Tooltip formatter={(v) => [`${Math.round((Number(v) / summary.totalPoints) * 100)}%`]} />}
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {hasData ? (
            <>
              <span className="font-serif text-3xl text-stone-800">{summary.partner1Percent}%</span>
              <span className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{PARTNER_LABELS.partner1}</span>
            </>
          ) : (
            <span className="text-xs text-stone-400 text-center px-6" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>Assign tasks to see the breakdown</span>
          )}
        </div>
      </div>

      <div className="flex gap-5 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5" style={{ background: '#5AABAB' }} />
          <span className="text-stone-600 text-xs" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{PARTNER_LABELS.partner1}</span>
          {hasData && <span className="text-[#5AABAB] font-medium text-xs">{summary.partner1Percent}%</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5" style={{ background: '#E8907A' }} />
          <span className="text-stone-600 text-xs" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{PARTNER_LABELS.partner2}</span>
          {hasData && <span className="text-[#E8907A] font-medium text-xs">{summary.partner2Percent}%</span>}
        </div>
      </div>
    </div>
  );
}
