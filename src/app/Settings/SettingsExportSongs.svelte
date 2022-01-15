<script lang="ts">
  import type { Song } from "../Song/index";
  import { Button } from "ui/Button";
  import { downloadObjectAsJson, getDateString } from "../helpers";

  export let songs = undefined;

  function handleExport(songs: Song[]) {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson(songs, exportName);
  }
</script>

<Button variant="default" on:click={() => handleExport(songs)}
  >Export songs</Button
>
