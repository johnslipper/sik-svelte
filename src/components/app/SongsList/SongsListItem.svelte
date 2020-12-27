<script>
  import { Link } from "svelte-routing";
  import { fly, fade } from "svelte/transition";
  import AlbumArtwork from "../AlbumArtwork/AlbumArtwork.svelte";
  export let id;
  export let title;
  export let artist;
  export let album;
  export let artwork;

  let selected = false;

  const transitionOut = (node, args) => {
    const duration = 150;
    return selected
      ? fly(node, { duration, ...args })
      : fade(node, { duration });
  };

  function handleClick() {
    selected = true;
  }
</script>

<style>
  .list-item {
    position: relative;
    box-sizing: border-box;
    font-size: 1rem;
    color: var(--neutralDark);
    line-height: 1.3;
  }
  .list-item:after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--neutralLightest);
  }
  .list-item > :global(a) {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    transition: background-color 150ms;
  }
  .list-item > :global(a):focus {
    background-color: var(--neutralLightest);
  }
  .artwork {
    height: 3.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .artist {
    font-size: 0.75em;
    text-transform: uppercase;
    color: var(--neutralMedium);
  }
  .album {
    margin-top: 0.25em;
    font-size: 0.75em;
    color: var(--neutralDark);
    font-style: italic;
  }
</style>

<div class="list-item">
  <Link to="/song/{id}" on:click={handleClick}>
    <div class="artwork" out:transitionOut={{ x: -50 }}>
      <AlbumArtwork {album} {artwork} />
    </div>

    <div class="text" out:transitionOut={{ x: 100 }}>
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
  </Link>
</div>
