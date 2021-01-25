<script>
  export let type = "button";
  export let disabled = false;
</script>

<button {type} {disabled} on:click>
  <slot>Button</slot>
</button>

<style>
  button {
    display: inline-block;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    transition: transform 150ms ease-out;
  }
  button:focus {
    outline: var(--focusOutline);
  }
  button:active {
    transform: scale(0.95);
  }
  button[disabled] {
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
