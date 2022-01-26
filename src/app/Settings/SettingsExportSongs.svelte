<script lang="ts">
  import { Button } from "ui/Button";
  import { downloadObjectAsJson, getDateString } from "../helpers";
  import { getContext } from "svelte";
  import { songStoreContext } from "../Song/SongStoreContext.svelte";
  import type { Song } from "../Song/index";

  const { songs } = getContext(songStoreContext);

  function stripSongIds(songs: Song[]) {
    return songs.map(({ id, ...rest }) => {
      return { ...rest };
    });
  }

  function handleExport() {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson(stripSongIds($songs), exportName);
  }
</script>

<Button variant="default" on:click={() => handleExport()}>Export songs</Button>
