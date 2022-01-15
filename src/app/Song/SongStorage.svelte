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
    return songs.update((songs: Song[]) => {
      const id = songs.length + 1;
      return [...songs, { ...song, id }];
    });
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

  setContext(songStorageContext, {
    songs,
    getSong,
    addSong,
    updateSong,
    removeSong,
  });
</script>

<slot />
