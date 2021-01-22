<script>
  import { Router } from "svelte-routing";
  
  import { FirebaseApp } from "sveltefire";
  import { config } from "../firebase.js";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";

  firebase.initializeApp(config);
  import { theme } from "../theme.js";
  import Routes from "./app/Routes.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  $: cssVarStyles = Object.entries(theme)
    .map(([key, value]) => `--${key}:${value}`)
    .join(";");
</script>

<FirebaseApp {firebase}>
<Router {url}>
  <main style={cssVarStyles}>
    <Routes />
  </main>
</Router>
</FirebaseApp>

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
