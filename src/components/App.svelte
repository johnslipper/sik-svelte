<script>
  import { Router } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import { FirebaseApp } from "sveltefire";
  import { config } from "../firebase.js";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import Toasts from "../components/ui/Toasts/Toasts.svelte";

  firebase
    .initializeApp(config)
    .firestore()
    .enablePersistence()
    .catch((err) => {
      if (err.code === "failed-precondition") {
        alert("Multiple app tabs are open, offine mode disabled");
      } else if (err.code === "unimplemented") {
        alert(
          "The current browser does not support all of the features required to enable offline mode"
        );
      }
    });
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
      <Modal>
        <Routes />
      </Modal>
    </main>
  </Router>
</FirebaseApp>
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
