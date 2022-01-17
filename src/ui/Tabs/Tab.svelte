<script lang="ts">
  import { getContext } from "svelte";
  import { tabsContext, selectedIndex, tabCount } from "./Tabs.svelte";

  const { tabKey, panelKey, registerTab, select, keyupEventListener } =
    getContext(tabsContext);
  const tabIndex = $tabCount;
  const tabId = `${tabKey}-${tabIndex}`;
  const panelId = `${panelKey}-${tabIndex}`;

  $: isSelected = $selectedIndex === tabIndex;

  registerTab();
</script>

<button
  id={tabId}
  role="tab"
  aria-controls={panelId}
  tabindex={isSelected ? 0 : -1}
  aria-selected={isSelected}
  class:selected={isSelected}
  on:click={() => select(tabIndex)}
  on:keyup={keyupEventListener}
>
  <slot />
</button>

<style>
  button {
    position: relative;
    background: none;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: var(--primaryContrast);
    background-color: var(--primary);
    outline: none;
  }

  button:focus {
    z-index: 1;
    box-shadow: var(--focusOutlineShadow);
  }

  button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: var(--primaryContrast);
    transform: translateY(100%);
  }

  button.selected {
    background-color: var(--primaryDarkest);
  }
  button.selected::after {
    transform: translateY(0%);
    transition: transform 150ms ease-in;
  }
</style>
