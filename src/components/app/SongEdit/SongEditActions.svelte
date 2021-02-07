<script>
  import { getContext } from "svelte";
  import { navigate } from "svelte-routing";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  import Button from "../../ui/Button/Button.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";

  export let docRef;

  const { open } = getContext("simple-modal");

  function handleDelete() {
    open(Dialogue, {
      message: "Are you sure you want to delete this song? No backsies",
      okayText: "Delete song",
      cancelText: "Keep song",
      onOkay: () =>
        docRef.delete().then(
          () => {
            infoToast("Song deleted");
            navigate("/songs");
          },
          () => errorToast(`Song deletion failed: ${error}`)
        ),
    });
  }
</script>

<div class="wrapper">
  <VisuallyHidden>
    <Heading text="Actions:" level="2" fontSize="1rem" />
  </VisuallyHidden>
  <Button variant="danger" on:click={handleDelete}>Delete song</Button>
</div>

<style>
  .wrapper {
    display: grid;
    align-items: center;
    padding: 3rem;
    text-align: center;
    background-color: var(--neutralLight);
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25);
  }
</style>
