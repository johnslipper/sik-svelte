<script>
  import { User } from "sveltefire";
  import { navigate } from "svelte-routing";
  import AppHeader from "../../ui/AppHeader.svelte";
  import { ButtonDefault, ButtonPrimary } from "../../ui/Button";
  import { Form, FormGroup, LabelDefault, Input } from "../../ui/Form/";

  let email;
  let password;

  function handleUser(user) {
    if (user && user.uid) {
      navigate(`/songs`);
    }
  }
</script>

<AppHeader>Login</AppHeader>
<User
  let:auth
  let:user
  persist={sessionStorage}
  on:user={(e) => handleUser(e.detail.user)}
>
  <div class="wrapper">
    Howdy 😀! <em>{user.email}</em>
  </div>
  <div class="wrapper">
    <ButtonDefault on:click={() => auth.signOut()}>Log out</ButtonDefault>
  </div>
  <div slot="signed-out">
    <div class="wrapper">
      <Form onSubmit={() => auth.signInWithEmailAndPassword(email, password)}>
        <div class="form">
          <FormGroup>
            <LabelDefault htmlFor="loginEmail">Email</LabelDefault>
            <Input id="loginEmail" bind:value={email} required="true" />
          </FormGroup>
          <FormGroup>
            <LabelDefault htmlFor="loginPassword">Password</LabelDefault>
            <Input
              id="loginPassword"
              type="password"
              bind:value={password}
              required="true"
            />
          </FormGroup>
          <ButtonPrimary type="submit">Login</ButtonPrimary>
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
    gap: 0.5rem;
  }
</style>
