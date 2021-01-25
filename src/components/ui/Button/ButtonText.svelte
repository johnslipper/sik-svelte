<script>
  export let type = "button";
  export let disabled = false;
</script>

<button {type} {disabled} on:click>
  <slot>Button</slot>
</button>

<style>
  button {
    color: inherit;
    background: none;
    border: none;
    padding: var(--buttonPadding);
    text-transform: uppercase;
    font-size: var(--buttonFontSize);
    transition: transform 150ms;
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
