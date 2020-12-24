<style>
  button {
    color: inherit;
    background: var(--primaryContrast);
    border: 1px solid var(--neutralMedium);
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
    color: var(--primary);
    border-color: var(--primary);
    transform: scale(0.95);
  }
</style>

<button on:click>
  <slot>Button</slot>
</button>
