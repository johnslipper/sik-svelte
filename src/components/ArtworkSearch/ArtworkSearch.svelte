<script>
  import { artworkSearch } from "./artworkSearch.js";
  import ArtworkSearchResults from "./ArtworkSearchResults.svelte";
  export let query;
  export let onSelected;
  export let selected;
  $: search = query ? artworkSearch(query) : null;

  function handleSelected(selectedResult) {
    onSelected(selectedResult);
  }
</script>

<style>
  .selection {
    margin-top: 1rem;
  }
</style>

{#if query}
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

  {#if selected}
    <div class="selection">
      <div>Artist: {selected.artistName}</div>
      <div>Album: {selected.collectionName}</div>
    </div>
  {/if}
{/if}
