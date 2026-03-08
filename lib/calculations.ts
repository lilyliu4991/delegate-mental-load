import { Task, LoadSummary } from '@/types';

export function calculateLoadSummary(tasks: Task[]): LoadSummary {
  let partner1Points = 0;
  let partner2Points = 0;
  let sharedCount = 0;
  let neitherCount = 0;
  let assignedCount = 0;

  for (const task of tasks) {
    switch (task.ownerStatus) {
      case 'partner1':
        partner1Points += 1;
        assignedCount += 1;
        break;
      case 'partner2':
        partner2Points += 1;
        assignedCount += 1;
        break;
      case 'both':
        partner1Points += 0.5;
        partner2Points += 0.5;
        sharedCount += 1;
        assignedCount += 1;
        break;
      case 'neither':
        neitherCount += 1;
        break;
    }
  }

  const totalPoints = partner1Points + partner2Points;
  const partner1Percent = totalPoints > 0 ? Math.round((partner1Points / totalPoints) * 100) : 50;
  const partner2Percent = totalPoints > 0 ? Math.round((partner2Points / totalPoints) * 100) : 50;

  return {
    partner1Points,
    partner2Points,
    totalPoints,
    partner1Percent,
    partner2Percent,
    sharedCount,
    neitherCount,
    assignedCount,
  };
}
