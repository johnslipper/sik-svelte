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
    --buttonBorderColor: var(--buttonPrimaryBorderColor);
    --buttonBackgroundColor: var(--buttonPrimaryBackgroundColor);
    --buttonColor: var(--buttonPrimaryColor);
    --buttonActiveBorderColor: var(--buttonPrimaryActiveBorderColor);
    --buttonActiveBackgroundColor: var(--buttonPrimaryActiveBackgroundColor);
    --buttonActiveColor: var(--buttonPrimaryActiveColor);
  }
</style>
