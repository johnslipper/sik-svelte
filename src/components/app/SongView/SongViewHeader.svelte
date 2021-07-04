<script>
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { leftArrowIcon, pencilIcon } from "../../ui/Icons/icons.js";
  import ButtonLink from "../../ui/Button/ButtonLink.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  export let id;
  export let title;
  export let artist;
  export let album;
  export let artwork;
  let animationDelay = 250;
</script>

<header>
  <div class="content">
    <div class="start" in:fade={{ delay: animationDelay + 50 }}>
      <ButtonLink to="/songs">
        <Icon path={leftArrowIcon} size="1.1rem" />
        <VisuallyHidden>back to songs</VisuallyHidden>
      </ButtonLink>
    </div>
    <div class="wrapper">
      <div
        class="artwork"
        in:fly={{
          delay: animationDelay,
          duration: 300,
          x: -100,
          easing: backOut,
        }}
      >
        <ArtworkView {album} {artwork} />
      </div>
      <div
        class="text"
        in:fly={{
          delay: animationDelay + 250,
          duration: 200,
          x: 50,
          easing: backOut,
        }}
      >
        <Heading>
          {#if title}
            <div class="title">{title}</div>
          {/if}
          {#if artist}
            <div class="artist">{artist}</div>
          {/if}
          {#if album}
            <div class="album">{album}</div>
          {/if}
        </Heading>
      </div>
    </div>
    <div class="end" in:fade={{ delay: animationDelay + 50 }}>
      <ButtonLink to="/songs/{id}/edit">
        <Icon path={pencilIcon} size="1.1rem" />
        <VisuallyHidden>Edit song</VisuallyHidden>
      </ButtonLink>
    </div>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 1rem 0.5rem;
    background-color: var(--primaryDark);
    color: var(--primaryContrast);
  }
  .content {
    display: flex;
    align-items: center;
  }
  .wrapper {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 5rem 1fr;
    margin-bottom: -2.5rem;
    margin-top: -1rem;
  }
  .text {
    padding-top: 0.25rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .title,
  .artist,
  .album {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .title {
    font-size: 0.85em;
  }
  .artist {
    font-size: 0.75em;
    text-transform: uppercase;
  }
  .album {
    font-size: 0.75em;
    font-style: italic;
  }
  .artwork {
    z-index: 1;
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 50%;
    border: 0.25rem solid var(--primaryContrast);
  }

  .start :global(.link a) {
    padding: 0.5rem;
  }

  .end {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
</style>
