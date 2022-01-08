<script>
  import { getContext } from "svelte";
  import { dropdownContext } from "./Dropdown.svelte";
  export let onSelected;

  const { hideMenu, menuItemKeydownListener } = getContext(dropdownContext);

  const keyCodes = {
    enter: 13,
  };

  function handleSelected() {
    hideMenu();
    onSelected();
  }

  function handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === keyCodes.enter) {
      handleSelected();
    }
    menuItemKeydownListener(event);
  }
</script>

<li
  on:click={handleSelected}
  role="menuitem"
  tabindex="-1"
  on:keydown={handleKeydown}
>
  <slot />
</li>

<style>
  li {
    cursor: pointer;
    padding: 1rem;
  }
</style>
