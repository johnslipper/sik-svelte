<script lang="ts">
  export let id: string = undefined;
  export let name: string = undefined;
  export let disabled = false;
  export let required = false;
  export let checked = false;
</script>

<input
  type="checkbox"
  {id}
  {name}
  {disabled}
  {required}
  bind:checked
  on:blur
  on:change
/>

<style>
  input {
    outline: none;
  }
  input:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>
