<script>
  import { getContext } from "svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import SongEditChord from "./SongEditChord.svelte";
  import ChordEdit from "../Chord/ChordEdit.svelte";
  import { Input, FormGroup, Label } from "../../ui/Form";
  import { Button, ButtonDefault } from "../../ui/Button";
  export let chordSection;
  export let tuning;
  export let key;
  export let onRemove;

  const { open, close } = getContext("simple-modal");

  const openChordModal = (chord) => {
    open(ChordEdit, {
      chord,
      tuning,
      onSave: handleSaveChord,
      onCancel: () => close(),
    });
  };

  function handleRemoveChord(chordSection, chord) {
    // TODO: Not working
    chordSection = {
      ...chordSection,
      chords: chordSection.chords.filter((c) => c !== chord),
    };
  }

  function handleEditChord(chord) {
    openChordModal(chord);
  }

  function handlePlayChord(chord) {
    // TODO
  }

  function handleSaveChord(chord) {
    // TODO
    close();
  }
</script>

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

<div class="wrapper">
  <div class="title">
    <FormGroup>
      <Label htmlFor="chordSectionTitle{key}">Title</Label>
      <Input id="chordSectionTitle{key}" bind:value={chordSection.title} />
    </FormGroup>
    <ButtonDefault on:click={() => onRemove(chordSection)}>
      Remove
    </ButtonDefault>
  </div>
  <ul class="chords">
    {#if chordSection.chords}
      {#each chordSection.chords as chord}
        <li>
          <SongEditChord
            {chordSection}
            {tuning}
            {chord}
            onEdit={handleEditChord}
            onRemove={handleRemoveChord}
            onPlay={handlePlayChord} />
        </li>
      {/each}
    {/if}
    <li class="add">
      <Button on:click={() => openChordModal()}>
        <AddArea text="Add chord" />
      </Button>
    </li>
  </ul>
</div>
