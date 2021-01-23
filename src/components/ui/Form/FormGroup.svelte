<div class="group">
  <div class="input">
    <slot />
  </div>
  <slot name="feedback" />
</div>

<style>
  .group {
    display: grid;
    gap: 0.25rem;
  }
</style>
