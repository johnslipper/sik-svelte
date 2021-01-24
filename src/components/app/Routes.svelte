<script>
  import { Route } from "svelte-routing";
  import {
    SongsPage,
    IntroPage,
    SettingsPage,
    SongAddPage,
    SongEditPage,
    SongViewPage,
    LoginPage,
    PasswordResetPage,
    SignupPage,
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

<Route path="/login">
  <LoginPage />
</Route>

<Route path="/password-reset">
  <PasswordResetPage />
</Route>

<Route path="/signup">
  <SignupPage />
</Route>
