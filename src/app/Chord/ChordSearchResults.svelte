<script lang="ts">
  import ChordView from "./ChordView.svelte";
  import { Button } from "ui/Button";
  import type { Chord } from "./index";
  export let results: Chord[];
  export let onSelect: (chord: Chord) => void;
</script>

<ul>
  {#each results as chord}
    <li>
      <Button on:click={() => onSelect(chord)}>
        <ChordView {chord} />
      </Button>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(auto-fit, 9rem);
  }
  li {
    display: flex;
  }
  li :global(button) {
    display: block;
    width: 100%;
  }
</style>
