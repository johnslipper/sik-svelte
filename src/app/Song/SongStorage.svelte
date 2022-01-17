<script lang="ts" context="module">
  import {
    persist,
    indexedDBStorage,
    PersistentStore,
  } from "@macfja/svelte-persistent-store";
  import { writable } from "svelte/store";
  import { generateId } from "../helpers";
  import type { Song } from "./index";

  const songs = persist(writable([]), indexedDBStorage(), "songs");

  export const songStorageContext = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";

  async function getSong(id: string): Promise<Song> {
    const promise = Promise;
    return promise.resolve($songs.find((song) => song.id === id));
  }

  async function addSong(song: Song) {
    const promise = Promise;
    const newSong = { ...song, id: generateId() };
    songs.update((songs: Song[]) => {
      return [...songs, newSong];
    });
    return promise.resolve(newSong);
  }

  async function addSongs(newSongs: Song[]): Promise<void> {
    const promise = Promise;
    const processedSongs = newSongs.map(({ id, ...rest }: Song) => {
      return { ...rest, id: generateId() };
    });
    songs.update((songs: Song[]) => [...songs, ...processedSongs]);
    return promise.resolve();
  }

  async function updateSong(song: Song): Promise<Song> {
    const promise = Promise;
    songs.update((songs: Song[]) => {
      const otherSongs = songs.filter(
        (currentSong) => currentSong.id !== song.id
      );
      return [...otherSongs, song];
    });
    return promise.resolve(song);
  }

  async function removeSong({ id }: Song): Promise<void> {
    const promise = Promise;
    songs.update((songs: Song[]) => {
      return songs.filter((song) => song.id !== id);
    });
    return promise.resolve();
  }

  async function removeAllSongs(): Promise<void> {
    const promise = Promise;
    songs.set([]);
    return promise.resolve();
  }

  setContext(songStorageContext, {
    songs,
    getSong,
    addSong,
    addSongs,
    updateSong,
    removeSong,
    removeAllSongs,
  });
</script>

<slot />
