<style>
  button {
    color: inherit;
    background: none;
    border: none;
    padding: 0;
  }
  button:focus {
    outline: 0.15rem solid var(--primary);
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
