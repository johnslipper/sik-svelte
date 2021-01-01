<script>
  import ChordView from "../Chord/ChordView.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { crossIcon, pencilIcon, speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { Button } from "../../ui/Button";
  export let chord;
  export let section;
  export let tuning;
  export let key;
  export let onEdit;
  export let onRemove;
  export let onPlay;
</script>

<style>
  .chord {
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
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

<div class="chord">
  <ChordView {chord} {tuning} {key} />
  <div class="actions" aria-labelledby="chordActionsMenu">
    <VisuallyHidden>
      <div id="chordActionsMenu">Chord actions</div>
    </VisuallyHidden>
    <Button on:click={() => onEdit(chord)}>
      <Icon d={pencilIcon} size="2rem" />
      <div>Edit chord</div>
    </Button>
    <Button on:click={() => onPlay(chord)}>
      <Icon d={speakerIcon} size="2rem" />
      <div>Hear chord</div>
    </Button>
    <div class="danger">
      <Button on:click={() => onRemove(section, chord)}>
        <Icon d={crossIcon} size="2rem" />
        <div>Remove chord</div>
      </Button>
    </div>
  </div>
</div>
