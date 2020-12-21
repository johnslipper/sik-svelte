<script>
  import { artworkSearch } from "./artworkSearch.js";
  import ArtworkSearchResults from "./ArtworkSearchResults.svelte";
  export let query;
  export let onSelected;
  let selected;
  $: search = query ? artworkSearch(query) : null;

  function handleSelected(selectedResult) {
    selected = selectedResult;
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
    <ArtworkSearchResults {searchResults} onSelected={handleSelected} />
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
