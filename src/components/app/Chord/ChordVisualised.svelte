<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { ChordBox } from "vexchords";
  import { theme } from "../../../theme.js";
  export let tuning = "";
  export let fingering;
  export let frets;
  export let position = 0;
  let chordElement;
  let chordbox;

  onMount(drawChord);
  afterUpdate(drawChord);
  onDestroy(() => (chordbox = null));

  function drawChord() {
    chordElement.innerHTML = "";
    chordbox = null;
    const tuningSplit = tuning ? tuning.split(" ") : null;
    const fingeringArray = fingering.split(" ");
    const fretsArray = processFrets(frets.split(" "));
    const calculatedPosition = position || getPositionFromFrets(fretsArray);
    const adjustedFrets = adjustFrets(fretsArray, calculatedPosition);

    chordbox = new ChordBox(chordElement, { defaultColor: theme.bodyColor });
    chordbox.draw({
      chord: getChord(fingeringArray, adjustedFrets),
      tuning: tuningSplit,
      position: calculatedPosition,
    });

    // Add viewbox and fluid heights to allow container to scale responsively
    const svgElement = chordElement.querySelector(`svg`);
    svgElement.setAttribute("viewBox", "0 0 100 120");
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
  }

  // Process frets to be integers and lowercase "X"
  function processFrets(frets) {
    return frets.map((fret) => {
      if (fret === "X") {
        return fret.toLowerCase();
      }
      return parseInt(fret);
    });
  }

  // Adjust valid fret numbers to start from neck position
  function adjustFrets(frets, position) {
    return frets.map((fret) => {
      return fret && fret !== "x" ? fret - position + 1 : fret;
    });
  }

  // Get chord as vexchords nested array
  function getChord(fingering, frets) {
    if (fingering.length !== frets.length) {
      return;
    }
    return frets.map((fret, i) => {
      const fingerFormatted =
        fingering[i] === "X" || fret === 0 ? null : fingering[i];
      return [frets.length - i, fret, fingerFormatted];
    });
  }

  // Find neck position based on lowest fret (can be overidden by position prop)
  function getPositionFromFrets(frets) {
    return Math.min(
      ...frets
        .map((string) => {
          if (string !== "x" && string !== 0) {
            return parseInt(string);
          }
        })
        .filter(Boolean)
    );
  }
</script>

<div bind:this={chordElement} />
