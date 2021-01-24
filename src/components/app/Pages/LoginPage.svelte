<script>
  import { User } from "sveltefire";
  import { navigate } from "svelte-routing";
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

  function handleUser(user) {
    if (user && user.uid) {
      navigate(`/songs`);
    }
  }

  function handleSubmit(auth) {
    clearError();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(null, ({ message }) => (error = message));
  }

  function clearError() {
    error = "";
  }
</script>

<AppHeader>Login</AppHeader>
<User
  let:auth
  let:user
  persist={sessionStorage}
  on:user={(e) => handleUser(e.detail.user)}
>
  <div slot="signed-out">
    <div class="wrapper">
      <Form onSubmit={() => handleSubmit(auth)}>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="loginEmail">Email</LabelDefault>
            <Input
              id="loginEmail"
              required="true"
              bind:value={email}
              on:blur={clearError}
            />
          </FormGroup>
          <FormGroup>
            <LabelDefault htmlFor="loginPassword">Password</LabelDefault>
            <Input
              id="loginPassword"
              type="password"
              bind:value={password}
              on:blur={clearError}
              required="true"
            />
          </FormGroup>
          <ButtonPrimary type="submit">Login</ButtonPrimary>
          <ButtonLink on:click={() => auth.sendPasswordResetEmail(email)}
            >Reset</ButtonLink
          >
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
</style>
