<script lang="ts">
  import { playChord } from "./ChordAudio";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { DropdownMenuItem } from "ui/Dropdown";
  import { speakerIcon } from "ui/Icons/icons";
  import Icon from "ui/Icons/Icon.svelte";
  import { errorToast } from "ui/Toasts/toasts";
  import { chordEntriesToArray } from "./helpers";
  import type { Chord } from "./index";
  export let chord: Chord;
  export let stringOffsets: number[];
  export let capoAdjustment: number;

  function handlePlayChord() {
    if (chord.frets) {
      playChord(
        chordEntriesToArray(chord.frets),
        capoAdjustment,
        stringOffsets
      );
    } else {
      errorToast("Cannot play chord, no fret data");
    }
  }
</script>

<DropdownMenuItem onSelected={() => handlePlayChord()}>
  <Icon path={speakerIcon} size="1.5rem" />
  <div>Play</div>
  <VisuallyHidden>chord</VisuallyHidden>
</DropdownMenuItem>
