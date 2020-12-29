<script>
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import HomeLink from "../Links/HomeLink.svelte";
  import SongEditLink from "../Links/SongEditLink.svelte";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
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
    color: var(--primaryContrast);
  }
  .wrapper {
    display: flex;
    gap: 0.75rem;
    margin-bottom: -2.5rem;
    width: 100%;
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
    border: 0.25rem solid var(--primaryContrast);
    overflow: hidden;
  }
  .start {
    margin-top: 1rem;
  }

  .end {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
</style>

<header>
  <div class="start" in:fade={{ delay: animationDelay + 50 }}>
    <HomeLink>
      <VisuallyHidden>back to songs</VisuallyHidden>
    </HomeLink>
  </div>
  <div class="wrapper">
    <div
      class="artwork"
      in:fly={{ delay: animationDelay, duration: 300, x: -100, easing: backOut }}>
      <ArtworkView {album} {artwork} />
    </div>
    <div
      class="text"
      in:fly={{ delay: animationDelay + 250, duration: 200, x: 50, easing: backOut }}>
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
    <div class="end" in:fade={{ delay: animationDelay + 50 }}>
      <SongEditLink {id}>
        <span>Edit</span>
        <VisuallyHidden>song</VisuallyHidden>
      </SongEditLink>
    </div>
  </div>
</header>
