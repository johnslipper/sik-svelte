<script lang="ts">
  export let id: string = undefined;
  export let name = "";
  export let placeholder = "";
  export let maxlength = 4000;
  export let disabled = false;
  export let value: string = undefined;
</script>

<div class="wrapper">
  <textarea {id} {name} {placeholder} {maxlength} {disabled} bind:value />
</div>

<style>
  textarea {
    outline: none;
    font-size: 1rem;
    padding: var(--inputPadding);
    min-height: 10rem;
    height: 100%;
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
  }
  textarea:focus {
    box-shadow: var(--focusOutlineShadow);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 80vh;
    max-height: 40rem;
  }
</style>
