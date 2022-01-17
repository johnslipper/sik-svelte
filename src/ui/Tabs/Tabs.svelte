<script lang="ts" context="module">
  export const tabsContext = {};
  export const selectedIndex = writable(0);
  export const tabCount = writable(0);
  export const panelCount = writable(0);
</script>

<script lang="ts">
  import { setContext, tick, onDestroy } from "svelte";
  import { writable } from "svelte/store";

  export let key = `tabs-${new Date().getTime()}`;
  const keyboardKeys = {
    left: "ArrowLeft",
    right: "ArrowRight",
  };

  function keyupEventListener(event: KeyboardEvent) {
    const keyboardKey = event.key;

    switch (keyboardKey) {
      case keyboardKeys.left:
      case keyboardKeys.right:
        switchTabOnArrowPress(event);
        break;
    }
  }

  // Either focus the next or previous, tab
  // depending on key pressed
  function switchTabOnArrowPress(event: KeyboardEvent) {
    const pressed = event.key;
    const direction = pressed === keyboardKeys.left ? -1 : 1;
    const tabElements = document.querySelectorAll(`#${key} [role="tab"]`);
    const currentTab = event.target as HTMLElement;
    const currentTabIndex = Array.from(tabElements).indexOf(currentTab);
    const destinationTab = tabElements[
      currentTabIndex + direction
    ] as HTMLElement;

    destinationTab?.focus();
  }

  function focusPanel(panelIndex: number) {
    const tabElements = document.querySelectorAll(`#${key} [role="tabpanel"]`);
    const destinationPanel = tabElements[panelIndex] as HTMLElement;
    if (destinationPanel) {
      destinationPanel?.focus();
    }
  }

  setContext(tabsContext, {
    tabKey: `${key}-tab`,
    panelkey: `${key}-panel`,
    registerTab: () => {
      tabCount.update((count) => count + 1);
    },

    registerPanel: () => {
      panelCount.update((count) => count + 1);
    },

    select: async (index: number) => {
      selectedIndex.set(index);
      await tick();
      focusPanel(index);
    },
    keyupEventListener,
  });

  onDestroy(() => {
    tabCount.set(0);
    panelCount.set(0);
    selectedIndex.set(0);
  });
</script>

<div id={key}>
  <slot />
</div>
