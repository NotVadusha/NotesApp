import INote from "src/common/interfaces/INote";

interface statsInterface {
  [key: string]: { archived: number; active: number };
}

export async function getStats(notes: INote[]) {
  const stats: statsInterface = {};
  notes.forEach((note) => {
    if (Object.keys(stats).includes(`${note.category}`)) return;
    stats[note.category] = { archived: 0, active: 0 };
  });

  notes.forEach((note) => {
    note.is_archived
      ? stats[note.category].archived++
      : stats[note.category].active++;
  });

  return stats;
}
