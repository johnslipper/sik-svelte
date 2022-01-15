<script lang="ts">
  import { fade } from "svelte/transition";
  import Heading from "./Heading/Heading.svelte";
  export let title: string = undefined;
  export let registerFocus = undefined;
</script>

<header>
  <div class="start">
    <slot name="start" />
  </div>
  <div class="center">
    {#if title}
      <div in:fade>
        <Heading {registerFocus}>{title}</Heading>
      </div>
    {/if}
    <slot />
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--primaryDark);
    color: var(--primaryContrast);
    align-items: center;
  }

  .start {
    grid-column: 1;
    justify-self: start;
  }

  .center {
    grid-column: 2;
    text-align: center;
    padding: 0.75rem 0.5rem;
  }

  .end {
    grid-column: 3;
    justify-self: end;
  }
</style>
