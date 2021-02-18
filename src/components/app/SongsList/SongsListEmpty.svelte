<script>
  import { fade } from "svelte/transition";
  import LogoMark from "../Logo/LogoMark.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon } from "../../ui/Icons/icons.js";
</script>

<div class="wrapper" in:fade>
  <div class="logo">
    <LogoMark />
  </div>
  <p>
    No songs currently saved. <br />
    Use the <Icon path={plusIcon} size="0.8rem" />
    <VisuallyHidden>plus</VisuallyHidden> button to get started.
  </p>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 0 var(--contentPaddingHorizontal);
  }
  .logo {
    opacity: 0.1;
    padding: 1rem 0;
    max-width: 10rem;
    margin-left: auto;
    margin-right: auto;
  }
  .logo :global(svg) {
    --logoStroke: var(--primaryDark);
  }
  p {
    color: var(--bodyColorMuted);
    text-align: center;
  }
</style>
