<script>
  export let id;
  export let name = "";
  export let disabled = false;
  export let required = false;
  export let checked;
</script>

<style>
  input {
    outline: none;
  }
  input:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>

<input type="checkbox" {id} {name} {disabled} {required} bind:checked on:blur />
