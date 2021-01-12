<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./app/Pages/HomePage.svelte";
  import IntroPage from "./app/Pages/IntroPage.svelte";
  import SongAddPage from "./app/Pages/SongAddPage.svelte";
  import SongEditPage from "./app/Pages/SongEditPage.svelte";
  import SongViewPage from "./app/Pages/SongViewPage.svelte";
  import SettingsPage from "./app/Pages/SettingsPage.svelte";
  import { theme } from "../theme.js";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(main) {
    color: var(--bodyColor);
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  :global(a) {
    text-decoration: none;
    color: inherit;
    display: block;
  }
</style>

<Router {url}>
  <main style={cssVarStyles}>
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
  </main>
</Router>
