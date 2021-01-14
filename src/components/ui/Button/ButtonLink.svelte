<script>
  import { Link } from "svelte-routing";
  export let to;
</script>

<style>
  .link :global(a) {
    display: flex;
    align-items: center;
    padding: var(--buttonPadding);
    font-size: var(--buttonFontSize);
    transition: transform 150ms;
    text-transform: uppercase;
  }

  .link :global(a:focus) {
    outline: var(--focusOutline);
  }
  .link :global(a:active) {
    transform: scale(0.95);
  }
</style>

<div class="link">
  <Link {to}>
    <slot />
  </Link>
</div>
