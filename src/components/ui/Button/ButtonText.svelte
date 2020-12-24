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

<button on:click>
  <slot>Button</slot>
</button>
