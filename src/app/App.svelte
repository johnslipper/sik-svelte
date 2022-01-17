<script lang="ts">
  import { Router } from "svelte-navigator";
  import Modal from "svelte-simple-modal";
  import Toasts from "ui/Toasts/Toasts.svelte";

  import { theme } from "./theme";
  import Routes from "./Routes.svelte";
  import SongStorage from "./Song/SongStorage.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<Router {url}>
  <main style={cssVarStyles}>
    <SongStorage>
      <Modal>
        <Routes />
      </Modal>
    </SongStorage>
  </main>
</Router>
<Toasts />

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
  }
  :global(p) {
    margin-top: 0;
  }
</style>
