<script>
  import { blur } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let lyrics;
  function nl2br(text) {
    return text.replaceAll("\n", "<br>");
  }

  $: formattedLyrics = nl2br(lyrics);
</script>

<style>
  .lyrics {
    color: var(--neutralDark);
    line-height: 1.2;
  }

  .empty {
    color: var(--neutralMedium);
  }
</style>

<section in:blur={{ delay: 150 }}>
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
