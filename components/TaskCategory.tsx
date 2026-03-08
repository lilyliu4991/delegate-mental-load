'use client';

import { useState } from 'react';
import { Task, CategoryMeta, OwnerKey } from '@/types';
import OwnerSelector from './OwnerSelector';

interface Props {
  category: CategoryMeta;
  tasks: Task[];
  onUpdate: (id: string, owner: OwnerKey) => void;
}

const BADGE: Record<OwnerKey, string> = {
  partner1: 'bg-[#5AABAB]/10 text-[#5AABAB]',
  partner2: 'bg-[#6FA3A8]/10 text-[#6FA3A8]',
  both:     'bg-[#E8C84A]/20 text-stone-600',
  neither:  'bg-stone-100 text-stone-400',
};

const BADGE_LABEL: Record<OwnerKey, string> = {
  partner1: 'Wife',
  partner2: 'Husband',
  both:     'Both',
  neither:  'Unset',
};

export default function TaskCategory({ category, tasks, onUpdate }: Props) {
  const [open, setOpen] = useState(false);
  const assigned = tasks.filter((t) => t.ownerStatus !== 'neither').length;

  return (
    <div className="border border-stone-200 overflow-hidden bg-white">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-5 hover:bg-[#F8F4EF] transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{category.emoji}</span>
          <div>
            <div className="font-serif text-lg text-stone-800">{category.label}</div>
            <div className="text-xs text-stone-400 mt-0.5" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{category.description}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs text-stone-400" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{assigned}/{tasks.length}</span>
          <svg className={`w-4 h-4 text-[#5AABAB] transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="border-t border-stone-100 divide-y divide-stone-100">
          {tasks.map((task) => (
            <div key={task.id} className="px-4 sm:px-6 py-5 bg-white hover:bg-[#F8F4EF]/50 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-stone-800" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{task.title}</p>
                  {task.description && (
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{task.description}</p>
                  )}
                </div>
                <span className={`text-[10px] px-2.5 py-1 shrink-0 mt-0.5 font-nav uppercase tracking-wider ${BADGE[task.ownerStatus]}`}
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                  {BADGE_LABEL[task.ownerStatus]}
                </span>
              </div>
              <OwnerSelector value={task.ownerStatus} onChange={(v) => onUpdate(task.id, v)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
