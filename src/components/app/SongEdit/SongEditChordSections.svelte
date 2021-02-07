<script>
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import AddArea from "../../ui/AddArea.svelte";
  import SongEditChord from "./SongEditChord.svelte";
  import ChordEdit from "../Chord/ChordEdit.svelte";
  import { Input, FormGroup, LabelDefault } from "../../ui/Form";
  import { Button } from "../../ui/Button";
  export let chordSection;
  export let tuning;
  export let capoAdjustment;
  export let key;
  export let onRemove;

  const { open, close } = getContext("simple-modal");

  const addChordModal = () => {
    open(ChordEdit, {
      tuning,
      capoAdjustment,
      onSave: (chord) => {
        chordSection.chords = [...chordSection.chords, chord];
        close();
      },
      onCancel: () => close(),
    });
  };

  const editChordModal = (chord) => {
    open(ChordEdit, {
      chord,
      tuning,
      capoAdjustment,
      onSave: (chord) => {
        chordSection.chords[chordSection.chords.indexOf(chord)] = chord;
        close();
      },
      onCancel: () => close(),
    });
  };

  function handleRemoveChord(chord) {
    chordSection.chords = chordSection.chords.filter((c) => c !== chord);
  }

  function handleEditChord(chord) {
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
        <li in:fade={{ delay: i * 100 }}>
          <SongEditChord
            {tuning}
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
