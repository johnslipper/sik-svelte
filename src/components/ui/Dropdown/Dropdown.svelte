<script context="module">
  export const dropdownContext = {};
</script>

<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import DropdownMenu from "./DropdownMenu.svelte";
  import Button from "../Button/Button.svelte";
  export let key = Math.floor(Math.random() * 100000);
  export let triggerId = `dropdown-trigger-${key}`;
  export let menuId = `dropdown-menu-${key}`;

  let menuElement;
  const menuIsVisible = writable(false);
  const focusedMenuItemIndex = writable(-1);

  const keyboardKeys = {
    up: "ArrowUp",
    down: "ArrowDown",
    enter: "Enter",
  };

  function showMenu() {
    menuIsVisible.set(true);
    setTimeout(() => focusFirstMenuItem(), 200);
  }

  function hideMenu() {
    menuIsVisible.set(false);
    focusedMenuItemIndex.set(-1);
    document.getElementById(triggerId)?.focus();
  }

  function toggleMenu() {
    $menuIsVisible ? hideMenu() : showMenu();
  }

  function focusMenuItem(index) {
    const menuItems = document.querySelectorAll(`#${menuId} [role="menuitem"]`);
    const destinationItem = menuItems[index];
    if (destinationItem) {
      destinationItem.focus();
      return true;
    }
  }

  function focusFirstMenuItem() {
    if (focusMenuItem(0)) {
      focusedMenuItemIndex.set(0);
    }
  }

  function focusNextMenuItem() {
    const next = $focusedMenuItemIndex + 1;
    if (focusMenuItem(next)) {
      focusedMenuItemIndex.set(next);
    }
  }

  function focusPreviousMenuItem() {
    const previous = $focusedMenuItemIndex - 1;
    if (focusMenuItem(previous)) {
      focusedMenuItemIndex.set(previous);
    }
  }

  function menuTriggerKeyupListener(event) {
    const keyboardKey = event.key;
    if (keyboardKey === keyboardKeys.down) {
      showMenu();
    }
  }

  function menuItemKeydownListener(event) {
    const keyboardKey = event.key;
    switch (keyboardKey) {
      case keyboardKeys.down:
        event.preventDefault();
        focusNextMenuItem();
        break;
      case keyboardKeys.up:
        event.preventDefault();
        focusPreviousMenuItem();
      default:
        break;
    }
  }

  setContext(dropdownContext, {
    showMenu,
    hideMenu,
    toggleMenu,
    menuItemKeydownListener,
  });

  onMount(() => {
    const handleOutsideClick = (event) => {
      if ($menuIsVisible && !menuElement.contains(event.target)) {
        hideMenu();
      }
    };

    const handleEscape = (event) => {
      if ($menuIsVisible && event.key === "Escape") {
        hideMenu();
      }
    };

    // add events when element is added to the DOM
    document.addEventListener("click", handleOutsideClick, false);
    document.addEventListener("keyup", handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
      document.removeEventListener("keyup", handleEscape, false);
    };
  });
</script>

<div class="wrapper" bind:this={menuElement}>
  <div class="button">
    <Button
      id={triggerId}
      aria-haspopup="true"
      aria-controls={menuId}
      aria-expanded={$menuIsVisible}
      on:click={toggleMenu}
      on:keyup={menuTriggerKeyupListener}
    >
      <slot />
    </Button>
  </div>

  <div class="menu" class:open={$menuIsVisible}>
    <DropdownMenu id={menuId} {triggerId} {...$$restProps}>
      <slot name="menu" />
    </DropdownMenu>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    --dropdownZndex: 2;
    --dropdownBackgroundColor: var(--primaryContrast);
    --dropdownBorderColor: var(--neutralLightest);
  }
  .button {
    display: flex;
  }
  .button :global(button) {
    flex-grow: 1;
  }
  .menu {
    display: none;
  }

  .menu.open {
    display: initial;
  }
</style>
