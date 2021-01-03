<script>
  export let string;
</script>

<style>
  .fieldset {
    display: grid;
    gap: 0.25rem;
    margin: 0 0.15rem;
    padding: 0.5rem;
  }
</style>

<fieldset class="fieldset">
  <legend>{string}</legend>
  <slot />
</fieldset>
