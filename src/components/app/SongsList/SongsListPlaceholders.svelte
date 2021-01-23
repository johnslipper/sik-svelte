<script>
  import PlaceholderItem from "./PlaceholderItem.svelte";
  export let placeholderCount = 10;
</script>

<div class="placeholders">
  {#each Array(placeholderCount) as _placeholder}
    <PlaceholderItem />
  {/each}
</div>

<style>
  .placeholders {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - var(--headerTopOffset));
    overflow: hidden;
  }
</style>
