<script lang="ts">
  import { chordEntriesToArray, getNotesFromOffsets } from "./helpers";
  import ChordVisualised from "./ChordVisualised.svelte";
  import type { Chord } from "./index";
  export let chord: Chord;
  export let stringOffsets: number[] = undefined;
  let fingeringArray = chordEntriesToArray(chord.fingering);
  let fretsArray = chordEntriesToArray(chord.frets);
  $: tuning = stringOffsets ? getNotesFromOffsets(stringOffsets) : undefined;
</script>

{#if fingeringArray && fretsArray}
  <div class="visualised">
    <ChordVisualised
      fingering={fingeringArray}
      frets={fretsArray}
      position={chord.position}
      {tuning}
    />
  </div>
  {#if chord.name}
    <div class="name">{chord.name}</div>
  {/if}
{:else}
  <div class="nameOnly">{chord.name}</div>
{/if}

<style>
  .name,
  .nameOnly {
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: initial;
  }
  .name {
    margin-bottom: 0.5em;
  }
  .nameOnly {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 2rem var(--contentPaddingHorizontal);
  }
  .visualised {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
