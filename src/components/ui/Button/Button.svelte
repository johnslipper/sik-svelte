<script>
  export let type = "button";
  export let variant = "";
  export let disabled = false;
</script>

<button {type} {disabled} on:click class={variant} {...$$restProps}>
  <slot>Button</slot>
</button>

<style>
  button {
    --buttonPadding: 0;
    --buttonBorderRadius: 0;
    --buttonFontSize: inherit;
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: transparent;
    --buttonColor: inherit;
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: transparent;
    --buttonActiveColor: inherit;

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
    outline: var(--focusOutline);
    box-shadow: var(--focusOutlineShadow);
  }

  button:active {
    color: var(--buttonActiveColor);
    border-color: var(--buttonActiveBorderColor);
    background: var(--buttonActiveBackgroundColor);
    transform: scale(0.95);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  button.text {
    --buttonPadding: 0.6rem 1rem;
    --buttonActiveColor: var(--primaryContrast);
  }

  button.default {
    --buttonPadding: 0.6rem 1rem;
    --buttonBorderRadius: 0.25rem;
    --buttonFontSize: 0.85rem;
    --buttonBorderColor: var(--neutralMedium);
    --buttonBackgroundColor: var(--primaryContrast);
    --buttonColor: inherit;
    --buttonActiveBorderColor: var(--primary);
    --buttonActiveBackgroundColor: var(--primaryContrast);
    --buttonActiveColor: var(--primary);
  }

  button.primary {
    --buttonPadding: 0.6rem 1rem;
    --buttonBorderRadius: 0.25rem;
    --buttonFontSize: 0.85rem;
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: var(--primary);
    --buttonColor: var(--primaryContrast);
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: var(--primaryDark);
    --buttonActiveColor: var(--primaryContrast);
  }

  button.danger {
    --buttonPadding: 0.6rem 1rem;
    --buttonBorderRadius: 0.25rem;
    --buttonFontSize: 0.85rem;
    --buttonBorderColor: transparent;
    --buttonBackgroundColor: var(--danger);
    --buttonColor: var(--primaryContrast);
    --buttonActiveBorderColor: transparent;
    --buttonActiveBackgroundColor: var(--dangerDark);
    --buttonActiveColor: var(--primaryContrast);
  }
</style>
