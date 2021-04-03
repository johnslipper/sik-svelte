<script>
  import { playChord } from "./ChordAudio.js";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button } from "../../ui/Button";
  import { speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { errorToast } from "../../ui/Toasts/toasts.js";
  import { chordEntriesToArray } from "./helpers.js";
  export let chord;
  export let stringOffsets;
  export let capoAdjustment;

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

<Button on:click={() => handlePlayChord(chord)}>
  <Icon path={speakerIcon} size="1.5rem" />
  <div>Play</div>
  <VisuallyHidden>chord</VisuallyHidden>
</Button>
