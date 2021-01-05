<style>
  legend {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    position: sticky;
    top: var(--headerTopOffset);
    text-transform: uppercase;
    font-size: 0.85rem;
    background-color: var(--neutralLightest);
    z-index: 1;
  }
</style>

<legend>
  <slot />
</legend>
