<script>
  export let id;
  export let name;
  export let placeholder;
  export let maxlength = 255;
  export let disabled = false;
  export let value;
</script>

<style>
  input {
    outline: none;
    font-size: 1rem;
  }
  input:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>

<input
  type="text"
  {id}
  {name}
  {placeholder}
  {maxlength}
  {disabled}
  bind:value />
