<script>
  export let htmlFor;
</script>

<style>
  label {
    text-transform: uppercase;
    font-size: 0.75em;
    color: var(--neutralDark);
    background-color: var(--neutralLightest);
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
  }
</style>

<label for={htmlFor}>
  <slot />
</label>
