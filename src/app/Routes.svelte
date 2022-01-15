<script lang="ts">
  import { Route } from "svelte-navigator";
  import {
    SongsPage,
    IntroPage,
    SettingsPage,
    SongAddPage,
    SongEditPage,
    SongViewPage,
  } from "./Pages";
</script>

<Route path="/songs">
  <SongsPage />
</Route>

<Route path="/">
  <IntroPage />
</Route>

<Route path="/songs/:id" let:params>
  <SongViewPage id={Number(params.id)} />
</Route>

<Route path="/add">
  <SongAddPage />
</Route>

<Route path="/songs/:id/edit" let:params>
  <SongEditPage id={Number(params.id)} />
</Route>

<Route path="/settings">
  <SettingsPage />
</Route>
