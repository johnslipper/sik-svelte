<script>
  export let type = "button";
</script>

<button {type} on:click>
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
</style>
