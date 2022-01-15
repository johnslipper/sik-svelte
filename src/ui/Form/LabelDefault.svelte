<script lang="ts">
  export let htmlFor: string = undefined;
</script>

<label for={htmlFor || undefined}>
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
