<script>
  import { Button } from "../../ui/Button";
  import { downloadObjectAsJson, getDateString } from "../../../helpers.js";
  import { stripRefs } from "../../../firebase.js";

  export let songs;

  function handleExport(songs) {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson(stripRefs(songs), exportName);
  }
</script>

<Button variant="default" on:click={() => handleExport(songs)}
  >Export songs</Button
>
