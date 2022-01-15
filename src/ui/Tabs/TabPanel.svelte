<script lang="ts">
  import { getContext } from "svelte";
  import { tabsContext, panelCount, selectedIndex } from "./Tabs.svelte";

  const { tabKey, panelKey, registerPanel } = getContext(tabsContext);
  const panelIndex = $panelCount;
  const panelId = `${panelKey}-${panelIndex}`;
  const panelLabelledBy = `${tabKey}-${panelIndex}`;

  $: isSelected = $selectedIndex === panelIndex;

  registerPanel();
</script>

<div
  id={panelId}
  role="tabpanel"
  tabindex={isSelected ? 0 : -1}
  aria-labelledby={panelLabelledBy}
  hidden={!isSelected || undefined}
>
  {#if isSelected}
    <slot />
  {/if}
</div>
