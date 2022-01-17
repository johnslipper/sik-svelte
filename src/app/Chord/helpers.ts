import type { ChordEntry } from "./index";

export const notes = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
];

const standardTuningNoteIndexes = [7, 0, 5, 10, 2, 7];

export const standardTuningOffsets = standardTuningNoteIndexes.map(
  (notePosition) => getOffsetsForString(notePosition, notes)
);

export function getNotesFromOffsets(stringOffsets: number[]) {
  return stringOffsets.map((offset: number, index: number) => {
    const matchedOffset = standardTuningOffsets[index].find(
      (string) => string.offset === offset
    );
    return matchedOffset ? matchedOffset.note : undefined;
  });
}

// Generate name/value pairs for string note offsets
function getOffsetsForString(start: number, notes: string[], startOffset = -5) {
  const string = [];
  for (let index = 0; index <= 10; index++) {
    const offset = index - 5;
    const current = start + startOffset + index;
    let noteIndex: number;
    if (current >= notes.length) {
      noteIndex = current - notes.length;
    } else if (current < 0) {
      noteIndex = notes.length + current;
    } else {
      noteIndex = current;
    }
    string.push({
      note: notes[noteIndex],
      offset,
    });
  }
  return string;
}

// Chord frets and fingering string to number array and "x"
export function chordEntriesToArray(entries: string): ChordEntry[] {
  return entries.split(" ").map((entry: string) => {
    if (entry === "X") {
      return entry.toLowerCase();
    }
    return Number(entry);
  });
}

// Chord frets and fingering array to space-separated strings and "X"
export function chordEntriesToString(entries: ChordEntry[]): string {
  return entries
    .map((entry) => {
      if (entry === "x") {
        return entry.toUpperCase();
      }
      return entry.toString();
    })
    .join(" ");
}
