<script>
  import { onMount } from "svelte";
  import { ChordBox } from "vexchords";
  import { theme } from "../../theme.js";
  export let tuning = "";
  export let fingering;
  export let frets;
  export let position;
  export let key;

  onMount(() => {
    const tuningSplit = tuning ? tuning.split("") : null;
    new ChordBox(`#${key}`, { defaultColor: theme.bodyColor }).draw({
      chord: getChord(fingering.split(" "), frets.split(" ")),
      tuning: tuningSplit,
      position: position || getPositionFromFrets(frets),
    });

    // Add viewbox and fluid heights to allow container to scale responsively
    const svgElement = document.querySelector(`#${key} svg`);
    svgElement.setAttribute("viewBox", "0 0 100 120");
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
  });

  function getChord(fingering, frets) {
    if (fingering.length !== frets.length) {
      return;
    }
    return fingering.map((finger, i) => {
      const fingerFormatted = finger === "X" ? null : finger;
      const fretFormatted =
        frets[i] === "X" ? frets[i].toLowerCase() : parseInt(frets[i]);
      return [fingering.length - i, fretFormatted, fingerFormatted];
    });
  }

  function getPositionFromFrets(frets) {
    return Math.min(
      ...frets
        .split(" ")
        .map((string) => {
          if (string !== "X") {
            return parseInt(string);
          }
        })
        .filter(Boolean)
    );
  }
</script>

<div id={key} />
