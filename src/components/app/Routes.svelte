<script>
  import { Route } from "svelte-navigator";
  import {
    SongsPage,
    IntroPage,
    SettingsPage,
    SongAddPage,
    SongEditPage,
    SongViewPage,
    SignInPage,
    PasswordResetPage,
    SignupPage,
    VerifyPage,
  } from "./Pages";
</script>

<Route path="/songs">
  <SongsPage />
</Route>

<Route path="/">
  <IntroPage />
</Route>

<Route path="/songs/:id" let:params>
  <SongViewPage id={params.id} />
</Route>

<Route path="/add">
  <SongAddPage />
</Route>

<Route path="/songs/:id/edit" let:params>
  <SongEditPage id={params.id} />
</Route>

<Route path="/settings">
  <SettingsPage />
</Route>

<Route path="/sign-in">
  <SignInPage />
</Route>

<Route path="/password-reset">
  <PasswordResetPage />
</Route>

<Route path="/sign-up">
  <SignupPage />
</Route>

<Route path="/verify">
  <VerifyPage />
</Route>
