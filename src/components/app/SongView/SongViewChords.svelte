<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
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

<section in:fade={{ delay: 150 }}>
  <VisuallyHidden>
    <h2>Chords</h2>
  </VisuallyHidden>
  {#if chords}
    {#each chords as section}
      <h3>{section.title}</h3>
      {#if section.chords}
        <div class="section">
          {#each section.chords as chord}
            <div class="chord">
              {#if chord.name}
                <div class="name">{chord.name}</div>
              {/if}
              {#if chord.voicing}
                <div class="name">{chord.voicing}</div>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  {:else}
    <div class="section">No chords saved</div>
  {/if}
</section>
