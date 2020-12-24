<script>
  import { fade } from "svelte/transition";
  import SongsListItem from "./SongsListItem.svelte";
  export let songs = [];
</script>

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
