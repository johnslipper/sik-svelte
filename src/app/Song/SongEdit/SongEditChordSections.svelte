<script lang="ts">
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import AddArea from "ui/AddArea.svelte";
  import SongEditChord from "./SongEditChord.svelte";
  import ChordEdit from "../../Chord/ChordEdit.svelte";
  import { Input, FormGroup, LabelDefault } from "ui/Form";
  import { Button } from "ui/Button";
  import type { Chord, ChordSection } from "../../Chord/index";
  export let chordSection: ChordSection;
  export let stringOffsets: number[];
  export let capoAdjustment: number;
  export let key: number;
  export let onRemove: (chordSection: ChordSection) => void;

  const { open, close } = getContext("simple-modal");

  const addChordModal = () => {
    open(ChordEdit, {
      stringOffsets,
      capoAdjustment,
      onSave: (chord: Chord) => {
        chordSection.chords = [...chordSection.chords, chord];
        close();
      },
      onCancel: () => close(),
    });
  };

  const editChordModal = (chord: Chord) => {
    open(ChordEdit, {
      chord,
      stringOffsets,
      capoAdjustment,
      onSave: (chord: Chord) => {
        chordSection.chords[chordSection.chords.indexOf(chord)] = chord;
        close();
      },
      onCancel: () => close(),
    });
  };

  function handleRemoveChord(chord: Chord) {
    chordSection.chords = chordSection.chords.filter((c) => c !== chord);
  }

  function handleEditChord(chord: Chord) {
    editChordModal(chord);
  }
</script>

<div class="wrapper">
  <div class="title">
    <FormGroup>
      <LabelDefault htmlFor="chordSectionTitle{key}">Title</LabelDefault>
      <Input id="chordSectionTitle{key}" bind:value={chordSection.title} />
    </FormGroup>
    <Button variant="default" on:click={() => onRemove(chordSection)}>
      Remove
    </Button>
  </div>
  <ul class="chords">
    {#if chordSection.chords}
      {#each chordSection.chords as chord, i}
        <li class="chord" in:fade={{ delay: i * 100 }}>
          <SongEditChord
            {stringOffsets}
            {capoAdjustment}
            {chord}
            onEdit={handleEditChord}
            onRemove={handleRemoveChord}
          />
        </li>
      {/each}
    {/if}
    <li class="add">
      <Button on:click={() => addChordModal()}>
        <AddArea text="Add chord" />
      </Button>
    </li>
  </ul>
</div>

<style>
  .wrapper {
    padding: 1rem;
  }
  .title {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.25rem;
    align-items: flex-end;
  }
  .chords {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 0.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
    list-style: none;
    padding: var(--contentPaddingHorizontal);
    color: var(--neutralMedium);
  }
  .chord,
  .add {
    max-width: 10rem;
  }
  .add {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .add :global(button) {
    width: 100%;
    height: 7rem;
    font-size: 0.85rem;
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>
