<script>
  import ChordView from "../Chord/ChordView.svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import { Input, FormGroup, Label } from "../../ui/Form";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button, ButtonDefault } from "../../ui/Button";
  import { crossIcon, pencilIcon, speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  export let section;
  export let tuning;
  export let key;
  export let onRemoved;

  function handleRemoveChord(chords, chord) {
    // TODO: Not working
    chords = chords.filter((c) => c !== chord);
  }

  function handleEditChord(chord) {
    // TODO
  }

  function handleHearChord(chord) {
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
  .chord {
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
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

  .actions {
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--neutralLightest);
    border-radius: 0.25rem;
  }

  .chord:hover .actions,
  .chord:focus .actions {
    visibility: visible;
  }

  .actions :global(button) {
    display: grid;
    gap: 0.5rem;
    justify-items: center;
    padding: 1rem;
  }
  .danger {
    color: var(--danger);
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
        <li class="chord" tabindex="0">
          <ChordView {chord} {tuning} key="songEditChord{i}" />
          <div class="actions" aria-labelledby="chordActionsMenu">
            <VisuallyHidden>
              <div id="chordActionsMenu">Chord actions</div>
            </VisuallyHidden>
            <Button on:click={() => handleEditChord(chord)}>
              <Icon d={pencilIcon} size="2rem" />
              <div>Edit chord</div>
            </Button>
            <Button on:click={() => handleHearChord(chord)}>
              <Icon d={speakerIcon} size="2rem" />
              <div>Hear chord</div>
            </Button>
            <div class="danger">
              <Button on:click={() => handleRemoveChord(section.chords, chord)}>
                <Icon d={crossIcon} size="2rem" />
                <div>Remove chord</div>
              </Button>
            </div>
          </div>
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
