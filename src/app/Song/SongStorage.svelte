<script lang="ts" context="module">
  import { persist, indexedDBStorage } from "@macfja/svelte-persistent-store";
  import { writable } from "svelte/store";
  import sampleSong from "./SongSample";

  const songs = persist(
    writable([{ ...sampleSong, id: 1 }]),
    indexedDBStorage(),
    "songs"
  );

  export const songStorageContext = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  setContext(songStorageContext, {
    songs,
    getSong: (id: number) => $songs.find((song) => song.id === id),
  });
</script>

<slot />
