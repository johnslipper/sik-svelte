<script lang="ts">
  import { getContext } from "svelte";
  import { infoToast } from "ui/Toasts/toasts";
  import { Button } from "ui/Button";
  import { Dialogue, SensitiveConfirmation } from "ui/Modal";
  import { songStoreContext } from "../Song/SongStoreContext.svelte";
  const { songs } = getContext(songStoreContext);

  const { open } = getContext("simple-modal");

  function handleDeleteSongs() {
    if ($songs.length) {
      open(SensitiveConfirmation, {
        message:
          "Are you sure you want to delete ALL the songs stored? ...Make sure you've exported anything you want to keep first!",
        confirmationText: "SONGS",
        onOkay: () => {
          songs.clear();
          infoToast("All songs deleted");
        },
      });
    } else {
      open(Dialogue, {
        message: "You don't currently have any songs to delete",
        showCancelButton: false,
      });
    }
  }
</script>

<div class="wrapper">
  <div class="actions">
    <Button variant="default" on:click={handleDeleteSongs}
      >Delete all songs</Button
    >
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    gap: 0.5rem;
  }
  .actions {
    display: flex;
    gap: 0.5rem;
  }
</style>
