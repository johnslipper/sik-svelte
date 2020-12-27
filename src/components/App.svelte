<script>
  import { fade } from "svelte/transition";
  import { Router, Route } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import AppHeader from "./ui/AppHeader.svelte";
  import SongsList from "./app/SongsList/SongsList.svelte";
  import Song from "./app/Song/Song.svelte";
  import SongEdit from "./app/SongEdit/SongEdit.svelte";
  import HomeLink from "./app/HomeLink.svelte";
  import AddSongLink from "./app/AddSongLink.svelte";
  import VisuallyHidden from "./ui/VisuallyHidden.svelte";
  import songs from "../songs.js";
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
      <AppHeader title="Songs I Know">
        <div slot="end" in:fade>
          <AddSongLink>
            <span>Add</span>
            <VisuallyHidden>Song</VisuallyHidden>
          </AddSongLink>
        </div>
      </AppHeader>
      <SongsList {songs} />
    </Route>

    <Route path="/song/:id" let:params>
      <Song id={params.id} />
    </Route>

    <Route path="/add">
      <Modal>
        <AppHeader title="Add song">
          <div slot="start" in:fade>
            <HomeLink>
              <VisuallyHidden>back to</VisuallyHidden>
              <span>Songs</span>
            </HomeLink>
          </div>
        </AppHeader>
        <SongEdit />
      </Modal>
    </Route>
  </main>
</Router>
