<script lang="ts">
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import type { Song } from "../index";
  export let songs: Song[] = [];
  export let registerFocus: Function;
</script>

<VisuallyHidden>
  <h1 use:registerFocus>Songs list</h1>
</VisuallyHidden>
<ul>
  {#each songs as song, i}
    <li in:fly={{ x: -20, delay: i * 75, easing: backOut, duration: 750 }}>
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
