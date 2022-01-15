<script lang="ts">
  export let message = "";
</script>

{#if message}
  <div class="error">{message}</div>
{/if}

<style>
  .error {
    color: var(--danger);
  }
</style>
