<div class="tab-list" role="tablist">
  <slot />
</div>

<style>
  .tab-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    font-size: 0.85rem;
  }
</style>
