<script lang="ts">
  import { getContext } from "svelte";
  import { navigate } from "svelte-navigator";
  import { infoToast } from "ui/Toasts/toasts";
  import Button from "ui/Button/Button.svelte";
  import Heading from "ui/Heading/Heading.svelte";
  import Dialogue from "ui/Modal/Dialogue.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { songStorageContext } from "../SongStorage.svelte";
  import type { Song } from "..";

  const { open } = getContext("simple-modal");
  const { removeSong } = getContext(songStorageContext);

  export let song: Song;

  function handleDelete() {
    open(Dialogue, {
      message: "Are you sure you want to delete this song? No backsies",
      okayText: "Delete song",
      cancelText: "Keep song",
      okayButtonVariation: "danger",
      onOkay: () => {
        removeSong(song).then(() => {
          infoToast("Song deleted");
          navigate("/songs");
        });
      },
    });
  }
</script>

<div class="wrapper">
  <VisuallyHidden>
    <Heading level={2} fontSize="1rem">Actions:</Heading>
  </VisuallyHidden>
  <Button variant="danger" on:click={handleDelete}>Delete song</Button>
</div>

<style>
  .wrapper {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    background-color: var(--neutralLight);
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25);
  }
</style>
