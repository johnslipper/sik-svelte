import { readable } from "svelte/store";

async function fetchSongs() {
  const res = await fetch("/songs.json");
  if (!res.ok) throw new Error("Bad response fetching songs");
  return await res.json();
}

export const songs = readable(null, (set) => {
  // called when the store is first subscribed
  fetchSongs()
    .then(set)
    .catch((err) => {
      console.error("Failed to fetch songs:", err);
    });
  return () => {
    // you can do cleanup here if needed
  };
});
