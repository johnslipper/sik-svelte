<script>
  import Icon from "./Icons/Icon.svelte";
  import { plusIcon } from "./Icons/icons.js";
  const SLOTS = $$props.$$slots;
  export let text = "";
</script>

<style>
  .add {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
    color: var(--neutralMedium);
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 0.15rem;
    border: 2px dashed var(--neutralLight);
    text-align: center;
  }
</style>

<div class="add">
  {#if SLOTS && SLOTS.default}
    <slot />
  {:else}
    <Icon d={plusIcon} size="1.25rem" />
    {text}
  {/if}
</div>
