<script>
  import { useFocus } from "svelte-navigator";
  export let level = 1;
  export let fontSize = "1.2rem";
  export let registerFocus = level === 1 ? useFocus() : undefined;
</script>

{#if level === 6}
  <h6 class="heading" style="font-size: {fontSize};"><slot /></h6>
{:else if level === 5}
  <h5 class="heading" style="font-size: {fontSize};"><slot /></h5>
{:else if level === 4}
  <h4 class="heading" style="font-size: {fontSize};"><slot /></h4>
{:else if level === 3}
  <h3 class="heading" style="font-size: {fontSize};"><slot /></h3>
{:else if level === 2}
  <h2 class="heading" style="font-size: {fontSize};"><slot /></h2>
{:else}
  <h1 class="heading" style="font-size: {fontSize};" use:registerFocus>
    <slot />
  </h1>
{/if}

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: normal;
    margin: 0;
  }

  .heading:focus {
    outline: none;
  }
</style>
