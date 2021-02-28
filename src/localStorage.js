const chordStorageKey = "sikRecentChords";
const chordsLimit = 5;

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, item) {
  return localStorage.setItem(key, JSON.stringify(item));
}

function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}

export function getChords() {
  return getLocalStorage(chordStorageKey);
}

export function addChord(chord) {
  let chords = getChords() || [];
  const existingChord = chords.find((storedChord) => {
    return (
      storedChord.frets === chord.frets &&
      storedChord.fingering === chord.fingering
    );
  });
  if (!existingChord) {
    chords.push(chord);
  }
  console.log(chords.length > chordsLimit);
  if (chords.length > chordsLimit) {
    chords = chords.slice(1, chords.length);
  }
  setLocalStorage(chordStorageKey, chords);
}

export function clearChords() {
  removeLocalStorage(chordStorageKey);
}
