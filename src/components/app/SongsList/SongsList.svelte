<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  export let songs;
</script>

{#if songs}
  {#if songs.length}
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
  {:else}
    <p class="empty">
      No songs currently saved. Use the plus button to get started
    </p>
  {/if}
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .empty {
    padding: 0 var(--contentPaddingHorizontal);
    color: var(--bodyColorMuted);
  }
</style>
