<script>
  import { User } from "sveltefire";
  import { redirectIfNoUser } from "../../../firebase.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import Button from "../../ui/Button/Button.svelte";
  import FormError from "../../ui/Form/FormError.svelte";
  import EnvelopeExlcamationIcon from "../../ui/Icons/EnvelopeExlcamationIcon.svelte";
  import PaperAirplaneIcon from "../../ui/Icons/PaperAirplaneIcon.svelte";

  let verificationSent = false;
  let error = "";

  function handleSendVerification(user) {
    error = "";
    user.sendEmailVerification().then(
      () => (verificationSent = true),
      ({ message }) => (error = message)
    );
  }
</script>

<AppHeader title="Verify email" />
<User
  let:auth
  let:user
  persist={localStorage}
  on:user={(e) => redirectIfNoUser(e.detail.user)}
>
  <div class="wrapper">
    {#if !verificationSent}
      <div class="icon">
        <EnvelopeExlcamationIcon />
      </div>

      <p>Please verify your email to continue using the app</p>
    {:else}
      <div class="icon">
        <PaperAirplaneIcon />
      </div>

      <p>A verification email has been sent to <strong>{user.email}</strong></p>
    {/if}
    <div class="buttons">
      {#if !verificationSent}
        <Button variant="default" on:click={() => handleSendVerification(user)}
          >Re-send verification email</Button
        >
      {/if}
      <Button variant="default" on:click={() => auth.signOut()}
        >To sign in</Button
      >
    </div>
    <FormError message={error} />
  </div>
</User>

<style>
  .wrapper {
    padding: var(--contentPaddingHorizontal);
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 1.5rem;
    text-align: center;
    flex-grow: 1;
  }

  .icon {
    max-width: 10rem;
    height: auto;
    margin: 0 auto;
    opacity: 0.75;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  strong {
    display: block;
  }

  p {
    margin-bottom: 0;
  }
</style>
