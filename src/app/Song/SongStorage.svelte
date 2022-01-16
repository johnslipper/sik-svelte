<script lang="ts" context="module">
  import { persist, indexedDBStorage } from "@macfja/svelte-persistent-store";
  import { writable } from "svelte/store";
  import type { Song } from "./index";

  const songs = persist(writable([]), indexedDBStorage(), "songs");

  export const songStorageContext = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";

  function getSong(id: number) {
    return $songs.find((song) => song.id === id);
  }

  function addSong(song: Song) {
    const newSong = { ...song, id: $songs.length + 1 };
    songs.update((songs: Song[]) => {
      return [...songs, newSong];
    });
    return newSong;
  }

  function updateSong(song: Song) {
    return songs.update((songs: Song[]) => {
      const otherSongs = songs.filter(
        (currentSong) => currentSong.id !== song.id
      );
      return [...otherSongs, song];
    });
  }

  function removeSong({ id }: Song) {
    return songs.update((songs: Song[]) => {
      return songs.filter((song) => song.id !== id);
    });
  }

  function removeAllSongs() {
    return songs.set([]);
  }

  setContext(songStorageContext, {
    songs,
    getSong,
    addSong,
    updateSong,
    removeSong,
    removeAllSongs,
  });
</script>

<slot />
