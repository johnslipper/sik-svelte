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

  function handleRemoveSection(section) {
    if (section.chords && section.chords.length) {
      open(Dialogue, {
        message: "Are you sure you want to remove this section of chords?",
        onOkay: () => removeSection(section),
      });
    } else {
      removeSection(section);
    }
  }

  function removeSection(section) {
    chordSections = chordSections.filter((s) => s !== section);
  }
</script>

<style>
  .wrapper {
    padding: 1rem;
  }
  .sections {
    display: grid;
    gap: 0.5rem;
  }
  .section {
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
  {#each chordSections as section, i}
    <div class="sections">
      <div class="section">
        <SongEditChordSections
          {section}
          {tuning}
          key={i}
          onRemoved={handleRemoveSection} />
      </div>
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
