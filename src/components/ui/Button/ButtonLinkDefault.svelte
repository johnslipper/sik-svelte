<script>
  import { Link } from "svelte-routing";
  export let to;
</script>

<div class="link">
  <Link {to}>
    <slot />
  </Link>
</div>

<style>
  .link :global(a) {
    display: inline-block;
    color: var(--buttonColor);
    background: var(--buttonBackgroundColor);
    border: 1px solid var(--buttonBorderColor);
    padding: var(--buttonPadding);
    border-radius: var(--buttonBorderRadius);
    outline: none;
    transition: background-color 150ms, transform 150ms;
    font-size: var(--buttonFontSize);
    text-transform: uppercase;
  }

  .link :global(a:focus) {
    box-shadow: var(--focusOutlineShadow);
  }
  .link :global(a:active) {
    color: var(--buttonActiveColor);
    border-color: var(--buttonActiveBorderColor);
    transform: scale(0.95);
  }
</style>
