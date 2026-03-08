export type OwnerKey = 'partner1' | 'partner2' | 'both' | 'neither';

export type CategoryKey = 'daily' | 'caregiving' | 'external' | 'special' | 'misc';

export interface Task {
  id: string;
  category: CategoryKey;
  title: string;
  description?: string;
  ownerStatus: OwnerKey;
}

export interface CategoryMeta {
  key: CategoryKey;
  label: string;
  description: string;
  emoji: string;
}

export interface LoadSummary {
  partner1Points: number;
  partner2Points: number;
  totalPoints: number;
  partner1Percent: number;
  partner2Percent: number;
  sharedCount: number;
  neitherCount: number;
  assignedCount: number;
}

// Display labels — swap these later for other partner types
export const PARTNER_LABELS: Record<'partner1' | 'partner2', string> = {
  partner1: 'Wife',
  partner2: 'Husband',
};
