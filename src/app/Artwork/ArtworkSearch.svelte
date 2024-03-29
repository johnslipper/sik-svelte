<script lang="ts">
  import { artworkSearch } from "./artworkSearch";
  import ArtworkSearchResults from "./ArtworkSearchResults.svelte";
  import ArtworkSearchSelected from "./ArtworkSearchSelected.svelte";
  import ArtworkFromUrl from "./ArtworkFromUrl.svelte";
  import { Form, FormGroup, Input, LabelDefault } from "ui/Form";
  import Heading from "ui/Heading/Heading.svelte";
  import LoadingEllipsis from "ui/LoadingEllipsis.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { Button } from "ui/Button";
  import type { Artwork } from "./index";
  import type { ArtworkSearchResult } from "./artworkSearch";
  export let queryInput = undefined;
  export let onSelected: Function = undefined;
  let query: string;
  let selected: Artwork;
  let fromUrl = false;
  $: search = query ? artworkSearch(query) : null;

  function handleSubmitSearch() {
    query = queryInput;
  }

  function handleSelected({
    trackName,
    artistName,
    collectionName,
    artworkUrl100,
  }: ArtworkSearchResult) {
    selected = {
      title: trackName,
      artist: artistName,
      album: collectionName,
      url: artworkUrl100,
    };
  }

  function handleSubmitSelected() {
    onSelected(selected);
  }

  function handleSelectedUrl(url: string) {
    onSelected({
      url,
    });
  }

  function handleBack() {
    fromUrl = false;
  }

  function handleSelectUrl() {
    fromUrl = true;
  }
</script>

{#if !fromUrl}
  <header>
    <Form onSubmit={handleSubmitSearch}>
      <Heading level={2} fontSize="1.25rem">Artwork search</Heading>
      <div class="search">
        <FormGroup>
          <VisuallyHidden>
            <LabelDefault htmlFor="searchArtwork">Search term</LabelDefault>
          </VisuallyHidden>
          <Input id="searchArtwork" bind:value={queryInput} />
        </FormGroup>
        <Button variant="primary" type="submit">Search</Button>
      </div>
    </Form>
  </header>

  {#if query}
    <div class="results">
      {#await search}
        <div class="loading">
          <LoadingEllipsis />
        </div>
      {:then searchResults}
        <ArtworkSearchResults {searchResults} onSelected={handleSelected} />
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    </div>
    {#if selected}
      <div class="selection">
        <Form onSubmit={handleSubmitSelected}>
          <div class="content">
            <ArtworkSearchSelected
              title={selected.title}
              artist={selected.artist}
              album={selected.album}
            />
            <Button variant="primary" type="submit">Select</Button>
          </div>
        </Form>
      </div>
    {/if}
  {/if}
  <div class="link-button">
    <Button variant="text" on:click={handleSelectUrl}>Link to image</Button>
  </div>
{:else}
  <ArtworkFromUrl onSelect={handleSelectedUrl} onBack={handleBack} />
{/if}

<style>
  .loading {
    padding: 1rem;
  }
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: var(--primaryContrast);
  }
  .search {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }
  .results {
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }
  .selection {
    position: sticky;
    bottom: 0rem;
    background-color: var(--primaryContrast);
  }
  .content {
    display: flex;
  }
  .content :global(button) {
    border-radius: 0;
  }

  .content :global(.Button) {
    display: flex;
  }

  .link-button {
    display: flex;
    justify-content: flex-end;
  }

  .link-button :global(button) {
    text-transform: initial;
    color: var(--primary);
  }
</style>
