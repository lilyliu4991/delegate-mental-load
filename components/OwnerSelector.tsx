'use client';

import { OwnerKey, PARTNER_LABELS } from '@/types';

interface Props {
  value: OwnerKey;
  onChange: (v: OwnerKey) => void;
}

const OPTIONS: { key: OwnerKey; label: string; active: string }[] = [
  { key: 'partner1', label: PARTNER_LABELS.partner1, active: 'bg-[#5AABAB] text-white border-[#5AABAB]' },
  { key: 'partner2', label: PARTNER_LABELS.partner2, active: 'bg-[#E8907A] text-white border-[#E8907A]' },
  { key: 'both',    label: 'Both',    active: 'bg-[#E8C84A] text-stone-800 border-[#E8C84A]' },
  { key: 'neither', label: 'Neither', active: 'bg-stone-400 text-white border-stone-400' },
];

export default function OwnerSelector({ value, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {OPTIONS.map((opt) => (
        <button
          key={opt.key}
          onClick={() => onChange(opt.key)}
          className={`px-3.5 py-1.5 text-xs border transition-all font-nav uppercase tracking-wider ${
            value === opt.key
              ? opt.active
              : 'bg-white text-stone-400 border-stone-200 hover:border-stone-300 hover:text-stone-600'
          }`}
          style={{ fontFamily: 'var(--font-montserrat), sans-serif', letterSpacing: '0.06em' }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
