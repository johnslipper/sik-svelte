<script>
  import { fade } from "svelte/transition";
  import Heading from "../ui/Heading.svelte";
  export let title;
</script>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--primary);
    color: var(--primaryContrast);
    align-items: center;
  }
  header :global(a) {
    padding: 1rem var(--contentPaddingHorizontal);
    display: inline-block;
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

<header>
  <div class="start">
    <slot name="start" />
  </div>
  <div class="center">
    {#if title}
      <div in:fade>
        <Heading text={title} fontSize={'1.2rem'} />
      </div>
    {/if}
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</header>
