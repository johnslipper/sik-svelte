<script>
  import { User } from "sveltefire";
  import { redirectIfUser } from "../../../firebase.js";
  import { string, object } from "yup";
  import AppHeader from "../../ui/AppHeader.svelte";
  import { ButtonPrimary, ButtonLink } from "../../ui/Button";
  import {
    Form,
    FormGroup,
    LabelDefault,
    Input,
    FormError,
  } from "../../ui/Form";

  let values = {};
  let error = "";
  let isLoading = false;

  const schema = object().shape({
    email: string()
      .required("Please provide your email")
      .email("That email doesn't look right"),
    password: string().required("Please provide your password"),
  });

  function handleSubmit(auth) {
    const { email, password } = values;
    clearError();
    isLoading = true;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(null, ({ message }) => (error = message))
      .finally(() => (isLoading = false));
  }

  function clearError() {
    error = "";
  }
</script>

<AppHeader>Sign in</AppHeader>
<User
  let:auth
  persist={localStorage}
  on:user={(e) => redirectIfUser(e.detail.user)}
>
  <div slot="signed-out">
    <div class="wrapper">
      <Form onSubmit={() => handleSubmit(auth)} {schema} {values} let:errors>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="email">Email</LabelDefault>
            <Input
              id="email"
              type="email"
              bind:value={values.email}
              on:blur={clearError}
            />
            <div slot="feedback"><FormError message={errors.email} /></div>
          </FormGroup>
          <FormGroup>
            <LabelDefault htmlFor="password">Password</LabelDefault>
            <Input
              id="password"
              type="password"
              bind:value={values.password}
              on:blur={clearError}
            />
            <div slot="feedback"><FormError message={errors.password} /></div>
          </FormGroup>
          <div class="buttons">
            <ButtonPrimary type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </ButtonPrimary>
            <ButtonLink to="/password-reset">Forgotten password?</ButtonLink>
          </div>
          <FormError message={error} />
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
