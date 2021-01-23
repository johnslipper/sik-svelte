<script>
  export let id;
  export let name = "";
  export let placeholder = "";
  export let maxlength = 255;
  export let disabled = false;
  export let value;
</script>

<div class="growWrap">
  <textarea
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    bind:value
    onInput="this.parentNode.dataset.replicatedValue = this.value"
  />
</div>

<style>
  textarea {
    outline: none;
    font-size: 1rem;
    padding: var(--inputPadding);
    min-height: 6rem;
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
  }
  textarea:focus {
    box-shadow: var(--focusOutlineShadow);
  }

  /* Auto growing textarea (https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/) */
  .growWrap {
    /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
    display: grid;
  }
  .growWrap::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;
  }
  .growWrap > textarea {
    /* You could leave this, but after a user resizes, then it ruins the auto sizing */
    resize: none;

    /* Firefox shows scrollbar on growth, you can hide like this. */
    overflow: hidden;
  }
  .growWrap > textarea,
  .growWrap::after {
    /* Identical styling required!! */
    font-size: 1rem;
    padding: var(--inputPadding);
    min-height: 6rem;
    border: 1px solid var(--inputBorderColor);
    font: inherit;

    /* Place on top of each other */
    grid-area: 1 / 1 / 2 / 2;
  }
</style>
