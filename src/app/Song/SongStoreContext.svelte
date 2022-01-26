<script lang="ts" context="module">
  import {
    persist,
    indexedDBStorage,
    type PersistentStore,
  } from "@macfja/svelte-persistent-store";
  import { writable } from "svelte/store";
  import type { Song } from "./index";

  interface SongStore<T> extends PersistentStore<T[]> {
    get(songs: T[], id: string): T;
    sortBy(songs: T[], sortAttribute: string);
    add(song: T): T;
    addBulk(newTs: T[]): void;
    modify(song: T): void;
    remove(song: T): void;
    clear(): void;
  }

  function sortSongsByAttribute(songs: Song[], attribute: string): Song[] {
    return songs.sort((a: Song, b: Song) => {
      const aLowerCase = a[attribute]?.toLocaleLowerCase();
      const bLowerCase = b[attribute]?.toLocaleLowerCase();
      if (aLowerCase < bLowerCase) {
        return -1;
      }
      if (aLowerCase > bLowerCase) {
        return 1;
      }
      return 0;
    });
  }

  function createSongStore() {
    const { subscribe, set, update } = writable([]);

    function get(songs: Song[], id: string): Song {
      return songs.find((song) => song.id === id);
    }

    function sortBy(songs: Song[], sortAttribute: string): Song[] {
      return sortSongsByAttribute(songs, sortAttribute);
    }

    function add(song: Song): Song {
      const newSong = { ...song, id: generateId() };
      update((songs: Song[]) => {
        return [...songs, newSong];
      });
      return newSong;
    }

    function addBulk(newSongs: Song[]): void {
      const processedSongs = newSongs.map(({ id, ...rest }: Song) => {
        return { ...rest, id: generateId() };
      });
      update((songs: Song[]) => [...songs, ...processedSongs]);
    }

    function modify(song: Song): Song {
      update((songs: Song[]) => {
        const otherSongs = songs.filter(
          (currentSong) => currentSong.id !== song.id
        );
        return [...otherSongs, song];
      });
      return song;
    }

    function remove({ id }: Song): void {
      update((songs: Song[]) => {
        return songs.filter((song) => song.id !== id);
      });
    }

    function clear(): void {
      set([]);
    }

    return {
      subscribe,
      set,
      update,
      get,
      sortBy,
      add,
      addBulk,
      modify,
      remove,
      clear,
    };
  }

  const songs = persist(
    createSongStore(),
    indexedDBStorage(),
    "songs"
  ) as SongStore<Song>;

  export const songStoreContext = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { generateId } from "../helpers";

  setContext(songStoreContext, {
    songs,
  });
</script>

<slot />
