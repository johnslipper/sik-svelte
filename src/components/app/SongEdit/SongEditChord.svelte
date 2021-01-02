<script>
  import ChordView from "../Chord/ChordView.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Dropdown from "../../ui/Dropdown.svelte";
  import { crossIcon, pencilIcon, speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { Button } from "../../ui/Button";
  export let chord;
  export let chordSection;
  export let tuning;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem;
  }

  .actions :global(button) {
    display: grid;
    gap: 0.5rem;
    justify-items: center;
    padding: 0.75rem;
  }
  .danger {
    color: var(--danger);
  }
</style>

<div class="chord">
  <Dropdown position="center">
    <ChordView {chord} {tuning} />
    <div slot="content">
      <div class="actions" aria-labelledby="editChordActionsMenu">
        <VisuallyHidden>
          <div id="editChordActionsMenu">Chord actions</div>
        </VisuallyHidden>
        <Button on:click={() => onEdit(chord)}>
          <Icon d={pencilIcon} size="1.5rem" />
          <div>Edit</div>
          <VisuallyHidden>chord</VisuallyHidden>
        </Button>
        <Button on:click={() => onPlay(chord)}>
          <Icon d={speakerIcon} size="1.5rem" />
          <div>Play</div>
          <VisuallyHidden>chord</VisuallyHidden>
        </Button>
        <div class="danger">
          <Button on:click={() => onRemove(chordSection, chord)}>
            <Icon d={crossIcon} size="1.5rem" />
            <div>Remove</div>
            <VisuallyHidden>chord</VisuallyHidden>
          </Button>
        </div>
      </div>
    </div>
  </Dropdown>
</div>
