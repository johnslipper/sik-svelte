<script>
  import { Router } from "svelte-routing";
  import { theme } from "../theme.js";
  import Routes from "./app/Routes.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<Router {url}>
  <main style={cssVarStyles}>
    <Routes />
  </main>
</Router>

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
