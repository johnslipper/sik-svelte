<script>
  import { getChords } from "../../../localStorage.js";
  import Button from "../../ui/Button/Button.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  export let onSelect;

  let recentChords = getChords();
</script>

{#if recentChords && recentChords.length}
  <div class="wrapper">
    <Heading level={3}>Recent chords</Heading>
    <ul>
      {#each recentChords as chord}
        <li>
          <Button on:click={() => onSelect(chord)}
            >{chord.name || "Untitled chord"}</Button
          >
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .wrapper {
    margin-top: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }
  ul li {
    display: grid;
    border-bottom: 1px solid var(--neutralLightest);
  }
  ul li:last-child {
    border-bottom: none;
  }
  ul li :global(button) {
    text-align: left;
    text-transform: initial;
    --buttonFontSize: 1rem;
    --buttonPadding: 0.5rem 0.25rem;
  }
</style>
