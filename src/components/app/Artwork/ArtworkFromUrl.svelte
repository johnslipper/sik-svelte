<script>
  import { Form, FormGroup, Input, LabelDefault } from "../../ui/Form";
  import Heading from "../../ui/Heading/Heading.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button } from "../../ui/Button";
  import ArtworkView from "./ArtworkView.svelte";

  export let onBack;
  export let onSelect;
  let queryInput = "";
  let url;

  function handleGetArtwork() {
    url = queryInput;
  }

  function handleClearArtwork() {
    url = null;
  }

  function handleSelected() {
    onSelect(url);
  }
</script>

<div class="wrapper">
  <Form onSubmit={() => (url ? handleSelected() : handleGetArtwork())}>
    <Heading text="Artwork search" level="2" fontSize="1.25rem" />
    <div class="form">
      <FormGroup>
        <VisuallyHidden>
          <LabelDefault htmlFor="artworkUrl">Enter image URL</LabelDefault>
        </VisuallyHidden>
        <Input
          id="artworkUrl"
          bind:value={queryInput}
          placeholder="e.g. https://website.com/image.jpg"
        />
      </FormGroup>
      <div class="artwork">
        <ArtworkView artwork={{ url }} />
      </div>
      <div class="buttons">
        {#if url}
          <Button variant="primary" type="submit">Select</Button>
          <Button variant="default" on:click={handleClearArtwork}>Clear</Button>
        {:else}
          <Button variant="primary" type="submit">Get image</Button>
        {/if}
        <div class="last">
          <Button variant="default" on:click={onBack}>Cancel</Button>
        </div>
      </div>
    </div>
  </Form>
</div>

<style>
  .wrapper {
    padding: 1rem;
  }
  .form {
    display: grid;
    gap: 0.5rem;
  }
  .artwork {
    width: 100%;
  }
  .artwork :global(img) {
    width: 100%;
  }
  .buttons {
    display: flex;
    gap: 0.25rem;
  }
  .last {
    margin-left: auto;
  }
</style>
