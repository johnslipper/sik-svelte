<script lang="ts">
  import { getContext } from "svelte";
  import { Button } from "../Button";
  import { Form, FormError, FormGroup, Input, LabelDefault } from "../Form";
  export let message: string;
  export let title: string = undefined;
  export let okayText = "OK";
  export let cancelText = "Cancel";
  export let onCancel = () => {};
  export let onOkay = () => {};
  export let confirmationText: string = undefined;

  let confirmationInput: string;
  let error: string;
  const { close } = getContext("simple-modal");

  $: confirmationValid = confirmationInput === confirmationText;

  function _onCancel() {
    onCancel();
    close();
  }

  function _onOkay() {
    if (confirmationValid) {
      onOkay();
      close();
    } else {
      error = `Please type "${confirmationText}" into the box to confirm`;
    }
  }

  function clearError() {
    error = undefined;
  }
</script>

<div role="alertdialog">
  {#if title}
    <h2>{title}</h2>
  {/if}

  <div class="message">{message}</div>

  <Form onSubmit={_onOkay}>
    <div class="form">
      <div class="fields">
        <FormGroup>
          <LabelDefault htmlFor="confirmationText"
            >Confirm by typing "<strong>{confirmationText}</strong>" below</LabelDefault
          >
          <Input
            id="confirmationText"
            bind:value={confirmationInput}
            placeholder={confirmationText}
            on:blur={clearError}
          />
        </FormGroup>
      </div>

      <FormError message={error} />

      <div class="buttons">
        <Button variant="danger" type="submit">{okayText}</Button>
        <Button variant="default" on:click={_onCancel}>{cancelText}</Button>
      </div>
    </div>
  </Form>
</div>

<style>
  h2 {
    font-size: 2rem;
  }

  .message {
    padding-right: 2rem;
    padding-bottom: 1rem;
  }

  .form {
    display: grid;
    gap: 0.75rem;
  }

  .fields :global(label) {
    background-color: var(--danger);
    font-size: 0.85em;
  }

  .fields :global(input) {
    --inputBorderColor: var(--danger);
  }

  .buttons :global(button) {
    min-width: 4rem;
  }

  strong {
    text-transform: none;
  }
</style>
