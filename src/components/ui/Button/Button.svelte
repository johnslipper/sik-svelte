<script>
  export let type = "button";
</script>

<style>
  button {
    color: inherit;
    background: none;
    border: none;
    padding: 0;
  }
  button:focus {
    outline: var(--focusOutline);
  }
</style>

<button {type} on:click>
  <slot>Button</slot>
</button>
