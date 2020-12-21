import App from "./components/App.svelte";

const app = new App({
  target: document.body,
  hydratable: true,
});

export default app;
