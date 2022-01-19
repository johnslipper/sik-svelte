<script lang="ts">
  import Heading from "../../ui/Heading/Heading.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Logo from "../Logo/Logo.svelte";
  import { navigate } from "svelte-navigator";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";

  onMount(() => {
    window.setTimeout(() => navigate("/songs", { replace: true }), 1750);
  });
</script>

<div class="wrapper" in:fade>
  <VisuallyHidden>
    <Heading>Introduction</Heading>
  </VisuallyHidden>
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
