<script lang="ts">
  // import { getContext } from "svelte";
  // import { navigate } from "svelte-navigator";
  // import { infoToast, errorToast } from "ui/Toasts/toasts";
  // import Dialogue from "ui/Modal/Dialogue.svelte";
  import FileUpload from "ui/FileUpload.svelte";

  // const { open } = getContext("simple-modal");

  function handleUpload(event: Event) {
    const reader = new FileReader();
    const target = event.target as HTMLInputElement;
    // reader.onload = onReaderLoad;
    reader.readAsText(target.files[0]);
  }
  // TODO: Import songs
  // function onReaderLoad(event: Event) {
  //   try {
  //     songs = JSON.parse(event.target.result);
  //   } catch (error) {
  //     // Parse error
  //     errorToast("Error with file");
  //     return;
  //   }
  //   if (songs && songs.length) {
  //     open(Dialogue, {
  //       message: `${songs.length} songs found for import`,
  //       okayText: "Import songs",
  //       onOkay: () => handleImport(),
  //     });
  //   } else {
  //     // No songs
  //     infoToast("No songs found in file");
  //   }
  // }

  // function handleImport() {
  //   open(Dialogue, {
  //         message: `${songs.length} songs imported successfully`,
  //         okayText: "View songs",
  //         cancelText: "Close",
  //         onOkay: () => navigate("/songs"),
  //         onCancel: () => (songs = undefined),
  //       });
  // }
</script>

<FileUpload
  on:change={handleUpload}
  accept="application/json"
  label="Import songs"
/>
