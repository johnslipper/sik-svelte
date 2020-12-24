<script>
  import { slide } from "svelte/transition";
</script>

<style>
  .tab-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<div
  class="tab-list"
  in:slide={{ duration: 250, delay: 300 }}
  out:slide={{ duration: 100 }}>
  <slot />
</div>
