<script>
  import { User } from "sveltefire";
  import { string, object } from "yup";
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

  let values = {};
  let error = "";
  let isLoading = false;

  const schema = object().shape({
    email: string()
      .required("Please provide your email")
      .email("That email doesn't look right"),
    password: string().min(6, "Password must be at least 6 characters"),
  });

  function handleSubmit(auth) {
    const { email, password } = values;
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
      <Form onSubmit={() => handleSubmit(auth)} {schema} {values} let:errors>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="signInEmail">Email</LabelDefault>
            <Input
              id="signInEmail"
              type="email"
              bind:value={values.email}
              on:blur={clearError}
            />
            <div slot="feedback"><FormError message={errors.email} /></div>
          </FormGroup>
          <FormGroup>
            <LabelDefault htmlFor="signInPassword">Password</LabelDefault>
            <Input
              id="signInPassword"
              type="password"
              bind:value={values.password}
              on:blur={clearError}
            />
            <div slot="feedback"><FormError message={errors.password} /></div>
          </FormGroup>
          <div class="buttons">
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>
            <ButtonLink to="/sign-in">To sign in</ButtonLink>
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
