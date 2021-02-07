<script>
  import ButtonDefault from "./ButtonDefault.svelte";
  export let type = "button";
  export let disabled = false;
</script>

<div class="buttonDanger">
  <ButtonDefault {type} {disabled} on:click>
    <slot>Button</slot>
  </ButtonDefault>
</div>

<style>
  .buttonDanger {
    display: inline-block;
  }
  .buttonDanger :global(button) {
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: var(--danger);
    --buttonColor: var(--primaryContrast);
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: var(--dangerDark);
    --buttonActiveColor: var(--primaryContrast);
  }
</style>
