<script>
  export let id;
  export let name = "";
  export let disabled = false;
  export let required = false;
  export let value;
</script>

<select {id} {name} {disabled} {required} on:blur bind:value>
  <slot />
</select>

<style>
  select {
    appearance: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    padding: var(--inputPadding);
    background-color: var(--primaryContrast);
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
    color: var(--bodyColor);
  }
  select:focus {
    box-shadow: var(--focusOutlineShadow);
  }
  select[disabled] {
    background-color: var(--neutralLightest);
  }
</style>
