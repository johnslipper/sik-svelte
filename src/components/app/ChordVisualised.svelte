<script>
  import { onMount } from "svelte";
  import { ChordBox } from "vexchords";
  import { theme } from "../../theme.js";
  export let tuning = "";
  export let fingering;
  export let strings;
  export let position;
  export let key;

  onMount(() => {
    const tuningSplit = tuning ? tuning.split("") : null;
    new ChordBox(`#${key}`, { defaultColor: theme.bodyColor }).draw({
      chord: getChord(fingering.split(" "), strings.split(" ")),
      tuning: tuningSplit,
      position: position || getPositionFromStrings(strings),
    });

    // Add viewbox and fluid heights to allow container to scale responsively
    const svgElement = document.querySelector(`#${key} svg`);
    svgElement.setAttribute("viewBox", "0 0 100 120");
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
  });

  function getChord(fingering, strings) {
    if (fingering.length !== strings.length) {
      return;
    }
    return fingering.map((finger, i) => {
      const fingerFormatted = finger === "X" ? null : finger;
      const stringFormatted =
        strings[i] === "X" ? strings[i].toLowerCase() : parseInt(strings[i]);
      return [i + 1, fingerFormatted, stringFormatted];
    });
  }

  function getPositionFromStrings(strings) {
    return Math.min(
      ...strings
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
