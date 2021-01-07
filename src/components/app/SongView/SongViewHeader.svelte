<script>
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { leftArrowIcon, pencilIcon } from "../../ui/Icons/icons.js";
  import ButtonLink from "../../ui/Button/ButtonLink.svelte";
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
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    border: 0.25rem solid var(--primaryContrast);
    overflow: hidden;
  }
  .start,
  .end {
    margin-top: 1rem;
  }

  .start :global(.link a) {
    padding: 0.5rem;
  }

  .end {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 0.25em;
  }
</style>

<header>
  <div class="start" in:fade={{ delay: animationDelay + 50 }}>
    <ButtonLink to="/">
      <Icon path={leftArrowIcon} size="1.1rem" />
      <VisuallyHidden>back to songs</VisuallyHidden>
    </ButtonLink>
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
      <ButtonLink to="/song/{id}/edit">
        <Icon path={pencilIcon} size="1.1rem" />
        <VisuallyHidden>Edit song</VisuallyHidden>
      </ButtonLink>
    </div>
  </div>
</header>
