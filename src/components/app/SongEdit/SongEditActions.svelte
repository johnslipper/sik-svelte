<script>
  import { getContext } from "svelte";
  import { navigate } from "svelte-routing";
  import ButtonDefault from "../../ui/Button/ButtonDefault.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";

  export let docRef;

  const { open } = getContext("simple-modal");

  function handleDelete() {
    open(Dialogue, {
      message: "Are you sure you want to delete this song? No backsies",
      okayText: "Delete song",
      cancelText: "Keep song",
      onOkay: () =>
        docRef.delete().then(
          () => navigate("/songs"),
          (error) => console.log(error)
        ),
    });
  }
</script>

<div class="wrapper">
  <Heading text="Actions:" level="2" fontSize="1rem" />
  <ButtonDefault on:click={handleDelete}>Delete song</ButtonDefault>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: var(--neutralLight);
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  .wrapper :global(button) {
    --buttonColor: var(--danger);
    --buttonBorderColor: var(--danger);
    margin-left: 1rem;
  }
</style>
