<script>
  export let htmlFor;
</script>

<label for={htmlFor}>
  <slot />
</label>

<style>
  label {
    text-transform: uppercase;
    font-size: 0.75em;
    color: var(--primaryContrast);
    background-color: var(--neutralMedium);
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
  }
</style>
