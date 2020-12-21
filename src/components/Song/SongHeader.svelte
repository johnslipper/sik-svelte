<script>
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import BackLink from "./BackLink.svelte";
  import AlbumArtwork from "../AlbumArtwork.svelte";
  export let title;
  export let artist;
  export let album;
  export let artwork;
  let animationDelay = 250;
</script>

<style>
  header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 0.5rem 0.5rem 1.5rem;
    margin-bottom: 1.5rem;
    background-color: var(--primary);
    color: var(--neutralLightest);
  }
  .wrapper {
    display: flex;
    gap: 0.75rem;
    margin-bottom: -2.5rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }
  .artist {
    font-size: 0.75em;
    text-transform: uppercase;
  }
  .album {
    margin-top: 0.25em;
    font-size: 0.75em;
    font-style: italic;
  }
  .artwork {
    z-index: 1;
    height: 5.5rem;
    border-radius: 50%;
    border: 0.25rem solid var(--neutralLightest);
    overflow: hidden;
  }
  .back {
    margin-top: 1rem;
  }
</style>

<header>
  <div class="back" in:fade={{ delay: animationDelay + 50 }}>
    <BackLink />
  </div>
  <div class="wrapper">
    <div
      class="artwork"
      in:fly={{ delay: animationDelay, duration: 300, x: -100, easing: backOut }}>
      <AlbumArtwork {album} {artwork} />
    </div>
    <div
      class="text"
      in:fly={{ delay: animationDelay + 250, duration: 200, x: 50, easing: backOut }}
      out:fade>
      {#if title}
        <div class="title">{title}</div>
      {/if}
      {#if artist}
        <div class="artist">{artist}</div>
      {/if}
      {#if album}
        <div class="album">{album}</div>
      {/if}
    </div>
  </div>
</header>
