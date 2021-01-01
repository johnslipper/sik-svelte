<script>
  import AddArea from "../../ui/AddArea.svelte";
  import SongEditChord from "./SongEditChord.svelte";
  import { Input, FormGroup, Label } from "../../ui/Form";
  import { Button, ButtonDefault } from "../../ui/Button";
  export let section;
  export let tuning;
  export let key;
  export let onRemoved;

  function handleRemoveChord(section, chord) {
    // TODO: Not working
    section = {
      ...section,
      chords: section.chords.filter((c) => c !== chord),
    };
  }

  function handleEditChord(chord) {
    // TODO
  }

  function handlePlayChord(chord) {
    // TODO
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
      <Label htmlFor="sectionTitle{key}">Title</Label>
      <Input id="sectionTitle{key}" bind:value={section.title} />
    </FormGroup>
    <ButtonDefault on:click={() => onRemoved(section)}>Remove</ButtonDefault>
  </div>
  <ul class="chords">
    {#if section.chords}
      {#each section.chords as chord, i}
        <li>
          <SongEditChord
            key="songEditChord{i}"
            {section}
            {tuning}
            {chord}
            onEdit={handleEditChord}
            onRemove={handleRemoveChord}
            onPlay={handlePlayChord} />
        </li>
      {/each}
    {/if}
    <li class="add">
      <Button>
        <AddArea text="Add chord" />
      </Button>
    </li>
  </ul>
</div>
