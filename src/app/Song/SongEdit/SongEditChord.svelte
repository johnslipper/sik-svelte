<script lang="ts">
  import ChordView from "../../Chord/ChordView.svelte";
  import ChordPlay from "../../Chord/ChordPlay.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { Dropdown, DropdownMenuItem } from "ui/Dropdown";
  import { crossIcon, pencilIcon } from "ui/Icons/icons";
  import Icon from "ui/Icons/Icon.svelte";
  import type { Chord } from "../../Chord/index";
  export let chord: Chord;
  export let stringOffsets: number[];
  export let capoAdjustment: number;
  export let onEdit: (chord: Chord) => void;
  export let onRemove: (chord: Chord) => void;
</script>

<div class="chord">
  <Dropdown position="center">
    <ChordView {chord} {stringOffsets} />
    <svelte:fragment slot="menu">
      <DropdownMenuItem onSelected={() => onEdit(chord)}>
        <Icon path={pencilIcon} size="1.5rem" />
        <div>Edit</div>
        <VisuallyHidden>chord</VisuallyHidden>
      </DropdownMenuItem>
      <ChordPlay {chord} {stringOffsets} {capoAdjustment} />
      <DropdownMenuItem onSelected={() => onRemove(chord)}>
        <div class="danger">
          <Icon path={crossIcon} size="1.5rem" />
          <div>Remove</div>
          <VisuallyHidden>chord</VisuallyHidden>
        </div>
      </DropdownMenuItem>
    </svelte:fragment>
  </Dropdown>
</div>

<style>
  .chord {
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
  }
  .danger {
    color: var(--danger);
  }
</style>
