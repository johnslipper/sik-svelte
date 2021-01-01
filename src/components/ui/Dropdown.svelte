<script>
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import Button from "../ui/Button/Button.svelte";
  export let position = "bottom";

  let show = false; // menu state
  let menu = null; // menu wrapper DOM reference

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (show && !menu.contains(event.target)) {
        show = false;
      }
    };

    const handleEscape = (event) => {
      if (show && event.key === "Escape") {
        show = false;
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

<style>
  .wrapper {
    position: relative;
  }
  .content {
    position: absolute;
    left: 0;
    z-index: var(--dropdownZindex);
    background-color: var(--dropdownBackgroundColor);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -2px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    border: 1px solid var(--neutralLightest);
  }
  .top {
    top: 0;
  }

  .center {
    top: 50%;
    transform: translateY(-50%);
  }
</style>

<div class="wrapper" bind:this={menu}>
  <Button on:click={() => (show = !show)}>
    <slot />
  </Button>

  {#if show}
    <div
      class="
        content
        {position === 'top' ? 'top' : ''}
        {position === 'center' ? 'center' : ''}
        "
      in:scale={{ duration: 100, start: 0.95 }}
      out:scale={{ duration: 75, start: 0.95 }}>
      <slot name="content" />
    </div>
  {/if}
</div>
