<style>
  button {
    color: var(--primaryContrast);
    background: var(--primary);
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    outline: none;
    transition: background-color 150ms, transform 150ms;
    font-size: 1rem;
  }
  button:focus {
    box-shadow: var(--focusOutlineShadow);
  }
  button:active {
    background-color: var(--primaryDark);
    transform: scale(0.95);
  }
</style>

<button on:click>
  <slot>Button</slot>
</button>
