<script>
  import { User } from "sveltefire";
  import { redirectIfUser } from "../../../firebase.js";
  import AppHeader from "../../ui/AppHeader.svelte";
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

<AppHeader>Reset password</AppHeader>
<User
  let:auth
  persist={localStorage}
  on:user={(e) => redirectIfUser(e.detail.user)}
>
  <div slot="signed-out">
    <div class="wrapper">
      {#if isSent}
        <p>A password reset email has been sent, check your inbox</p>
        <ButtonLink variant="default" to="/sign-in">To sign in page</ButtonLink>
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
  </div>
</User>

<style>
  .wrapper {
    padding: 1rem;
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
</style>
