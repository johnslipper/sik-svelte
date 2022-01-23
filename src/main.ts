import App from "./app/App.svelte";
import { registerSW } from "virtual:pwa-register";

const app = new App({
  target: document.body,
});

// Register service worker
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("A new version is available, update now?")) {
      updateSW();
    }
  },
  onOfflineReady() {
    alert("Offline mode is now ready!");
  },
});

export default app;
