<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Logo from "../Logo/Logo.svelte";
  import { navigate } from "svelte-navigator";

  onMount(() => {
    window.setTimeout(() => navigate("/songs", { replace: true }), 3500);
  });
</script>

<div class="wrapper" in:fade>
  <Logo />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    width: 100%;
  }
</style>
