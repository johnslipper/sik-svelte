<div class="visuallyHidden">
  <slot />
</div>

<style>
  .visuallyHidden {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    text-transform: initial;
  }
</style>
