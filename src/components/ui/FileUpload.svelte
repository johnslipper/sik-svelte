<script>
  export let accept = "";
  export let label = "Select file";
</script>

<label>
  {label}
  <input type="file" on:change {accept} />
</label>

<style>
  label {
    --buttonPadding: 0.6rem 1rem;
    --buttonBorderRadius: 0.25rem;
    --buttonFontSize: 0.85rem;
    --buttonBorderColor: var(--neutralMedium);
    --buttonBackgroundColor: var(--primaryContrast);
    --buttonColor: inherit;
    --buttonActiveBorderColor: var(--primary);
    --buttonActiveBackgroundColor: var(--primaryContrast);
    --buttonActiveColor: var(--primary);

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

  label:focus,
  label:focus-within {
    outline: var(--focusOutline);
    box-shadow: var(--focusOutlineShadow);
  }
  label:active {
    color: var(--buttonActiveColor);
    border-color: var(--buttonActiveBorderColor);
    background: var(--buttonActiveBackgroundColor);
    transform: scale(0.95);
  }

  input[type="file"] {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
