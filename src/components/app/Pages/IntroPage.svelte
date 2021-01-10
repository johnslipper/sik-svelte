<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Logo from "../Logo/Logo.svelte";
  import { navigate } from "svelte-routing";

  onMount(() => {
    window.setTimeout(() => navigate("/songs", { replace: true }), 3500);
  });
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    width: 100%;
  }
</style>

<div class="wrapper" in:fade out:fade>
  <Logo />
</div>
