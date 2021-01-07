<script>
  export let type = "button";
</script>

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

<button {type} on:click>
  <slot>Button</slot>
</button>
