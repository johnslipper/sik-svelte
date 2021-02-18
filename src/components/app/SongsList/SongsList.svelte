<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  export let songs;
</script>

<ul>
  {#each songs as song, i}
    <li in:fly={{ x: -20, delay: i * 75, easing: backOut, duration: 750 }}>
      <SongsListItem
        id={song.id}
        title={song.title}
        artist={song.artist}
        album={song.album}
        artwork={song.artwork}
      />
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
