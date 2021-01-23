<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let lyrics;
  function nl2br(text) {
    return text.replaceAll("\n", "<br>");
  }

  $: formattedLyrics = lyrics ? nl2br(lyrics) : "";
</script>

<section class="wrapper" in:fade={{ delay: 150 }}>
  <VisuallyHidden>
    <h2>Lyrics</h2>
  </VisuallyHidden>
  <div class="lyrics">
    {#if lyrics}
      {@html formattedLyrics}
    {:else}
      <div class="empty">No lyrics saved</div>
    {/if}
  </div>
</section>

<style>
  .lyrics {
    color: var(--neutralDark);
    line-height: 1.2;
  }

  .wrapper {
    padding: var(--contentPaddingHorizontal);
  }

  .empty {
    color: var(--bodyColorMuted);
  }
</style>
