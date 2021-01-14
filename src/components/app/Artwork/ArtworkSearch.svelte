<script>
  import { artworkSearch } from "./artworkSearch.js";
  import ArtworkSearchResults from "./ArtworkSearchResults.svelte";
  import ArtworkSearchSelected from "./ArtworkSearchSelected.svelte";
  import { Form, FormGroup, Input, LabelDefault } from "../../ui/Form";
  import Heading from "../../ui/Heading/Heading.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonPrimary } from "../../ui/Button";
  export let queryInput;
  export let onSelected;
  let query;
  let selected;
  $: search = query ? artworkSearch(query) : null;

  function handleSubmitSearch() {
    query = queryInput;
  }

  function handleSelected(selectedResult) {
    selected = selectedResult;
  }

  function handleSubmitSelected() {
    onSelected(selected);
  }
</script>

<style>
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

  .content :global(.buttonPrimary) {
    display: flex;
  }
</style>

<header>
  <Form onSubmit={handleSubmitSearch}>
    <Heading text="Artwork search" level="2" fontSize="1.25rem" />
    <div class="search">
      <FormGroup>
        <VisuallyHidden>
          <LabelDefault htmlFor="searchArtwork">Search term</LabelDefault>
        </VisuallyHidden>
        <Input id="searchArtwork" bind:value={queryInput} />
      </FormGroup>
      <ButtonPrimary type="submit">Search</ButtonPrimary>
    </div>
  </Form>
</header>

{#if query}
  <div class="results">
    {#await search}
      <p>loading...</p>
    {:then searchResults}
      <ArtworkSearchResults
        {searchResults}
        onSelected={handleSelected}
        {selected} />
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
  {#if selected}
    <div class="selection">
      <Form onSubmit={handleSubmitSelected}>
        <div class="content">
          <ArtworkSearchSelected
            title={selected.trackName}
            artist={selected.artistName}
            album={selected.collectionName} />
          <ButtonPrimary type="submit">Select</ButtonPrimary>
        </div>
      </Form>
    </div>
  {/if}
{/if}
