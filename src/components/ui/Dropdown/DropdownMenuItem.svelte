<script>
  import { getContext } from "svelte";
  import { dropdownContext } from "./Dropdown.svelte";
  export let onSelected;

  const { hideMenu, menuItemKeyupListener } = getContext(dropdownContext);

  const keyCodes = {
    enter: 13,
  };

  function handleSelected() {
    hideMenu();
    onSelected();
  }

  function handleKeyUp(event) {
    const keyCode = event.keyCode;
    if (keyCode === keyCodes.enter) {
      handleSelected();
    }
    menuItemKeyupListener(event);
  }
</script>

<li
  on:click={handleSelected}
  role="menuitem"
  tabindex="-1"
  on:keyup={handleKeyUp}
>
  <slot />
</li>

<style>
  li {
    cursor: pointer;
    padding: 1rem;
  }
</style>
