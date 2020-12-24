<script>
  import { blur } from "svelte/transition";
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
  <h2 class="visually-hidden">Lyrics</h2>
  <div class="lyrics">
    {#if lyrics}
      {@html formattedLyrics}
    {:else}
      <div class="empty">No lyrics saved</div>
    {/if}
  </div>
</section>
