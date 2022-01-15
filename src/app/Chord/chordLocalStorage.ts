import type { Chord } from ".";

const chordStorageKey = "sikRecentChords";
const chordsLimit = 5;

function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key: string, item: object) {
  return localStorage.setItem(key, JSON.stringify(item));
}

function removeLocalStorage(key: string) {
  return localStorage.removeItem(key);
}

export function getChords() {
  return getLocalStorage(chordStorageKey);
}

export function addChord(chord: Chord) {
  let chords: Chord[] = getChords() || [];
  const existingChord = chords.find((storedChord: Chord) => {
    return (
      storedChord.frets === chord.frets &&
      storedChord.fingering === chord.fingering
    );
  });
  if (!existingChord) {
    chords.push(chord);
  }
  if (chords.length > chordsLimit) {
    chords = chords.slice(1, chords.length);
  }
  setLocalStorage(chordStorageKey, chords);
}

export function clearChords() {
  removeLocalStorage(chordStorageKey);
}
