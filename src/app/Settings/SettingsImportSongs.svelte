<script lang="ts">
  import { getContext } from "svelte";
  import { navigate } from "svelte-navigator";
  import { infoToast, errorToast } from "ui/Toasts/toasts";
  import Dialogue from "ui/Modal/Dialogue.svelte";
  import FileUpload from "ui/FileUpload.svelte";
  import { songStoreContext } from "../Song/SongStoreContext.svelte";
  import type { Song } from "../Song/index";

  const { songs } = getContext(songStoreContext);

  const { open } = getContext("simple-modal");

  let reader: FileReader;

  function handleUpload(event: Event) {
    reader = new FileReader();
    const target = event.target as HTMLInputElement;
    reader.onload = onReaderLoad;
    reader.readAsText(target.files[0]);
  }
  function onReaderLoad() {
    const readerResult = reader.result;
    let songsToImport = [];
    if (typeof readerResult === "string") {
      try {
        songsToImport = JSON.parse(readerResult);
      } catch (error) {
        // Parse error
        onReaderError();
        return;
      }
      if (songsToImport.length) {
        open(Dialogue, {
          message: `${songsToImport.length} songs found for import`,
          okayText: "Import songs",
          onOkay: () => {
            // Wait for modal to close before opening next one
            // TODO: Potentially better way to achieve this?
            setTimeout(() => handleImport(songsToImport), 500);
          },
        });
      } else {
        // No songs
        infoToast("No songs found in file");
      }
    } else {
      onReaderError();
    }
  }

  function onReaderError() {
    errorToast("Error getting songs to import from file");
  }

  function handleImport(songsToImport: Song[]) {
    songs.addBulk(songsToImport);
    open(Dialogue, {
      message: "Songs imported successfully",
      okayText: "View songs",
      cancelText: "Close",
      onOkay: () => navigate("/songs"),
    });
  }
</script>

<FileUpload
  on:change={handleUpload}
  accept="application/json"
  label="Import songs"
/>
