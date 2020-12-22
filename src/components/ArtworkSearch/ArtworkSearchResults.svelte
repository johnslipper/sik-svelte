<script>
  import { fade } from "svelte/transition";
  export let searchResults;
  export let onSelected;
  export let selected;

  function handleSelect(result) {
    selected = result;
    if ("function" === typeof onSelected) {
      onSelected(result);
    }
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    gap: 0.25rem;
  }
  button,
  li {
    display: block;
  }

  li {
    border: 3px solid transparent;
    opacity: 0.75;
  }

  li.selected {
    border-color: var(--primary);
    opacity: 1;
  }

  button {
    background-color: none;
    border: none;
    padding: 0;
  }
</style>

{#if searchResults.resultCount}
  <ul class="grid">
    {#each searchResults.results as result, i}
      <li in:fade={{ delay: i * 100 }} class:selected={result === selected}>
        <button on:click={() => handleSelect(result)}>
          <img src={result.artworkUrl100} alt={result.collectionName} />
        </button>
      </li>
    {/each}
  </ul>
{:else}
  <p>No results found</p>
{/if}
