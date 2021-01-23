<script>
  import { fade } from "svelte/transition";
  export let searchResults;
  export let onSelected;
  let selected;

  function handleSelect(result) {
    selected = result;
    if ("function" === typeof onSelected) {
      onSelected(result);
    }
  }
</script>

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
  <p class="noResults">No results found</p>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    gap: 0.25rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  button,
  li,
  img {
    display: block;
  }

  li {
    border: 3px solid transparent;
    opacity: 0.75;
    transition: transform 150ms ease-out;
  }

  li.selected {
    border-color: var(--primary);
    opacity: 1;
    transform: scale(1.1);
  }

  button {
    background-color: none;
    border: none;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .noResults {
    color: var(--bodyColorMuted);
  }
</style>
