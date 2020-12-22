<script>
  export let htmlFor;
</script>

<style>
  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.75em;
  }
</style>

<label for={htmlFor}>
  <slot />
</label>
