<script lang="ts">
  import { Router } from "svelte-navigator";
  import Modal from "svelte-simple-modal";
  import Toasts from "ui/Toasts/Toasts.svelte";

  import { theme } from "./theme";
  import Routes from "./Routes.svelte";
  import SongStoreContext from "./Song/SongStoreContext.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<Router {url}>
  <main style={cssVarStyles}>
    <SongStoreContext>
      <Modal>
        <Routes />
      </Modal>
    </SongStoreContext>
  </main>
</Router>
<Toasts />

<style>
  :global(html, body) {
    height: 100%;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 500;
  }

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

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001s !important;
      transition-duration: 0.001s !important;
    }
  }
</style>
