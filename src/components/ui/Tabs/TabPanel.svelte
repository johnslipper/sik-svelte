<script>
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  const panel = {};
  const { registerPanel, selectedPanel } = getContext(TABS);

  registerPanel(panel);
</script>

<style>
  .panel {
    padding: var(--contentPaddingHorizontal);
  }
</style>

{#if $selectedPanel === panel}
  <div class="panel">
    <slot />
  </div>
{/if}
