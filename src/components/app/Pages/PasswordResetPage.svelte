<script>
  import { User } from "sveltefire";
  import { redirectIfUser } from "../../../firebase.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import PaperAirplaneIcon from "../../ui/Icons/PaperAirplaneIcon.svelte";
  import { Button, ButtonLink } from "../../ui/Button";
  import {
    Form,
    FormGroup,
    LabelDefault,
    Input,
    FormError,
  } from "../../ui/Form/";

  let email;
  let error = "";
  let isSent = false;

  function handleSubmit(auth) {
    resetError();
    auth.sendPasswordResetEmail(email).then(
      () => (isSent = true),
      ({ message }) => (error = message)
    );
  }

  function resetError() {
    error = "";
  }
</script>

<AppHeader title="Reset password" />
<User
  let:auth
  persist={localStorage}
  on:user={(e) => redirectIfUser(e.detail.user)}
>
  <div class="wrapper" slot="signed-out">
    {#if isSent}
      <div class="success">
        <div class="icon">
          <PaperAirplaneIcon />
        </div>

        <p>A password reset email has been sent to <strong>{email}</strong></p>
        <div class="actions">
          <ButtonLink variant="default" to="/sign-in"
            >To sign in page</ButtonLink
          >
        </div>
      </div>
    {:else}
      <Form onSubmit={() => handleSubmit(auth)}>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="resetEmail">Email</LabelDefault>
            <Input
              id="resetEmail"
              required="true"
              type="email"
              bind:value={email}
              on:blur={resetError}
            />
          </FormGroup>
          <div class="buttons">
            <Button variant="primary" type="submit">Reset password</Button>
            <ButtonLink to="/sign-in">To sign in</ButtonLink>
          </div>
          <FormError message={error} />
        </div>
      </Form>
    {/if}
  </div>
</User>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: var(--contentPaddingHorizontal);
    flex-grow: 1;
  }
  .form {
    display: grid;
    gap: 0.75rem;
  }
  .buttons {
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
  }
  .success {
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 1.5rem;
    text-align: center;
    flex-grow: 1;
  }
  .actions {
    display: flex;
    justify-content: center;
  }
  .icon {
    width: 10rem;
    height: auto;
    margin: 0 auto;
    opacity: 0.75;
  }
</style>
