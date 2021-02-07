<script>
  import { getContext } from "svelte";
  import { Button } from "../Button";
  export let message;
  export let title = "";
  export let showOkayButton = true;
  export let showCancelButton = true;
  export let okayText = "OK";
  export let cancelText = "Cancel";
  export let onCancel = () => {};
  export let onOkay = () => {};

  const { close } = getContext("simple-modal");

  function _onCancel() {
    onCancel();
    close();
  }

  function _onOkay() {
    onOkay();
    close();
  }
</script>

{#if title}
  <h2>{title}</h2>
{/if}

<div class="message">{message}</div>

<div class="buttons">
  {#if showOkayButton}
    <Button variant="primary" on:click={_onOkay}>{okayText}</Button>
  {/if}
  {#if showCancelButton}
    <Button variant="default" on:click={_onCancel}>{cancelText}</Button>
  {/if}
</div>

<style>
  h2 {
    font-size: 2rem;
  }

  .message {
    padding-right: 2rem;
    padding-bottom: 1rem;
  }
  .buttons :global(button) {
    min-width: 4rem;
  }
</style>
