<script>
  import ButtonDefault from "./ButtonDefault.svelte";
  export let type = "button";
</script>

<style>
  .buttonPrimary :global(button) {
    --buttonBorderColor: var(--buttonPrimaryBorderColor);
    --buttonBackgroundColor: var(--buttonPrimaryBackgroundColor);
    --buttonColor: var(--buttonPrimaryColor);
    --buttonActiveBorderColor: var(--buttonPrimaryActiveBorderColor);
    --buttonActiveBackgroundColor: var(--buttonPrimaryActiveBackgroundColor);
    --buttonActiveColor: var(--buttonPrimaryActiveColor);
  }
</style>

<div class="buttonPrimary">
  <ButtonDefault {type} on:click>
    <slot>Button</slot>
  </ButtonDefault>
</div>
