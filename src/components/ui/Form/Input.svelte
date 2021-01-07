<script>
  export let type = "text";
  export let id;
  export let name = "";
  export let placeholder = "";
  export let maxlength = 255;
  export let disabled = false;
  export let required = false;
  export let value;
</script>

<style>
  input {
    outline: none;
    width: 100%;
    font-size: 1rem;
    padding: var(--inputPadding);
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
    color: var(--bodyColor);
  }
  input:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>

{#if type === 'number'}
  <input
    type="number"
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    {required}
    bind:value
    on:blur />
{:else}
  <input
    type="text"
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    {required}
    bind:value
    on:blur />
{/if}
