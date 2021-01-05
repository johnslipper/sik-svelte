<script>
  import { getContext } from "svelte";
  import { playChord } from "../../../ChordAudio.js";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import { Button } from "../../ui/Button";
  import { speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  export let chord;
  export let tuning;

  const { open } = getContext("simple-modal");

  function handlePlayChord() {
    if (chord.frets) {
      if (tuning && tuning !== "E A D G B E") {
        open(Dialogue, {
          CancelText: undefined,
          message: "Cannot play chords with custom tuning yet sorry",
        });
      } else {
        playChord(chord.frets);
      }
    } else {
      open(Dialogue, {
        CancelText: undefined,
        message: "Cannot play chord, no fret data",
      });
    }
  }
</script>

<Button on:click={() => handlePlayChord(chord)}>
  <Icon path={speakerIcon} size="1.5rem" />
  <div>Play</div>
  <VisuallyHidden>chord</VisuallyHidden>
</Button>
