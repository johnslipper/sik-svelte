<script lang="ts">
  import { Link } from "svelte-navigator";
  export let to: string;
  export let variant: string = undefined;
</script>

<div class="link {variant}">
  <Link {to}>
    <slot />
  </Link>
</div>

<style>
  .link :global(a) {
    --buttonPadding: 0.6rem 1rem;
    --buttonBorderRadius: 0;
    --buttonFontSize: inherit;
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: transparent;
    --buttonColor: inherit;
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: transparent;
    --buttonActiveColor: inherit;

    display: flex;
    align-items: center;
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
    outline: var(--focusOutline);
  }
  .link :global(a:active) {
    transform: scale(0.95);
  }

  .link.default :global(a) {
    --buttonBorderRadius: 0.25rem;
    --buttonFontSize: 0.85rem;
    --buttonBorderColor: var(--neutralMedium);
    --buttonBackgroundColor: var(--primaryContrast);
    --buttonColor: inherit;
    --buttonActiveBorderColor: var(--primary);
    --buttonActiveBackgroundColor: var(--primaryContrast);
    --buttonActiveColor: var(--primary);
    justify-content: center;
  }
</style>
