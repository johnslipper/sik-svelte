<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  import PlaceholderItem from "./PlaceholderItem.svelte";
  export let songs;

  let placeholderCount = 10;
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .placeholders {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - var(--headerTopOffset));
    overflow: hidden;
  }
</style>

{#if songs}
  <ul>
    {#each songs as song, i}
      <li in:fly={{ x: -20, delay: i * 75, easing: backOut, duration: 750 }}>
        <SongsListItem
          id={song.id}
          title={song.title}
          artist={song.artist}
          album={song.album}
          artwork={song.artwork} />
      </li>
    {/each}
  </ul>
{:else}
  <div class="placeholders">
    {#each Array(placeholderCount) as _placeholder}
      <PlaceholderItem />
    {/each}
  </div>
{/if}
