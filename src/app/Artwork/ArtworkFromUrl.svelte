<script lang="ts">
  import { Form, FormGroup, Input, LabelDefault } from "ui/Form";
  import Heading from "ui/Heading/Heading.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { Button } from "ui/Button";
  import ArtworkView from "./ArtworkView.svelte";

  export let onBack: (e: MouseEvent) => void;
  export let onSelect: Function;
  let queryInput = "";
  let url: string;

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
    <Heading level={2} fontSize="1.25rem">Artwork search</Heading>
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
