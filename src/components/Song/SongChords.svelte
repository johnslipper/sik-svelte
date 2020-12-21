<script>
  import { blur } from "svelte/transition";
  export let chords;
</script>

<style>
  h3 {
    margin-bottom: 0.5rem;
  }
  .section {
    margin-bottom: 1rem;
    color: var(--neutralMedium);
  }
</style>

<section in:blur={{ delay: 150 }}>
  <h2 class="visually-hidden">Chords</h2>
  {#if chords}
    {#each chords as section}
      <h3>{section.title}</h3>
      {#if section.chords}
        <div class="section">{section.chords}</div>
      {/if}

      {#if section.chordList}
        {#each section.chordList as list}
          <div class="section">{list}</div>
        {/each}
      {/if}
    {/each}
  {:else}
    <div class="section">No chords saved</div>
  {/if}
</section>
