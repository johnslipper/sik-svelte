<script context="module">
  export const tabsContext = {};
  export const selectedIndex = writable(0);
  export const tabCount = writable(0);
  export const panelCount = writable(0);
</script>

<script>
  import { setContext, tick, onDestroy } from "svelte";
  import { writable } from "svelte/store";

  export let key = `tabs-${new Date().getTime()}`;
  const keyboardKeys = {
    left: "ArrowLeft",
    right: "ArrowRight",
  };

  function keyupEventListener(event) {
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
  function switchTabOnArrowPress(event) {
    const pressed = event.key;
    const direction = pressed === keyboardKeys.left ? -1 : 1;
    const tabElements = document.querySelectorAll(`#${key} [role="tab"]`);
    const currentTab = event.target;
    const currentTabIndex = Array.from(tabElements).indexOf(currentTab);
    const destinationTab = tabElements[currentTabIndex + direction];

    destinationTab?.focus();
  }

  function focusPanel(panelIndex) {
    const tabElements = document.querySelectorAll(`#${key} [role="tabpanel"]`);
    const destinationPanel = tabElements[panelIndex];
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

    select: async (index) => {
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
