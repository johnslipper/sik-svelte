import App from "./components/App.svelte";

const app = new App({
  target: document.body,
  hydratable: true,
});

if (process.env.isProd && "serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

export default app;
