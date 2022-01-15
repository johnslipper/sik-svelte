<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { ChordBox } from "vexchords";
  import { theme } from "../theme";
  import type { ChordEntry } from "./index";
  export let tuning = ["E", "A", "D", "G", "B", "E"];
  export let fingering: ChordEntry[];
  export let frets: ChordEntry[];
  export let position = 0;
  let chordElement: Element;
  let chordbox: { draw: Function };

  onMount(drawChord);
  afterUpdate(drawChord);
  onDestroy(() => (chordbox = null));

  function drawChord() {
    chordElement.innerHTML = "";
    chordbox = null;
    const calculatedPosition = position || getPositionFromFrets(frets);
    const adjustedFrets = adjustFrets(frets, calculatedPosition);

    chordbox = new ChordBox(chordElement, { defaultColor: theme.bodyColor });
    chordbox.draw({
      chord: getChord(fingering, adjustedFrets),
      tuning,
      position: calculatedPosition,
    });

    // Add viewbox and fluid heights to allow container to scale responsively
    const svgElement = chordElement.querySelector(`svg`);
    svgElement.setAttribute("viewBox", "0 10 100 100");
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
  }

  // Adjust valid fret numbers to start from neck position
  function adjustFrets(frets: ChordEntry[], position: number) {
    return frets.map((fret) => {
      const fretInt = Number(fret);
      return fret ? fretInt - position + 1 : fret;
    });
  }

  // Get chord as vexchords nested array
  function getChord(fingering: ChordEntry[], frets: ChordEntry[]) {
    return frets.map((fret, i) => {
      const fingerFormatted =
        fingering[i] === "x" || fret === 0 ? null : fingering[i];
      return [frets.length - i, fret, fingerFormatted];
    });
  }

  // Find neck position based on lowest fret (can be overidden by position prop)
  function getPositionFromFrets(frets: ChordEntry[]) {
    const filteredFrets = frets.map((string) => Number(string)).filter(Boolean);
    return filteredFrets.length ? Math.min(...filteredFrets) : 0;
  }
</script>

<div bind:this={chordElement} />
