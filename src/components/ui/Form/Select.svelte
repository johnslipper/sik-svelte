<script>
  export let id;
  export let name = "";
  export let disabled = false;
  export let required = false;
  export let value;
</script>

<style>
  select {
    appearance: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    padding: 0.2rem 0.1rem;
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
    color: var(--bodyColor);
  }
  select:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>

<select {id} {name} {disabled} {required} bind:value>
  <slot />
</select>
