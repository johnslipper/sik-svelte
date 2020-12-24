<script>
  import { slide } from "svelte/transition";
</script>

<style>
  .tab-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    font-size: 0.85rem;
  }
</style>

<div
  class="tab-list"
  in:slide={{ duration: 250, delay: 300 }}
  out:slide={{ duration: 100 }}>
  <slot />
</div>
