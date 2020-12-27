<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./app/Pages/HomePage.svelte";
  import SongAddPage from "./app/Pages/SongAddPage.svelte";
  import SongEditPage from "./app/Pages/SongEditPage.svelte";
  import SongViewPage from "./app/Pages/SongViewPage.svelte";
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  :global(a) {
    text-decoration: none;
    color: inherit;
    display: block;
  }
</style>

<Router {url}>
  <main style={cssVarStyles}>
    <Route path="/">
      <HomePage />
    </Route>

    <Route path="/song/:id" let:params>
      <SongViewPage id={params.id} />
    </Route>

    <Route path="/add">
      <SongAddPage />
    </Route>

    <Route path="/song/:id/edit" let:params>
      <SongEditPage id={params.id} />
    </Route>
  </main>
</Router>
