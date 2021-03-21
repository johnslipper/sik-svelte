// Chord frets and fingering string to number array and "x"
export function chordEntriesToArray(entries) {
  return entries.split(" ").map((entry) => {
    if (entry === "X") {
      return entry.toLowerCase();
    }
    return parseInt(entry);
  });
}

// Chord frets and fingering array to space-separated strings and "X"
export function chordEntriesToString(entries) {
  return entries
    .map((entry) => {
      if (entry === "x") {
        return entry.toUpperCase();
      }
      return entry.toString();
    })
    .join(" ");
}
