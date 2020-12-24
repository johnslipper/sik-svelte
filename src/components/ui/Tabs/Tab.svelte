<script>
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

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

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <slot />
</button>
