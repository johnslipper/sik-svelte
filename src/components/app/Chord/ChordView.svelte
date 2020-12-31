<script>
  import ChordVisualised from "./ChordVisualised.svelte";
  export let chord;
  export let tuning = "";
  export let key;
</script>

<style>
  .name,
  .nameOnly {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .nameOnly {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: var(--contentPaddingHorizontal);
  }
  .visualised {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>

{#if chord.fingering && chord.frets}
  <div class="visualised">
    <ChordVisualised
      fingering={chord.fingering}
      frets={chord.frets}
      position={chord.position}
      {key}
      {tuning} />
  </div>
  {#if chord.name}
    <div class="name">{chord.name}</div>
  {/if}
{:else}
  <div class="nameOnly">{chord.name}</div>
{/if}
