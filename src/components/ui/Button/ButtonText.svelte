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
  button:hover,
  button:active {
    text-decoration: underline;
  }
  button:active {
    color: var(--primary);
  }
</style>

<button {type} on:click>
  <slot>Button</slot>
</button>
