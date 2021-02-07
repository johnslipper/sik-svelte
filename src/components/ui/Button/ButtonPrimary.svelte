<script>
  import ButtonDefault from "./ButtonDefault.svelte";
  export let type = "button";
  export let disabled = false;
</script>

<div class="buttonPrimary">
  <ButtonDefault {type} {disabled} on:click>
    <slot>Button</slot>
  </ButtonDefault>
</div>

<style>
  .buttonPrimary {
    display: inline-block;
  }
  .buttonPrimary :global(button) {
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: var(--primary);
    --buttonColor: var(--primaryContrast);
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: var(--primaryDark);
    --buttonActiveColor: var(--primaryContrast);
  }
</style>
