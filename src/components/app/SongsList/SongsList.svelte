<script>
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import SongsListItem from "./SongsListItem.svelte";
  import LogoMark from "../Logo/LogoMark.svelte";
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
    <div class="empty">
      <div class="logo">
        <LogoMark />
      </div>
      <p>
        No songs currently saved. <br />Use the plus button to get started.
      </p>
    </div>
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 0 var(--contentPaddingHorizontal);
  }
  .logo {
    opacity: 0.25;
    padding: 1rem 0;
    max-width: 10rem;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    color: var(--bodyColorMuted);
    text-align: center;
  }
</style>
