<script>
  import { fade } from "svelte/transition";
  import sampleSong from "../../../sampleSong.js";
  import LogoMark from "../Logo/LogoMark.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Button from "../../ui/Button/Button.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon } from "../../ui/Icons/icons.js";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";

  export let songsRef;
  export let user;

  function handleSampleSong() {
    songsRef.add({ ...sampleSong, uid: user.uid }).then(
      () => {
        infoToast("Song saved");
      },
      (error) => errorToast(`Song saving failed: ${error}`)
    );
  }
</script>

<div class="wrapper" in:fade>
  <div class="logo">
    <LogoMark />
  </div>
  <p>
    No songs currently saved <br />
    Use the <Icon path={plusIcon} size="0.8rem" />
    <VisuallyHidden>plus</VisuallyHidden> button to get started
  </p>
  <div class="actions">
    <Button variant="default" on:click={handleSampleSong}
      >Add a sample song</Button
    >
  </div>
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
  p,
  .actions {
    color: var(--bodyColorMuted);
  }
  p {
    text-align: center;
  }
  .actions {
    display: flex;
    margin: 0 auto;
  }
</style>
