<script>
  export let type = "button";
</script>

<button {type} on:click>
  <slot>Button</slot>
</button>

<style>
  button {
    display: inline-block;
    color: var(--buttonColor);
    background: var(--buttonBackgroundColor);
    border: 1px solid var(--buttonBorderColor);
    padding: var(--buttonPadding);
    border-radius: var(--buttonBorderRadius);
    outline: none;
    transition: background-color 150ms, transform 150ms;
    font-size: var(--buttonFontSize);
    text-transform: uppercase;
  }
  button:focus {
    box-shadow: var(--focusOutlineShadow);
  }
  button:active {
    color: var(--buttonActiveColor);
    border-color: var(--buttonActiveBorderColor);
    transform: scale(0.95);
  }
</style>
