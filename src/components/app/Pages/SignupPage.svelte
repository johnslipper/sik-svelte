<script>
  import { User } from "sveltefire";
  import { redirectIfUser } from "../../../firebase.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import { ButtonPrimary, ButtonLink } from "../../ui/Button";
  import {
    Form,
    FormGroup,
    LabelDefault,
    Input,
    FormError,
  } from "../../ui/Form/";

  let email;
  let password;
  let error = "";
  let isLoading = false;

  function handleSubmit(auth) {
    clearError();
    isLoading = true;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(null, ({ message }) => (error = message))
      .finally(() => (isLoading = false));
  }

  function clearError() {
    error = "";
  }
</script>

<AppHeader>Sign up</AppHeader>
<User
  let:auth
  persist={localStorage}
  on:user={(e) => redirectIfUser(e.detail.user)}
>
  <div slot="signed-out">
    <div class="wrapper">
      <Form onSubmit={() => handleSubmit(auth)}>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="signInEmail">Email</LabelDefault>
            <Input
              id="signInEmail"
              required="true"
              type="email"
              bind:value={email}
              on:blur={clearError}
            />
          </FormGroup>
          <FormGroup>
            <LabelDefault htmlFor="signInPassword">Password</LabelDefault>
            <Input
              id="signInPassword"
              type="password"
              bind:value={password}
              on:blur={clearError}
              required="true"
            />
          </FormGroup>
          <div class="buttons">
            <ButtonPrimary type="submit" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign up"}
            </ButtonPrimary>
            <ButtonLink to="/sign-in">To sign in</ButtonLink>
          </div>
          {#if error}
            <FormError message={error} />
          {/if}
        </div>
      </Form>
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
