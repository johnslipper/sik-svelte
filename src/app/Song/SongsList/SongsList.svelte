<script lang="ts">
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import type { Song } from "../index";
  export let songs: Song[] = [];
  export let registerFocus: Function;

  function calculateDelay(index: number, total = 200, offset = 75): number {
    return total - offset * index;
  }
</script>

<VisuallyHidden>
  <h1 use:registerFocus>Songs list</h1>
</VisuallyHidden>
<ul>
  {#each songs as song, i}
    <li
      in:fly={{
        x: -20,
        delay: calculateDelay(i),
        easing: backOut,
        duration: 750,
      }}
    >
      <SongsListItem {song} />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
</style>
