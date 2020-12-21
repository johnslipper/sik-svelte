<script>
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
    color: var(--neutralLightest);
    align-items: center;
  }

  h1 {
    margin: 0;
    padding: 0.75rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;
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
      <h1 class="center">{title}</h1>
    {/if}
  </div>
  <div class="end">
    <slot name="end" />
  </div>
</header>
