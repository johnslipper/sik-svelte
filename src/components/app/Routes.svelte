<script>
  import { Route } from "svelte-routing";
  import {
    HomePage,
    IntroPage,
    SettingsPage,
    SongAddPage,
    SongEditPage,
    SongViewPage,
  } from "./Pages";
</script>

<Route path="/songs">
  <HomePage />
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
