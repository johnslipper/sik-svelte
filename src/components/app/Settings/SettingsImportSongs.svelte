<script>
  import { getContext } from "svelte";
  import { navigate } from "svelte-navigator";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import FileUpload from "../../ui/FileUpload.svelte";

  export let songsRef;
  let songs;

  const { open } = getContext("simple-modal");

  function handleUpload(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    try {
      songs = JSON.parse(event.target.result);
    } catch (error) {
      // Parse error
      errorToast("Error with file");
      return;
    }
    if (songs && songs.length) {
      open(Dialogue, {
        message: `${songs.length} songs found for import`,
        okayText: "Import songs",
        onOkay: () => handleImport(),
      });
    } else {
      // No songs
      infoToast("No songs found in file");
    }
  }

  function handleImport() {
    const promises = songs.map((song) => songsRef.add(song));
    Promise.all(promises).then(
      () => {
        open(Dialogue, {
          message: `${songs.length} songs imported successfully`,
          okayText: "View songs",
          cancelText: "Close",
          onOkay: () => navigate("/songs"),
          onCancel: () => (songs = undefined),
        });
      },
      (error) => errorToast(`Song import error: ${error}`)
    );
  }
</script>

<FileUpload
  on:change={handleUpload}
  accept="application/json"
  label="Import songs"
/>
