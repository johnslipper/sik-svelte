<script>
  import { getContext } from "svelte";
  import SongEditChordSections from "./SongEditChordSections.svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import { ButtonDefault } from "../../ui/Button";
  export let chordSections = [];
  export let tuning = "";

  const { open, close } = getContext("simple-modal");

  const openSearchModal = () => {
    open(
      ArtworkSearch,
      {
        queryInput: getInputQuery(song),
        onSelected: handleSelected,
      },
      {
        styleContent: { padding: 0, borderRadius: "0.5rem" },
      }
    );
  };

  function handleAddSection() {
    chordSections = chordSections || [];
    chordSections = [
      ...chordSections,
      {
        title: "",
        chords: [],
      },
    ];
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
</style>

{#if chordSections && chordSections.length}
  {#each chordSections as chordSection, i}
    <div class="chordSection">
      <SongEditChordSections
        {chordSection}
        {tuning}
        key={i}
        onRemove={handleRemoveSection} />
    </div>
  {/each}
{:else}
  <p class="wrapper">No sections saved</p>
{/if}
<div class="add">
  <div class="wrapper">
    <ButtonDefault on:click={handleAddSection}>Add section</ButtonDefault>
  </div>
</div>
