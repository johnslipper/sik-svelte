<script>
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import SongEditChordSections from "./SongEditChordSections.svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import { Button } from "../../ui/Button";
  export let chordSections = [];
  export let stringOffsets;
  export let capoAdjustment;

  const { open } = getContext("simple-modal");

  function handleAddSection() {
    chordSections = chordSections || [];
    chordSections = [
      ...chordSections,
      {
        title: "",
        chords: [],
      },
    ];
    window.setTimeout(
      () => document.querySelector("#endOfChordSections").scrollIntoView(),
      50
    );
  }

  function handleRemoveSection(chordSection) {
    if (chordSection.chords && chordSection.chords.length) {
      open(Dialogue, {
        message: "Are you sure you want to remove this chordSection of chords?",
        onOkay: () => removeSection(chordSection),
      });
    } else {
      removeSection(chordSection);
    }
  }

  function removeSection(chordSection) {
    chordSections = chordSections.filter((s) => s !== chordSection);
  }
</script>

{#if chordSections && chordSections.length}
  {#each chordSections as chordSection, i}
    <div class="chordSection" in:fade={{ delay: i * 50 }}>
      <SongEditChordSections
        bind:chordSection
        {stringOffsets}
        {capoAdjustment}
        key={i}
        onRemove={handleRemoveSection}
      />
    </div>
  {/each}
  <div id="endOfChordSections" />
{:else}
  <div class="wrapper">
    <p class="empty">No sections saved</p>
  </div>
{/if}
<div class="add">
  <div class="wrapper">
    <Button variant="default" on:click={handleAddSection}>Add section</Button>
  </div>
</div>

<style>
  .wrapper {
    padding: 1rem;
  }
  .chordSection {
    border-bottom: 1px solid var(--neutralLightest);
  }
  .add {
    position: sticky;
    bottom: 0;
    text-align: center;
    background-color: var(--neutralLightest);
  }
  .empty {
    text-align: center;
    color: var(--bodyColorMuted);
  }
</style>
