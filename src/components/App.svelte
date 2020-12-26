<script>
  import { Router, Route } from "svelte-routing";
  import AppHeader from "./app/AppHeader.svelte";
  import SongsList from "./app/SongsList/SongsList.svelte";
  import Song from "./app/Song/Song.svelte";
  import songs from "../songs.js";
  import { theme } from "../theme.js";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<Router {url}>
  <main style={cssVarStyles}>
    <Route path="/">
      <AppHeader title="Songs I Know" />
      <SongsList {songs} />
    </Route>

    <Route path="/song/:id" let:params>
      <Song id={params.id} />
    </Route>
  </main>
</Router>
