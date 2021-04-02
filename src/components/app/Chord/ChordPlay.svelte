<script>
  import { playChord } from "./ChordAudio.js";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button } from "../../ui/Button";
  import { speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  export let chord;
  export let tuning;
  export let capoAdjustment;

  function handlePlayChord() {
    if (chord.frets) {
      if (tuning && tuning !== "E A D G B E") {
        infoToast("Cannot play chords with custom tuning yet sorry");
      } else {
        playChord(chord.frets, capoAdjustment);
      }
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
