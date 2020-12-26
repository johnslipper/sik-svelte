<script>
  import { fade } from "svelte/transition";
  import SongsListItem from "./SongsListItem.svelte";
  export let songs = [];
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>

<ul>
  {#each songs as song}
    <li in:fade>
      <SongsListItem
        id={song.id}
        title={song.title}
        artist={song.artist}
        album={song.album}
        artwork={song.artwork} />
    </li>
  {/each}
</ul>
