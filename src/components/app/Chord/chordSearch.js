export async function chordSearch(chord) {
  if (!chord) {
    return;
  }
  const url = `https://api.uberchord.com/v1/chords?nameLike=${chord}`;

  return fetch(url).then(
    (res) => res.json(),
    (err) => alert("Error searching for chord: " + err)
  );
}
